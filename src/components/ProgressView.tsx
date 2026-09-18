import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, Target, Award, Layers, TrendingUp, Sparkles, Play } from 'lucide-react';
import { getUserProgress } from '../lib/storage';
import { User } from '../types';

interface ProgressViewProps {
  currentUser?: User | null;
  onStartPracticing: () => void;
  onOpenAuth?: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  currentUser,
  onStartPracticing,
  onOpenAuth,
}) => {
  const progress = getUserProgress(currentUser?.id);

  if (!currentUser) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 max-w-lg mx-auto flex flex-col items-center justify-center text-center space-y-6 select-none font-sans">
        <div className="p-4 rounded-3xl bg-[#EFF8FF] border border-[#DCEAF5] text-[#0284C7] shadow-sm">
          <BarChart3 className="w-8 h-8 text-[#0284C7]" />
        </div>
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
            AUTHENTICATION REQUIRED
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F172A] uppercase tracking-tight">
            Performance Analytics
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wide max-w-md mx-auto">
            Please sign in with your Registration Number to view your module-by-module accuracy, longitudinal progress matrix, and performance insights.
          </p>
        </div>
        {onOpenAuth && (
          <button
            onClick={onOpenAuth}
            className="px-6 py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In with Registration Number
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-10 select-none font-sans">
      {/* Page Header */}
      <div className="pb-6 border-b border-[#DCEAF5]">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
          PERFORMANCE INTELLIGENCE
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0F172A] uppercase tracking-tight">
          {currentUser ? `${currentUser.name}'s Progress & Analytics` : 'Progress & Analytics'}
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wide mt-1">
          LONGITUDINAL ACCURACY TRACKING AND MODULE-BY-MODULE MASTERY
        </p>
      </div>

      {/* Hero Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Attempted */}
        <div className="glass-panel p-6 rounded-3xl border border-[#DCEAF5] space-y-2 bg-white/80">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-widest">Questions Attempted</span>
            <Target className="w-4 h-4 text-[#0284C7]" />
          </div>
          <div className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-light">
            {progress.totalAttempted}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">
            Across {progress.testsCompleted} test sessions
          </div>
        </div>

        {/* Overall Accuracy */}
        <div className="glass-panel p-6 rounded-3xl border border-[#DCEAF5] space-y-2 bg-white/80">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-widest">Overall Accuracy</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-serif text-3xl sm:text-4xl text-emerald-600 font-light">
            {progress.accuracy}%
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">
            {progress.totalCorrect} correct answers
          </div>
        </div>

        {/* Tests Completed */}
        <div className="glass-panel p-6 rounded-3xl border border-[#DCEAF5] space-y-2 bg-white/80">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-widest">Total Tests</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-light">
            {progress.testsCompleted}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">
            {progress.examCompleted} Exam / {progress.practiceCompleted} Practice
          </div>
        </div>

        {/* Best Score */}
        <div className="glass-panel p-6 rounded-3xl border border-[#DCEAF5] space-y-2 bg-white/80">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-widest">Best Score</span>
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
          </div>
          <div className="font-serif text-3xl sm:text-4xl text-[#0284C7] font-light">
            {progress.bestScore}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">
            Top individual result
          </div>
        </div>
      </div>

      {/* Week-wise Performance Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Week-Wise Progress Matrix
          </h2>
          <span className="text-[11px] font-mono text-[#64748B]">
            MODULE ACCURACY BREAKDOWN
          </span>
        </div>

        {progress.weekWise.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center border border-[#DCEAF5] space-y-3 bg-white/70">
            <div className="w-12 h-12 rounded-full bg-[#EFF8FF] text-[#0284C7] mx-auto flex items-center justify-center border border-[#DCEAF5]">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A]">
              No Weekly Activity Recorded Yet
            </h3>
            <p className="text-xs text-[#64748B] max-w-sm mx-auto">
              Start practicing or testing questions to populate your week-by-week competency indicators.
            </p>
            <div className="pt-2">
              <button
                onClick={onStartPracticing}
                className="px-5 py-2 rounded-full bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-colors shadow-sm"
              >
                Launch Simulation
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5">
            {progress.weekWise.map((record, index) => (
              <div
                key={`${record.courseId}-${record.week}-${index}`}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-[#DCEAF5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#0284C7] px-2 py-0.5 rounded bg-[#EFF8FF] border border-[#DCEAF5]">
                      WEEK {record.week}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono truncate">
                      {record.courseName}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#64748B] pt-1 flex items-center gap-4">
                    <span>{record.attempted} Questions Attempted</span>
                    <span className="text-emerald-600 font-medium">{record.correct} Correct</span>
                  </div>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="w-full sm:w-64 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B] text-[10px] uppercase">Accuracy</span>
                    <span
                      className={`font-bold ${
                        record.accuracy >= 75
                          ? 'text-[#0284C7]'
                          : record.accuracy >= 50
                          ? 'text-amber-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {record.accuracy}%
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full transition-all duration-500 shadow-sm"
                      style={{ width: `${Math.min(100, Math.max(0, record.accuracy))}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
