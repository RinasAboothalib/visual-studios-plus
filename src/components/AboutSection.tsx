import React from 'react';
import { AGENCY_STATS, CLIENT_PARTNERS } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

interface AboutSectionProps {
  onOpenProjectInquiry?: () => void;
  onNavigateToContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenProjectInquiry,
  onNavigateToContact
}) => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-white/10 relative overflow-hidden bg-[#0c0e0c]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="flex items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 text-xs font-bold text-[#dfff24]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24] animate-pulse" />
            <span>AGENCY PROFILE &amp; HERITAGE</span>
          </div>
          <div className="h-px w-8 bg-zinc-800" />
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            Colombo 04, Sri Lanka
          </span>
        </div>

        {/* 2-Column Split: Story & Mission Goal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Agency Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-2">
              <VSPlusLogo size="lg" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Premier content creation and curation agency based in Colombo.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                Visual Studios Plus has earned an industry-leading reputation for exceptional work in 
                <span className="text-white font-medium"> commercial videography, advertising photography, and social viral content creation</span>, 
                specializing in competitive consumer sectors such as <span className="text-[#dfff24] font-semibold">FMCG, Food &amp; Beverage, Fashion, and Luxury Hospitality</span>.
              </p>
              <p>
                We stepped into the digital agency ecosystem to replace slow, outdated advertising models with real-time digital strategy, fast-turnaround production war rooms, and cinema-grade storytelling.
              </p>
              <p className="text-zinc-400">
                Today, we partner with Sri Lanka’s favorite household brands and multinational conglomerates to engineer social campaigns that stop the feed and drive verified commercial recall.
              </p>
            </div>

            {/* Core Disciplines List */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-zinc-800">
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Videography &amp; TVC
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Commercial Photo
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Digital Retainers
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> CGI &amp; Generative AI
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Brand Packaging
              </div>
              <div className="p-3.5 rounded-2xl glass-card text-xs font-semibold text-zinc-200 border border-white/10">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Paid Performance
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card & Studio Facilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border-2 border-white/10 hover:border-[#dfff24]/40 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-zinc-700 text-xs text-[#dfff24] mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
                <span>OUR CORE MISSION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-4">
                To help brands smash commercial targets and bring their visions to life using savvy digital solutions.
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                We believe content shouldn’t simply sit in feeds. It needs to ignite emotion, elevate sensory appeal, and make brands unforgettable in the new digital and retail landscape.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-bold text-zinc-300">HEADQUARTERS</span>
                <span className="text-white font-medium">Level 1, 36 Haig Road, Colombo 04</span>
              </div>
            </div>

            {/* Production Standards Box */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#dfff24] block">
                // Studio Standards
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                4K Cinema Cameras (Sony FX &amp; RED), DaVinci Resolve color suites, professional food styling kitchens, and live event on-ground edit war rooms.
              </p>
            </div>
          </div>
        </div>

        {/* Agency Metrics Strip */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Full Brand Partners Grid */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#dfff24] block mb-1">
                // Trusted Client Partners
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Brands that trust our lens and strategy.
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-xs">
              From global FMCG giants to boutique luxury houses across Sri Lanka &amp; international markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENT_PARTNERS.map((partner, idx) => (
              <div
                key={`about-partner-${idx}`}
                className="p-4 rounded-2xl bg-white/90 border border-white/20 flex flex-col items-center justify-center min-h-[90px] shadow-md hover:scale-105 transition-transform"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-8 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider text-center">
                    {partner.name}
                  </span>
                )}
                <span className="text-[9px] text-zinc-500 font-semibold mt-1">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">Want to partner with Visual Studios Plus?</h4>
            <p className="text-xs text-zinc-400 mt-1">Commission a dedicated production or discuss a multi-channel retainer.</p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenProjectInquiry && (
              <button
                onClick={onOpenProjectInquiry}
                type="button"
                className="px-6 py-3 rounded-full bg-[#dfff24] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                Inquire Project →
              </button>
            )}
            {onNavigateToContact && (
              <button
                onClick={onNavigateToContact}
                type="button"
                className="px-6 py-3 rounded-full glass-card border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              >
                Studio Contact
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
