import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || '';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const EXTRACTION_PROMPT = `Extract exactly the text and structure visible on this page image.

STRICT RULES:
- Do NOT answer any question.
- Do NOT infer missing information.
- Do NOT rewrite or paraphrase any text.
- Do NOT correct spelling.
- Do NOT use external knowledge.
- Do NOT determine which option is academically correct.
- Extract ONLY what is visually printed on the page.

Extract the following for EACH question visible on this page:
- week_heading: The week heading if one appears on this page (e.g. "Week 01 : Assignment 01"). null if none.
- question_number: The question number as printed.
- question_text: The exact question text as printed, preserving punctuation, abbreviations, capitalization, numbers, units, and technical terms. Include multi-line text.
- option_a: Exact text of option A as printed. null if not visible.
- option_b: Exact text of option B as printed. null if not visible.
- option_c: Exact text of option C as printed. null if not visible.
- option_d: Exact text of option D as printed. null if not visible.
- accepted_answer_text: The exact text printed after "Accepted Answer" or "Correct Answer" or "Answer" label. Include the option letter and text if both are printed. null if not visible on this page.
- is_partial: true if the question appears to be cut off at the page boundary (continues on next page or is continuation from previous). false if question is complete on this page.
- partial_position: "start" if question begins on this page but is cut off at the bottom. "end" if this page contains the continuation of a question from the previous page. null if the question is complete.

Return a JSON object with this exact schema:
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
      "partial_position": <string | null>
    }
  ]
}

If no questions are visible on this page, return: { "page_number": N, "week_heading": <detected heading or null>, "questions": [] }
Return ONLY valid JSON. No markdown fences, no explanation, no extra text.`;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Validate API key is configured
    if (!GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY is not configured. Set it via: supabase secrets set GEMINI_API_KEY=your_key' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate authorization
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the user is an admin via Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error: authError } = await supabase.auth.getUser(token);
      
      if (authError || !user) {
        return new Response(
          JSON.stringify({ error: 'Invalid or expired authentication token' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (!roleData || roleData.role !== 'admin') {
        return new Response(
          JSON.stringify({ error: 'Insufficient permissions. Admin role required.' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Parse request body
    const body = await req.json();
    const { imageBase64, pageNumber, totalPages, mimeType } = body;

    if (!imageBase64 || pageNumber === undefined) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: imageBase64, pageNumber' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const imgMime = mimeType || 'image/png';

    // Call Gemini Vision API
    const geminiPayload = {
      contents: [
        {
          parts: [
            {
              text: `${EXTRACTION_PROMPT}\n\nThis is page ${pageNumber} of ${totalPages || 'unknown'}.`,
            },
            {
              inline_data: {
                mime_type: imgMime,
                data: imageBase64,
              },
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    };

    const geminiResponse = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiPayload),
    });

    if (!geminiResponse.ok) {
      const errText = await geminiResponse.text();
      console.error('Gemini API error:', geminiResponse.status, errText);
      return new Response(
        JSON.stringify({ 
          error: `Document processing failed (status ${geminiResponse.status})`,
          detail: errText.substring(0, 200),
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const geminiResult = await geminiResponse.json();

    // Extract the text content from Gemini response
    let extractedJson = null;
    try {
      const textContent = geminiResult?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      // Clean potential markdown fences
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

    // Ensure page_number is set
    if (extractedJson && !extractedJson.page_number) {
      extractedJson.page_number = pageNumber;
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
});
