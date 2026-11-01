import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Sizzling Flame & Grill Grate Emblem */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-lg bg-gradient-to-br from-[#1C1C22] to-[#0A0A0C] border border-[#F59E0B]/40 p-1 flex items-center justify-center shadow-lg relative group`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grill bottom bowl */}
          <path
            d="M6 24C6 31.732 12.268 38 20 38C27.732 38 34 31.732 34 24H6Z"
            fill="#27272E"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          {/* Grill grate lines */}
          <line x1="10" y1="24" x2="30" y2="24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="28" x2="28" y2="28" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          
          {/* Sizzling Fire Flame */}
          <path
            d="M20 3C20 3 24 9 24 14C24 17 22.5 19 20 20C17.5 19 16 17 16 14C16 9 20 3 20 3Z"
            fill="url(#fireGradient)"
          />
          <path
            d="M23 10C23 10 27 14 27 17C27 19.5 25.5 21 23.5 21.5C25 19.5 25 17 23.5 15C22 13 23 10 23 10Z"
            fill="#FBBF24"
            opacity="0.9"
          />
          <path
            d="M17 10C17 10 13 14 13 17C13 19.5 14.5 21 16.5 21.5C15 19.5 15 17 16.5 15C18 13 17 10 17 10Z"
            fill="#EF4444"
            opacity="0.85"
          />
          
          <defs>
            <linearGradient id="fireGradient" x1="20" y1="3" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading tracking-wider font-bold text-white uppercase leading-none ${textSizes[size]}`}
          >
            SIZZLING <span className="text-[#F59E0B]">GRILL</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#A3A3B2] font-semibold mt-0.5">
            Military Road · Sukkur
          </span>
        )}
      </div>
    </div>
  );
};
