import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = "https://kbebriigrnkgzzzsqymk.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZWJyaWlncm5rZ3p6enNxeW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTI0NjksImV4cCI6MjEwNTIyODQ2OX0.9CBS8W5yGpWoHCssRR6uGFCMQR19ZlDes6Pa5DAPZzU";

const ADMIN_EMAIL = "admin@prepstudylab.com";
const ADMIN_PASSWORD = "admin123";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON);

async function main() {
  // Sign in as admin to satisfy RLS policies
  const { data: authData, error: authErr } = await sb.auth.signInWithPassword({
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD
  });
  if (authErr) {
    console.error("Auth error:", authErr.message);
    process.exit(1);
  }
  console.log(`Authenticated as Admin: ${authData.user.email} (ID: ${authData.user.id})`);

  // 1. Check existing courses first
  const { data: existingCourses } = await sb.from("courses").select("*");
  console.log("\n--- EXISTING COURSES IN SUPABASE BEFORE INSERTION ---");
  for (const c of existingCourses || []) {
    console.log(`ID: ${c.id}, Name: ${c.name}, Code: ${c.code}, Total Questions: ${c.total_questions}, Weeks: ${JSON.stringify(c.weeks)}`);
  }

  // Verify Deep Learning does not already exist
  const dlExisting = existingCourses?.find(c => c.name.toLowerCase().includes("deep learning") || c.id === "course-deep-learning-master");
  if (dlExisting) {
    console.log(`\nNotice: Deep Learning course already found with ID: ${dlExisting.id}.`);
  }

  // 2. Prepare the new course record
  const courseId = "course-deep-learning-master";
  const coursePayload = {
    id: courseId,
    code: "DL-101",
    name: "Deep Learning",
    description: "Comprehensive Question Bank covering Deep Learning foundations, neural networks, optimization, autoencoders, regularizations, and CNN architectures.",
    status: "published",
    published_at: new Date().toISOString(),
    weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    total_questions: 200
  };

  const { data: cData, error: cErr } = await sb.from("courses").upsert(coursePayload).select();
  if (cErr) {
    console.error("Course upsert error:", cErr.message);
    process.exit(1);
  }
  console.log(`\nCourse Upsert Success: ${cData[0].name} (ID: ${cData[0].id})`);

  // 3. Load all questions from extracted_dl_weeks/
  const allQuestions = [];
  for (let w = 1; w <= 10; w++) {
    const filePath = path.join("extracted_dl_weeks", `week_${w}.json`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const weekData = JSON.parse(fileContent);
    for (const q of weekData) {
      allQuestions.push({
        id: q.id,
        course_id: courseId,
        week_number: q.weekNumber,
        source_pdf_name: q.sourcePdfName || `DeepLearning_July_Oct_2026_Week${w}.pdf`,
        question_text: q.questionText,
        options: q.options,
        correct_answer_index: q.correctAnswerIndex,
        explanation: q.explanation || ""
      });
    }
  }

  console.log(`\nTotal questions to insert: ${allQuestions.length}`);

  // 4. Insert in chunks of 50
  const chunkSize = 50;
  for (let i = 0; i < allQuestions.length; i += chunkSize) {
    const chunk = allQuestions.slice(i, i + chunkSize);
    const { error: qErr } = await sb.from("questions").upsert(chunk);
    if (qErr) {
      console.error(`Chunk error at ${i}:`, qErr.message);
      process.exit(1);
    }
    console.log(`Inserted chunk ${Math.floor(i / chunkSize) + 1} (${chunk.length} questions)`);
  }

  // 5. Verification after insertion
  console.log("\n--- VERIFICATION AFTER INSERTION ---");
  const { data: coursesAfter } = await sb.from("courses").select("*").order("created_at");
  console.log(`Total courses in Supabase: ${coursesAfter.length}`);
  for (const c of coursesAfter) {
    const { count } = await sb.from("questions").select("*", { count: "exact", head: true }).eq("course_id", c.id);
    console.log(`Course: '${c.name}' (ID: ${c.id}) -> Status: ${c.status}, Weeks: ${JSON.stringify(c.weeks)}, Stored Questions: ${count}`);
  }

  // Week-by-week verification for Deep Learning
  console.log("\n--- DEEP LEARNING WEEK-BY-WEEK QUESTIONS COUNT ---");
  for (let w = 1; w <= 10; w++) {
    const { count: wkCount } = await sb.from("questions").select("*", { count: "exact", head: true })
      .eq("course_id", courseId)
      .eq("week_number", w);
    console.log(`Week ${w}: ${wkCount} questions in Supabase`);
  }
}

main().catch(console.error);
