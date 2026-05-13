'use client';

export default function StatsNew() {
  const stats = [
    {
      number: '120+',
      unit: 'avis clients',
      metric: '5/5 certifiés Google',
      icon: '⭐'
    },
    {
      number: '600+',
      unit: 'professionnels',
      metric: 'formés à ChatGPT & Claude',
      icon: '🎓'
    },
    {
      number: '15+',
      unit: 'ans',
      metric: "d'expertise digital (5 agence + 10 annonceur)",
      icon: '⚡'
    },
    {
      number: '€5M+',
      unit: 'de revenue',
      metric: 'générée pour nos clients (3 ans)',
      icon: '📈'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow uppercase tracking-widest mb-4">📊 Chiffres qui parlent</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Vérifiés et testés par<br />
            <span className="text-yellow">120+ clients satisfaits</span>
          </h2>
        </div>

        {/* Stats Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                rounded-3xl p-10 md:p-12
                border-2 border-border
                transition-all duration-300
                hover:border-yellow hover:shadow-xl hover:-translate-y-1
                ${i === 0 ? 'bg-gradient-to-br from-yellow/10 to-yellow/5' : 'bg-white'}
              `}
            >
              {/* Icon + Number */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{stat.icon}</div>
                <div className="text-right">
                  <div className="text-5xl md:text-6xl font-bold text-dark">
                    {stat.number}
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="border-t border-border pt-6">
                <div className="text-sm font-semibold text-dark mb-2">
                  {stat.unit}
                </div>
                <p className="text-sm text-mid leading-relaxed">
                  {stat.metric}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with text */}
        <div className="border-t border-border pt-12 text-center">
          <p className="text-mid mb-6 text-lg">
            ✅ Tous les avis sont certifiés et vérifiables sur Google Business Profile
          </p>
        </div>
      </div>
    </section>
  );
}
