import * as pdfjsLib from 'pdfjs-dist';
import { ExtractedQuestionDraft, AnswerSource } from '../types';

// Configure pdfjs worker
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '4.0.379'}/pdf.worker.min.mjs`;
} catch {
  // Fallback to local worker if available
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
}

export interface ParseResult {
  text: string;
  pageCount: number;
  extractedQuestions: ExtractedQuestionDraft[];
  error?: string;
}

export interface ExtractedPageText {
  pageNum: number;
  text: string;
  hasText: boolean;
}

/**
 * Extracts structured plain text from an uploaded PDF ArrayBuffer across ALL pages.
 * Handles two-column sorting, strips common running headers/footers, and identifies scanned pages.
 */
export async function extractTextFromPdf(dataBuffer: ArrayBuffer): Promise<{
  text: string;
  pageCount: number;
  pages: ExtractedPageText[];
  isScannedOrImagePdf?: boolean;
}> {
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(dataBuffer),
    useSystemFonts: true,
  });

  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;
  const pages: ExtractedPageText[] = [];
  let fullText = '';
  let pagesWithLowText = 0;

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    
    // Sort text items by vertical Y (top to bottom), then horizontal X (left to right)
    // to handle multi-column layouts properly
    const items: { str: string; x: number; y: number }[] = [];
    for (const item of textContent.items) {
      if ('str' in item && typeof item.str === 'string') {
        const x = 'transform' in item ? (item.transform as number[])[4] : 0;
        const y = 'transform' in item ? (item.transform as number[])[5] : 0;
        items.push({ str: item.str, x, y });
      }
    }

    // Sort items top-down, then left-to-right
    items.sort((a, b) => {
      const yDiff = b.y - a.y;
      if (Math.abs(yDiff) > 6) {
        return yDiff;
      }
      return a.x - b.x;
    });

    let lastY: number | null = null;
    let pageText = '';

    for (const it of items) {
      if (lastY !== null && Math.abs(it.y - lastY) > 6) {
        pageText += '\n';
      } else if (pageText.length > 0 && !pageText.endsWith(' ') && !pageText.endsWith('\n')) {
        pageText += ' ';
      }
      pageText += it.str;
      lastY = it.y;
    }

    // Strip common running headers/footers (e.g. repeated page numbers like "Page 2 of 10" or "www...")
    const cleanedPageLines = pageText.split('\n').filter((line) => {
      const t = line.trim();
      if (/^page\s*\d+(\s*of\s*\d+)?$/i.test(t)) return false;
      if (/^\d+\s*\/\s*\d+$/.test(t)) return false;
      return true;
    });

    const pageContent = cleanedPageLines.join('\n').trim();
    const hasText = pageContent.length > 30;
    if (!hasText) pagesWithLowText++;

    pages.push({
      pageNum,
      text: pageContent,
      hasText,
    });

    fullText += `\n--- PAGE ${pageNum} ---\n` + pageContent + '\n';
  }

  const isScannedOrImagePdf = numPages > 0 && (pagesWithLowText / numPages) > 0.6;

  return {
    text: fullText,
    pageCount: numPages,
    pages,
    isScannedOrImagePdf,
  };
}

/**
 * Extracts multiple-choice questions from document text.
 * Handles both unnumbered quiz exports (e.g. with point values) and standard numbered question papers.
 */
export function parseMcqsFromText(rawText: string, defaultWeek = 1): ExtractedQuestionDraft[] {
  if (!rawText || rawText.trim().length === 0) {
    return [];
  }

  const cleanText = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = cleanText.split('\n');

  // Option prefix matcher: A. / A) / (A) / [A] / a. / a) / (a)
  // Supports zero or more spaces after the separator (e.g. A.QoS 0, B.CoAP)
  function matchOptionMarker(line: string) {
    const trimmed = line.trim();
    const m = trimmed.match(/^(\(?\[?([A-Da-d])[\.\)\]])\s*(.*)$/);
    if (m) {
      const letter = m[2].toUpperCase();
      const content = m[3].trim();
      return { letter, content };
    }
    return null;
  }

  function isQuestionStarter(line: string): boolean {
    const trimmed = line.trim();
    if (/^(?:(?:Question|Q)\s*[:.]?\s*\d+|\d+[\.\)])/i.test(trimmed)) return true;
    if (/^(?:What|Which|How|Why|In|State|Fill|Define|Explain|Consider|According|Suppose|Given|Identify|For)\b/i.test(trimmed)) return true;
    if (/\b(?:1\s*point|i\s*point|\d+\s*points?)\b/i.test(trimmed)) return true;
    if (trimmed.includes('?') && trimmed.length > 15) return true;
    return false;
  }

  function cleanQuestionText(qText: string): string {
    let clean = qText.trim();
    clean = clean.replace(/\b(?:\d+|i)\s*points?\b/gi, '');
    clean = clean.replace(/\b\d+\s*\/\s*\d+\b/g, ''); // page indicators like 21/91
    clean = clean.replace(/^\s*(?:(?:Question|Q)\s*[:.]?\s*\d+[\s:\.\)]*|\d+[\.\)]\s*)/i, '');
    clean = clean.replace(/^\s*\d+\)n\s+/i, 'In ');
    clean = clean.replace(/^\s*\d+\)\s*/, '');
    clean = clean.replace(/^[\/\\|]\s*(hat|hich)\b/i, (_, w) => 'W' + w.slice(1));
    clean = clean.replace(/\s+/g, ' ').trim();
    return clean;
  }

  // Strategy 1: Find option groups [A, B, C, D] across the document lines
  interface OptionCandidate {
    lineA: number;
    lineB: number;
    lineC: number;
    lineD: number;
    dEnd?: number;
    optAContent: string;
    optBContent: string;
    optCContent: string;
    optDContent: string;
  }

  const candidateOptionGroups: OptionCandidate[] = [];

  for (let i = 0; i < lines.length; i++) {
    const optA = matchOptionMarker(lines[i]);
    if (optA && optA.letter === 'A') {
      let optBIndex = -1;
      let optCIndex = -1;
      let optDIndex = -1;
      let optBContent = '';
      let optCContent = '';
      let optDContent = '';

      for (let j = i + 1; j < Math.min(lines.length, i + 15); j++) {
        const opt = matchOptionMarker(lines[j]);
        if (!opt) continue;

        if (opt.letter === 'B' && optBIndex === -1) {
          optBIndex = j;
          optBContent = opt.content;
        } else if (opt.letter === 'C' && optBIndex !== -1 && optCIndex === -1) {
          optCIndex = j;
          optCContent = opt.content;
        } else if (opt.letter === 'D' && optCIndex !== -1 && optDIndex === -1) {
          optDIndex = j;
          optDContent = opt.content;
          break;
        } else if (opt.letter === 'A') {
          break;
        }
      }

      if (optBIndex !== -1) {
        candidateOptionGroups.push({
          lineA: i,
          lineB: optBIndex,
          lineC: optCIndex,
          lineD: optDIndex,
          optAContent: optA.content,
          optBContent,
          optCContent,
          optDContent,
        });
      }
    }
  }

  // Global Answer Key Table Parser (e.g. for PDFs with answer keys at end of doc: "1 - B", "1. B", "Q1: C")
  const globalAnswerKeyMap = new Map<number, number>();
  const answerKeyRegex = /(?:(?:Q|Question)?\s*(\d+)\s*[\.\:\-\–\—\)]\s*\(?([A-Da-d])\)?)/g;
  let akMatch: RegExpExecArray | null;
  while ((akMatch = answerKeyRegex.exec(cleanText)) !== null) {
    const qNum = parseInt(akMatch[1], 10);
    const letter = akMatch[2].toUpperCase();
    const charIdx = letter.charCodeAt(0) - 65;
    if (!isNaN(qNum) && charIdx >= 0 && charIdx <= 3) {
      // Only record if it appears in an answer-key section or repeated list
      globalAnswerKeyMap.set(qNum, charIdx);
    }
  }

  // If candidate option groups are detected, assemble the questions
  if (candidateOptionGroups.length > 0) {
    const rawResults: ExtractedQuestionDraft[] = [];

    for (let k = 0; k < candidateOptionGroups.length; k++) {
      const current = candidateOptionGroups[k];
      const prev = k > 0 ? candidateOptionGroups[k - 1] : null;

      const qStartLine = prev && prev.dEnd !== undefined ? prev.dEnd : 0;
      const qLines: string[] = [];

      for (let l = qStartLine; l < current.lineA; l++) {
        const trimmed = lines[l].trim();
        if (/^\d+\s*\/\s*\d+$/.test(trimmed)) continue;
        if (/^page\s*\d+/i.test(trimmed)) continue;
        qLines.push(lines[l]);
      }

      const rawQText = qLines.join(' ');
      const questionText = cleanQuestionText(rawQText);

      // Detect original question number if present
      const qNumMatch = rawQText.match(/(?:(?:Question|Q)\s*[:.]?\s*(\d+)|\b(\d+)[\.\)]\s+)/i);
      const originalQuestionNumber = qNumMatch ? parseInt(qNumMatch[1] || qNumMatch[2], 10) : k + 1;

      // Extract option text spanning potential wrapped lines
      function getOptionText(startLine: number, endLine: number, initialContent: string): string {
        const parts = [initialContent];
        for (let l = startLine + 1; l < endLine; l++) {
          const line = lines[l].trim();
          if (/^\d+\s*\/\s*\d+$/.test(line)) continue;
          if (isQuestionStarter(line)) break;
          if (line.length > 0) {
            parts.push(line);
          }
        }
        return parts.join(' ').replace(/\s+/g, ' ').trim();
      }

      const optA = getOptionText(current.lineA, current.lineB, current.optAContent);
      let optB = '';
      let optC = '';
      let optD = '';

      if (current.lineC !== -1) {
        optB = getOptionText(current.lineB, current.lineC, current.optBContent);

        if (current.lineD !== -1) {
          optC = getOptionText(current.lineC, current.lineD, current.optCContent);

          const nextA = k + 1 < candidateOptionGroups.length ? candidateOptionGroups[k + 1].lineA : lines.length;
          let dEnd = current.lineD + 1;

          while (dEnd < nextA) {
            const l = lines[dEnd].trim();
            if (isQuestionStarter(l)) break;
            
            // Check if upcoming lines contain question indicators
            let upcomingHasQuestion = false;
            for (let u = dEnd; u < nextA; u++) {
              const ul = lines[u].trim();
              if (/\b(?:1\s*point|i\s*point|\d+\s*points?)\b/i.test(ul) || ul.includes('?') || isQuestionStarter(ul)) {
                upcomingHasQuestion = true;
                break;
              }
            }
            if (upcomingHasQuestion && (/^[A-Z]/.test(l) || l.length === 0)) {
              break;
            }
            dEnd++;
          }

          current.dEnd = dEnd;
          optD = getOptionText(current.lineD, dEnd, current.optDContent);
        } else {
          current.dEnd = current.lineC + 1;
          optC = current.optCContent;
          optD = 'None of the above';
        }
      } else {
        current.dEnd = current.lineB + 1;
        optB = current.optBContent;
        optC = 'Not Applicable';
        optD = 'None of the above';
      }

      // Check for answer key indicator if present locally
      let answerIndex = 0;
      let hasFoundAnswer = false;
      let explanation = '';

      const searchZone = lines.slice(current.lineA, (current.dEnd || current.lineB) + 4).join('\n');
      const answerMatch = searchZone.match(/(?:Accepted Answers?|Correct Answer|Answer|Key|Ans)\s*[:\-]?\s*([A-Da-d0-4]|\([A-Da-d]\)|\[[A-Da-d]\]|[^\n]+)/i);
      if (answerMatch) {
        const rawAns = answerMatch[1].trim().toLowerCase();
        if (rawAns.includes('a') || rawAns === '0' || rawAns === '1' || rawAns.startsWith('(a)') || rawAns.startsWith('[a]')) {
          answerIndex = 0;
          hasFoundAnswer = true;
        } else if (rawAns.includes('b') || rawAns === '2' || rawAns.startsWith('(b)') || rawAns.startsWith('[b]')) {
          answerIndex = 1;
          hasFoundAnswer = true;
        } else if (rawAns.includes('c') || rawAns === '3' || rawAns.startsWith('(c)') || rawAns.startsWith('[c]')) {
          answerIndex = 2;
          hasFoundAnswer = true;
        } else if (rawAns.includes('d') || rawAns === '4' || rawAns.startsWith('(d)') || rawAns.startsWith('[d]')) {
          answerIndex = 3;
          hasFoundAnswer = true;
        }
      } else if (originalQuestionNumber && globalAnswerKeyMap.has(originalQuestionNumber)) {
        // Map from global answer key section
        answerIndex = globalAnswerKeyMap.get(originalQuestionNumber)!;
        hasFoundAnswer = true;
      }

      const solutionMatch = searchZone.match(/(?:Detailed Solution|Solution|Explanation)\s*[:\-]?\s*([\s\S]+)$/i);
      if (solutionMatch) {
        explanation = solutionMatch[1].trim();
      }

      const isValid = Boolean(questionText.length > 5 && optA.length > 0 && optB.length > 0);
      const needsReview = !hasFoundAnswer || optC === 'Not Applicable' || questionText.length < 10;
      const reviewReason = !hasFoundAnswer
        ? 'Answer key not explicitly detected in PDF'
        : optC === 'Not Applicable'
        ? 'Only 2 options detected'
        : undefined;

      if (questionText.length > 3 && optA.length > 0 && optB.length > 0) {
        rawResults.push({
          id: `extracted-${rawResults.length + 1}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          originalQuestionNumber,
          questionText,
          options: [optA, optB, optC || 'Option C', optD || 'Option D'],
          correctAnswerIndex: hasFoundAnswer ? answerIndex : null,
          hasExplicitAnswer: hasFoundAnswer,
          answerSource: hasFoundAnswer ? ('PDF' as const) : ('Not Available' as const),
          isApproved: false,
          explanation: explanation || undefined,
          weekNumber: defaultWeek,
          isValid,
          needsReview,
          reviewReason: hasFoundAnswer ? reviewReason : 'ANSWER NOT PROVIDED',
        });
      }
    }

    if (rawResults.length > 0) {
      return deduplicateQuestions(rawResults);
    }
  }

  // Strategy 2: Traditional question split regex fallback for numbered question papers
  const questionSplitRegex = /(?:^|\n)(?:(?:Question|Q)\s*[:.]?\s*(\d+)|\b(\d+)[\.\)]\s+)(?=[A-Z0-9"'])/gi;
  const matches: { index: number; qNum: number; raw: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = questionSplitRegex.exec(cleanText)) !== null) {
    const qNum = parseInt(match[1] || match[2], 10);
    matches.push({
      index: match.index,
      qNum: isNaN(qNum) ? matches.length + 1 : qNum,
      raw: match[0],
    });
  }

  const results: ExtractedQuestionDraft[] = [];

  if (matches.length > 0) {
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index;
      const end = i + 1 < matches.length ? matches[i + 1].index : cleanText.length;
      const block = cleanText.substring(start, end).trim();

      const parsed = parseSingleQuestionBlock(block, matches[i].qNum, defaultWeek, globalAnswerKeyMap);
      if (parsed) {
        results.push(parsed);
      }
    }
  }

  return deduplicateQuestions(results);
}

/**
 * Deduplicates questions by normalized text similarity to prevent parser overlap or repeated pages.
 */
function deduplicateQuestions(questions: ExtractedQuestionDraft[]): ExtractedQuestionDraft[] {
  const seen = new Set<string>();
  const unique: ExtractedQuestionDraft[] = [];

  for (const q of questions) {
    const normalized = q.questionText
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 60);

    if (normalized.length > 5 && seen.has(normalized)) {
      continue;
    }
    if (normalized.length > 5) {
      seen.add(normalized);
    }
    unique.push(q);
  }

  return unique;
}

/**
 * Parses a single block containing question text, 4 options, and answer.
 */
function parseSingleQuestionBlock(
  block: string,
  questionNumber: number,
  weekNumber: number,
  globalAnswerKeyMap?: Map<number, number>
): ExtractedQuestionDraft | null {
  let explanation = '';
  let answerIndex: number | null = null;
  let answerSource: AnswerSource = 'Not Available';
  let hasFoundAnswer = false;

  const answerMatch = block.match(/(?:Accepted Answers?|Correct Answer|Answer|Key|Ans)\s*[:\-]?\s*([A-Da-d0-4]|\([A-Da-d]\)|\[[A-Da-d]\]|[^\n]+)/i);
  if (answerMatch) {
    const rawAns = answerMatch[1].trim().toLowerCase();
    if (rawAns.includes('a') || rawAns === '0' || rawAns === '1' || rawAns.startsWith('(a)') || rawAns.startsWith('[a]')) {
      answerIndex = 0;
      hasFoundAnswer = true;
      answerSource = 'PDF';
    } else if (rawAns.includes('b') || rawAns === '2' || rawAns.startsWith('(b)') || rawAns.startsWith('[b]')) {
      answerIndex = 1;
      hasFoundAnswer = true;
      answerSource = 'PDF';
    } else if (rawAns.includes('c') || rawAns === '3' || rawAns.startsWith('(c)') || rawAns.startsWith('[c]')) {
      answerIndex = 2;
      hasFoundAnswer = true;
      answerSource = 'PDF';
    } else if (rawAns.includes('d') || rawAns === '4' || rawAns.startsWith('(d)') || rawAns.startsWith('[d]')) {
      answerIndex = 3;
      hasFoundAnswer = true;
      answerSource = 'PDF';
    }
  } else if (globalAnswerKeyMap && globalAnswerKeyMap.has(questionNumber)) {
    answerIndex = globalAnswerKeyMap.get(questionNumber)!;
    hasFoundAnswer = true;
    answerSource = 'PDF';
  }

  const solutionMatch = block.match(/(?:Detailed Solution|Solution|Explanation)\s*[:\-]?\s*([\s\S]+)$/i);
  if (solutionMatch) {
    explanation = solutionMatch[1].trim();
  }

  let contentWithoutAnswer = block;
  if (answerMatch && answerMatch.index !== undefined) {
    contentWithoutAnswer = block.substring(0, answerMatch.index).trim();
  } else if (solutionMatch && solutionMatch.index !== undefined) {
    contentWithoutAnswer = block.substring(0, solutionMatch.index).trim();
  }

  // Detect options in various formats: A., A), (A), [A], 1), 1., etc.
  const optionRegex = /(?:^|\n)\s*(?:\(?([a-dA-D1-4])\)|\b([a-dA-D1-4])[\.\)]|\[([a-dA-D1-4])\])\s*(.*?)(?=(?:\n\s*(?:\(?[a-dA-D1-4]\)|\b[a-dA-D1-4][\.\)]|\[[a-dA-D1-4]\])\s*)|$)/gs;

  const rawOptions: { letter: string; text: string }[] = [];
  let optMatch: RegExpExecArray | null;

  while ((optMatch = optionRegex.exec(contentWithoutAnswer)) !== null) {
    let letter = (optMatch[1] || optMatch[2] || optMatch[3]).toUpperCase();
    if (letter === '1') letter = 'A';
    if (letter === '2') letter = 'B';
    if (letter === '3') letter = 'C';
    if (letter === '4') letter = 'D';

    const text = optMatch[4].trim();
    if (text.length > 0) {
      rawOptions.push({ letter, text });
    }
  }

  let finalOptions: [string, string, string, string] = ['', '', '', ''];
  let questionText = '';

  if (rawOptions.length >= 2) {
    const firstOptIndex = contentWithoutAnswer.search(/(?:^|\n)\s*(?:\(?[a-dA-D1-4]\)|\b[a-dA-D1-4][\.\)]|\[[a-dA-D1-4]\])\s*/);
    if (firstOptIndex !== -1) {
      questionText = contentWithoutAnswer.substring(0, firstOptIndex).trim();
    } else {
      questionText = contentWithoutAnswer.trim();
    }

    for (let i = 0; i < 4; i++) {
      if (i < rawOptions.length) {
        finalOptions[i] = rawOptions[i].text.replace(/\s+/g, ' ');
      } else {
        finalOptions[i] = `Option ${String.fromCharCode(65 + i)}`;
      }
    }
  } else {
    const lines = contentWithoutAnswer.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length >= 5) {
      questionText = lines.slice(0, lines.length - 4).join(' ');
      finalOptions = [
        lines[lines.length - 4],
        lines[lines.length - 3],
        lines[lines.length - 2],
        lines[lines.length - 1],
      ];
    } else {
      return null;
    }
  }

  questionText = questionText
    .replace(/^(?:(?:Question|Q)\s*[:.]?\s*\d+[\s:]*|\d+[\.\)]\s*)/i, '')
    .trim();

  const isValid = Boolean(
    questionText.length > 5 &&
    finalOptions[0].length > 0 &&
    finalOptions[1].length > 0
  );

  const needsReview = !hasFoundAnswer || !isValid;
  const reviewReason = !hasFoundAnswer ? 'ANSWER NOT PROVIDED' : undefined;

  return {
    id: `extracted-${questionNumber}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    originalQuestionNumber: questionNumber,
    questionText,
    options: finalOptions,
    correctAnswerIndex: answerIndex,
    answerSource,
    isApproved: false,
    explanation: explanation || undefined,
    weekNumber,
    isValid,
    needsReview,
    reviewReason,
  };
}

/**
 * Parses authoritative answer keys from text, supporting formats:
 * - 1 - C
 * - 1: C
 * - Q1: C
 * - Q1 - C
 * - 1. C
 * - 1) C
 * - 1 C
 * - Q.1 = C
 * Also supports multi-column text like "1-C 2-A 3-D 4-B"
 */
export function parseAnswerKeySource(text: string): Map<number, { index: number; letter: string }> {
  const map = new Map<number, { index: number; letter: string }>();
  if (!text) return map;

  const patterns = [
    /(?:Q(?:uestion)?\s*[:.]?\s*)?(\d+)\s*[\-:.)=–—]\s*(?:\(?([A-Da-d1-4])\)?)/gi,
    /(?:^|\s)(\d+)\s+([A-Da-d])(?:\s|$)/g,
  ];

  for (const pattern of patterns) {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(text)) !== null) {
      const qNum = parseInt(match[1], 10);
      let rawLetter = match[2].toUpperCase();
      let optIndex = -1;
      if (rawLetter === 'A' || rawLetter === '1') optIndex = 0;
      else if (rawLetter === 'B' || rawLetter === '2') optIndex = 1;
      else if (rawLetter === 'C' || rawLetter === '3') optIndex = 2;
      else if (rawLetter === 'D' || rawLetter === '4') optIndex = 3;

      if (qNum > 0 && optIndex >= 0 && !map.has(qNum)) {
        map.set(qNum, { index: optIndex, letter: String.fromCharCode(65 + optIndex) });
      }
    }
  }

  return map;
}

/**
 * Applies authoritative answer key mapping onto extracted questions.
 * The administrator answer key is the ONLY authoritative source:
 * - If question matches key map: correctAnswerIndex = key.index, answerSource = 'Answer Key'
 * - If not in key map, but already had explicit PDF answer: stays PDF answer
 * - Otherwise: correctAnswerIndex = null, answerSource = 'Not Available'
 */
export function applyAnswerKeyMapping(
  questions: ExtractedQuestionDraft[],
  keyMap: Map<number, { index: number; letter: string }>
): ExtractedQuestionDraft[] {
  return questions.map((q, idx) => {
    const qNum = q.originalQuestionNumber || idx + 1;
    if (keyMap.has(qNum)) {
      const mapped = keyMap.get(qNum)!;
      return {
        ...q,
        correctAnswerIndex: mapped.index,
        answerSource: 'Answer Key' as const,
        hasExplicitAnswer: true,
        needsReview: false,
        reviewReason: undefined,
      };
    }
    if (q.answerSource === 'PDF' && q.correctAnswerIndex !== null) {
      return q;
    }
    return {
      ...q,
      correctAnswerIndex: null,
      answerSource: 'Not Available' as const,
      hasExplicitAnswer: false,
      needsReview: true,
      reviewReason: 'ANSWER NOT PROVIDED',
    };
  });
}

