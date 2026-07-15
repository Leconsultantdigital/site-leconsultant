'use client';

import StatCard from './StatCard';
import { STATS } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <span className="eyebrow">Résultats mesurables</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Pas des promesses. Des chiffres.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <StatCard key={i} tag={stat.tag} big={stat.big} unit={stat.unit} desc={stat.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
