import { Project, Service, PhotoItem, ClientPartner } from '../types/index.ts';

export interface EnrichedClientPartner extends ClientPartner {
  brandColor: string;
  badgeBg?: string;
}

export const CLIENT_PARTNERS: EnrichedClientPartner[] = [
  { 
    name: 'Unilever', 
    category: 'FMCG Global', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Unilever-A.png',
    brandColor: '#1F36C7',
    badgeBg: '#ffffff'
  },
  { 
    name: 'American Express', 
    category: 'Finance & Luxury', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/American-Express-logo-a.png',
    brandColor: '#006FCF',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Omega', 
    category: 'Swiss Luxury', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Omega_Logo-a.png',
    brandColor: '#C40D2E',
    badgeBg: '#ffffff'
  },
  { 
    name: 'CBL Munchee', 
    category: 'FMCG Food', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Munchee-Logo-a.png',
    brandColor: '#E11D48',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Keells', 
    category: 'Supermarkets', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/keellslogo-a.png',
    brandColor: '#008848',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Hilton', 
    category: 'Luxury Hospitality', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/hilton-a.png',
    brandColor: '#0A2540',
    badgeBg: '#ffffff'
  },
  { 
    name: 'UNDP', 
    category: 'Global Development', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/UNDP_logo-1.png',
    brandColor: '#006699',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Ahmad Tea London', 
    category: 'Beverage', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/AhmadTeaLogoTransparent-a.png',
    brandColor: '#0F382A',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Cinnamon Hotels', 
    category: 'Resorts & Hotels', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Cinnamon-Logo-a.png',
    brandColor: '#6A1B9A',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Multilac', 
    category: 'Paints & Finishes', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Multilac-Logo-a.png',
    brandColor: '#D32F2F',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Mövenpick Hotels', 
    category: 'Hospitality', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Movenpick_Hotels__Resorts_logo-a.png',
    brandColor: '#8C1D40',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Walker Tours', 
    category: 'Travel & Tourism', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Walker-Tours-A.png',
    brandColor: '#0284C7',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Uber Eats', 
    category: 'Technology & Food', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/ubereats-a.png',
    brandColor: '#06C167',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Shangri-La', 
    category: 'Hospitality', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Shangri-La-a.png',
    brandColor: '#A68244',
    badgeBg: '#ffffff'
  },
  { 
    name: 'ITC Hotels', 
    category: 'Luxury Hospitality', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/ITC-a.png',
    brandColor: '#8B0000',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Il Gelato', 
    category: 'Artisanal Gelato', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Il-Gelato-a.png',
    brandColor: '#0284C7',
    badgeBg: '#ffffff'
  },
  { 
    name: 'Cosmopolitan', 
    category: 'Media & Fashion', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Cosmopoliton-a.png',
    brandColor: '#E91E63',
    badgeBg: '#ffffff'
  },
  { 
    name: 'The Face Shop', 
    category: 'Beauty Care', 
    logoUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/The-faceshop-logo-a.png',
    brandColor: '#2E7D32',
    badgeBg: '#ffffff'
  },
];

export const PROJECTS: Project[] = [
  // ===================== DIGITAL CASE STUDIES =====================
  {
    id: 'nescafe-colombo-fashion-week',
    title: 'Nescafé × Colombo Fashion Week',
    client: 'Nescafé (Nestlé) & CFW',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2025',
    tags: ['Real-Time Production', 'Fashion Week', 'Social Reels', 'Event Coverage'],
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=80',
    headline: 'Where High Fashion Meets Caffeine Flavor in Real Time',
    description: 'We spearheaded the entire social media campaign for Colombo Fashion Week and Nescafé collaboration, crafting a strategy that seamlessly blended runway fashion and flavor. Capturing Sri Lanka’s top designers, stylists, and industry figures in real-time, we delivered dynamic content that positioned Nescafé as a true trendsetter.',
    overview: 'During CFW 2025, our on-ground production crew ran an end-to-end studio inside the venue, editing and publishing high-tempo Instagram Reels within minutes of runway walks. By contrasting chic high-couture looks with steaming cups of Nescafé Gold, we created an engaging caffeine-fueled takeover.',
    challenge: 'Producing cinema-grade content in real-time during live, chaotic runway events while keeping Nescafé Gold organic and central to the fashion narrative.',
    solution: 'A rapid turnaround workflow with dual shooting teams (runway & VIP lounge), immediate tethered colour grading, and instant audio mastering for social reels.',
    stats: [
      { label: 'Engagement Per Reel', value: '20K+' },
      { label: 'Total Campaign Reach', value: '1.2M+' },
      { label: 'Content Turnaround', value: '< 45 Mins' },
      { label: 'Featured Designers', value: '14+' }
    ],
    results: [
      'Each video released achieved over 20K in direct engagement',
      'Positioned Nescafé Gold as the chic conversation staple of Colombo Fashion Week',
      'Over 85K organic video views across CFW weekend'
    ],
    deliverables: ['Real-Time Reels Videography', 'Runway Fashion Photography', 'Influencer Intercepts', 'VIP Lounge Social Grid Curation'],
    galleryImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#d4a373'
  },
  {
    id: 'ponds-super-light-gel',
    title: "Pond's Super Light Gel Launch",
    client: "Pond's Sri Lanka (Unilever)",
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['Beauty & Skincare', 'Product Photography', 'Viral Reel Campaign', '360° Digital'],
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=80',
    headline: 'Dive into 200% Instant Hydration with Zero Heaviness',
    description: "For Pond's Sri Lanka, we conceptualized and executed a dynamic viral campaign for Pond's Super Light Gel, featuring captivating photography and engaging social media reels. Through teasers, launch posts, and post-launch engagement, the campaign went viral across social media platforms.",
    overview: "We highlighted the water-light sensorial texture of the gel through macro high-speed photography and vibrant lifestyle reels. The campaign messaging focused on 'Zero Heaviness' and '200% Instant Hydration' designed to engage young tropical consumers looking for non-greasy skincare.",
    challenge: 'Communicating the ultra-lightweight, non-sticky gel texture through a digital screen in a humid climate market.',
    solution: 'Sensory macro photography showing water ripples, bouncing gel scoops, and radiant fresh skin tones combined with short-form user testimonial reels.',
    stats: [
      { label: 'Social Engagement Lift', value: '+142%' },
      { label: 'Impression Count', value: '2.8M' },
      { label: 'Video Completion Rate', value: '78%' }
    ],
    results: [
      'Pond’s Super Light Gel emerged as the top viral skincare SKU of the quarter',
      'Community comments and product queries surged by 230%',
      'Teaser-to-launch funnel achieved maximum consumer recall'
    ],
    deliverables: ['Sensory Macro Photography', 'Social Media Reels Series', 'Paid Ad Video Variations', 'Product Storyboards'],
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'undp-hackadev',
    title: 'UNDP Sri Lanka — HackaDev Social Innovation',
    client: 'United Nations Development Programme',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['Social Impact', 'Trilingual Campaign', 'Island-wide Photography', 'Posters'],
    thumbnail: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80',
    headline: 'Empowering Grassroots Innovators Across All 9 Provinces',
    description: 'We partnered with UNDP to showcase their Hackathon project, promoting social innovation through a trilingual campaign. Our work included poster design, social media content, and island-wide authentic documentary photography.',
    overview: 'By following a clear event timeline and creating content in Sinhala, English, and Tamil, we ensured the HackaDev campaign resonated with youth, students, and rural entrepreneurs across Sri Lanka, turning abstract development goals into relatable human stories.',
    challenge: 'Reaching diverse youth demographics across cultural and linguistic boundaries outside the capital city.',
    solution: 'Authentic documentary fieldwork documenting local innovators in tea country, rural farms, and provincial tech labs, wrapped in bilingual and trilingual graphic layouts.',
    stats: [
      { label: 'Provinces Covered', value: 'All 9' },
      { label: 'Languages', value: '3 (Trilingual)' },
      { label: 'Applicants Recruited', value: '1,500+' }
    ],
    results: [
      'Record-breaking submissions from rural innovators',
      'High commendation from international UNDP communications directors',
      'Trilingual social poster series #INNO4DEV shared across civic channels'
    ],
    deliverables: ['Island-Wide Field Photography', 'Trilingual Social Campaign Design', 'Event Timeline Strategy', 'Print & Digital Posters'],
    galleryImages: [
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#006699'
  },
  {
    id: 'dankotuwa-porcelain-cgi',
    title: 'Dankotuwa Porcelain CGI World',
    client: 'Dankotuwa Porcelain PLC',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['CGI Animation', 'Photorealistic 3D', 'Luxury Tableware', 'Visual Effects'],
    thumbnail: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1800&q=80',
    headline: 'Breathtaking 3D CGI Animation for World-Class Porcelain',
    description: 'For Dankotuwa Porcelain, we brought the beauty of shared moments to life through a monumental CGI concept; capturing the warmth of tea pouring, quiet elegance of design, and the intimacy of everyday rituals. From concept to final animation, every frame was thoughtfully crafted.',
    overview: 'We placed a giant photorealistic cobalt tea set suspended gracefully over their flagship retail storefront, pouring liquid Ceylon tea into a teacup while pedestrians snapped selfies. Combined with macro product animations showing translucent glaze and fine gold trim, this elevated Dankotuwa into the luxury digital conversation.',
    stats: [
      { label: 'CGI Asset Fidelity', value: '8K Render' },
      { label: 'Organic Video Views', value: '450K+' },
      { label: 'Brand Sentiment', value: '+91% Positive' }
    ],
    deliverables: ['Architectural CGI Integration', 'Liquid Dynamic Simulation', 'Tableware 3D Model Suite', 'Digital Commercial Renders'],
    galleryImages: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#60a5fa'
  },
  {
    id: 'ministry-of-crab',
    title: 'Ministry of Crab Gastronomy',
    client: 'Ministry of Crab (Asia’s 50 Best)',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['Culinary Cinematography', 'Gastronomy', 'Luxury Dining', 'Fine Food'],
    thumbnail: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1800&q=80',
    headline: 'Sensory Visuals for Asia’s Most Celebrated Seafood Institution',
    description: 'We created premium visual content for Sri Lanka’s iconic Ministry of Crab, covering both photography and videography to highlight its rich culinary heritage, massive wild mud crabs, and world-class seafood.',
    overview: 'Capturing chef Dharshan Munidasa’s culinary mastery in the Old Dutch Hospital kitchen: sizzling garlic chilli prawns, pepper crab coated in whole black peppercorns, and steaming clay pots. Visuals were tuned for global high-net-worth travellers and international food lovers.',
    stats: [
      { label: 'Restaurant Status', value: "Asia's 50 Best" },
      { label: 'International Reach', value: 'Global Foodies' },
      { label: 'Asset Library', value: '200+ Shots' }
    ],
    deliverables: ['Culinary Food Photography', 'Master Chef Action Films', 'Social Grid Aesthetic Direction', 'Digital Menu Visuals'],
    galleryImages: [
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80',
      'https://visualstudiosplus.com/wp-content/uploads/2024/09/CurryLeaf.webp'
    ],
    featured: true,
    accentColor: '#f97316'
  },
  {
    id: 'american-express-swim-week',
    title: 'American Express × Swim Week Colombo',
    client: 'Nations Trust Bank / American Express',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['Luxury Finance', 'Fashion Runway', 'High-Net-Worth Strategy', 'VIP Events'],
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=80',
    headline: '“Don’t Live Without It” — Title Partner Fashion Campaign',
    description: 'As the title partner of Swim Week Colombo, American Express was positioned as a premium fashion card with its global tagline, “Don’t Live Without It.” At Visual Studios Plus, we created a compelling digital presence through video and photography.',
    overview: 'From pre-event fashion card teasers to dramatic black obsidian stone product hero stills and high-energy runway video highlights, our coverage highlighted the card’s seamless luxury lifestyle privileges.',
    stats: [
      { label: 'Card Position', value: 'Ultra-Premium' },
      { label: 'Deliverable Turnaround', value: 'Real-time Daily' },
      { label: 'VIP Reach', value: 'High Net Worth' }
    ],
    deliverables: ['Runway Cinematography', 'Card & Obsidian Photography', 'Pre-Event Teaser Campaigns', 'Post-Event Highlight Film'],
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#0ea5e9'
  },
  {
    id: 'knorr-mothers-day',
    title: 'Knorr Mother’s Day Campaign',
    client: 'Knorr (Unilever Sri Lanka)',
    category: 'case-studies',
    categoryLabel: 'Digital Case Study',
    year: '2024',
    tags: ['Emotional Storytelling', 'Mother’s Day', 'Culinary TVC', 'Family Love'],
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    headline: 'Celebrating the Women Who Bring Warmth, Care & Flavour Home',
    description: 'For Mother’s Day, we partnered with Knorr Sri Lanka to craft a heartfelt campaign celebrating the women who bring warmth, care, and flavour to every home.',
    overview: 'We brought together home cooks, mothers, daughters, and young culinary trainees to recount their earliest memories of mothers’ home-cooked meals. Combined with appetizing cooking visuals, the campaign touched millions of Sri Lankan hearts.',
    stats: [
      { label: 'Social Video Views', value: '1.8M' },
      { label: 'Engagement Rate', value: '8.4%' },
      { label: 'Sentimental Score', value: '98% Positive' }
    ],
    deliverables: ['Docu-style Brand Film', 'Social Reels Series', 'Food Recipe Photography', 'Paid YouTube Amplification'],
    galleryImages: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#16a34a'
  },

  // ===================== DIGITAL RETAINERS =====================
  {
    id: 'munchee-festive-ai-lego',
    title: 'Munchee CBL — Festive AI & Lego Campaign',
    client: 'Ceylon Biscuits Limited (CBL)',
    category: 'retainers',
    categoryLabel: 'Digital Retainer',
    year: '2024',
    tags: ['AI Visual Generation', 'Festive Campaign', 'Lego Stop-Motion', 'FMCG Social'],
    thumbnail: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1800&q=80',
    headline: 'Blending the Magic of Legos with Sri Lanka’s Favorite Biscuits',
    description: 'For Munchee CBL, we brought Christmas to life with a unique AI-powered campaign, blending the magic of Legos with their iconic biscuits. From concept to execution, we crafted an engaging social media experience that captured festive joy through creativity and innovation.',
    overview: 'Using state-of-the-art AI-generated visuals, we placed miniature Lego characters interacting with real Munchee products: scaling giant Stix strawberry wafer sticks with toy ladders, building Santa winter cabins around Chocolate Rollz, and surfing chocolate rivers on Bourbon cookies.',
    stats: [
      { label: 'AI Visual Generation', value: '100% Bespoke' },
      { label: 'Total Interactions', value: '320K+' },
      { label: 'Products Featured', value: '6 Top SKUs' }
    ],
    deliverables: ['AI Visual Concept Generation', 'Stop-Motion Reel Direction', 'Social Carousel Storyboards', 'Festive Contests'],
    galleryImages: [
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#e11d48'
  },
  {
    id: 'ahmad-tea-retainer',
    title: 'Ahmad Tea London — Digital Channel Retainer',
    client: 'Ahmad Tea London',
    category: 'retainers',
    categoryLabel: 'Digital Retainer',
    year: '2024–2026',
    tags: ['Social Retainer', 'Tea Flatlays', 'Sensory Video', 'Content Production'],
    thumbnail: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1800&q=80',
    headline: 'Captivating Content Celebrating British & Ceylon Tea Heritage',
    description: 'We create captivating content for Ahmad Tea, a leading tea brand in Sri Lanka, including engaging reels that emphasize the rich heritage and quality of their teas. From strategy to execution, we manage their social channels end-to-end.',
    overview: 'Our ongoing retainer encompasses weekly studio table styling for infusions (Mixed Berries & Hibiscus, Lemon & Ginger, Peppermint, Cinnamon Haze, Green Tea, Rooibos), pairing sensory audio reels with tea-pairing guides.',
    stats: [
      { label: 'Retainer Scope', value: 'End-to-End' },
      { label: 'Monthly Assets', value: '24+ High-Res' },
      { label: 'Follower Growth', value: '+68% YoY' }
    ],
    deliverables: ['Full Social Management', 'Botanical Macro Photography', 'Reels Production & ASMR Audio', 'Seasonal Influencer Boxes'],
    galleryImages: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#eab308'
  },
  {
    id: 'swisstek-aluminium-retainer',
    title: 'Swisstek Aluminium — Technical & Solar Strategy',
    client: 'Swisstek Aluminium PLC',
    category: 'retainers',
    categoryLabel: 'Digital Retainer',
    year: '2024',
    tags: ['B2B & B2C Social', 'Solar Energy', 'Industrial Storytelling', 'Lead Generation'],
    thumbnail: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    headline: 'Results-Driven Social Media Strategy for Architectural Systems',
    description: 'At Visual Studios Plus, we crafted a results-driven social media strategy for Swisstek Aluminium, delivering compelling content and impactful designs that enhanced their digital presence.',
    overview: 'We transformed industrial manufacturing into engaging educational carousels: showing solar roof structures, corrosion resistance tests, and energy-saving calculations that generated direct residential and commercial inquiries.',
    deliverables: ['Solar Educational Infographics', 'Site Worker Cinematography', 'Bilingual Social Copywriting', 'Targeted Meta Ad Funnels'],
    galleryImages: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#84cc16'
  },
  {
    id: 'swadeshi-khomba-retainer',
    title: 'Swadeshi Khomba — Natural Herbal Digital Presence',
    client: 'Swadeshi Industrial Works PLC',
    category: 'retainers',
    categoryLabel: 'Digital Retainer',
    year: '2024–2026',
    tags: ['Herbal Wellness', 'Organic Social', 'Skin Health', 'Paid Ad Management'],
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    headline: 'Bringing the Essence of Nature and Neem Healing to Life',
    description: 'Bringing the essence of nature to life, we manage Swadeshi Khomba’s digital presence with engaging content, visually captivating designs, and strategic paid campaigns.',
    overview: 'Our visual team creates fresh botanical sets featuring natural Kohomba (neem) leaves, lemongrass dew, and herbal soap foams to communicate dermatological protection and daily purity.',
    deliverables: ['Creative Content Direction', 'Ayurvedic Botanical Photography', 'Paid Media Performance', 'Community Management'],
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#10b981'
  },
  {
    id: 'imorich-gelato-retainer',
    title: 'Imorich Ice Cream — 5-Year Creative Partnership',
    client: 'Imorich (Elephant House)',
    category: 'retainers',
    categoryLabel: 'Digital Retainer',
    year: '2020–2025',
    tags: ['Long-Term Retainer', 'Gourmet Gelato', 'Event Activations', 'Social Buzz'],
    thumbnail: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1800&q=80',
    headline: 'Elevating Premium Indulgence for Over 5 Consecutive Years',
    description: 'We captured stunning visuals, dynamic reels, and crafted strategic social media campaigns to elevate Imorich’s brand presence for over 5 years. Through compelling storytelling and high-quality photography, we highlighted their premium flavors.',
    overview: 'From Italian architectural storytelling for Raspberry Cheesecake Gelato and Hazelnut Chocolate Delight, to Colombo street takeovers with the Imorich Santa Convertible and the legendary 90s Dance Party activation.',
    stats: [
      { label: 'Partnership Duration', value: '5+ Years' },
      { label: 'Flavors Launched', value: '14+ Premium SKUs' },
      { label: 'Annual Impressions', value: '6M+' }
    ],
    deliverables: ['Indulgence Photography', 'Experiential Event Coverage', 'Viral Social Contests', 'Packaging Visual Renders'],
    galleryImages: [
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#ec4899'
  },

  // ===================== BRANDING PROJECTS =====================
  {
    id: 'sozo-beverages-branding',
    title: 'SOZO Sparkling Drinks — Identity & Can Design',
    client: 'SOZO Beverages',
    category: 'branding',
    categoryLabel: 'Branding Project',
    year: '2024',
    tags: ['Packaging Design', 'Identity System', 'Beverage Can Labels', 'Summer Lifestyle'],
    thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1800&q=80',
    headline: 'Clean, Refreshing and Full of Tropical Character',
    description: 'A fresh identity for SOZO crafted to reflect the vibrancy of its flavours, from the purity of original to the tropical notes of passion fruit and mango, each label was thoughtfully designed to capture the essence of the drink clean, refreshing and full of character.',
    overview: 'We designed the vibrant aluminium can series with illustrative botanical motifs, crisp modern typography, and executed the ice splash campaign photography that cemented SOZO as the cool coastal drink.',
    deliverables: ['Full Brand Identity', 'Can Label Graphic Architecture', 'Product Launch Campaign', 'Splash Action Photography'],
    galleryImages: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#facc15'
  },
  {
    id: 'too-good-chocolatier',
    title: 'Too Good Dessert Chocolatier',
    client: 'Too Good Chocolatier',
    category: 'branding',
    categoryLabel: 'Branding Project',
    year: '2024',
    tags: ['Luxury Chocolates', 'Packaging Architecture', 'Logo Design', 'Artisanal Food'],
    thumbnail: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80',
    headline: 'Premium, Distinctive and Irresistibly Crafted Visual Language',
    description: 'We crafted a refined identity for too good chocolatier, beginning with logo design and extending into a cohesive brand guideline. The journey into label design for pistachio kunafection and crunchy biscoveries capturing its richness and indulgence.',
    overview: 'Featuring custom retro-inspired display typography, rich yellow chocolate sleeve wrappers, and hot pink branded carry bags that make the chocolates unforgettable gifts.',
    deliverables: ['Logotype & Monogram Design', 'Chocolate Bar Packaging Wrap', 'Retail Gift Bag Packaging', 'Visual Brand Guidelines'],
    galleryImages: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#eab308'
  },
  {
    id: 'viva-la-vida-skincare',
    title: 'Viva La Vida Pharma Skincare',
    client: 'Viva La Vida Skincare',
    category: 'branding',
    categoryLabel: 'Branding Project',
    year: '2024',
    tags: ['Quiet Luxury', 'Dermocosmetics', 'Bottle Labels', 'Rigid Box Packaging'],
    thumbnail: 'https://images.unsplash.com/photo-1608248597359-56cb2f2e4682?auto=format&fit=crop&w=1200&q=80',
    headline: 'Consistency and Quiet Luxury Across Every Skincare Touchpoint',
    description: 'We created a refined visual expression for viva la vida skincare through thoughtfully designed labels across its product range, along with cohesive packaging. Each element was crafted to reflect the brand’s essence; fresh, gentle and elevated.',
    overview: 'With deep forest green magnetic rigid boxes, frosted pump bottles, and a clinical yet soothing typographic design for body gels, serums, and hydrating boosters.',
    deliverables: ['Pharmaceutical Skincare Brand Guide', 'Bottle & Pump Label System', 'Luxury Box Unboxing Experience', 'Minimal Studio Photography'],
    galleryImages: [
      'https://images.unsplash.com/photo-1608248597359-56cb2f2e4682?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#059669'
  },
  {
    id: 'cairns-bicycle-works',
    title: 'CBW (Cairns Bicycle Works) — Australia',
    client: 'Cairns Bicycle Works',
    category: 'branding',
    categoryLabel: 'Branding Project',
    year: '2023',
    tags: ['Sporting Identity', 'Minimalist Logomark', 'Outdoor Brand', 'Apparel & Decals'],
    thumbnail: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    headline: '“The Journey of a Bicycle Never Ends”',
    description: 'CBW is a bicycle shop with a rich history rooted in the cycling culture of Cairns. Established in 1997 as a spin-off from the bike man cairns CBW has evolved from a small repair shop into a high-end bicycle store.',
    overview: 'This minimalist logo is inspired by the sleek lines of a bicycle, using geometric triangles and sharp aerodynamics to convey motion and adventure. Its clean yellow and black design reflects modern high-end performance.',
    deliverables: ['Geometric Dynamic Logomark', 'Bicycle Frame Decal System', 'Store Signage & Interior Walls', 'Campaign Posters'],
    galleryImages: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#eab308'
  },
  {
    id: 'te-dalu-hotel-ella',
    title: 'Te Dalu — Boutique Hotel Ella',
    client: 'Te Dalu Boutique Hotel',
    category: 'branding',
    categoryLabel: 'Branding Project',
    year: '2023',
    tags: ['Hospitality Branding', 'Boutique Hotel', 'Amenity Packaging', 'Ella Hill Country'],
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    headline: 'Capturing the Charm, Surroundings & Sense of Place in Ella',
    description: 'We crafted a distinctive identity for Te Dalu, a boutique hotel in Ella, beginning with logo design and comprehensive brand guide. The experience was extended through a series of unique label designs that echo the hotel’s character.',
    overview: 'A stylized golden lotus and tea bud emblem evokes Ella’s lush mountain atmosphere. We applied the identity to ceramic mugs, cork coasters, bath amenities, and staff uniforms.',
    deliverables: ['Boutique Hotel Brand Identity', 'Guest Amenity Label Suite', 'Merchandise (Mugs, Coasters, T-Shirts)', 'Signage Guidelines'],
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#ca8a04'
  },

  // ===================== TVC CAMPAIGNS =====================
  {
    id: 'viva-malted-avurudu-tvc',
    title: 'Viva Malted Food Drink — Avurudu Series',
    client: 'Viva Sri Lanka',
    category: 'tvc',
    categoryLabel: 'TVC Campaign',
    year: '2024',
    tags: ['TVC Video Series', 'Avurudu Festive', 'Sinhala Cultural', 'Celebrity Talent'],
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    headline: 'Making Avurudu Celebrations Even More Special and Memorable',
    description: 'For the Viva Avurudu Campaign with a video series, we crafted a vibrant and engaging digital experience, celebrating the essence of the Sinhala and Tamil New Year. Through captivating visuals, strategic storytelling, and interactive content, we connected with audiences.',
    overview: 'Produced with authentic festival set dressing, Avurudu sweetmeats, traditional drumming, and warm family reunions, highlighting Viva’s role in starting every festive morning right.',
    deliverables: ['Multi-Episode Commercial Video Series', 'TVC Broadcast Edit', 'YouTube & Instagram Cutdowns', 'Festival Social Banners'],
    galleryImages: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#dc2626'
  },
  {
    id: 'mintpay-digital-vouchers-tvc',
    title: 'MintPay — Digital Vouchers Commercial',
    client: 'MintPay Sri Lanka',
    category: 'tvc',
    categoryLabel: 'TVC Campaign',
    year: '2024',
    tags: ['Commercial TVC', 'FinTech Gifting', 'Digital Production', 'High-Speed Filming'],
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    headline: 'From Concept to Screen: Full-Scale Commercial Production',
    description: 'From concept to screen; we brought MintPay’s Digital Vouchers to life with a full-scale commercial production. From scripting and storyboarding to filming and final edit, every frame was crafted to connect, engage, and inform.',
    overview: 'Highlighting the ease and flexibility of digital gifting, combining humorous domestic scenarios with high-energy visuals and seamless voucher redemption moments.',
    deliverables: ['Scriptwriting & Storyboards', 'Live Commercial Studio Shoot', 'Visual FX & Motion Graphics', 'Online/Offline Media Resizes'],
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#059669'
  },
  {
    id: 'swadeshi-khomba-womens-day-tvc',
    title: 'Swadeshi Khomba — Women’s Day TVC',
    client: 'Swadeshi Industrial Works',
    category: 'tvc',
    categoryLabel: 'TVC Campaign',
    year: '2024',
    tags: ['Emotional TVC', 'Women’s Day', 'Cultural Authenticity', 'Herbal Heritage'],
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    headline: 'Celebrating the Strength & Natural Beauty of Sri Lankan Women',
    description: 'We produced a meaningful TVC for Swadeshi Khomba’s Women’s Day campaign, celebrating the strength and natural beauty of Sri Lankan women. Centered around the brand’s iconic herbal soap, the ad blended emotional storytelling with cultural authenticity.',
    overview: 'Cinematography across diverse Sri Lankan backdrops celebrating mothers, athletes, artists, and entrepreneurs embracing nature’s care.',
    deliverables: ['Concept & Narrative Screenplay', 'Full TV Broadcast Production', 'Original Score & Sound Design', 'Social Micro-Vignettes'],
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#10b981'
  },
  {
    id: 'dsi-womens-day-tvc',
    title: 'DSI Footwear — Everyday Journeys',
    client: 'DSI Samson Group',
    category: 'tvc',
    categoryLabel: 'TVC Campaign',
    year: '2024',
    tags: ['Footwear TVC', 'Fast Turnaround', 'Inspiring Women', 'National Broadcast'],
    thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80',
    headline: 'Celebrating the Strength and Everyday Strides of Sri Lankan Women',
    description: 'From conceptualisation to post-production, we handled the full creative and executional scope of DSI’s Women’s Day video. Navigating fast turnarounds, shifting creative elements, and detailed production planning, our team brought to life a narrative that celebrates everyday journeys.',
    overview: 'Focusing on the sneakers and shoes that carry women through dawn commutes, executive boardrooms, athletics, and family life.',
    deliverables: ['Concept & Execution in 7 Days', 'On-Location Cinematography', 'Sound Mix & Color Grading', 'Multi-Platform Ad Deployment'],
    galleryImages: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: false,
    accentColor: '#8b5cf6'
  },

  // ===================== COMMERCIAL PHOTOGRAPHY =====================
  {
    id: 'sapphire-dragon-hilton',
    title: 'Sapphire Dragon Chinese Restaurant',
    client: 'Hilton Colombo / DoubleTree by Hilton',
    category: 'photography',
    categoryLabel: 'Commercial Photography',
    year: '2024',
    tags: ['Gourmet Photography', 'Luxury Hospitality', 'Hilton Dining', 'Food Styling'],
    thumbnail: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1800&q=80',
    headline: 'Elevating Premium Hospitality & Fine Dining for Hilton Colombo',
    description: 'We delivered end-to-end content and paid media solutions for Hilton Colombo, Hilton Residencies, and DoubleTree by Hilton; covering photography, videography, and digital campaigns that elevated their premium hospitality presence.',
    overview: 'Shot with high-definition directional lighting capturing sizzling clay pot dishes, stir-fried garlic kangkung, wok-tossed lobster, and artisanal Chinese dim sum plated on traditional blue and white ceramic tableware.',
    deliverables: ['Culinary Food Photography & Styling', 'Hilton Social Media Asset Library', 'Menu Shoot & Printed Collataral', 'Paid Dining Promotions'],
    galleryImages: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true,
    accentColor: '#e11d48'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'videography',
    index: '01',
    title: 'Videography & TVC Production',
    tagline: 'Films made to be experienced, not simply viewed.',
    description: 'A full-scale production team in-house — from scriptwriting, storyboarding, location scouting, cinema gear, and director direction to post-production, sound scoring, and broadcast color grading.',
    features: [
      'Commercial TVCs & Broadcast Spots',
      'High-Speed Social Reels & Real-Time Event Filming',
      'Corporate & Brand Documentaries',
      'Visual Effects & Motion Graphics Integration'
    ],
    deliverables: ['4K/6K Master Delivery', '9:16 Social Cutdowns', 'Clean Audio & Original SFX', 'Color Grading (DaVinci Resolve)']
  },
  {
    id: 'photography',
    index: '02',
    title: 'Commercial Photography',
    tagline: 'Capturing tactile desire and quiet luxury in every frame.',
    description: 'Specialized studio and location photography across Food & Beverage, Hospitality & Architecture, High Fashion, Fine Jewellery, and FMCG packaging.',
    features: [
      'Gourmet Food Styling & Macro Gastronomy',
      'Luxury Hotels, Resorts & Architectural Interiors',
      'High-Jewellery & Diamond Macro Lighting',
      'High-End Fashion & E-Commerce Catalogues'
    ],
    deliverables: ['High-Resolution Retouched Files', 'Print & Billboard Masters', 'Digital-Optimized Assets', 'Color-Calibrated Profiles']
  },
  {
    id: 'digital-strategy',
    index: '03',
    title: 'Digital Retainers & Strategy',
    tagline: 'Daily momentum and viral relevance for leading brands.',
    description: 'We partner on monthly retainers with Sri Lanka’s favorite consumer brands to handle social channels end-to-end: editorial calendars, continuous video creation, community growth, and viral trends.',
    features: [
      'End-to-End Social Media Management',
      'Viral Short-Form Content (Reels, TikTok, Shorts)',
      'Community Management & Trend Hacking',
      'Analytics, Insights & Ongoing Iteration'
    ],
    deliverables: ['Monthly Production Days', 'Weekly Scheduled Posts', 'Performance Dashboards', 'Dedicated Creative Team']
  },
  {
    id: 'branding-identity',
    index: '04',
    title: 'Branding, CGI & Creative Direction',
    tagline: 'Distinctive identities built to stand out in the new retail landscape.',
    description: 'From core logo architecture and packaging label design to photorealistic 3D CGI rendering and AI-assisted visual conceptualisation.',
    features: [
      'Brand Identity Systems & Visual Guidelines',
      'FMCG Packaging & Label Design Suites',
      'Photorealistic 3D CGI Commercial Visuals',
      'Generative AI Creative Visual Storytelling'
    ],
    deliverables: ['Vector Brand Guides', 'Dielines & Print-Ready Packaging', '3D Asset Turnarounds', 'Digital Brand Ecosystem']
  },
  {
    id: 'paid-media',
    index: '05',
    title: 'Paid Media & Performance Marketing',
    tagline: 'Pivoting creative assets into quantifiable commercial impact.',
    description: 'Great content deserves to be seen by the exact right audience. We architect, manage, and optimize paid digital media across Meta, Google, and YouTube.',
    features: [
      'Audience Persona Segmentation',
      'Meta (Facebook & Instagram) Performance Ads',
      'YouTube Pre-Roll & TrueView Strategy',
      'Conversion Rate Optimization (CRO)'
    ],
    deliverables: ['Live ROAS Tracking', 'A/B Creative Testing', 'Regional Island-Wide Geo Targeting', 'Transparent Spend Auditing']
  }
];

export const PHOTOGRAPHY_ITEMS: PhotoItem[] = [
  // Hospitality & Architecture
  {
    id: 'photo-hosp-1',
    title: 'Regal Reseau Luxury Courtyard',
    client: 'Regal Reseau Hotel',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Interiors',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/D85_3829-HDR.webp',
    aspect: 'landscape'
  },
  {
    id: 'photo-hosp-2',
    title: 'ITC Rathnadeepa Ocean Suite',
    client: 'ITC Hotels Colombo',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Interiors',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/D85_2304.webp',
    aspect: 'landscape'
  },
  {
    id: 'photo-hosp-3',
    title: 'Pussellawa Villa Verandah',
    client: 'Pussellawa Hotel',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Interiors',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/DJI_0078-HDR.webp',
    aspect: 'landscape'
  },
  {
    id: 'photo-hosp-4',
    title: 'Heritage Courtyard Pool Reflection',
    client: 'Boutique Collection',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Interiors',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/7.webp',
    aspect: 'landscape'
  },

  // Food & Beverage
  {
    id: 'photo-food-1',
    title: 'Keells Gourmet Fresh Harvest Platter',
    client: 'Keells Super',
    category: 'food',
    categoryLabel: 'Food & Beverage',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/KeelesFoodPhotography0403.webp',
    aspect: 'portrait'
  },
  {
    id: 'photo-food-2',
    title: 'Curry Leaf Colombo Seafood Spread',
    client: 'Hilton Colombo',
    category: 'food',
    categoryLabel: 'Food & Beverage',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/CurryLeaf.webp',
    aspect: 'landscape'
  },
  {
    id: 'photo-food-3',
    title: 'Fresh Bakery & Pastry Artisanal Selection',
    client: 'Keells Food Art',
    category: 'food',
    categoryLabel: 'Food & Beverage',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/KeelesFoodPhotography0314.webp',
    aspect: 'portrait'
  },
  {
    id: 'photo-food-4',
    title: 'Traditional Pumpkin Curry & Red Rice Bowl',
    client: 'Ministry of Food',
    category: 'food',
    categoryLabel: 'Food & Beverage',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'square'
  },

  // Jewellery & Luxury
  {
    id: 'photo-jewel-1',
    title: 'Palliyaguruge Diamond & Gemstone Solitaire',
    client: 'Palliyaguruge Jewellers',
    category: 'jewellery',
    categoryLabel: 'Fine Jewellery',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Palliyaguruge-Jewellers2.webp',
    aspect: 'square'
  },
  {
    id: 'photo-jewel-2',
    title: 'Tiesh Ceylon Sapphire Crown Collection',
    client: 'Tiesh Jewellers',
    category: 'jewellery',
    categoryLabel: 'Fine Jewellery',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Tiesh-7077-1.webp',
    aspect: 'portrait'
  },
  {
    id: 'photo-jewel-3',
    title: 'Handcrafted Gold Bangle & Silk Drape',
    client: 'Private Luxury Atelier',
    category: 'jewellery',
    categoryLabel: 'Fine Jewellery',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  },

  // Fashion & Lifestyle
  {
    id: 'photo-fashion-1',
    title: 'Raspberry Accessories Summer Turquoise',
    client: 'Raspberry Accessories',
    category: 'fashion',
    categoryLabel: 'Fashion & Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape'
  },
  {
    id: 'photo-fashion-2',
    title: 'Swim Week Colombo Runway Couture',
    client: 'Swim Week Colombo',
    category: 'fashion',
    categoryLabel: 'Fashion & Editorial',
    imageUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/DSC_1657-2.webp',
    aspect: 'portrait'
  },
  {
    id: 'photo-fashion-3',
    title: 'Editorial Haute Couture Model Study',
    client: 'Exclusive Lines Launch',
    category: 'fashion',
    categoryLabel: 'Fashion & Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    aspect: 'portrait'
  }
];

export const AGENCY_STATS = [
  { value: '50+', label: 'Premier Brands Partnered' },
  { value: '10M+', label: 'Organic Digital Views' },
  { value: '5+ Yrs', label: 'Average Client Retainer' },
  { value: '100%', label: 'In-House Production Team' }
];

export const STUDIO_INFO = {
  name: 'Visual Studios Plus',
  shortName: 'VS+',
  tagline: 'We create content meant to be experienced. Not simply consumed.',
  location: 'Level 1, 36 Haig Road, Colombo 04, Sri Lanka',
  phonePrimary: '+94 74 043 6639',
  phoneSecondary: '+94 74 043 5332',
  email: 'info@visualstudiosplus.com',
  showreelUrl: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Sequence-01.mp4',
  heroCover: 'https://visualstudiosplus.com/wp-content/uploads/2024/09/Cover.jpeg',
  behance: 'https://www.behance.net/visual-studios',
  youtube: 'https://www.youtube.com/@visualstudiosplus',
  facebook: 'https://www.facebook.com/visualstudiosplus/',
};
