import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { CLIENT_PARTNERS, STUDIO_INFO } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenProjectInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-white/10">
      {/* Background with real agency showreel video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={STUDIO_INFO.showreelUrl}
          poster={STUDIO_INFO.heroCover}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-30 scale-105 pointer-events-none"
        />
        {/* Cinematic dark gradients to guarantee perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-[#0c0e0c]/80 to-[#0c0e0c]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0e0c]/60 to-[#0c0e0c]" />
      </div>

      {/* Ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#dfff24]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Kicker - completely clean without box backgrounds */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center">
            <VSPlusLogo size="sm" accentColor="#ffffff" />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
            <span>Colombo, Sri Lanka</span>
          </div>
          <span className="text-zinc-600">/</span>
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
            Photography · Videography · Strategy · CGI
          </span>
        </div>

        {/* Massive Editorial Headline (underline removed from experienced) */}
        <div className="space-y-4 max-w-5xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-400 tracking-tight">
            The Creative Agency
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.03]">
            We create content <br />
            meant to be <span className="text-white">experienced</span>. <br />
            <span className="text-zinc-500 font-normal italic">Not simply consumed.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal pt-2 leading-relaxed">
            Colombo’s premier content creation, videography, and digital marketing agency. 
            Partnering with Sri Lanka’s favorite consumer brands to smash targets with fresh creative storytelling.
          </p>
        </div>

        {/* Action CTAs (Request a proposal removed as instructed) */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <a
            href="#work"
            className="px-6 py-3.5 bg-white text-black font-bold text-sm rounded-full hover:bg-[#dfff24] transition-all duration-200 flex items-center gap-2 shadow-lg hover:scale-105"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenShowreel}
            type="button"
            className="group px-6 py-3.5 bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-700/80 hover:border-zinc-500 text-white font-bold text-sm rounded-full transition-all duration-200 flex items-center gap-3 shadow-sm hover:scale-105"
          >
            <div className="w-7 h-7 rounded-full bg-[#dfff24] text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
            </div>
            <span>Play Showreel</span>
            <span className="text-[11px] font-mono font-bold text-zinc-400">01:30</span>
          </button>
        </div>
      </div>

      {/* Client Marquee Carousel with Highlighted Header Sentence */}
      <div className="relative z-10 w-full pt-12 pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          {/* Highlighted Sentence */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/95 border border-[#dfff24]/70 shadow-[0_0_25px_rgba(223,255,36,0.18)]">
            <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
            <p className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
              Trusted by global powerhouses &amp; Sri Lanka’s leading consumer brands
            </p>
          </div>
        </div>

        {/* Continuous scrolling ticker with ORIGINAL LOGOS AND TRUE BRAND COLORS */}
        <div className="relative w-full overflow-hidden mask-gradient-x border-y border-white/10 py-5 bg-zinc-950/90 backdrop-blur-md">
          <div className="animate-marquee flex items-center gap-8 sm:gap-10">
            {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center gap-3.5 shrink-0 px-4 py-2 rounded-xl bg-white/95 hover:bg-white transition-all shadow-md hover:shadow-lg cursor-pointer group hover:scale-105"
                title={`${client.name} — ${client.category}`}
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-8 max-w-[130px] object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-bold text-zinc-900 tracking-tight">
                    {client.name}
                  </span>
                )}
                <span className="text-[10px] font-bold text-zinc-500 border-l border-zinc-200 pl-2.5">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
