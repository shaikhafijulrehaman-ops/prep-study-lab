import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  RotateCcw,
  Home,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { MockAttempt } from '../types';

interface TestResultViewProps {
  attempt: MockAttempt;
  onRetryWrong: (attempt: MockAttempt) => void;
  onBackToDashboard: () => void;
}

export const TestResultView: React.FC<TestResultViewProps> = ({
  attempt,
  onRetryWrong,
  onBackToDashboard,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('all');

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const filteredItems = attempt.items.filter((item) => {
    const isAnswered = item.selectedOptionIndex !== null;
    const isCorrect = isAnswered && item.selectedOptionIndex === item.correctOptionIndex;
    const isWrong = isAnswered && item.selectedOptionIndex !== item.correctOptionIndex;

    if (filterMode === 'correct') return isCorrect;
    if (filterMode === 'wrong') return isWrong;
    if (filterMode === 'unanswered') return !isAnswered;
    return true;
  });

  const hasWrongQuestions = attempt.wrongCount > 0;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-12 font-sans select-none bg-[#F8FBFF] text-[#0F172A]">
      {/* Top Header */}
      <div className="text-center space-y-4 pt-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex p-3.5 rounded-3xl bg-[#EFF8FF] text-[#0284C7] border border-[#DCEAF5] shadow-[0_4px_20px_rgba(2,132,199,0.12)]"
        >
          <Trophy className="w-8 h-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-1"
        >
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
            ASSESSMENT COMPLETED • {attempt.mode.toUpperCase()} MODE
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#0F172A] font-normal uppercase tracking-tight">
            Performance Summary
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wide">
            {attempt.courseName}
          </p>
        </motion.div>
      </div>

      {/* Main Scorecard Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#DCEAF5] shadow-[0_12px_32px_-8px_rgba(2,132,199,0.12)] relative overflow-hidden bg-white/90"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Big Score Readout */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start justify-center border-b md:border-b-0 md:border-r border-[#DCEAF5] pb-8 md:pb-0 md:pr-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B] mb-2">
              Overall Score
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-6xl sm:text-7xl font-light text-[#0F172A] tracking-tight">
                {attempt.score}
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#64748B] font-light">
                / {attempt.totalQuestions}
              </span>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] text-[#0284C7] font-mono text-xs font-semibold tracking-wider">
              <span>{attempt.percentage}% ACCURACY</span>
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-center">
              <div className="flex items-center justify-center text-emerald-600 mb-1.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xl font-mono font-bold text-[#0F172A]">{attempt.correctCount}</div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase mt-1">
                Correct
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-center">
              <div className="flex items-center justify-center text-rose-600 mb-1.5">
                <XCircle className="w-4 h-4" />
              </div>
              <div className="text-xl font-mono font-bold text-[#0F172A]">{attempt.wrongCount}</div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase mt-1">
                Wrong
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-center">
              <div className="flex items-center justify-center text-[#64748B] mb-1.5">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div className="text-xl font-mono font-bold text-[#0F172A]">{attempt.unansweredCount}</div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase mt-1">
                Skipped
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5] text-center">
              <div className="flex items-center justify-center text-[#0284C7] mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xl font-mono font-bold text-[#0F172A]">
                {formatDuration(attempt.timeTakenSeconds)}
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase mt-1">
                Duration
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-8 pt-8 border-t border-[#DCEAF5] flex flex-wrap items-center justify-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#475569] text-xs font-semibold tracking-wider uppercase border border-[#DCEAF5] hover:bg-[#F8FBFF] hover:text-[#0F172A] transition-all shadow-sm"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {hasWrongQuestions && (
              <button
                onClick={() => onRetryWrong(attempt)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold tracking-wider uppercase border border-rose-200 hover:bg-rose-100 transition-all shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Wrong Questions ({attempt.wrongCount})</span>
              </button>
            )}

            <a
              href="#answer-review"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Detailed Answers</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Answer Review Section: Faithful reproduction of exact displayed order */}
      <div id="answer-review" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#DCEAF5]">
          <div>
            <h2 className="text-xl font-serif text-[#0F172A] uppercase tracking-wide">
              Detailed Question Review
            </h2>
            <p className="text-xs text-[#64748B] font-mono tracking-wider">
              EXACT QUESTION AND OPTION ORDER RECORDED FROM THIS ATTEMPT
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#EFF8FF] border border-[#DCEAF5]">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-all ${
                filterMode === 'all'
                  ? 'bg-white text-[#0284C7] font-bold shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              All ({attempt.items.length})
            </button>
            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-all ${
                filterMode === 'wrong'
                  ? 'bg-rose-600 text-white font-bold shadow-sm'
                  : 'text-[#64748B] hover:text-rose-600'
              }`}
            >
              Wrong ({attempt.wrongCount})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-all ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white font-bold shadow-sm'
                  : 'text-[#64748B] hover:text-emerald-600'
              }`}
            >
              Correct ({attempt.correctCount})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isAnswered = item.selectedOptionIndex !== null;
            const isCorrect = isAnswered && item.selectedOptionIndex === item.correctOptionIndex;
            const isWrong = isAnswered && item.selectedOptionIndex !== item.correctOptionIndex;

            return (
              <div
                key={item.questionIndex}
                className="glass-card p-6 rounded-2xl border border-[#DCEAF5] space-y-4 transition-all hover:border-sky-200"
              >
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#0284C7]">
                      Q{item.questionIndex + 1}.
                    </span>
                    {isCorrect && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Correct
                      </span>
                    )}
                    {isWrong && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        <XCircle className="w-3 h-3" /> Incorrect
                      </span>
                    )}
                    {!isAnswered && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#64748B] bg-slate-100 px-2 py-0.5 rounded-full">
                        Skipped
                      </span>
                    )}
                  </div>

                  {item.timeSpentSeconds > 0 && (
                    <span className="text-[11px] font-mono text-[#64748B]">
                      {item.timeSpentSeconds}s spent
                    </span>
                  )}
                </div>

                {/* Question Text */}
                <h3 className="text-base text-[#0F172A] font-normal leading-relaxed">
                  {item.questionText}
                </h3>

                {/* Shuffled Options as displayed during attempt */}
                <div className="grid grid-cols-1 gap-2 pt-2">
                  {item.displayedOptions.map((optText, optIdx) => {
                    const letter = String.fromCharCode(65 + optIdx);
                    const isSelected = item.selectedOptionIndex === optIdx;
                    const isCorrectAnswer = optIdx === item.correctOptionIndex;

                    let rowStyle = 'bg-white border-[#DCEAF5] text-[#475569]';
                    let badgeStyle = 'bg-slate-100 text-[#64748B] border-slate-200';

                    if (isCorrectAnswer) {
                      rowStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium';
                      badgeStyle = 'bg-emerald-600 text-white font-bold border-emerald-600';
                    } else if (isSelected && !isCorrectAnswer) {
                      rowStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-medium';
                      badgeStyle = 'bg-rose-600 text-white font-bold border-rose-600';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${rowStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-lg font-mono text-xs flex items-center justify-center border transition-all ${badgeStyle}`}
                          >
                            {letter}
                          </span>
                          <span>{optText}</span>
                        </div>

                        {/* Annotations */}
                        <div className="shrink-0 flex items-center gap-2">
                          {isSelected && !isCorrectAnswer && (
                            <span className="text-[10px] font-mono uppercase text-rose-700 px-2 py-0.5 rounded bg-rose-100">
                              Your Answer
                            </span>
                          )}
                          {isCorrectAnswer && (
                            <span className="text-[10px] font-mono uppercase text-emerald-700 px-2 py-0.5 rounded bg-emerald-100">
                              Accepted Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                {item.explanation && (
                  <div className="mt-3 p-3 rounded-xl bg-[#EFF8FF] border border-[#DCEAF5] text-xs text-[#0F172A]">
                    <span className="font-mono text-[#0284C7] uppercase text-[10px] tracking-wider block mb-1 font-semibold">
                      Rationale / Explanation:
                    </span>
                    <p className="leading-relaxed text-[#475569]">{item.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
