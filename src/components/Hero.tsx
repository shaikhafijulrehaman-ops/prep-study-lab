import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, UploadCloud, BookOpen } from 'lucide-react';

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
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-32 pb-12 overflow-hidden select-none bg-[#F8FBFF]">
      {/* Subtle Sky Blue & Luminous Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-gradient-to-b from-sky-300/[0.14] via-sky-100/[0.08] to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="hero-light-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[300px] bg-gradient-to-r from-white/30 via-sky-300/[0.18] to-sky-100/[0.1] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-blue-300/[0.07] rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Ambient Light Particles / Sparkles */}
      <div className="sparkle-particle absolute top-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)] pointer-events-none" />
      <div className="sparkle-particle absolute top-[34%] right-[20%] w-2 h-2 rounded-full bg-sky-200/90 shadow-[0_0_10px_rgba(56,189,248,0.7)] pointer-events-none [animation-delay:1.5s]" />
      <div className="sparkle-particle absolute top-[52%] left-[17%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.75)] pointer-events-none [animation-delay:2.8s]" />
      <div className="sparkle-particle absolute top-[48%] right-[24%] w-1.5 h-1.5 rounded-full bg-sky-300/80 shadow-[0_0_8px_rgba(125,211,252,0.7)] pointer-events-none [animation-delay:0.8s]" />
      <div className="sparkle-particle absolute top-[22%] right-[36%] w-1 h-1 rounded-full bg-white/90 shadow-[0_0_5px_rgba(255,255,255,0.65)] pointer-events-none [animation-delay:3.2s]" />

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
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DCEAF5] shadow-[0_2px_10px_rgba(2,132,199,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38bdf8]" />
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
          <span className="text-headline-shine italic font-light">WITH PRECISION</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base sm:text-lg text-[#64748B] font-light leading-relaxed"
        >
          Practice verified academic test questions. Test your understanding under strict simulated exam conditions.
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
            className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0284C7] to-[#38BDF8] text-white text-xs font-semibold tracking-[0.16em] uppercase border-t border-white/45 shadow-[0_8px_25px_rgba(56,189,248,0.28)] hover:shadow-[0_12px_32px_rgba(56,189,248,0.38)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Narrow white/transparent highlight sweep from left to right on hover */}
            <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] -translate-x-[250%] group-hover:translate-x-[450%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">START PRACTICING</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA: Browse Tests */}
          <button
            onClick={onViewTests}
            className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0F172A] text-xs font-semibold tracking-[0.16em] uppercase border border-[#DCEAF5] hover:bg-[#F0F9FF] hover:border-[#38BDF8] hover:text-[#0284C7] transition-all duration-300 shadow-[0_4px_16px_rgba(2,132,199,0.06)] hover:shadow-[0_6px_20px_rgba(56,189,248,0.14)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-sky-200/30 to-transparent skew-x-[-20deg] -translate-x-[250%] group-hover:translate-x-[450%] transition-transform duration-1000 ease-out pointer-events-none" />
            <BookOpen className="relative z-10 w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0284C7] transition-colors" />
            <span className="relative z-10">BROWSE TESTS</span>
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

      {/* Minimal Footer with Creator Credit */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#DCEAF5] text-[11px] tracking-[0.2em] uppercase text-[#64748B]">
        <div className="flex items-center gap-2">
          <span>PREP STUDY LAB</span>
          <span>•</span>
          <span>ACADEMIC PERFORMANCE SUITE</span>
        </div>

        {/* Creator Credit Inside Premium Glass Badge */}
        <div className="my-3 sm:my-0 flex justify-center">
          <div className="relative overflow-hidden inline-flex items-center gap-2.5 px-5 py-1.5 sm:py-2 rounded-full bg-[#F8FCFF]/90 backdrop-blur-md border border-[#BAE6FD]/70 shadow-[0_4px_20px_rgba(56,189,248,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)]">
            {/* Subtle Animated Glass Light Reflection Sweep */}
            <span className="creator-badge-shine absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

            {/* DESIGNED & BUILT BY */}
            <span className="relative z-10 font-sans uppercase font-medium text-[10px] sm:text-[10.5px] tracking-[0.14em] text-[#527E9F]">
              DESIGNED &amp; BUILT BY
            </span>

            {/* Hafi & Sania */}
            <span className="relative z-10 font-editorial italic font-medium text-[13.5px] sm:text-[14px] text-[#0284C7] tracking-normal">
              Hafi &amp; Sania
            </span>

            {/* Tiny Four-Point Sparkle */}
            <svg
              className="relative z-10 w-2.5 h-2.5 text-[#38BDF8] creator-sparkle"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
            </svg>
          </div>
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
