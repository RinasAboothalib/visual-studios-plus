import React from 'react';

export const WebsiteBackgroundLogo: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
    >
      {/* Subtle atmospheric radial glow centered on the logo mark */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(223, 255, 36, 0.08) 0%, rgba(12, 14, 12, 0) 70%)'
        }}
      />

      {/* Oversized Website Logo Mark as Ambient Watermark Background */}
      <svg
        viewBox="0 0 920 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[120vw] max-w-[1400px] h-auto opacity-[0.035] text-white transform -rotate-2"
      >
        {/* V glyph */}
        <path
          d="M 140 85 L 265 345 C 272 360 288 360 295 345 L 420 85"
          stroke="currentColor"
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Custom S glyph */}
        <path
          d="M 485 85 C 500 135 550 175 600 215 C 640 250 640 310 595 345 C 555 375 490 370 455 320 C 445 305 445 285 448 260"
          stroke="currentColor"
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Plus sign (+) */}
        <path
          d="M 660 240 L 810 240 M 735 165 L 735 315"
          stroke="#dfff24"
          strokeWidth="38"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};
