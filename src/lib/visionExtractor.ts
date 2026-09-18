import { SupabaseClient } from '@supabase/supabase-js';
import { VisionPageResult, VisionExtractedQuestion } from '../types';

// Cache for already-processed pages to avoid re-processing
const pageCache = new Map<string, VisionPageResult>();

/**
 * Clears the extraction cache (call when starting a new PDF upload).
 */
export function clearExtractionCache(): void {
  pageCache.clear();
}

/**
 * Generate a cache key for a specific page of a specific PDF.
 */
function cacheKey(pdfName: string, pageNumber: number): string {
  return `${pdfName}::${pageNumber}`;
}

/**
 * Extract structured question data from a single PDF page image
 * by calling the Supabase Edge Function (which calls Gemini Vision API).
 *
 * Includes retry logic (max 2 retries) and response validation.
 */
export async function extractPageViaVision(
  supabaseClient: SupabaseClient,
  imageBase64: string,
  pageNumber: number,
  totalPages: number,
  pdfName: string,
  mimeType: string = 'image/png'
): Promise<VisionPageResult> {
  // Check cache first
  const key = cacheKey(pdfName, pageNumber);
  const cached = pageCache.get(key);
  if (cached) {
    return cached;
  }

  const maxRetries = 2;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const { data, error } = await supabaseClient.functions.invoke('extract-page', {
        body: {
          imageBase64,
          pageNumber,
          totalPages,
          mimeType,
        },
      });

      if (error) {
        throw new Error(error.message || 'Edge function returned an error');
      }

      if (!data) {
        throw new Error('Empty response from document processor');
      }

      // Validate and normalize the response
      const result = parseVisionResponse(data, pageNumber);

      // Cache the successful result
      pageCache.set(key, result);

      return result;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      // Wait before retry (exponential backoff: 1s, 2s)
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, (attempt + 1) * 1000));
      }
    }
  }

  // All retries failed — return an empty result with no questions
  console.warn(`Vision extraction failed for page ${pageNumber} after ${maxRetries + 1} attempts:`, lastError);
  return {
    pageNumber,
    weekHeading: null,
    questions: [],
  };
}

/**
 * Validates and normalizes the raw JSON response from the edge function
 * into a typed VisionPageResult.
 */
function parseVisionResponse(data: unknown, fallbackPageNumber: number): VisionPageResult {
  // Handle case where data might be a string that needs parsing
  let parsed: Record<string, unknown>;
  if (typeof data === 'string') {
    try {
      parsed = JSON.parse(data);
    } catch {
      return { pageNumber: fallbackPageNumber, weekHeading: null, questions: [] };
    }
  } else if (data && typeof data === 'object') {
    parsed = data as Record<string, unknown>;
  } else {
    return { pageNumber: fallbackPageNumber, weekHeading: null, questions: [] };
  }

  // Check for error responses
  if ('error' in parsed && parsed.error) {
    console.warn('Vision extraction error:', parsed.error);
    return { pageNumber: fallbackPageNumber, weekHeading: null, questions: [] };
  }

  const pageNumber = typeof parsed.page_number === 'number' ? parsed.page_number : fallbackPageNumber;
  const weekHeading = typeof parsed.week_heading === 'string' ? parsed.week_heading : null;

  const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : [];

  const questions: VisionExtractedQuestion[] = rawQuestions.map((q: Record<string, unknown>) => ({
    question_number: typeof q.question_number === 'number' ? q.question_number : null,
    question_text: typeof q.question_text === 'string' ? q.question_text.trim() : '',
    option_a: typeof q.option_a === 'string' ? q.option_a.trim() : null,
    option_b: typeof q.option_b === 'string' ? q.option_b.trim() : null,
    option_c: typeof q.option_c === 'string' ? q.option_c.trim() : null,
    option_d: typeof q.option_d === 'string' ? q.option_d.trim() : null,
    accepted_answer_text: typeof q.accepted_answer_text === 'string' ? q.accepted_answer_text.trim() : null,
    is_partial: q.is_partial === true,
    partial_position:
      q.partial_position === 'start' || q.partial_position === 'end'
        ? q.partial_position
        : null,
  }));

  // Filter out questions with no meaningful text
  const validQuestions = questions.filter(
    (q) => q.question_text.length > 5 || (q.option_a && q.option_b)
  );

  return {
    pageNumber,
    weekHeading,
    questions: validQuestions,
  };
}

export interface PageImageBatchItem {
  pageNumber: number;
  imageBase64: string;
  mimeType?: string;
}

/**
 * Extract structured question data from a BATCH of PDF page images (e.g. 8 pages)
 * in a single round-trip to the Supabase Edge Function.
 *
 * Includes retry logic (max 2 retries) with exponential backoff on transient errors/rate limits.
 * Normalizes and validates each page's response into VisionPageResult.
 */
export async function extractBatchViaVision(
  supabaseClient: SupabaseClient,
  pages: PageImageBatchItem[],
  totalPages: number,
  pdfName: string
): Promise<VisionPageResult[]> {
  // Check which pages are already cached
  const uncachedPages: PageImageBatchItem[] = [];
  const resultsByPage = new Map<number, VisionPageResult>();

  for (const page of pages) {
    const key = cacheKey(pdfName, page.pageNumber);
    const cached = pageCache.get(key);
    if (cached) {
      resultsByPage.set(page.pageNumber, cached);
    } else {
      uncachedPages.push(page);
    }
  }

  // If all pages in this batch were cached, return them in order
  if (uncachedPages.length === 0) {
    return pages.map((p) => resultsByPage.get(p.pageNumber)!);
  }

  const maxRetries = 2;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const { data, error } = await supabaseClient.functions.invoke('extract-page', {
        body: {
          pages: uncachedPages.map((p) => ({
            pageNumber: p.pageNumber,
            imageBase64: p.imageBase64,
            mimeType: p.mimeType || 'image/jpeg',
          })),
          totalPages,
        },
      });

      if (error) {
        throw new Error(error.message || 'Edge function returned an error');
      }

      if (!data) {
        throw new Error('Empty response from document processor');
      }

      // Parse the response
      const parsedBatchResults = parseVisionBatchResponse(data, uncachedPages.map((p) => p.pageNumber));

      // Cache each successful page result
      for (const res of parsedBatchResults) {
        pageCache.set(cacheKey(pdfName, res.pageNumber), res);
        resultsByPage.set(res.pageNumber, res);
      }

      // Return all pages in original order
      return pages.map((p) => {
        return resultsByPage.get(p.pageNumber) || {
          pageNumber: p.pageNumber,
          weekHeading: null,
          questions: [],
        };
      });
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`Vision batch extraction attempt ${attempt + 1} failed:`, lastError.message);
      if (attempt < maxRetries) {
        // Exponential backoff: 2s, 4s
        await new Promise((resolve) => setTimeout(resolve, (attempt + 1) * 2000));
      }
    }
  }

  // All retries failed for this batch — mark uncached pages as empty/needs review, don't fail entire document
  console.error(`Vision batch extraction failed after ${maxRetries + 1} attempts:`, lastError);
  for (const p of uncachedPages) {
    resultsByPage.set(p.pageNumber, {
      pageNumber: p.pageNumber,
      weekHeading: null,
      questions: [],
    });
  }

  return pages.map((p) => resultsByPage.get(p.pageNumber)!);
}

/**
 * Validates and normalizes the raw batch JSON response into an array of VisionPageResult.
 */
function parseVisionBatchResponse(data: unknown, fallbackPageNumbers: number[]): VisionPageResult[] {
  let parsed: any;
  if (typeof data === 'string') {
    try {
      parsed = JSON.parse(data);
    } catch {
      return fallbackPageNumbers.map((num) => ({ pageNumber: num, weekHeading: null, questions: [] }));
    }
  } else if (data && typeof data === 'object') {
    parsed = data;
  } else {
    return fallbackPageNumbers.map((num) => ({ pageNumber: num, weekHeading: null, questions: [] }));
  }

  const rawPages: any[] = Array.isArray(parsed.pages) ? parsed.pages : [];
  const resultMap = new Map<number, VisionPageResult>();

  for (const pageObj of rawPages) {
    if (!pageObj || typeof pageObj !== 'object') continue;
    const pageNum = typeof pageObj.page_number === 'number' ? pageObj.page_number : 0;
    const singleResult = parseVisionResponse(pageObj, pageNum);
    if (pageNum > 0) {
      resultMap.set(pageNum, singleResult);
    }
  }

  return fallbackPageNumbers.map((num) => {
    return resultMap.get(num) || { pageNumber: num, weekHeading: null, questions: [] };
  });
}

/**
 * Check if the Supabase Edge Function is available and properly configured.
 * Returns true if the edge function responds, false otherwise.
 */
export async function isVisionExtractionAvailable(
  supabaseClient: SupabaseClient
): Promise<boolean> {
  try {
    // Send a minimal probe request
    const { error } = await supabaseClient.functions.invoke('extract-page', {
      body: {
        imageBase64: '',
        pageNumber: 0,
        totalPages: 0,
      },
    });
    // Even if it returns an error about missing data, the function is reachable
    // A 404 or network error means it's not deployed
    return !error || !error.message?.includes('404');
  } catch {
    return false;
  }
}

