import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface OrbitalInputFieldProps {
  id: string;
  name: string;
  type: 'text' | 'password';
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  icon: React.ComponentType<{ className?: string }>;
  required?: boolean;
  autoComplete?: string;
  isUnlocked: boolean;
  onUnlock: () => void;
  isError?: boolean;
  isSuccess?: boolean;
}

export const OrbitalInputField: React.FC<OrbitalInputFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = true,
  autoComplete = 'off',
  isUnlocked,
  onUnlock,
  isError = false,
  isSuccess = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = Boolean(value && value.length > 0);

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B]"
      >
        {label}
      </label>

      <div className="relative flex items-center">
        {/* Orbital Icon Container */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-[30px] h-[30px] flex items-center justify-center">
            {/* Base static border ring (visible when not actively orbiting) */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isSuccess
                  ? 'border-2 border-[#0284C7] bg-[#EFF8FF]'
                  : isError
                  ? 'border border-rose-300 bg-rose-50/50'
                  : isFocused
                  ? 'border border-transparent'
                  : hasValue
                  ? 'border border-[#38BDF8]/40 bg-[#F0F9FF]'
                  : 'border border-[#DCEAF5] bg-white'
              }`}
            />

            {/* Soft Ambient Outer Glow during Focus (light sky-blue/cyan) */}
            <div
              className={`absolute -inset-[2.5px] rounded-full blur-[3.5px] pointer-events-none transition-opacity duration-300 ${
                isFocused && !isError && !isSuccess ? 'opacity-40' : 'opacity-0'
              } orbital-ring-active`}
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, rgba(99, 102, 241, 0.25) 240deg, rgba(6, 182, 212, 0.65) 300deg, rgba(56, 189, 248, 0.9) 345deg, #0284C7 360deg)',
              }}
            />

            {/* Continuous Rotating Conic Orbital Ring Layer */}
            <div
              className={`absolute -inset-[2px] rounded-full pointer-events-none transition-opacity duration-300 ${
                isSuccess
                  ? 'opacity-100 orbital-ring-success'
                  : isFocused && !isError
                  ? 'opacity-100 orbital-ring-active'
                  : 'opacity-0'
              }`}
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 160deg, rgba(99, 102, 241, 0.22) 230deg, rgba(6, 182, 212, 0.75) 290deg, rgba(56, 189, 248, 0.95) 340deg, #0284C7 360deg)',
              }}
            />

            {/* Center Static Mask / Island (Leaves exact 2.5px visible ring thickness and keeps the icon completely stable) */}
            <div
              className={`absolute inset-[2.5px] rounded-full z-10 flex items-center justify-center transition-colors duration-200 ${
                isSuccess
                  ? 'bg-[#EFF8FF]'
                  : isError
                  ? 'bg-rose-50/70'
                  : isFocused
                  ? 'bg-white'
                  : hasValue
                  ? 'bg-[#F8FBFF]'
                  : 'bg-white'
              }`}
            >
              {isSuccess ? (
                <Check className="w-3.5 h-3.5 text-[#0284C7] stroke-[2.5]" />
              ) : (
                <Icon
                  className={`w-3.5 h-3.5 transition-colors duration-200 ${
                    isError
                      ? 'text-rose-500'
                      : isFocused
                      ? 'text-[#0284C7]'
                      : hasValue
                      ? 'text-[#0284C7]/85'
                      : 'text-[#94A3B8]'
                  }`}
                />
              )}
            </div>
          </div>
        </div>

        {/* Stable Input Field (does NOT rotate, shake, or pulse) */}
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          autoCorrect="off"
          autoCapitalize={type === 'text' ? 'words' : 'off'}
          spellCheck={false}
          data-lpignore="true"
          data-1p-ignore="true"
          data-form-type="other"
          readOnly={!isUnlocked}
          onFocus={() => {
            onUnlock();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          onClick={() => onUnlock()}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 ${
            isError
              ? 'bg-rose-50/20 border border-rose-300 text-[#0F172A] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/10'
              : isSuccess
              ? 'bg-[#EFF8FF]/30 border border-[#38BDF8] text-[#0F172A]'
              : isFocused
              ? 'bg-white border border-[#38BDF8] text-[#0F172A] shadow-[0_0_0_3px_rgba(56,189,248,0.12)]'
              : hasValue
              ? 'bg-[#F8FBFF] border border-[#38BDF8]/40 text-[#0F172A]'
              : 'bg-[#F8FBFF] border border-[#DCEAF5] text-[#0F172A] placeholder:text-[#94A3B8]'
          }`}
        />
      </div>
    </div>
  );
};
