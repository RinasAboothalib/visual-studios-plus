import React, { useState, useEffect, useRef } from 'react';
import { CLIENT_PARTNERS } from '../data/projectsData.ts';

interface MetricItem {
  number: string;
  label: string;
  context: string;
  client: string;
}

const REAL_METRICS: MetricItem[] = [
  {
    number: '+142%',
    label: 'Social Engagement Lift',
    context: 'Viral launch campaign vs previous FMCG benchmark',
    client: "Pond's (Unilever)"
  },
  {
    number: '1.2M+',
    label: 'Campaign Reach in 48h',
    context: 'Real-time runway drops and designer storytelling',
    client: 'Nescafé Gold & CFW'
  },
  {
    number: '320K+',
    label: 'Direct Social Interactions',
    context: 'Bespoke AI visual concepts & Lego stop-motion',
    client: 'Munchee CBL'
  },
  {
    number: '20K+',
    label: 'Engagement Per Video Drop',
    context: 'Immediate on-ground social reels turnaround',
    client: 'Colombo Fashion Week'
  },
  {
    number: '+68%',
    label: 'YoY Social Follower Growth',
    context: 'End-to-end multi-year channel management retainer',
    client: 'Ahmad Tea London'
  },
  {
    number: '8K',
    label: 'Photorealistic CGI Fidelity',
    context: 'Architectural liquid simulation for luxury retail',
    client: 'Dankotuwa Porcelain'
  }
];

export const ResultsSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="results" 
      className="py-28 border-b border-white/10 relative overflow-hidden bg-[#0c0e0c]"
    >
      {/* BRAND LOGOS BACKGROUND WATERMARK MOSAIC */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle animated marquee rows of authentic brand logo badges */}
        <div className="absolute inset-0 flex flex-col justify-around opacity-30 select-none py-6 space-y-6">
          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div 
                key={`b1-${client.name}-${idx}`} 
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/90 shadow-md shrink-0 border border-white/20"
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-7 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 animate-marquee-reverse whitespace-nowrap">
            {[...CLIENT_PARTNERS.slice().reverse(), ...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div 
                key={`b2-${client.name}-${idx}`} 
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/90 shadow-md shrink-0 border border-white/20"
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-7 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, idx) => (
              <div 
                key={`b3-${client.name}-${idx}`} 
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/90 shadow-md shrink-0 border border-white/20"
              >
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="h-7 max-w-[110px] object-contain filter contrast-125"
                  />
                ) : (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic dark glass gradient so text and metric cards are 100% sharp and readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-black/75 to-[#0c0e0c]" />
        <div className="absolute inset-0 bg-[#0c0e0c]/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                ( 05 ) Verified ROI
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs text-zinc-300 font-medium">
                The Performance Engine
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              We take projects for businesses. <br />
              <span className="text-[#dfff24]">Here are the verified results</span>.
            </h2>
          </div>

          <p className="text-sm text-zinc-300 max-w-md font-medium leading-relaxed">
            No vanity metrics. Every campaign is measured against real commercial benchmarks: 
            engagement rate, audience growth, brand sentiment, and conversion recall.
          </p>
        </div>

        {/* 6 High-Impact Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`p-8 rounded-3xl glass-card border border-white/10 hover:border-[#dfff24]/60 transition-all duration-700 group hover:-translate-y-1 shadow-2xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase text-[#dfff24] font-bold tracking-wider">
                  {metric.client}
                </span>
                <span className="text-[10px] uppercase text-zinc-400 font-bold">
                  Verified Metric
                </span>
              </div>

              <div className="py-6">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:text-[#dfff24] transition-colors">
                  {metric.number}
                </p>
                <h3 className="text-lg font-bold text-zinc-200 mt-2">
                  {metric.label}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                  {metric.context}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
