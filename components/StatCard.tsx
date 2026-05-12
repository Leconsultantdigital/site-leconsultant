'use client';

export interface StatCardProps {
  tag: string;
  big: string;
  unit: string;
  desc: string;
}

export default function StatCard({ tag, big, unit, desc }: StatCardProps) {
  return (
    <div className="card">
      <div className="text-xs font-bold text-mid uppercase tracking-widest mb-4">{tag}</div>
      <div className="mb-4">
        <span className="text-4xl font-bold text-dark">{big}</span>
        <span className="text-lg text-mid ml-1">{unit}</span>
      </div>
      <p className="text-sm text-mid leading-relaxed">{desc}</p>
    </div>
  );
}
