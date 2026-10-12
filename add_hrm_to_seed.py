import json
import os

with open("src/lib/seedData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update INITIAL_COURSES
hrm_course_obj = '''  {
    id: 'course-hrm-master',
    code: 'HRM-101',
    name: 'HUMAN RESOURCE MANAGEMENT',
    description: 'Comprehensive Question Bank covering Human Resource Management, Strategic HRD, Mentoring, and Organizational Development.',
    totalQuestions: 135,
    weeks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    status: 'published',
    sourcePdfName: 'Week 0.pdf - WEEK 12.pdf',
    createdAt: '2026-10-12T13:00:00.000Z',
    publishedAt: '2026-10-12T13:00:00.000Z',
  },
'''

if "course-hrm-master" not in content:
    content = content.replace("export const INITIAL_COURSES: Course[] = [\n", "export const INITIAL_COURSES: Course[] = [\n" + hrm_course_obj)

# 2. Collect all questions from week 0 to 12
all_hrm_qs = []
for w in range(13):
    with open(f"extracted_weeks/week_{w}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    for q in data:
        all_hrm_qs.append({
            "id": q["id"],
            "courseId": "course-hrm-master",
            "weekNumber": q["week_number"],
            "originalQuestionNumber": q["original_question_number"],
            "sourcePdfName": q.get("source_pdf_name", f"Week {w}.pdf"),
            "questionText": q["question_text"],
            "options": q["options"],
            "correctAnswerIndex": q["correct_answer_index"],
            "answerSource": q.get("answer_source", "PDF"),
            "isApproved": q.get("is_approved", True),
            "explanation": q.get("explanation", ""),
            "createdAt": "2026-10-12T13:00:00.000Z"
        })

hrm_qs_ts = "\nconst HRM_QUESTIONS: Question[] = " + json.dumps(all_hrm_qs, indent=2) + ";\n\n"

# Replace INITIAL_QUESTIONS
old_init_qs = '''export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
];'''

new_init_qs = hrm_qs_ts + '''export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
  ...HRM_QUESTIONS,
];'''

if "...HRM_QUESTIONS" not in content:
    content = content.replace(old_init_qs, new_init_qs)

with open("src/lib/seedData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated seedData.ts successfully with HRM Course and all 13 Weeks including Week 0!")
