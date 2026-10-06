import React from 'react';

interface VSPlusLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  accentColor?: string;
}

export const VSPlusLogo: React.FC<VSPlusLogoProps> = ({
  className = '',
  size = 'md',
  accentColor = '#ffffff',
}) => {
  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-11 sm:h-12',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Exact SVG mark from Rinas's Designs.svg */}
      <svg
        viewBox="0 0 920 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto text-white shrink-0 transition-transform duration-200 group-hover:scale-105`}
        aria-label="VS+ Logo"
      >
        {/* V glyph */}
        <path
          d="M 140 85 L 265 345 C 272 360 288 360 295 345 L 420 85"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Custom S glyph (top swoop down into bottom curve hook) */}
        <path
          d="M 485 85 C 500 135 550 175 600 215 C 640 250 640 310 595 345 C 555 375 490 370 455 320 C 445 305 445 285 448 260"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Plus sign (+) */}
        <path
          d="M 660 240 L 810 240 M 735 165 L 735 315"
          stroke={accentColor || 'currentColor'}
          strokeWidth="34"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};
