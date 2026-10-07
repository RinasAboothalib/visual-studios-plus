import React, { useEffect, useState } from 'react';
import { CLIENT_PARTNERS, STUDIO_INFO } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenProjectInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const [scrollY, setScrollY] = useState(0);
  const [entered, setEntered] = useState(false);

  // Cinematic sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true);
    }, 120);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll-linked transforms: hero content moves upward, background scales slightly
  const contentTranslateY = Math.min(scrollY * 0.42, 280);
  const contentOpacity = Math.max(1 - scrollY / 700, 0);
  const videoScrollScale = 1 + Math.min(scrollY / 1800, 0.12);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#0c0e0c]"
    >
      {/* Background with real agency showreel video — HIGH VISIBILITY */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={STUDIO_INFO.showreelUrl}
          poster={STUDIO_INFO.heroCover}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover object-center transition-all duration-[1600ms] pointer-events-none ${
            entered ? 'opacity-85 scale-100' : 'opacity-0 scale-[1.08]'
          }`}
          style={{
            transform: entered ? `scale(${videoScrollScale})` : 'scale(1.08)',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
        
        {/* Cinematic subtle glass gradient to ensure high video visibility while keeping text crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/35 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Main Content with Line-by-Line Staggered Cinematic Reveal */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12"
        style={{
          transform: `translateY(-${contentTranslateY}px)`,
          opacity: contentOpacity,
          transition: 'transform 0.08s ease-out'
        }}
      >
        <div className="max-w-5xl space-y-6">
          
          {/* Subtle Logo mark intro */}
          <div 
            className={`transition-all duration-[1000ms] delay-100 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-zinc-300 font-bold">
                VISUAL STUDIOS+
              </span>
            </div>
          </div>

          {/* Main Headline: Line-by-Line Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02]">
            <span className="block overflow-hidden">
              <span 
                className={`block transition-all duration-[1200ms] delay-200 ${
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
              >
                WE CREATE CONTENT
              </span>
            </span>
            <span className="block overflow-hidden">
              <span 
                className={`block text-[#dfff24] transition-all duration-[1200ms] delay-400 ${
                  entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
              >
                THAT MOVES BRANDS.
              </span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p 
            className={`text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl font-normal leading-relaxed pt-2 drop-shadow-md transition-all duration-[1200ms] delay-600 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            Colombo’s premier digital marketing, social media campaigns, and content creation agency. 
            We take projects for ambitious businesses and deliver measurable results through viral social storytelling.
          </p>

          {/* Action CTAs — Text only, zero icons */}
          <div 
            className={`flex flex-wrap items-center gap-4 pt-6 transition-all duration-[1200ms] delay-700 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <a
              href="#statement"
              className="px-7 py-4 bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl"
            >
              See Business Results ↓
            </a>

            <a
              href="#work"
              className="px-7 py-4 glass-card border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Explore Projects
            </a>

            <button
              onClick={onOpenShowreel}
              type="button"
              className="px-6 py-4 glass-panel border border-zinc-700/80 hover:border-white text-zinc-300 hover:text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Play Showreel
            </button>
          </div>

        </div>
      </div>

      {/* Client Marquee Carousel with Glass Effect & Original Colored Logos (Zero Icons) */}
      <div className="relative z-10 w-full pt-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
            <p className="text-xs sm:text-xs font-bold text-zinc-200 tracking-wide uppercase font-sans">
              Trusted by global powerhouses &amp; Sri Lanka’s leading consumer brands
            </p>
          </div>
        </div>

        {/* Continuous scrolling ticker with ORIGINAL LOGOS AND TRUE BRAND COLORS */}
        <div className="relative w-full overflow-hidden mask-gradient-x border-y border-white/10 py-4 glass-panel">
          <div className="animate-marquee flex items-center gap-8 sm:gap-10">
            {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center gap-3.5 shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 transition-all shadow-md cursor-pointer group hover:scale-105"
                title={`${client.name} — ${client.category}`}
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-8 max-w-[130px] object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase font-sans">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator at the bottom — Zero icons */}
      <div className="relative z-10 text-center pt-4">
        <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-500 animate-pulse">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  );
};
