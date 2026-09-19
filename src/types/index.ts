export type TestMode = 'practice' | 'exam';

export type QuestionSelection = 'random' | 'unattempted' | 'wrong' | 'all';

export type UserRole = 'admin' | 'student';

export type TestLifecycleStatus = 'draft' | 'review' | 'published';

export type AnswerSource = 'Answer Key' | 'PDF' | 'Manually Verified' | 'Not Available';

export interface Course {
  id: string;
  code: string;
  name: string;
  description?: string;
  totalQuestions?: number;
  weeks?: number[];
  status: TestLifecycleStatus; // 'draft' | 'review' | 'published'
  createdAt?: string;
  publishedAt?: string;
  sourcePdfName?: string;
  storagePath?: string;
  fileSizeBytes?: number;
}

export interface User {
  id: string;
  name: string; // Registration number for student, identifier for admin
  regNumber?: string;
  email?: string;
  role: UserRole;
  status?: 'active' | 'deactivated';
  createdAt: string;
}

export interface Question {
  id: string;
  courseId: string;
  weekNumber: number;
  sourcePdfId?: string;
  sourcePdfName?: string;
  sourcePageNumber?: number;
  originalQuestionNumber?: number;
  questionText: string;
  options: [string, string, string, string]; // exactly 4 options
  correctAnswerIndex: number | null; // 0, 1, 2, 3, or null if unverified
  answerSource: AnswerSource;
  isApproved: boolean; // Must be approved by administrator before publishing
  explanation?: string;
  extractionStatus?: 'valid' | 'needs_review';
  createdAt?: string;
}

export interface MockConfig {
  courseId: string;
  courseName: string;
  selectedWeeks: number[]; // Explicit list of selected weeks e.g. [1, 3, 5]
  weekNumber?: number | 'all'; // compatibility helper
  questionCount: number | 'all';
  selectionType: QuestionSelection;
  mode: TestMode;
  timeLimitMinutes: number; // 0 means unlimited
}

export interface AttemptQuestionItem {
  questionId: string;
  questionIndex: number;
  questionText: string;
  displayedOptions: [string, string, string, string]; // randomized option order for this attempt
  selectedOptionIndex: number | null; // index inside displayedOptions
  correctOptionIndex: number | null; // index inside displayedOptions, or null if question had no answer
  isMarkedForReview: boolean;
  timeSpentSeconds: number;
  explanation?: string;
}

export interface MockAttempt {
  id: string;
  userId?: string;
  studentName?: string;
  regNumber?: string;
  courseId: string;
  courseName: string;
  mode: TestMode;
  totalQuestions: number;
  score: number;
  percentage: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  timeTakenSeconds: number;
  timeLimitSeconds: number | null;
  selectedWeeks?: number[];
  startedAt?: string;
  submittedAt?: string;
  createdAt: string;
  completedAt: string;
  items: AttemptQuestionItem[]; // faithful immutable playback snapshot
}

export interface UserProgress {
  totalAttempted: number;
  totalCorrect: number;
  accuracy: number;
  bestScore: number;
  testsCompleted: number;
  practiceCompleted: number;
  examCompleted: number;
  weekWise: {
    courseId: string;
    courseName: string;
    week: number;
    attempted: number;
    correct: number;
    accuracy: number;
  }[];
}

export interface ExtractedQuestionDraft {
  id: string;
  originalQuestionNumber?: number;
  sourcePageNumber?: number;
  questionText: string;
  options: [string, string, string, string];
  correctAnswerIndex: number | null; // null if unverified
  hasExplicitAnswer?: boolean;
  acceptedAnswerText?: string | null; // Raw printed accepted answer text from PDF
  answerSource: AnswerSource;
  isApproved: boolean;
  explanation?: string;
  weekNumber: number;
  isValid: boolean;
  needsReview?: boolean;
  reviewReason?: string;
  extractionMethod?: 'text' | 'vision'; // How this question was extracted
}

/** Result from vision extraction of a single PDF page */
export interface VisionPageResult {
  pageNumber: number;
  weekHeading: string | null;
  questions: VisionExtractedQuestion[];
}

export interface VisionExtractedQuestion {
  question_number: number | null;
  question_text: string;
  option_a: string | null;
  option_b: string | null;
  option_c: string | null;
  option_d: string | null;
  accepted_answer_text: string | null;
  is_partial: boolean;
  partial_position: 'start' | 'end' | null;
}

export interface ExtractionProgressInfo {
  currentPage: number;
  totalPages: number;
  status: string;
  questionsDetected?: number;
  weeksDetected?: number;
  activeBatches?: number;
  totalBatches?: number;
  completedBatches?: number;
}

/** Progress callback for PDF processing pipeline */
export type ExtractionProgressCallback = (
  currentPage: number,
  totalPages: number,
  status: string,
  extra?: Partial<ExtractionProgressInfo>
) => void;
