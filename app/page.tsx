import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - Premium */}
        <section className="hero-section gradient-light py-24 md:py-32 relative overflow-hidden">
          <div className="container max-w-4xl text-center relative z-10">
            <div className="mb-6 inline-block">
              <span className="badge">🚀 Consultant IA Générative</span>
            </div>

            <h1 className="mb-6">
              Consultant IA Générative #1 en France
            </h1>

            <p className="text-2xl md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              ChatGPT, Claude, Make.com, LinkedIn B2B, SEO...
              <br />
              <span className="font-bold text-blue-600">Du concret</span>, pas du rêve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">
                🎯 Réserver Audit Gratuit
              </Link>
              <Link href="/services/consulting-ia" className="btn-secondary">
                Découvrir Mes Services
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Formé 500+ entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>Basé à Valence, Drôme</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 sur Google</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </section>

        {/* TRUST BAR */}
        <section className="py-12 border-b border-slate-100">
          <div className="container max-w-4xl">
            <p className="text-center text-slate-600 font-semibold mb-8 text-lg">
              ✨ Partenaires de confiance
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-10">
              {['CréActifs', 'Mill Forma', 'Eneko', 'Gedaf'].map((partner) => (
                <div key={partner} className="text-center p-4 rounded-xl hover:bg-slate-50 transition group">
                  <p className="font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {partner}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <p className="font-semibold text-slate-800">
                ⭐⭐⭐⭐⭐ <span className="text-blue-600">4.9/5</span> sur Google
              </p>
              <p className="text-sm text-slate-600 mt-1">47 avis vérifiés</p>
            </div>
          </div>
        </section>

        {/* 2 SERVICES PRINCIPALES */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <span className="badge mb-4 block">Mes 2 Services Principaux</span>
              <h2 className="mb-4">De La Formation à la Stratégie Récurrente</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Commencez par une formation IA, puis optionnellement passez à un directeur marketing pour grandir
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="card group hover:shadow-xl">
                <div className="mb-6 text-5xl group-hover:scale-110 transition duration-300">🚀</div>
                <div className="mb-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  POINT D'ENTRÉE
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">Formation IA & Consulting Digital</h3>
                <p className="text-slate-600 mb-6">
                  Maîtrisez ChatGPT, Claude, Gemini, Make.com, LinkedIn B2B. Formations 100% pratiques en petits groupes.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Formation ChatGPT/Claude (2-4h)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Consulting IA générative
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Atelier Make.com automatisation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Suivi 30 jours inclus
                  </li>
                </ul>
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 font-semibold">À partir de €500</p>
                  <Link href="/services/consulting-ia" className="btn-primary w-full text-center">
                    Découvrir Formation IA
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className="card group hover:shadow-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <div className="mb-6 text-5xl group-hover:scale-110 transition duration-300">📊</div>
                <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                  EXPANSION / RÉCURRENT
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">Directeur Marketing IA-Powered</h3>
                <p className="text-slate-600 mb-6">
                  Stratégie + exécution mensuelle (€1500-5000/mois). Contenu, SEO, LinkedIn, leads. IA intégrée.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Stratégie marketing personnalisée
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Exécution quotidienne + IA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    SEO + contenu + réseaux + leads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Mois par mois, pas d'engagement
                  </li>
                </ul>
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 font-semibold">€1500-5000/mois</p>
                  <Link href="/services/directeur-marketing" className="btn-primary w-full text-center">
                    Voir Directeur Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES / RESULTS */}
        <section className="py-20 gradient-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="mb-4">Résultats Mesurables</h2>
              <p className="text-xl text-slate-600">Du concret, pas des promesses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: '+300%', label: 'Leads qualifiés en 3 mois' },
                { value: '50+', label: 'Salariés formés en 6 semaines' },
                { value: '€150k+', label: 'Revenue générée pour clients' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 text-center border border-slate-100 hover:shadow-card hover:border-blue-200 transition group"
                >
                  <div className="text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition duration-300">
                    {stat.value}
                  </div>
                  <p className="text-slate-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/about" className="btn-primary">
                Voir Tous Mes Cas Clients
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="mb-4">Témoignages Clients</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: 'William nous a fait gagner 6 mois sur notre compréhension de l\'IA. Concret, pragmatique, sans prise de tête.',
                  author: 'Sophie M.',
                  role: 'Fondatrice, MarketAI',
                },
                {
                  quote: 'Du concret, pas du rêve. Exactement ce que nous cherchions. Les formations sont adaptées à nos besoins.',
                  author: 'Pierre L.',
                  role: 'Directeur, TPE Drôme',
                },
              ].map((testimonial, i) => (
                <blockquote
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-gradient-to-b from-blue-600 to-cyan-600 pl-6 py-6 rounded-r-2xl hover:shadow-md transition"
                >
                  <p className="text-slate-800 mb-4 font-light text-lg italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="text-sm font-semibold text-slate-700">
                    — {testimonial.author}
                    <br />
                    <span className="text-slate-500 font-normal">{testimonial.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 gradient-light">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="mb-4">Questions Fréquentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Quel est le prix d\'une formation ChatGPT ?',
                  a: 'Tarif selon la durée et le format. Formations courtes (2h) à partir de €500. Accompagnement long terme sur devis.',
                },
                {
                  q: 'Êtes-vous disponible pour du consulting à distance ?',
                  a: 'Oui, 100% digital. Consultations via Zoom/Meet, formations en ligne, suivi sur Slack.',
                },
                {
                  q: 'Quel est le ROI du directeur marketing externalisé ?',
                  a: 'En moyenne +2x sur le 1er trimestre. Résultat dépend de votre marché et budget. Audit gratuit pour évaluer.',
                },
                {
                  q: 'Quelle est la certification IA RS6776 ?',
                  a: 'Certification nationale en IA générative. Reconnue RNCP. Je suis évaluateur officiel Educademy.',
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="bg-white p-6 rounded-xl cursor-pointer border border-slate-100 hover:border-blue-200 hover:shadow-md transition group"
                >
                  <summary className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition flex items-center justify-between">
                    {item.q}
                    <span className="text-xl">▶</span>
                  </summary>
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/faq" className="text-blue-600 font-semibold hover:text-cyan-600 transition">
                Voir la FAQ Complète (50+ questions) →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="gradient-premium py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent"></div>
          </div>
          <div className="container text-center relative z-10">
            <h2 className="text-white mb-4">Parlons de Votre Stratégie IA</h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-light">
              30 min de consultation gratuite pour évaluer vos besoins et définir un plan d'action.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-lg hover:shadow-xl transform hover:scale-105">
              Réserver une Consultation Gratuite
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
