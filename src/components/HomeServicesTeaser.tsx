import React from 'react';

interface HomeServicesTeaserProps {
  onNavigateToServices: () => void;
  onOpenProjectInquiry: () => void;
}

const CORE_DISCIPLINES = [
  {
    number: '01',
    title: 'Social Content & Viral Reels',
    description: 'Fast-paced vertical storytelling, dynamic pacing, and platform-specific audio hooks engineered to win organic reach.',
    tag: 'Distribution',
  },
  {
    number: '02',
    title: 'Commercial Film & TVC',
    description: 'Cinema-grade lighting, professional directorial talent, and broadcast delivery for national TV and digital campaigns.',
    tag: 'Production',
  },
  {
    number: '03',
    title: 'Commercial Photo & Lookbooks',
    description: 'Tactile gastronomy, high-end hospitality, architecture, and luxury fashion lookbooks shot with editorial precision.',
    tag: 'Stills',
  },
  {
    number: '04',
    title: 'CGI, 3D & AI Concepts',
    description: 'Photorealistic fluid simulations, product physics, and next-generation visual effects for competitive brand distinction.',
    tag: 'Innovation',
  },
];

export const HomeServicesTeaser: React.FC<HomeServicesTeaserProps> = ({
  onNavigateToServices,
  onOpenProjectInquiry,
}) => {
  return (
    <section className="py-24 border-b border-white/10 relative bg-[#0c0e0c]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                Capabilities Overview
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                Core Disciplines
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              One full-service studio. <br />
              <span className="text-[#dfff24]">Zero creative fragmentation</span>.
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={onNavigateToServices}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-white/15 hover:border-[#dfff24] text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white transition-all cursor-pointer"
            >
              <span>Explore All 6 Services</span>
              <span className="text-[#dfff24]">→</span>
            </button>
          </div>
        </div>

        {/* 4 Clean Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_DISCIPLINES.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-[#dfff24]/50 transition-all duration-300 group flex flex-col justify-between space-y-6 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-bold">
                  <span className="text-[#dfff24]">{item.number}</span>
                  <span className="text-zinc-400 uppercase tracking-wider">{item.tag}</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-5 group-hover:text-[#dfff24] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>In-House Capability</span>
                <span>↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Inquire Banner */}
        <div className="mt-12 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Need a custom agency retainer or dedicated production team?</h4>
            <p className="text-xs text-zinc-400">We work on project-by-project commissions and full-year creative retainers.</p>
          </div>

          <button
            onClick={onOpenProjectInquiry}
            type="button"
            className="px-6 py-2.5 rounded-full bg-[#dfff24] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer"
          >
            Inquire Capabilities
          </button>
        </div>

      </div>
    </section>
  );
};
