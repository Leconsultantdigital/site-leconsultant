import type { ReactNode } from 'react';

// Croissance / Professionnels
export const UsersIcon = () => (
  <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Étoile
export const StarIcon = () => (
  <svg className="w-8 h-8 text-yellow" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Localisation
export const BadgeIcon = () => (
  <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Service icon set (Lucide-style, 2px stroke) — keyed by SERVICES[].icon
const SERVICE_ICON_PATHS: Record<string, ReactNode> = {
  book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />,
  bot: <><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><line x1="12" y1="7" x2="12" y2="11" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></>,
  chart: <><line x1="3" y1="20" x2="21" y2="20" /><polyline points="5 16 10 11 14 14 20 6" /><polyline points="15 6 20 6 20 11" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  award: <><circle cx="12" cy="9" r="6" /><polyline points="9 14 7.5 22 12 19 16.5 22 15 14" /></>,
};

export const ServiceIcon = ({ name, size = 28 }: { name: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    {SERVICE_ICON_PATHS[name] || SERVICE_ICON_PATHS.book}
  </svg>
);
