export interface ProjectVideo {
  id: string;
  title: string;
  brand: string;
  views: string;
  category: 'AI & Technology' | 'Product Review' | 'Educational Content' | 'Lifestyle' | 'Brand Campaign';
  platform: 'TikTok' | 'Instagram' | 'Reels' | 'YouTube Shorts';
  thumbnail: string;
  videoUrl?: string;
  objective?: string;
  description?: string;
  metrics?: {
    views?: string;
    likes?: string;
    comments?: string;
    saves?: string;
    shares?: string;
    engagementRate?: string;
  };
  keyTakeaway?: string;
}

export interface BrandCollaboration {
  id: string;
  name: string;
  instagramHandle: string;
  instagramUrl: string;
  category: string;
  description: string;
  logo: string;
  accentColor?: string;
  featuredStat?: string;
}
