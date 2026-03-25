import type { ChartDataPoint, ActivityItem } from '../types';

export const WEEKLY_MIGRATIONS: readonly ChartDataPoint[] = [
  { label: 'Mon', value: 8 },
  { label: 'Tue', value: 12 },
  { label: 'Wed', value: 6 },
  { label: 'Thu', value: 15 },
  { label: 'Fri', value: 10 },
  { label: 'Sat', value: 3 },
  { label: 'Sun', value: 1 },
] as const;

export const TYPE_BREAKDOWN: readonly ChartDataPoint[] = [
  { label: 'DNG Requirements', value: 42 },
  { label: 'DOORS Requirements', value: 35 },
  { label: 'TestSpec', value: 28 },
  { label: 'SW Architecture', value: 22 },
  { label: 'DOORS DSD', value: 15 },
  { label: 'DNG DSD', value: 10 },
  { label: 'Rhapsody DSD', value: 4 },
] as const;

export const TOP_USERS: readonly ChartDataPoint[] = [
  { label: 'Nguyen Van A', value: 28 },
  { label: 'Tran Thi B', value: 22 },
  { label: 'Le Van C', value: 18 },
  { label: 'Pham Thi D', value: 15 },
  { label: 'Hoang Van E', value: 12 },
] as const;

export const DASHBOARD_STATS = {
  totalRequests: 156,
  activeMigrations: 5,
  activeBreakdown: '3 running, 2 queued',
  successRate: 94.2,
  healthyServices: '8/8 services',
} as const;

export const RECENT_ACTIVITY: readonly ActivityItem[] = [
  { user: 'Nguyen Van A', action: 'started', type: 'DNG Requirements', timeAgo: '5 min ago' },
  { user: 'Tran Thi B', action: 'completed', type: 'DOORS Requirements', timeAgo: '1 hour ago' },
  { user: 'Le Van C', action: 'failed', type: 'TestSpec', timeAgo: '2 hours ago' },
  { user: 'Pham Thi D', action: 'scheduled', type: 'Rhapsody DSD', timeAgo: '3 hours ago' },
  { user: 'Hoang Van E', action: 'completed', type: 'DNG DSD', timeAgo: '5 hours ago' },
] as const;
