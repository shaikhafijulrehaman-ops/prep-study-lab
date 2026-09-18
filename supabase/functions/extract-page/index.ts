// Supabase Edge Function: extract-page
// Extracts structured question content from a PDF page image using Gemini Vision API.
// Reads GEMINI_API_KEY strictly from server-side environment secrets.

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';

const EXTRACTION_PROMPT = `Extract exactly the text and structure visible on EACH page image in this batch.

STRICT RULES:
- Do NOT answer any question.
- Do NOT infer missing information.
- Do NOT rewrite or paraphrase any text.
- Do NOT correct spelling.
- Do NOT use external knowledge.
- Do NOT determine which option is academically correct.
- Extract ONLY what is visually printed on each page image.
- Retain the exact source page number for each page and question.

For EACH page image:
- page_number: The exact source page number labeled above that image (e.g. 1, 2, 23).
- week_heading: The week heading if one appears on that page (e.g. "Week 01 : Assignment 01"). null if none.
- questions: Array of multiple-choice questions on that page.
  For EACH question:
  - question_number: The question number as printed.
  - question_text: The exact question text as printed, preserving punctuation, abbreviations, capitalization, numbers, units, and technical terms.
  - option_a: Exact text of option A as printed. null if not visible.
  - option_b: Exact text of option B as printed. null if not visible.
  - option_c: Exact text of option C as printed. null if not visible.
  - option_d: Exact text of option D as printed. null if not visible.
  - accepted_answer_text: The exact text printed after "Accepted Answer" or "Correct Answer" or "Answer" label. Include option letter and text if both are printed. null if not visible on this page.
  - is_partial: true if the question appears to be cut off at the page boundary (continues on next page or is continuation from previous). false if question is complete on this page.
  - partial_position: "start" if question begins on this page but is cut off at the bottom. "end" if this page contains continuation from previous page. null if complete.

Return a JSON object with this exact schema:
{
  "pages": [
    {
      "page_number": <number>,
      "week_heading": <string | null>,
      "questions": [
        {
          "question_number": <number | null>,
          "question_text": <string>,
          "option_a": <string | null>,
          "option_b": <string | null>,
          "option_c": <string | null>,
          "option_d": <string | null>,
          "accepted_answer_text": <string | null>,
          "is_partial": <boolean>,
          "partial_position": "start" | "end" | null
        }
      ]
    }
  ]
}

If no questions are visible on a page, return: { "page_number": N, "week_heading": <detected heading or null>, "questions": [] }
Return ONLY valid JSON. No markdown fences, no explanation, no extra text.`;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Validate API key is configured
    if (!GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: 'GEMINI_API_KEY is not configured in Supabase Edge Function Secrets. Set it via Supabase Dashboard -> Project Settings -> Edge Functions -> Secrets.',
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate authorization (accepts Authorization or apikey)
    const authHeader = req.headers.get('Authorization') || req.headers.get('apikey');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header or apikey' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const body = await req.json();
    let pageItems: Array<{ pageNumber: number; imageBase64: string; mimeType?: string }> = [];

    if (Array.isArray(body.pages) && body.pages.length > 0) {
      pageItems = body.pages;
    } else if (body.imageBase64 && body.pageNumber !== undefined) {
      pageItems = [
        {
          pageNumber: body.pageNumber,
          imageBase64: body.imageBase64,
          mimeType: body.mimeType,
        },
      ];
    } else {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: pages array or imageBase64/pageNumber' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const totalPages = body.totalPages || pageItems.length;

    // Build parts for Gemini
    const parts: any[] = [
      {
        text: `${EXTRACTION_PROMPT}\n\nThis batch contains ${pageItems.length} pages of a ${totalPages}-page document.`,
      },
    ];

    for (const p of pageItems) {
      parts.push({
        text: `\n=== SOURCE PAGE NUMBER: ${p.pageNumber} of ${totalPages} ===\n`,
      });
      parts.push({
        inline_data: {
          mime_type: p.mimeType || 'image/jpeg',
          data: p.imageBase64,
        },
      });
    }

    // Call Gemini Vision API
    const geminiPayload = {
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.1,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    };

    const CANDIDATE_MODELS = [
      Deno.env.get('GEMINI_MODEL') || '',
      'gemini-3-flash-preview',
      'gemini-flash-latest',
      'gemini-3.6-flash',
      'gemini-3.7-flash',
      'gemini-3.8-flash',
      'gemini-3.1-pro-preview',
    ].filter(Boolean);

    let geminiResult = null;
    let lastErrorText = '';
    let lastStatus = 500;

    for (const model of CANDIDATE_MODELS) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
      });

      if (res.ok) {
        geminiResult = await res.json();
        break;
      }

      lastStatus = res.status;
      lastErrorText = await res.text();
      console.warn(`Gemini model ${model} failed (status ${res.status}):`, lastErrorText);

      // If client bad request (400), payload is invalid so retrying other models won't help
      if (res.status === 400) {
        break;
      }
    }

    if (!geminiResult) {
      return new Response(
        JSON.stringify({
          error: `Document vision processing failed (status ${lastStatus})`,
          detail: lastErrorText,
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract the text content from Gemini response
    let extractedJson: any = null;
    try {
      const textContent = geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const cleaned = textContent
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();
      extractedJson = JSON.parse(cleaned);
    } catch (parseErr) {
      console.error('Failed to parse Gemini response as JSON:', parseErr);
      return new Response(
        JSON.stringify({
          error: 'Failed to parse structured response from document processor',
          rawResponse: geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text?.substring(0, 500),
        }),
        { status: 422, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Normalize output format: ensure both { pages: [...] } and backwards-compatible fields exist
    if (!extractedJson.pages && Array.isArray(extractedJson.questions)) {
      // Single-page schema returned at root level
      extractedJson = {
        pages: [
          {
            page_number: extractedJson.page_number || pageItems[0]?.pageNumber || 1,
            week_heading: extractedJson.week_heading || null,
            questions: extractedJson.questions || [],
          },
        ],
      };
    } else if (!Array.isArray(extractedJson.pages)) {
      extractedJson = { pages: [] };
    }

    // Backwards compatibility for single-page callers
    if (pageItems.length === 1 && extractedJson.pages.length > 0) {
      extractedJson.page_number = extractedJson.pages[0].page_number;
      extractedJson.week_heading = extractedJson.pages[0].week_heading;
      extractedJson.questions = extractedJson.pages[0].questions;
    }

    return new Response(
      JSON.stringify(extractedJson),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Edge function error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal processing error', detail: String(err) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}

// Support both native Deno.serve and legacy std/http
// @ts-ignore
if (typeof Deno.serve === 'function') {
  // @ts-ignore
  Deno.serve(handler);
} else {
  const { serve } = await import('https://deno.land/std@0.177.0/http/server.ts');
  serve(handler);
}
