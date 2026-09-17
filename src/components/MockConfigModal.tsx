import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Clock, Sliders, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { Course, MockConfig, QuestionSelection, TestMode } from '../types';
import { getCourses, getQuestions } from '../lib/storage';

interface MockConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTest: (config: MockConfig) => void;
  preselectedCourseId?: string;
}

export const MockConfigModal: React.FC<MockConfigModalProps> = ({
  isOpen,
  onClose,
  onStartTest,
  preselectedCourseId,
}) => {
  const [courses, setCourses] = useState<Course[]>(getCourses(true));
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    preselectedCourseId || courses[0]?.id || ''
  );
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([]);
  const [questionCountType, setQuestionCountType] = useState<10 | 20 | 30 | 'all' | 'custom'>(10);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(15);
  const [selectionType, setSelectionType] = useState<QuestionSelection>('random');
  const [mode, setMode] = useState<TestMode>('practice');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);

  const currentCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  // Get all unique weeks available for the selected course
  const allCourseQuestions = currentCourse ? getQuestions(currentCourse.id, 'all', true) : [];
  const availableWeekNumbers = Array.from(
    new Set(allCourseQuestions.map((q) => q.weekNumber))
  ).sort((a, b) => a - b);

  // Initialize selected weeks to all available weeks when opening or switching courses
  useEffect(() => {
    if (isOpen) {
      const freshCourses = getCourses(true);
      setCourses(freshCourses);
      const targetCourseId = preselectedCourseId || selectedCourseId || freshCourses[0]?.id || '';
      setSelectedCourseId(targetCourseId);

      const questions = getQuestions(targetCourseId, 'all', true);
      const weeks = Array.from(new Set(questions.map((q) => q.weekNumber))).sort((a, b) => a - b);
      setSelectedWeeks(weeks.length > 0 ? weeks : [1]);
    }
  }, [isOpen, preselectedCourseId]);

  const handleCourseChange = (newCourseId: string) => {
    setSelectedCourseId(newCourseId);
    const questions = getQuestions(newCourseId, 'all', true);
    const weeks = Array.from(new Set(questions.map((q) => q.weekNumber))).sort((a, b) => a - b);
    setSelectedWeeks(weeks.length > 0 ? weeks : [1]);
  };

  // Toggle an individual week
  const handleToggleWeek = (wk: number) => {
    if (selectedWeeks.includes(wk)) {
      if (selectedWeeks.length === 1) return; // keep at least 1 week
      setSelectedWeeks(selectedWeeks.filter((w) => w !== wk));
    } else {
      setSelectedWeeks([...selectedWeeks, wk].sort((a, b) => a - b));
    }
  };

  // Preset range helpers
  const handleSelectAllWeeks = () => {
    setSelectedWeeks([...availableWeekNumbers]);
  };

  const handleSelectRange = (start: number, end: number) => {
    const range = availableWeekNumbers.filter((w) => w >= start && w <= end);
    if (range.length > 0) {
      setSelectedWeeks(range);
    }
  };

  if (!isOpen) return null;

  // Calculate dynamically available questions based on selected weeks
  const availableQuestions = getQuestions(selectedCourseId, selectedWeeks, true);
  const maxAvailable = availableQuestions.length;

  const handleLaunch = () => {
    if (!currentCourse) return;

    let finalCount: number | 'all' = 10;
    if (questionCountType === 'all') {
      finalCount = 'all';
    } else if (questionCountType === 'custom') {
      finalCount = Math.max(1, Math.min(customQuestionCount, maxAvailable || 1));
    } else {
      finalCount = Math.min(questionCountType, maxAvailable || questionCountType);
    }

    const config: MockConfig = {
      courseId: currentCourse.id,
      courseName: `${currentCourse.code} - ${currentCourse.name}`,
      selectedWeeks,
      weekNumber: selectedWeeks.length === 1 ? selectedWeeks[0] : 'all',
      questionCount: finalCount,
      selectionType,
      mode,
      timeLimitMinutes: mode === 'exam' && timeLimitMinutes === 0 ? 30 : timeLimitMinutes,
    };

    onStartTest(config);
    onClose();
  };

  const isAllSelected =
    availableWeekNumbers.length > 0 &&
    availableWeekNumbers.every((w) => selectedWeeks.includes(w));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_24px_50px_rgba(2,132,199,0.15)] overflow-hidden font-sans"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCEAF5] bg-[#EFF8FF]/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#0284C7]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#0F172A] font-sans">
                Configure Mock Test
              </h2>
              <p className="text-[11px] text-[#64748B] font-mono tracking-wide">
                MULTI-WEEK MODULE DRILLS AND TIMED SIMULATION
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* 1. SELECT TEST */}
          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
              1. Select Test
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => handleCourseChange(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] font-medium outline-none focus:border-[#0284C7] shadow-sm"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code} — {c.name} ({c.totalQuestions || 0} Questions)
                </option>
              ))}
            </select>
          </div>

          {/* 2. SELECT WEEKS (MULTI-SELECT) */}
          <div className="space-y-3 p-4 rounded-2xl bg-[#F8FBFF] border border-[#DCEAF5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#0F172A]">
                2. Select Weeks
              </label>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#64748B]">Available Questions:</span>
                <span className="px-2 py-0.5 rounded-full bg-[#0284C7] text-white font-bold text-[11px]">
                  {maxAvailable}
                </span>
              </div>
            </div>

            {/* Quick preset chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={handleSelectAllWeeks}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  isAllSelected
                    ? 'bg-[#0284C7] text-white font-bold shadow-sm'
                    : 'bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]'
                }`}
              >
                All Weeks
              </button>
              {availableWeekNumbers.length >= 6 && (
                <button
                  type="button"
                  onClick={() => handleSelectRange(1, 6)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]"
                >
                  Week 1–6
                </button>
              )}
              {availableWeekNumbers.length >= 3 && (
                <button
                  type="button"
                  onClick={() => handleSelectRange(1, 3)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]"
                >
                  Week 1–3
                </button>
              )}
              {availableWeekNumbers.length >= 6 && (
                <button
                  type="button"
                  onClick={() => handleSelectRange(4, 6)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]"
                >
                  Week 4–6
                </button>
              )}
            </div>

            {/* Individual Week Chips (Multi-Select) */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2">
              {availableWeekNumbers.map((wk) => {
                const isSelected = selectedWeeks.includes(wk);
                const qCountInWeek = allCourseQuestions.filter((q) => q.weekNumber === wk).length;

                return (
                  <button
                    key={wk}
                    type="button"
                    onClick={() => handleToggleWeek(wk)}
                    className={`py-2 px-2 rounded-xl text-xs font-mono text-center transition-all border ${
                      isSelected
                        ? 'bg-white border-[#0284C7] text-[#0284C7] font-bold shadow-sm ring-1 ring-[#0284C7]/20'
                        : 'bg-white/60 border-[#DCEAF5] text-[#64748B] hover:border-sky-300'
                    }`}
                  >
                    <div>Week {wk}</div>
                    <div className="text-[10px] text-[#94A3B8] font-normal">{qCountInWeek} Qs</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Summary */}
            <div className="text-xs font-mono text-[#64748B] pt-1">
              <span className="font-semibold text-[#0F172A]">Selected: </span>
              {isAllSelected
                ? 'All Weeks'
                : selectedWeeks.map((w) => `Week ${w}`).join(', ')}
            </div>
          </div>

          {/* Test Mode: Practice vs Exam */}
          <div className="space-y-3">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
              2. Test Environment Mode
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode('practice')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  mode === 'practice'
                    ? 'bg-[#EFF8FF] border-[#38BDF8] shadow-sm'
                    : 'bg-white border-[#DCEAF5] hover:border-sky-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#0F172A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                    Practice Mode
                  </span>
                  {mode === 'practice' && <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />}
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Immediate answer verification, interactive solutions, self-paced mastery.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('exam');
                  if (timeLimitMinutes === 0) setTimeLimitMinutes(30);
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  mode === 'exam'
                    ? 'bg-[#EFF8FF] border-[#38BDF8] shadow-sm'
                    : 'bg-white border-[#DCEAF5] hover:border-sky-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#0F172A] flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#0284C7]" />
                    Exam Mode
                  </span>
                  {mode === 'exam' && <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />}
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  Strict timed exam conditions. Correctness hidden until submission. Auto-submits on 00:00.
                </p>
              </button>
            </div>
          </div>

          {/* Number of Questions */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
                3. Question Count
              </label>
              <span className="text-[11px] font-mono text-[#64748B]">
                Max available: {maxAvailable}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {([10, 20, 30, 'all', 'custom'] as const).map((cnt) => {
                const isTooHigh = typeof cnt === 'number' && cnt > maxAvailable;
                return (
                  <button
                    key={cnt}
                    type="button"
                    disabled={isTooHigh}
                    onClick={() => setQuestionCountType(cnt)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium uppercase transition-all ${
                      questionCountType === cnt
                        ? 'bg-[#0284C7] text-white font-bold shadow-sm'
                        : isTooHigh
                        ? 'bg-slate-50 text-slate-300 border border-slate-200 cursor-not-allowed'
                        : 'bg-white text-[#475569] border border-[#DCEAF5] hover:bg-[#EFF8FF]'
                    }`}
                  >
                    {cnt === 'all' ? 'All' : cnt === 'custom' ? 'Custom' : `${cnt}`}
                  </button>
                );
              })}
            </div>

            {questionCountType === 'custom' && (
              <div className="pt-2 flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={maxAvailable || 1}
                  value={customQuestionCount}
                  onChange={(e) => {
                    const parsed = parseInt(e.target.value, 10) || 1;
                    setCustomQuestionCount(Math.max(1, Math.min(parsed, maxAvailable || 1)));
                  }}
                  className="w-24 px-3 py-1.5 rounded-lg bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] font-mono shadow-sm"
                />
                <span className="text-xs text-[#64748B]">
                  questions sampled (max {maxAvailable})
                </span>
              </div>
            )}
          </div>

          {/* Question Selection Criteria */}
          <div className="space-y-3">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
              4. Question Selection Strategy
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'random', label: 'Random' },
                { id: 'unattempted', label: 'Unattempted' },
                { id: 'wrong', label: 'Previously Wrong' },
                { id: 'all', label: 'Complete Bank' },
              ].map((sel) => (
                <button
                  key={sel.id}
                  type="button"
                  onClick={() => setSelectionType(sel.id as QuestionSelection)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all border ${
                    selectionType === sel.id
                      ? 'bg-[#EFF8FF] border-[#38BDF8] text-[#0284C7] font-semibold shadow-sm'
                      : 'bg-white border-[#DCEAF5] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FBFF]'
                  }`}
                >
                  {sel.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Limit */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
                5. Time Limit
              </label>
              <span className="text-[11px] font-mono text-[#64748B]">
                {timeLimitMinutes === 0 ? 'Unlimited Duration' : `${timeLimitMinutes} minutes`}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Unlimited', val: 0 },
                { label: '15 Min', val: 15 },
                { label: '30 Min', val: 30 },
                { label: '45 Min', val: 45 },
                { label: '60 Min', val: 60 },
                { label: '90 Min', val: 90 },
                { label: '180 Min', val: 180 },
              ].map((t) => (
                <button
                  key={t.val}
                  type="button"
                  disabled={mode === 'exam' && t.val === 0}
                  onClick={() => setTimeLimitMinutes(t.val)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-all border ${
                    timeLimitMinutes === t.val
                      ? 'bg-[#0284C7] text-white font-bold border-[#0284C7]'
                      : 'bg-white border-[#DCEAF5] text-[#64748B] hover:text-[#0F172A] hover:bg-[#EFF8FF]'
                  } ${mode === 'exam' && t.val === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#DCEAF5] bg-[#F8FBFF]">
          <button
            onClick={onClose}
            className="text-xs text-[#64748B] hover:text-[#0F172A] uppercase tracking-widest"
          >
            Cancel
          </button>
          <button
            onClick={handleLaunch}
            disabled={maxAvailable === 0}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0284C7] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)]"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>START TEST SIMULATION</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
