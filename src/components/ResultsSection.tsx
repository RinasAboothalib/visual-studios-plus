import React, { useState, useEffect, useRef } from 'react';
import { CLIENT_PARTNERS } from '../data/projectsData.ts';

interface VerifiableImpactItem {
  id: string;
  client: string;
  category: string;
  metricNumber: string;
  metricLabel: string;
  context: string;
  deliverables: string[];
  imageUrl: string;
  logoUrl?: string;
}

const VERIFIABLE_IMPACTS: VerifiableImpactItem[] = [
  {
    id: 'ponds',
    client: "Pond's (Unilever)",
    category: 'FMCG & Beauty',
    metricNumber: '+142%',
    metricLabel: 'Social Engagement Lift',
    context: 'Viral social launch campaign outperforming all previous category FMCG benchmarks across South Asia with cinema-grade vertical storytelling.',
    deliverables: ['TikTok Viral Hooks', 'High-Fidelity Reel Production', 'Influencer Seeding'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Unilever-A.png',
  },
  {
    id: 'nescafe',
    client: 'Nescafé Gold & CFW',
    category: 'Luxury FMCG & Fashion',
    metricNumber: '1.2M+',
    metricLabel: 'Campaign Reach in 48h',
    context: 'Real-time runway drops and designer coffee storytelling delivered while the catwalk lights were still on, setting an industry speed standard.',
    deliverables: ['<45-Min Runway Edits', 'Instagram Broadcasts', 'Executive Backstage Coverage'],
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Colombo-Fashion-Week-Logo-A.png',
  },
  {
    id: 'munchee',
    client: 'Munchee CBL',
    category: 'FMCG Food & Confectionery',
    metricNumber: '320K+',
    metricLabel: 'Direct Social Interactions',
    context: 'Bespoke AI visual concepts combined with physical stop-motion confectionery films for high-velocity seasonal FMCG campaigns.',
    deliverables: ['Generative AI Concepts', 'Macro Stop-Motion', 'FMCG Digital Ads'],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Munchee-Logo-a.png',
  },
  {
    id: 'cfw',
    client: 'Colombo Fashion Week',
    category: 'International Fashion',
    metricNumber: '20K+',
    metricLabel: 'Engagement Per Video Drop',
    context: 'High-energy on-ground digital video crew capturing Sri Lanka’s premier fashion event with instant publishing and global press syndication.',
    deliverables: ['Live Media War Room', 'Multi-Platform Reels', 'Broadcast Runway Master'],
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Colombo-Fashion-Week-Logo-A.png',
  },
  {
    id: 'ahmad',
    client: 'Ahmad Tea London',
    category: 'Global Beverage',
    metricNumber: '+68%',
    metricLabel: 'YoY Social Follower Growth',
    context: 'End-to-end multi-year channel management retainer establishing a refined global British aesthetic and loyal community across key markets.',
    deliverables: ['Monthly Social Retainer', 'Global Brand Photography', 'Paid Media Strategy'],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Ahmad_Tea_logo-a.png',
  },
  {
    id: 'dankotuwa',
    client: 'Dankotuwa Porcelain',
    category: 'Luxury Tableware',
    metricNumber: '8K',
    metricLabel: 'Photorealistic CGI Fidelity',
    context: 'Architectural fluid simulation and photorealistic 3D product renders designed for global export markets, luxury hospitality, and catalogues.',
    deliverables: ['Houdini Fluid Physics', '8K Cinema Renders', 'Export Catalogues'],
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Dankotuwa-Logo-A.png',
  }
];

interface ResultsSectionProps {
  onOpenProjectInquiry?: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenProjectInquiry }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Direct DOM Element Refs for 60/120fps GPU updates without React re-rendering
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const metricNumRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const metricTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active state for discrete UI indicators
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Continuous interpolation refs (smooth momentum scrub layer)
  const rawTargetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const activeSlideIndexRef = useRef(0);

  // Preload all background images into GPU memory on mount to guarantee zero flashing
  useEffect(() => {
    VERIFIABLE_IMPACTS.forEach((item) => {
      const img = new Image();
      img.src = item.imageUrl;
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
      rawTargetProgressRef.current = normalized * (VERIFIABLE_IMPACTS.length - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // High-performance continuous interpolation loop
    const tick = () => {
      const target = rawTargetProgressRef.current;
      const current = currentProgressRef.current;

      // Silky momentum lerp (~0.092 factor creates an Apple-style continuous scrub cushion)
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
    for (let idx = 0; idx < VERIFIABLE_IMPACTS.length; idx++) {
      const slideEl = slideRefs.current[idx];
      const imgEl = imageRefs.current[idx];
      const cardEl = cardRefs.current[idx];
      const numEl = metricNumRefs.current[idx];
      const textEl = metricTextRefs.current[idx];
      const badgeEl = badgeRefs.current[idx];

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
        if (numEl) {
          numEl.style.opacity = `${(1 - exitProgress * 0.85).toFixed(3)}`;
          numEl.style.transform = `translateY(${(-exitProgress * 15).toFixed(1)}px)`;
        }
        if (cardEl) {
          cardEl.style.opacity = `${(1 - exitProgress * 0.9).toFixed(3)}`;
          cardEl.style.transform = `translateX(${(-exitProgress * 25).toFixed(1)}px)`;
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
          if (numEl) {
            numEl.style.opacity = `${(1 - nextExit * 0.85).toFixed(3)}`;
            numEl.style.transform = `translateY(${(-nextExit * 15).toFixed(1)}px)`;
          }
          if (cardEl) {
            cardEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
            cardEl.style.transform = `translateX(${(-nextExit * 25).toFixed(1)}px)`;
          }
          if (badgeEl) badgeEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
          if (textEl) textEl.style.opacity = `${(1 - nextExit * 0.9).toFixed(3)}`;
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

          // Incoming Metric Number: masked reveal & upward movement
          if (numEl) {
            const y = (1 - localProgress) * 25;
            const op = Math.min(1, localProgress * 1.5);
            numEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            numEl.style.opacity = op.toFixed(3);
          }

          // Incoming Client & Category Badge: reveals early
          if (badgeEl) {
            const y = (1 - localProgress) * 16;
            const op = Math.min(1, localProgress * 1.8);
            badgeEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            badgeEl.style.opacity = op.toFixed(3);
          }

          // Incoming Metric Narrative: rises smoothly
          if (textEl) {
            const y = (1 - localProgress) * 18;
            const op = Math.max(0, (localProgress - 0.1) * 1.3);
            textEl.style.transform = `translateY(${y.toFixed(1)}px)`;
            textEl.style.opacity = op.toFixed(3);
          }

          // Incoming Visual Campaign Card: slides in from right
          if (cardEl) {
            const x = (1 - localProgress) * 30;
            const op = Math.min(1, localProgress * 1.4);
            cardEl.style.transform = `translateX(${x.toFixed(1)}px)`;
            cardEl.style.opacity = op.toFixed(3);
          }
        }
      }
    }

    // Update real-time progress line
    if (progressBarRef.current) {
      const pct = (p / (VERIFIABLE_IMPACTS.length - 1)) * 100;
      progressBarRef.current.style.width = `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
    }

    // Update discrete integer index only when crossing threshold
    const roundedIndex = Math.min(Math.round(p), VERIFIABLE_IMPACTS.length - 1);
    if (roundedIndex !== activeSlideIndexRef.current) {
      activeSlideIndexRef.current = roundedIndex;
      setActiveSlideIndex(roundedIndex);

      if (counterRef.current) {
        counterRef.current.textContent = `0${roundedIndex + 1} / 0${VERIFIABLE_IMPACTS.length}`;
      }
    }
  };

  // Smooth momentum scroll to a specific slide (shared animation source of truth)
  const scrollToSlide = (targetIdx: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const maxScroll = track.offsetHeight - window.innerHeight;
    const targetOffset = trackTop + (targetIdx / (VERIFIABLE_IMPACTS.length - 1)) * maxScroll;

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
    const nextIdx = Math.min(VERIFIABLE_IMPACTS.length - 1, activeSlideIndex + 1);
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
        const nextTarget = Math.min(VERIFIABLE_IMPACTS.length - 1, activeSlideIndex + 1);
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
      id="results"
      style={{ height: `${VERIFIABLE_IMPACTS.length * 100}vh` }}
      className="relative border-b border-white/10 select-none bg-[#0c0e0c]"
    >
      {/* 100vh Sticky Viewport Presentation Pin */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* ================= SLIDES STACK WITH FLUID POWERPOINT WIPE ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {VERIFIABLE_IMPACTS.map((item, idx) => (
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
              {/* Full-Screen Cinema-Grade Background with Subtle Settle & Dark Gradients */}
              <img
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                src={item.imageUrl}
                alt={`${item.client} - ${item.metricLabel}`}
                loading="eager"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-50 will-change-transform"
              />

              {/* High-contrast dark gradient overlays for pristine legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/75 to-[#0c0e0c]/90 pointer-events-none" />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

              {/* Editorial Slide Content Composition with Guaranteed Clearance from Top Header */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full pt-32 sm:pt-36 md:pt-40 pb-6 sm:pb-10 pointer-events-none">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto">
                  
                  {/* Left Column: Dominant Kinetic Metric & Impact Story */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-left">
                    
                    {/* Client & Category Badge - Clear separation from top header bar */}
                    <div 
                      ref={(el) => {
                        badgeRefs.current[idx] = el;
                      }}
                      className="inline-flex items-center gap-2 sm:gap-3 will-change-transform mb-1 sm:mb-2"
                    >
                      <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-card border border-white/15 text-[11px] sm:text-xs font-bold text-[#dfff24] tracking-widest uppercase shadow-xl flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
                        {item.category}
                      </span>
                      <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-semibold text-zinc-200 flex items-center gap-2">
                        <span>Client:</span>
                        <strong className="text-white font-bold">{item.client}</strong>
                      </span>
                    </div>

                    {/* Dominant Kinetic Metric Number */}
                    <div>
                      <p 
                        ref={(el) => {
                          metricNumRefs.current[idx] = el;
                        }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#dfff24] tracking-tighter leading-none drop-shadow-2xl will-change-transform"
                      >
                        {item.metricNumber}
                      </p>
                    </div>

                    {/* Metric Label & Context Description */}
                    <div 
                      ref={(el) => {
                        metricTextRefs.current[idx] = el;
                      }}
                      className="space-y-4 max-w-xl will-change-transform"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
                        {item.metricLabel}
                      </h3>
                      
                      <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed drop-shadow-md">
                        {item.context}
                      </p>

                      {/* Deliverables Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.deliverables.map((deliv, dIdx) => (
                          <span 
                            key={dIdx}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full glass-panel border border-white/15 text-zinc-200 shadow-md"
                          >
                            ✓ {deliv}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      {onOpenProjectInquiry && (
                        <div className="pt-3 pointer-events-auto">
                          <button
                            onClick={onOpenProjectInquiry}
                            type="button"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl cursor-pointer hover:scale-105"
                          >
                            <span>Commission Similar Campaign</span>
                            <span>→</span>
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: High-Impact Visual Card Preview with Client Logo Badge */}
                  <div className="hidden lg:block lg:col-span-5">
                    <div 
                      ref={(el) => {
                        cardRefs.current[idx] = el;
                      }}
                      className="aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/20 shadow-2xl group bg-zinc-950 will-change-transform"
                    >
                      <img
                        src={item.imageUrl}
                        alt={`${item.client} campaign capture`}
                        className="w-full h-full object-cover object-center filter contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Floating Client Authenticity Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-xl">
                          <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
                          <span>VERIFIED PRODUCTION</span>
                        </div>
                      </div>

                      {/* Client Logo & Metric Bar */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          {item.logoUrl && (
                            <div className="px-2.5 py-1 rounded-lg bg-white/90 shadow">
                              <img src={item.logoUrl} alt={item.client} className="h-4 max-w-[70px] object-contain" />
                            </div>
                          )}
                          <span className="font-bold text-white tracking-wide">
                            {item.client}
                          </span>
                        </div>
                        <span className="font-bold text-[#dfff24] font-mono">
                          0{idx + 1} / 0{VERIFIABLE_IMPACTS.length}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FIXED TOP NAVIGATION OVERLAY (Z-50) ================= */}
        <div className="relative z-50 pt-20 sm:pt-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-white/10 flex-nowrap w-full">
            
            {/* Header Badge: Single line on mobile */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-card border border-white/10 shrink min-w-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#dfff24] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#dfff24] font-bold whitespace-nowrap">
                <span className="hidden sm:inline">Commercial Attributions</span>
                <span className="sm:hidden">Attributions</span>
              </span>
              <span className="text-zinc-600 hidden md:inline">|</span>
              <span className="text-xs text-zinc-300 font-medium whitespace-nowrap hidden md:inline">
                Verified Business Impact Slideshow
              </span>
            </div>

            {/* Slide Index Counter & Discreet Manual Arrows: Single line */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs shrink-0">
              <span 
                ref={counterRef}
                className="text-zinc-300 font-bold tracking-wider font-mono text-[11px] sm:text-xs whitespace-nowrap"
              >
                0{activeSlideIndex + 1} / 0{VERIFIABLE_IMPACTS.length}
              </span>

              {/* Discreet manual arrow controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handlePrev}
                  type="button"
                  disabled={activeSlideIndex === 0}
                  aria-label="Previous impact slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-20 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  disabled={activeSlideIndex === VERIFIABLE_IMPACTS.length - 1}
                  aria-label="Next impact slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] disabled:opacity-20 disabled:pointer-events-none text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
