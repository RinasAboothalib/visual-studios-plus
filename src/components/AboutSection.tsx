import React, { useState } from 'react';
import { Target, Sparkles, Film, Camera, TrendingUp, Layers } from 'lucide-react';
import { AGENCY_STATS, CLIENT_PARTNERS } from '../data/projectsData.ts';
import { VSPlusLogo } from './VSPlusLogo.tsx';

const BUBBLE_BRANDS = [
  { name: 'Unilever', role: "Pond's · Knorr", size: 'large', color: '#14b8a6' },
  { name: 'Hilton', role: 'Sapphire Dragon · Residencies', size: 'large', color: '#3b82f6' },
  { name: 'Amex', role: 'Swim Week Title Partner', size: 'large', color: '#0ea5e9' },
  { name: 'Munchee', role: 'Festive AI & Biscuits', size: 'large', color: '#ef4444' },
  { name: 'Omega', role: 'Luxury Timepieces', size: 'medium', color: '#eab308' },
  { name: 'Keells', role: 'Fresh Food & Packaging', size: 'medium', color: '#22c55e' },
  { name: 'UNDP', role: 'HackaDev Island-Wide', size: 'medium', color: '#0284c7' },
  { name: 'Ahmad Tea', role: 'Global Social Retainer', size: 'medium', color: '#f59e0b' },
  { name: 'Dankotuwa', role: 'CGI Porcelain & Tableware', size: 'medium', color: '#6366f1' },
  { name: 'Imorich', role: '5-Year Gelato Partner', size: 'large', color: '#ec4899' },
  { name: 'Swadeshi', role: 'Khomba Herbal Care', size: 'medium', color: '#10b981' },
  { name: 'Swisstek', role: 'Aluminium & Solar', size: 'small', color: '#84cc16' },
  { name: 'DSI', role: "Women's Day Campaign", size: 'small', color: '#a855f7' },
  { name: 'SOZO', role: 'Sparkling Beverage Branding', size: 'small', color: '#facc15' },
  { name: 'Taj Hotels', role: 'Hospitality Content', size: 'small', color: '#f97316' },
  { name: 'Cinnamon', role: 'Hotels & Resorts', size: 'small', color: '#8b5cf6' },
  { name: 'Mövenpick', role: 'Resort Visuals', size: 'small', color: '#06b6d4' },
  { name: 'Elephant House', role: 'FMCG Portfolio', size: 'small', color: '#f43f5e' },
  { name: 'Multilac', role: 'Paints & Finishes', size: 'small', color: '#64748b' },
  { name: 'Lipton', role: 'Beverage Campaigns', size: 'small', color: '#eab308' }
];

export const AboutSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 border-b border-white/10 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Number */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24]">
            ( 01 )
          </span>
          <div className="h-px w-8 bg-zinc-800" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
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

            {/* Core Disciplines List */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Film className="w-4 h-4 text-[#dfff24]" />
                <span>Videography & TVC</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Camera className="w-4 h-4 text-[#dfff24]" />
                <span>Commercial Photo</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <TrendingUp className="w-4 h-4 text-[#dfff24]" />
                <span>Digital Retainers</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Sparkles className="w-4 h-4 text-[#dfff24]" />
                <span>CGI & Generative AI</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Layers className="w-4 h-4 text-[#dfff24]" />
                <span>Branding & Packaging</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                <Target className="w-4 h-4 text-[#dfff24]" />
                <span>Paid Performance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive "OUR GOAL?" Mission Card from Page 3 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/90 border-2 border-white/10 hover:border-[#dfff24]/40 transition-colors shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#dfff24]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-zinc-700 text-xs font-mono text-[#dfff24] mb-6">
                <Target className="w-3.5 h-3.5" />
                <span>OUR GOAL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-snug mb-4">
                To help them smash their targets and bring their visions to life using our savvy digital solutions.
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                We believe content shouldn’t simply sit in feeds. It needs to ignite emotion, elevate sensory appeal, and make brands unforgettable in the new digital and retail landscape.
              </p>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>HEADQUARTERS</span>
                <span className="text-white">Level 1, 36 Haig Road, Colombo 04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Metrics Strip */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
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
