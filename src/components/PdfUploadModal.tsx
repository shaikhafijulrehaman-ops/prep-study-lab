import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, Check, Trash2, ArrowRight, Play } from 'lucide-react';
import { Course, ExtractedQuestionDraft, Question } from '../types';
import { extractTextFromPdf, parseMcqsFromText } from '../lib/pdfParser';
import { saveCourse, saveQuestions } from '../lib/storage';

interface PdfUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionsSaved: (count: number, courseId: string) => void;
  onStartTestDirectly?: (courseId: string) => void;
}

export const PdfUploadModal: React.FC<PdfUploadModalProps> = ({
  isOpen,
  onClose,
  onQuestionsSaved,
  onStartTestDirectly,
}) => {
  const [step, setStep] = useState<'upload' | 'detected' | 'review'>('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // File information
  const [fileName, setFileName] = useState('');
  const [fileSizeFormatted, setFileSizeFormatted] = useState('');

  // Extracted questions
  const [draftQuestions, setDraftQuestions] = useState<ExtractedQuestionDraft[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [createdCourseId, setCreatedCourseId] = useState<string>('');

  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const verifyIsPdf = async (file: File): Promise<boolean> => {
    // 1. Check filename extension case-insensitively
    const hasPdfExtension = /\.pdf$/i.test(file.name);

    // 2. Check MIME type reported by browser
    const hasPdfMime =
      file.type === 'application/pdf' ||
      file.type === 'application/x-pdf' ||
      file.type === 'application/acrobat' ||
      file.type === 'applications/vnd.pdf';

    // 3. Inspect the first bytes of the file for the PDF magic header '%PDF-'
    let hasMagicHeader = false;
    try {
      const slice = file.slice(0, 1024);
      const buffer = await slice.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let headerStr = '';
      for (let i = 0; i < bytes.length; i++) {
        headerStr += String.fromCharCode(bytes[i]);
      }
      hasMagicHeader = headerStr.includes('%PDF-');
    } catch {
      // Ignore slice read error
    }

    // Accept if magic header is present (even if extension or mime is missing or incorrect),
    // or if extension or mime indicates PDF
    return hasMagicHeader || hasPdfExtension || hasPdfMime;
  };

  const processFile = async (file: File) => {
    const isValidPdf = await verifyIsPdf(file);
    if (!isValidPdf) {
      setErrorMessage('Please select a valid PDF file.');
      return;
    }

    setFileName(file.name);
    setFileSizeFormatted(formatBytes(file.size));
    setIsProcessing(true);
    setErrorMessage(null);
    setStep('detected');

    try {
      const buffer = await file.arrayBuffer();

      // Check header from buffer
      let headerStr = '';
      const sample = new Uint8Array(buffer.slice(0, 1024));
      for (let i = 0; i < sample.length; i++) {
        headerStr += String.fromCharCode(sample[i]);
      }

      if (
        !headerStr.includes('%PDF-') &&
        !/\.pdf$/i.test(file.name) &&
        file.type !== 'application/pdf'
      ) {
        setErrorMessage('Please select a valid PDF file.');
        setIsProcessing(false);
        setStep('upload');
        return;
      }

      const { text } = await extractTextFromPdf(buffer);
      const questions = parseMcqsFromText(text, 1);

      if (questions.length === 0) {
        setErrorMessage(
          'No multiple-choice questions could be found in this document. Please verify the file contains questions.'
        );
        setIsProcessing(false);
        return;
      }

      // Generate a clean course name from filename
      const baseName = file.name
        .replace(/\.pdf$/i, '')
        .replace(/[-_]/g, ' ')
        .trim();
      const cleanTitle = baseName.charAt(0).toUpperCase() + baseName.slice(1);
      const generatedCode = 'DOC-' + Math.random().toString(36).substring(2, 6).toUpperCase();

      const autoCourse: Course = {
        id: `course-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        code: generatedCode,
        name: cleanTitle,
        totalQuestions: questions.length,
        weeks: [1],
      };

      saveCourse(autoCourse);
      setCreatedCourseId(autoCourse.id);

      setDraftQuestions(questions);
      setActiveQuestionIndex(0);
      setIsProcessing(false);
    } catch (err) {
      console.error('PDF error:', err);
      setErrorMessage('Please select a valid PDF file.');
      setIsProcessing(false);
      setStep('upload');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const updateDraftQuestion = (index: number, updates: Partial<ExtractedQuestionDraft>) => {
    setDraftQuestions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], ...updates };
      return updated;
    });
  };

  const updateDraftOption = (qIdx: number, optIdx: number, value: string) => {
    setDraftQuestions((prev) => {
      const updated = [...prev];
      const target = updated[qIdx];
      const newOptions = [...target.options] as [string, string, string, string];
      newOptions[optIdx] = value;
      updated[qIdx] = { ...target, options: newOptions };
      return updated;
    });
  };

  const removeDraftQuestion = (index: number) => {
    setDraftQuestions((prev) => {
      const filtered = prev.filter((_, i) => i !== index);
      if (activeQuestionIndex >= filtered.length && filtered.length > 0) {
        setActiveQuestionIndex(filtered.length - 1);
      }
      return filtered;
    });
  };

  const saveAllAndFinish = (launchTest = false) => {
    const courseId = createdCourseId || `course-auto-${Date.now()}`;

    const finalQuestions: Question[] = draftQuestions.map((draft, idx) => ({
      id: `q-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
      courseId,
      weekNumber: 1,
      sourcePdfName: fileName || 'Question_Paper.pdf',
      questionText: draft.questionText.trim(),
      options: draft.options.map((opt) => opt.trim()) as [string, string, string, string],
      correctAnswerIndex: draft.correctAnswerIndex,
      explanation: draft.explanation?.trim() || undefined,
      createdAt: new Date().toISOString(),
    }));

    saveQuestions(finalQuestions);
    onQuestionsSaved(finalQuestions.length, courseId);

    if (launchTest && onStartTestDirectly) {
      onStartTestDirectly(courseId);
    }

    handleClose();
  };

  const handleClose = () => {
    setStep('upload');
    setDraftQuestions([]);
    setFileName('');
    setFileSizeFormatted('');
    setErrorMessage(null);
    setIsProcessing(false);
    onClose();
  };

  const currentDraft = draftQuestions[activeQuestionIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none font-sans">
      {/* Dim Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 w-full rounded-2xl bg-white border border-[#DCEAF5] shadow-[0_24px_50px_rgba(2,132,199,0.15)] overflow-hidden flex flex-col ${
          step === 'review' ? 'max-w-4xl max-h-[90vh]' : 'max-w-lg'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#DCEAF5] bg-[#F8FBFF]">
          <div>
            <h2 className="text-xs font-semibold tracking-[0.24em] text-[#0F172A] uppercase font-sans">
              {step === 'review' ? 'Review Questions' : 'Upload PDF'}
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5 font-light">
              {step === 'review'
                ? `Verify or edit the questions detected from ${fileName}`
                : 'Upload a question paper or study PDF to create a practice test.'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs leading-relaxed">
              {errorMessage}
            </div>
          )}

          {/* STEP 1: Upload Dropzone */}
          {step === 'upload' && (
            <div className="space-y-4">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`group border border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                  isDragOver
                    ? 'border-[#38BDF8] bg-[#EFF8FF]'
                    : 'border-[#DCEAF5] hover:border-sky-300 bg-[#F8FBFF] hover:bg-[#EFF8FF]/40'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf,application/octet-stream,*/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="p-3.5 rounded-2xl bg-white border border-[#DCEAF5] text-[#0284C7] mb-4 group-hover:scale-105 group-hover:bg-[#EFF8FF] transition-all shadow-sm">
                  <Upload className="w-6 h-6" />
                </div>

                <div className="text-sm font-semibold tracking-wider text-[#0F172A] uppercase mb-1">
                  Drop your PDF here
                </div>
                <div className="text-xs text-[#64748B] mb-5">or browse your files</div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#0369a1] transition-colors shadow-sm"
                >
                  Choose PDF
                </button>
              </div>

              <div className="text-center text-[11px] text-[#64748B] tracking-wider uppercase">
                PDF files only
              </div>
            </div>
          )}

          {/* STEP 2: Processing / Questions Detected */}
          {step === 'detected' && (
            <div className="py-6 space-y-6 text-center">
              <div className="p-4 rounded-2xl bg-[#EFF8FF] border border-[#DCEAF5] max-w-sm mx-auto space-y-1">
                <div className="text-sm font-medium text-[#0F172A] truncate">{fileName}</div>
                <div className="text-xs font-mono text-[#64748B]">{fileSizeFormatted}</div>
              </div>

              {isProcessing ? (
                <div className="space-y-2">
                  <div className="inline-block w-4 h-4 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
                  <div className="text-xs text-[#64748B] tracking-wide">Reading questions...</div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="text-2xl font-serif text-[#0F172A] font-light">
                      {draftQuestions.length} questions found
                    </div>
                    <div className="text-xs text-[#64748B]">
                      Ready to review or launch as a mock test
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setStep('review')}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#475569] text-xs font-semibold tracking-wider uppercase border border-[#DCEAF5] hover:bg-[#EFF8FF] hover:text-[#0F172A] transition-all shadow-sm"
                    >
                      Review Questions
                    </button>
                    <button
                      onClick={() => saveAllAndFinish(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0284C7] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
                    >
                      <span>Start Mock Test</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Review Questions Screen */}
          {step === 'review' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question list on left */}
              <div className="lg:col-span-4 space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
                <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase pb-2 border-b border-[#DCEAF5]">
                  {draftQuestions.length} Questions
                </div>

                {draftQuestions.map((q, idx) => {
                  const needsReview = q.needsReview || !q.hasExplicitAnswer;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setActiveQuestionIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl text-xs transition-all border flex items-center justify-between gap-2 ${
                        activeQuestionIndex === idx
                          ? 'bg-[#EFF8FF] border-[#38BDF8] text-[#0284C7] font-medium'
                          : 'bg-white border-[#DCEAF5] text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FBFF]'
                      }`}
                    >
                      <span className="truncate flex items-center gap-1.5">
                        <span className="font-mono text-[#0284C7] mr-1">{idx + 1}.</span>
                        <span className="truncate">{q.questionText || 'Empty Question'}</span>
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        {needsReview && (
                          <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                            Review
                          </span>
                        )}
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-[#64748B]">
                          {String.fromCharCode(65 + q.correctAnswerIndex)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active question editor on right */}
              {currentDraft && (
                <div className="lg:col-span-8 space-y-4 bg-[#F8FBFF] p-5 rounded-2xl border border-[#DCEAF5]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#0284C7] font-semibold">
                        Question {activeQuestionIndex + 1} of {draftQuestions.length}
                      </span>
                      {(currentDraft.needsReview || !currentDraft.hasExplicitAnswer) && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                          {currentDraft.reviewReason || 'Needs Answer Verification'}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeDraftQuestion(activeQuestionIndex)}
                      className="text-rose-600 hover:text-rose-700 text-xs flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>

                  {/* Question text */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-1.5">
                      Question
                    </label>
                    <textarea
                      rows={3}
                      value={currentDraft.questionText}
                      onChange={(e) =>
                        updateDraftQuestion(activeQuestionIndex, { questionText: e.target.value })
                      }
                      className="w-full p-3 rounded-xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] leading-relaxed font-sans shadow-sm"
                    />
                  </div>

                  {/* 4 Options */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B]">
                      Options (Click letter to mark correct answer)
                    </label>
                    {currentDraft.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isCorrect = currentDraft.correctAnswerIndex === optIdx;

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-2.5 p-2 rounded-xl border transition-all ${
                            isCorrect
                              ? 'bg-[#EFF8FF] border-[#38BDF8]'
                              : 'bg-white border-[#DCEAF5]'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              updateDraftQuestion(activeQuestionIndex, {
                                correctAnswerIndex: optIdx,
                                hasExplicitAnswer: true,
                                needsReview: false,
                              })
                            }
                            className={`w-6 h-6 rounded-lg font-mono text-xs flex items-center justify-center font-semibold transition-all ${
                              isCorrect
                                ? 'bg-[#0284C7] text-white shadow-sm'
                                : 'bg-slate-100 text-[#64748B] hover:bg-slate-200'
                            }`}
                          >
                            {letter}
                          </button>
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) =>
                              updateDraftOption(activeQuestionIndex, optIdx, e.target.value)
                            }
                            className="flex-1 bg-transparent text-xs text-[#0F172A] outline-none"
                            placeholder={`Option ${letter}`}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation if any */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-1">
                      Explanation (Optional)
                    </label>
                    <input
                      type="text"
                      value={currentDraft.explanation || ''}
                      onChange={(e) =>
                        updateDraftQuestion(activeQuestionIndex, {
                          explanation: e.target.value,
                        })
                      }
                      placeholder="Notes or solution explanation"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] placeholder:text-[#94A3B8] shadow-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer (Step 3: Review actions) */}
        {step === 'review' && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#DCEAF5] bg-[#F8FBFF]">
            <button
              onClick={() => setStep('upload')}
              className="text-xs text-[#64748B] hover:text-[#0F172A] uppercase tracking-wider"
            >
              Upload Different PDF
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => saveAllAndFinish(false)}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#475569] text-xs font-semibold tracking-wider uppercase border border-[#DCEAF5] transition-all shadow-sm"
              >
                Save Questions
              </button>
              <button
                onClick={() => saveAllAndFinish(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
              >
                <span>Start Mock Test</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
