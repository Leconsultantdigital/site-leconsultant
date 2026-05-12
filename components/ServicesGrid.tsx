'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { FormationIcon, MarketingIcon, LocalIcon } from '@/components/ServiceIcons';

export default function ServicesGrid() {
  const serviceColors = [
    {
      accent: 'from-secondary/20 via-secondary/10 to-secondary/5',
      accentLine: 'bg-secondary',
      icon: FormationIcon,
      textAccent: 'text-secondary',
      bgCheckmark: 'bg-secondary/10'
    },
    {
      accent: 'from-yellow/20 via-yellow/10 to-yellow/5',
      accentLine: 'bg-yellow',
      icon: MarketingIcon,
      textAccent: 'text-yellow',
      bgCheckmark: 'bg-yellow/10'
    },
    {
      accent: 'from-success/20 via-success/10 to-success/5',
      accentLine: 'bg-success',
      icon: LocalIcon,
      textAccent: 'text-success',
      bgCheckmark: 'bg-success/10'
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">💼 Services</p>
          <h2 className="text-4xl md:text-4xl font-bold text-dark mb-4">
            <span className="text-secondary">3</span> services<br />
            qui <span className="text-yellow">transforment</span>
          </h2>
        </div>

        {/* Services Grid — Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const { accent, accentLine, icon: IconComponent, textAccent, bgCheckmark } = serviceColors[i] || serviceColors[0];
            return (
              <div
                key={i}
                className={`
                  group
                  bg-gradient-to-br ${accent}
                  rounded-3xl p-10 md:p-12
                  border-2 border-white/60
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-3 hover:shadow-2xl hover:border-yellow/40
                  ${i === 1 ? 'md:scale-105' : ''}
                `}
              >

                {/* Top: Icon + Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`${textAccent} w-12 h-12 flex items-center justify-center`}>
                    <IconComponent />
                  </div>
                  <div className={`text-3xl font-bold ${textAccent}`}>
                    {service.num}
                  </div>
                </div>

                {/* Accent line under number (static) */}
                <div
                  className={`h-1 w-12 ${accentLine} rounded-full mb-6`}
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
                      <div className={`w-5 h-5 rounded-full ${bgCheckmark} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className={`text-xs font-bold ${textAccent}`}>✓</span>
                      </div>
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
