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

// ----------------- Courses & Questions -----------------

export function getCourses(publishedOnly: boolean = false): Course[] {
  try {
    const raw = localStorage.getItem(KEYS.COURSES);
    let courses: Course[] = [];
    if (!raw) {
      localStorage.setItem(KEYS.COURSES, JSON.stringify(INITIAL_COURSES));
      courses = INITIAL_COURSES;
    } else {
      const parsed = JSON.parse(raw);
      courses = Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_COURSES;
    }

    // Default legacy courses to published if status is not explicitly set
    courses = courses.map((c) => ({
      ...c,
      status: c.status || 'published',
    }));

    if (publishedOnly) {
      return courses.filter((c) => c.status === 'published');
    }
    return courses;
  } catch {
    return publishedOnly ? INITIAL_COURSES.filter((c) => c.status === 'published') : INITIAL_COURSES;
  }
}

export function saveCourse(course: Course): Course {
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

  // Sync to Supabase in background if configured
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase
      .from('courses')
      .upsert({
        id: courseWithDefaults.id,
        code: courseWithDefaults.code,
        name: courseWithDefaults.name,
        description: courseWithDefaults.description || '',
        status: courseWithDefaults.status,
        published_at: courseWithDefaults.publishedAt || null,
      })
      .then(
        ({ error }) => {
          if (error) console.warn('Supabase course sync notice:', error.message);
        },
        () => {}
      );
  }

  return courseWithDefaults;
}

/**
 * Publishes a test to students.
 * STRICT VALIDATION: Blocks publishing if any question does not have a verified answer or is unapproved.
 */
export function publishTest(courseId: string): { success: boolean; error?: string; unverifiedCount?: number } {
  const questions = getQuestions(courseId, 'all', false);
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

  const allCourses = getCourses(false);
  const target = allCourses.find((c) => c.id === courseId);
  if (!target) {
    return { success: false, error: 'Test record not found.' };
  }

  target.status = 'published';
  target.publishedAt = new Date().toISOString();
  target.totalQuestions = questions.length;
  saveCourse(target);

  return { success: true };
}

/**
 * Reverts a published test back to draft status.
 */
export function unpublishTest(courseId: string): void {
  const allCourses = getCourses(false);
  const target = allCourses.find((c) => c.id === courseId);
  if (target) {
    target.status = 'draft';
    saveCourse(target);
  }
}

/**
 * Deletes a test and its questions.
 * IMMUTABLE SNAPSHOT GUARANTEE: Does NOT delete or corrupt past student MockAttempt snapshots.
 */
export function deleteTest(courseId: string): void {
  // 1. Remove course
  const currentCourses = getCourses(false);
  const filteredCourses = currentCourses.filter((c) => c.id !== courseId);
  localStorage.setItem(KEYS.COURSES, JSON.stringify(filteredCourses));

  // 2. Remove questions belonging to this course
  const currentQuestions = getQuestions();
  const filteredQuestions = currentQuestions.filter((q) => q.courseId !== courseId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(filteredQuestions));

  // 3. Supabase cleanup
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.from('questions').delete().eq('course_id', courseId).then(() => {});
    supabase.from('courses').delete().eq('id', courseId).then(() => {});
  }
}

export function getQuestions(
  courseId?: string,
  weekNumber?: number | 'all',
  approvedOnly: boolean = false
): Question[] {
  let all: Question[] = [];
  try {
    const raw = localStorage.getItem(KEYS.QUESTIONS);
    if (!raw) {
      localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
      all = INITIAL_QUESTIONS;
    } else {
      const parsed = JSON.parse(raw);
      all = Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_QUESTIONS;
    }
  } catch {
    all = INITIAL_QUESTIONS;
  }

  return all.filter((q) => {
    if (courseId && q.courseId !== courseId) return false;
    if (weekNumber !== undefined && weekNumber !== 'all' && q.weekNumber !== weekNumber) return false;
    if (approvedOnly && (!q.isApproved || q.correctAnswerIndex === null)) return false;
    return true;
  });
}

export function saveQuestions(newQuestions: Question[]): void {
  const current = getQuestions();
  const map = new Map<string, Question>();
  current.forEach((q) => map.set(q.id, q));
  newQuestions.forEach((q) => map.set(q.id, q));
  const merged = Array.from(map.values());
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(merged));

  // Sync to Supabase in background
  const supabase = getSupabaseClient();
  if (supabase) {
    const payload = newQuestions.map((q) => ({
      id: q.id,
      course_id: q.courseId,
      week_number: q.weekNumber,
      source_pdf_name: q.sourcePdfName || '',
      question_text: q.questionText,
      options: q.options,
      correct_answer_index: q.correctAnswerIndex,
      answer_source: q.answerSource || 'Not Available',
      is_approved: q.isApproved ?? false,
      explanation: q.explanation || '',
    }));
    supabase
      .from('questions')
      .upsert(payload)
      .then(
        ({ error }) => {
          if (error) console.warn('Supabase questions sync notice:', error.message);
        },
        () => {}
      );
  }
}

export function updateQuestion(question: Question): void {
  const current = getQuestions();
  const index = current.findIndex((q) => q.id === question.id);
  if (index >= 0) {
    current[index] = question;
    localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(current));

    const supabase = getSupabaseClient();
    if (supabase) {
      supabase
        .from('questions')
        .upsert({
          id: question.id,
          course_id: question.courseId,
          week_number: question.weekNumber,
          source_pdf_name: question.sourcePdfName || '',
          question_text: question.questionText,
          options: question.options,
          correct_answer_index: question.correctAnswerIndex,
          answer_source: question.answerSource,
          is_approved: question.isApproved,
          explanation: question.explanation || '',
        })
        .then(() => {});
    }
  }
}

export function deleteQuestion(questionId: string): void {
  const current = getQuestions();
  const updated = current.filter((q) => q.id !== questionId);
  localStorage.setItem(KEYS.QUESTIONS, JSON.stringify(updated));

  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.from('questions').delete().eq('id', questionId).then(() => {});
  }
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
  const allCourseQuestions = getQuestions(config.courseId, config.weekNumber);
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

  // If pool is still empty (e.g. course has no questions under week or courseId was new), fallback to any questions
  if (pool.length === 0) {
    const allAvailable = getQuestions();
    const matchCourse = allAvailable.filter((q) => q.courseId === config.courseId);
    pool = matchCourse.length > 0 ? matchCourse : allAvailable;
  }

  // Shuffle question pool to ensure unique random order
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
    const originalCorrectOption = rawOptions[safeCorrectIdx];

    // Create indexed options to track correct answer post-shuffle
    const indexedOptions = rawOptions.slice(0, 4).map((optText, origIdx) => ({
      text: optText || `Option ${String.fromCharCode(65 + origIdx)}`,
      isCorrect: origIdx === safeCorrectIdx || optText === originalCorrectOption,
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
  const currentKey = userId ? `${KEYS.ACTIVE_TEST}_${userId}` : KEYS.ACTIVE_TEST;
  if (!session || session.isCompleted) {
    localStorage.removeItem(currentKey);
    localStorage.removeItem(KEYS.ACTIVE_TEST);
  } else {
    localStorage.setItem(currentKey, JSON.stringify(session));
  }
}

export function getActiveSession(userId?: string): ActiveTestSession | null {
  try {
    const currentKey = userId ? `${KEYS.ACTIVE_TEST}_${userId}` : KEYS.ACTIVE_TEST;
    let raw = localStorage.getItem(currentKey);
    if (!raw && userId) {
      raw = localStorage.getItem(KEYS.ACTIVE_TEST);
    }
    if (!raw) return null;
    const session = JSON.parse(raw) as ActiveTestSession;
    return session && !session.isCompleted ? session : null;
  } catch {
    return null;
  }
}

// ----------------- Attempts & Historical Playback -----------------

export function getAttempts(userId?: string): MockAttempt[] {
  try {
    const raw = localStorage.getItem(KEYS.ATTEMPTS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const list: MockAttempt[] = Array.isArray(parsed) ? parsed : [];
    if (userId) {
      return list.filter((a) => !a.userId || a.userId === userId);
    }
    return list;
  } catch {
    return [];
  }
}

export function getAttemptById(attemptId: string, userId?: string): MockAttempt | null {
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

export async function finalizeAndSaveAttempt(
  session: ActiveTestSession,
  userId?: string,
  studentName?: string
): Promise<MockAttempt> {
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
    items: session.items, // Exact question and option order preserved
  };

  // 1. Save locally
  const currentAttempts = getAttempts();
  const updatedAttempts = [attempt, ...currentAttempts.filter((a) => a.id !== attempt.id)];
  localStorage.setItem(KEYS.ATTEMPTS, JSON.stringify(updatedAttempts));

  // Clear active session
  saveActiveSession(null, userId);

  // 2. Save to Supabase
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { error: attemptErr } = await supabase.from('mock_attempts').insert({
        id: attempt.id,
        user_id: userId || null,
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
        created_at: attempt.createdAt,
        completed_at: attempt.completedAt,
      });

      if (!attemptErr) {
        const itemRows = attempt.items.map((item) => ({
          attempt_id: attempt.id,
          question_id: item.questionId,
          question_index: item.questionIndex,
          question_text: item.questionText,
          displayed_options: item.displayedOptions,
          selected_option_index: item.selectedOptionIndex,
          correct_option_index: item.correctOptionIndex,
          is_correct: item.selectedOptionIndex === item.correctOptionIndex,
          is_marked_for_review: item.isMarkedForReview,
          time_spent_seconds: item.timeSpentSeconds,
        }));

        await supabase.from('attempt_items').insert(itemRows);
      }
    } catch (err) {
      console.warn('Supabase attempt persistence notice:', err);
    }
  }

  return attempt;
}

// ----------------- Progress Calculation -----------------

export function getUserProgress(userId?: string): UserProgress {
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
