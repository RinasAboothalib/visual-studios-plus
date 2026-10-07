import React from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface FinalCtaSectionProps {
  onOpenProjectInquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenProjectInquiry }) => {
  return (
    <section className="py-32 sm:py-44 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] via-zinc-950 to-black text-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#dfff24]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24] font-bold">
            Start Your Business Transformation
          </span>
        </div>

        {/* Large Cinematic Typography */}
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none">
          LET’S MAKE <br />
          <span className="text-[#dfff24]">SOMETHING</span> <br />
          MATTER.
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From viral social campaigns to 360° commercial films and ongoing retainers, 
          we partner with businesses to create content meant to be experienced.
        </p>

        {/* Action Button: START A PROJECT → */}
        <div className="pt-6">
          <button
            onClick={onOpenProjectInquiry}
            className="group px-10 py-5 rounded-full bg-[#dfff24] text-black font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] hover:bg-white shadow-[0_0_50px_rgba(223,255,36,0.3)] cursor-pointer"
          >
            <span>START A PROJECT</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </button>
        </div>

        {/* Direct Contacts Info */}
        <div className="pt-8 text-xs font-mono text-zinc-300 flex flex-wrap justify-center items-center gap-6">
          <span>Level 1, 36 Haig Road, Colombo 04</span>
          <span>·</span>
          <span>{STUDIO_INFO.email}</span>
          <span>·</span>
          <span>{STUDIO_INFO.phonePrimary}</span>
        </div>

      </div>
    </section>
  );
};
