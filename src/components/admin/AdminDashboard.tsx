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
  ExternalLink,
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
} from 'lucide-react';
import { Course, Question, ExtractedQuestionDraft, User, AnswerSource, MockAttempt } from '../../types';
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
} from '../../lib/storage';
import { extractTextFromPdf, parseMcqsFromText, parseAnswerKeySource, applyAnswerKeyMapping } from '../../lib/pdfParser';

interface AdminDashboardProps {
  currentUser: User;
  onLogout: () => void;
  onSwitchToStudentView: () => void;
}

type AdminTab = 'tests' | 'upload' | 'attempts';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onLogout,
  onSwitchToStudentView,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('tests');
  const [courses, setCourses] = useState<Course[]>(getCourses(false));
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Answer Key input state
  const [answerKeyInputType, setAnswerKeyInputType] = useState<'text' | 'document'>('text');
  const [answerKeyText, setAnswerKeyText] = useState('');
  const [isProcessingAnswerKey, setIsProcessingAnswerKey] = useState(false);
  const [mappedCount, setMappedCount] = useState<number>(0);

  // Active question under edit during review
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);

  // Attempts monitor
  const [allAttempts, setAllAttempts] = useState<MockAttempt[]>([]);

  useEffect(() => {
    if (activeTab === 'attempts') {
      setAllAttempts(getAllAttempts());
    }
  }, [activeTab]);

  const pdfInputRef = useRef<HTMLInputElement>(null);
  const answerKeyDocRef = useRef<HTMLInputElement>(null);

  // ----------------- PDF Upload & Parsing -----------------
  const handlePdfSelected = async (file: File) => {
    if (!file) return;
    setIsProcessingPdf(true);
    setErrorMessage(null);
    setUploadedPdfName(file.name);

    try {
      const buffer = await file.arrayBuffer();
      const { text, isScannedOrImagePdf } = await extractTextFromPdf(buffer);

      if (!text || text.trim().length < 50) {
        if (isScannedOrImagePdf) {
          setErrorMessage('The uploaded PDF appears to be a scanned image without machine-readable text.');
        } else {
          setErrorMessage('Could not extract text from this PDF file. Please ensure it contains readable text.');
        }
        setIsProcessingPdf(false);
        return;
      }

      // Automatically generate course code and title from filename without pestering admin
      const cleanTitle = file.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
      const autoCode = `TEST-${Math.floor(100 + Math.random() * 900)}`;

      const newCourse: Course = {
        id: `course-${Date.now()}`,
        code: autoCode,
        name: cleanTitle,
        description: `Imported from ${file.name}`,
        status: 'draft',
        sourcePdfName: file.name,
        createdAt: new Date().toISOString(),
      };

      const extracted = parseMcqsFromText(text, 1);
      if (extracted.length === 0) {
        setErrorMessage('No multiple-choice questions with options were detected in this document.');
        setIsProcessingPdf(false);
        return;
      }

      setDraftQuestions(extracted);
      setWorkingCourse(newCourse);
      setUploadStep('answer_key');
      showToast(`Extracted ${extracted.length} questions. Now provide the authoritative answer key.`);
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to process question PDF.');
    } finally {
      setIsProcessingPdf(false);
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
  };

  // ----------------- Save & Publish -----------------
  const handleSaveAsDraft = () => {
    if (!workingCourse || draftQuestions.length === 0) return;

    saveCourse({
      ...workingCourse,
      totalQuestions: draftQuestions.length,
      status: 'draft',
    });

    const questionsToSave: Question[] = draftQuestions.map((dq, i) => ({
      id: `q-${workingCourse.id}-${i + 1}`,
      courseId: workingCourse.id,
      weekNumber: 1,
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
    showToast(`Saved "${workingCourse.name}" as Draft.`);
  };

  const handlePublishFromReview = () => {
    if (!workingCourse || draftQuestions.length === 0) return;

    // Strict validation gate: every question must have a verified answer and be approved
    const unverified = draftQuestions.filter((q) => q.correctAnswerIndex === null || !q.isApproved);
    if (unverified.length > 0) {
      setErrorMessage(
        `Some questions do not have verified answers. (${unverified.length} questions unverified or unapproved). Resolve before publishing.`
      );
      return;
    }

    // Save course as published
    saveCourse({
      ...workingCourse,
      totalQuestions: draftQuestions.length,
      status: 'published',
      publishedAt: new Date().toISOString(),
    });

    const questionsToSave: Question[] = draftQuestions.map((dq, i) => ({
      id: `q-${workingCourse.id}-${i + 1}`,
      courseId: workingCourse.id,
      weekNumber: 1,
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
    showToast(`Test "${workingCourse.name}" published successfully! Students can now access it.`);
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
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold tracking-tight text-[#0F172A] uppercase">
                Prep Study Lab
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#EFF8FF] border border-[#DCEAF5] text-[10px] font-mono text-[#0284C7] uppercase font-semibold">
                Administrator
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] font-mono">
              Signed in as {currentUser.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onSwitchToStudentView}
            className="px-4 py-2 rounded-full bg-white hover:bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Student View</span>
            <ExternalLink className="w-3.5 h-3.5" />
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
      <div className="bg-white border-b border-[#DCEAF5] px-6 py-2 flex items-center gap-2">
        <button
          onClick={() => setActiveTab('tests')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
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
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
            activeTab === 'upload'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Upload & Ingest Test</span>
        </button>
        <button
          onClick={() => setActiveTab('attempts')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
            activeTab === 'attempts'
              ? 'bg-[#0284C7] text-white shadow-sm'
              : 'text-[#64748B] hover:bg-[#EFF8FF] hover:text-[#0F172A]'
          }`}
        >
          Recent Attempts
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
                    {isProcessingPdf ? 'Extracting questions from PDF...' : 'Select or drop Question PDF here'}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 font-mono">
                    Course and week metadata are completely optional and automatically derived.
                  </p>
                </div>
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
                <div className="p-6 rounded-3xl bg-white border border-[#DCEAF5] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
                      STEP 3 OF 3 · ADMINISTRATOR REVIEW & APPROVAL
                    </div>
                    <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight mt-1">
                      {workingCourse?.name || 'Review Extracted Questions'}
                    </h2>
                    <div className="flex items-center gap-4 mt-2 text-xs font-mono text-[#64748B]">
                      <span>{draftQuestions.length} Questions</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">
                        {draftQuestions.filter((q) => q.isApproved).length} Approved
                      </span>
                      <span>·</span>
                      <span
                        className={
                          draftQuestions.some((q) => q.correctAnswerIndex === null)
                            ? 'text-rose-600 font-semibold'
                            : 'text-emerald-600 font-semibold'
                        }
                      >
                        {draftQuestions.filter((q) => q.correctAnswerIndex === null).length} Missing Answer
                      </span>
                    </div>
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

                {/* Questions List */}
                <div className="space-y-4">
                  {draftQuestions.map((q, idx) => {
                    const isMissingAnswer = q.correctAnswerIndex === null;

                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-3xl bg-white border transition-all ${
                          q.isApproved
                            ? 'border-emerald-200 shadow-sm'
                            : isMissingAnswer
                            ? 'border-rose-300 shadow-[0_0_0_1px_rgba(244,63,94,0.1)]'
                            : 'border-[#DCEAF5]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-xs font-mono font-bold text-[#0284C7] flex items-center justify-center">
                              {q.originalQuestionNumber || idx + 1}
                            </span>
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
                            {isMissingAnswer && (
                              <span className="text-rose-600 font-mono text-[10px]">
                                ANSWER NOT PROVIDED
                              </span>
                            )}
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
      </main>
    </div>
  );
};
