import { Course, Question, MockAttempt, AttemptQuestionItem, UserProgress, MockConfig, ExtractedQuestionDraft } from '../types';
import { INITIAL_COURSES, INITIAL_QUESTIONS } from './seedData';
import { getSupabaseClient } from './supabase';

const KEYS = {
  COURSES: 'prep_studylab_courses_v1',
  QUESTIONS: 'prep_studylab_questions_v1',
  ATTEMPTS: 'prep_studylab_attempts_v1',
  ACTIVE_TEST: 'prep_studylab_active_test_v1',
};

// Fisher-Yates array shuffler
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const REMOVED_LEGACY_COURSE_IDS = new Set(['course-cloud-01', 'course-dl-02', 'course-algo-03']);
const DELETED_COURSES_KEY = 'prep_studylab_deleted_courses_v1';

/**
 * Dynamically extracts all distinct week numbers from questions.
 * Strictly sorts numerically (1, 2, ..., 9, 10, ...) - never lexicographically.
 */
export function deriveAvailableWeeks(questions: (Question | { weekNumber?: number; week_number?: number })[]): number[] {
  const weeks = new Set<number>();
  questions.forEach((q) => {
    const raw = 'weekNumber' in q && q.weekNumber !== undefined ? q.weekNumber : (q as any).week_number;
    const num = typeof raw === 'number' ? raw : parseInt(String(raw), 10);
    if (!isNaN(num) && num > 0) {
      weeks.add(num);
    }
  });
  return Array.from(weeks).sort((a, b) => a - b);
}

// ----------------- Courses & Questions -----------------

export function getCourses(publishedOnly: boolean = false): Course[] {
  try {
    const raw = localStorage.getItem(KEYS.COURSES);
    let deletedList: string[] = [];
    try {
      const dRaw = localStorage.getItem(DELETED_COURSES_KEY);
      if (dRaw) deletedList = JSON.parse(dRaw);
    } catch {}
    const deletedSet = new Set([...REMOVED_LEGACY_COURSE_IDS, ...deletedList]);

    const courseMap = new Map<string, Course>();
    INITIAL_COURSES.forEach((c) => {
      if (!deletedSet.has(c.id)) {
        courseMap.set(c.id, c);
      }
    });

    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((c) => {
          if (c && c.id && !deletedSet.has(c.id)) {
            courseMap.set(c.id, { ...c, status: c.status || 'published' });
          }
        });
      }
    }

    let courses = Array.from(courseMap.values());
    if (publishedOnly) {
      return courses.filter((c) => c.status === 'published');
    }
    return courses;
  } catch {
    return publishedOnly ? INITIAL_COURSES.filter((c) => c.status === 'published') : INITIAL_COURSES;
  }
}

/**
 * Loads published or all courses directly from Supabase.
 * Keeps local cache updated as single source of truth.
 */
export async function fetchCoursesFromSupabase(publishedOnly: boolean = false): Promise<Course[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getCourses(publishedOnly);

  try {
    let query = supabase.from('courses').select('*');
    if (publishedOnly) {
      query = query.eq('status', 'published');
    }
    const { data, error } = await query.order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
      return getCourses(publishedOnly);
    }

    const mapped: Course[] = data.map((row: any) => ({
      id: row.id,
      code: row.code,
      name: row.name,
      description: row.description || '',
      status: row.status,
      publishedAt: row.published_at || undefined,
      createdAt: row.created_at || undefined,
      totalQuestions: row.total_questions || 0,
      weeks: Array.isArray(row.weeks) ? row.weeks : [],
    }));

    // Update local cache
    localStorage.setItem(KEYS.COURSES, JSON.stringify(mapped));
    return mapped;
  } catch (err) {
    console.warn('Error fetching courses from Supabase:', err);
    return getCourses(publishedOnly);
  }
}

export async function saveCourse(course: Course): Promise<{ success: boolean; course: Course; error?: string }> {
  const current = getCourses(false);
  const index = current.findIndex((c) => c.id === course.id);
  const courseWithDefaults: Course = {
    ...course,
    status: course.status || 'draft',
    createdAt: course.createdAt || new Date().toISOString(),
  };

  let updated: Course[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = courseWithDefaults;
  } else {
    updated = [courseWithDefaults, ...current];
  }
  localStorage.setItem(KEYS.COURSES, JSON.stringify(updated));

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase
        .from('courses')
        .upsert({
          id: courseWithDefaults.id,
          code: courseWithDefaults.code,
          name: courseWithDefaults.name,
          description: courseWithDefaults.description || '',
          status: courseWithDefaults.status,
          published_at: courseWithDefaults.publishedAt || null,
          total_questions: courseWithDefaults.totalQuestions || 0,
          weeks: courseWithDefaults.weeks || [],
        });
      if (error) {
        console.warn('Supabase course upsert notice:', error.message);
        return { success: false, course: courseWithDefaults, error: error.message };
      }
    } catch (err: any) {
      console.warn('Supabase course upsert exception:', err);
      return { success: false, course: courseWithDefaults, error: err?.message || 'Network error' };
    }
  }

  return { success: true, course: courseWithDefaults };
}

/**
 * Publishes a test to students.
 * STRICT VALIDATION: Blocks publishing if any question does not have a verified answer or is unapproved.
 */
export async function publishTest(courseId: string): Promise<{ success: boolean; error?: string; unverifiedCount?: number }> {
  const questions = await fetchQuestionsFromSupabase(courseId, 'all', false);
  if (questions.length === 0) {
    return { success: false, error: 'Cannot publish a test with 0 questions.' };
  }

  const unverified = questions.filter((q) => q.correctAnswerIndex === null || !q.isApproved);
  if (unverified.length > 0) {
    return {
      success: false,
      error: 'Some questions do not have verified answers.',
      unverifiedCount: unverified.length,
    };
  }

  const allCourses = await fetchCoursesFromSupabase(false);
  const target = allCourses.find((c) => c.id === courseId);
  if (!target) {
    return { success: false, error: 'Test record not found.' };
  }

  const availableWeeks = deriveAvailableWeeks(questions);
  target.status = 'published';
  target.publishedAt = new Date().toISOString();
  target.totalQuestions = questions.length;
  target.weeks = availableWeeks;

  return saveCourse(target);
}

/**
 * Reverts a published test back to draft status.
 */
export async function unpublishTest(courseId: string): Promise<{ success: boolean; error?: string }> {
  const allCourses = await fetchCoursesFromSupabase(false);
  const target = allCourses.find((c) => c.id === courseId);
  if (target) {
    target.status = 'draft';
    return saveCourse(target);
  }
  return { success: false, error: 'Test record not found.' };
}

/**
 * Deletes a test and its questions.
 * IMMUTABLE SNAPSHOT GUARANTEE: Does NOT delete or corrupt past student MockAttempt snapshots.
 */
export async function deleteTest(courseId: string): Promise<{ success: boolean; error?: string }> {
  // 1. Remember deleted course so it is never re-seeded
  try {
    const dRaw = localStorage.getItem(DELETED_COURSES_KEY);
    const dList: string[] = dRaw ? JSON.parse(dRaw) : [];
    if (!dList.includes(courseId)) {
      dList.push(courseId);
      localStorage.setItem(DELETED_COURSES_KEY, JSON.stringify(dList));
    }
  } catch {}

  // 2. Remove course
  const currentCourses = getCourses(false);
  const filteredCourses = currentCourses.filter((c) => c.id !== courseId);
  localStorage.setItem(KEYS.COURSES, JSON.stringify(filteredCourses));

  // 3. Remove questions belonging to this course
  const currentQuestions = getQuestions();
  const filteredQuestions = currentQuestions.filter((q) => q.courseId !== courseId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(filteredQuestions));

  // 4. Supabase cleanup
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      await supabase.from('questions').delete().eq('course_id', courseId);
      await supabase.from('courses').delete().eq('id', courseId);
    } catch (err: any) {
      console.warn('Supabase delete error:', err);
      return { success: false, error: err?.message };
    }
  }

  return { success: true };
}

export function getQuestions(
  courseId?: string,
  weekSelection?: number[] | number | 'all',
  approvedOnly: boolean = false
): Question[] {
  let all: Question[] = [];
  try {
    const raw = localStorage.getItem(KEYS.QUESTIONS);
    const qMap = new Map<string, Question>();
    INITIAL_QUESTIONS.forEach((q) => qMap.set(q.id, q));

    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((q) => {
          if (q && q.id) qMap.set(q.id, q);
        });
      }
    }

    all = Array.from(qMap.values());
  } catch {
    all = INITIAL_QUESTIONS;
  }

  return all.filter((q) => {
    if (courseId && q.courseId !== courseId) return false;
    if (weekSelection !== undefined && weekSelection !== 'all') {
      if (Array.isArray(weekSelection)) {
        if (weekSelection.length > 0 && !weekSelection.includes(q.weekNumber)) return false;
      } else if (typeof weekSelection === 'number') {
        if (q.weekNumber !== weekSelection) return false;
      }
    }
    if (approvedOnly && (!q.isApproved || q.correctAnswerIndex === null)) return false;
    return true;
  });
}

/**
 * Loads questions directly from Supabase as authoritative source of truth.
 * Caches in localStorage for offline resilience.
 */
export async function fetchQuestionsFromSupabase(
  courseId?: string,
  weekSelection?: number[] | number | 'all',
  approvedOnly: boolean = false
): Promise<Question[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getQuestions(courseId, weekSelection, approvedOnly);

  try {
    let query = supabase.from('questions').select('*');
    if (courseId) {
      query = query.eq('course_id', courseId);
    }
    if (weekSelection !== undefined && weekSelection !== 'all') {
      if (Array.isArray(weekSelection)) {
        if (weekSelection.length > 0) {
          query = query.in('week_number', weekSelection);
        }
      } else if (typeof weekSelection === 'number') {
        query = query.eq('week_number', weekSelection);
      }
    }

    const { data, error } = await query.order('week_number', { ascending: true });

    if (error || !data) {
      console.warn('Error fetching questions from Supabase:', error?.message);
      return getQuestions(courseId, weekSelection, approvedOnly);
    }

    const mapped: Question[] = data.map((row: any) => ({
      id: row.id,
      courseId: row.course_id,
      weekNumber: Number(row.week_number) || 1,
      sourcePdfId: row.source_pdf_id || undefined,
      sourcePdfName: row.source_pdf_name || '',
      questionText: row.question_text,
      options: row.options as [string, string, string, string],
      correctAnswerIndex: row.correct_answer_index,
      answerSource: 'PDF',
      isApproved: true,
      explanation: row.explanation || '',
      createdAt: row.created_at,
    }));

    if (mapped.length > 0) {
      const current = getQuestions();
      const map = new Map<string, Question>();
      current.forEach((q) => map.set(q.id, q));
      mapped.forEach((q) => map.set(q.id, q));
      localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(Array.from(map.values())));
    }

    return mapped;
  } catch (err) {
    console.warn('Error fetching questions from Supabase:', err);
    return getQuestions(courseId, weekSelection, approvedOnly);
  }
}

export async function saveQuestions(newQuestions: Question[]): Promise<{ success: boolean; error?: string }> {
  const current = getQuestions();
  const map = new Map<string, Question>();
  current.forEach((q) => map.set(q.id, q));
  newQuestions.forEach((q) => map.set(q.id, q));
  const merged = Array.from(map.values());
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(merged));

  const supabase = getSupabaseClient();
  if (supabase && newQuestions.length > 0) {
    try {
      // Chunk into batches of 50
      for (let i = 0; i < newQuestions.length; i += 50) {
        const chunk = newQuestions.slice(i, i + 50).map((q) => ({
          id: q.id,
          course_id: q.courseId,
          week_number: q.weekNumber,
          source_pdf_id: q.sourcePdfId || null,
          source_pdf_name: q.sourcePdfName || '',
          question_text: q.questionText,
          options: q.options,
          correct_answer_index: q.correctAnswerIndex ?? 0,
          explanation: q.explanation || '',
        }));

        const { error } = await supabase.from('questions').upsert(chunk);
        if (error) {
          console.error('Supabase questions upsert error:', error.message);
          return { success: false, error: error.message };
        }
      }
    } catch (err: any) {
      console.error('Supabase questions upsert exception:', err);
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  return { success: true };
}

export async function updateQuestion(question: Question): Promise<{ success: boolean; error?: string }> {
  const current = getQuestions();
  const index = current.findIndex((q) => q.id === question.id);
  if (index >= 0) {
    current[index] = question;
    localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(current));
  }

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase
        .from('questions')
        .upsert({
          id: question.id,
          course_id: question.courseId,
          week_number: question.weekNumber,
          source_pdf_id: question.sourcePdfId || null,
          source_pdf_name: question.sourcePdfName || '',
          question_text: question.questionText,
          options: question.options,
          correct_answer_index: question.correctAnswerIndex ?? 0,
          explanation: question.explanation || '',
        });
      if (error) {
        console.error('Supabase question update error:', error.message);
        return { success: false, error: error.message };
      }
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  return { success: true };
}

export async function deleteQuestion(questionId: string): Promise<{ success: boolean; error?: string }> {
  const current = getQuestions();
  const updated = current.filter((q) => q.id !== questionId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(updated));

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error } = await supabase.from('questions').delete().eq('id', questionId);
      if (error) {
        return { success: false, error: error.message };
      }
    } catch (err: any) {
      return { success: false, error: err?.message || 'Network error' };
    }
  }

  return { success: true };
}

// ----------------- Mock Test Generation & Option Order -----------------

export interface ActiveTestSession {
  attemptId: string;
  config: MockConfig;
  items: AttemptQuestionItem[];
  currentIndex: number;
  secondsRemaining: number | null; // For countdown exam mode
  secondsElapsed: number; // For timer tracking
  isCompleted: boolean;
  startedAt: string;
}

/**
 * Creates a new randomized mock test session with:
 * 1. Unique question selection based on criteria (random, unattempted, wrong, all)
 * 2. Independent option order shuffling for every question
 * 3. Exact tracking of displayed options and mapped correct option index
 */
export function initializeMockSession(config: MockConfig): ActiveTestSession {
  // Resolve weeks filter
  const targetWeeks = config.selectedWeeks && config.selectedWeeks.length > 0
    ? config.selectedWeeks
    : config.weekNumber !== undefined && config.weekNumber !== 'all'
    ? [config.weekNumber]
    : 'all';

  const allCourseQuestions = getQuestions(config.courseId, targetWeeks, true);
  const attempts = getAttempts();

  // Determine attempted / wrong question IDs for this course
  const attemptedQuestionIds = new Set<string>();
  const wrongQuestionIds = new Set<string>();

  attempts
    .filter((att) => att.courseId === config.courseId)
    .forEach((att) => {
      att.items.forEach((item) => {
        attemptedQuestionIds.add(item.questionId);
        if (item.selectedOptionIndex !== null && item.selectedOptionIndex !== item.correctOptionIndex) {
          wrongQuestionIds.add(item.questionId);
        }
      });
    });

  let pool: Question[] = [];

  switch (config.selectionType) {
    case 'unattempted':
      pool = allCourseQuestions.filter((q) => !attemptedQuestionIds.has(q.id));
      if (pool.length === 0) pool = allCourseQuestions; // Fallback if all attempted
      break;
    case 'wrong':
      pool = allCourseQuestions.filter((q) => wrongQuestionIds.has(q.id));
      if (pool.length === 0) pool = allCourseQuestions; // Fallback if no wrongs
      break;
    case 'random':
    case 'all':
    default:
      pool = [...allCourseQuestions];
      break;
  }

  // Shuffle question pool to ensure unique random order without duplicate questions
  const shuffledPool = shuffleArray(pool);

  // Determine final count
  const targetCount = config.questionCount === 'all'
    ? shuffledPool.length
    : Math.min(config.questionCount, shuffledPool.length);

  const selectedQuestions = shuffledPool.slice(0, targetCount);

  // For every question: shuffle options independently, calculate new correct index, store displayed options
  const items: AttemptQuestionItem[] = selectedQuestions.map((q, index) => {
    // Ensure 4 options safely
    const rawOptions = Array.isArray(q.options) && q.options.length > 0 ? [...q.options] : [];
    while (rawOptions.length < 4) {
      rawOptions.push(`Option ${String.fromCharCode(65 + rawOptions.length)}`);
    }

    const safeCorrectIdx = Math.max(0, Math.min(q.correctAnswerIndex ?? 0, rawOptions.length - 1));

    // Create indexed options to track correct answer post-shuffle
    const indexedOptions = rawOptions.slice(0, 4).map((optText, origIdx) => ({
      text: optText || `Option ${String.fromCharCode(65 + origIdx)}`,
      isCorrect: origIdx === safeCorrectIdx,
    }));

    const shuffledOptions = shuffleArray(indexedOptions);
    const displayedOptions = shuffledOptions.map((o) => o.text) as [string, string, string, string];
    const newCorrectIndex = shuffledOptions.findIndex((o) => o.isCorrect);

    return {
      questionId: q.id,
      questionIndex: index,
      questionText: q.questionText,
      displayedOptions,
      selectedOptionIndex: null,
      correctOptionIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
      isMarkedForReview: false,
      timeSpentSeconds: 0,
      explanation: q.explanation,
    };
  });

  const timeLimitSeconds = config.timeLimitMinutes > 0 ? config.timeLimitMinutes * 60 : null;

  const session: ActiveTestSession = {
    attemptId: `att-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    config,
    items,
    currentIndex: 0,
    secondsRemaining: timeLimitSeconds,
    secondsElapsed: 0,
    isCompleted: false,
    startedAt: new Date().toISOString(),
  };

  saveActiveSession(session);
  return session;
}

export function saveActiveSession(session: ActiveTestSession | null, userId?: string): void {
  if (!userId) {
    try {
      localStorage.removeItem(KEYS.ACTIVE_TEST);
    } catch {}
    return;
  }
  const currentKey = `${KEYS.ACTIVE_TEST}_${userId}`;
  if (!session || session.isCompleted) {
    localStorage.removeItem(currentKey);
    localStorage.removeItem(KEYS.ACTIVE_TEST);
  } else {
    localStorage.setItem(currentKey, JSON.stringify(session));
  }
}

export function getActiveSession(userId?: string): ActiveTestSession | null {
  if (!userId) return null;
  try {
    const currentKey = `${KEYS.ACTIVE_TEST}_${userId}`;
    const raw = localStorage.getItem(currentKey);
    if (!raw) return null;
    const session = JSON.parse(raw) as ActiveTestSession;
    return session && !session.isCompleted ? session : null;
  } catch {
    return null;
  }
}

// ----------------- Attempts & Historical Playback -----------------

export function getAttempts(userId?: string): MockAttempt[] {
  // CRITICAL SECURITY RULE: Logged-out users MUST NEVER receive private attempt records
  if (!userId) {
    return [];
  }
  try {
    const raw = localStorage.getItem(KEYS.ATTEMPTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const list: MockAttempt[] = Array.isArray(parsed) ? parsed : [];
    // Strictly isolate data to this authenticated user only
    return list.filter((a) => a.userId === userId);
  } catch {
    return [];
  }
}

export function getAttemptById(attemptId: string, userId?: string): MockAttempt | null {
  if (!userId) return null;
  const attempts = getAttempts(userId);
  return attempts.find((a) => a.id === attemptId) || null;
}

/**
 * Saves completed test attempt with faithful reproduction data to local storage and Supabase.
 */
export function getAllAttempts(): MockAttempt[] {
  try {
    const raw = localStorage.getItem(KEYS.ATTEMPTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const list: MockAttempt[] = Array.isArray(parsed) ? parsed : [];
    return list.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
  } catch {
    return [];
  }
}

/**
 * Loads attempts directly from Supabase to guarantee cross-session persistence.
 * Strictly requires an authenticated user ID for student records.
 */
export async function fetchAttemptsFromSupabase(userId?: string): Promise<MockAttempt[]> {
  if (!userId) return [];
  const supabase = getSupabaseClient();
  if (!supabase) return getAttempts(userId);

  try {
    const { data, error } = await supabase
      .from('mock_attempts')
      .select('*, attempt_items(*)')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false });

    if (error || !data) return getAttempts(userId);

    const mapped: MockAttempt[] = data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      studentName: row.student_name || 'Student',
      regNumber: row.student_name,
      courseId: row.course_id,
      courseName: row.course_name,
      mode: row.mode,
      totalQuestions: row.total_questions,
      score: row.score,
      percentage: Number(row.percentage) || 0,
      correctCount: row.correct_count,
      wrongCount: row.wrong_count,
      unansweredCount: row.unanswered_count,
      timeTakenSeconds: row.time_taken_seconds,
      timeLimitSeconds: row.time_limit_seconds,
      createdAt: row.created_at,
      completedAt: row.completed_at,
      selectedWeeks: Array.isArray(row.selected_weeks) ? row.selected_weeks : undefined,
      startedAt: row.started_at || undefined,
      submittedAt: row.submitted_at || row.completed_at || undefined,
      items: Array.isArray(row.attempt_items)
        ? row.attempt_items
            .sort((a: any, b: any) => a.question_index - b.question_index)
            .map((it: any) => ({
              questionId: it.question_id,
              questionIndex: it.question_index,
              questionText: it.question_text,
              displayedOptions: it.displayed_options,
              selectedOptionIndex: it.selected_option_index,
              correctOptionIndex: it.correct_option_index,
              isMarkedForReview: it.is_marked_for_review,
              timeSpentSeconds: it.time_spent_seconds || 0,
            }))
        : [],
    }));

    if (mapped.length > 0) {
      const local = getAttempts(userId);
      const mergedMap = new Map<string, MockAttempt>();
      local.forEach((a) => mergedMap.set(a.id, a));
      mapped.forEach((a) => mergedMap.set(a.id, a));
      localStorage.setItem(KEYS.ATTEMPTS, JSON.stringify(Array.from(mergedMap.values())));
    }
    return mapped;
  } catch {
    return getAttempts(userId);
  }
}

/**
 * Loads recent attempts directly from Supabase for administrator inspection across all students.
 */
export async function fetchAdminRecentAttemptsFromSupabase(): Promise<MockAttempt[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getAllAttempts();

  try {
    const { data, error } = await supabase
      .from('mock_attempts')
      .select('*, attempt_items(*)')
      .order('completed_at', { ascending: false })
      .limit(100);

    if (error || !data) {
      console.warn('Error fetching admin recent attempts:', error?.message);
      return getAllAttempts();
    }

    const mapped: MockAttempt[] = data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      studentName: row.student_name || 'Student',
      regNumber: row.reg_number || row.student_name,
      courseId: row.course_id,
      courseName: row.course_name,
      mode: row.mode,
      totalQuestions: row.total_questions,
      score: row.score,
      percentage: Number(row.percentage) || 0,
      correctCount: row.correct_count,
      wrongCount: row.wrong_count,
      unansweredCount: row.unanswered_count,
      timeTakenSeconds: row.time_taken_seconds,
      timeLimitSeconds: row.time_limit_seconds,
      createdAt: row.created_at,
      completedAt: row.completed_at,
      selectedWeeks: Array.isArray(row.selected_weeks) ? row.selected_weeks : undefined,
      startedAt: row.started_at || undefined,
      submittedAt: row.submitted_at || row.completed_at || undefined,
      items: Array.isArray(row.attempt_items)
        ? row.attempt_items
            .sort((a: any, b: any) => a.question_index - b.question_index)
            .map((it: any) => ({
              questionId: it.question_id,
              questionIndex: it.question_index,
              questionText: it.question_text,
              displayedOptions: it.displayed_options,
              selectedOptionIndex: it.selected_option_index,
              correctOptionIndex: it.correctOptionIndex ?? it.correct_option_index,
              isMarkedForReview: it.is_marked_for_review,
              timeSpentSeconds: it.time_spent_seconds || 0,
            }))
        : [],
    }));

    return mapped;
  } catch (err) {
    console.warn('Exception fetching admin recent attempts:', err);
    return getAllAttempts();
  }
}

export async function finalizeAndSaveAttempt(
  session: ActiveTestSession,
  userId?: string,
  studentName?: string
): Promise<{ success: boolean; attempt?: MockAttempt; error?: string }> {
  const totalQuestions = session.items.length;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  session.items.forEach((item) => {
    if (item.selectedOptionIndex === null) {
      unansweredCount++;
    } else if (item.selectedOptionIndex === item.correctOptionIndex) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100 * 10) / 10 : 0;
  const completedAt = new Date().toISOString();

  const attempt: MockAttempt = {
    id: session.attemptId,
    userId,
    studentName: studentName || 'Student',
    regNumber: studentName,
    courseId: session.config.courseId,
    courseName: session.config.courseName,
    mode: session.config.mode,
    totalQuestions,
    score: correctCount,
    percentage,
    correctCount,
    wrongCount,
    unansweredCount,
    timeTakenSeconds: session.secondsElapsed,
    timeLimitSeconds: session.config.timeLimitMinutes > 0 ? session.config.timeLimitMinutes * 60 : null,
    createdAt: session.startedAt,
    completedAt,
    selectedWeeks: session.config.selectedWeeks || [],
    startedAt: session.startedAt,
    submittedAt: completedAt,
    items: session.items, // Exact question and option order preserved
  };

  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      // 1. Resolve authoritative Supabase user if available
      let authUserId = userId;
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user) {
        authUserId = sessionData.session.user.id;
        attempt.userId = authUserId;
      }

      // 2. Idempotency Check: check if this attempt is already saved
      const { data: existingAttempt } = await supabase
        .from('mock_attempts')
        .select('id')
        .eq('id', attempt.id)
        .maybeSingle();

      if (existingAttempt) {
        // Already recorded; clear session and return success
        saveActiveSession(null, authUserId);
        return { success: true, attempt };
      }

      // 3. Write attempt header to Supabase
      const { error: attemptErr } = await supabase.from('mock_attempts').insert({
        id: attempt.id,
        user_id: authUserId || null,
        course_id: attempt.courseId,
        course_name: attempt.courseName,
        mode: attempt.mode,
        total_questions: attempt.totalQuestions,
        score: attempt.score,
        percentage: attempt.percentage,
        correct_count: attempt.correctCount,
        wrong_count: attempt.wrongCount,
        unanswered_count: attempt.unansweredCount,
        time_taken_seconds: attempt.timeTakenSeconds,
        time_limit_seconds: attempt.timeLimitSeconds,
        is_completed: true,
        student_name: studentName || 'Student',
        reg_number: studentName || (authUserId ? 'STUDENT' : undefined),
        selected_weeks: session.config.selectedWeeks || [],
        started_at: session.startedAt,
        submitted_at: completedAt,
        completed_at: completedAt,
        created_at: session.startedAt,
      });

      if (attemptErr) {
        console.error('Failed to insert mock_attempts in Supabase:', attemptErr);
        return {
          success: false,
          error: `Failed to save attempt: ${attemptErr.message}. Your in-progress session has been preserved. Please try again.`,
        };
      }

      // 4. Write attempt items to Supabase
      const itemRows = attempt.items.map((it) => ({
        attempt_id: attempt.id,
        question_id: it.questionId,
        question_index: it.questionIndex,
        question_text: it.questionText,
        displayed_options: it.displayedOptions,
        selected_option_index: it.selectedOptionIndex,
        correct_option_index: it.correctOptionIndex,
        is_correct: it.selectedOptionIndex !== null && it.selectedOptionIndex === it.correctOptionIndex,
        is_marked_for_review: it.isMarkedForReview,
        time_spent_seconds: it.timeSpentSeconds,
      }));

      const { error: itemsErr } = await supabase.from('attempt_items').insert(itemRows);

      if (itemsErr) {
        console.error('Failed to insert attempt_items in Supabase:', itemsErr);
        return {
          success: false,
          error: `Failed to save question responses: ${itemsErr.message}. Please retry saving.`,
        };
      }

      // Write verified successfully!
    } catch (err: any) {
      console.error('Supabase write exception:', err);
      return {
        success: false,
        error: `Database connection error: ${err?.message || 'Network failure'}. Please retry saving.`,
      };
    }
  }

  // 5. Save locally and clear active session ONLY upon verified success
  const currentAttempts = getAllAttempts();
  const updatedAttempts = [attempt, ...currentAttempts.filter((a) => a.id !== attempt.id)];
  localStorage.setItem(KEYS.ATTEMPTS, JSON.stringify(updatedAttempts));
  saveActiveSession(null, attempt.userId || userId);

  return { success: true, attempt };
}

// ----------------- Progress Calculation -----------------

export function getUserProgress(userId?: string): UserProgress {
  if (!userId) {
    return {
      totalAttempted: 0,
      totalCorrect: 0,
      accuracy: 0,
      bestScore: 0,
      testsCompleted: 0,
      practiceCompleted: 0,
      examCompleted: 0,
      weekWise: [],
    };
  }

  const attempts = getAttempts(userId);
  const courses = getCourses();

  let totalAttemptedQuestions = 0;
  let totalCorrect = 0;
  let practiceCount = 0;
  let examCount = 0;
  let bestScore = 0;

  // Track week-wise stats: key = courseId:week
  const weekMap = new Map<string, { courseId: string; courseName: string; week: number; attempted: number; correct: number }>();

  // Map question id to week
  const allQuestions = getQuestions();
  const qWeekMap = new Map<string, { week: number; courseId: string }>();
  allQuestions.forEach((q) => qWeekMap.set(q.id, { week: q.weekNumber, courseId: q.courseId }));

  attempts.forEach((att) => {
    if (att.mode === 'practice') practiceCount++;
    if (att.mode === 'exam') examCount++;
    if (att.score > bestScore) bestScore = att.score;

    att.items.forEach((item) => {
      if (item.selectedOptionIndex !== null) {
        totalAttemptedQuestions++;
        const isCorrect = item.selectedOptionIndex === item.correctOptionIndex;
        if (isCorrect) totalCorrect++;

        const qInfo = qWeekMap.get(item.questionId);
        const weekNum = qInfo?.week || 1;
        const cId = qInfo?.courseId || att.courseId;
        const key = `${cId}_${weekNum}`;

        if (!weekMap.has(key)) {
          const course = courses.find((c) => c.id === cId);
          weekMap.set(key, {
            courseId: cId,
            courseName: course?.name || att.courseName,
            week: weekNum,
            attempted: 0,
            correct: 0,
          });
        }
        const record = weekMap.get(key)!;
        record.attempted++;
        if (isCorrect) record.correct++;
      }
    });
  });

  const accuracy = totalAttemptedQuestions > 0
    ? Math.round((totalCorrect / totalAttemptedQuestions) * 100 * 10) / 10
    : 0;

  const weekWise = Array.from(weekMap.values())
    .map((rec) => ({
      courseId: rec.courseId,
      courseName: rec.courseName,
      week: rec.week,
      attempted: rec.attempted,
      correct: rec.correct,
      accuracy: rec.attempted > 0 ? Math.round((rec.correct / rec.attempted) * 100 * 10) / 10 : 0,
    }))
    .sort((a, b) => a.week - b.week);

  return {
    totalAttempted: totalAttemptedQuestions,
    totalCorrect,
    accuracy,
    bestScore,
    testsCompleted: attempts.length,
    practiceCompleted: practiceCount,
    examCompleted: examCount,
    weekWise,
  };
}

/**
 * Creates a retry attempt session with only the questions answered wrong in a previous attempt.
 */
export function createRetryWrongSession(previousAttempt: MockAttempt): ActiveTestSession | null {
  const wrongItems = previousAttempt.items.filter(
    (item) => item.selectedOptionIndex !== null && item.selectedOptionIndex !== item.correctOptionIndex
  );

  if (wrongItems.length === 0) return null;

  // Reshuffle options independently for retry attempt
  const retryItems: AttemptQuestionItem[] = wrongItems.map((item, index) => {
    const originalCorrectText =
      item.correctOptionIndex !== null ? item.displayedOptions[item.correctOptionIndex] : null;
    const optionsWithCorrect = item.displayedOptions.map((optText) => ({
      text: optText,
      isCorrect: Boolean(originalCorrectText && optText === originalCorrectText),
    }));

    const reshuffled = shuffleArray(optionsWithCorrect);
    const newDisplayed = reshuffled.map((o) => o.text) as [string, string, string, string];
    const newCorrectIdx = reshuffled.findIndex((o) => o.isCorrect);

    return {
      questionId: item.questionId,
      questionIndex: index,
      questionText: item.questionText,
      displayedOptions: newDisplayed,
      selectedOptionIndex: null,
      correctOptionIndex: newCorrectIdx >= 0 ? newCorrectIdx : null,
      isMarkedForReview: false,
      timeSpentSeconds: 0,
      explanation: item.explanation,
    };
  });

  const session: ActiveTestSession = {
    attemptId: `att-retry-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    config: {
      courseId: previousAttempt.courseId,
      courseName: previousAttempt.courseName,
      selectedWeeks: [],
      questionCount: retryItems.length,
      selectionType: 'wrong',
      mode: previousAttempt.mode,
      timeLimitMinutes: 0,
    },
    items: retryItems,
    currentIndex: 0,
    secondsRemaining: null,
    secondsElapsed: 0,
    isCompleted: false,
    startedAt: new Date().toISOString(),
  };

  saveActiveSession(session);
  return session;
}
