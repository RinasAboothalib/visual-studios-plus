import React from 'react';
import { AGENCY_STATS } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 border-b border-white/10 relative overflow-hidden glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Number */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24]">
            ( 06 )
          </span>
          <div className="h-px w-8 bg-zinc-800" />
          <span className="font-sans text-xs uppercase tracking-widest text-zinc-400">
            About Visual Studios Plus
          </span>
        </div>

        {/* 2-Column Split: Story & Mission Goal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Agency Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-2">
              <VSPlusLogo size="lg" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Premier content creation and curation agency based in Colombo.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                Our studio has earned a stellar reputation for its exceptional work in 
                <span className="text-white font-medium"> videography, photography, and visual content creation</span>, 
                particularly in competitive industries like <span className="text-[#dfff24]">FMCG, Food, Fashion, and Hospitality</span>.
              </p>
              <p>
                Lately, we’ve stepped into the world of digital creativity, quickly becoming a go-to for local and global brands with our fresh digital strategies.
              </p>
              <p className="text-zinc-400">
                Recently, we’ve dived into digital agency work, and right now, we’re working with Sri Lanka’s favorite consumer brands to craft social campaigns that command attention and drive conversion.
              </p>
            </div>

            {/* Core Disciplines List (Zero Icons, clean typography) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-zinc-800">
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Videography &amp; TVC
              </div>
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Commercial Photo
              </div>
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Digital Retainers
              </div>
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> CGI &amp; Generative AI
              </div>
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Brand Packaging
              </div>
              <div className="p-3 rounded-xl glass-card text-xs font-sans text-zinc-200">
                <span className="text-[#dfff24] mr-2 font-bold">//</span> Paid Performance
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border-2 border-white/10 hover:border-[#dfff24]/40 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-zinc-700 text-xs font-sans text-[#dfff24] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfff24]" />
                <span>OUR CORE MISSION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-4">
                To help brands smash targets and bring their visions to life using savvy digital solutions.
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                We believe content shouldn’t simply sit in feeds. It needs to ignite emotion, elevate sensory appeal, and make brands unforgettable in the new digital and retail landscape.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-sans text-zinc-400">
                <span>HEADQUARTERS</span>
                <span className="text-white">Level 1, 36 Haig Road, Colombo 04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Metrics Strip */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-sans">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
