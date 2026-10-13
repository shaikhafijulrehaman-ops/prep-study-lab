import json
import os

with open("src/lib/seedData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update INITIAL_COURSES
dl_course_obj = '''  {
    id: 'course-deep-learning-master',
    code: 'DL-101',
    name: 'Deep Learning',
    description: 'Comprehensive Question Bank covering Deep Learning foundations, neural networks, optimization, autoencoders, regularizations, and CNN architectures.',
    totalQuestions: 200,
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    status: 'published',
    sourcePdfName: 'DeepLearning_July_Oct_2026_Week1.pdf - DeepLearning_July_Oct_2026_Week10.pdf',
    createdAt: '2026-10-13T13:00:00.000Z',
    publishedAt: '2026-10-13T13:00:00.000Z',
  },
'''

if "course-deep-learning-master" not in content:
    content = content.replace("export const INITIAL_COURSES: Course[] = [\n", "export const INITIAL_COURSES: Course[] = [\n" + dl_course_obj)

# 2. Collect all questions from week 1 to 10
all_dl_qs = []
for w in range(1, 11):
    with open(f"extracted_dl_weeks/week_{w}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    for q in data:
        all_dl_qs.append({
            "id": q["id"],
            "courseId": "course-deep-learning-master",
            "weekNumber": q["weekNumber"],
            "originalQuestionNumber": q["originalQuestionNumber"],
            "sourcePdfName": q.get("sourcePdfName", f"DeepLearning_July_Oct_2026_Week{w}.pdf"),
            "questionText": q["questionText"],
            "options": q["options"],
            "correctAnswerIndex": q["correctAnswerIndex"],
            "answerSource": q.get("answerSource", "PDF"),
            "isApproved": q.get("isApproved", True),
            "explanation": q.get("explanation", ""),
            "createdAt": "2026-10-13T13:00:00.000Z"
        })

dl_qs_ts = "\nconst DL_QUESTIONS: Question[] = " + json.dumps(all_dl_qs, indent=2) + ";\n\n"

# Replace INITIAL_QUESTIONS
target_block = '''export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
  ...HRM_QUESTIONS,
];'''

new_target_block = dl_qs_ts + '''export const INITIAL_QUESTIONS: Question[] = [
  ...IIOT_6_WEEKS_QUESTIONS,
  ...IIOT_WEEKS_7_8_9_QUESTIONS,
  ...IIOT_WEEK_10_QUESTIONS,
  ...HRM_QUESTIONS,
  ...DL_QUESTIONS,
];'''

if "...DL_QUESTIONS" not in content:
    content = content.replace(target_block, new_target_block)

with open("src/lib/seedData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated seedData.ts with Deep Learning course and {len(all_dl_qs)} questions!")
