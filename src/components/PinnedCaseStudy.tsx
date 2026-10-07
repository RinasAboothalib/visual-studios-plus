import React, { useRef, useState, useEffect } from 'react';
import { Project } from '../types/index.ts';

interface PinnedCaseStudyProps {
  onOpenCaseModal: (project: Project) => void;
  onOpenInquiry: () => void;
}

const STAGES = [
  {
    phase: 'THE OBJECTIVE',
    step: '01 / 04',
    headline: 'High Couture Meets Real-Time Flavour',
    body: 'How to bring Nescafé Gold into the high-fashion conversation during Sri Lanka’s most anticipated runway weekend without feeling like conventional product placement?',
    kpi: { label: 'Challenge', value: 'Live Chaos to Pure Chic' }
  },
  {
    phase: 'THE STRATEGY',
    step: '02 / 04',
    headline: 'An On-Ground Mobile Content War Room',
    body: 'We deployed dual cinema crews inside the venue: Runway Team capturing ultra-slow-mo walk details, and VIP Lounge Team capturing Sri Lanka’s leading stylists and taste-makers with steaming cups of Nescafé Gold.',
    kpi: { label: 'Speed', value: '< 45-Min Social Drops' }
  },
  {
    phase: 'THE EXECUTION',
    step: '03 / 04',
    headline: 'Tethered Color Grading & Audio Mastering',
    body: 'High-tempo vertical Reels published within minutes of runway exits. Contrasting crisp garments with warm coffee aroma, producing 14 designer capsules across 72 hours.',
    kpi: { label: 'Deliverables', value: '14+ Designer Films' }
  },
  {
    phase: 'THE VERIFIED RESULT',
    step: '04 / 04',
    headline: 'Over 1.2M Reach & 20K+ Engagement Per Video',
    body: 'Nescafé Gold emerged as the organic conversational staple of Colombo Fashion Week, setting a national benchmark for real-time live event content.',
    kpi: { label: 'Total Reach', value: '1.2M+ Verified' }
  }
];

export const PinnedCaseStudy: React.FC<PinnedCaseStudyProps> = ({
  onOpenCaseModal,
  onOpenInquiry
}) => {
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

  // Visual expansion: 0.85 -> 1.0 in first 35% of scroll
  const expansionProgress = Math.min(scrollProgress / 0.35, 1);
  const imageScale = 0.85 + expansionProgress * 0.15;
  const imageRadius = (1 - expansionProgress) * 32;

  // Story stage progression across remaining scroll
  const storyProgress = Math.max((scrollProgress - 0.25) / 0.75, 0);
  const activeStageIndex = Math.min(Math.floor(storyProgress * STAGES.length), STAGES.length - 1);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section 
      ref={containerRef}
      id="featured" 
      className="relative h-[280vh] bg-[#0c0e0c]"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden glass-panel border-y border-white/10">
        
        {/* Background Visual Expanding toward edges */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div 
            className="relative w-full h-full overflow-hidden transition-all duration-100 ease-out"
            style={{
              transform: `scale(${imageScale})`,
              borderRadius: `${imageRadius}px`
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85"
              alt="Nescafé Colombo Fashion Week"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
            />
            {/* Dark glass gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/55 to-black/35" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>

        {/* Clean, Correctly Aligned Top Metadata */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
            <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
              Flagship Case Study
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-xs text-zinc-300 font-medium">
              Nestlé &amp; Colombo Fashion Week
            </span>
          </div>
        </div>

        {/* Main Center Storytelling Block */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-left">
          
          {/* Main Title that moves upward as user scrolls */}
          <div 
            className="transition-all duration-150 ease-out space-y-2"
            style={{
              transform: `translateY(-${scrollProgress * 30}px)`
            }}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
              Real-Time Social Media Takeover
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              NESCAFÉ × COLOMBO <br />
              <span className="text-[#dfff24]">FASHION WEEK</span>
            </h2>
          </div>

          {/* Progressive Storytelling Flow Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 max-w-3xl backdrop-blur-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                {currentStage.phase}
              </span>
              <span className="text-xs text-zinc-400 font-bold">
                {currentStage.step}
              </span>
            </div>

            <div className="py-4 space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {currentStage.headline}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {currentStage.body}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
                  {currentStage.kpi.label}
                </span>
                <span className="text-lg font-black text-white">
                  {currentStage.kpi.value}
                </span>
              </div>

              <div>
                <a
                  href="#work"
                  className="px-5 py-2.5 rounded-full glass-panel border border-white/20 text-xs font-bold text-white hover:text-[#dfff24] transition-colors"
                >
                  View Case Study Details →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom space padding with clean alignment - scroll controller bar removed as requested */}
        <div className="relative z-10 w-full pb-8" />

      </div>
    </section>
  );
};
