import React from 'react';

export enum Status {
  Active = 1,
  Inactive = 0
}

export enum NewsCategory {
  Headline = 'headline',
  Party = 'party',
  Business = 'business'
}

export enum PublishStatus {
  Draft = 0,
  Published = 1
}

export interface NewsItem {
  id: number;
  title: string;
  category: NewsCategory;
  author: string;
  publishAt: string;
  status: PublishStatus;
  views: number;
}

export enum EnterpriseCategory {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

export interface Enterprise {
  id: number;
  name: string;
  category: EnterpriseCategory;
  legalPerson: string;
  registeredCapital: string; // e.g., "500万"
  contactPhone: string;
  status: Status;
}

export enum ActivityStatus {
  Upcoming = 'upcoming',
  Ongoing = 'ongoing',
  Ended = 'ended'
}

export interface Activity {
  id: number;
  title: string;
  location: string;
  startTime: string;
  status: ActivityStatus;
  participants: number;
  maxParticipants: number;
}

export enum SupplyDemandType {
  Supply = 'supply',
  Demand = 'demand'
}

export interface SupplyDemand {
  id: number;
  type: SupplyDemandType;
  title: string;
  publisher: string;
  date: string;
  status: 'active' | 'expired' | 'closed';
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}