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
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Direct DOM Element Refs for 60/120fps GPU updates without React re-rendering
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headlineRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const narrativeRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active state for discrete indicator pill UI
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Continuous interpolation refs (smooth momentum scrub layer)
  const rawTargetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const activeSlideIndexRef = useRef(0);

  // Preload all background images into GPU memory on mount to guarantee zero flashing
  useEffect(() => {
    STATEMENTS.forEach((item) => {
      const img = new Image();
      img.src = item.bgUrl;
    });
  }, []);

  // Dedicated RAF animation loop with lerp buffer & direct DOM manipulation
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const maxScroll = trackHeight - viewportHeight;

      if (maxScroll <= 0) return;

      const scrollDistance = -rect.top;
      const normalized = Math.max(0, Math.min(1, scrollDistance / maxScroll));
      rawTargetProgressRef.current = normalized * (STATEMENTS.length - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // High performance continuous interpolation loop
    const tick = () => {
      const target = rawTargetProgressRef.current;
      const current = currentProgressRef.current;

      // Silky momentum lerp (~0.09 factor creates an Apple-style continuous scrub cushion)
      const diff = target - current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.092;
      } else {
        currentProgressRef.current = target;
      }

      const p = currentProgressRef.current;
      updateWipeDOM(p);

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Update DOM directly per frame — Zero layout thrashing, zero React re-renders
  const updateWipeDOM = (p: number) => {
    for (let idx = 0; idx < STATEMENTS.length; idx++) {
      const slideEl = slideRefs.current[idx];
      const imgEl = imageRefs.current[idx];
      const badgeEl = badgeRefs.current[idx];
      const headlineEl = headlineRefs.current[idx];
      const narrativeEl = narrativeRefs.current[idx];
      const metricEl = metricRefs.current[idx];

      if (!slideEl) continue;

      if (idx === 0) {
        // Slide 0: Base canvas, always underneath
        slideEl.style.clipPath = 'inset(0 0 0 0%)';
        slideEl.style.visibility = 'visible';

        // Subtle parallax as slide 1 wipes over it
        const exitProgress = Math.min(1, Math.max(0, p));
        if (imgEl) {
          const s = 1 - exitProgress * 0.02;
          const x = -exitProgress * 20;
          imgEl.style.transform = `scale(${s.toFixed(4)}) translateX(${x.toFixed(1)}px)`;
        }
        if (headlineEl) {
          headlineEl.style.opacity = `${(1 - exitProgress * 0.8).toFixed(3)}`;
          headlineEl.style.transform = `translateY(${(-exitProgress * 15).toFixed(1)}px)`;
        }
      } else {
        // Incoming slide over previous slide: wipes RIGHT -> LEFT
        const localProgress = p - (idx - 1);

        if (localProgress <= 0) {
          // Off to the right
          slideEl.style.clipPath = 'inset(0 0 0 100%)';
          slideEl.style.visibility = 'hidden';
        } else if (localProgress >= 1) {
          // Fully wiped in
          slideEl.style.clipPath = 'inset(0 0 0 0%)';
          slideEl.style.visibility = 'visible';

          // Exit drift if next slide wipes over this one
          const nextLocal = p - idx;
          const nextExit = Math.min(1, Math.max(0, nextLocal));
          if (imgEl) {
            const s = 1 - nextExit * 0.02;
            const x = -nextExit * 20;
            imgEl.style.transform = `scale(${s.toFixed(4)}) translateX(${x.toFixed(1)}px)`;
          }
          if (headlineEl) {
            headlineEl.style.opacity = `${(1 - nextExit * 0.8).toFixed(3)}`;
            headlineEl.style.transform = `translateY(${(-nextExit * 15).toFixed(1)}px)`;
          }
          if (badgeEl) badgeEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
          if (narrativeEl) narrativeEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
          if (metricEl) metricEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
        } else {
          // ACTIVELY WIPING: Progressive clip-path from Right to Left
          const leftInset = (1 - localProgress) * 100;
          slideEl.style.clipPath = `inset(0 0 0 ${leftInset.toFixed(3)}%)`;
          slideEl.style.visibility = 'visible';

          // Incoming Image: scale(1.05) settling to scale(1.0) with subtle parallax
          if (imgEl) {
            const scale = 1.05 - 0.05 * localProgress;
            const xShift = (1 - localProgress) * 20;
            imgEl.style.transform = `scale(${scale.toFixed(4)}) translateX(${xShift.toFixed(1)}px)`;
          }

          // Incoming Headline: subtle masked reveal & upward movement
          if (headlineEl) {
            const y = (1 - localProgress) * 24;
            const op = Math.min(1, localProgress * 1.4);
            headlineEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            headlineEl.style.opacity = op.toFixed(3);
          }

          // Incoming Stage Badge: reveals early
          if (badgeEl) {
            const y = (1 - localProgress) * 16;
            const op = Math.min(1, localProgress * 1.8);
            badgeEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            badgeEl.style.opacity = op.toFixed(3);
          }

          // Incoming Narrative Subtext: fades & rises
          if (narrativeEl) {
            const y = (1 - localProgress) * 18;
            const op = Math.max(0, (localProgress - 0.1) * 1.3);
            narrativeEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            narrativeEl.style.opacity = op.toFixed(3);
          }

          // Incoming Metric Pill: delayed subtle fade
          if (metricEl) {
            const y = (1 - localProgress) * 14;
            const op = Math.max(0, (localProgress - 0.2) * 1.4);
            metricEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            metricEl.style.opacity = op.toFixed(3);
          }
        }
      }
    }

    // Update real-time progress line
    if (progressBarRef.current) {
      const pct = (p / (STATEMENTS.length - 1)) * 100;
      progressBarRef.current.style.width = `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
    }

    // Update discrete integer index only when crossing threshold
    const roundedIndex = Math.min(Math.round(p), STATEMENTS.length - 1);
    if (roundedIndex !== activeSlideIndexRef.current) {
      activeSlideIndexRef.current = roundedIndex;
      setActiveSlideIndex(roundedIndex);

      if (counterRef.current) {
        counterRef.current.textContent = `0${roundedIndex + 1} / 0${STATEMENTS.length}`;
      }
    }
  };

  // Smooth momentum scroll to a specific slide (shared animation source of truth)
  const scrollToSlide = (targetIdx: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const maxScroll = track.offsetHeight - window.innerHeight;
    const targetOffset = trackTop + (targetIdx / (STATEMENTS.length - 1)) * maxScroll;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(targetOffset, { duration: 0.95 });
    } else {
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const prevIdx = Math.max(0, activeSlideIndex - 1);
    scrollToSlide(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(STATEMENTS.length - 1, activeSlideIndex + 1);
    scrollToSlide(nextIdx);
  };

  // Keyboard navigation when presentation section is in viewport
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
        
        {/* ================= BACKGROUND STACK WITH FLUID POWERPOINT WIPE ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {STATEMENTS.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                slideRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
              style={{
                zIndex: 10 + idx,
                clipPath: idx === 0 ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)',
                visibility: idx === 0 ? 'visible' : 'hidden',
              }}
            >
              {/* High-Resolution Background Image with Settle Effect */}
              <img
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                src={item.bgUrl}
                alt={item.phrase}
                loading="eager"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-80 will-change-transform"
              />

              {/* High-contrast dark gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/60 to-[#0c0e0c]/85 pointer-events-none" />
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] pointer-events-none" />

              {/* Centered Editorial Typography Composition */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none">
                
                {/* Phase Badge */}
                <div 
                  ref={(el) => {
                    badgeRefs.current[idx] = el;
                  }}
                  className="mb-4 sm:mb-6 will-change-transform"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs font-bold text-[#dfff24] tracking-widest uppercase shadow-xl">
                    Phase {item.stepNumber} · {item.tag}
                  </span>
                </div>

                {/* Dominant Kinetic Headline */}
                <div className="min-h-[100px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center">
                  <h2 
                    ref={(el) => {
                      headlineRefs.current[idx] = el;
                    }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl will-change-transform"
                  >
                    {item.phrase}
                  </h2>
                </div>

                {/* Narrative & Metric */}
                <div className="mt-6 sm:mt-8 max-w-2xl mx-auto space-y-4">
                  <p 
                    ref={(el) => {
                      narrativeRefs.current[idx] = el;
                    }}
                    className="text-base sm:text-xl text-zinc-200 font-normal leading-relaxed drop-shadow-md will-change-transform"
                  >
                    {item.subtext}
                  </p>

                  <div 
                    ref={(el) => {
                      metricRefs.current[idx] = el;
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#dfff24]/40 text-xs font-bold text-[#dfff24] shadow-2xl will-change-transform"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
                    <span>{item.metric}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= FIXED TOP NAVIGATION OVERLAY (Z-50) ================= */}
        <div className="relative z-50 pt-20 sm:pt-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-white/10 flex-nowrap w-full">
            
            {/* Header Badge: Fits in one line cleanly on mobile */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-card border border-white/10 shrink min-w-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#dfff24] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#dfff24] font-bold whitespace-nowrap">
                <span className="hidden sm:inline">Agency Operating Philosophy</span>
                <span className="sm:hidden">Philosophy</span>
              </span>
              <span className="text-zinc-600 hidden md:inline">|</span>
              <span className="text-xs text-zinc-300 font-medium whitespace-nowrap hidden md:inline">
                Scroll Wipe Transition
              </span>
            </div>

            {/* Slide Index Counter & Minimal Discreet Arrows: Single line */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs shrink-0">
              <span 
                ref={counterRef}
                className="text-zinc-300 font-bold tracking-wider font-mono text-[11px] sm:text-xs whitespace-nowrap"
              >
                0{activeSlideIndex + 1} / 0{STATEMENTS.length}
              </span>

              {/* Single pair of discreet manual arrow controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handlePrev}
                  type="button"
                  disabled={activeSlideIndex === 0}
                  aria-label="Previous slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-20 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-xs"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  disabled={activeSlideIndex === STATEMENTS.length - 1}
                  aria-label="Next slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-20 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-xs"
                >
                  →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
