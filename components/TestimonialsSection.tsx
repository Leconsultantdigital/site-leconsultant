'use client';

import ReviewCarousel from '@/components/ReviewCarousel';
import { REVIEWS } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">💬 Avis Clients 5/5</p>
          <h2 className="text-4xl md:text-4xl font-bold text-dark mb-4">
            Ce qu'en pensent <span className="text-yellow">mes clients</span>
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            120+ avis certifiés Google Business Profile — mis à jour en temps réel
          </p>
        </div>

        {/* Review Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <ReviewCarousel reviews={REVIEWS} autoScroll={true} interval={6000} />
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-mid mb-6 text-lg">
            Prêt à transformer votre approche de l'IA ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-accent">
              Réserver audit gratuit 15min →
            </a>
            <a href="https://calendly.com/williammartin" className="btn btn-ghost border-2">
              Voir ma disponibilité
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
