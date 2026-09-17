import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ArrowLeft, KeyRound, UserPlus } from 'lucide-react';
import { User as UserIcon, Lock } from 'lucide-react';
import { adminLogin, createAdminAccount } from '../../lib/auth';
import { User } from '../../types';
import { OrbitalInputField } from '../OrbitalInputField';

interface AdminLoginViewProps {
  onAdminAuthenticated: (adminUser: User) => void;
  onExitAdmin: () => void;
}

export const AdminLoginView: React.FC<AdminLoginViewProps> = ({
  onAdminAuthenticated,
  onExitAdmin,
}) => {
  const [mode, setMode] = useState<'signin' | 'setup'>('signin');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signin') {
        const res = await adminLogin(identifier, password);
        if (res.success && res.user) {
          setIsSuccess(true);
          setTimeout(() => {
            onAdminAuthenticated(res.user!);
          }, 600);
        } else {
          setError(res.error || 'Administrator credentials invalid.');
        }
      } else {
        if (!identifier.trim() || !password) {
          setError('Please fill in all required fields.');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match.');
          setLoading(false);
          return;
        }
        const res = await createAdminAccount(identifier, password, confirmPassword);
        if (res.success && res.user) {
          setIsSuccess(true);
          setTimeout(() => {
            onAdminAuthenticated(res.user!);
          }, 600);
        } else {
          setError(res.error || 'Could not create administrator account.');
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Administrator authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col justify-center items-center px-4 py-12 select-none font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Exit to Student App */}
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={onExitAdmin}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DCEAF5] text-xs font-semibold tracking-wider text-[#64748B] hover:text-[#0284C7] hover:border-sky-300 transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>STUDENT PLATFORM</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_20px_50px_rgba(2,132,199,0.1)] overflow-hidden"
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-[#DCEAF5] bg-[#EFF8FF]/40 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-[#0284C7] mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-semibold">
            SECURE ACCESS GATEWAY
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#0F172A] uppercase tracking-tight mt-1">
            Administrator Portal
          </h1>
          <p className="text-xs text-[#64748B] font-mono tracking-wide mt-1.5">
            AUTHORIZED COURSE AND TEST MANAGEMENT ONLY
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 flex rounded-xl bg-sky-100/50 p-1 border border-[#DCEAF5]">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                mode === 'signin'
                  ? 'bg-white text-[#0284C7] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Admin Sign In</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('setup');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                mode === 'setup'
                  ? 'bg-white text-[#0284C7] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Setup / Create Admin</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5" autoComplete="off">
          {/* Decoy trap inputs */}
          <div className="sr-only" aria-hidden="true" style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}>
            <input type="text" name="admin_trap_user" tabIndex={-1} autoComplete="username" />
            <input type="password" name="admin_trap_pass" tabIndex={-1} autoComplete="current-password" />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-medium leading-relaxed">
              {error}
            </div>
          )}

          <OrbitalInputField
            id="admin_username"
            name="admin_username"
            type="text"
            label={mode === 'signin' ? 'Administrator Identifier' : 'New Admin Identifier / Name'}
            value={identifier}
            onChange={(val) => setIdentifier(val)}
            placeholder={mode === 'signin' ? 'Enter admin username or email' : 'e.g. admin or professor'}
            icon={UserIcon}
            isUnlocked={isUnlocked}
            onUnlock={() => setIsUnlocked(true)}
            isError={Boolean(error)}
            isSuccess={isSuccess}
            autoComplete="off"
          />

          <OrbitalInputField
            id="admin_access_token"
            name="admin_access_token"
            type="password"
            label="Password"
            value={password}
            onChange={(val) => setPassword(val)}
            placeholder="Enter secure password"
            icon={Lock}
            isUnlocked={isUnlocked}
            onUnlock={() => setIsUnlocked(true)}
            isError={Boolean(error)}
            isSuccess={isSuccess}
            autoComplete="new-password"
          />

          {mode === 'setup' && (
            <OrbitalInputField
              id="admin_confirm_password"
              name="admin_confirm_password"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(val) => setConfirmPassword(val)}
              placeholder="Re-enter password to confirm"
              icon={Lock}
              isUnlocked={isUnlocked}
              onUnlock={() => setIsUnlocked(true)}
              isError={Boolean(error)}
              isSuccess={isSuccess}
              autoComplete="new-password"
            />
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || isSuccess}
              className="w-full py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>
                {isSuccess
                  ? 'Authorized'
                  : loading
                  ? 'Authenticating...'
                  : mode === 'signin'
                  ? 'Sign In to Portal'
                  : 'Register Administrator Account'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-center text-[#94A3B8] font-mono">
            {mode === 'signin'
              ? 'Protected with Supabase Auth role-based authorization'
              : 'Credentials are encrypted with salted SHA-256 and synced to Supabase'}
          </p>
        </form>
      </motion.div>
    </div>
  );
};
