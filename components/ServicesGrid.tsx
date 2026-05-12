'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="card">
              {/* Number badge */}
              <div className="text-4xl font-bold text-yellow mb-4">{service.num}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-dark mb-3">
                {service.title}
              </h3>

              {/* Pitch */}
              <p className="text-sm md:text-base text-mid mb-6 leading-relaxed">
                {service.pitch}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-8">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-mid flex items-start gap-2">
                    <span className="text-yellow mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dark hover:text-yellow transition"
              >
                En savoir plus <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
