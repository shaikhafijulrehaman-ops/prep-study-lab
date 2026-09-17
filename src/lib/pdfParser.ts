import * as pdfjsLib from 'pdfjs-dist';
import { SupabaseClient } from '@supabase/supabase-js';
import {
  ExtractedQuestionDraft,
  AnswerSource,
  VisionPageResult,
  VisionExtractedQuestion,
  ExtractionProgressCallback,
} from '../types';
import { extractPageViaVision, clearExtractionCache } from './visionExtractor';

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

// ======================================================================
// PUBLIC INTERFACES
// ======================================================================

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

export interface HybridExtractionResult {
  questions: ExtractedQuestionDraft[];
  pageCount: number;
  weeksDetected: number[];
  pagesWithTextExtraction: number;
  pagesWithVisionExtraction: number;
  totalQuestionsExtracted: number;
}

// ======================================================================
// TEXT EXTRACTION (existing logic, preserved)
// ======================================================================

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

    const items: { str: string; x: number; y: number }[] = [];
    for (const item of textContent.items) {
      if ('str' in item && typeof item.str === 'string') {
        const x = 'transform' in item ? (item.transform as number[])[4] : 0;
        const y = 'transform' in item ? (item.transform as number[])[5] : 0;
        items.push({ str: item.str, x, y });
      }
    }

    items.sort((a, b) => {
      const yDiff = b.y - a.y;
      if (Math.abs(yDiff) > 6) return yDiff;
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

    const cleanedPageLines = pageText.split('\n').filter((line) => {
      const t = line.trim();
      if (/^page\s*\d+(\s*of\s*\d+)?$/i.test(t)) return false;
      if (/^\d+\s*\/\s*\d+$/.test(t)) return false;
      return true;
    });

    const pageContent = cleanedPageLines.join('\n').trim();
    const hasText = pageContent.length > 30;
    if (!hasText) pagesWithLowText++;

    pages.push({ pageNum, text: pageContent, hasText });
    fullText += `\n--- PAGE ${pageNum} ---\n` + pageContent + '\n';
  }

  const isScannedOrImagePdf = numPages > 0 && (pagesWithLowText / numPages) > 0.6;

  return { text: fullText, pageCount: numPages, pages, isScannedOrImagePdf };
}

// ======================================================================
// PAGE IMAGE RENDERING
// ======================================================================

/**
 * Renders a single PDF page to a high-resolution PNG image (base64).
 * Uses the HTML Canvas API via pdfjs.
 */
async function renderPageToImage(
  pdf: pdfjsLib.PDFDocumentProxy,
  pageNumber: number,
  scale: number = 2.0
): Promise<string> {
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale });

  // Create an offscreen canvas
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context not available');

  await (page.render as any)({
    canvasContext: ctx,
    viewport,
    canvas,
  }).promise;

  // Convert to base64 PNG (strip the data:image/png;base64, prefix)
  const dataUrl = canvas.toDataURL('image/png');
  const base64 = dataUrl.split(',')[1] || '';

  // Cleanup
  canvas.width = 0;
  canvas.height = 0;

  return base64;
}

// ======================================================================
// HYBRID PDF PROCESSING PIPELINE
// ======================================================================

/**
 * Main hybrid extraction pipeline.
 * Processes every page of the PDF using text extraction where possible,
 * and vision extraction (via Supabase Edge Function) for image-based pages.
 */
export async function processFullPdf(
  dataBuffer: ArrayBuffer,
  supabaseClient: SupabaseClient | null,
  pdfName: string,
  onProgress?: ExtractionProgressCallback
): Promise<HybridExtractionResult> {
  // Clear previous extraction cache for fresh processing
  clearExtractionCache();

  onProgress?.(0, 0, 'Loading document...');

  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(dataBuffer),
    useSystemFonts: true,
  });
  const pdf = await loadingTask.promise;
  const totalPages = pdf.numPages;

  onProgress?.(0, totalPages, 'Analyzing pages...');

  // Phase 1: Analyze each page — determine if text-based or image-based
  const pageAnalysis: { pageNum: number; text: string; isImageBased: boolean }[] = [];
  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const items: { str: string; x: number; y: number }[] = [];
    for (const item of textContent.items) {
      if ('str' in item && typeof item.str === 'string') {
        const x = 'transform' in item ? (item.transform as number[])[4] : 0;
        const y = 'transform' in item ? (item.transform as number[])[5] : 0;
        items.push({ str: item.str, x, y });
      }
    }

    items.sort((a, b) => {
      const yDiff = b.y - a.y;
      if (Math.abs(yDiff) > 6) return yDiff;
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

    const cleanedLines = pageText.split('\n').filter((line) => {
      const t = line.trim();
      if (/^page\s*\d+(\s*of\s*\d+)?$/i.test(t)) return false;
      if (/^\d+\s*\/\s*\d+$/.test(t)) return false;
      return true;
    });

    const cleaned = cleanedLines.join('\n').trim();
    const isImageBased = cleaned.length < 30;

    pageAnalysis.push({ pageNum, text: cleaned, isImageBased });
  }

  const imagePageCount = pageAnalysis.filter((p) => p.isImageBased).length;
  const textPageCount = pageAnalysis.filter((p) => !p.isImageBased).length;
  const useVisionForAll = imagePageCount > totalPages * 0.5; // If most pages are image-based

  // Phase 2: Extract questions from each page
  const allVisionResults: VisionPageResult[] = [];
  let textPagesProcessed = 0;
  let visionPagesProcessed = 0;

  if (useVisionForAll && supabaseClient) {
    // Primarily image-based PDF — use vision for every page
    for (let i = 0; i < pageAnalysis.length; i++) {
      const pa = pageAnalysis[i];
      onProgress?.(pa.pageNum, totalPages, `Processing page ${pa.pageNum} of ${totalPages}...`);

      try {
        const imageBase64 = await renderPageToImage(pdf, pa.pageNum, 2.0);
        const result = await extractPageViaVision(
          supabaseClient,
          imageBase64,
          pa.pageNum,
          totalPages,
          pdfName
        );
        allVisionResults.push(result);
        visionPagesProcessed++;
      } catch (err) {
        console.warn(`Vision extraction failed for page ${pa.pageNum}:`, err);
        // Fallback: try text extraction for this page
        if (pa.text.length > 30) {
          const textQuestions = parseMcqsFromSinglePageText(pa.text, pa.pageNum, 1);
          allVisionResults.push({
            pageNumber: pa.pageNum,
            weekHeading: detectExplicitWeekHeading(pa.text),
            questions: textQuestions.map((q) => ({
              question_number: q.originalQuestionNumber || null,
              question_text: q.questionText,
              option_a: q.options[0],
              option_b: q.options[1],
              option_c: q.options[2],
              option_d: q.options[3],
              accepted_answer_text: q.acceptedAnswerText || null,
              is_partial: false,
              partial_position: null,
            })),
          });
          textPagesProcessed++;
        } else {
          allVisionResults.push({ pageNumber: pa.pageNum, weekHeading: null, questions: [] });
        }
      }
    }
  } else if (!useVisionForAll) {
    // Primarily text-based PDF — use text extraction for text pages, vision for image pages
    for (let i = 0; i < pageAnalysis.length; i++) {
      const pa = pageAnalysis[i];
      onProgress?.(pa.pageNum, totalPages, `Processing page ${pa.pageNum} of ${totalPages}...`);

      if (!pa.isImageBased) {
        // Text extraction
        const textQuestions = parseMcqsFromSinglePageText(pa.text, pa.pageNum, 1);
        allVisionResults.push({
          pageNumber: pa.pageNum,
          weekHeading: detectExplicitWeekHeading(pa.text),
          questions: textQuestions.map((q) => ({
            question_number: q.originalQuestionNumber || null,
            question_text: q.questionText,
            option_a: q.options[0],
            option_b: q.options[1],
            option_c: q.options[2],
            option_d: q.options[3],
            accepted_answer_text: q.acceptedAnswerText || null,
            is_partial: false,
            partial_position: null,
          })),
        });
        textPagesProcessed++;
      } else if (supabaseClient) {
        // Vision extraction for image-based pages
        try {
          const imageBase64 = await renderPageToImage(pdf, pa.pageNum, 2.0);
          const result = await extractPageViaVision(
            supabaseClient,
            imageBase64,
            pa.pageNum,
            totalPages,
            pdfName
          );
          allVisionResults.push(result);
          visionPagesProcessed++;
        } catch (err) {
          console.warn(`Vision extraction failed for page ${pa.pageNum}:`, err);
          allVisionResults.push({ pageNumber: pa.pageNum, weekHeading: null, questions: [] });
        }
      } else {
        // No Supabase — skip image-based pages
        allVisionResults.push({ pageNumber: pa.pageNum, weekHeading: null, questions: [] });
      }
    }
  } else {
    // Image-based PDF but no Supabase — try text extraction anyway
    const fullText = pageAnalysis.map((p) => `--- PAGE ${p.pageNum} ---\n${p.text}`).join('\n');
    const fallbackQuestions = parseMcqsFromText(fullText, 1);
    return {
      questions: fallbackQuestions,
      pageCount: totalPages,
      weeksDetected: [...new Set(fallbackQuestions.map((q) => q.weekNumber))].sort((a, b) => a - b),
      pagesWithTextExtraction: textPageCount,
      pagesWithVisionExtraction: 0,
      totalQuestionsExtracted: fallbackQuestions.length,
    };
  }

  onProgress?.(totalPages, totalPages, 'Mapping answers...');

  // Phase 3: Merge cross-page questions
  const mergedResults = mergeCrossPageQuestions(allVisionResults);

  // Phase 4: Convert to ExtractedQuestionDraft[] with answer mapping
  const questions = convertVisionResultsToDrafts(mergedResults, useVisionForAll);

  // Phase 5: Detect weeks
  const weeksDetected = [...new Set(questions.map((q) => q.weekNumber))].sort((a, b) => a - b);

  onProgress?.(totalPages, totalPages, 'Preparing review...');

  return {
    questions,
    pageCount: totalPages,
    weeksDetected,
    pagesWithTextExtraction: textPagesProcessed,
    pagesWithVisionExtraction: visionPagesProcessed,
    totalQuestionsExtracted: questions.length,
  };
}

// ======================================================================
// CROSS-PAGE QUESTION MERGING
// ======================================================================

/**
 * Merges questions that span across page boundaries.
 * A question with is_partial=true + partial_position="start" is combined
 * with the next page's question with partial_position="end".
 */
function mergeCrossPageQuestions(pages: VisionPageResult[]): VisionPageResult[] {
  const merged: VisionPageResult[] = [];
  let pendingPartial: { question: VisionExtractedQuestion; pageNumber: number } | null = null;

  for (const page of pages) {
    const mergedQuestions: VisionExtractedQuestion[] = [];

    for (const q of page.questions) {
      if (q.is_partial && q.partial_position === 'end' && pendingPartial) {
        // Merge with pending partial from previous page
        const merged: VisionExtractedQuestion = {
          question_number: pendingPartial.question.question_number || q.question_number,
          question_text: (pendingPartial.question.question_text + ' ' + q.question_text).trim(),
          option_a: pendingPartial.question.option_a || q.option_a,
          option_b: pendingPartial.question.option_b || q.option_b,
          option_c: pendingPartial.question.option_c || q.option_c,
          option_d: pendingPartial.question.option_d || q.option_d,
          accepted_answer_text: pendingPartial.question.accepted_answer_text || q.accepted_answer_text,
          is_partial: false,
          partial_position: null,
        };
        mergedQuestions.push(merged);
        pendingPartial = null;
      } else if (q.is_partial && q.partial_position === 'start') {
        // Hold this question — it continues on the next page
        if (pendingPartial) {
          // Flush the previous pending partial as-is (lost continuation)
          mergedQuestions.push({ ...pendingPartial.question, is_partial: false, partial_position: null });
        }
        pendingPartial = { question: q, pageNumber: page.pageNumber };
      } else {
        // Complete question
        if (pendingPartial) {
          // Flush pending partial (the next question wasn't a continuation)
          mergedQuestions.push({ ...pendingPartial.question, is_partial: false, partial_position: null });
          pendingPartial = null;
        }
        mergedQuestions.push(q);
      }
    }

    merged.push({
      pageNumber: page.pageNumber,
      weekHeading: page.weekHeading,
      questions: mergedQuestions,
    });
  }

  // Flush any remaining pending partial
  if (pendingPartial) {
    const lastPage = merged[merged.length - 1];
    if (lastPage) {
      lastPage.questions.push({ ...pendingPartial.question, is_partial: false, partial_position: null });
    }
  }

  return merged;
}

// ======================================================================
// ACCEPTED ANSWER MAPPING
// ======================================================================

/**
 * Maps a printed accepted answer text to one of the four options.
 *
 * Handles formats like:
 *   "B. MQ-5" → extracts letter B → index 1
 *   "MQ-5" → fuzzy matches against options → finds match
 *   "B" → letter only → index 1
 */
export function mapAcceptedAnswerToOption(
  acceptedText: string | null | undefined,
  options: [string, string, string, string]
): { index: number; confidence: 'high' | 'medium' | 'low' } | null {
  if (!acceptedText || acceptedText.trim().length === 0) return null;

  const text = acceptedText.trim();
  const letters = ['A', 'B', 'C', 'D'];

  // Strategy 1: Extract option letter from the accepted answer text
  // Patterns: "B. MQ-5", "B) MQ-5", "(B) MQ-5", "b. MQ-5", just "B"
  const letterMatch = text.match(/^(?:\(?([A-Da-d])\)?[\s.):,\-]*)(.*)?$/);
  if (letterMatch) {
    const letter = letterMatch[1].toUpperCase();
    const idx = letters.indexOf(letter);
    if (idx >= 0) {
      // If there's text after the letter, verify it matches the option
      const afterLetter = (letterMatch[2] || '').trim();
      if (afterLetter.length > 0) {
        const optionText = normalizeForComparison(options[idx]);
        const answerBody = normalizeForComparison(afterLetter);
        if (optionText.includes(answerBody) || answerBody.includes(optionText)) {
          return { index: idx, confidence: 'high' };
        }
        // Letter + text doesn't match the option — still trust the letter
        return { index: idx, confidence: 'medium' };
      }
      // Just a letter with no additional text
      return { index: idx, confidence: 'high' };
    }
  }

  // Strategy 2: Direct text match against each option
  const normalizedAnswer = normalizeForComparison(text);
  for (let i = 0; i < 4; i++) {
    const normalizedOption = normalizeForComparison(options[i]);
    if (normalizedOption.length > 2 && normalizedAnswer.length > 2) {
      if (normalizedOption === normalizedAnswer) {
        return { index: i, confidence: 'high' };
      }
      if (normalizedOption.includes(normalizedAnswer) || normalizedAnswer.includes(normalizedOption)) {
        return { index: i, confidence: 'medium' };
      }
    }
  }

  // Strategy 3: Word overlap matching (for partial matches)
  const answerWords = normalizedAnswer.split(/\s+/).filter((w) => w.length > 2);
  if (answerWords.length > 0) {
    let bestIdx = -1;
    let bestOverlap = 0;
    for (let i = 0; i < 4; i++) {
      const optionWords = normalizeForComparison(options[i]).split(/\s+/).filter((w) => w.length > 2);
      const overlap = answerWords.filter((w) => optionWords.includes(w)).length;
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        bestIdx = i;
      }
    }
    if (bestIdx >= 0 && bestOverlap >= answerWords.length * 0.5) {
      return { index: bestIdx, confidence: 'low' };
    }
  }

  return null;
}

function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ======================================================================
// VISION RESULTS → DRAFT CONVERSION
// ======================================================================

/**
 * Converts page-level vision extraction results into a flat list of ExtractedQuestionDraft objects.
 * Tracks week headings across pages, maps accepted answers, and assigns question IDs.
 */
function convertVisionResultsToDrafts(
  pages: VisionPageResult[],
  usedVision: boolean
): ExtractedQuestionDraft[] {
  const drafts: ExtractedQuestionDraft[] = [];
  let currentWeek = 1;
  let globalQIndex = 0;

  for (const page of pages) {
    // Update week from page heading
    if (page.weekHeading) {
      const weekNum = parseWeekFromHeading(page.weekHeading);
      if (weekNum) currentWeek = weekNum;
    }

    for (const q of page.questions) {
      globalQIndex++;

      const options: [string, string, string, string] = [
        q.option_a || 'Option A',
        q.option_b || 'Option B',
        q.option_c || 'Option C',
        q.option_d || 'Option D',
      ];

      // Map accepted answer to option index
      const answerMapping = mapAcceptedAnswerToOption(q.accepted_answer_text, options);

      let correctAnswerIndex: number | null = null;
      let answerSource: AnswerSource = 'Not Available';
      let hasExplicitAnswer = false;
      let needsReview = true;
      let reviewReason: string | undefined = undefined;

      if (answerMapping) {
        correctAnswerIndex = answerMapping.index;
        answerSource = 'PDF';
        hasExplicitAnswer = true;
        if (answerMapping.confidence === 'high') {
          needsReview = false;
        } else {
          needsReview = true;
          reviewReason = answerMapping.confidence === 'medium'
            ? 'Answer letter matched but option text mismatch'
            : 'Answer matched by word overlap (low confidence)';
        }
      } else if (q.accepted_answer_text) {
        // Had accepted answer text but could not map to an option
        needsReview = true;
        reviewReason = `Could not map accepted answer "${q.accepted_answer_text}" to any option`;
      } else {
        reviewReason = 'No accepted answer found';
      }

      // Validate completeness
      const hasAllOptions = q.option_a && q.option_b && q.option_c && q.option_d;
      const hasQuestionText = q.question_text && q.question_text.length > 5;
      const isValid = Boolean(hasQuestionText && hasAllOptions);

      if (!isValid) {
        needsReview = true;
        reviewReason = !hasQuestionText ? 'Incomplete question text' :
          !hasAllOptions ? 'Missing one or more options' : reviewReason;
      }

      const draft: ExtractedQuestionDraft = {
        id: `draft-${globalQIndex}-${Date.now().toString(36)}`,
        originalQuestionNumber: q.question_number || globalQIndex,
        sourcePageNumber: page.pageNumber,
        questionText: q.question_text,
        options,
        correctAnswerIndex,
        hasExplicitAnswer,
        acceptedAnswerText: q.accepted_answer_text || null,
        answerSource,
        isApproved: false,
        weekNumber: currentWeek,
        isValid,
        needsReview,
        reviewReason,
        extractionMethod: usedVision ? 'vision' : 'text',
      };

      drafts.push(draft);
    }
  }

  return deduplicateQuestions(drafts);
}

function parseWeekFromHeading(heading: string): number | null {
  const m = heading.match(/(?:week|wk)\s*0*([1-9]\d?)/i);
  if (m) {
    const num = parseInt(m[1], 10);
    if (num > 0 && num <= 52) return num;
  }
  return null;
}

// ======================================================================
// SINGLE-PAGE TEXT EXTRACTION (helper for hybrid mode)
// ======================================================================

/**
 * Extracts MCQs from a single page's text. Used by the hybrid pipeline
 * for pages that have selectable text.
 */
function parseMcqsFromSinglePageText(
  pageText: string,
  pageNumber: number,
  defaultWeek: number
): ExtractedQuestionDraft[] {
  const lines = pageText.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  if (lines.length < 3) return [];

  // Detect week heading from the page
  let detectedWeek = defaultWeek;
  for (const line of lines) {
    const wh = detectExplicitWeekHeading(line);
    if (wh) {
      const parsedNum = parseWeekFromHeading(wh);
      if (parsedNum) {
        detectedWeek = parsedNum;
        break;
      }
    }
  }

  // Use the full text MCQ parser on this single page's text
  const questions = parseMcqsFromText(pageText, detectedWeek);

  // Set source page number on all extracted questions
  return questions.map((q) => ({
    ...q,
    sourcePageNumber: pageNumber,
    extractionMethod: 'text' as const,
  }));
}

function detectExplicitWeekHeading(lineText: string): string | null {
  const trimmed = lineText.trim();
  const cleanHeader = trimmed.replace(/^---\s*page\s*\d+\s*---\s*/i, '');
  const m = cleanHeader.match(/^(?:week|wk)\s*0*([1-9]\d?)(?:[\s:\-–—].*)?$/i);
  if (m) {
    const num = parseInt(m[1], 10);
    if (num > 0 && num <= 52) return cleanHeader;
  }
  return null;
}

// ======================================================================
// TEXT-BASED MCQ PARSER (existing logic, preserved for text PDFs)
// ======================================================================

/**
 * Extracts multiple-choice questions from document text.
 * Handles both unnumbered quiz exports and standard numbered question papers.
 */
export function parseMcqsFromText(
  rawText: string,
  defaultWeek: number = 1
): ExtractedQuestionDraft[] {
  if (!rawText || rawText.trim().length < 30) return [];

  const clean = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/ {3,}/g, '  ');

  const lines = clean.split('\n');

  // Option marker detection
  function matchOptionMarker(line: string): { letter: string; text: string } | null {
    const trimmed = line.trim();
    const m = trimmed.match(/^(?:\(?([A-Da-d])\)?[\s.):]+)(.*)/);
    if (m) {
      return { letter: m[1].toUpperCase(), text: m[2].trim() };
    }
    return null;
  }

  function isQuestionStarter(line: string): boolean {
    const t = line.trim();
    return /^(?:(?:Question|Q)\s*[:.]?\s*\d+|\d+[\.\)]\s+(?=[A-Z0-9"'\(]))/i.test(t);
  }

  function cleanQuestionText(text: string): string {
    return text
      .replace(/^(?:Question|Q)\s*[:.]?\s*\d+\s*[:.\-)–—]?\s*/i, '')
      .replace(/^\d+\s*[:.\-)–—]\s*/, '')
      .replace(/^\d+\s*(?:point|points|marks?)\s*/i, '')
      .replace(/^\d+\/\d+\s*/, '')
      .trim();
  }

  // Build global answer key table from the full text
  const globalAnswerKeyMap = new Map<number, number>();
  const gkPattern = /(?:(?:Q|Question)?\s*(\d+)\s*[\.:\-–—\)]\s*\(?([A-Da-d])\)?)/g;
  let gkMatch: RegExpExecArray | null;
  while ((gkMatch = gkPattern.exec(clean)) !== null) {
    const qNum = parseInt(gkMatch[1], 10);
    const letter = gkMatch[2].toUpperCase();
    const idx = 'ABCD'.indexOf(letter);
    if (qNum > 0 && idx >= 0 && !globalAnswerKeyMap.has(qNum)) {
      globalAnswerKeyMap.set(qNum, idx);
    }
  }

  // ==================== Strategy 1: Candidate Option Group Scanning ====================
  interface CandidateGroup {
    lineA: number;
    lineB: number;
    lineC: number;
    lineD: number;
    optA: string;
    optB: string;
    optC: string;
    optD: string;
  }

  const candidateGroups: CandidateGroup[] = [];
  let currentDetectedWeek = defaultWeek;
  let lastCheckedWeekLine = 0;

  for (let i = 0; i < lines.length; i++) {
    // Week heading detection
    const weekHeading = detectExplicitWeekHeadingLine(lines[i]);
    if (weekHeading !== null) {
      currentDetectedWeek = weekHeading;
      lastCheckedWeekLine = i;
      continue;
    }

    const optA = matchOptionMarker(lines[i]);
    if (optA && optA.letter === 'A') {
      let lineB = -1, lineC = -1, lineD = -1;
      let optBText = '', optCText = '', optDText = '';

      const searchLimit = Math.min(i + 15, lines.length);
      for (let j = i + 1; j < searchLimit; j++) {
        const opt = matchOptionMarker(lines[j]);
        if (!opt) continue;

        if (opt.letter === 'B' && lineB === -1) {
          lineB = j;
          optBText = opt.text;
        } else if (opt.letter === 'C' && lineB !== -1 && lineC === -1) {
          lineC = j;
          optCText = opt.text;
        } else if (opt.letter === 'D' && lineB !== -1 && lineD === -1) {
          lineD = j;
          optDText = opt.text;
          break;
        }
      }

      if (lineB !== -1) {
        if (lineC === -1) { lineC = lineD !== -1 ? lineD : lineB + 1; optCText = 'Option C'; }
        if (lineD === -1) { lineD = lineC + 1; optDText = 'None of the above'; }

        candidateGroups.push({
          lineA: i,
          lineB,
          lineC,
          lineD,
          optA: getMultilineOptionText(lines, i, lineB, optA.text),
          optB: getMultilineOptionText(lines, lineB, lineC, optBText),
          optC: getMultilineOptionText(lines, lineC, lineD, optCText),
          optD: getMultilineOptionText(lines, lineD, lineD + 3, optDText),
        });
      }
    }
  }

  if (candidateGroups.length > 0) {
    const questions: ExtractedQuestionDraft[] = [];
    let qCounter = 0;
    currentDetectedWeek = defaultWeek;

    for (let gi = 0; gi < candidateGroups.length; gi++) {
      const cg = candidateGroups[gi];
      const prevEnd = gi > 0 ? candidateGroups[gi - 1].lineD + 1 : 0;

      // Scan for week headings between questions
      for (let wl = prevEnd; wl < cg.lineA; wl++) {
        const wh = detectExplicitWeekHeadingLine(lines[wl]);
        if (wh !== null) currentDetectedWeek = wh;
      }

      // Extract question stem
      let questionText = '';
      for (let sl = prevEnd; sl < cg.lineA; sl++) {
        const lt = lines[sl].trim();
        if (lt.length > 0) questionText += (questionText ? '\n' : '') + lt;
      }
      questionText = cleanQuestionText(questionText);

      if (questionText.length < 3) continue;

      qCounter++;

      // Extract question number
      const qnMatch = questionText.match(/^(\d+)/);
      const qNum = qnMatch ? parseInt(qnMatch[1], 10) : qCounter;

      // Look for inline accepted answer markers after the options
      const searchZoneStart = cg.lineD + 1;
      const searchZoneEnd = gi + 1 < candidateGroups.length
        ? candidateGroups[gi + 1].lineA
        : Math.min(cg.lineD + 8, lines.length);

      let answerIndex: number | null = null;
      let answerSource: AnswerSource = 'Not Available';
      let hasExplicitAnswer = false;
      let acceptedAnswerText: string | null = null;

      for (let al = searchZoneStart; al < searchZoneEnd; al++) {
        const aline = lines[al]?.trim() || '';
        const ansMatch = aline.match(
          /(?:Accepted Answers?|Correct Answer|Answer|Key|Ans)\s*[:\-]?\s*([A-Da-d0-4]|\([A-Da-d]\)|\[[A-Da-d]\]|[^\n]+)/i
        );
        if (ansMatch) {
          acceptedAnswerText = ansMatch[1].trim();
          const letterPart = acceptedAnswerText.match(/^(?:\(?([A-Da-d])\)?)/);
          if (letterPart) {
            answerIndex = 'ABCD'.indexOf(letterPart[1].toUpperCase());
            if (answerIndex >= 0) {
              answerSource = 'PDF';
              hasExplicitAnswer = true;
            }
          }
          break;
        }
      }

      // Fallback to global answer key
      if (answerIndex === null && globalAnswerKeyMap.has(qNum)) {
        answerIndex = globalAnswerKeyMap.get(qNum)!;
        answerSource = 'PDF';
        hasExplicitAnswer = true;
      }

      const options: [string, string, string, string] = [
        cg.optA || 'Option A',
        cg.optB || 'Option B',
        cg.optC || 'Option C',
        cg.optD || 'Option D',
      ];

      questions.push({
        id: `draft-${qCounter}-${Date.now().toString(36)}`,
        originalQuestionNumber: qNum,
        questionText,
        options,
        correctAnswerIndex: answerIndex !== null && answerIndex >= 0 ? answerIndex : null,
        hasExplicitAnswer,
        acceptedAnswerText,
        answerSource,
        isApproved: false,
        weekNumber: currentDetectedWeek,
        isValid: questionText.length > 5 && cg.optA.length > 0 && cg.optB.length > 0,
        needsReview: !hasExplicitAnswer,
        reviewReason: !hasExplicitAnswer ? 'No accepted answer found' : undefined,
        extractionMethod: 'text',
      });
    }

    return deduplicateQuestions(questions);
  }

  // ==================== Strategy 2: Question Split Regex Fallback ====================
  const questionBoundaryPattern = /(?:^|\n)(?:(?:Question|Q)\s*[:.]?\s*(\d+)|(\d+)[\.\)]\s+)(?=[A-Z0-9"'])/gi;
  const matches: { index: number; qNum: number }[] = [];
  let splitMatch: RegExpExecArray | null;
  while ((splitMatch = questionBoundaryPattern.exec(clean)) !== null) {
    const qNum = parseInt(splitMatch[1] || splitMatch[2], 10);
    if (qNum > 0) matches.push({ index: splitMatch.index, qNum });
  }

  if (matches.length > 0) {
    const questions: ExtractedQuestionDraft[] = [];
    let strat2Week = defaultWeek;

    for (let mi = 0; mi < matches.length; mi++) {
      const start = matches[mi].index;
      const end = mi + 1 < matches.length ? matches[mi + 1].index : clean.length;
      const block = clean.substring(start, end);

      // Check for week heading in intermediate text
      const weekMatch = block.match(/(?:^|\n)\s*(?:week|wk)\s*0*([1-9]\d?)(?:[\s:\-–—].*)?(?:\n|$)/i);
      if (weekMatch) strat2Week = parseInt(weekMatch[1], 10);

      const parsed = parseSingleQuestionBlock(block, matches[mi].qNum, strat2Week);
      if (parsed) questions.push(parsed);
    }

    return deduplicateQuestions(questions);
  }

  return [];
}

function getMultilineOptionText(
  lines: string[],
  startLine: number,
  endLine: number,
  initialText: string
): string {
  let text = initialText;
  for (let i = startLine + 1; i < Math.min(endLine, lines.length); i++) {
    const lt = lines[i].trim();
    if (lt.length === 0) continue;
    if (/^(?:\(?[A-Da-d]\)?[\s.):]+)/.test(lt)) break;
    if (/^(?:(?:Question|Q)\s*[:.]?\s*\d+|\d+[\.\)]\s+(?=[A-Z0-9"'\(]))/i.test(lt)) break;
    text += ' ' + lt;
  }
  return text.trim();
}

function detectExplicitWeekHeadingLine(lineText: string): number | null {
  const trimmed = lineText.trim();
  const cleanHeader = trimmed.replace(/^---\s*page\s*\d+\s*---\s*/i, '');
  const m = cleanHeader.match(/^(?:week|wk)\s*0*([1-9]\d?)(?:[\s:\-–—].*)?$/i);
  if (m) {
    const num = parseInt(m[1], 10);
    if (num > 0 && num <= 52) return num;
  }
  return null;
}

function parseSingleQuestionBlock(
  block: string,
  questionNumber: number,
  weekNumber: number
): ExtractedQuestionDraft | null {
  const lines = block.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  if (lines.length < 2) return null;

  // Extract options via regex
  const optionPattern =
    /(?:^|\n)\s*(?:\(?([a-dA-D1-4])\)|([a-dA-D1-4])[\.\)]|\[([a-dA-D1-4])\])\s*(.*?)(?=(?:\n\s*(?:\(?[a-dA-D1-4]\)|[a-dA-D1-4][\.\)]|\[[a-dA-D1-4]\])\s*)|$)/gs;

  const extractedOpts: { letter: string; text: string }[] = [];
  let optMatch: RegExpExecArray | null;
  while ((optMatch = optionPattern.exec(block)) !== null) {
    const letter = (optMatch[1] || optMatch[2] || optMatch[3]).toUpperCase();
    const text = optMatch[4]?.trim() || '';
    extractedOpts.push({ letter, text });
  }

  let options: [string, string, string, string];
  if (extractedOpts.length >= 4) {
    options = [
      extractedOpts.find((o) => o.letter === 'A' || o.letter === '1')?.text || 'Option A',
      extractedOpts.find((o) => o.letter === 'B' || o.letter === '2')?.text || 'Option B',
      extractedOpts.find((o) => o.letter === 'C' || o.letter === '3')?.text || 'Option C',
      extractedOpts.find((o) => o.letter === 'D' || o.letter === '4')?.text || 'Option D',
    ];
  } else {
    // Fallback: take last 4 non-empty lines as options
    const nonEmpty = lines.filter((l) => l.length > 0);
    if (nonEmpty.length >= 5) {
      options = [
        nonEmpty[nonEmpty.length - 4],
        nonEmpty[nonEmpty.length - 3],
        nonEmpty[nonEmpty.length - 2],
        nonEmpty[nonEmpty.length - 1],
      ];
    } else {
      return null;
    }
  }

  // Extract question text (everything before the first option)
  const firstOptIdx = extractedOpts.length > 0
    ? block.indexOf(extractedOpts[0].text)
    : -1;
  let questionText = firstOptIdx > 0
    ? block.substring(0, firstOptIdx).replace(/^(?:Question|Q)\s*[:.]?\s*\d+\s*[:.\-)–—]?\s*/i, '').trim()
    : lines[0];

  questionText = questionText
    .replace(/^\d+\s*[:.\-)–—]\s*/, '')
    .replace(/^\d+\s*(?:point|points|marks?)\s*/i, '')
    .trim();

  if (questionText.length < 3) return null;

  // Look for answer markers
  let answerIndex: number | null = null;
  let answerSource: AnswerSource = 'Not Available';
  let hasExplicitAnswer = false;
  let acceptedAnswerText: string | null = null;

  const ansMatch = block.match(
    /(?:Accepted Answers?|Correct Answer|Answer|Key|Ans)\s*[:\-]?\s*([A-Da-d0-4]|\([A-Da-d]\)|\[[A-Da-d]\]|[^\n]+)/i
  );
  if (ansMatch) {
    acceptedAnswerText = ansMatch[1].trim();
    const letterPart = acceptedAnswerText.match(/^(?:\(?([A-Da-d])\)?)/);
    if (letterPart) {
      answerIndex = 'ABCD'.indexOf(letterPart[1].toUpperCase());
      if (answerIndex >= 0) {
        answerSource = 'PDF';
        hasExplicitAnswer = true;
      }
    }
  }

  return {
    id: `draft-s2-${questionNumber}-${Date.now().toString(36)}`,
    originalQuestionNumber: questionNumber,
    questionText,
    options,
    correctAnswerIndex: answerIndex !== null && answerIndex >= 0 ? answerIndex : null,
    hasExplicitAnswer,
    acceptedAnswerText,
    answerSource,
    isApproved: false,
    weekNumber,
    isValid: questionText.length > 5,
    needsReview: !hasExplicitAnswer,
    reviewReason: !hasExplicitAnswer ? 'No accepted answer found' : undefined,
    extractionMethod: 'text',
  };
}

// ======================================================================
// DEDUPLICATION
// ======================================================================

function deduplicateQuestions(questions: ExtractedQuestionDraft[]): ExtractedQuestionDraft[] {
  const seen = new Set<string>();
  return questions.filter((q) => {
    const normalized = q.questionText
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 60);
    if (normalized.length < 10) return true;
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

// ======================================================================
// ANSWER KEY FUNCTIONS (preserved from original)
// ======================================================================

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
