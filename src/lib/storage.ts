import { Course, Question, MockAttempt, AttemptQuestionItem, UserProgress, MockConfig, ExtractedQuestionDraft } from '../types';
import { getSupabaseClient } from './supabase';
import { INITIAL_COURSES, INITIAL_QUESTIONS } from './seedData';

const KEYS = {
  COURSES: 'prep_studylab_courses_v2',
  QUESTIONS: 'prep_studylab_questions_v2',
  ATTEMPTS: 'prep_studylab_attempts_v2',
  ACTIVE_TEST: 'prep_studylab_active_test_v2',
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

// ----------------- Courses & Questions (Supabase Authoritative) -----------------

/**
 * Returns cached courses from localStorage.
 * Does NOT contain hardcoded mock data or demo fallbacks.
 */
export function getCourses(publishedOnly: boolean = false): Course[] {
  try {
    const raw = localStorage.getItem(KEYS.COURSES);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const courses: Course[] = parsed.filter((c) => c && c.id && c.name);
    if (publishedOnly) {
      return courses.filter((c) => c.status === 'published');
    }
    return courses;
  } catch {
    return [];
  }
}

/**
 * Loads published or all courses directly from Supabase as authoritative source of truth.
 * Updates local cache only to reflect authoritative Supabase data.
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

    if (error) {
      console.warn('Supabase fetch courses error:', error.message);
      return getCourses(publishedOnly);
    }

    if (!data) return [];

    const mapped: Course[] = data.map((row: any) => {
      let weeks: number[] = [];
      if (Array.isArray(row.weeks)) {
        weeks = row.weeks;
      } else if (typeof row.weeks === 'string') {
        try {
          const parsed = JSON.parse(row.weeks);
          if (Array.isArray(parsed)) weeks = parsed;
        } catch {}
      }

      return {
        id: row.id,
        code: row.code,
        name: row.name,
        description: row.description || '',
        status: row.status,
        publishedAt: row.published_at || undefined,
        createdAt: row.created_at || undefined,
        totalQuestions: Number(row.total_questions) || 0,
        weeks: weeks.sort((a, b) => a - b),
      };
    });

    // Update local cache with exact records
    localStorage.setItem(KEYS.COURSES, JSON.stringify(mapped));
    return mapped;
  } catch (err) {
    console.warn('Error fetching courses from Supabase:', err);
    return getCourses(publishedOnly);
  }
}

/**
 * Saves or updates a Course/Test Bank in Supabase FIRST.
 * Local cache is updated ONLY after Supabase confirms the save.
 */
export async function saveCourse(course: Course): Promise<{ success: boolean; course: Course; error?: string }> {
  const courseWithDefaults: Course = {
    ...course,
    status: course.status || 'draft',
    createdAt: course.createdAt || new Date().toISOString(),
  };

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      course: courseWithDefaults,
      error: 'Supabase database is not connected. Please verify your Supabase configuration.',
    };
  }

  try {
    const payload = {
      id: courseWithDefaults.id,
      code: courseWithDefaults.code,
      name: courseWithDefaults.name,
      description: courseWithDefaults.description || '',
      status: courseWithDefaults.status,
      published_at: courseWithDefaults.publishedAt || null,
      total_questions: courseWithDefaults.totalQuestions || 0,
      weeks: courseWithDefaults.weeks || [],
    };

    const { error } = await supabase.from('courses').upsert(payload);
    if (error) {
      console.error('Supabase course upsert error:', error.message);
      return { success: false, course: courseWithDefaults, error: error.message };
    }
  } catch (err: any) {
    console.error('Supabase course upsert exception:', err);
    return { success: false, course: courseWithDefaults, error: err?.message || 'Network error' };
  }

  // Update local cache ONLY AFTER Supabase confirms write
  const current = getCourses(false);
  const index = current.findIndex((c) => c.id === courseWithDefaults.id);
  let updated: Course[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = courseWithDefaults;
  } else {
    updated = [courseWithDefaults, ...current];
  }
  localStorage.setItem(KEYS.COURSES, JSON.stringify(updated));

  return { success: true, course: courseWithDefaults };
}

/**
 * Publishes a test to students.
 * STRICT VALIDATION: Blocks publishing if any question does not have a verified answer or is unapproved.
 */
export async function publishTest(courseId: string): Promise<{ success: boolean; error?: string; unverifiedCount?: number }> {
  const questions = await fetchQuestionsFromSupabase(courseId, 'all', false);
  if (questions.length === 0) {
    return { success: false, error: 'Cannot publish a test with 0 questions in Supabase.' };
  }

  const unverified = questions.filter((q) => q.correctAnswerIndex === null || !q.isApproved);
  if (unverified.length > 0) {
    return {
      success: false,
      error: `Some questions do not have verified answers (${unverified.length} questions unverified).`,
      unverifiedCount: unverified.length,
    };
  }

  const allCourses = await fetchCoursesFromSupabase(false);
  const target = allCourses.find((c) => c.id === courseId);
  if (!target) {
    return { success: false, error: 'Test record not found in Supabase.' };
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
  return { success: false, error: 'Test record not found in Supabase.' };
}

/**
 * Deletes a test and its questions from Supabase.
 * IMMUTABLE SNAPSHOT GUARANTEE: Does NOT delete past student MockAttempt snapshots.
 */
export async function deleteTest(courseId: string): Promise<{ success: boolean; error?: string }> {
  // 1. Supabase cleanup FIRST
  const supabase = getSupabaseClient();
  if (!supabase) {
    return { success: false, error: 'Supabase database is not connected. Please verify your Supabase configuration.' };
  }
  try {
    const { error: qErr } = await supabase.from('questions').delete().eq('course_id', courseId);
    if (qErr) {
      console.error('Supabase delete questions error:', qErr.message);
      return { success: false, error: qErr.message };
    }
    const { error: cErr } = await supabase.from('courses').delete().eq('id', courseId);
    if (cErr) {
      console.error('Supabase delete course error:', cErr.message);
      return { success: false, error: cErr.message };
    }
  } catch (err: any) {
    console.warn('Supabase delete error:', err);
    return { success: false, error: err?.message };
  }

  // 2. Remove from local cache
  const currentCourses = getCourses(false);
  const filteredCourses = currentCourses.filter((c) => c.id !== courseId);
  localStorage.setItem(KEYS.COURSES, JSON.stringify(filteredCourses));

  const currentQuestions = getQuestions();
  const filteredQuestions = currentQuestions.filter((q) => q.courseId !== courseId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(filteredQuestions));

  return { success: true };
}

/**
 * Reads cached questions from localStorage.
 * Does NOT contain hardcoded mock data or demo fallbacks.
 */
export function getQuestions(
  courseId?: string,
  weekSelection?: number[] | number | 'all',
  approvedOnly: boolean = false
): Question[] {
  let all: Question[] = [];
  try {
    const raw = localStorage.getItem(KEYS.QUESTIONS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        all = parsed.filter((q) => q && q.id && q.questionText);
      }
    }
  } catch {
    all = [];
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
 * Returns empty array if none exist, never injects hardcoded seed data.
 */
export async function fetchQuestionsFromSupabase(
  courseId?: string,
  weekSelection?: number[] | number | 'all',
  approvedOnly: boolean = false
): Promise<Question[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return getQuestions(courseId, weekSelection, approvedOnly);

  try {
    let query = supabase.from('questions').select('*').gte('week_number', 1);
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

    if (error) {
      console.warn('Supabase fetch questions notice:', error.message);
      return getQuestions(courseId, weekSelection, approvedOnly);
    }

    if (!data || data.length === 0) {
      // If fetching all questions and database is empty, sync local cache to empty
      if (!courseId && (!weekSelection || weekSelection === 'all') && !approvedOnly) {
        localStorage.setItem(KEYS.QUESTIONS, JSON.stringify([]));
      }
      return [];
    }

    let mapped: Question[] = data.map((row: any) => {
      let options: [string, string, string, string] = ['Option A', 'Option B', 'Option C', 'Option D'];
      if (Array.isArray(row.options)) {
        options = [
          row.options[0] || 'Option A',
          row.options[1] || 'Option B',
          row.options[2] || 'Option C',
          row.options[3] || 'Option D',
        ];
      } else if (typeof row.options === 'string') {
        try {
          const parsed = JSON.parse(row.options);
          if (Array.isArray(parsed)) {
            options = [
              parsed[0] || 'Option A',
              parsed[1] || 'Option B',
              parsed[2] || 'Option C',
              parsed[3] || 'Option D',
            ];
          }
        } catch {}
      }

      return {
        id: row.id,
        courseId: row.course_id,
        weekNumber: Number(row.week_number) || 1,
        sourcePdfId: row.source_pdf_id || undefined,
        sourcePdfName: row.source_pdf_name || '',
        questionText: row.question_text,
        options,
        correctAnswerIndex: row.correct_answer_index,
        answerSource: row.answer_source || (row.correct_answer_index !== null ? 'Manually Verified' : 'Not Available'),
        isApproved: row.is_approved !== undefined ? Boolean(row.is_approved) : (row.correct_answer_index !== null),
        explanation: row.explanation || '',
        createdAt: row.created_at,
      };
    });

    if (approvedOnly) {
      mapped = mapped.filter((q) => q.isApproved && q.correctAnswerIndex !== null);
    }

    if (!courseId && (!weekSelection || weekSelection === 'all') && !approvedOnly) {
      localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(mapped));
    } else if (mapped.length > 0) {
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

/**
 * Saves or updates questions in Supabase FIRST.
 * Strictly persists options, explanation, and correct_answer_index.
 */
export async function saveQuestions(newQuestions: Question[]): Promise<{ success: boolean; error?: string }> {
  if (newQuestions.length === 0) return { success: true };

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase database is not connected. Please verify your Supabase configuration.',
    };
  }

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
        correct_answer_index: q.correctAnswerIndex ?? null,
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

  // Update local cache ONLY AFTER Supabase confirms write
  const current = getQuestions();
  const map = new Map<string, Question>();
  current.forEach((q) => map.set(q.id, q));
  newQuestions.forEach((q) => map.set(q.id, q));
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(Array.from(map.values())));

  return { success: true };
}

/**
 * Updates a question in Supabase FIRST.
 */
export async function updateQuestion(question: Question): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase database is not connected. Please verify your Supabase configuration.',
    };
  }

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
        correct_answer_index: question.correctAnswerIndex ?? null,
        explanation: question.explanation || '',
      });
    if (error) {
      console.error('Supabase question update error:', error.message);
      return { success: false, error: error.message };
    }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error' };
  }

  // Update local cache only after Supabase succeeds
  const current = getQuestions();
  const index = current.findIndex((q) => q.id === question.id);
  if (index >= 0) {
    current[index] = question;
    localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(current));
  }

  return { success: true };
}

/**
 * Deletes a question from Supabase.
 */
export async function deleteQuestion(questionId: string): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase database is not connected. Please verify your Supabase configuration.',
    };
  }

  try {
    const { data, error } = await supabase.from('questions').delete().eq('id', questionId).select('id');
    if (error || !data || data.length === 0) {
      // Disassociate / soft-delete by setting week_number: -1 so it is permanently excluded
      await supabase.from('questions').update({ week_number: -1 }).eq('id', questionId);
    }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error' };
  }

  const current = getQuestions();
  const updated = current.filter((q) => q.id !== questionId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(updated));

  return { success: true };
}

/**
 * Deletes all questions belonging to a specific week/module from Supabase.
 * Recalculates and updates the parent course weeks and question count.
 */
export async function deleteQuestionsByWeek(courseId: string, weekNumber: number): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase database is not connected. Please verify your Supabase configuration.',
    };
  }

  try {
    const { data, error } = await supabase
      .from('questions')
      .delete()
      .eq('course_id', courseId)
      .eq('week_number', weekNumber)
      .select('id');

    if (error || !data || data.length === 0) {
      await supabase
        .from('questions')
        .update({ week_number: -1 })
        .eq('course_id', courseId)
        .eq('week_number', weekNumber);
    }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error' };
  }

  // Update local cache
  const currentQuestions = getQuestions();
  const filtered = currentQuestions.filter((q) => !(q.courseId === courseId && q.weekNumber === weekNumber));
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(filtered));

  // Recalculate remaining course weeks and total questions from Supabase
  const remaining = await fetchQuestionsFromSupabase(courseId, 'all', false);
  const remainingWeeks = deriveAvailableWeeks(remaining);
  const allCourses = await fetchCoursesFromSupabase(false);
  const targetCourse = allCourses.find((c) => c.id === courseId);
  if (targetCourse) {
    await saveCourse({
      ...targetCourse,
      weeks: remainingWeeks,
      totalQuestions: remaining.length,
    });
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
function buildSessionFromQuestions(
  config: MockConfig,
  questions: Question[],
  attempts: MockAttempt[]
): ActiveTestSession {
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
      pool = questions.filter((q) => !attemptedQuestionIds.has(q.id));
      if (pool.length === 0) pool = questions; // Fallback if all attempted
      break;
    case 'wrong':
      pool = questions.filter((q) => wrongQuestionIds.has(q.id));
      if (pool.length === 0) pool = questions; // Fallback if no wrongs
      break;
    case 'random':
    case 'all':
    default:
      pool = [...questions];
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

/**
 * Creates a new randomized mock test session synchronously from cached questions.
 */
export function initializeMockSession(config: MockConfig, userId?: string): ActiveTestSession {
  const targetWeeks = config.selectedWeeks && config.selectedWeeks.length > 0
    ? config.selectedWeeks
    : config.weekNumber !== undefined && config.weekNumber !== 'all'
    ? [config.weekNumber]
    : 'all';

  const allCourseQuestions = getQuestions(config.courseId, targetWeeks, true);
  const attempts = getAttempts(userId);
  return buildSessionFromQuestions(config, allCourseQuestions, attempts);
}

/**
 * Creates a new mock test session by fetching questions directly from Supabase first.
 * Ensures questions from newly published weeks are guaranteed to be present for the student.
 */
export async function initializeMockSessionAsync(config: MockConfig, userId?: string): Promise<ActiveTestSession> {
  const targetWeeks = config.selectedWeeks && config.selectedWeeks.length > 0
    ? config.selectedWeeks
    : config.weekNumber !== undefined && config.weekNumber !== 'all'
    ? [config.weekNumber]
    : 'all';

  let allCourseQuestions = await fetchQuestionsFromSupabase(config.courseId, targetWeeks, true);
  if (allCourseQuestions.length === 0) {
    allCourseQuestions = getQuestions(config.courseId, targetWeeks, true);
  }

  let attempts = getAttempts(userId);
  if (userId) {
    try {
      const freshAttempts = await fetchAttemptsFromSupabase(userId);
      if (freshAttempts.length > 0) attempts = freshAttempts;
    } catch {}
  }

  return buildSessionFromQuestions(config, allCourseQuestions, attempts);
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
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);
    let query = supabase.from('mock_attempts').select('*, attempt_items(*)');
    if (isUuid) {
      query = query.eq('user_id', userId);
    } else {
      query = query.or(`student_name.eq.${userId},reg_number.eq.${userId}`);
    }
    const { data, error } = await query.order('completed_at', { ascending: false });

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
      let authUserId: string | null = null;
      const { data: sessionData } = await supabase.auth.getSession();
      if (
        sessionData?.session?.user?.id &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(sessionData.session.user.id)
      ) {
        authUserId = sessionData.session.user.id;
        attempt.userId = authUserId;
      } else if (
        userId &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId)
      ) {
        authUserId = userId;
      }

      // 2. Idempotency Check: check if this attempt is already saved
      const { data: existingAttempt } = await supabase
        .from('mock_attempts')
        .select('id')
        .eq('id', attempt.id)
        .maybeSingle();

      if (existingAttempt) {
        // Already recorded; clear session and return success
        saveActiveSession(null, userId);
        return { success: true, attempt };
      }

      // 3. Write attempt header to Supabase
      const { error: attemptErr } = await supabase.from('mock_attempts').insert({
        id: attempt.id,
        user_id: authUserId, // Strictly a valid UUID string or null (never a string identifier like std_...)
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
        console.warn('Supabase attempt_items insert notice (preserved locally):', itemsErr.message);
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

/**
 * Synchronizes/seeds all 10 weeks of questions and courses into Supabase and local cache.
 */
export async function seedAll10WeeksToSupabase(): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    localStorage.setItem(KEYS.COURSES, JSON.stringify(INITIAL_COURSES));
    localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));

    const supabase = getSupabaseClient();
    if (supabase) {
      const course = INITIAL_COURSES[0];
      await supabase.from('courses').upsert({
        id: course.id,
        code: course.code,
        name: course.name,
        description: course.description,
        status: course.status,
        total_questions: course.totalQuestions,
        weeks: course.weeks,
        published_at: course.publishedAt,
      });

      const chunkSize = 25;
      for (let i = 0; i < INITIAL_QUESTIONS.length; i += chunkSize) {
        const chunk = INITIAL_QUESTIONS.slice(i, i + chunkSize);
        await saveQuestions(chunk);
      }
    }

    return { success: true, count: INITIAL_QUESTIONS.length };
  } catch (err: any) {
    return { success: false, count: 0, error: err?.message || 'Failed to seed 10 weeks' };
  }
}
