'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export default function ServicesComparison() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow uppercase tracking-widest mb-4">💼 Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Choisissez votre chemin<br />
            <span className="text-yellow">vers l'IA générative</span>
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            3 services complémentaires. Commencez par une formation, évoluez vers la stratégie.
          </p>
        </div>

        {/* Services Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={service.id}
                className={`
                  group
                  bg-white
                  rounded-3xl
                  border-2 border-border
                  overflow-hidden
                  transition-all duration-300
                  hover:border-yellow hover:shadow-2xl
                  hover:-translate-y-2
                  flex flex-col
                  ${isCenter ? 'md:scale-105 md:shadow-2xl' : ''}
                `}
              >
                {/* Top Accent Bar */}
                {isCenter && (
                  <div className="h-1 bg-gradient-to-r from-yellow to-yellow-dark"></div>
                )}

                {/* Badge */}
                {isCenter && (
                  <div className="mx-6 mt-4">
                    <span className="inline-block bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ PLUS POPULAIRE
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col flex-grow ${isCenter ? 'md:p-12' : ''}`}>
                  {/* Number */}
                  <div className={`text-5xl font-bold text-yellow mb-4 ${isCenter ? 'md:text-6xl' : ''}`}>
                    {service.num}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-dark mb-3 leading-snug ${isCenter ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                    {service.title}
                  </h3>

                  {/* Pitch */}
                  <p className={`text-mid mb-8 leading-relaxed flex-grow ${isCenter ? 'text-lg' : 'text-base'}`}>
                    {service.pitch}
                  </p>

                  {/* Bullets */}
                  <ul className={`space-y-3 mb-10 ${isCenter ? 'space-y-4' : ''}`}>
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-yellow text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className={`text-dark font-medium ${isCenter ? 'text-base' : 'text-sm'}`}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className={`
                      btn
                      ${isCenter ? 'btn-accent btn-lg w-full text-center' : 'btn-ghost border-2 w-full text-center'}
                      transition-all
                    `}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-mid mb-6 text-lg font-medium">
            Besoin d'une combinaison sur mesure?
          </p>
          <Link href="/contact" className="btn btn-accent btn-lg">
            Demander un audit personnalisé →
          </Link>
        </div>
      </div>
    </section>
  );
}
