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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Stat 1: Google Reviews */}
          <div className="bg-gradient-to-br from-yellow/10 to-yellow/5 border border-yellow/30 rounded-2xl p-8 hover:border-yellow/50 transition-all">
            <div className="flex items-baseline gap-2 mb-3">
              <div className="text-4xl md:text-5xl font-bold text-yellow">5</div>
              <div className="text-2xl text-yellow">/5</div>
            </div>
            <div className="text-sm text-gray-300 mb-2">★★★★★ sur 120 avis</div>
            <p className="text-xs text-gray-400">Google Business Profile</p>
          </div>

          {/* Stat 2: Entrepreneurs */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sm text-gray-300 mb-2">Entrepreneurs formés</div>
            <p className="text-xs text-gray-400">À ChatGPT, Claude, Make.com</p>
          </div>

          {/* Stat 3: Experience */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-sm text-gray-300 mb-2">Ans d'expertise digital</div>
            <p className="text-xs text-gray-400">5 ans agence + 10 ans annonceur</p>
          </div>

          {/* Stat 4: Certification */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm text-gray-300 mb-2">Évaluateur national</div>
            <p className="text-xs text-gray-400">Jury Certification IA (RS6776)</p>
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
