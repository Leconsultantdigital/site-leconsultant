'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  const serviceColors = [
    { accent: 'from-yellow-100 to-yellow-50', icon: '🚀', textAccent: 'text-yellow' },
    { accent: 'from-blue-100 to-blue-50', icon: '📊', textAccent: 'text-blue-600' },
    { accent: 'from-green-100 to-green-50', icon: '🏆', textAccent: 'text-green-600' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">💼 Services</p>
          <h2 className="text-4xl md:text-4xl font-bold text-dark mb-4">
            3 services<br />
            qui<span className="text-yellow"> transforment</span>
          </h2>
        </div>

        {/* Services Grid — Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const { accent, icon, textAccent } = serviceColors[i] || serviceColors[0];
            return (
              <div
                key={i}
                className={`
                  group
                  bg-gradient-to-br ${accent}
                  rounded-3xl p-8 md:p-10
                  border-2 border-white/60
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl hover:border-yellow/30
                  ${i === 1 ? 'md:scale-105' : ''}
                `}
              >
                {/* Top: Icon + Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{icon}</div>
                  <div className={`text-2xl font-bold ${textAccent}`}>
                    {service.num}
                  </div>
                </div>

                {/* Accent line on hover */}
                <div 
                  className={`h-1 w-0 bg-yellow rounded-full mb-6 transition-all duration-500 group-hover:w-12`}
                />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Pitch */}
                <p className="text-sm text-mid mb-6 leading-relaxed">
                  {service.pitch}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-yellow text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-dark font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className={`
                    inline-flex items-center gap-2
                    font-semibold text-dark
                    hover:text-yellow
                    transition-colors duration-300
                    group/link
                  `}
                >
                  En savoir plus
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-mid mb-6 text-lg">
            Envie de combiner plusieurs services?
          </p>
          <a href="/contact" className="btn btn-accent">
            Demander un audit personnalisé →
          </a>
        </div>
      </div>
    </section>
  );
}
