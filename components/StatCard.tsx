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
        <span className="text-5xl md:text-6xl font-bold text-dark tracking-tight">{big}</span>
        <span className="text-lg text-yellow-dark ml-1">{unit}</span>
      </div>
      <p className="text-sm text-mid leading-relaxed">{desc}</p>
    </div>
  );
}
