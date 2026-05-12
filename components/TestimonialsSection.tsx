'use client';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">💬 Avis Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Ce qu'en pensent <span className="text-yellow">mes clients</span>
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Voici les avis vérifiés de mes clients — mis à jour en temps réel depuis Google Business Profile
          </p>
        </div>

        {/* TrustIndex Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TrustIndex affichera les avis ici */}
          <div className="trustindex-widget md:col-span-3" />
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
