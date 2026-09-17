import React from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, BookOpen, BarChart3, User as UserIcon, LogOut, ShieldCheck } from 'lucide-react';
import { User } from '../types';

export type NavTab = 'home' | 'tests' | 'courses' | 'progress';

interface NavigationProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  currentUser,
  onOpenAuth,
  onLogout,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'tests', label: 'Tests', icon: FileText },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full glass-dock border border-[#DCEAF5] shadow-[0_12px_32px_-8px_rgba(2,132,199,0.1)] bg-white/85 backdrop-blur-2xl"
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                title={item.label}
                aria-label={item.label}
                className={`relative p-2.5 rounded-full text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
                  isActive ? 'text-[#0284C7]' : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#EFF8FF] border border-[#38BDF8]/40 shadow-[0_2px_10px_rgba(56,189,248,0.2)]"
                  />
                )}
                <span className="relative z-10 block">
                  <Icon className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-[#DCEAF5] my-auto" />


        {/* User Account / Auth Trigger */}
        <div className="flex items-center pr-1">
          {currentUser ? (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-[#0F172A] px-2.5 py-1 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] truncate max-w-[120px]">
                {currentUser.name}
              </span>
              <button
                onClick={onLogout}
                title="Sign out"
                aria-label="Sign out"
                className="p-2 rounded-full text-[#64748B] hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0284C7] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0369a1] transition-all shadow-[0_2px_8px_rgba(2,132,199,0.2)]"
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
