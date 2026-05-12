'use client';

import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-dark text-white text-center">
      <div className="container max-w-2xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Parlons de votre stratégie IA
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
          Réservez un audit gratuit de 30 minutes — pas d'engagement, juste du concret.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-accent btn-lg">
            Demander un devis →
          </Link>
          <a
            href="https://calendly.com/williammartin"
            className="btn btn-ghost btn-lg border-2 border-white text-white hover:bg-white hover:text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Réserver directement
          </a>
        </div>
      </div>
    </section>
  );
}
