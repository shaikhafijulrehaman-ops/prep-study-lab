import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, User as UserIcon, ArrowRight } from 'lucide-react';
import { User } from '../types';
import { login, createAccount } from '../lib/auth';
import { OrbitalInputField } from './OrbitalInputField';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (user: User) => void;
  reasonMessage?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated,
  reasonMessage,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Always reset fields when opening modal or switching state
  useEffect(() => {
    if (isOpen) {
      setRegNumber('');
      setPassword('');
      setConfirmPassword('');
      setError(null);
      setIsUnlocked(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const res = await createAccount(regNumber, password, confirmPassword);
        if (res.success && res.user) {
          setIsSuccess(true);
          setTimeout(() => {
            onAuthenticated(res.user!);
            onClose();
            setIsSuccess(false);
          }, 650);
        } else {
          setError(res.error || 'Failed to create account.');
        }
      } else {
        const res = await login(regNumber, password);
        if (res.success && res.user) {
          setIsSuccess(true);
          setTimeout(() => {
            onAuthenticated(res.user!);
            onClose();
            setIsSuccess(false);
          }, 650);
        } else {
          setError(res.error || 'Invalid registration number or password.');
        }
      }
    } catch (err: any) {
      setError(err?.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchMode = (newMode: 'login' | 'signup') => {
    setMode(newMode);
    setRegNumber('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setIsUnlocked(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Dim Light Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-white border border-[#DCEAF5] shadow-[0_20px_50px_rgba(2,132,199,0.12)] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#DCEAF5] bg-[#EFF8FF]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[#0284C7]">
              {mode === 'login' ? <Lock className="w-5 h-5" /> : <UserIcon className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase text-[#0F172A] font-sans">
                {mode === 'signup' ? 'Create Account' : 'Sign In'}
              </h2>
              <p className="text-[11px] text-[#64748B] font-sans">
                {mode === 'signup'
                  ? 'Enter your registration number and password to register'
                  : 'Enter your registration number and password to continue (new students register automatically)'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reason notice (if specified) */}
        {reasonMessage && (
          <div className="px-6 pt-4">
            <div className="p-3 rounded-2xl bg-[#EFF8FF] border border-[#DCEAF5] text-xs text-[#0284C7] font-medium leading-relaxed">
              {reasonMessage}
            </div>
          </div>
        )}

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className="p-6 space-y-4"
        >
          {/* Decoy trap inputs */}
          <div
            style={{
              position: 'absolute',
              opacity: 0,
              height: 0,
              width: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}
            aria-hidden="true"
          >
            <input type="text" name="browser_decoy_user" tabIndex={-1} autoComplete="username" />
            <input type="password" name="browser_decoy_pass" tabIndex={-1} autoComplete="current-password" />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-medium">
              {error}
            </div>
          )}

          {/* Registration Number Field */}
          <OrbitalInputField
            id="candidate_reg_number"
            name="candidate_reg_number"
            type="text"
            label="Registration Number"
            value={regNumber}
            onChange={(val) => setRegNumber(val.toUpperCase())}
            placeholder={mode === 'signup' ? 'Enter your registration number' : 'Enter registration number'}
            icon={UserIcon}
            isUnlocked={isUnlocked}
            onUnlock={() => setIsUnlocked(true)}
            isError={Boolean(error)}
            isSuccess={isSuccess}
            autoComplete="off"
          />

          {/* Password Field */}
          <OrbitalInputField
            id={mode === 'signup' ? 'candidate_new_password' : 'candidate_password'}
            name={mode === 'signup' ? 'candidate_new_password' : 'candidate_password'}
            type="password"
            label={mode === 'signup' ? 'New Password' : 'Password'}
            value={password}
            onChange={(val) => setPassword(val)}
            placeholder={mode === 'signup' ? 'Create password' : 'Enter password'}
            icon={Lock}
            isUnlocked={isUnlocked}
            onUnlock={() => setIsUnlocked(true)}
            isError={Boolean(error)}
            isSuccess={isSuccess}
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          />

          {/* Confirm Password Field (Signup only) */}
          {mode === 'signup' && (
            <OrbitalInputField
              id="candidate_confirm_password"
              name="candidate_confirm_password"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(val) => setConfirmPassword(val)}
              placeholder="Re-enter password"
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
              className="w-full py-3 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(2,132,199,0.25)] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>
                {isSuccess
                  ? 'Authenticated'
                  : loading
                  ? 'Processing...'
                  : mode === 'signup'
                  ? 'CREATE ACCOUNT'
                  : 'SIGN IN & CONTINUE'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toggle between Login and Signup */}
          <div className="pt-2 text-center text-xs text-[#64748B]">
            {mode === 'signup' ? (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => handleSwitchMode('login')}
                  className="text-[#0284C7] font-semibold hover:underline ml-1"
                >
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => handleSwitchMode('signup')}
                  className="text-[#0284C7] font-semibold hover:underline ml-1"
                >
                  Create Account
                </button>
              </span>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};
