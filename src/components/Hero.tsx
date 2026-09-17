import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, UploadCloud, BookOpen } from 'lucide-react';

interface HeroProps {
  onStartPracticing: () => void;
  onUploadPdf: () => void;
  totalQuestions: number;
  totalCourses: number;
}

export const Hero: React.FC<HeroProps> = ({
  onStartPracticing,
  onUploadPdf,
  totalQuestions,
  totalCourses,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-32 pb-12 overflow-hidden select-none bg-[#F8FBFF]">
      {/* Subtle Sky Blue Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-b from-sky-400/[0.12] via-sky-200/[0.06] to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-blue-300/[0.08] rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto">
        
        {/* Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCEAF5] shadow-[0_2px_10px_rgba(2,132,199,0.06)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shadow-[0_0_8px_#38bdf8]" />
          <span className="text-[11px] font-medium tracking-[0.28em] text-[#0284C7] uppercase">
            PREP STUDY LAB
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#0F172A] leading-[1.05] uppercase"
        >
          PREPARE
          <br />
          <span className="italic font-light text-[#64748B]">WITH PRECISION</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base sm:text-lg text-[#64748B] font-light leading-relaxed"
        >
          Practice the questions you already know. Test yourself under real exam conditions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onStartPracticing}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0284C7] text-white text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#0369a1] transition-all duration-300 shadow-[0_8px_25px_rgba(2,132,199,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>START PRACTICING</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onUploadPdf}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0F172A] text-xs font-semibold tracking-[0.16em] uppercase border border-[#DCEAF5] hover:bg-[#EFF8FF] hover:border-[#38BDF8] hover:text-[#0284C7] transition-all duration-300 shadow-[0_4px_16px_rgba(2,132,199,0.06)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <UploadCloud className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0284C7] transition-colors" />
            <span>UPLOAD PDF</span>
          </button>
        </motion.div>

        {/* Subtle Minimal Metadata Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex items-center justify-center gap-8 text-xs text-[#64748B] tracking-[0.15em] uppercase font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>{totalCourses} COURSES</span>
          </div>
          <div className="w-[1px] h-3 bg-[#DCEAF5]" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>{totalQuestions} CURATED QUESTIONS</span>
          </div>
          <div className="w-[1px] h-3 bg-[#DCEAF5]" />
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>EXAM SIMULATOR</span>
          </div>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#DCEAF5] text-[11px] tracking-[0.2em] uppercase text-[#64748B]">
        <div className="flex items-center gap-2">
          <span>PREP STUDY LAB</span>
          <span>•</span>
          <span>ACADEMIC PERFORMANCE SUITE</span>
        </div>
        <div className="mt-2 sm:mt-0 flex items-center gap-4 text-[#64748B]">
          <span>PRACTICE SUITE</span>
          <span>•</span>
          <span>EXAM SIMULATION</span>
        </div>
      </footer>
    </section>
  );
};
