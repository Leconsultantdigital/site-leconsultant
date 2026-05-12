'use client';

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-dark text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">⭐ Confiance & Résultats</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vérifiés et testés par <span className="text-yellow">120+ clients</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Avis certifiés Google Business Profile — mis à jour en temps réel
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Stat 1: Google Reviews */}
          <div className="bg-gradient-to-br from-yellow/15 to-yellow/5 border border-yellow/40 rounded-3xl p-10 md:p-12 hover:border-yellow/60 transition-all hover:shadow-xl">
            <div className="flex items-baseline gap-2 mb-4">
              <div className="text-5xl md:text-6xl font-bold text-yellow">5</div>
              <div className="text-3xl text-yellow">/5</div>
            </div>
            <div className="text-base text-gray-300 mb-2">★★★★★ sur 120 avis certifiés</div>
            <p className="text-sm text-gray-400">Google Business Profile</p>
          </div>

          {/* Stat 2: Entrepreneurs */}
          <div className="bg-gradient-to-br from-secondary/15 to-secondary/5 border border-secondary/40 rounded-3xl p-10 md:p-12 hover:border-secondary/60 transition-all hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">600</div>
            <div className="text-base text-gray-300 mb-2">Professionnels formés</div>
            <p className="text-sm text-gray-400">À ChatGPT, Claude, Make.com, Gemini</p>
          </div>

          {/* Stat 3: Experience */}
          <div className="bg-gradient-to-br from-success/15 to-success/5 border border-success/40 rounded-3xl p-10 md:p-12 hover:border-success/60 transition-all hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-success mb-3">15+</div>
            <div className="text-base text-gray-300 mb-2">Ans d'expertise digital</div>
            <p className="text-sm text-gray-400">5 ans agence + 10 ans annonceur</p>
          </div>

          {/* Stat 4: Certification */}
          <div className="bg-gradient-to-br from-warning/15 to-warning/5 border border-warning/40 rounded-3xl p-10 md:p-12 hover:border-warning/60 transition-all hover:shadow-xl">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-base text-gray-300 mb-2">Évaluateur national</div>
            <p className="text-sm text-gray-400">Certification IA (RS6776)</p>
          </div>
        </div>

        {/* TrustIndex Widget Container */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300 mb-8">
            Avis clients certifiés — Synchronisés en temps réel depuis Google
          </p>
          {/* TrustIndex se rendra ici automatiquement via le script dans layout.tsx */}
          <div className="trustindex-widget" />
        </div>
      </div>
    </section>
  );
}
