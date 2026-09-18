import React from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, BookOpen, BarChart3, User as UserIcon, LogOut } from 'lucide-react';
import { User } from '../types';

export type NavTab = 'home' | 'tests' | 'courses' | 'progress';

interface NavigationProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onNameClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  currentUser,
  onOpenAuth,
  onLogout,
  onNameClick,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'tests', label: 'Tests', icon: FileText },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full glass-dock border border-[#DCEAF5] shadow-[0_12px_32px_-8px_rgba(2,132,199,0.1)] bg-white/90 backdrop-blur-2xl max-w-[calc(100vw-16px)] sm:max-w-none"
      >
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                title={item.label}
                aria-label={item.label}
                className={`relative p-2 sm:p-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
                  isActive ? 'text-[#0284C7]' : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#EFF8FF] border border-[#38BDF8]/40 shadow-[0_2px_10px_rgba(56,189,248,0.2)] overflow-hidden"
                  >
                    {/* Animated reflective highlight that moves slowly across active pill */}
                    <span className="dock-active-pill-shine absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                  </motion.div>
                )}
                <span className="relative z-10 block">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-3.5 sm:h-4 w-[1px] bg-[#DCEAF5] my-auto" />

        {/* User Account / Auth Trigger */}
        <div className="flex items-center pr-0.5 sm:pr-1">
          {currentUser ? (
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={onNameClick}
                title={currentUser.role === 'admin' ? 'Open Admin Dashboard' : 'View Profile'}
                className="text-[10px] sm:text-xs font-mono text-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#EFF8FF] border border-[#DCEAF5] truncate max-w-[72px] sm:max-w-[120px] cursor-pointer hover:bg-[#DCEAF5] hover:border-[#38BDF8]/50 transition-all"
              >
                {currentUser.name}
              </button>
              <button
                onClick={onLogout}
                title="Sign out"
                aria-label="Sign out"
                className="p-1.5 sm:p-2 rounded-full text-[#64748B] hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOut className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0284C7] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-[#0369a1] transition-all shadow-[0_2px_8px_rgba(2,132,199,0.2)]"
            >
              <UserIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
