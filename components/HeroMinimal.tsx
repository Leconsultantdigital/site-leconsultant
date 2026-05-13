'use client';

import Link from 'next/link';

export default function HeroMinimal() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-bg-light text-center">
      <div className="container max-w-2xl">
        {/* Google Badge */}
        <div className="inline-flex items-center gap-2 mb-8 bg-white border border-border rounded-full px-4 py-2.5 shadow-sm">
          <span className="text-yellow">★★★★★</span>
          <span className="text-sm font-semibold text-dark">4.9/5 — 120+ avis certifiés</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Gagnez <span className="text-yellow">10h/semaine</span>
          <br />
          avec l'IA générative
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-mid mb-12 leading-relaxed max-w-xl mx-auto">
          Formations pratiques, consulting IA personnalisé et stratégie marketing.
          <br />
          <span className="font-semibold text-dark">Pas de théorie, juste du concret.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn btn-accent btn-lg"
          >
            Commencer gratuitement →
          </Link>
          <Link
            href="https://calendly.com/williammartin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-lg border-2"
          >
            Voir ma disponibilité
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 pt-12 border-t border-border flex flex-col md:flex-row justify-center gap-12 text-sm">
          <div>
            <div className="text-3xl font-bold text-dark">600+</div>
            <div className="text-mid">Professionnels formés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-dark">15+</div>
            <div className="text-mid">Ans d'expertise</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-dark">0€</div>
            <div className="text-mid">Audit initial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
