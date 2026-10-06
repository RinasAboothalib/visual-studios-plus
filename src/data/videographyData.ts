export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration?: string;
  description: string;
  thumbnailUrl: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'ai-brand-film',
    youtubeId: '8rb319vqBOU',
    title: 'Visual Studios Plus AI Brand Film',
    client: 'Visual Studios+',
    category: 'AI & Conceptual Direction',
    year: '2025',
    duration: '01:15',
    description: 'An avant-garde exploration of AI-generated visuals blended with cinematic brand storytelling, produced in-house by Visual Studios+.',
    thumbnailUrl: 'https://img.youtube.com/vi/8rb319vqBOU/maxresdefault.jpg'
  },
  {
    id: 'nescafe-cfw-movie',
    youtubeId: 'X1mnYvAqR0Q',
    title: 'Nescafé × Colombo Fashion Week | Brand Movie',
    client: 'Nescafé Gold & CFW',
    category: 'Fashion & Live Event',
    year: '2025',
    duration: '01:45',
    description: 'Spearheaded the social and broadcast campaign for Colombo Fashion Week and Nescafé Gold, blending runway fashion and flavor in real time.',
    thumbnailUrl: 'https://img.youtube.com/vi/X1mnYvAqR0Q/maxresdefault.jpg'
  },
  {
    id: 'swadeshi-khomba-womens-day',
    youtubeId: 'Qs635MKo0bk',
    title: "Swadeshi Khomba Women's Day Campaign 2025",
    client: 'Swadeshi Industrial Works',
    category: 'TVC & Cultural Narrative',
    year: '2025',
    duration: '01:00',
    description: 'Meaningful TVC celebrating the natural beauty, resilience, and everyday strength of Sri Lankan women through herbal care authenticity.',
    thumbnailUrl: 'https://img.youtube.com/vi/Qs635MKo0bk/maxresdefault.jpg'
  },
  {
    id: 'cinnamon-life-colombo',
    youtubeId: 'BAwEHwy27iQ',
    title: 'Cinnamon Life : "Experience Colombo" Brand Film',
    client: 'Cinnamon Hotels & Resorts',
    category: 'Luxury Hospitality & Travel',
    year: '2024',
    duration: '02:10',
    description: 'A dynamic, high-energy cinema tour capturing the vibrant spirit, urban nightlife, and five-star culinary luxury at Colombo’s iconic Cinnamon Life.',
    thumbnailUrl: 'https://img.youtube.com/vi/BAwEHwy27iQ/maxresdefault.jpg'
  },
  {
    id: 'itc-rathnadeepa-opening',
    youtubeId: '8eEUGr3GgfE',
    title: 'ITC Rathnadeepa Luxury Opening Video',
    client: 'ITC Hotels Colombo',
    category: 'Architectural & Hospitality',
    year: '2024',
    duration: '01:30',
    description: 'Cinematography and promotional films celebrating the opening of Colombo’s oceanfront landmark luxury hotel ITC Rathnadeepa.',
    thumbnailUrl: 'https://img.youtube.com/vi/8eEUGr3GgfE/maxresdefault.jpg'
  },
  {
    id: 'anantara-kalutara-christmas',
    youtubeId: 'zrg0c-l_TI8',
    title: 'Anantara Kalutara Festive Brand Film',
    client: 'Anantara Hotels & Resorts',
    category: 'Resort & Festive Campaign',
    year: '2025',
    duration: '01:20',
    description: 'Warm tropical festive storytelling capturing serene river and oceanfront moments at the Bawa-inspired Anantara Kalutara Resort.',
    thumbnailUrl: 'https://img.youtube.com/vi/zrg0c-l_TI8/maxresdefault.jpg'
  },
  {
    id: 'anantara-tangalle-christmas',
    youtubeId: 'p3-JEl4UfgI',
    title: 'Anantara Tangalle Peace Haven Film',
    client: 'Anantara Hotels & Resorts',
    category: 'Coastal Resort Luxury',
    year: '2025',
    duration: '01:15',
    description: 'Sensory visual narrative set on the secluded golden cliffs of southern Sri Lanka, capturing the romance and holiday magic of Tangalle.',
    thumbnailUrl: 'https://img.youtube.com/vi/p3-JEl4UfgI/maxresdefault.jpg'
  },
  {
    id: 'royal-ceylon-tea-film',
    youtubeId: 'BmyHG-58EaI',
    title: 'Royal Ceylon Tea Corporate Film',
    client: 'Royal Ceylon Tea',
    category: 'Heritage Corporate Film',
    year: '2024',
    duration: '02:30',
    description: 'From misty central highlands estate pluckers to orthodox tea manufacturing, showcasing Ceylon’s golden brew for global export.',
    thumbnailUrl: 'https://img.youtube.com/vi/BmyHG-58EaI/maxresdefault.jpg'
  },
  {
    id: 'keells-viman-press-video',
    youtubeId: 'TikjwBABG1k',
    title: 'John Keells Properties Viman Press Video',
    client: 'John Keells Properties',
    category: 'Real Estate & Architectural',
    year: '2024',
    duration: '01:50',
    description: 'Corporate and architectural film detailing the launch of the Viman residential enclave with 3D walk-through integration.',
    thumbnailUrl: 'https://img.youtube.com/vi/TikjwBABG1k/maxresdefault.jpg'
  },
  {
    id: 'hayleys-fiber-brand-video',
    youtubeId: 'kzg7lrHSkzE',
    title: 'Hayleys Fiber Haygreen Corporate Video',
    client: 'Hayleys PLC',
    category: 'Industrial & Sustainability',
    year: '2024',
    duration: '02:00',
    description: 'Highlighting global sustainable coir products, green engineering, and environmental leadership for Sri Lanka’s premier conglomerate.',
    thumbnailUrl: 'https://img.youtube.com/vi/kzg7lrHSkzE/maxresdefault.jpg'
  }
];
