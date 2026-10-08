import React, { useState, useEffect, useRef } from 'react';

interface StatementItem {
  id: string;
  stepNumber: string;
  tag: string;
  phrase: string;
  subtext: string;
  metric: string;
  bgUrl: string;
}

const STATEMENTS: StatementItem[] = [
  {
    id: 'create',
    stepNumber: '01',
    tag: 'CREATION',
    phrase: 'WE CREATE.',
    subtext: 'Cinema-grade visual storytelling engineered to stop the infinite scroll and command cultural attention.',
    metric: '100% In-House Production',
    bgUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'strategize',
    stepNumber: '02',
    tag: 'STRATEGY',
    phrase: 'WE STRATEGIZE.',
    subtext: 'Translating commercial business goals, consumer insights, and category gaps into bold creative directions.',
    metric: 'Data-Backed Briefs',
    bgUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'execute',
    stepNumber: '03',
    tag: 'EXECUTION',
    phrase: 'WE EXECUTE.',
    subtext: 'Fast-turnaround on-ground crews, live event war rooms, DaVinci color grading, and multi-platform drops.',
    metric: '< 45-Min Social Drops',
    bgUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'amplify',
    stepNumber: '04',
    tag: 'DISTRIBUTION',
    phrase: 'WE AMPLIFY.',
    subtext: 'Precision social media distribution across Instagram Reels, TikTok, YouTube, Meta ads, and digital channels.',
    metric: '10M+ Organic Reach',
    bgUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'measure',
    stepNumber: '05',
    tag: 'ATTRIBUTION',
    phrase: 'WE MEASURE.',
    subtext: 'Every reel, campaign asset, and ad spend is audited against real commercial benchmarks and engagement lifts.',
    metric: 'Verified Attributions',
    bgUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'grow',
    stepNumber: '06',
    tag: 'SCALE',
    phrase: 'WE GROW.',
    subtext: 'Turning first-time viewers into loyal brand advocates, active customers, and market-leading market share.',
    metric: '+142% Avg Brand Lift',
    bgUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=80'
  }
];

export const BrandStatementSequence: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Directly track scroll position inside the pinned track with requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const maxScroll = trackHeight - viewportHeight;

      if (maxScroll <= 0) return;

      // Distance from top of track to top of viewport
      const scrollDistance = -rect.top;
      const normalized = Math.max(0, Math.min(1, scrollDistance / maxScroll));
      const currentProgress = normalized * (STATEMENTS.length - 1);
      
      setProgress(currentProgress);
    };

    const onScrollOrRaf = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollOrRaf, { passive: true });
    window.addEventListener('resize', onScrollOrRaf, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScrollOrRaf);
      window.removeEventListener('resize', onScrollOrRaf);
    };
  }, []);

  // Smooth manual scroll to a specific slide
  const scrollToSlide = (targetIdx: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const maxScroll = track.offsetHeight - window.innerHeight;
    const targetOffset = trackTop + (targetIdx / (STATEMENTS.length - 1)) * maxScroll;
    
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(targetOffset, { duration: 0.9 });
    } else {
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
  };

  const activeSlideIndex = Math.min(Math.round(progress), STATEMENTS.length - 1);
  const activeStatement = STATEMENTS[activeSlideIndex];

  const handlePrev = () => {
    const prevIdx = Math.max(0, activeSlideIndex - 1);
    scrollToSlide(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(STATEMENTS.length - 1, activeSlideIndex + 1);
    scrollToSlide(nextIdx);
  };

  // Keyboard navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const nextTarget = Math.min(STATEMENTS.length - 1, activeSlideIndex + 1);
        if (nextTarget !== activeSlideIndex) {
          e.preventDefault();
          scrollToSlide(nextTarget);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prevTarget = Math.max(0, activeSlideIndex - 1);
        if (prevTarget !== activeSlideIndex) {
          e.preventDefault();
          scrollToSlide(prevTarget);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlideIndex]);

  return (
    <section 
      ref={trackRef}
      id="philosophy"
      style={{ height: `${STATEMENTS.length * 100}vh` }}
      className="relative border-b border-white/10 select-none bg-[#0c0e0c]"
    >
      {/* 100vh Sticky Viewport Presentation Pin */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* ================= BACKGROUND STACK WITH POWERPOINT-STYLE WIPE ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {STATEMENTS.map((item, idx) => {
            // Calculate wipe progress for incoming slide over previous slide
            // Slide 0 is the base canvas: inset(0 0 0 0)
            const localProgress = progress - (idx - 1);
            const isComplete = localProgress >= 1;
            const isActivelyWiping = localProgress > 0 && localProgress < 1;
            const isNotStarted = localProgress <= 0;

            let leftInsetPercent = 0;
            if (idx === 0) {
              leftInsetPercent = 0;
            } else if (isNotStarted) {
              leftInsetPercent = 100;
            } else if (isComplete) {
              leftInsetPercent = 0;
            } else {
              // Right-to-Left wipe: left boundary starts at 100% and wipes down to 0%
              leftInsetPercent = (1 - localProgress) * 100;
            }

            const isVisible = idx === 0 || !isNotStarted;
            // Subtle cinematic image settle scale: from 1.06 settling to 1.0
            const currentScale = idx === 0 
              ? 1 
              : 1.06 - 0.06 * Math.min(1, Math.max(0, localProgress));

            return (
              <React.Fragment key={item.id}>
                {/* Wiped Slide Layer */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{
                    zIndex: 10 + idx,
                    clipPath: `inset(0 0 0 ${leftInsetPercent}%)`,
                    WebkitClipPath: `inset(0 0 0 ${leftInsetPercent}%)`,
                    visibility: isVisible ? 'visible' : 'hidden',
                    willChange: isActivelyWiping ? 'clip-path' : 'auto',
                  }}
                >
                  {/* Background Image with Settle Effect */}
                  <img
                    src={item.bgUrl}
                    alt={item.phrase}
                    className="w-full h-full object-cover object-center filter contrast-125 brightness-80"
                    style={{
                      transform: `scale(${currentScale})`,
                      transition: 'transform 0.08s ease-out'
                    }}
                  />

                  {/* High-contrast dark gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/65 to-[#0c0e0c]/85" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                  {/* Centered Typography Composition for this slide */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    
                    {/* Phase Pill */}
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs font-bold text-[#dfff24] tracking-widest uppercase shadow-xl">
                        Phase {item.stepNumber} · {item.tag}
                      </span>
                    </div>

                    {/* Dominant Kinetic Headline */}
                    <div className="min-h-[100px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center">
                      <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                        {item.phrase}
                      </h2>
                    </div>

                    {/* Narrative & Metric */}
                    <div className="mt-6 sm:mt-8 max-w-2xl mx-auto space-y-4">
                      <p className="text-base sm:text-xl text-zinc-200 font-normal leading-relaxed drop-shadow-md">
                        {item.subtext}
                      </p>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#dfff24]/40 text-xs font-bold text-[#dfff24] shadow-2xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
                        <span>{item.metric}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Tactile Vertical Wipe Blade Edge Indicator */}
                {isActivelyWiping && (
                  <div
                    className="absolute top-0 bottom-0 pointer-events-none z-30"
                    style={{
                      left: `${leftInsetPercent}%`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {/* Glowing vertical line marking the PowerPoint wipe edge */}
                    <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#dfff24] to-transparent shadow-[0_0_20px_#dfff24]" />
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-black/90 border border-[#dfff24] flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-ping" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* ================= FIXED TOP NAVIGATION BAR (OVERLAY Z-50) ================= */}
        <div className="relative z-50 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                Agency Operating Philosophy
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                Scroll Wipe Transition
              </span>
            </div>

            {/* Slide Index Counter & Minimal Discreet Arrows */}
            <div className="flex items-center gap-4 text-xs">
              <span className="text-zinc-300 font-bold tracking-wider font-mono">
                {activeStatement.stepNumber} / 0{STATEMENTS.length}
              </span>

              {/* Single pair of discreet manual arrow controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  type="button"
                  disabled={activeSlideIndex === 0}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-25 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  disabled={activeSlideIndex === STATEMENTS.length - 1}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-25 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ================= FIXED BOTTOM PROGRESS STRIP (OVERLAY Z-50) ================= */}
        {/* Clean minimal progress indicator — No Resume buttons, no autoplay controls */}
        <div className="relative z-50 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Scroll Progress Bar */}
            <div className="w-full sm:w-64 bg-white/10 h-1 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-[#dfff24] rounded-full transition-all duration-75"
                style={{
                  width: `${((progress) / (STATEMENTS.length - 1)) * 100}%`
                }}
              />
            </div>

            {/* Minimal Progress Indicator Dots (01 — 02 — 03 — 04 — 05 — 06) */}
            <div className="flex items-center gap-2">
              {STATEMENTS.map((item, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSlide(idx)}
                    type="button"
                    aria-label={`Jump to philosophy slide ${idx + 1}`}
                    className={`group flex items-center gap-1.5 py-1 px-2.5 rounded-full transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-white/15 text-[#dfff24] border border-[#dfff24]/40 font-bold' 
                        : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-[#dfff24] scale-125' : 'bg-white/20 group-hover:bg-white/40'
                    }`} />
                    <span className="text-[11px] font-bold">
                      {item.stepNumber}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Subtle Scroll Hint */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
              <span>Scroll to wipe</span>
              <span className="text-[#dfff24] animate-bounce">↓</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
