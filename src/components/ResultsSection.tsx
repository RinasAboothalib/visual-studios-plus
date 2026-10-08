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
  badgeBg?: string;
}

const VERIFIABLE_IMPACTS: VerifiableImpactItem[] = [
  {
    id: 'ponds',
    client: "Pond's (Unilever)",
    category: 'FMCG & Beauty',
    metricNumber: '+142%',
    metricLabel: 'Social Engagement Lift',
    context: 'Viral social launch campaign outperforming all previous category FMCG benchmarks across South Asia.',
    deliverables: ['TikTok Viral Hooks', 'High-Fidelity Reel Production', 'Influencer Seeding'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Unilever-A.png',
  },
  {
    id: 'nescafe',
    client: 'Nescafé Gold & CFW',
    category: 'Luxury FMCG & Fashion',
    metricNumber: '1.2M+',
    metricLabel: 'Campaign Reach in 48h',
    context: 'Real-time runway drops and designer coffee storytelling delivered while the catwalk lights were still on.',
    deliverables: ['<45-Min Runway Edits', 'Instagram Broadcasts', 'Executive Backstage Coverage'],
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Colombo-Fashion-Week-Logo-A.png',
  },
  {
    id: 'munchee',
    client: 'Munchee CBL',
    category: 'FMCG Food & Confectionery',
    metricNumber: '320K+',
    metricLabel: 'Direct Social Interactions',
    context: 'Bespoke AI visual concepts combined with physical stop-motion confectionery films for seasonal campaigns.',
    deliverables: ['Generative AI Concepts', 'Macro Stop-Motion', 'FMCG Digital Ads'],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Munchee-Logo-a.png',
  },
  {
    id: 'cfw',
    client: 'Colombo Fashion Week',
    category: 'International Fashion',
    metricNumber: '20K+',
    metricLabel: 'Engagement Per Video Drop',
    context: 'High-energy on-ground digital video crew capturing Sri Lanka’s premier fashion event with instant publishing.',
    deliverables: ['Live Media War Room', 'Multi-Platform Reels', 'Broadcast Runway Master'],
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Colombo-Fashion-Week-Logo-A.png',
  },
  {
    id: 'ahmad',
    client: 'Ahmad Tea London',
    category: 'Global Beverage',
    metricNumber: '+68%',
    metricLabel: 'YoY Social Follower Growth',
    context: 'End-to-end multi-year channel management retainer establishing a refined global aesthetic and community.',
    deliverables: ['Monthly Social Retainer', 'Global Brand Photography', 'Paid Media Strategy'],
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Ahmad_Tea_logo-a.png',
  },
  {
    id: 'dankotuwa',
    client: 'Dankotuwa Porcelain',
    category: 'Luxury Tableware',
    metricNumber: '8K',
    metricLabel: 'Photorealistic CGI Fidelity',
    context: 'Architectural fluid simulation and photorealistic 3D product renders designed for global export markets.',
    deliverables: ['Houdini Fluid Physics', '8K Cinema Renders', 'Export Catalogues'],
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1400&q=80',
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Dankotuwa-Logo-A.png',
  }
];

const AUTO_SLIDE_DURATION = 4200; // 4.2 seconds per slide

interface ResultsSectionProps {
  onOpenProjectInquiry?: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenProjectInquiry }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-sliding slideshow loop
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % VERIFIABLE_IMPACTS.length);
    }, AUTO_SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeSlide]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + VERIFIABLE_IMPACTS.length) % VERIFIABLE_IMPACTS.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % VERIFIABLE_IMPACTS.length);
  };

  const currentItem = VERIFIABLE_IMPACTS[activeSlide];

  return (
    <section 
      id="results" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 sm:py-32 border-b border-white/10 relative overflow-hidden bg-[#0c0e0c]"
    >
      {/* BRAND LOGOS BACKGROUND WATERMARK MOSAIC */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 flex flex-col justify-around opacity-20 py-6 space-y-6">
          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div 
                key={`b1-${client.name}-${idx}`} 
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/90 shadow-md shrink-0 border border-white/20"
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-7 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 animate-marquee-reverse whitespace-nowrap">
            {[...CLIENT_PARTNERS.slice().reverse(), ...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div 
                key={`b2-${client.name}-${idx}`} 
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/90 shadow-md shrink-0 border border-white/20"
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-7 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic dark gradients for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/80 to-[#0c0e0c]" />
        <div className="absolute inset-0 bg-[#0c0e0c]/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                Commercial Attributions
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                Verified Business Impact Slideshow
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              We take projects for businesses. <br />
              <span className="text-[#dfff24]">Here are the verified results</span>.
            </h2>
          </div>

          <p className="text-sm text-zinc-300 max-w-md font-medium leading-relaxed">
            No vanity metrics. Every campaign is audited against tangible commercial benchmarks: 
            engagement lift, audience growth, brand sentiment, and measurable revenue recall.
          </p>
        </div>

        {/* MAIN SLIDESHOW SHOWCASE: Impact Metric + Campaign Image */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl p-6 sm:p-10 lg:p-12 mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Metric & Impact Narrative */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Client & Category Badge */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#dfff24] px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                  {currentItem.category}
                </span>
                <span className="text-xs text-zinc-400 font-semibold">
                  Client: <strong className="text-white">{currentItem.client}</strong>
                </span>
              </div>

              {/* Dominant Verified Metric Number */}
              <div className="space-y-1">
                <p 
                  key={`num-${currentItem.id}`}
                  className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#dfff24] tracking-tighter leading-none transition-all duration-500 animate-in fade-in zoom-in-95"
                >
                  {currentItem.metricNumber}
                </p>
                <h3 
                  key={`label-${currentItem.id}`}
                  className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-2 transition-all duration-300"
                >
                  {currentItem.metricLabel}
                </h3>
              </div>

              {/* Context Description */}
              <p 
                key={`desc-${currentItem.id}`}
                className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed transition-all duration-300"
              >
                {currentItem.context}
              </p>

              {/* Production Deliverables Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentItem.deliverables.map((item, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full glass-panel border border-white/10 text-zinc-200"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              {onOpenProjectInquiry && (
                <div className="pt-4">
                  <button
                    onClick={onOpenProjectInquiry}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg cursor-pointer"
                  >
                    <span>Request Similar Case Brief</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: High-Impact Campaign Visual in Slideshow Style */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden relative border border-white/15 shadow-2xl group bg-zinc-950">
                
                {/* Images Layer with Crossfade Transition */}
                {VERIFIABLE_IMPACTS.map((impact, idx) => {
                  const isCurrent = idx === activeSlide;
                  return (
                    <div
                      key={impact.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isCurrent 
                          ? 'opacity-100 scale-100 z-10' 
                          : 'opacity-0 scale-105 pointer-events-none z-0'
                      }`}
                    >
                      <img
                        src={impact.imageUrl}
                        alt={`${impact.client} - ${impact.metricLabel}`}
                        className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                  );
                })}

                {/* Floating Authenticity Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
                    <span>VERIFIED PERFORMANCE</span>
                  </div>
                </div>

                {/* Bottom Image Overlay with Client Name */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-bold text-white tracking-wide">
                    {currentItem.client}
                  </span>
                  <span className="font-semibold text-[#dfff24]">
                    Slide 0{activeSlide + 1} / 0{VERIFIABLE_IMPACTS.length}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* SLIDESHOW BOTTOM CONTROL STRIP */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Slide Progress Indicator Bar */}
            <div className="w-full sm:w-64 bg-white/10 h-1 rounded-full overflow-hidden relative">
              <div 
                key={activeSlide}
                className="h-full bg-[#dfff24] rounded-full"
                style={{
                  width: '100%',
                  animation: isPaused ? 'none' : `progressAnim ${AUTO_SLIDE_DURATION}ms linear`
                }}
              />
            </div>

            {/* Quick Slide Navigation Dots */}
            <div className="flex items-center gap-1.5">
              {VERIFIABLE_IMPACTS.map((item, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(idx)}
                    type="button"
                    aria-label={`Jump to slide ${idx + 1}: ${item.client}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      isActive 
                        ? 'w-8 bg-[#dfff24]' 
                        : 'w-2 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                );
              })}
            </div>

            {/* Manual Controls & Play/Pause */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused(!isPaused)}
                type="button"
                className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 hover:text-white px-3 py-1 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                {isPaused ? '▶ Play' : '⏸ Pause'}
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous impact slide"
                  className="w-8 h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next impact slide"
                  className="w-8 h-8 rounded-full glass-card border border-white/10 hover:border-[#dfff24] text-zinc-300 hover:text-white flex items-center justify-center text-xs transition-all cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Quick-Jump Thumbnails Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {VERIFIABLE_IMPACTS.map((impact, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={`thumb-${impact.id}`}
                onClick={() => setActiveSlide(idx)}
                type="button"
                className={`p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                  isActive 
                    ? 'glass-card border-[#dfff24] bg-white/[0.08] shadow-lg scale-102' 
                    : 'border-white/5 hover:border-white/20 bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1 font-bold">
                  <span className={isActive ? 'text-[#dfff24]' : 'text-zinc-500'}>
                    0{idx + 1}
                  </span>
                  <span className={isActive ? 'text-[#dfff24] font-black' : 'text-zinc-400'}>
                    {impact.metricNumber}
                  </span>
                </div>
                <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                  {impact.client}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
