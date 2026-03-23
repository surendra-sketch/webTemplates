import { ReactNode } from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}