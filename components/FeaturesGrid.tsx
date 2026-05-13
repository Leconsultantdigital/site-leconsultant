'use client';

export default function FeaturesGrid() {
  const features = [
    {
      icon: '🎯',
      title: 'Formations pratiques',
      desc: 'Pas de slides vides. Vous pratiquez dès le jour 1 avec des outils réels.'
    },
    {
      icon: '⚡',
      title: 'Résultats en 30 jours',
      desc: 'Vos équipes gagnent 10h/semaine immédiatement après la formation.'
    },
    {
      icon: '🚀',
      title: 'Sans engagement long',
      desc: 'Directeur marketing résiliable à 30j. Formations vendues à la session.'
    },
    {
      icon: '🎓',
      title: 'Certifications reconnues',
      desc: 'Évaluateur officiel RS6776 (RNCP). Vos collaborateurs sont certifiés.'
    },
    {
      icon: '💬',
      title: 'Support illimité',
      desc: 'Questions après la formation? Slack, email, appels — toujours dispo.'
    },
    {
      icon: '📊',
      title: 'ROI mesurable',
      desc: 'En moyenne x2 sur le 1er trimestre. Audit gratuit pour évaluer le vôtre.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow uppercase tracking-widest mb-4">✨ Pourquoi nous</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Ce qui nous différencie
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            6 raisons pour lesquelles 600+ professionnels nous font confiance
          </p>
        </div>

        {/* Features Grid 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-8 md:p-10 hover:shadow-lg hover:border-yellow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-dark mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-mid text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-dark font-semibold mb-4 text-lg">
            Convaincu? Parlons de votre situation.
          </p>
          <a href="/contact" className="btn btn-accent btn-lg">
            Réserver un audit gratuit →
          </a>
        </div>
      </div>
    </section>
  );
}
