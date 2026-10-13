import fitz
import os
import re
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

def extract_week(wk_num, pdf_path):
    doc = fitz.open(pdf_path)
    cleaned_pages = []
    for page in doc:
        ptxt = page.get_text()
        lines = ptxt.splitlines()
        if lines and lines[-1].strip().isdigit():
            lines = lines[:-1]
        cleaned_pages.append('\n'.join(lines))
    full_text = '\n'.join(cleaned_pages)
    
    # 1. Extract Case Studies
    cs_pattern = r'Case\s+Study\s+(\d+)\s*\nData for Questions\s+(\d+)\s+to\s+(\d+)\s*\n(.*?)(?=Question\s+\d+\s*:)'
    cs_matches = list(re.finditer(cs_pattern, full_text, re.DOTALL))
    
    case_studies = {}
    for cs in cs_matches:
        cs_num = int(cs.group(1))
        q_start = int(cs.group(2))
        q_end = int(cs.group(3))
        cs_body = cs.group(4).strip()
        case_studies[(q_start, q_end)] = {
            'num': cs_num,
            'body': cs_body
        }
        
    # 2. Extract Questions
    q_indices = [(m.start(), int(m.group(1))) for m in re.finditer(r'Question\s+(\d+)\s*:', full_text)]
    
    questions = []
    for idx, (start_pos, q_num) in enumerate(q_indices):
        end_pos = q_indices[idx+1][0] if idx + 1 < len(q_indices) else len(full_text)
        block = full_text[start_pos:end_pos].strip()
        
        # Trim next Case Study if present at end of block
        cs_m = re.search(r'\n\s*(?:Week\s+\d+\s+)?Case\s+Study\s+\d+', block)
        if cs_m:
            block = block[:cs_m.start()].strip()
            
        q_m = re.search(r'Question\s+\d+\s*:\s*(.*?)(?=\s*[A-D]\))', block, re.DOTALL)
        q_text_raw = q_m.group(1).strip()
        
        # Normalize whitespace in raw question text while keeping lines readable
        q_lines = [l.strip() for l in q_text_raw.splitlines() if l.strip()]
        q_text_clean = ' '.join(q_lines)
        
        # Find which case study this belongs to
        context_text = ''
        for (qs, qe), cs_info in case_studies.items():
            if qs <= q_num <= qe:
                # Clean lines of case study body
                cs_lines = [l.strip() for l in cs_info['body'].splitlines() if l.strip()]
                cs_formatted = '\n'.join(cs_lines)
                context_text = f"Case Study {cs_info['num']}\n{cs_formatted}"
                break
                
        if context_text:
            full_question_text = f"{context_text}\n\nQuestion {q_num}: {q_text_clean}"
        else:
            full_question_text = f"Question {q_num}: {q_text_clean}"
        
        opt_a = re.search(r'A\)\s*(.*?)(?=\s*B\))', block, re.DOTALL).group(1).strip()
        opt_b = re.search(r'B\)\s*(.*?)(?=\s*C\))', block, re.DOTALL).group(1).strip()
        opt_c = re.search(r'C\)\s*(.*?)(?=\s*D\))', block, re.DOTALL).group(1).strip()
        opt_d = re.search(r'D\)\s*(.*?)(?=\s*Correct\s+Answer\s*:)', block, re.DOTALL).group(1).strip()
        
        opts = [
            ' '.join([l.strip() for l in opt_a.splitlines() if l.strip()]),
            ' '.join([l.strip() for l in opt_b.splitlines() if l.strip()]),
            ' '.join([l.strip() for l in opt_c.splitlines() if l.strip()]),
            ' '.join([l.strip() for l in opt_d.splitlines() if l.strip()]),
        ]
        
        ans_letter = re.search(r'Correct\s+Answer\s*:\s*([A-D])', block).group(1).strip()
        correct_index = {'A': 0, 'B': 1, 'C': 2, 'D': 3}[ans_letter]
        
        exp_m = re.search(r'Explanation\s*:\s*(.*)', block, re.DOTALL)
        exp_text = ' '.join([l.strip() for l in exp_m.group(1).strip().splitlines() if l.strip()]) if exp_m else ''
        
        questions.append({
            'id': f'q-dl-w{wk_num}-{q_num}',
            'courseId': 'course-deep-learning-master',
            'weekNumber': wk_num,
            'originalQuestionNumber': q_num,
            'sourcePdfName': f'DeepLearning_July_Oct_2026_Week{wk_num}.pdf',
            'questionText': full_question_text,
            'options': opts,
            'correctAnswerIndex': correct_index,
            'answerSource': 'PDF',
            'isApproved': True,
            'explanation': exp_text
        })
    return questions

if __name__ == '__main__':
    all_extracted = {}
    total_q = 0
    for wk in range(1, 11):
        pdf_path = f'C:\\Users\\shaik\\Documents\\DeepLearning_July_Oct_2026_Week{wk}.pdf'
        qs = extract_week(wk, pdf_path)
        all_extracted[wk] = qs
        total_q += len(qs)
        print(f"Week {wk}: Extracted {len(qs)} questions.")
        
    print(f"\nTotal extracted across 10 weeks: {total_q}")
    
    os.makedirs('extracted_dl_weeks', exist_ok=True)
    with open('extracted_dl_weeks/all_weeks.json', 'w', encoding='utf-8') as f:
        json.dump(all_extracted, f, indent=2, ensure_ascii=False)
        
    for wk, qs in all_extracted.items():
        with open(f'extracted_dl_weeks/week_{wk}.json', 'w', encoding='utf-8') as f:
            json.dump(qs, f, indent=2, ensure_ascii=False)
    print("Saved JSON files in extracted_dl_weeks/")
