import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Play,
  RotateCcw,
  Clock,
  CheckCircle2,
  XCircle,
  Calendar,
  AlertCircle,
  ArrowRight,
  Eye,
  Sliders,
  Target,
  Award,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { MockAttempt, User } from '../types';
import { getAttempts, getActiveSession, getUserProgress, ActiveTestSession } from '../lib/storage';

interface TestsViewProps {
  currentUser?: User | null;
  onOpenConfig: () => void;
  onResumeTest: (session: ActiveTestSession) => void;
  onViewAttemptResult: (attempt: MockAttempt) => void;
  onRetryAttemptWrong: (attempt: MockAttempt) => void;
}

export const TestsView: React.FC<TestsViewProps> = ({
  currentUser,
  onOpenConfig,
  onResumeTest,
  onViewAttemptResult,
  onRetryAttemptWrong,
}) => {
  const [attempts, setAttempts] = useState<MockAttempt[]>(getAttempts(currentUser?.id));
  const activeSession = getActiveSession(currentUser?.id);
  const progress = getUserProgress(currentUser?.id);

  useEffect(() => {
    setAttempts(getAttempts(currentUser?.id));
  }, [currentUser]);

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-10 select-none font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
        <div>
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
            ACADEMIC SUITE
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F172A] uppercase tracking-tight">
            {currentUser ? `${currentUser.name}'s Dashboard` : 'Personal Dashboard & History'}
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wide mt-1">
            TEST DRILLS, HISTORICAL PLAYBACK, AND INDIVIDUAL ACCURACY ANALYTICS
          </p>
        </div>

        <button
          onClick={onOpenConfig}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>New Test Simulation</span>
        </button>
      </div>

      {/* Personal Dashboard Metrics Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#DCEAF5] space-y-1">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-wider">Tests Taken</span>
            <FileText className="w-3.5 h-3.5 text-[#0284C7]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal">
            {progress.testsCompleted}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">Completed sessions</div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#DCEAF5] space-y-1">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-wider">Attempted</span>
            <Target className="w-3.5 h-3.5 text-[#0284C7]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal">
            {progress.totalAttempted}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">Questions answered</div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#DCEAF5] space-y-1">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-wider">Correct</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl text-emerald-600 font-normal">
            {progress.totalCorrect}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">Confirmed answers</div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#DCEAF5] space-y-1">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-wider">Accuracy</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#0284C7]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl text-[#0284C7] font-normal">
            {progress.accuracy}%
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">Overall rate</div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#DCEAF5] space-y-1 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-[#64748B]">
            <span className="text-[10px] font-mono uppercase tracking-wider">Best Score</span>
            <Award className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl text-amber-600 font-normal">
            {progress.bestScore}
          </div>
          <div className="text-[11px] text-[#64748B] font-mono">Top marks reached</div>
        </div>
      </div>

      {/* Resume Pending Test Banner */}
      {activeSession && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-[#EFF8FF] border border-[#38BDF8]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(56,189,248,0.12)]"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#0284C7] text-white">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0284C7] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                Incomplete Test Session Detected
              </div>
              <p className="text-xs text-[#334155] mt-0.5">
                {activeSession.config.courseName} • Question {activeSession.currentIndex + 1} of{' '}
                {activeSession.items.length}
              </p>
            </div>
          </div>

          <button
            onClick={() => onResumeTest(activeSession)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-colors shadow-sm"
          >
            <span>Resume Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* Previous Attempts Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Recorded Attempts ({attempts.length})
          </h2>
          <span className="text-[11px] font-mono text-[#64748B]">
            STRICT PLAYBACK OF DISPLAYED OPTION ORDER
          </span>
        </div>

        {attempts.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center border border-[#DCEAF5] space-y-3 bg-white/70">
            <div className="w-12 h-12 rounded-full bg-[#EFF8FF] text-[#0284C7] mx-auto flex items-center justify-center border border-[#DCEAF5]">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A]">
              No Previous Test Attempts
            </h3>
            <p className="text-xs text-[#64748B] max-w-sm mx-auto">
              Launch a practice or exam simulation to test your mastery. All scores, randomized option orders, and timing are archived permanently.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConfig}
                className="px-5 py-2 rounded-full bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369a1] transition-colors shadow-sm"
              >
                Start First Test
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3.5">
            {attempts.map((att) => {
              const hasWrongs = att.wrongCount > 0;
              const isHighAccuracy = att.percentage >= 75;

              return (
                <div
                  key={att.id}
                  className="glass-card-interactive p-5 sm:p-6 rounded-2xl border border-[#DCEAF5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Left Metadata */}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          att.mode === 'exam'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : 'bg-[#EFF8FF] text-[#0284C7] border-[#DCEAF5]'
                        }`}
                      >
                        {att.mode}
                      </span>
                      <span className="text-xs text-[#64748B] font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(att.completedAt || att.createdAt)}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-[#0F172A] truncate">
                      {att.courseName}
                    </h3>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#64748B] pt-0.5">
                      <span className="flex items-center gap-1 text-emerald-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {att.correctCount} Correct
                      </span>
                      <span className="flex items-center gap-1 text-rose-600 font-medium">
                        <XCircle className="w-3.5 h-3.5" />
                        {att.wrongCount} Wrong
                      </span>
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDuration(att.timeTakenSeconds)}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Score Badge */}
                  <div className="text-right sm:px-6">
                    <div className="font-serif text-2xl sm:text-3xl font-light text-[#0F172A]">
                      {att.score}
                      <span className="text-sm font-sans text-[#64748B]"> / {att.totalQuestions}</span>
                    </div>
                    <div
                      className={`text-xs font-mono font-bold ${
                        isHighAccuracy ? 'text-[#0284C7]' : 'text-amber-600'
                      }`}
                    >
                      {att.percentage}%
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DCEAF5]">
                    {hasWrongs && (
                      <button
                        onClick={() => onRetryAttemptWrong(att)}
                        title="Retry only wrong questions from this test"
                        className="p-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all text-xs flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="sm:hidden">Retry Wrongs</span>
                      </button>
                    )}

                    <button
                      onClick={() => onViewAttemptResult(att)}
                      className="px-4 py-2 rounded-full bg-white hover:bg-[#EFF8FF] text-[#0F172A] border border-[#DCEAF5] text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>View Result</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
