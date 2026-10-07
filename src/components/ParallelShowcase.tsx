import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  Eye, 
  Users, 
  ChevronRight,
  Sliders,
  Play
} from 'lucide-react';
import { Project } from '../types/index.ts';

interface ParallelShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenProjectInquiry: () => void;
}

interface ParallelCase {
  id: string;
  projectId: string;
  brand: string;
  brandLogo: string;
  badge: string;
  tagline: string;
  
  // Side 1: The Business Challenge
  challengeHeadline: string;
  challengePoints: string[];
  initialMetric: { label: string; value: string; note: string };
  
  // Side 2: The Campaign & Results
  strategyHeadline: string;
  campaignChannels: string[];
  resultsHeadline: string;
  kpiStats: { label: string; value: string; trend: string }[];
  visualMedia: string;
  videoBadge?: string;
  accentColor: string;
}

const PARALLEL_CASES: ParallelCase[] = [
  {
    id: 'case-ponds',
    projectId: 'ponds-super-light-gel',
    brand: "Pond's Sri Lanka (Unilever)",
    brandLogo: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Unilever-A.png',
    badge: 'Social Media & Viral Launch',
    tagline: 'Super Light Gel 360° Digital Campaign',
    challengeHeadline: 'How to prove "Zero Heaviness" through a phone screen in tropical humidity?',
    challengePoints: [
      'Sri Lankan consumers were skeptical of gel moisturizers feeling sticky in tropical climate.',
      'Previous digital campaigns relied on static packshots with flat engagement and low conversion.',
      'Required a breakout short-form video concept to dominate Gen-Z skincare conversations.'
    ],
    initialMetric: {
      label: 'Initial Social Recall',
      value: '18%',
      note: 'Pre-campaign digital baseline'
    },
    strategyHeadline: 'High-Speed Macro Sensory Filmmaking + Viral Reels Wave',
    campaignChannels: ['Instagram Reels', 'TikTok Creators', 'Meta Paid Ads', 'Beauty Influencer Intercepts'],
    resultsHeadline: '+142% Social Engagement Lift & 2.8M Explosive Impressions',
    kpiStats: [
      { label: 'Engagement Lift', value: '+142%', trend: 'vs previous SKU launches' },
      { label: 'Total Impressions', value: '2.8M', trend: 'across Sri Lanka Meta feeds' },
      { label: 'Reel Completion Rate', value: '78%', trend: 'benchmark: 32%' },
      { label: 'Queries & Direct Orders', value: '+230%', trend: 'in retail comments & DMs' }
    ],
    visualMedia: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    videoBadge: 'Viral Sensory Reel',
    accentColor: '#38bdf8'
  },
  {
    id: 'case-nescafe',
    projectId: 'nescafe-colombo-fashion-week',
    brand: 'Nescafé Gold & CFW',
    brandLogo: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/American-Express-logo-a.png',
    badge: 'Real-Time Event & Social Takeover',
    tagline: 'High Fashion Meets Caffeine Flavor in Real Time',
    challengeHeadline: 'Producing cinema-grade content in real-time during live chaotic runway shows.',
    challengePoints: [
      'Traditional event recaps took 4 to 7 business days, missing the live social trend window.',
      'Nescafé needed to integrate organically with ultra-chic high-couture runway aesthetics.',
      'Zero room for editing delays during the high-velocity 3-day fashion marathon.'
    ],
    initialMetric: {
      label: 'Typical Turnaround Time',
      value: '72+ Hrs',
      note: 'Industry standard for event videos'
    },
    strategyHeadline: 'On-Ground Mobile Tethered Studio with < 45-Min Social Drop',
    campaignChannels: ['Real-Time Reels', 'Runway Cinematography', 'VIP Lounge Social Grid', 'Curated Stories'],
    resultsHeadline: '1.2M+ Real-Time Campaign Reach & 20K+ Direct Engagement Per Reel',
    kpiStats: [
      { label: 'Avg Engagement / Reel', value: '20K+', trend: 'direct organic likes & shares' },
      { label: 'Delivery Turnaround', value: '< 45 Mins', trend: 'from runway to Instagram publish' },
      { label: 'Organic Video Views', value: '850K+', trend: 'during event weekend alone' },
      { label: 'Featured Top Designers', value: '14+', trend: 'advocating Nescafé Gold' }
    ],
    visualMedia: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    videoBadge: 'Live Runway Film',
    accentColor: '#d4a373'
  },
  {
    id: 'case-munchee',
    projectId: 'munchee-festive-ai-lego',
    brand: 'Munchee CBL (Ceylon Biscuits)',
    brandLogo: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Munchee-Logo-a.png',
    badge: 'AI Creative & Festive Viral Campaign',
    tagline: 'AI Visual Storytelling Blended with Iconic Biscuits',
    challengeHeadline: 'Cutting through overwhelming Christmas holiday advertising noise.',
    challengePoints: [
      'Every major consumer brand floods television and social feeds with predictable festive tropes.',
      'Munchee wanted to appeal to both nostalgic families and digital-native youth.',
      'Required a distinct visual world that could highlight 6 top biscuit SKUs playfully.'
    ],
    initialMetric: {
      label: 'Holiday Social Clutter',
      value: '500+ Ads',
      note: 'Competing FMCG festive campaigns'
    },
    strategyHeadline: 'Bespoke Generative AI Concept Art Blended with Lego Stop-Motion',
    campaignChannels: ['AI Video Concept Series', 'Stop-Motion Instagram Carousels', 'Interactive Story Contests'],
    resultsHeadline: '320K+ Interactions & Highest Organic Share Rate of the Season',
    kpiStats: [
      { label: 'Total Interactions', value: '320K+', trend: 'comments, shares & saves' },
      { label: 'Visual Uniqueness', value: '100%', trend: 'custom-trained visual models' },
      { label: 'Top SKUs Featured', value: '6 Items', trend: 'Stix, Rollz, Bourbon, Hawiian' },
      { label: 'Audience Sentiment', value: '98% +', trend: 'delight & nostalgic excitement' }
    ],
    visualMedia: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1200&q=80',
    videoBadge: 'AI & Stop-Motion',
    accentColor: '#e11d48'
  },
  {
    id: 'case-ahmad',
    projectId: 'ahmad-tea-retainer',
    brand: 'Ahmad Tea London',
    brandLogo: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/AhmadTeaLogoTransparent-a.png',
    badge: 'Full Digital Channel Retainer',
    tagline: 'Elevating British & Ceylon Tea Heritage Daily',
    challengeHeadline: 'Transforming an established tea legacy into a dynamic daily social habit.',
    challengePoints: [
      'Global brand guidelines demanded flawless visual consistency and high-end elegance.',
      'Needed a continuous stream of weekly assets without escalating production overhead.',
      'Audiences sought modern tea mixology, wellness infusions, and sensorial tea moments.'
    ],
    initialMetric: {
      label: 'Monthly Content Output',
      value: '4 Posts',
      note: 'Previous external agency cadence'
    },
    strategyHeadline: 'End-to-End Retainer Engine: 24+ Monthly Studio Assets & ASMR Audio',
    campaignChannels: ['Weekly Table Styling', 'ASMR Sensory Video', 'Seasonal Influencer Kits', 'Community Nurturing'],
    resultsHeadline: '+68% YoY Follower Growth & 24+ High-Res Monthly Assets',
    kpiStats: [
      { label: 'Follower Growth', value: '+68%', trend: 'year-over-year organic increase' },
      { label: 'Monthly Production', value: '24+ Assets', trend: 'reels, carousels, photo flatlays' },
      { label: 'Retention Rate', value: '100%', trend: 'ongoing multi-year agency partnership' },
      { label: 'Cost Efficiency', value: '3.4x', trend: 'content output vs ad-hoc shoots' }
    ],
    visualMedia: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    videoBadge: 'Sensory Tea Retainer',
    accentColor: '#eab308'
  }
];

export const ParallelShowcase: React.FC<ParallelShowcaseProps> = ({
  onSelectProject,
  onOpenProjectInquiry
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'parallel' | 'challenge' | 'results'>('parallel');
  const sectionRef = useRef<HTMLElement>(null);

  const activeCase = PARALLEL_CASES[activeCaseIndex];

  // Parallel movement offset calculation based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we have scrolled (-1 to 1)
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = rect.height + windowHeight;
        const current = windowHeight - rect.top;
        const progress = Math.min(Math.max(current / total, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax delta calculations
  const leftColumnOffsetY = (scrollProgress - 0.5) * -35;
  const rightColumnOffsetY = (scrollProgress - 0.5) * 35;

  return (
    <section 
      ref={sectionRef} 
      id="results" 
      className="py-24 border-b border-white/10 relative bg-gradient-to-b from-[#0c0e0c] via-zinc-950 to-[#0c0e0c] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] blur-[170px] rounded-full pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: activeCase.accentColor }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#dfff24]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Apple-style Badge & Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                The Results Engine
              </span>
              <span className="text-zinc-600 font-mono">|</span>
              <span className="font-mono text-xs text-zinc-300">
                Parallel Impact Model
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              We take a project for your business. <br />
              <span className="bg-gradient-to-r from-[#dfff24] via-lime-200 to-white bg-clip-text text-transparent">
                Then we deliver verified results.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed font-normal">
              Unlike traditional agencies that stop at pretty pictures, we design full-funnel social media, 
              creative campaigns, and digital marketing systems engineered to crush business targets. 
              Scroll below to explore how the problem and our proven outcome move in parallel.
            </p>
          </div>

          {/* Perspective mode switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/90 border border-white/10 self-start md:self-end">
            <button
              onClick={() => setViewMode('parallel')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'parallel' 
                  ? 'bg-[#dfff24] text-black shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Parallel Duo
            </button>
            <button
              onClick={() => setViewMode('challenge')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'challenge' 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              The Problem
            </button>
            <button
              onClick={() => setViewMode('results')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'results' 
                  ? 'bg-lime-400 text-black shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              The Results
            </button>
          </div>
        </div>

        {/* Case Selector Tabs (Horizontal Interactive Scrubber) */}
        <div className="relative mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {PARALLEL_CASES.map((item, idx) => {
              const isActive = activeCaseIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 border-[#dfff24] text-white shadow-[0_0_25px_rgba(223,255,36,0.15)] scale-[1.02]'
                      : 'bg-zinc-950/80 border-white/10 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-transform ${
                    isActive ? 'bg-[#dfff24] scale-125' : 'bg-zinc-600 group-hover:bg-zinc-400'
                  }`} />
                  <div className="text-left">
                    <p className={`text-xs font-bold font-mono tracking-wider uppercase transition-colors ${
                      isActive ? 'text-[#dfff24]' : 'text-zinc-400'
                    }`}>
                      {item.brand}
                    </p>
                    <p className="text-sm font-extrabold text-white">
                      {item.badge}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                    isActive ? 'rotate-90 text-[#dfff24]' : 'text-zinc-600 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= APPLE-STYLE PARALLEL DUAL-COLUMN CONTAINER ================= */}
        <div className="relative">
          
          {/* Main Dual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* COLUMN 1: THE BUSINESS CHALLENGE & OBJECTIVE (Moving in parallel) */}
            <div 
              className={`transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/10 relative overflow-hidden backdrop-blur-sm ${
                viewMode === 'results' ? 'hidden lg:flex opacity-30 pointer-events-none' : 'flex'
              }`}
              style={{
                transform: `translateY(${leftColumnOffsetY}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                      Phase 01 // The Problem
                    </span>
                    <span className="text-xs font-extrabold text-white">
                      Business Challenge &amp; Baseline
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-mono text-zinc-300">
                  Client Brief
                </div>
              </div>

              {/* Problem Details */}
              <div className="my-8 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {activeCase.challengeHeadline}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    {activeCase.tagline}
                  </p>
                </div>

                {/* Challenge bullet points */}
                <div className="space-y-3">
                  {activeCase.challengePoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5">
                      <span className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Initial Baseline Metric Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-zinc-400">
                      {activeCase.initialMetric.label}
                    </span>
                    <span className="text-xs text-red-400 font-mono">Pre-Agency</span>
                  </div>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {activeCase.initialMetric.value}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {activeCase.initialMetric.note}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-300 font-mono">
                <span>Visual Studios Plus Strategic Audit</span>
                <span className="text-zinc-400 font-bold">Step 1 of 2</span>
              </div>
            </div>

            {/* COLUMN 2: THE CAMPAIGN & PROVEN BUSINESS RESULTS (Moving in parallel) */}
            <div 
              className={`transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-[#dfff24]/40 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)] ${
                viewMode === 'challenge' ? 'hidden lg:flex opacity-30 pointer-events-none' : 'flex'
              }`}
              style={{
                transform: `translateY(${rightColumnOffsetY}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Glow Accent Stripe */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: activeCase.accentColor }}
              />

              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#dfff24]/10 border border-[#dfff24]/30 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#dfff24]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#dfff24] font-bold block">
                      Phase 02 // The Execution &amp; ROI
                    </span>
                    <span className="text-xs font-extrabold text-white">
                      Social Media &amp; Campaign Impact
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#dfff24] text-black font-extrabold text-xs">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>Delivered</span>
                </div>
              </div>

              {/* Media Preview & Campaign Strategy */}
              <div className="my-6 space-y-6">
                
                {/* Visual Card with Media Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group shadow-lg">
                  <img
                    src={activeCase.visualMedia}
                    alt={activeCase.tagline}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Floating Video / Media Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-white text-white" />
                    <span>{activeCase.videoBadge}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs font-mono uppercase text-[#dfff24] font-bold">
                      The Execution Strategy
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                      {activeCase.strategyHeadline}
                    </p>
                  </div>
                </div>

                {/* Campaign Channel Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  {activeCase.campaignChannels.map((channel) => (
                    <span
                      key={channel}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300"
                    >
                      {channel}
                    </span>
                  ))}
                </div>

                {/* 4 Massive KPI Stat Blocks (The Core Results) */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-[#dfff24]" />
                    <h4 className="text-sm font-extrabold text-white tracking-wide uppercase font-mono">
                      Verified Business Impact
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {activeCase.kpiStats.map((kpi, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#dfff24]/50 transition-colors group"
                      >
                        <p className="text-xs text-zinc-400 font-medium">
                          {kpi.label}
                        </p>
                        <p className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mt-1 group-hover:text-[#dfff24] transition-colors">
                          {kpi.value}
                        </p>
                        <p className="text-[11px] text-zinc-400 mt-0.5 truncate">
                          {kpi.trend}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Triggers */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#dfff24] transition-colors group"
                >
                  <span>See full client case study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={onOpenProjectInquiry}
                  className="px-4 py-2 rounded-full bg-white text-black hover:bg-[#dfff24] font-bold text-xs transition-all hover:scale-105 cursor-pointer shadow-md"
                >
                  Deliver Results For My Business
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner on Real Growth */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#dfff24]/10 border border-[#dfff24]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#dfff24]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                Ready to take your business to market with real numbers?
              </h4>
              <p className="text-sm text-zinc-400 mt-1">
                From strategy, production, and editing to multi-channel deployment, we measure every single campaign.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenProjectInquiry}
              className="px-6 py-3 rounded-full bg-[#dfff24] text-black font-extrabold text-sm hover:scale-105 transition-all shadow-lg cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
