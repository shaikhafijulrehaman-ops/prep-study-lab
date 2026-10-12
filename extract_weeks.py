import os
import sys
import json
import base64
import time
import requests
import fitz

BASE_DIR = r"C:\Users\shaik\Documents"
OUT_DIR = r"C:\Users\shaik\Documents\mocktest\extracted_weeks"
CACHE_DIR = r"C:\Users\shaik\Documents\mocktest\extracted_weeks\cache"

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(CACHE_DIR, exist_ok=True)

SUPABASE_URL = "https://kbebriigrnkgzzzsqymk.supabase.co/functions/v1/extract-page"
SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZWJyaWlncm5rZ3p6enNxeW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTI0NjksImV4cCI6MjEwNTIyODQ2OX0.9CBS8W5yGpWoHCssRR6uGFCMQR19ZlDes6Pa5DAPZzU"

HEADERS = {
    "Authorization": f"Bearer {SUPABASE_ANON}",
    "apikey": SUPABASE_ANON,
    "Content-Type": "application/json"
}

PDF_MAPPING = [
    (0, "Week 0.pdf"),
    (1, "WEEK 01.pdf"),
    (2, "WEEK 2.pdf"),
    (3, "WEEK 03.pdf"),
    (4, "WEEK 04.pdf"),
    (5, "WEEK 5.pdf"),
    (6, "WEEK 06.pdf"),
    (7, "WEEK 07.pdf"),
    (8, "WEEK 08.pdf"),
    (9, "WEEK 09.pdf"),
    (10, "WEEK 10.pdf"),
    (11, "WEEK 11.pdf"),
    (12, "WEEK 12.pdf"),
]

def render_page(doc, page_num, dpi=135):
    page = doc[page_num]
    pix = page.get_pixmap(dpi=dpi)
    img_bytes = pix.tobytes("jpeg")
    return base64.b64encode(img_bytes).decode("utf-8")

def call_edge_function(pages_batch, total_pages, max_retries=3):
    payload = {
        "pages": pages_batch,
        "totalPages": total_pages
    }
    for attempt in range(max_retries):
        try:
            res = requests.post(SUPABASE_URL, headers=HEADERS, json=payload, timeout=90)
            if res.status_code == 200:
                return res.json()
            print(f"  [Attempt {attempt+1}] HTTP {res.status_code}: {res.text[:200]}")
        except Exception as e:
            print(f"  [Attempt {attempt+1}] Error: {e}")
        time.sleep(2 * (attempt + 1))
    return None

def normalize(text):
    if not text:
        return ""
    import re
    t = text.lower().strip()
    t = re.sub(r'^["\'“”‘’\(\[\{]+|["\'“”‘’\)\]\}]+$', '', t)
    t = re.sub(r'[.,;:]+$', '', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

def strip_prefix(text):
    if not text:
        return ""
    import re
    return re.sub(r'^(?:option\s+)?\(?[a-da-d]\)?[\s.):,\-–—]+', '', text, flags=re.I).strip()

def map_accepted_answer(accepted_text, options):
    import re
    if not accepted_text or not accepted_text.strip():
        return None, "No accepted answer printed"

    raw = accepted_text.strip()
    # Match pattern like "a.", "a)", "Option A", "A. Text"
    m = re.match(r'^(?:Option\s+)?\(?([A-Da-d])\)?(?:[\s.):,\-–—]+(.*))?$', raw)
    letters = ['A', 'B', 'C', 'D']
    if m:
        letter = m.group(1).upper()
        idx = letters.index(letter)
        tail = (m.group(2) or "").strip()
        if tail:
            # If text is also given after letter, verify it matches the option or tail
            opt_norm = normalize(options[idx])
            opt_strip = normalize(strip_prefix(options[idx]))
            tail_norm = normalize(tail)
            if tail_norm == opt_norm or tail_norm == opt_strip:
                return idx, None
            # Even if minor OCR mismatch in tail, letter was explicit
            return idx, None
        return idx, None

    # Text match directly against options
    norm_ans = normalize(raw)
    norm_strip_ans = normalize(strip_prefix(raw))
    for i, opt in enumerate(options):
        if normalize(opt) == norm_ans or normalize(strip_prefix(opt)) == norm_strip_ans:
            return i, None

    return None, f"Could not map '{raw}' to options"

def process_pdf(week_num, filename):
    pdf_path = os.path.join(BASE_DIR, filename)
    out_file = os.path.join(OUT_DIR, f"week_{week_num}.json")
    print(f"\n==========================================")
    print(f"Processing Week {week_num} from '{filename}'")
    print(f"==========================================")

    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} does not exist!")
        return None

    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"Total pages: {total_pages}")

    # Check page cache
    page_results = {}
    batch_size = 2
    batches = []
    current_batch = []

    for p in range(total_pages):
        page_num = p + 1
        cache_file = os.path.join(CACHE_DIR, f"w{week_num}_p{page_num}.json")
        if os.path.exists(cache_file):
            with open(cache_file, "r", encoding="utf-8") as f:
                page_results[page_num] = json.load(f)
        else:
            current_batch.append(page_num)
            if len(current_batch) >= batch_size:
                batches.append(current_batch)
                current_batch = []

    if current_batch:
        batches.append(current_batch)

    print(f"Cached pages: {len(page_results)}, Batches to fetch: {len(batches)}")

    for b_idx, batch in enumerate(batches):
        print(f"Processing batch {b_idx+1}/{len(batches)}: pages {batch}...")
        batch_items = []
        for pn in batch:
            b64 = render_page(doc, pn - 1)
            batch_items.append({
                "pageNumber": pn,
                "imageBase64": b64,
                "mimeType": "image/jpeg"
            })
        
        resp = call_edge_function(batch_items, total_pages)
        if resp and "pages" in resp:
            for p_data in resp["pages"]:
                pn = p_data.get("page_number")
                if pn:
                    page_results[pn] = p_data
                    cache_file = os.path.join(CACHE_DIR, f"w{week_num}_p{pn}.json")
                    with open(cache_file, "w", encoding="utf-8") as f:
                        json.dump(p_data, f, indent=2)
        else:
            print(f"Failed to extract batch {batch}")

    # Reassemble all pages in order
    all_pages = []
    for pn in range(1, total_pages + 1):
        if pn in page_results:
            all_pages.append(page_results[pn])
        else:
            print(f"Warning: Page {pn} missing result!")
            all_pages.append({"page_number": pn, "questions": []})

    # Merge cross-page questions
    merged_questions = []
    pending = None

    for p in all_pages:
        for q in p.get("questions", []):
            is_partial = q.get("is_partial", False)
            pos = q.get("partial_position")

            if is_partial and pos == "end" and pending:
                merged = {
                    "question_number": pending.get("question_number") or q.get("question_number"),
                    "question_text": (pending.get("question_text", "") + " " + q.get("question_text", "")).strip(),
                    "option_a": pending.get("option_a") or q.get("option_a"),
                    "option_b": pending.get("option_b") or q.get("option_b"),
                    "option_c": pending.get("option_c") or q.get("option_c"),
                    "option_d": pending.get("option_d") or q.get("option_d"),
                    "accepted_answer_text": pending.get("accepted_answer_text") or q.get("accepted_answer_text"),
                    "source_page": pending.get("source_page", p.get("page_number")),
                }
                merged_questions.append(merged)
                pending = None
            elif is_partial and pos == "start":
                if pending:
                    merged_questions.append(pending)
                q["source_page"] = p.get("page_number")
                pending = q
            else:
                if pending:
                    merged_questions.append(pending)
                    pending = None
                q["source_page"] = p.get("page_number")
                merged_questions.append(q)

    if pending:
        merged_questions.append(pending)

    # Convert to standard format
    final_questions = []
    for idx, q in enumerate(merged_questions):
        raw_options = [
            q.get("option_a") or "Option A",
            q.get("option_b") or "Option B",
            q.get("option_c") or "Option C",
            q.get("option_d") or "Option D",
        ]
        # Clean option prefixes if the model included "a) " or "A. " inside the text
        cleaned_options = [strip_prefix(opt) for opt in raw_options]

        accepted_raw = q.get("accepted_answer_text")
        ans_idx, reason = map_accepted_answer(accepted_raw, cleaned_options)

        q_text = (q.get("question_text") or "").strip()
        has_text = len(q_text) > 3
        has_options = all(len(o) > 0 for o in cleaned_options)

        needs_review = (ans_idx is None) or (not has_text) or (not has_options)
        if not reason and needs_review:
            if ans_idx is None:
                reason = "No accepted answer found"
            elif not has_text:
                reason = "Incomplete question text"
            elif not has_options:
                reason = "Missing options"

        item = {
            "id": f"q-hrm-w{week_num}-{idx+1}",
            "original_question_number": q.get("question_number") or (idx + 1),
            "week_number": week_num,
            "source_pdf_name": filename,
            "source_page": q.get("source_page", 1),
            "question_text": q_text,
            "options": cleaned_options,
            "correct_answer_index": ans_idx,
            "accepted_answer_text": accepted_raw,
            "answer_source": "PDF" if ans_idx is not None else "Not Available",
            "is_approved": (ans_idx is not None and not needs_review),
            "needs_review": needs_review,
            "review_reason": reason,
            "explanation": ""
        }
        final_questions.append(item)

    # Save to file
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(final_questions, f, indent=2, ensure_ascii=False)

    verified = sum(1 for q in final_questions if q["correct_answer_index"] is not None)
    review_count = sum(1 for q in final_questions if q["needs_review"])

    print(f"Week {week_num} Extracted: {len(final_questions)} questions ({verified} verified, {review_count} need review)")
    return final_questions

if __name__ == "__main__":
    weeks_to_run = [int(arg) for arg in sys.argv[1:]] if len(sys.argv) > 1 else list(range(13))
    print("Running extraction for weeks:", weeks_to_run)
    for w, f in PDF_MAPPING:
        if w in weeks_to_run:
            process_pdf(w, f)
