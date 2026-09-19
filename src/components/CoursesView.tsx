import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, UploadCloud, ChevronRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { Course, Question } from '../types';
import { getCourses, getQuestions, fetchCoursesFromSupabase, fetchQuestionsFromSupabase, deriveAvailableWeeks } from '../lib/storage';

interface CoursesViewProps {
  onStartCourseTest: (courseId: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onStartCourseTest,
}) => {
  const [courses, setCourses] = useState<Course[]>(getCourses(true));
  const [selectedCourseId, setSelectedCourseId] = useState<string>(courses[0]?.id || '');
  const [activeWeekTab, setActiveWeekTab] = useState<number | 'all'>('all');
  const [allQuestions, setAllQuestions] = useState<Question[]>(() => {
    const initialCourseId = courses[0]?.id;
    return initialCourseId ? getQuestions(initialCourseId, 'all', true) : [];
  });

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      const freshCourses = await fetchCoursesFromSupabase(true);
      if (!isMounted) return;
      setCourses(freshCourses);
      const activeId = selectedCourseId || freshCourses[0]?.id || '';
      setSelectedCourseId(activeId);
      if (activeId) {
        const freshQuestions = await fetchQuestionsFromSupabase(activeId, 'all', true);
        if (isMounted) {
          setAllQuestions(freshQuestions);
        }
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelectCourse = async (courseId: string) => {
    setSelectedCourseId(courseId);
    setActiveWeekTab('all');
    const freshQuestions = await fetchQuestionsFromSupabase(courseId, 'all', true);
    setAllQuestions(freshQuestions);
  };

  const selectedCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];

  // Group questions by week dynamically
  const allCourseQuestions = allQuestions.filter((q) => !selectedCourse || q.courseId === selectedCourse.id);
  const weeksAvailable = deriveAvailableWeeks(allCourseQuestions);

  const courseQuestions = allCourseQuestions.filter((q) => {
    if (activeWeekTab === 'all') return true;
    return q.weekNumber === activeWeekTab;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-10 select-none font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
        <div>
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
            ACADEMIC CURRICULUM
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0F172A] uppercase tracking-tight">
            Published Courses & Tests
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-mono tracking-wide mt-1">
            VERIFIED QUESTION ARCHIVES AVAILABLE FOR SIMULATION
          </p>
        </div>
      </div>

      {/* Main Course Explorer or Empty State */}
      {courses.length === 0 ? (
        <div className="glass-panel p-12 sm:p-16 rounded-3xl border border-[#DCEAF5] text-center space-y-4 max-w-lg mx-auto bg-white/80 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] border border-[#DCEAF5] text-[#0284C7] flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] uppercase tracking-tight">
              No tests available yet
            </h3>
            <p className="text-xs text-[#64748B] font-mono leading-relaxed">
              New simulated question banks and course examinations will appear here once published by an administrator.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Courses List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B] mb-2">
              Available Disciplines ({courses.length})
            </div>

          {courses.map((course) => {
            const count = getQuestions(course.id).length;
            const isSelected = course.id === selectedCourseId;

            return (
              <button
                key={course.id}
                onClick={() => handleSelectCourse(course.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#EFF8FF] border-[#38BDF8] shadow-[0_4px_16px_rgba(56,189,248,0.15)]'
                    : 'bg-white border-[#DCEAF5] hover:border-sky-200 hover:bg-[#F8FBFF] shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#0284C7] px-2 py-0.5 rounded bg-[#EFF8FF] border border-[#DCEAF5]">
                    {course.code}
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">{count} Questions</span>
                </div>

                <h3 className="text-sm font-semibold text-[#0F172A] line-clamp-1">{course.name}</h3>

                {course.description && (
                  <p className="text-xs text-[#64748B] line-clamp-2 mt-1 font-light leading-relaxed">
                    {course.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Selected Course Details & Questions Browser */}
        {selectedCourse && (
          <div className="lg:col-span-8 space-y-6">
            {/* Active Course Banner */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#DCEAF5] space-y-4 bg-white/80 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[#0284C7] tracking-wider font-semibold">
                    {selectedCourse.code}
                  </span>
                  <h2 className="font-serif text-2xl text-[#0F172A] uppercase tracking-tight">
                    {selectedCourse.name}
                  </h2>
                </div>

                <button
                  onClick={() => onStartCourseTest(selectedCourse.id)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#0369a1] transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Course Test</span>
                </button>
              </div>

              {/* Weeks Filter Tabs */}
              <div className="pt-2 border-t border-[#DCEAF5] flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setActiveWeekTab('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase ${
                    activeWeekTab === 'all'
                      ? 'bg-[#0284C7] text-white font-bold'
                      : 'bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]'
                  }`}
                >
                  All Weeks ({allCourseQuestions.length})
                </button>

                {weeksAvailable.map((wk) => {
                  const wkCount = allCourseQuestions.filter((q) => q.weekNumber === wk).length;
                  return (
                    <button
                      key={wk}
                      onClick={() => setActiveWeekTab(wk)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase whitespace-nowrap ${
                        activeWeekTab === wk
                          ? 'bg-[#0284C7] text-white font-bold'
                          : 'bg-white text-[#64748B] border border-[#DCEAF5] hover:bg-[#EFF8FF]'
                      }`}
                    >
                      Week {wk} ({wkCount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748B] px-1">
                {courseQuestions.length} Questions in current view
              </div>

              {courseQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="glass-card p-5 rounded-2xl border border-[#DCEAF5] space-y-3 transition-all hover:border-sky-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0284C7]">
                      WEEK {q.weekNumber} • Q{idx + 1}
                    </span>
                    {q.sourcePdfName && (
                      <span className="text-[10px] font-mono text-[#64748B] truncate max-w-xs">
                        {q.sourcePdfName}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#0F172A] font-normal leading-relaxed">
                    {q.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 border ${
                          oIdx === q.correctAnswerIndex
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium'
                            : 'bg-white border-[#DCEAF5] text-[#475569]'
                        }`}
                      >
                        <span className="font-mono text-[10px] font-bold opacity-70">
                          {String.fromCharCode(65 + oIdx)}:
                        </span>
                        <span className="truncate">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
};
