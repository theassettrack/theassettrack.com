export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  videoUrl?: string;
  imageUrl?: string;
  ctaText: string;
  ctaLink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedIn?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroContent {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    action: () => void;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundVideo?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  backgroundPattern?: 'noise' | 'gyrate' | 'none';
}