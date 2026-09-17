import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Send,
  Grid,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { ActiveTestSession, saveActiveSession, finalizeAndSaveAttempt } from '../lib/storage';
import { MockAttempt, User } from '../types';

interface MockTestViewProps {
  session: ActiveTestSession;
  currentUser?: User | null;
  onFinishTest: (attempt: MockAttempt) => void;
  onExitTest: () => void;
}

export const MockTestView: React.FC<MockTestViewProps> = ({
  session: initialSession,
  currentUser,
  onFinishTest,
  onExitTest,
}) => {
  const [session, setSession] = useState<ActiveTestSession>(initialSession);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState(false);

  // Sync internal session when parent provides a new session instance
  useEffect(() => {
    setSession(initialSession);
  }, [initialSession]);

  // Timer reference
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isExam = session.config.mode === 'exam';
  const currentIndex = session.currentIndex;
  const currentItem = session.items[currentIndex];
  const totalQuestions = session.items.length;

  // Auto-save session state whenever session updates
  useEffect(() => {
    saveActiveSession(session, currentUser?.id);
  }, [session, currentUser]);

  // Main countdown / elapsed timer loop
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSession((prev) => {
        const nextElapsed = prev.secondsElapsed + 1;
        let nextRemaining = prev.secondsRemaining;

        // In timed exam mode
        if (prev.secondsRemaining !== null) {
          nextRemaining = prev.secondsRemaining - 1;
          if (nextRemaining <= 0) {
            // Auto submit when timer reaches zero!
            clearInterval(timerRef.current!);
            handleAutoSubmit({
              ...prev,
              secondsRemaining: 0,
              secondsElapsed: nextElapsed,
            });
            return { ...prev, secondsRemaining: 0, secondsElapsed: nextElapsed };
          }
        }

        // Increment time spent on active question item
        const updatedItems = [...prev.items];
        if (updatedItems[prev.currentIndex]) {
          updatedItems[prev.currentIndex] = {
            ...updatedItems[prev.currentIndex],
            timeSpentSeconds: updatedItems[prev.currentIndex].timeSpentSeconds + 1,
          };
        }

        return {
          ...prev,
          secondsElapsed: nextElapsed,
          secondsRemaining: nextRemaining,
          items: updatedItems,
        };
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleAutoSubmit = async (finalState: ActiveTestSession) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const result = await finalizeAndSaveAttempt(finalState, currentUser?.id);
    onFinishTest(result);
  };

  const handleManualSubmit = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsSubmitConfirmOpen(false);
    const result = await finalizeAndSaveAttempt(session, currentUser?.id);
    onFinishTest(result);
  };

  // Select option for current question
  const handleSelectOption = (optIndex: number) => {
    setSession((prev) => {
      const items = [...prev.items];
      const target = items[prev.currentIndex];

      // In practice mode, if already answered, allow re-selection or toggle
      const newSelection = target.selectedOptionIndex === optIndex && !isExam ? null : optIndex;

      items[prev.currentIndex] = {
        ...target,
        selectedOptionIndex: newSelection,
      };

      return {
        ...prev,
        items,
      };
    });
  };

  // Toggle Mark for Review
  const handleToggleReview = () => {
    setSession((prev) => {
      const items = [...prev.items];
      const target = items[prev.currentIndex];
      items[prev.currentIndex] = {
        ...target,
        isMarkedForReview: !target.isMarkedForReview,
      };
      return {
        ...prev,
        items,
      };
    });
  };

  const handleNavigate = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setSession((prev) => ({
        ...prev,
        currentIndex: index,
      }));
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSubmitConfirmOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'n') {
        handleNavigate(currentIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        handleNavigate(currentIndex - 1);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        handleSelectOption(parseInt(e.key, 10) - 1);
      } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
        const charMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
        handleSelectOption(charMap[e.key.toLowerCase()]);
      } else if (e.key.toLowerCase() === 'm') {
        handleToggleReview();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isSubmitConfirmOpen]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    const h = Math.floor(m / 60);
    if (h > 0) {
      const remainM = m % 60;
      return `${h}:${remainM < 10 ? '0' : ''}${remainM}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Stats for palette
  const answeredCount = session.items.filter((i) => i.selectedOptionIndex !== null).length;
  const markedCount = session.items.filter((i) => i.isMarkedForReview).length;
  const unansweredCount = totalQuestions - answeredCount;

  if (!currentItem || totalQuestions === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FBFF] text-[#0F172A] p-6 text-center">
        <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-[#DCEAF5] space-y-5 bg-white/90 shadow-[0_12px_32px_-8px_rgba(2,132,199,0.1)]">
          <div className="inline-flex p-3 rounded-2xl bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5]">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#0F172A]">No Questions Available</h2>
            <p className="text-xs text-[#64748B] leading-relaxed">
              No questions were found matching this test configuration or course filter.
            </p>
          </div>
          <button
            onClick={onExitTest}
            className="w-full py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.2)]"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-[#0F172A] select-none">
      {/* Top Test Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-[#DCEAF5] bg-white/85 backdrop-blur-2xl px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Mode Badge & Course Code */}
          <div className="flex items-center gap-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 ${
                isExam
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5]'
              }`}
            >
              {isExam ? <ShieldAlert className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
              <span>{isExam ? 'Exam Mode' : 'Practice Mode'}</span>
            </span>

            <span className="hidden sm:inline-block text-xs text-[#64748B] font-mono tracking-wider truncate max-w-xs">
              {session.config.courseName}
            </span>
          </div>

          {/* Center: Timer */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] shadow-[0_2px_10px_rgba(2,132,199,0.06)]">
            <Clock
              className={`w-3.5 h-3.5 ${
                isExam && session.secondsRemaining !== null && session.secondsRemaining <= 180
                  ? 'text-rose-500 animate-pulse'
                  : 'text-[#0284C7]'
              }`}
            />
            <span
              className={`font-mono text-xs font-semibold tracking-wider ${
                isExam && session.secondsRemaining !== null && session.secondsRemaining <= 180
                  ? 'text-rose-600'
                  : 'text-[#0F172A]'
              }`}
            >
              {isExam && session.secondsRemaining !== null
                ? formatTime(session.secondsRemaining)
                : formatTime(session.secondsElapsed)}
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Palette Toggle */}
            <button
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0284C7] hover:bg-[#EFF8FF] border border-transparent hover:border-[#DCEAF5] transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Question Palette"
            >
              <Grid className="w-4 h-4" />
              <span className="hidden md:inline">
                {answeredCount}/{totalQuestions}
              </span>
            </button>

            {/* End Test Button */}
            <button
              onClick={() => setIsSubmitConfirmOpen(true)}
              className="px-4 py-2 rounded-full bg-white hover:bg-rose-50 text-[#64748B] hover:text-rose-700 border border-[#DCEAF5] hover:border-rose-200 text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
            >
              Finish Test
            </button>
          </div>
        </div>
      </header>

      {/* Main Examination Layout */}
      <div className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-8 flex flex-col justify-between">
        {/* Question Header Status */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DCEAF5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest text-[#0284C7] font-bold">
              QUESTION {currentIndex + 1} OF {totalQuestions}
            </span>
            {currentItem.selectedOptionIndex !== null && (
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5]">
                Answered
              </span>
            )}
          </div>

          {/* Mark for Review Toggle */}
          <button
            onClick={handleToggleReview}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
              currentItem.isMarkedForReview
                ? 'bg-amber-50 border-amber-300 text-amber-700 shadow-sm'
                : 'bg-white border-[#DCEAF5] text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${currentItem.isMarkedForReview ? 'fill-current' : ''}`} />
            <span>{currentItem.isMarkedForReview ? 'Marked for Review' : 'Mark for Review'}</span>
          </button>
        </div>

        {/* Question Body */}
        <div className="my-auto py-8 space-y-8">
          {/* Question Text */}
          <motion.div
            key={`q-${currentItem.questionId}-${currentIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#0F172A] leading-relaxed tracking-normal font-serif">
              {currentItem.questionText}
            </h2>
          </motion.div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3.5 pt-2">
            {currentItem.displayedOptions.map((optionText, optIndex) => {
              const letter = String.fromCharCode(65 + optIndex);
              const isSelected = currentItem.selectedOptionIndex === optIndex;

              // Styles based on mode and feedback
              let containerStyle = 'bg-white border-[#DCEAF5] text-[#334155] hover:bg-[#EFF8FF]/50 hover:border-sky-200 shadow-sm';
              let badgeStyle = 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]';

              if (isSelected) {
                if (isExam) {
                  containerStyle = 'bg-[#EFF8FF] border-[#38BDF8] text-[#0F172A] shadow-[0_4px_16px_rgba(56,189,248,0.18)]';
                  badgeStyle = 'bg-[#0284C7] text-white font-bold border-[#0284C7]';
                } else {
                  if (optIndex === currentItem.correctOptionIndex) {
                    containerStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-[0_4px_16px_rgba(16,185,129,0.15)]';
                    badgeStyle = 'bg-emerald-600 text-white font-bold border-emerald-600';
                  } else {
                    containerStyle = 'bg-rose-50 border-rose-400 text-rose-950 shadow-[0_4px_16px_rgba(244,63,94,0.15)]';
                    badgeStyle = 'bg-rose-600 text-white font-bold border-rose-600';
                  }
                }
              } else if (!isExam && currentItem.selectedOptionIndex !== null && optIndex === currentItem.correctOptionIndex) {
                containerStyle = 'bg-emerald-50/70 border-emerald-300 text-emerald-900';
                badgeStyle = 'bg-emerald-600 text-white font-bold border-emerald-600';
              }

              return (
                <button
                  key={`opt-${currentIndex}-${optIndex}`}
                  onClick={() => handleSelectOption(optIndex)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 group ${containerStyle}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-7 h-7 rounded-xl font-mono text-xs flex items-center justify-center border transition-all ${badgeStyle}`}
                    >
                      {letter}
                    </span>
                    <span className="text-sm sm:text-base font-normal leading-relaxed">
                      {optionText}
                    </span>
                  </div>

                  {/* Feedback indicator in practice mode */}
                  {!isExam && isSelected && (
                    <div className="shrink-0">
                      {optIndex === currentItem.correctOptionIndex ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Explanation (Practice Mode Only) */}
          {!isExam && currentItem.selectedOptionIndex !== null && currentItem.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-[#EFF8FF] border border-[#DCEAF5] text-xs text-[#0F172A] space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-[#0284C7] font-mono uppercase tracking-widest text-[11px] font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Conceptual Insight</span>
              </div>
              <p className="leading-relaxed text-[#475569]">{currentItem.explanation}</p>
            </motion.div>
          )}
        </div>

        {/* Bottom Navigation Controls */}
        <footer className="pt-6 border-t border-[#DCEAF5] flex items-center justify-between gap-4">
          <button
            onClick={() => handleNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F1F5F9] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold uppercase tracking-wider text-[#475569] transition-colors border border-[#DCEAF5] shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#64748B] uppercase tracking-widest">
            <span>KEYBOARD: [1-4] SELECT • [←/→] NAVIGATE</span>
          </div>

          {currentIndex === totalQuestions - 1 ? (
            <button
              onClick={() => setIsSubmitConfirmOpen(true)}
              className="flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
            >
              <span>Submit Examination</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => handleNavigate(currentIndex + 1)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </footer>
      </div>

      {/* Slide-in Question Palette Drawer */}
      <AnimatePresence>
        {isPaletteOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaletteOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-sm h-full bg-white/95 backdrop-blur-2xl border-l border-[#DCEAF5] p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#DCEAF5] mb-6">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#0F172A]">
                    Question Palette
                  </h3>
                  <button
                    onClick={() => setIsPaletteOpen(false)}
                    className="p-1 rounded-lg text-[#64748B] hover:text-[#0F172A]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Legend */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mb-6">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <span className="w-2.5 h-2.5 rounded bg-[#0284C7]" />
                    <span>Answered ({answeredCount})</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <span className="w-2.5 h-2.5 rounded bg-amber-500" />
                    <span>Marked ({markedCount})</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <span className="w-2.5 h-2.5 rounded bg-slate-200" />
                    <span>Unanswered ({unansweredCount})</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <span className="w-2.5 h-2.5 rounded border border-[#0284C7]" />
                    <span>Current</span>
                  </div>
                </div>

                {/* Questions Grid */}
                <div className="grid grid-cols-5 gap-2 max-h-[60vh] overflow-y-auto pr-1">
                  {session.items.map((item, idx) => {
                    const isCurrent = idx === currentIndex;
                    const isAnswered = item.selectedOptionIndex !== null;
                    const isMarked = item.isMarkedForReview;

                    let bg = 'bg-slate-50 text-[#64748B] border-slate-200';
                    if (isAnswered) {
                      bg = 'bg-[#EFF8FF] text-[#0284C7] border-[#38BDF8] font-semibold';
                    }
                    if (isMarked) {
                      bg = 'bg-amber-50 text-amber-700 border-amber-300 font-semibold';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          handleNavigate(idx);
                          setIsPaletteOpen(false);
                        }}
                        className={`h-10 rounded-xl font-mono text-xs flex items-center justify-center border transition-all relative ${bg} ${
                          isCurrent ? 'ring-2 ring-[#0284C7] shadow-sm' : ''
                        }`}
                      >
                        <span>{idx + 1}</span>
                        {isMarked && (
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA in Palette */}
              <button
                onClick={() => {
                  setIsPaletteOpen(false);
                  setIsSubmitConfirmOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#0284C7] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
              >
                Finish & Submit
              </button>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Submit Confirmation Modal */}
      <AnimatePresence>
        {isSubmitConfirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitConfirmOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-md p-6 rounded-2xl bg-white border border-[#DCEAF5] shadow-[0_24px_50px_rgba(2,132,199,0.12)] space-y-5"
            >
              <div className="text-center space-y-2">
                <div className="inline-flex p-3 rounded-2xl bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5] mb-1">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif text-[#0F172A] uppercase tracking-tight">
                  Confirm Submission
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Are you ready to finalize this examination attempt? Your answers will be graded immediately.
                </p>
              </div>

              {/* Quick Summary */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F8FBFF] border border-[#DCEAF5] text-center font-mono">
                <div>
                  <div className="text-sm font-bold text-[#0284C7]">{answeredCount}</div>
                  <div className="text-[10px] text-[#64748B] uppercase">Answered</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-amber-600">{markedCount}</div>
                  <div className="text-[10px] text-[#64748B] uppercase">Marked</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-rose-600">{unansweredCount}</div>
                  <div className="text-[10px] text-[#64748B] uppercase">Skipped</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setIsSubmitConfirmOpen(false)}
                  className="flex-1 py-2.5 rounded-full border border-[#DCEAF5] text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FBFF] transition-colors uppercase tracking-wider"
                >
                  Return to Test
                </button>
                <button
                  onClick={handleManualSubmit}
                  className="flex-1 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
                >
                  Confirm & Grade
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
