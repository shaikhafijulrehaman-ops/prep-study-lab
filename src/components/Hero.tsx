import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface HeroProps {
  onStartPracticing: () => void;
  onViewTests: () => void;
  totalQuestions: number;
  totalCourses: number;
}

export const Hero: React.FC<HeroProps> = ({
  onStartPracticing,
  onViewTests,
  totalQuestions,
  totalCourses,
}) => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between items-center px-5 sm:px-[5vw] lg:px-[7vw] pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-x-hidden select-none bg-[#F8FBFF]">
      {/* Subtle Sky Blue & Luminous Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-[100vw] h-[380px] bg-gradient-to-b from-sky-300/[0.14] via-sky-100/[0.08] to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="hero-light-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] max-w-[100vw] h-[300px] bg-gradient-to-r from-white/30 via-sky-300/[0.18] to-sky-100/[0.1] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] max-w-[80vw] h-[350px] bg-blue-300/[0.07] rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Ambient Light Particles / Sparkles */}
      <div className="sparkle-particle absolute top-[28%] left-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)] pointer-events-none" />
      <div className="sparkle-particle absolute top-[34%] right-[16%] w-2 h-2 rounded-full bg-sky-200/90 shadow-[0_0_10px_rgba(56,189,248,0.7)] pointer-events-none [animation-delay:1.5s]" />
      <div className="sparkle-particle absolute top-[52%] left-[12%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.75)] pointer-events-none [animation-delay:2.8s]" />
      <div className="sparkle-particle absolute top-[48%] right-[18%] w-1.5 h-1.5 rounded-full bg-sky-300/80 shadow-[0_0_8px_rgba(125,211,252,0.7)] pointer-events-none [animation-delay:0.8s]" />

      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* Hero Center Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center my-auto px-1 sm:px-4 py-4">
        
        {/* Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DCEAF5] shadow-[0_2px_10px_rgba(2,132,199,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38bdf8]" />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#0284C7] uppercase">
            PREP STUDY LAB
          </span>
        </motion.div>

        {/* Responsive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif w-full max-w-full font-normal tracking-tight text-[#0F172A] leading-[1.08] uppercase text-balance px-2 sm:px-0"
          style={{
            fontSize: 'clamp(1.85rem, 8.5vw, 5.2rem)',
            overflowWrap: 'normal',
          }}
        >
          <span className="block">PREPARE</span>
          <span className="text-headline-shine italic font-light block">WITH PRECISION</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 w-full max-w-[330px] sm:max-w-[560px] lg:max-w-[700px] text-sm sm:text-base lg:text-lg text-[#64748B] font-light leading-relaxed mx-auto text-center px-2"
        >
          Practice verified academic test questions. Test your understanding under strict simulated exam conditions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full px-2"
        >
          {/* Primary CTA */}
          <button
            onClick={onStartPracticing}
            className="group relative overflow-hidden w-full max-w-[360px] sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0284C7] to-[#38BDF8] text-white text-xs font-semibold tracking-[0.16em] uppercase border-t border-white/45 shadow-[0_8px_25px_rgba(56,189,248,0.28)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.38)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] -translate-x-[250%] group-hover:translate-x-[450%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">START PRACTICING</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA: Browse Tests */}
          <button
            onClick={onViewTests}
            className="group relative overflow-hidden w-full max-w-[360px] sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#0F172A] text-xs font-semibold tracking-[0.16em] uppercase border border-[#DCEAF5] hover:bg-[#F0F9FF] hover:border-[#38BDF8] hover:text-[#0284C7] transition-all duration-300 shadow-[0_4px_16px_rgba(2,132,199,0.06)] hover:shadow-[0_6px_20px_rgba(56,189,248,0.14)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-sky-200/30 to-transparent skew-x-[-20deg] -translate-x-[250%] group-hover:translate-x-[450%] transition-transform duration-1000 ease-out pointer-events-none" />
            <BookOpen className="relative z-10 w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0284C7] transition-colors" />
            <span className="relative z-10">BROWSE TESTS</span>
          </button>
        </motion.div>

        {/* Responsive Metadata / Statistics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 sm:mt-14 w-full max-w-[340px] sm:max-w-none mx-auto"
        >
          {/* Mobile Layout: Row of courses & questions, centered exam simulator below */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs text-[#64748B] tracking-[0.14em] uppercase font-mono">
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                <span>{totalCourses} COURSES</span>
              </div>
              <div className="w-[1px] h-3 bg-[#DCEAF5]" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                <span>{totalQuestions} CURATED QUESTIONS</span>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-3 bg-[#DCEAF5]" />
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
              <span>EXAM SIMULATOR</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive Footer with Creator Signature as the Final Element */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-5 sm:gap-6 pt-8 sm:pt-10 border-t border-[#DCEAF5] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#64748B]">
        {/* Top Footer Navigation / Branding */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="font-semibold text-[#0F172A]">PREP STUDY LAB</span>
            <span className="hidden sm:inline text-[#94A3B8]">•</span>
            <span className="text-[#64748B]">Academic Performance Suite</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-[#64748B]">
            <span>Practice Suite</span>
            <span className="hidden sm:inline text-[#94A3B8]">•</span>
            <span>Exam Simulation</span>
          </div>
        </div>

        {/* Creator Signature Inside Premium Glass Badge — STRICTLY THE FINAL VISUAL ELEMENT */}
        <div className="w-full flex justify-center pt-1 sm:pt-2">
          <div className="relative overflow-hidden inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl sm:rounded-full bg-white/90 backdrop-blur-md border border-[#BAE6FD]/80 shadow-[0_4px_24px_rgba(56,189,248,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] max-w-[calc(100vw-32px)]">
            {/* Subtle Animated Glass Light Reflection Sweep */}
            <span className="creator-badge-shine absolute inset-0 w-1/3 h-full pointer-events-none" />

            {/* Centered Creator Signature */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="font-sans uppercase font-medium text-[9px] sm:text-[10px] tracking-[0.22em] text-[#7DD3FC] whitespace-nowrap">
                BUILD AND DEVELOPED BY
              </span>
              <span className="font-creator uppercase text-base sm:text-lg text-[#7DD3FC] tracking-wider leading-none whitespace-nowrap">
                HAFI & SANIA
              </span>
            </div>

            {/* Tiny Four-Point Sparkle at far right */}
            <svg
              className="relative z-10 w-2 h-2 text-[#BAE6FD] creator-sparkle shrink-0 ml-2.5 self-center"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
          </div>
        </div>
      </footer>
    </section>
  );
};
