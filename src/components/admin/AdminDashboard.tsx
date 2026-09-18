import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Edit3,
  Globe,
  Lock,
  ArrowRight,
  LogOut,
  BookOpen,
  Plus,
  Layers,
  Sparkles,
  Search,
  Check,
  X,
  FileCheck,
  ChevronRight,
  UserCheck,
  Shield,
  Key,
  UserPlus,
  Users,
  UserX,
} from 'lucide-react';
import { Course, Question, ExtractedQuestionDraft, User, AnswerSource, MockAttempt } from '../../types';
import {
  getAdminUsers,
  createAdminAccount,
  updateAdminProfile,
  toggleAdminStatus,
  resetAdminPassword,
} from '../../lib/auth';
import {
  getCourses,
  saveCourse,
  publishTest,
  unpublishTest,
  deleteTest,
  getQuestions,
  saveQuestions,
  updateQuestion,
  deleteQuestion,
  getAllAttempts,
  fetchAttemptsFromSupabase,
  fetchAdminRecentAttemptsFromSupabase,
} from '../../lib/storage';
import { processFullPdf, HybridExtractionResult, extractTextFromPdf, parseMcqsFromText, parseAnswerKeySource, applyAnswerKeyMapping } from '../../lib/pdfParser';
import { uploadPdfDocument } from '../../lib/pdfStorage';
import { getSupabaseClient } from '../../lib/supabase';
function parseBatchQuestionInput(text: string, defaultWeek: number): ExtractedQuestionDraft[] {
  if (!text || text.trim().length === 0) return [];
  const blocks = text.split(/(?:^|\n)(?=(?:Q(?:uestion)?\s*\d+|\d+[\.\)]\s+))/i);
  const results: ExtractedQuestionDraft[] = [];

  let qIndex = 0;
  for (const block of blocks) {
    const trimmed = block.trim();
    if (trimmed.length < 5) continue;

    const lines = trimmed.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
    if (lines.length < 2) continue;

    qIndex++;
    const qNumMatch = lines[0].match(/^(?:(?:Question|Q)\s*[:.]?\s*(\d+)|\b(\d+)[\.\)]\s*)/i);
    const qNum = qNumMatch ? parseInt(qNumMatch[1] || qNumMatch[2], 10) : qIndex;
    const questionText = lines[0].replace(/^(?:(?:Question|Q)\s*[:.]?\s*\d+[\.\:\)\-]?|\b\d+[\.\)]\s*)/i, '').trim();

    let optA = '', optB = '', optC = '', optD = '';
    let answerLetter = '';

    for (let i = 1; i < lines.length; i++) {
      const l = lines[i];
      const ansMatch = l.match(/^(?:Answer|Accepted Answer|Correct Answer|Ans)\s*[:\-]?\s*([A-Da-d])/i);
      if (ansMatch) {
        answerLetter = ansMatch[1].toUpperCase();
        continue;
      }
      const optMatch = l.match(/^(?:\(?([A-Da-d])\)?[\s\.\:\)]+)(.*)/);
      if (optMatch) {
        const letter = optMatch[1].toUpperCase();
        const content = optMatch[2].trim();
        if (letter === 'A') optA = content;
        else if (letter === 'B') optB = content;
        else if (letter === 'C') optC = content;
        else if (letter === 'D') optD = content;
      }
    }

    const options: [string, string, string, string] = [
      optA || 'Option A',
      optB || 'Option B',
      optC || 'Option C',
      optD || 'Option D',
    ];

    let correctIdx: number | null = null;
    if (answerLetter) {
      correctIdx = 'ABCD'.indexOf(answerLetter);
      if (correctIdx === -1) correctIdx = null;
    }

    results.push({
      id: `manual-${qIndex}-${Date.now().toString(36)}`,
      originalQuestionNumber: qNum,
      questionText: questionText || lines[0],
      options,
      correctAnswerIndex: correctIdx,
      hasExplicitAnswer: correctIdx !== null,
      acceptedAnswerText: answerLetter ? `${answerLetter}` : null,
      answerSource: correctIdx !== null ? 'Manually Verified' : 'Not Available',
      isApproved: correctIdx !== null,
      weekNumber: defaultWeek,
      isValid: Boolean(questionText && (optA || optB)),
      needsReview: correctIdx === null,
      extractionMethod: 'text',
    });
  }

  return results;
}

interface AdminDashboardProps {
  currentUser: User;
  onLogout: () => void;
  onNavigateToStudentPlatform: () => void;
}

type AdminTab = 'tests' | 'upload' | 'manual' | 'attempts' | 'admins';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onLogout,
  onNavigateToStudentPlatform,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('tests');
  const [courses, setCourses] = useState<Course[]>(getCourses(false));
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ----------------- Admin Management State -----------------
  const [adminUsers, setAdminUsers] = useState<User[]>(getAdminUsers());
  const [showCreateAdminModal, setShowCreateAdminModal] = useState(false);
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminConfirm, setNewAdminConfirm] = useState('');
  const [adminActionLoading, setAdminActionLoading] = useState(false);

  // Edit Admin State
  const [editingAdmin, setEditingAdmin] = useState<User | null>(null);
  const [editAdminName, setEditAdminName] = useState('');
  const [editAdminEmail, setEditAdminEmail] = useState('');

  // Reset Password State
  const [resettingAdmin, setResettingAdmin] = useState<User | null>(null);
  const [resetAdminNewPass, setResetAdminNewPass] = useState('');
  const [resetAdminConfirmPass, setResetAdminConfirmPass] = useState('');

  // ----------------- Manual Question Entry State -----------------
  const [manualCourseId, setManualCourseId] = useState<string>('');
  const [manualWeek, setManualWeek] = useState<number>(1);
  const [manualMode, setManualMode] = useState<'single' | 'batch'>('single');

  // Single Question Entry Form
  const [singleQText, setSingleQText] = useState('');
  const [singleOptA, setSingleOptA] = useState('');
  const [singleOptB, setSingleOptB] = useState('');
  const [singleOptC, setSingleOptC] = useState('');
  const [singleOptD, setSingleOptD] = useState('');
  const [singleCorrectIndex, setSingleCorrectIndex] = useState<number | null>(null);

  // Batch Question Entry Form
  const [batchInputText, setBatchInputText] = useState('');
  const [parsedBatchPreview, setParsedBatchPreview] = useState<ExtractedQuestionDraft[]>([]);

  // Create New Test Bank Dialog
  const [showNewBankModal, setShowNewBankModal] = useState(false);
  const [newBankName, setNewBankName] = useState('');
  const [newBankCode, setNewBankCode] = useState('');
  const [newBankDesc, setNewBankDesc] = useState('');

  // Course questions for manual view
  const [manualCourseQuestions, setManualCourseQuestions] = useState<Question[]>([]);

  // Toast / alerts
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const refreshCourses = () => {
    setCourses(getCourses(false));
  };

  // ----------------- Ingestion & Review State -----------------
  const [uploadStep, setUploadStep] = useState<'upload_pdf' | 'answer_key' | 'review'>('upload_pdf');
  const [isProcessingPdf, setIsProcessingPdf] = useState(false);
  const [uploadedPdfName, setUploadedPdfName] = useState('');
  const [draftQuestions, setDraftQuestions] = useState<ExtractedQuestionDraft[]>([]);
  const [workingCourse, setWorkingCourse] = useState<Course | null>(null);

  // Bulk Week Assignment State
  const [selectedQuestionIndices, setSelectedQuestionIndices] = useState<number[]>([]);
  const [bulkTargetWeek, setBulkTargetWeek] = useState<number>(1);
  const [rangeStart, setRangeStart] = useState<number>(1);
  const [rangeEnd, setRangeEnd] = useState<number>(15);

  // Answer Key input state
  const [answerKeyInputType, setAnswerKeyInputType] = useState<'text' | 'document'>('text');
  const [answerKeyText, setAnswerKeyText] = useState('');
  const [isProcessingAnswerKey, setIsProcessingAnswerKey] = useState(false);
  const [mappedCount, setMappedCount] = useState<number>(0);

  // Extraction progress state
  const [extractionProgress, setExtractionProgress] = useState<{
    current: number;
    total: number;
    status: string;
    questionsDetected?: number;
    weeksDetected?: number;
    activeBatches?: number;
    totalBatches?: number;
    completedBatches?: number;
  }>({ current: 0, total: 0, status: '' });
  const [extractionStats, setExtractionStats] = useState<HybridExtractionResult | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'verified' | 'needs_review'>('all');

  // Active question under edit during review
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);

  // Attempts monitor
  const [allAttempts, setAllAttempts] = useState<MockAttempt[]>([]);

  useEffect(() => {
    if (activeTab === 'attempts') {
      fetchAdminRecentAttemptsFromSupabase().then((atts) => setAllAttempts(atts));
    }
  }, [activeTab]);

  const refreshManualQuestions = (cId: string, wk?: number) => {
    if (!cId) return;
    const qs = getQuestions(cId, wk !== undefined ? wk : manualWeek, false);
    setManualCourseQuestions(qs);
  };

  useEffect(() => {
    if (activeTab === 'manual') {
      const activeId = manualCourseId || courses[0]?.id || '';
      if (!manualCourseId && activeId) setManualCourseId(activeId);
      refreshManualQuestions(activeId, manualWeek);
    }
  }, [activeTab, manualCourseId, manualWeek, courses]);

  const handleAddSingleQuestion = () => {
    if (!manualCourseId) {
      setErrorMessage('Please select or create a test bank first.');
      return;
    }
    if (!singleQText.trim()) {
      setErrorMessage('Question text is required.');
      return;
    }
    if (!singleOptA.trim() || !singleOptB.trim()) {
      setErrorMessage('At least Option A and Option B are required.');
      return;
    }
    if (singleCorrectIndex === null) {
      setErrorMessage('Please select the correct answer (A, B, C, or D).');
      return;
    }

    const course = courses.find((c) => c.id === manualCourseId);
    if (!course) return;

    const existingQs = getQuestions(manualCourseId);
    const newQuestion: Question = {
      id: `q-manual-${manualCourseId}-${Date.now()}-${existingQs.length + 1}`,
      courseId: manualCourseId,
      weekNumber: manualWeek,
      originalQuestionNumber: existingQs.length + 1,
      questionText: singleQText.trim(),
      options: [
        singleOptA.trim(),
        singleOptB.trim(),
        singleOptC.trim() || 'Option C',
        singleOptD.trim() || 'Option D',
      ],
      correctAnswerIndex: singleCorrectIndex,
      answerSource: 'Manually Verified',
      isApproved: true,
      createdAt: new Date().toISOString(),
    };

    saveQuestions([newQuestion]);

    const allWeeks = Array.from(new Set([...(course.weeks || [1]), manualWeek])).sort((a, b) => a - b);
    saveCourse({
      ...course,
      weeks: allWeeks,
      totalQuestions: existingQs.length + 1,
    });

    refreshCourses();
    refreshManualQuestions(manualCourseId, manualWeek);

    // Reset single question inputs for fast sequential entry
    setSingleQText('');
    setSingleOptA('');
    setSingleOptB('');
    setSingleOptC('');
    setSingleOptD('');
    setSingleCorrectIndex(null);

    showToast(`Question added to Week ${manualWeek}!`);
  };

  const handleParseBatch = () => {
    if (!batchInputText.trim()) {
      setErrorMessage('Please paste structured question text to parse.');
      return;
    }
    const drafts = parseBatchQuestionInput(batchInputText, manualWeek);
    if (drafts.length === 0) {
      setErrorMessage('Could not detect any questions matching the format. Expected: Q1. ... A. ... B. ... Answer: X');
      return;
    }
    setParsedBatchPreview(drafts);
    showToast(`Detected ${drafts.length} structured questions ready to save.`);
  };

  const handleSaveBatch = () => {
    if (!manualCourseId) {
      setErrorMessage('Please select or create a test bank first.');
      return;
    }
    if (parsedBatchPreview.length === 0) {
      setErrorMessage('No parsed questions to save.');
      return;
    }

    const course = courses.find((c) => c.id === manualCourseId);
    if (!course) return;

    const existingQs = getQuestions(manualCourseId);
    let startIdx = existingQs.length;

    const newQuestions: Question[] = parsedBatchPreview.map((d, i) => ({
      id: `q-manual-${manualCourseId}-${Date.now()}-${startIdx + i + 1}`,
      courseId: manualCourseId,
      weekNumber: manualWeek,
      originalQuestionNumber: startIdx + i + 1,
      questionText: d.questionText,
      options: d.options,
      correctAnswerIndex: d.correctAnswerIndex,
      answerSource: 'Manually Verified' as const,
      isApproved: d.correctAnswerIndex !== null,
      createdAt: new Date().toISOString(),
    }));

    saveQuestions(newQuestions);

    const allWeeks = Array.from(new Set([...(course.weeks || [1]), manualWeek])).sort((a, b) => a - b);
    saveCourse({
      ...course,
      weeks: allWeeks,
      totalQuestions: existingQs.length + newQuestions.length,
    });

    refreshCourses();
    refreshManualQuestions(manualCourseId, manualWeek);
    setBatchInputText('');
    setParsedBatchPreview([]);
    showToast(`Added ${newQuestions.length} questions to ${course.name} (Week ${manualWeek})!`);
  };

  const handleCreateNewBank = () => {
    if (!newBankName.trim()) {
      setErrorMessage('Test bank title is required.');
      return;
    }
    const code = newBankCode.trim() || `TEST-${Math.floor(100 + Math.random() * 900)}`;
    const newBank: Course = {
      id: `course-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      code,
      name: newBankName.trim(),
      description: newBankDesc.trim() || 'Custom Administrator Question Bank',
      status: 'draft',
      weeks: [1],
      totalQuestions: 0,
      createdAt: new Date().toISOString(),
    };

    saveCourse(newBank);
    refreshCourses();
    setManualCourseId(newBank.id);
    setManualWeek(1);
    setShowNewBankModal(false);
    setNewBankName('');
    setNewBankCode('');
    setNewBankDesc('');
    showToast(`Test Bank "${newBank.name}" created! Now add questions.`);
  };

  const handleDeleteManualQuestion = (questionId: string) => {
    deleteQuestion(questionId);
    const course = courses.find((c) => c.id === manualCourseId);
    if (course) {
      const remaining = getQuestions(manualCourseId);
      saveCourse({
        ...course,
        totalQuestions: remaining.length,
      });
      refreshCourses();
    }
    refreshManualQuestions(manualCourseId, manualWeek);
    showToast('Question deleted.');
  };

  const handleUpdateManualQuestion = (questionId: string, patch: Partial<Question>) => {
    const q = manualCourseQuestions.find((item) => item.id === questionId);
    if (q) {
      updateQuestion({ ...q, ...patch });
      refreshManualQuestions(manualCourseId, manualWeek);
    }
  };

  const pdfInputRef = useRef<HTMLInputElement>(null);
  const answerKeyDocRef = useRef<HTMLInputElement>(null);

  // ----------------- PDF Upload & Hybrid Extraction Pipeline -----------------
  const handlePdfSelected = async (file: File) => {
    if (!file) return;
    setIsProcessingPdf(true);
    setErrorMessage(null);
    setUploadedPdfName(file.name);
    setExtractionProgress({ current: 0, total: 0, status: 'Loading document...' });
    setExtractionStats(null);

    try {
      const courseId = `course-${Date.now()}`;
      setExtractionProgress({ current: 0, total: 0, status: 'Storing PDF document...' });

      // Upload actual binary PDF to Supabase Storage & local persistent IndexedDB
      let storagePath = '';
      try {
        const storedMeta = await uploadPdfDocument(file, courseId, 1, 0);
        storagePath = storedMeta.storagePath;
      } catch (uploadErr) {
        console.warn('PDF storage notice:', uploadErr);
      }

      const buffer = await file.arrayBuffer();
      const supabase = getSupabaseClient();

      // Use the hybrid pipeline: text for text-based pages, vision for image-based pages
      const result = await processFullPdf(
        buffer,
        supabase,
        file.name,
        (currentPage, totalPages, status, extra) => {
          setExtractionProgress({
            current: currentPage,
            total: totalPages,
            status,
            questionsDetected: extra?.questionsDetected,
            weeksDetected: extra?.weeksDetected,
            activeBatches: extra?.activeBatches,
            totalBatches: extra?.totalBatches,
            completedBatches: extra?.completedBatches,
          });
        }
      );

      if (result.questions.length === 0) {
        setErrorMessage(
          'No multiple-choice questions were detected in this document. ' +
          'Ensure the PDF contains visible questions with options (A, B, C, D).'
        );
        setIsProcessingPdf(false);
        return;
      }

      // Automatically generate course code and title from filename
      const cleanTitle = file.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
      const autoCode = `TEST-${Math.floor(100 + Math.random() * 900)}`;

      const newCourse: Course = {
        id: courseId,
        code: autoCode,
        name: cleanTitle,
        description: `Imported from ${file.name}`,
        status: 'draft',
        sourcePdfName: file.name,
        storagePath,
        fileSizeBytes: file.size,
        weeks: result.weeksDetected,
        createdAt: new Date().toISOString(),
      };

      setDraftQuestions(result.questions);
      setWorkingCourse(newCourse);
      setExtractionStats(result);

      // Check if answers were already extracted from PDF (e.g. "Accepted Answer" printed in the document)
      const questionsWithAnswers = result.questions.filter((q) => q.correctAnswerIndex !== null).length;
      if (questionsWithAnswers > result.questions.length * 0.5) {
        // Most questions already have answers from the PDF — go straight to review
        setUploadStep('review');
        showToast(
          `Extracted ${result.questions.length} questions from ${result.pageCount} pages. ` +
          `${questionsWithAnswers} answers detected from document.`
        );
      } else {
        // Few answers found — offer the answer key step
        setUploadStep('answer_key');
        showToast(
          `Extracted ${result.questions.length} questions from ${result.pageCount} pages. ` +
          `Provide the authoritative answer key.`
        );
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to process question PDF.';
      setErrorMessage(message);
    } finally {
      setIsProcessingPdf(false);
      setExtractionProgress({ current: 0, total: 0, status: '' });
    }
  };

  // ----------------- Answer Key Mapping -----------------
  const handleApplyAnswerKeyText = () => {
    if (!answerKeyText.trim()) {
      // Proceed with whatever inline answers were detected in PDF
      setUploadStep('review');
      return;
    }

    const keyMap = parseAnswerKeySource(answerKeyText);
    if (keyMap.size === 0) {
      setErrorMessage('Could not parse any question number -> answer mappings. Use formats like: 1 - C, 2 - A, 3: D');
      return;
    }

    const mapped = applyAnswerKeyMapping(draftQuestions, keyMap);
    setDraftQuestions(mapped);
    setMappedCount(keyMap.size);
    setUploadStep('review');
    showToast(`Authoritatively mapped answers for ${keyMap.size} questions.`);
  };

  const handleAnswerKeyDocSelected = async (file: File) => {
    if (!file) return;
    setIsProcessingAnswerKey(true);
    setErrorMessage(null);

    try {
      const buffer = await file.arrayBuffer();
      const { text } = await extractTextFromPdf(buffer);
      const keyMap = parseAnswerKeySource(text);

      if (keyMap.size === 0) {
        setErrorMessage('No question number -> answer mappings were detected in the answer document.');
        setIsProcessingAnswerKey(false);
        return;
      }

      const mapped = applyAnswerKeyMapping(draftQuestions, keyMap);
      setDraftQuestions(mapped);
      setMappedCount(keyMap.size);
      setUploadStep('review');
      showToast(`Authoritatively mapped ${keyMap.size} answers from document.`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to read answer key document.');
    } finally {
      setIsProcessingAnswerKey(false);
    }
  };

  // ----------------- Question Review Handlers -----------------
  const handleUpdateDraftQuestion = (idx: number, patch: Partial<ExtractedQuestionDraft>) => {
    setDraftQuestions((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], ...patch };
      return copy;
    });
  };

  const handleSelectCorrectOption = (idx: number, optIndex: number | null) => {
    setDraftQuestions((prev) => {
      const copy = [...prev];
      copy[idx] = {
        ...copy[idx],
        correctAnswerIndex: optIndex,
        answerSource: optIndex !== null ? 'Manually Verified' : 'Not Available',
        hasExplicitAnswer: optIndex !== null,
        needsReview: optIndex === null,
        reviewReason: optIndex === null ? 'ANSWER NOT PROVIDED' : undefined,
      };
      return copy;
    });
  };

  const handleToggleApprove = (idx: number) => {
    setDraftQuestions((prev) => {
      const copy = [...prev];
      const current = copy[idx];
      // Cannot approve if answer is missing
      if (current.correctAnswerIndex === null) {
        setErrorMessage(`Question ${idx + 1} cannot be approved without a verified answer.`);
        return prev;
      }
      copy[idx] = { ...current, isApproved: !current.isApproved };
      return copy;
    });
  };

  const handleApproveAllVerified = () => {
    setDraftQuestions((prev) =>
      prev.map((q) => {
        if (q.correctAnswerIndex !== null) {
          return { ...q, isApproved: true };
        }
        return q;
      })
    );
    showToast('All questions with verified answers have been approved.');
  };

  const handleDeleteDraftQuestion = (idx: number) => {
    setDraftQuestions((prev) => prev.filter((_, i) => i !== idx));
    setSelectedQuestionIndices((prev) => prev.filter((i) => i !== idx).map((i) => (i > idx ? i - 1 : i)));
  };

  // ----------------- Bulk Week Assignment Handlers -----------------
  const handleToggleSelectQuestion = (idx: number) => {
    setSelectedQuestionIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleSelectAllDrafts = () => {
    setSelectedQuestionIndices(draftQuestions.map((_, i) => i));
  };

  const handleDeselectAllDrafts = () => {
    setSelectedQuestionIndices([]);
  };

  const handleSelectRangeDrafts = () => {
    const start = Math.max(1, rangeStart) - 1;
    const end = Math.min(draftQuestions.length, rangeEnd) - 1;
    if (start > end) {
      setErrorMessage('Invalid range: start must be less than or equal to end.');
      return;
    }
    const indices: number[] = [];
    for (let i = start; i <= end; i++) {
      indices.push(i);
    }
    setSelectedQuestionIndices(indices);
    showToast(`Selected Questions ${start + 1} to ${end + 1}.`);
  };

  const handleApplyBulkWeek = () => {
    if (selectedQuestionIndices.length === 0) {
      setErrorMessage('Please select at least one question to assign.');
      return;
    }
    setDraftQuestions((prev) =>
      prev.map((q, idx) => {
        if (selectedQuestionIndices.includes(idx)) {
          return { ...q, weekNumber: bulkTargetWeek };
        }
        return q;
      })
    );
    showToast(`Assigned ${selectedQuestionIndices.length} questions to Week ${bulkTargetWeek}.`);
    setSelectedQuestionIndices([]);
  };

  // ----------------- Save & Publish -----------------
  const handleSaveAsDraft = () => {
    if (!workingCourse || draftQuestions.length === 0) return;

    const uniqueWeeks = Array.from(new Set(draftQuestions.map((q) => q.weekNumber || 1))).sort((a, b) => a - b);

    saveCourse({
      ...workingCourse,
      totalQuestions: draftQuestions.length,
      weeks: uniqueWeeks,
      status: 'draft',
    });

    const questionsToSave: Question[] = draftQuestions.map((dq, i) => ({
      id: `q-${workingCourse.id}-${i + 1}`,
      courseId: workingCourse.id,
      weekNumber: dq.weekNumber || 1,
      questionText: dq.questionText,
      options: dq.options,
      correctAnswerIndex: dq.correctAnswerIndex,
      answerSource: dq.answerSource,
      isApproved: dq.isApproved,
      explanation: dq.explanation,
      sourcePdfName: workingCourse.sourcePdfName,
      createdAt: new Date().toISOString(),
    }));

    saveQuestions(questionsToSave);
    refreshCourses();
    setActiveTab('tests');
    showToast(`Saved "${workingCourse.name}" as Draft with ${uniqueWeeks.length} weeks.`);
  };

  const handlePublishFromReview = () => {
    if (!workingCourse || draftQuestions.length === 0) return;

    // Strict validation gate: every question must have a verified answer and be approved
    const unverified = draftQuestions.filter((q) => q.correctAnswerIndex === null || !q.isApproved);
    if (unverified.length > 0) {
      setErrorMessage(
        `Some questions do not have verified answers (${unverified.length} questions unverified or unapproved). Resolve before publishing.`
      );
      return;
    }

    const uniqueWeeks = Array.from(new Set(draftQuestions.map((q) => q.weekNumber || 1))).sort((a, b) => a - b);

    // Save course as published
    saveCourse({
      ...workingCourse,
      totalQuestions: draftQuestions.length,
      weeks: uniqueWeeks,
      status: 'published',
      publishedAt: new Date().toISOString(),
    });

    const questionsToSave: Question[] = draftQuestions.map((dq, i) => ({
      id: `q-${workingCourse.id}-${i + 1}`,
      courseId: workingCourse.id,
      weekNumber: dq.weekNumber || 1,
      questionText: dq.questionText,
      options: dq.options,
      correctAnswerIndex: dq.correctAnswerIndex,
      answerSource: dq.answerSource,
      isApproved: true,
      explanation: dq.explanation,
      sourcePdfName: workingCourse.sourcePdfName,
      createdAt: new Date().toISOString(),
    }));

    saveQuestions(questionsToSave);
    refreshCourses();
    setActiveTab('tests');
    showToast(`Test "${workingCourse.name}" published with ${uniqueWeeks.length} weeks! Students can now access it.`);
  };


  // ----------------- Existing Tests Actions -----------------
  const handlePublishExistingTest = (courseId: string) => {
    const res = publishTest(courseId);
    if (res.success) {
      refreshCourses();
      showToast('Test published successfully.');
    } else {
      setErrorMessage(res.error || 'Could not publish test.');
    }
  };

  const handleUnpublishExistingTest = (courseId: string) => {
    unpublishTest(courseId);
    refreshCourses();
    showToast('Test reverted to Draft.');
  };

  const handleDeleteExistingTest = (courseId: string, testName: string) => {
    if (window.confirm(`Are you sure you want to delete "${testName}"? Historical student attempts will remain safe.`)) {
      deleteTest(courseId);
      refreshCourses();
      showToast('Test and question records deleted.');
    }
  };

  // ----------------- Admin Management Handlers -----------------
  const refreshAdmins = () => {
    setAdminUsers(getAdminUsers());
  };

  const handleCreateAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminName.trim()) {
      setErrorMessage('Administrator name is required.');
      return;
    }
    if (!newAdminEmail.trim() || !newAdminEmail.includes('@')) {
      setErrorMessage('Valid administrator email address is required.');
      return;
    }
    if (!newAdminPassword || newAdminPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    if (newAdminPassword !== newAdminConfirm) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setAdminActionLoading(true);
    setErrorMessage(null);
    try {
      const res = await createAdminAccount(newAdminName, newAdminEmail, newAdminPassword, newAdminConfirm);
      if (res.success) {
        showToast(`Administrator account "${newAdminName}" created successfully.`);
        setShowCreateAdminModal(false);
        setNewAdminName('');
        setNewAdminEmail('');
        setNewAdminPassword('');
        setNewAdminConfirm('');
        refreshAdmins();
      } else {
        setErrorMessage(res.error || 'Failed to create administrator account.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error creating administrator account.');
    } finally {
      setAdminActionLoading(false);
    }
  };

  const handleEditAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAdmin) return;
    if (!editAdminName.trim()) {
      setErrorMessage('Administrator name is required.');
      return;
    }
    if (!editAdminEmail.trim() || !editAdminEmail.includes('@')) {
      setErrorMessage('Valid administrator email is required.');
      return;
    }

    setAdminActionLoading(true);
    setErrorMessage(null);
    try {
      const res = await updateAdminProfile(editingAdmin.id, editAdminName, editAdminEmail);
      if (res.success) {
        showToast('Administrator profile updated successfully.');
        setEditingAdmin(null);
        refreshAdmins();
      } else {
        setErrorMessage(res.error || 'Failed to update administrator profile.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error updating administrator.');
    } finally {
      setAdminActionLoading(false);
    }
  };

  const handleToggleAdminStatus = async (targetAdmin: User) => {
    if (targetAdmin.id === currentUser.id) {
      setErrorMessage('You cannot deactivate your own administrator account.');
      return;
    }
    const newStatus = targetAdmin.status === 'deactivated' ? 'active' : 'deactivated';
    const confirmMsg = newStatus === 'deactivated'
      ? `Are you sure you want to deactivate administrator "${targetAdmin.name}"? They will lose dashboard access.`
      : `Reactivate administrator "${targetAdmin.name}"?`;
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await toggleAdminStatus(targetAdmin.id, newStatus);
      if (res.success) {
        showToast(`Administrator ${newStatus === 'deactivated' ? 'deactivated' : 'reactivated'}.`);
        refreshAdmins();
      } else {
        setErrorMessage(res.error || 'Could not update administrator status.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error updating status.');
    }
  };

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resettingAdmin) return;
    if (!resetAdminNewPass || resetAdminNewPass.length < 6) {
      setErrorMessage('New password must be at least 6 characters.');
      return;
    }
    if (resetAdminNewPass !== resetAdminConfirmPass) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setAdminActionLoading(true);
    setErrorMessage(null);
    try {
      const res = await resetAdminPassword(resettingAdmin.id, resetAdminNewPass);
      if (res.success) {
        showToast(`Password for "${resettingAdmin.name}" reset successfully.`);
        setResettingAdmin(null);
        setResetAdminNewPass('');
        setResetAdminConfirmPass('');
        refreshAdmins();
      } else {
        setErrorMessage(res.error || 'Failed to reset password.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Error resetting password.');
    } finally {
      setAdminActionLoading(false);
    }
  };

  // Filter courses
  const filteredCourses = courses.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#0F172A] flex flex-col font-sans select-none">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-white border border-[#38BDF8] text-[#0284C7] text-xs font-mono shadow-[0_8px_30px_rgba(2,132,199,0.15)] flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#DCEAF5] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#0284C7]">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-[#0F172A] uppercase">
            Prep Study Lab
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateToStudentPlatform}
            title="Browse Student Platform"
            className="text-xs font-mono text-[#0F172A] px-3 py-1.5 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] truncate max-w-[140px] cursor-pointer hover:bg-[#DCEAF5] hover:border-[#38BDF8]/50 transition-all"
          >
            {currentUser.name}
          </button>
          <button
            onClick={onLogout}
            title="Sign out"
            className="p-2 rounded-full text-[#64748B] hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Admin Tab Switcher */}
      <div className="bg-white border-b border-[#DCEAF5] px-6 py-2 flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('tests')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
            activeTab === 'tests'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          Test Library ({courses.length})
        </button>
        <button
          onClick={() => {
            setActiveTab('upload');
            setUploadStep('upload_pdf');
            setErrorMessage(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'upload'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload PDF</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('manual');
            setErrorMessage(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'manual'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Manual Entry</span>
        </button>
        <button
          onClick={() => setActiveTab('attempts')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
            activeTab === 'attempts'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          Recent Attempts
        </button>
        <button
          onClick={() => {
            setActiveTab('admins');
            setAdminUsers(getAdminUsers());
            setErrorMessage(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'admins'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Admin Management</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button onClick={() => setErrorMessage(null)} className="p-1 text-rose-500 hover:text-rose-800">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ======================= TAB 1: TEST LIBRARY ======================= */}
        {activeTab === 'tests' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                    statusFilter === 'all'
                      ? 'bg-slate-800 text-white'
                      : 'bg-white border border-[#DCEAF5] text-[#64748B] hover:bg-[#EFF8FF]'
                  }`}
                >
                  All ({courses.length})
                </button>
                <button
                  onClick={() => setStatusFilter('published')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                    statusFilter === 'published'
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-white border border-[#DCEAF5] text-[#64748B] hover:bg-[#EFF8FF]'
                  }`}
                >
                  Published ({courses.filter((c) => c.status === 'published').length})
                </button>
                <button
                  onClick={() => setStatusFilter('draft')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                    statusFilter === 'draft'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white border border-[#DCEAF5] text-[#64748B] hover:bg-[#EFF8FF]'
                  }`}
                >
                  Drafts ({courses.filter((c) => c.status === 'draft').length})
                </button>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tests..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#38BDF8] shadow-sm"
                />
              </div>
            </div>

            {/* Test Cards Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course) => {
                const count = getQuestions(course.id).length;
                const isPublished = course.status === 'published';

                return (
                  <div
                    key={course.id}
                    className="p-5 rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_4px_16px_rgba(2,132,199,0.04)] flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-[#0284C7] font-semibold">
                          {course.code}
                        </span>
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                            isPublished
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {isPublished ? 'PUBLISHED' : 'DRAFT'}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg text-[#0F172A] font-medium leading-snug line-clamp-2">
                        {course.name}
                      </h3>

                      {course.description && (
                        <p className="text-xs text-[#64748B] mt-1.5 line-clamp-2">
                          {course.description}
                        </p>
                      )}

                      <div className="mt-4 pt-3 border-t border-[#EFF8FF] flex items-center justify-between text-xs text-[#64748B] font-mono">
                        <span>{count} Questions</span>
                        <span>
                          {course.publishedAt
                            ? new Date(course.publishedAt).toLocaleDateString()
                            : 'Unpublished'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#DCEAF5]">
                      {isPublished ? (
                        <button
                          onClick={() => handleUnpublishExistingTest(course.id)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors"
                        >
                          Unpublish
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePublishExistingTest(course.id)}
                          className="px-3 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                        >
                          Publish
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteExistingTest(course.id, course.name)}
                        className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                        title="Delete Test"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {filteredCourses.length === 0 && (
                <div className="col-span-full p-12 text-center rounded-3xl bg-white border border-[#DCEAF5] text-[#64748B]">
                  No tests found in this category. Click "Upload & Ingest Test" to create one.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================= TAB 2: INGESTION WORKFLOW ======================= */}
        {activeTab === 'upload' && (
          <div className="space-y-6">
            {/* Step 1: Upload Question PDF */}
            {uploadStep === 'upload_pdf' && (
              <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_8px_30px_rgba(2,132,199,0.05)] text-center space-y-6">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                    STEP 1 OF 3
                  </div>
                  <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                    Upload Question Paper PDF
                  </h2>
                  <p className="text-xs text-[#64748B] font-mono mt-1">
                    ALL QUESTIONS AND OPTIONS WILL BE EXTRACTED EXACTLY AS PRINTED
                  </p>
                </div>

                {isProcessingPdf ? (
                  /* Batch Progress Indicator */
                  <div className="p-8 rounded-3xl bg-[#F8FBFF] border border-[#DCEAF5] space-y-5 text-center">
                    <div className="p-4 rounded-2xl bg-white border border-[#DCEAF5] text-[#0284C7] mx-auto w-fit shadow-sm">
                      <Layers className="w-8 h-8 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {extractionProgress.status || 'Analyzing document...'}
                      </p>
                      <p className="text-xs text-[#64748B] font-mono mt-0.5">
                        {uploadedPdfName}
                      </p>
                    </div>

                    {/* Dynamic Batch Progress Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto text-left">
                      <div className="p-3 rounded-2xl bg-white border border-[#DCEAF5] shadow-xs">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">Pages Processed</div>
                        <div className="text-base font-bold font-mono text-[#0F172A] mt-0.5">
                          {extractionProgress.current} <span className="text-xs font-normal text-[#64748B]">/ {extractionProgress.total || 91}</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white border border-[#DCEAF5] shadow-xs">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">Questions Detected</div>
                        <div className="text-base font-bold font-mono text-[#0284C7] mt-0.5">
                          {extractionProgress.questionsDetected || 0}
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white border border-[#DCEAF5] shadow-xs">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">Weeks Detected</div>
                        <div className="text-base font-bold font-mono text-[#0EA5E9] mt-0.5">
                          {extractionProgress.weeksDetected || 0}
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white border border-[#DCEAF5] shadow-xs">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">Active Batches</div>
                        <div className="text-base font-bold font-mono text-[#10B981] mt-0.5 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping inline-block" />
                          {extractionProgress.activeBatches || (extractionProgress.current > 0 && extractionProgress.current < (extractionProgress.total || 91) ? 3 : 0)}
                        </div>
                      </div>
                    </div>

                    {extractionProgress.total > 0 && (
                      <div className="space-y-1.5 max-w-lg mx-auto">
                        <div className="w-full h-2.5 bg-[#DCEAF5] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${Math.min(100, Math.round((extractionProgress.current / extractionProgress.total) * 100))}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-[#64748B] font-mono">
                          <span>Batch Parallel Pipeline (Concurrency: 3)</span>
                          <span>{Math.min(100, Math.round((extractionProgress.current / extractionProgress.total) * 100))}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Drop Zone */
                  <div
                    onClick={() => pdfInputRef.current?.click()}
                    className="border-2 border-dashed border-[#DCEAF5] hover:border-[#38BDF8] rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer bg-[#F8FBFF] hover:bg-[#EFF8FF]/50 transition-all group"
                  >
                    <input
                      ref={pdfInputRef}
                      type="file"
                      accept=".pdf,application/pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePdfSelected(file);
                      }}
                    />
                    <div className="p-4 rounded-2xl bg-white border border-[#DCEAF5] text-[#0284C7] mb-4 group-hover:scale-105 transition-transform shadow-sm">
                      <Upload className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      Select or drop Question PDF here
                    </p>
                    <p className="text-xs text-[#64748B] mt-1 font-mono">
                      Supports text-based and image-based PDFs. Week metadata is automatically detected.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Provide Authoritative Answer Key */}
            {uploadStep === 'answer_key' && (
              <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_8px_30px_rgba(2,132,199,0.05)] space-y-6">
                <div className="text-center">
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                    STEP 2 OF 3 · AUTHORITATIVE ANSWER SOURCE
                  </div>
                  <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                    Provide Authoritative Answer Key
                  </h2>
                  <p className="text-xs text-[#64748B] font-mono mt-1">
                    THE SYSTEM NEVER GUESSES ANSWERS · ONLY PROVIDED KEYS ARE ACCEPTED
                  </p>
                </div>

                {/* Input Type Switcher */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <button
                    onClick={() => setAnswerKeyInputType('text')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      answerKeyInputType === 'text'
                        ? 'bg-[#0284C7] text-white'
                        : 'bg-[#EFF8FF] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Paste Plain Text Key
                  </button>
                  <button
                    onClick={() => setAnswerKeyInputType('document')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      answerKeyInputType === 'document'
                        ? 'bg-[#0284C7] text-white'
                        : 'bg-[#EFF8FF] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Upload Answer Document / PDF
                  </button>
                </div>

                {answerKeyInputType === 'text' ? (
                  <div className="space-y-3">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                      Answer Key Text (e.g. 1 - C, 2 - A, 3 - D)
                    </label>
                    <textarea
                      rows={8}
                      value={answerKeyText}
                      onChange={(e) => setAnswerKeyText(e.target.value)}
                      placeholder={`1 - C\n2 - A\n3 - D\n4 - B\n5 - C`}
                      className="w-full p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs font-mono text-[#0F172A] outline-none focus:border-[#38BDF8] resize-none"
                    />
                    <p className="text-[11px] text-[#64748B] font-mono">
                      Accepts: "1 - C", "Q1: C", "1. C", "1) C", or tables.
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => answerKeyDocRef.current?.click()}
                    className="border-2 border-dashed border-[#DCEAF5] hover:border-[#38BDF8] rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer bg-[#F8FBFF] transition-all"
                  >
                    <input
                      ref={answerKeyDocRef}
                      type="file"
                      accept=".pdf,application/pdf,image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleAnswerKeyDocSelected(file);
                      }}
                    />
                    <FileCheck className="w-8 h-8 text-[#0284C7] mb-2" />
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {isProcessingAnswerKey ? 'Reading Answer Key...' : 'Select Answer Key PDF / Document'}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-[#DCEAF5]">
                  <button
                    onClick={() => setUploadStep('review')}
                    className="px-5 py-2.5 rounded-full border border-[#DCEAF5] text-xs font-semibold uppercase tracking-wider text-[#64748B] hover:bg-slate-50"
                  >
                    Skip & Verify Manually
                  </button>
                  <button
                    onClick={handleApplyAnswerKeyText}
                    className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Map Answers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Question Review & Approval Screen */}
            {uploadStep === 'review' && (
              <div className="space-y-6">
                {/* Header Summary & Actions Bar */}
                <div className="p-6 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm space-y-4">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                        STEP 3 OF 3 · ADMINISTRATOR REVIEW & APPROVAL
                      </div>
                      <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                        {workingCourse?.name || 'Review Extracted Questions'}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2.5 w-full lg:w-auto">
                      <button
                        onClick={handleApproveAllVerified}
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5] text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        Approve All Verified
                      </button>
                      <button
                        onClick={handleSaveAsDraft}
                        className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-all"
                      >
                        Save Draft
                      </button>
                      <button
                        onClick={handlePublishFromReview}
                        className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Publish to Students</span>
                        <Globe className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Extraction Summary Stats */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#64748B] border-t border-[#DCEAF5] pt-3">
                    {extractionStats && (
                      <span>Total Pages: {extractionStats.pageCount}</span>
                    )}
                    <span>{draftQuestions.length} Questions</span>
                    <span className="text-emerald-700 font-semibold">
                      {draftQuestions.filter((q) => q.isApproved).length} Approved
                    </span>
                    <span className="text-sky-700 font-semibold">
                      {draftQuestions.filter((q) => q.correctAnswerIndex !== null).length} Verified Answers
                    </span>
                    <span
                      className={
                        draftQuestions.some((q) => q.correctAnswerIndex === null)
                          ? 'text-rose-600 font-semibold'
                          : 'text-emerald-600 font-semibold'
                      }
                    >
                      {draftQuestions.filter((q) => q.correctAnswerIndex === null).length} Missing Answer
                    </span>
                    {extractionStats && extractionStats.weeksDetected.length > 0 && (
                      <span>
                        Weeks: {extractionStats.weeksDetected.map((w) => `Week ${w}`).join(', ')}
                      </span>
                    )}
                  </div>

                  {/* Review Filter Controls */}
                  <div className="flex items-center gap-2">
                    {(['all', 'verified', 'needs_review'] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setReviewFilter(f)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all ${
                          reviewFilter === f
                            ? 'bg-[#0284C7] text-white'
                            : 'bg-[#EFF8FF] text-[#64748B] hover:text-[#0F172A] border border-[#DCEAF5]'
                        }`}
                      >
                        {f === 'all' ? `All (${draftQuestions.length})` :
                         f === 'verified' ? `Verified (${draftQuestions.filter((q) => q.correctAnswerIndex !== null && !q.needsReview).length})` :
                         `Needs Review (${draftQuestions.filter((q) => q.needsReview || q.correctAnswerIndex === null).length})`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bulk Week Assignment Toolbar */}
                <div className="p-5 rounded-2xl bg-[#EFF8FF]/70 border border-[#DCEAF5] space-y-3">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] font-mono">
                        Bulk Week Assignment
                      </span>
                      <p className="text-[11px] text-[#64748B] font-mono mt-0.5">
                        SELECT QUESTIONS AND ASSIGN THEIR MODULE / WEEK IN BULK
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono">
                      <button
                        type="button"
                        onClick={handleSelectAllDrafts}
                        className="px-3 py-1 rounded-lg bg-white border border-[#DCEAF5] text-[#0284C7] hover:bg-sky-50 transition-colors"
                      >
                        Select All
                      </button>
                      <button
                        type="button"
                        onClick={handleDeselectAllDrafts}
                        className="px-3 py-1 rounded-lg bg-white border border-[#DCEAF5] text-[#64748B] hover:bg-slate-50 transition-colors"
                      >
                        Deselect
                      </button>
                      <span className="text-[#64748B] ml-2">
                        {selectedQuestionIndices.length} Selected
                      </span>
                    </div>
                  </div>

                  {/* Range selection and Week Assignment Actions */}
                  <div className="pt-2 border-t border-[#DCEAF5] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-[#64748B]">Select Range:</span>
                      <span className="text-[#64748B]">Q</span>
                      <input
                        type="number"
                        min={1}
                        max={draftQuestions.length}
                        value={rangeStart}
                        onChange={(e) => setRangeStart(parseInt(e.target.value, 10) || 1)}
                        className="w-14 px-2 py-1 rounded bg-white border border-[#DCEAF5] text-center font-mono text-xs"
                      />
                      <span className="text-[#64748B]">to Q</span>
                      <input
                        type="number"
                        min={1}
                        max={draftQuestions.length}
                        value={rangeEnd}
                        onChange={(e) => setRangeEnd(parseInt(e.target.value, 10) || 1)}
                        className="w-14 px-2 py-1 rounded bg-white border border-[#DCEAF5] text-center font-mono text-xs"
                      />
                      <button
                        type="button"
                        onClick={handleSelectRangeDrafts}
                        className="px-3 py-1 rounded bg-white border border-[#DCEAF5] text-[#0284C7] font-semibold hover:bg-sky-50 text-xs"
                      >
                        Select
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-[#64748B]">Assign Selected to:</span>
                      <select
                        value={bulkTargetWeek}
                        onChange={(e) => setBulkTargetWeek(parseInt(e.target.value, 10) || 1)}
                        className="px-3 py-1 rounded bg-white border border-[#DCEAF5] text-xs font-semibold text-[#0F172A]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => (
                          <option key={w} value={w}>
                            Week {w}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={handleApplyBulkWeek}
                        disabled={selectedQuestionIndices.length === 0}
                        className="px-4 py-1.5 rounded-full bg-[#0284C7] text-white font-bold hover:bg-[#0369a1] disabled:opacity-40 text-xs shadow-sm transition-all"
                      >
                        Assign Week
                      </button>
                    </div>
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  {draftQuestions.map((q, idx) => {
                    // Apply review filter
                    if (reviewFilter === 'verified' && (q.correctAnswerIndex === null || q.needsReview)) {
                      return null;
                    }
                    if (reviewFilter === 'needs_review' && q.correctAnswerIndex !== null && !q.needsReview) {
                      return null;
                    }

                    const isMissingAnswer = q.correctAnswerIndex === null;
                    const isSelectedForBulk = selectedQuestionIndices.includes(idx);

                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-3xl bg-white border transition-all ${
                          q.isApproved
                            ? 'border-emerald-200 shadow-sm'
                            : isMissingAnswer
                            ? 'border-rose-300 shadow-[0_0_0_1px_rgba(244,63,94,0.1)]'
                            : 'border-[#DCEAF5]'
                        } ${isSelectedForBulk ? 'ring-2 ring-[#0284C7]/30 bg-sky-50/20' : ''}`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Selection Checkbox */}
                            <input
                              type="checkbox"
                              checked={isSelectedForBulk}
                              onChange={() => handleToggleSelectQuestion(idx)}
                              className="w-4 h-4 rounded text-[#0284C7] border-[#DCEAF5] cursor-pointer"
                            />

                            <span className="w-7 h-7 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-xs font-mono font-bold text-[#0284C7] flex items-center justify-center">
                              {q.originalQuestionNumber || idx + 1}
                            </span>

                            {/* Source Page Badge */}
                            {q.sourcePageNumber && (
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono text-[#64748B]">
                                Page {q.sourcePageNumber}
                              </span>
                            )}

                            {/* Week Badge / Selector */}
                            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-[11px] font-mono text-[#0284C7]">
                              <span className="font-semibold">WEEK</span>
                              <select
                                value={q.weekNumber || 1}
                                onChange={(e) =>
                                  handleUpdateDraftQuestion(idx, {
                                    weekNumber: parseInt(e.target.value, 10) || 1,
                                  })
                                }
                                className="bg-transparent font-bold text-[#0284C7] outline-none cursor-pointer"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => (
                                  <option key={w} value={w}>
                                    {w}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                                q.answerSource === 'Answer Key'
                                  ? 'bg-sky-50 text-sky-700 border border-sky-200'
                                  : q.answerSource === 'PDF'
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : q.answerSource === 'Manually Verified'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}
                            >
                              Source: {q.answerSource}
                            </span>

                            {/* Accepted Answer Badge if printed in document */}
                            {q.acceptedAnswerText && (
                              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] font-mono text-indigo-700 font-semibold truncate max-w-[200px]" title={`Printed Accepted Answer: ${q.acceptedAnswerText}`}>
                                Printed Ans: {q.acceptedAnswerText}
                              </span>
                            )}

                            {/* Needs Review reason badge */}
                            {q.needsReview && q.reviewReason && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-mono text-amber-700">
                                {q.reviewReason}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleToggleApprove(idx)}
                              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-all ${
                                q.isApproved
                                  ? 'bg-emerald-600 text-white shadow-sm'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>{q.isApproved ? 'Approved' : 'Approve'}</span>
                            </button>
                            <button
                              onClick={() => handleDeleteDraftQuestion(idx)}
                              className="p-1.5 rounded-lg text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                              title="Delete Question"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Question Text Editor */}
                        <div className="mb-4">
                          <textarea
                            rows={2}
                            value={q.questionText}
                            onChange={(e) =>
                              handleUpdateDraftQuestion(idx, { questionText: e.target.value })
                            }
                            className="w-full p-3 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-sm text-[#0F172A] font-medium outline-none focus:border-[#38BDF8]"
                          />
                        </div>

                        {/* Options Editor & Answer Selection */}
                        <div className="space-y-2">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] flex items-center justify-between">
                            <span>Select Correct Answer (Authoritative)</span>
                            <div className="flex items-center gap-2">
                              {q.correctAnswerIndex !== null && (
                                <button
                                  type="button"
                                  onClick={() => handleSelectCorrectOption(idx, null)}
                                  className="text-[10px] font-mono text-rose-500 hover:underline"
                                >
                                  Clear Answer
                                </button>
                              )}
                              {isMissingAnswer && (
                                <span className="text-rose-600 font-mono text-[10px]">
                                  ANSWER NOT PROVIDED
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = q.correctAnswerIndex === optIdx;
                              const letter = String.fromCharCode(65 + optIdx);

                              return (
                                <div
                                  key={optIdx}
                                  onClick={() => handleSelectCorrectOption(idx, optIdx)}
                                  className={`p-3 rounded-2xl border flex items-center gap-3 cursor-pointer transition-all ${
                                    isSelected
                                      ? 'bg-[#EFF8FF] border-[#0284C7] shadow-sm'
                                      : 'bg-white border-[#DCEAF5] hover:border-sky-300'
                                  }`}
                                >
                                  <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                                      isSelected
                                        ? 'bg-[#0284C7] text-white'
                                        : 'bg-[#F8FBFF] border border-[#DCEAF5] text-[#64748B]'
                                    }`}
                                  >
                                    {letter}
                                  </div>
                                  <input
                                    type="text"
                                    value={opt}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => {
                                      const newOpts = [...q.options] as [string, string, string, string];
                                      newOpts[optIdx] = e.target.value;
                                      handleUpdateDraftQuestion(idx, { options: newOpts });
                                    }}
                                    className="flex-1 bg-transparent text-xs text-[#0F172A] outline-none"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB: MANUAL & BATCH QUESTION ENTRY ======================= */}
        {activeTab === 'manual' && (
          <div className="space-y-6">
            {/* Top Bar: Test Bank & Week Selection */}
            <div className="p-6 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                    METHOD 2 · MANUAL & BATCH QUESTION CREATION
                  </div>
                  <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                    Question Bank Authoring
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNewBankModal(true)}
                    className="px-4 py-2 rounded-xl bg-white border border-[#38BDF8] text-[#0284C7] hover:bg-sky-50 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Test Bank</span>
                  </button>
                </div>
              </div>

              {/* Course & Week Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-[#DCEAF5]">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">
                    Target Test Bank
                  </label>
                  <select
                    value={manualCourseId}
                    onChange={(e) => {
                      setManualCourseId(e.target.value);
                      refreshManualQuestions(e.target.value, manualWeek);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs font-semibold text-[#0F172A] outline-none focus:border-[#38BDF8]"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code} · {c.name} ({c.status.toUpperCase()})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 lg:col-span-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">
                      Active Week / Module
                    </label>
                    <span className="text-[11px] font-mono text-[#0284C7]">
                      {manualCourseQuestions.length} Questions in Week {manualWeek}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((wk) => {
                      const isSelected = manualWeek === wk;
                      return (
                        <button
                          key={wk}
                          type="button"
                          onClick={() => {
                            setManualWeek(wk);
                            refreshManualQuestions(manualCourseId, wk);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                            isSelected
                              ? 'bg-[#0284C7] text-white shadow-sm'
                              : 'bg-[#F8FBFF] text-[#64748B] hover:text-[#0F172A] border border-[#DCEAF5]'
                          }`}
                        >
                          Week {wk}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mode Switcher */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#DCEAF5]">
                <button
                  type="button"
                  onClick={() => setManualMode('single')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    manualMode === 'single'
                      ? 'bg-[#0284C7] text-white shadow-sm'
                      : 'bg-[#F8FBFF] text-[#64748B] hover:text-[#0F172A] border border-[#DCEAF5]'
                  }`}
                >
                  Single Question Entry
                </button>
                <button
                  type="button"
                  onClick={() => setManualMode('batch')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    manualMode === 'batch'
                      ? 'bg-[#0284C7] text-white shadow-sm'
                      : 'bg-[#F8FBFF] text-[#64748B] hover:text-[#0F172A] border border-[#DCEAF5]'
                  }`}
                >
                  Batch Question Entry (Paste)
                </button>
              </div>
            </div>

            {/* Mode 1: Single Question Entry Form */}
            {manualMode === 'single' && (
              <div className="p-8 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm space-y-6">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                    WEEK {manualWeek} · ADD QUESTION
                  </div>
                  <h3 className="font-serif text-lg text-[#0F172A] uppercase tracking-tight mt-0.5">
                    Repeatable Question Editor
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">
                      Question Text
                    </label>
                    <textarea
                      rows={3}
                      value={singleQText}
                      onChange={(e) => setSingleQText(e.target.value)}
                      placeholder="Enter question text exactly as desired..."
                      className="w-full p-3.5 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-sm text-[#0F172A] font-medium outline-none focus:border-[#38BDF8] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Option A', val: singleOptA, set: setSingleOptA, idx: 0 },
                      { label: 'Option B', val: singleOptB, set: setSingleOptB, idx: 1 },
                      { label: 'Option C', val: singleOptC, set: setSingleOptC, idx: 2 },
                      { label: 'Option D', val: singleOptD, set: setSingleOptD, idx: 3 },
                    ].map((opt) => (
                      <div key={opt.label} className="space-y-1.5">
                        <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">
                          {opt.label}
                        </label>
                        <input
                          type="text"
                          value={opt.val}
                          onChange={(e) => opt.set(e.target.value)}
                          placeholder={`Enter ${opt.label.toLowerCase()} text`}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#38BDF8]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Correct Answer Selection */}
                  <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider block">
                        Correct Answer (Authoritative)
                      </span>
                      <span className="text-[11px] text-[#64748B] font-mono">
                        Select the exact verified answer for this question
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3].map((optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx);
                        const isSelected = singleCorrectIndex === optIdx;
                        return (
                          <button
                            key={letter}
                            type="button"
                            onClick={() => setSingleCorrectIndex(optIdx)}
                            className={`w-9 h-9 rounded-xl font-mono font-bold text-xs transition-all ${
                              isSelected
                                ? 'bg-[#0284C7] text-white shadow-md scale-105'
                                : 'bg-white border border-[#DCEAF5] text-[#64748B] hover:border-sky-300'
                            }`}
                          >
                            {letter}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleAddSingleQuestion}
                      className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Question to Week {manualWeek}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: Batch Question Entry Form */}
            {manualMode === 'batch' && (
              <div className="p-8 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm space-y-6">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                    WEEK {manualWeek} · BATCH TEXT IMPORT
                  </div>
                  <h3 className="font-serif text-lg text-[#0F172A] uppercase tracking-tight mt-0.5">
                    Paste Structured Questions
                  </h3>
                  <p className="text-xs text-[#64748B] font-mono mt-1">
                    Paste multiple questions using standard Q1, Options A-D, and Answer: X format
                  </p>
                </div>

                <div className="space-y-4">
                  <textarea
                    rows={12}
                    value={batchInputText}
                    onChange={(e) => setBatchInputText(e.target.value)}
                    placeholder={`Q1. Which sensor can detect gases like LPG, CH4, and CO?\nA. DHT22\nB. MQ-5\nC. HC-SR04\nD. PIR\nAnswer: B\n\nQ2. Which modulation scheme does Zigbee use for the 2.4 GHz band?\nA. BPSK\nB. QPSK\nC. OQPSK\nD. FSK\nAnswer: C`}
                    className="w-full p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs font-mono text-[#0F172A] outline-none focus:border-[#38BDF8] resize-none"
                  />

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleParseBatch}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      Parse Questions
                    </button>

                    {parsedBatchPreview.length > 0 && (
                      <button
                        type="button"
                        onClick={handleSaveBatch}
                        className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save {parsedBatchPreview.length} Questions into Week {manualWeek}</span>
                      </button>
                    )}
                  </div>

                  {/* Parsed Preview Table */}
                  {parsedBatchPreview.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#EFF8FF] border border-[#DCEAF5] space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] font-mono">
                        Parsed Preview ({parsedBatchPreview.length} questions detected)
                      </span>
                      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                        {parsedBatchPreview.map((p, idx) => (
                          <div key={p.id} className="p-3 rounded-xl bg-white border border-[#DCEAF5] text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#0F172A]">Q{idx + 1}. {p.questionText}</span>
                              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                                Ans: {p.correctAnswerIndex !== null ? String.fromCharCode(65 + p.correctAnswerIndex) : 'None'}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-[11px] text-[#64748B]">
                              <span>A: {p.options[0]}</span>
                              <span>B: {p.options[1]}</span>
                              <span>C: {p.options[2]}</span>
                              <span>D: {p.options[3]}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Current Test Bank Questions List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
                <div>
                  <h3 className="font-serif text-lg text-[#0F172A] uppercase tracking-tight">
                    Questions in Week {manualWeek} ({manualCourseQuestions.length})
                  </h3>
                  <p className="text-xs text-[#64748B] font-mono">
                    ALL QUESTIONS SAVED IN THIS MODULE ARE IMMEDIATELY ACCESSIBLE
                  </p>
                </div>
              </div>

              {manualCourseQuestions.length === 0 ? (
                <div className="p-12 text-center rounded-3xl bg-white border border-[#DCEAF5] text-[#64748B] text-xs font-mono">
                  No questions added to Week {manualWeek} yet. Use Single or Batch entry above to add questions.
                </div>
              ) : (
                <div className="space-y-3">
                  {manualCourseQuestions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="p-5 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-xs font-mono font-bold text-[#0284C7] flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-[10px] font-mono text-[#0284C7] font-semibold">
                            WEEK {q.weekNumber}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700 font-semibold">
                            Correct: {q.correctAnswerIndex !== null ? String.fromCharCode(65 + q.correctAnswerIndex) : 'None'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteManualQuestion(q.id)}
                          className="p-1.5 rounded-lg text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete Question"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-sm font-medium text-[#0F172A]">
                        {q.questionText}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isCorrect = q.correctAnswerIndex === optIdx;
                          const letter = String.fromCharCode(65 + optIdx);
                          return (
                            <div
                              key={optIdx}
                              onClick={() => handleUpdateManualQuestion(q.id, { correctAnswerIndex: optIdx, answerSource: 'Manually Verified', isApproved: true })}
                              className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition-all ${
                                isCorrect
                                  ? 'bg-[#EFF8FF] border-[#0284C7] text-[#0284C7] font-semibold shadow-sm'
                                  : 'bg-white border-[#DCEAF5] text-[#64748B] hover:border-sky-300'
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                                isCorrect ? 'bg-[#0284C7] text-white' : 'bg-[#F8FBFF] border border-[#DCEAF5]'
                              }`}>
                                {letter}
                              </span>
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal: Create New Test Bank */}
            {showNewBankModal && (
              <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="max-w-md w-full p-6 rounded-3xl bg-white border border-[#DCEAF5] shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg text-[#0F172A] uppercase tracking-tight font-bold">
                      Create New Test Bank
                    </h3>
                    <button onClick={() => setShowNewBankModal(false)} className="text-slate-400 hover:text-slate-700">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">Title / Name</label>
                      <input
                        type="text"
                        value={newBankName}
                        onChange={(e) => setNewBankName(e.target.value)}
                        placeholder="e.g. Advanced Embedded Systems"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">Course Code (Optional)</label>
                      <input
                        type="text"
                        value={newBankCode}
                        onChange={(e) => setNewBankCode(e.target.value)}
                        placeholder="e.g. CS-804"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#38BDF8]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono font-semibold uppercase text-[#64748B]">Description</label>
                      <textarea
                        rows={2}
                        value={newBankDesc}
                        onChange={(e) => setNewBankDesc(e.target.value)}
                        placeholder="Brief overview of modules and topics..."
                        className="w-full p-3 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#38BDF8] resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-[#DCEAF5]">
                    <button
                      type="button"
                      onClick={() => setShowNewBankModal(false)}
                      className="px-4 py-2 rounded-xl border border-[#DCEAF5] text-xs font-semibold uppercase text-[#64748B]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleCreateNewBank}
                      className="px-5 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-bold uppercase shadow-sm"
                    >
                      Create Bank
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB 3: RECENT ATTEMPTS (COMPACT MONITOR) ======================= */}
        {activeTab === 'attempts' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCEAF5]">
              <div>
                <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                  STUDENT ACTIVITY
                </div>
                <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                  Recent Test Attempts
                </h2>
                <p className="text-xs text-[#64748B] font-mono mt-1">
                  COMPACT MONITORING OF STUDENT PARTICIPATION AND RESULTS
                </p>
              </div>
              <span className="text-xs font-mono text-[#64748B]">
                {allAttempts.length} Completed Simulations
              </span>
            </div>

            <div className="space-y-3">
              {allAttempts.map((att) => {
                const dateFormatted = new Date(att.completedAt).toLocaleString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                });

                return (
                  <div
                    key={att.id}
                    className="p-5 rounded-2xl bg-white border border-[#DCEAF5] shadow-[0_2px_12px_rgba(2,132,199,0.03)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#0F172A]">
                          {att.studentName || 'Student'}
                        </span>
                        <span className="text-xs text-[#64748B]">·</span>
                        <span className="text-xs font-medium text-[#0284C7]">
                          {att.courseName}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] mt-1 font-mono">
                        {dateFormatted}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 self-end sm:self-center">
                      <div className="text-right">
                        <div className="text-base font-bold font-mono text-[#0F172A]">
                          {att.score} / {att.totalQuestions}
                        </div>
                        <div className="text-[11px] font-mono text-[#64748B]">
                          <span className="text-emerald-600 font-semibold">{att.correctCount} Correct</span>
                          {' · '}
                          <span className="text-rose-600 font-semibold">{att.wrongCount} Wrong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {allAttempts.length === 0 && (
                <div className="p-12 text-center rounded-3xl bg-white border border-[#DCEAF5] text-[#64748B] text-xs font-mono">
                  No student test attempts recorded yet.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================== TAB: ADMIN MANAGEMENT ===================== */}
        {activeTab === 'admins' && (
          <div className="space-y-6">
            {/* Top Stats & Actions Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_4px_24px_rgba(2,132,199,0.04)]">
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0284C7]" />
                  <h2 className="font-serif text-xl text-[#0F172A] font-bold">
                    Admin Management
                  </h2>
                </div>
                <p className="text-xs text-[#64748B] mt-1 font-mono">
                  AUTHORITATIVE ADMINISTRATOR ACCOUNTS &amp; ACCESS CONTROL ({adminUsers.length} ADMINISTRATORS)
                </p>
              </div>

              <button
                onClick={() => {
                  setShowCreateAdminModal(true);
                  setErrorMessage(null);
                }}
                className="px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Create Admin</span>
              </button>
            </div>

            {/* Administrators Table */}
            <div className="rounded-3xl bg-white border border-[#DCEAF5] overflow-hidden shadow-[0_4px_24px_rgba(2,132,199,0.04)]">
              <div className="px-6 py-4 border-b border-[#DCEAF5] bg-[#EFF8FF]/40 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-mono">
                  Registered Administrators
                </span>
                <span className="text-xs text-[#64748B] font-mono">
                  {adminUsers.filter((u) => u.status !== 'deactivated').length} Active
                </span>
              </div>

              <div className="divide-y divide-[#DCEAF5]">
                {adminUsers.map((admin) => {
                  const isCurrent = admin.id === currentUser.id;
                  const isDeactivated = admin.status === 'deactivated';

                  return (
                    <div
                      key={admin.id}
                      className={`p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors ${
                        isDeactivated ? 'bg-slate-50/70 opacity-70' : 'hover:bg-[#F8FBFF]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#0F172A]">
                            {admin.name}
                          </span>
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-sky-100 text-[#0284C7] text-[10px] font-bold font-mono">
                              YOU
                            </span>
                          )}
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase ${
                              isDeactivated
                                ? 'bg-rose-100 text-rose-700'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {isDeactivated ? 'Deactivated' : 'Active'}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                          <span>{admin.email || 'No email assigned'}</span>
                          <span>·</span>
                          <span>Created {new Date(admin.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => {
                            setEditingAdmin(admin);
                            setEditAdminName(admin.name);
                            setEditAdminEmail(admin.email || '');
                            setErrorMessage(null);
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[#DCEAF5] hover:border-[#38BDF8] hover:bg-[#EFF8FF] text-[#0F172A] text-xs font-medium transition-all flex items-center gap-1.5"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => {
                            setResettingAdmin(admin);
                            setResetAdminNewPass('');
                            setResetAdminConfirmPass('');
                            setErrorMessage(null);
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[#DCEAF5] hover:border-[#38BDF8] hover:bg-[#EFF8FF] text-[#0F172A] text-xs font-medium transition-all flex items-center gap-1.5"
                        >
                          <Key className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>Reset Password</span>
                        </button>
                        {!isCurrent && (
                          <button
                            onClick={() => handleToggleAdminStatus(admin)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                              isDeactivated
                                ? 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                                : 'border-rose-200 text-rose-600 hover:bg-rose-50'
                            }`}
                          >
                            {isDeactivated ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Reactivate</span>
                              </>
                            ) : (
                              <>
                                <UserX className="w-3.5 h-3.5" />
                                <span>Deactivate</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {adminUsers.length === 0 && (
                  <div className="p-12 text-center text-[#64748B] text-xs font-mono">
                    No administrator accounts registered yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal: Create Admin */}
        {showCreateAdminModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#DCEAF5] shadow-2xl overflow-hidden p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCEAF5]">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">Create Administrator</h3>
                </div>
                <button
                  onClick={() => setShowCreateAdminModal(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateAdminSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={newAdminName}
                    onChange={(e) => setNewAdminName(e.target.value)}
                    placeholder="e.g. Dr. Jane Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    placeholder="admin@institution.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Initial Password
                  </label>
                  <input
                    type="password"
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={newAdminConfirm}
                    onChange={(e) => setNewAdminConfirm(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCreateAdminModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminActionLoading}
                    className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-50"
                  >
                    {adminActionLoading ? 'Creating...' : 'Create Admin'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Edit Admin Profile */}
        {editingAdmin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#DCEAF5] shadow-2xl overflow-hidden p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCEAF5]">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">Edit Admin Profile</h3>
                </div>
                <button
                  onClick={() => setEditingAdmin(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleEditAdminSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Administrator Name
                  </label>
                  <input
                    type="text"
                    value={editAdminName}
                    onChange={(e) => setEditAdminName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={editAdminEmail}
                    onChange={(e) => setEditAdminEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingAdmin(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminActionLoading}
                    className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-50"
                  >
                    {adminActionLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Reset Password */}
        {resettingAdmin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/40 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#DCEAF5] shadow-2xl overflow-hidden p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCEAF5]">
                <div className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                    Reset Password for {resettingAdmin.name}
                  </h3>
                </div>
                <button
                  onClick={() => setResettingAdmin(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-[#64748B]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleResetPasswordSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    New Password (min 6 chars)
                  </label>
                  <input
                    type="password"
                    value={resetAdminNewPass}
                    onChange={(e) => setResetAdminNewPass(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={resetAdminConfirmPass}
                    onChange={(e) => setResetAdminConfirmPass(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEAF5] text-xs focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setResettingAdmin(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminActionLoading}
                    className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-50"
                  >
                    {adminActionLoading ? 'Resetting...' : 'Update Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
