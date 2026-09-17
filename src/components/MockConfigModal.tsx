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
  const [courses, setCourses] = useState<Course[]>(getCourses());
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    preselectedCourseId || courses[0]?.id || ''
  );
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [questionCountType, setQuestionCountType] = useState<10 | 20 | 30 | 40 | 50 | 'all' | 'custom'>(10);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(15);
  const [selectionType, setSelectionType] = useState<QuestionSelection>('random');
  const [mode, setMode] = useState<TestMode>('practice');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);

  useEffect(() => {
    if (isOpen) {
      const freshCourses = getCourses();
      setCourses(freshCourses);
      if (preselectedCourseId) {
        setSelectedCourseId(preselectedCourseId);
      } else if (!selectedCourseId || !freshCourses.some((c) => c.id === selectedCourseId)) {
        setSelectedCourseId(freshCourses[0]?.id || '');
      }
    }
  }, [isOpen, preselectedCourseId]);

  if (!isOpen) return null;

  const currentCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];
  const availableQuestions = getQuestions(selectedCourseId, selectedWeek);
  const maxAvailable = availableQuestions.length;

  const handleLaunch = () => {
    if (!currentCourse) return;

    let finalCount: number | 'all' = 10;
    if (questionCountType === 'all') {
      finalCount = 'all';
    } else if (questionCountType === 'custom') {
      finalCount = Math.max(1, Math.min(customQuestionCount, maxAvailable || 1));
    } else {
      finalCount = questionCountType;
    }

    const config: MockConfig = {
      courseId: currentCourse.id,
      courseName: `${currentCourse.code} - ${currentCourse.name}`,
      weekNumber: selectedWeek,
      questionCount: finalCount,
      selectionType,
      mode,
      timeLimitMinutes: mode === 'exam' && timeLimitMinutes === 0 ? 30 : timeLimitMinutes,
    };

    onStartTest(config);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#040609]/80 backdrop-blur-xl"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-[#DCEAF5] shadow-[0_24px_50px_rgba(2,132,199,0.15)] overflow-hidden font-sans"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCEAF5] bg-[#F8FBFF]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#EFF8FF] border border-[#DCEAF5] text-[#0284C7]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#0F172A] font-sans">
                Configure Test Simulation
              </h2>
              <p className="text-[11px] text-[#64748B] font-mono tracking-wide">
                PRECISION ASSESSMENT ENGINE • CUSTOMIZE SCOPE & DURATION
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
          {/* Course & Week Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
                1. Select Academic Course
              </label>
              <span className="text-[10px] font-mono text-[#0284C7] bg-[#EFF8FF] px-2 py-0.5 rounded-full border border-[#DCEAF5]">
                {maxAvailable} questions available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] shadow-sm"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id} className="bg-white text-[#0F172A]">
                      {c.code} — {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedWeek}
                  onChange={(e) =>
                    setSelectedWeek(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] shadow-sm"
                >
                  <option value="all" className="bg-white text-[#0F172A]">
                    All Weeks Combined
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => (
                    <option key={w} value={w} className="bg-white text-[#0F172A]">
                      Week {w} Only
                    </option>
                  ))}
                </select>
              </div>
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
            <label className="text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
              3. Question Count
            </label>
            <div className="flex flex-wrap gap-2">
              {([10, 20, 30, 40, 50, 'all', 'custom'] as const).map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setQuestionCountType(cnt)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium uppercase transition-all ${
                    questionCountType === cnt
                      ? 'bg-[#0284C7] text-white font-bold shadow-sm'
                      : 'bg-white text-[#475569] border border-[#DCEAF5] hover:bg-[#EFF8FF]'
                  }`}
                >
                  {cnt === 'all' ? 'All Questions' : cnt === 'custom' ? 'Custom' : `${cnt} Qs`}
                </button>
              ))}
            </div>

            {questionCountType === 'custom' && (
              <div className="pt-2 flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={maxAvailable || 100}
                  value={customQuestionCount}
                  onChange={(e) => setCustomQuestionCount(parseInt(e.target.value, 10) || 1)}
                  className="w-24 px-3 py-1.5 rounded-lg bg-white border border-[#DCEAF5] text-xs text-[#0F172A] outline-none focus:border-[#0284C7] font-mono shadow-sm"
                />
                <span className="text-xs text-[#64748B]">questions will be sampled randomly</span>
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
