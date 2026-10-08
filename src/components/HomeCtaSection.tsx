import React from 'react';

interface HomeCtaSectionProps {
  onNavigateToContact: () => void;
  onOpenProjectInquiry: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({
  onNavigateToContact,
  onOpenProjectInquiry,
}) => {
  return (
    <section className="py-24 sm:py-32 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0c0e0c] via-black to-[#0c0e0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-ping" />
          <span>ACCEPTING SELECT COMMERCIAL BRIEFS FOR 2026</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] max-w-5xl mx-auto mb-8">
          READY TO TURN AUDIENCE ATTENTION <br className="hidden sm:inline" />
          INTO <span className="text-[#dfff24]">MEASURABLE COMMERCIAL GROWTH</span>?
        </h2>

        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          From full-scale television commercials to viral social campaigns and retainer channel growth, 
          let's engineer something iconic together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenProjectInquiry}
            type="button"
            className="px-8 py-4 rounded-full bg-[#dfff24] hover:bg-white text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 cursor-pointer"
          >
            Start a Project Brief →
          </button>

          <button
            onClick={onNavigateToContact}
            type="button"
            className="px-8 py-4 rounded-full glass-card border border-white/15 hover:border-white/40 text-white font-bold text-sm uppercase tracking-wider transition-all hover:bg-white/5 cursor-pointer"
          >
            Visit Colombo Studio
          </button>
        </div>

      </div>
    </section>
  );
};
