'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { ServiceIcon } from '@/components/Icons';

export default function ServicesGrid({ showFooterLink = true }: { showFooterLink?: boolean } = {}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span className="eyebrow">Mes services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            5 façons de travailler ensemble
          </h2>
          <p className="text-mid">Chacun pensé pour des résultats mesurables, pas des slides.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-border rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-dark"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-mid mb-5">
                <span className="inline-block w-6 h-0.5 bg-yellow" />
                {service.num}
              </div>

              <div className="w-14 h-14 bg-yellow rounded-2xl flex items-center justify-center text-dark mb-5">
                <ServiceIcon name={service.icon} size={26} />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-sm text-mid leading-relaxed mb-5">{service.pitch}</p>

              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-dark">
                    <span className="text-yellow-dark font-bold flex-shrink-0">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-dark border-b-2 border-yellow self-start pb-0.5 hover:text-yellow-dark transition-colors"
              >
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>

        {showFooterLink && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-ghost">
              Voir tous les services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
