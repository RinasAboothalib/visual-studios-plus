export type Category = 
  | 'all'
  | 'case-studies'
  | 'retainers'
  | 'branding'
  | 'tvc'
  | 'photography';

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  clientLogo?: string;
  category: Category;
  categoryLabel: string;
  year: string;
  tags: string[];
  thumbnail: string;
  heroImage?: string;
  headline: string;
  description: string;
  overview: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  resultsHighlight?: string;
  beforeAfter?: {
    before: string;
    after: string;
    metricGrowth: string;
  };
  campaignChannels?: string[];
  stats?: ProjectStat[];
  deliverables: string[];
  galleryImages: string[];
  videoUrl?: string;
  featured?: boolean;
  accentColor?: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
}

export interface PhotoItem {
  id: string;
  title: string;
  client: string;
  category: 'hospitality' | 'food' | 'jewellery' | 'fashion';
  categoryLabel: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface ClientPartner {
  name: string;
  category: string;
  logoUrl?: string;
}
