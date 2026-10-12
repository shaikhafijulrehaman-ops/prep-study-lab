import os
import json
from supabase import create_client

SUPABASE_URL = "https://kbebriigrnkgzzzsqymk.supabase.co"
SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZWJyaWlncm5rZ3p6enNxeW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTI0NjksImV4cCI6MjEwNTIyODQ2OX0.9CBS8W5yGpWoHCssRR6uGFCMQR19ZlDes6Pa5DAPZzU"

ADMIN_EMAIL = "admin@prepstudylab.com"
ADMIN_PASSWORD = "admin123"

sb = create_client(SUPABASE_URL, SUPABASE_ANON)

# Sign in as admin to satisfy RLS policies
auth_res = sb.auth.sign_in_with_password({
    "email": ADMIN_EMAIL,
    "password": ADMIN_PASSWORD
})
print(f"Authenticated as Admin: {auth_res.user.email} (ID: {auth_res.user.id})")

# 1. Check existing courses first to ensure safety
existing_courses = sb.table("courses").select("*").execute().data
print("\n--- EXISTING COURSES IN SUPABASE BEFORE INSERTION ---")
for c in existing_courses:
    print(f"ID: {c['id']}, Name: {c['name']}, Code: {c['code']}, Total Questions: {c['total_questions']}, Weeks: {c['weeks']}")

# 2. Prepare the new course record
course_id = "course-hrm-master"
course_payload = {
    "id": course_id,
    "code": "HRM-101",
    "name": "HUMAN RESOURCE MANAGEMENT",
    "description": "Comprehensive Question Bank covering Human Resource Management, Strategic HRD, Mentoring, and Organizational Development.",
    "status": "published",
    "published_at": "2026-10-12T13:00:00.000Z",
    "weeks": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "total_questions": 135
}

c_res = sb.table("courses").upsert(course_payload).execute()
print(f"\nCourse Upsert Success: {c_res.data[0]['name']} (ID: {c_res.data[0]['id']})")

# 3. Load all questions from extracted_weeks/
all_questions = []
for w in range(13):
    path = f"extracted_weeks/week_{w}.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    for q in data:
        all_questions.append({
            "id": q["id"],
            "course_id": course_id,
            "week_number": q["week_number"],
            "source_pdf_name": q.get("source_pdf_name", f"Week {w}"),
            "question_text": q["question_text"],
            "options": q["options"],
            "correct_answer_index": q["correct_answer_index"],
            "answer_source": q.get("answer_source", "PDF"),
            "is_approved": q.get("is_approved", True),
            "explanation": q.get("explanation", "")
        })

print(f"\nTotal questions to insert: {len(all_questions)}")

# 4. Insert in chunks of 50
chunk_size = 50
for i in range(0, len(all_questions), chunk_size):
    chunk = all_questions[i:i + chunk_size]
    q_res = sb.table("questions").upsert(chunk).execute()
    print(f"Inserted chunk {i // chunk_size + 1} ({len(chunk)} questions)")

print("\n--- VERIFICATION AFTER INSERTION ---")
courses_after = sb.table("courses").select("*").order("created_at").execute().data
print(f"Total courses: {len(courses_after)}")
for c in courses_after:
    q_count = sb.table("questions").select("id", count="exact").eq("course_id", c["id"]).execute().count
    print(f"Course: '{c['name']}' (ID: {c['id']}) -> Status: {c['status']}, Weeks: {c['weeks']}, Stored Questions: {q_count}")

