import React, { useEffect, useState } from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenProjectInquiry?: () => void;
  onNavigate?: (pageId: 'work' | 'services') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel, onNavigate }) => {
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

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: 'work' | 'services') => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageId);
    }
  };

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
        
        {/* Cinematic subtle dark gradient to ensure high video visibility while keeping text perfectly crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/50 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/65 pointer-events-none" />
      </div>

      {/* Main Content with Line-by-Line Staggered Cinematic Reveal */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-16"
        style={{
          transform: `translateY(-${contentTranslateY}px)`,
          opacity: contentOpacity,
          transition: 'transform 0.08s ease-out'
        }}
      >
        <div className="max-w-5xl space-y-7">
          
          {/* Subtle Logo mark intro */}
          <div 
            className={`transition-all duration-[1000ms] delay-100 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-zinc-300 font-bold">
                VISUAL STUDIOS+ · CREATIVE AGENCY
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
            className={`text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl font-normal leading-relaxed pt-1 drop-shadow-md transition-all duration-[1200ms] delay-600 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            Colombo’s premier digital marketing, social media campaigns, and content creation agency. 
            We partner with ambitious brands to command attention and deliver verified commercial growth.
          </p>

          {/* Action CTAs */}
          <div 
            className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-[1200ms] delay-700 ${
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <a
              href="#work"
              onClick={(e) => handleCtaClick(e, 'work')}
              className="px-7 py-4 bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer"
            >
              Explore Projects ↓
            </a>

            <a
              href="#services"
              onClick={(e) => handleCtaClick(e, 'services')}
              className="px-7 py-4 glass-card border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 shadow-md cursor-pointer"
            >
              Our Services
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

      {/* Clean bottom navigation prompt */}
      <div className="relative z-10 text-center pb-6">
        <a 
          href="#work"
          onClick={(e) => handleCtaClick(e, 'work')}
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-zinc-400 hover:text-[#dfff24] transition-colors cursor-pointer"
        >
          <span>Explore Selected Projects</span>
          <span className="text-[#dfff24] animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};
