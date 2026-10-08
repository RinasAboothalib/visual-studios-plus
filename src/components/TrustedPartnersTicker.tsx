import React from 'react';
import { CLIENT_PARTNERS } from '../data/projectsData.ts';

export const TrustedPartnersTicker: React.FC = () => {
  // Triple the list to create a seamless infinite marquee loop
  const marqueeItems = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <section 
      aria-label="Trusted Brand Partners"
      className="relative z-20 bg-[#0c0e0c] border-y border-white/10 py-5 sm:py-6 overflow-hidden select-none"
    >
      {/* Subtle edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0c0e0c] via-[#0c0e0c]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0c0e0c] via-[#0c0e0c]/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
          <span>TRUSTED BY MARKET LEADERS &amp; GLOBAL BRANDS</span>
        </div>
        <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
          COMMERCIAL CLIENT ROSTER
        </span>
      </div>

      {/* Single-line continuous moving animated marquee */}
      <div className="flex overflow-hidden py-1">
        <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap will-change-transform">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#dfff24]/40 transition-all duration-300 group shrink-0"
            >
              {/* Logo container with high-contrast backing */}
              <div className="h-6 sm:h-7 px-2.5 py-1 rounded-lg bg-white/95 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    loading="lazy"
                    className="h-4 sm:h-5 max-w-[85px] sm:max-w-[100px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-[10px] font-black text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>

              {/* Client brand name & category */}
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#dfff24] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-medium text-zinc-500 hidden sm:inline">
                  · {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
