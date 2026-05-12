'use client';

import StatCard from './StatCard';
import { STATS } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={i}
              tag={stat.tag}
              big={stat.big}
              unit={stat.unit}
              desc={stat.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
