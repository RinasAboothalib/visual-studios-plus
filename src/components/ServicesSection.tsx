import React, { useState } from 'react';
import { ArrowUpRight, Check, Film, Camera, TrendingUp, Sparkles, Target } from 'lucide-react';
import { SERVICES } from '../data/projectsData.ts';

interface ServicesSectionProps {
  onOpenProjectInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenProjectInquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'videography': return <Film className="w-5 h-5 text-[#dfff24]" />;
      case 'photography': return <Camera className="w-5 h-5 text-[#dfff24]" />;
      case 'digital-strategy': return <TrendingUp className="w-5 h-5 text-[#dfff24]" />;
      case 'branding-identity': return <Sparkles className="w-5 h-5 text-[#dfff24]" />;
      case 'paid-media': return <Target className="w-5 h-5 text-[#dfff24]" />;
      default: return <Sparkles className="w-5 h-5 text-[#dfff24]" />;
    }
  };

  return (
    <section id="services" className="py-24 border-b border-white/10 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24]">
                ( 03 )
              </span>
              <div className="h-px w-8 bg-zinc-800" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Visual content, end to end.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md">
            From in-house film production and photography to the digital strategy that puts it in front of millions of consumers.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                    isActive
                      ? 'bg-zinc-900 border-[#dfff24]/60 text-white shadow-xl'
                      : 'bg-zinc-900/30 border-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#dfff24]">
                      {service.index}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full ${isActive ? 'bg-[#dfff24] text-black' : 'text-zinc-600'}`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Service Deep-Dive Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#dfff24]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Service Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700">
                {getServiceIcon(activeService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#dfff24] uppercase tracking-wider">
                  Service {activeService.index}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed pt-2 mb-8 border-b border-zinc-800 pb-6">
              {activeService.description}
            </p>

            {/* Features & Deliverables Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#dfff24]">
                  Key Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {activeService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dfff24] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Deliverables Produced
                </h4>
                <ul className="space-y-2.5">
                  {activeService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                In-house production team in Colombo 04
              </span>

              <button
                onClick={onOpenProjectInquiry}
                type="button"
                className="px-6 py-3 rounded-full bg-[#dfff24] hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
              >
                <span>Book This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
