'use client';

export interface TestimonialCardProps {
  stars: number;
  text: string;
  name: string;
  role: string;
  initials: string;
}

export default function TestimonialCard({ stars, text, name, role, initials }: TestimonialCardProps) {
  return (
    <div className="card">
      <div className="text-yellow text-lg mb-4">{'★'.repeat(stars)}</div>
      <blockquote className="text-mid italic mb-6 leading-relaxed">
        « {text} »
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow text-dark rounded-full flex items-center justify-center font-bold text-sm">
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-dark">{name}</div>
          <div className="text-xs text-mid">{role}</div>
        </div>
      </div>
    </div>
  );
}
