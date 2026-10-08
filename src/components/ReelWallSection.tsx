import React from 'react';

interface ReelCard {
  id: string;
  client: string;
  title: string;
  category: string;
  metric: string;
  imageUrl: string;
}

const ROW_ONE_REELS: ReelCard[] = [
  {
    id: 'reel-1',
    client: "Pond's (Unilever)",
    title: 'Super Light Gel Sensory Ripple',
    category: 'Viral Skincare Reel',
    metric: '+142% Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-2',
    client: 'Nescafé Gold & CFW',
    title: 'Runway Speed Cut',
    category: 'Real-Time Event Drop',
    metric: '20K+ Per Video',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-3',
    client: 'Munchee CBL',
    title: 'Stix Wafer Toy Ladder Adventure',
    category: 'Bespoke AI & Stop-Motion',
    metric: '320K+ Interactions',
    imageUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-4',
    client: 'Knorr Sri Lanka',
    title: "Mother's Kitchen Memory",
    category: 'Emotional Storytelling',
    metric: '1.8M Video Views',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-5',
    client: 'Ahmad Tea London',
    title: 'Hibiscus Botanical Pour',
    category: 'Sensory Audio ASMR',
    metric: '+68% YoY Followers',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
  }
];

const ROW_TWO_REELS: ReelCard[] = [
  {
    id: 'reel-6',
    client: 'Swadeshi Khomba',
    title: 'Dew-Drop Herbal Care',
    category: 'Natural Wellness Reel',
    metric: 'Top Organic Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-7',
    client: 'Imorich Elephant House',
    title: 'Cheesecake Gelato Drizzle',
    category: 'Indulgence Cinematography',
    metric: '6M+ Impressions',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-8',
    client: 'SOZO Beverages',
    title: 'Tropical Fizz Splash',
    category: 'Beverage Launch Action',
    metric: 'High Conversion Reach',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-9',
    client: 'DSI Footwear',
    title: 'Dawn Commute to Boardroom',
    category: 'Empowerment Series',
    metric: '7-Day Turnaround',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'reel-10',
    client: 'MintPay FinTech',
    title: 'Split Payment Instant Joy',
    category: 'FinTech Commercial Series',
    metric: 'High ROAS Ad Funnel',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
  }
];

export const ReelWallSection: React.FC = () => {
  return (
    <section id="reels" className="py-24 border-b border-white/10 relative overflow-hidden glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full glass-card border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfff24]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#dfff24] font-bold">
                Social Campaign Wall
              </span>
              <span className="text-zinc-600 font-sans">|</span>
              <span className="font-sans text-xs text-zinc-300">
                Vertical 9:16 Archive
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Content engineered for <br />
              <span className="text-[#dfff24]">the vertical feeds that matter</span>.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md">
            Our specialized short-form cinematography and high-velocity editing workflows guarantee 
            maximum completion rate and viral audience retention across social channels.
          </p>
        </div>
      </div>

      {/* Row 1 — Moving Left */}
      <div className="relative w-full overflow-hidden mask-gradient-x py-3">
        <div className="animate-marquee flex items-center gap-5">
          {[...ROW_ONE_REELS, ...ROW_ONE_REELS].map((reel, idx) => (
            <div
              key={`${reel.id}-${idx}`}
              className="w-48 sm:w-56 aspect-[9/16] shrink-0 rounded-2xl overflow-hidden relative glass-card border border-white/10 hover:border-[#dfff24] transition-all duration-300 group cursor-pointer hover:scale-105 shadow-xl"
            >
              <img
                src={reel.imageUrl}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Hover Badge Details */}
              <div className="absolute inset-x-0 bottom-0 p-4 space-y-1">
                <span className="text-[10px] font-sans uppercase text-[#dfff24] font-bold block">
                  {reel.client}
                </span>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {reel.title}
                </h4>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-sans text-zinc-400">
                    {reel.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#dfff24] text-black font-sans font-bold text-[10px]">
                    {reel.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Moving Right */}
      <div className="relative w-full overflow-hidden mask-gradient-x py-3 mt-4">
        <div className="animate-marquee-reverse flex items-center gap-5">
          {[...ROW_TWO_REELS, ...ROW_TWO_REELS].map((reel, idx) => (
            <div
              key={`${reel.id}-${idx}`}
              className="w-48 sm:w-56 aspect-[9/16] shrink-0 rounded-2xl overflow-hidden relative glass-card border border-white/10 hover:border-[#dfff24] transition-all duration-300 group cursor-pointer hover:scale-105 shadow-xl"
            >
              <img
                src={reel.imageUrl}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Hover Badge Details */}
              <div className="absolute inset-x-0 bottom-0 p-4 space-y-1">
                <span className="text-[10px] font-sans uppercase text-[#dfff24] font-bold block">
                  {reel.client}
                </span>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {reel.title}
                </h4>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-sans text-zinc-400">
                    {reel.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#dfff24] text-black font-sans font-bold text-[10px]">
                    {reel.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
