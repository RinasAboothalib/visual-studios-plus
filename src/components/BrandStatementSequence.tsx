import React, { useRef, useState, useEffect } from 'react';

interface StatementItem {
  phrase: string;
  subtext: string;
  metric: string;
  bgUrl: string;
}

const STATEMENTS: StatementItem[] = [
  {
    phrase: 'WE CREATE.',
    subtext: 'Cinema-grade visual storytelling engineered to stop the infinite scroll.',
    metric: '100% In-House Production',
    bgUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80'
  },
  {
    phrase: 'WE STRATEGIZE.',
    subtext: 'Translating commercial business goals into cultural relevance.',
    metric: 'Data-Backed Creative Briefs',
    bgUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80'
  },
  {
    phrase: 'WE EXECUTE.',
    subtext: 'Fast-turnaround on-ground crews, real-time grading, and multi-format deployment.',
    metric: '< 45-Min Turnarounds',
    bgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    phrase: 'WE AMPLIFY.',
    subtext: 'Precision social media distribution across Meta, TikTok, YouTube, and digital feeds.',
    metric: '10M+ Organic Reach',
    bgUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1600&q=80'
  },
  {
    phrase: 'WE MEASURE.',
    subtext: 'Every reel, campaign, and ad spend is audited for engagement and conversion return.',
    metric: 'Full Attribution Funnels',
    bgUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80'
  },
  {
    phrase: 'WE GROW.',
    subtext: 'Turning first-time viewers into loyal brand advocates and market-leading market share.',
    metric: '+142% Avg Brand Lift',
    bgUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80'
  }
];

export const BrandStatementSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute active statement index
  const totalSteps = STATEMENTS.length;
  const rawIndex = scrollProgress * (totalSteps - 1);
  const activeIndex = Math.min(Math.floor(rawIndex), totalSteps - 1);

  return (
    <section 
      ref={containerRef}
      id="statement" 
      className="relative h-[280vh] bg-[#0c0e0c]"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden glass-panel border-y border-white/10">
        
        {/* Dynamic Background Image Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {STATEMENTS.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.phrase}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{
                  opacity: isCurrent ? 0.22 : 0,
                  transform: `scale(${1 + scrollProgress * 0.08})`
                }}
              >
                <img
                  src={item.bgUrl}
                  alt={item.phrase}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125"
                />
              </div>
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/60 to-[#0c0e0c]" />
        </div>

        {/* Top Header Badge */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
            <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
              Agency Operating Philosophy
            </span>
          </div>

          <div className="text-xs text-zinc-400 font-semibold">
            0{activeIndex + 1} / 0{totalSteps}
          </div>
        </div>

        {/* Central Kinetic Typography Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center">
          <div className="relative h-44 sm:h-56 md:h-64 flex items-center justify-center">
            {STATEMENTS.map((item, idx) => {
              const distance = idx - rawIndex;
              const translateY = distance * 120;
              const opacity = Math.max(1 - Math.abs(distance) * 1.2, 0);
              const scale = 1 - Math.abs(distance) * 0.15;
              const blur = Math.abs(distance) * 4;

              if (opacity <= 0.01) return null;

              return (
                <div
                  key={item.phrase}
                  className="absolute inset-x-0 flex flex-col items-center justify-center transition-all duration-150 ease-out pointer-events-none"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    filter: `blur(${blur}px)`
                  }}
                >
                  <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none">
                    {item.phrase}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Active Statement Supporting Narrative */}
          <div className="mt-8 max-w-2xl mx-auto space-y-3">
            <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed transition-all duration-300">
              {STATEMENTS[activeIndex].subtext}
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full glass-card border border-[#dfff24]/30 text-xs font-bold text-[#dfff24]">
              {STATEMENTS[activeIndex].metric}
            </div>
          </div>
        </div>

        {/* Bottom padding (scroll controller bar removed) */}
        <div className="relative z-10 w-full pb-8" />

      </div>
    </section>
  );
};
