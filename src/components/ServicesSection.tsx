import React, { useState } from 'react';

interface EditorialService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  scope: string[];
  bgImage: string;
}

const EDITORIAL_SERVICES: EditorialService[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'STRATEGY',
    tagline: 'Consumer insights, competitive differentiation, and growth funnels.',
    scope: ['Audience Persona Mapping', 'Platform Cadence Strategy', 'Brand Positioning Architecture'],
    bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'social-media',
    number: '02',
    title: 'SOCIAL MEDIA',
    tagline: 'End-to-end management, daily momentum, and community nurturing.',
    scope: ['Weekly Editorial Calendars', 'Community Growth & Engagement', 'Social Listening & Trend Hacking'],
    bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'digital-campaigns',
    number: '03',
    title: 'DIGITAL CAMPAIGNS',
    tagline: '360° viral launches built for record-breaking market recall.',
    scope: ['Launch Teaser-to-Convert Funnels', 'Influencer Intercept Strategy', 'Multi-Platform Ad Variations'],
    bgImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'content-creation',
    number: '04',
    title: 'CONTENT CREATION',
    tagline: 'Fast-turnaround studio assets that turn scrollers into buyers.',
    scope: ['Sensory Macro Filmmaking', 'Real-Time Event Drops', 'Product Still Life Styling'],
    bgImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'photography',
    number: '05',
    title: 'PHOTOGRAPHY',
    tagline: 'Tactile luxury across Gastronomy, Architecture, and High Fashion.',
    scope: ['Culinary Food & Beverage Styling', 'Luxury Hospitality & Interiors', 'High Jewellery & Diamond Lighting'],
    bgImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'videography',
    number: '06',
    title: 'VIDEOGRAPHY',
    tagline: 'Cinema cameras, director direction, and broadcast post-production.',
    scope: ['4K/6K Cinema Master Delivery', 'DaVinci Resolve Color Grading', 'Original Sound Scoring & SFX'],
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'branding',
    number: '07',
    title: 'BRANDING',
    tagline: 'Packaging, label architecture, and comprehensive brand guidelines.',
    scope: ['Logotype & Monogram Systems', 'FMCG Can & Bottle Dielines', 'Visual Identity Architecture'],
    bgImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'tvc-commercials',
    number: '08',
    title: 'TVC / COMMERCIALS',
    tagline: 'National broadcast commercials and digital high-speed spots.',
    scope: ['Scriptwriting & Storyboarding', 'Full Studio & Location Filming', 'Online/Offline Media Resizes'],
    bgImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'cgi-ai-creative',
    number: '09',
    title: 'CGI / AI CREATIVE',
    tagline: 'Photorealistic 3D simulations and custom generative visual worlds.',
    scope: ['Liquid Dynamic Simulation', '8K Architectural CGI Renders', 'Custom-Trained Generative Concepts'],
    bgImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1600&q=80'
  }
];

interface ServicesSectionProps {
  onOpenProjectInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenProjectInquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(EDITORIAL_SERVICES[0].id);

  const activeService = EDITORIAL_SERVICES.find((s) => s.id === activeServiceId) || EDITORIAL_SERVICES[0];

  return (
    <section id="services" className="py-28 border-b border-white/10 relative overflow-hidden glass-panel">
      
      {/* Dynamic Background Image Reveal on Hover */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-700">
        <img
          key={activeService.id}
          src={activeService.bgImage}
          alt={activeService.title}
          className="w-full h-full object-cover object-center filter grayscale opacity-20 contrast-125 transition-all duration-700 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/80 to-[#0c0e0c]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                ( 04 ) What We Do
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                Editorial Service Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Capabilities built for <br />
              <span className="text-[#dfff24]">end-to-end commercial momentum</span>.
            </h2>
          </div>

          <div className="flex items-center self-start md:self-end shrink-0">
            <button
              onClick={onOpenProjectInquiry}
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#dfff24] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all hover:scale-105 shadow-md cursor-pointer shrink-0"
            >
              Inquire Capabilities →
            </button>
          </div>
        </div>

        {/* Large Editorial Typography Service List */}
        <div className="space-y-2">
          {EDITORIAL_SERVICES.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`group py-5 sm:py-7 px-6 sm:px-10 rounded-3xl transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'glass-card border-[#dfff24]/60 bg-black/60 shadow-2xl scale-[1.01]'
                    : 'border-transparent hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      isActive ? 'text-[#dfff24]' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}>
                      {service.number}
                    </span>

                    <h3 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Tagline & Scope Pills */}
                  <div className="lg:max-w-md lg:text-right space-y-2">
                    <p className={`text-xs sm:text-sm transition-colors font-medium leading-relaxed ${
                      isActive ? 'text-zinc-200' : 'text-zinc-500'
                    }`}>
                      {service.tagline}
                    </p>

                    <div className="flex flex-wrap lg:justify-end gap-1.5 pt-1">
                      {service.scope.map((item) => (
                        <span
                          key={item}
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                            isActive
                              ? 'glass-panel border-white/20 text-zinc-300'
                              : 'bg-zinc-900/40 text-zinc-600'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
