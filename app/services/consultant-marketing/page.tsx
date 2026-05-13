'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { trackCTAClick, trackServiceView } from '@/lib/analytics';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ConsultantMarketing() {
  useEffect(() => {
    trackServiceView('consultant-marketing');
  }, []);

  const handleCTAClick = (ctaText: string) => {
    trackCTAClick(ctaText, 'consultant-marketing');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/' },
          { name: 'Consultant Marketing', path: '/services/consultant-marketing' },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container max-w-4xl">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📈 Consultant Marketing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Votre directeur marketing <span className="text-yellow-400">externalisé</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Stratégie + exécution. LinkedIn B2B, SEO, contenu, automation. À la carte: 0.5j, 1j ou 1.5j/semaine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleCTAClick('Réserver audit stratégique')}
                  className="btn-primary text-center"
                >
                  Réserver Audit Gratuit
                </button>
                <a
                  href="https://calendar.app.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('Calendly marketing')}
                  className="btn-accent text-center"
                >
                  Voir mes disponibilités
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR - TrustIndex */}
        <section className="py-12 bg-white border-y">
          <div className="container max-w-4xl">
            <p className="text-center text-gray-600 mb-6 font-semibold">Consulté par des dizaines d'entrepreneurs et PME</p>
            <div className="flex justify-center">
              <script defer async src='https://cdn.trustindex.io/loader.js?529b449420543948b996f640a31'></script>
            </div>
          </div>
        </section>

        {/* DESCRIPTION LONGUE */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Pourquoi ce consultant?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Vous avez besoin d'une <strong>stratégie marketing</strong> mais pas d'un directeur marketing à temps plein (trop cher). Le <strong>consultant marketing</strong>, c'est votre directeur marketing externalisé — à la demande, sans salaire fixe.
              </p>
              <p>
                Je vous aide à <strong>définir votre stratégie</strong> — positionnement, canaux prioritaires, contenus clés, budget optimisé. Puis on <strong>l'exécute</strong> : LinkedIn B2B si vous vendez B2B, SEO et contenu si vous cherchez l'organique, automation avec Make.com pour scalabiliser vos campagnes.
              </p>
              <p>
                C'est un modèle <strong>récurrent</strong> — on travaille ensemble month after month, pas ponctuellement. Vous avez un partenaire stable qui comprend votre business, teste, optimise, mesure et rapporte chaque mois.
              </p>
              <p>
                Je combine les <strong>outils modernes</strong> (LinkedIn, SEO technique, automation, IA générative pour le contenu) avec une vraie stratégie. Pas juste du trafic — des leads qualifiés, des conversions, de la croissance prévisible.
              </p>
              <p>
                <strong>Bonus :</strong> <Link href="/services/consultant-marketing/visibilite-locale" className="text-blue-600 hover:underline">Visibilité locale incluse</Link>. Vous êtes à Valence, Rhône-Alpes ou ailleurs ? On optimise votre présence locale (Google Business, Local Pack, avis, stratégie géo).
              </p>
              <p>
                <strong>Pour qui ?</strong> PME et structures qui ont une stratégie marketing floue, entrepreneurs qui ne veulent pas gérer la marketing en interne, équipes sales qui cherchent plus de leads qualifiés.
              </p>
            </div>
          </div>
        </section>

        {/* INCLUSIONS */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12">Qu'est-ce qui est inclus?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🔍', title: 'Audit stratégique', desc: 'Diagnostic complet de votre positionnement, canaux, budget' },
                { icon: '📊', title: 'Plan marketing', desc: 'Stratégie trimestrielle avec objectifs, budgets, content calendar' },
                { icon: '💼', title: 'LinkedIn B2B', desc: '3-4 posts/semaine + prospection + engagement stratégique' },
                { icon: '📝', title: 'Contenu & SEO', desc: '2 articles blog/mois + optimisation on-page et technique' },
                { icon: '⚙️', title: 'Automation', desc: 'Setup Make.com, landing pages, email nurture, conversions' },
                { icon: '📍', title: 'Google Business', desc: 'Optimisation fiche + 8-10 posts/mois + gestion avis' },
                { icon: '📈', title: 'Rapports mensuels', desc: 'KPIs détaillés, insights, recommandations d\'optimisation' },
                { icon: '💬', title: 'Consultation', desc: '4h/mois incluses (calls, reviews stratégiques, questions)' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Cas client: E-commerce B2B</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded">
              <h3 className="font-bold text-xl mb-4">📊 Stratégie LinkedIn + SEO = 8 leads/semaine qualifiés</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">CONTEXTE</p>
                  <p className="text-gray-700">E-commerce B2B dormant, 0 stratégie, présence organique faible. Dépendait entièrement des annonces payantes (200+€ par lead).</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">SOLUTION</p>
                  <p className="text-gray-700">Plan marketing 6 mois (LinkedIn 4 posts/semaine + 2 articles SEO/mois + automation + Google Business).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📊 Trafic organique</p>
                  <p className="text-2xl font-bold text-green-600">+250%</p>
                  <p className="text-xs text-gray-500">En 6 mois (6k → 21k visites/mois)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📧 Leads qualifiés</p>
                  <p className="text-2xl font-bold text-green-600">8-10/semaine</p>
                  <p className="text-xs text-gray-500">vs 0 avant (organique)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">💵 Coût par lead</p>
                  <p className="text-2xl font-bold text-green-600">45€</p>
                  <p className="text-xs text-gray-500">vs 200€ en paid ads</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">🎯 ROI year 1</p>
                  <p className="text-2xl font-bold text-green-600">350%</p>
                  <p className="text-xs text-gray-500">Impact long terme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Tarification</h2>
            <div className="space-y-6">
              {/* Audit */}
              <div className="bg-white rounded-lg p-8 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Audit Stratégique</h3>
                  <span className="text-3xl font-bold text-blue-600">500€</span>
                </div>
                <p className="text-gray-700">1 jour de diagnostic complet. Vous recevez un rapport stratégique détaillé avec recommandations d'action.</p>
              </div>

              {/* Retainer */}
              <div className="bg-white rounded-lg p-8 border-2 border-yellow-400">
                <h3 className="text-2xl font-bold mb-6">Retainer Mensuel (à la carte)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-6 rounded text-center">
                    <p className="text-sm text-gray-600 font-semibold mb-2">0.5 jour/semaine</p>
                    <p className="text-3xl font-bold text-blue-600">1 000€</p>
                    <p className="text-xs text-gray-500 mt-2">~2 jours/mois</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded text-center border-2 border-yellow-400">
                    <p className="text-sm text-gray-600 font-semibold mb-2">1 jour/semaine</p>
                    <p className="text-3xl font-bold text-yellow-600">2 000€</p>
                    <p className="text-xs text-gray-500 mt-2">~4 jours/mois (POPULAIRE)</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded text-center">
                    <p className="text-sm text-gray-600 font-semibold mb-2">1.5 jour/semaine</p>
                    <p className="text-3xl font-bold text-purple-600">3 000€</p>
                    <p className="text-xs text-gray-500 mt-2">~6 jours/mois</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Minimum 6 mois.</strong> Flexibilité : vous pouvez ajuster le volume mensuellement après le 1er trimestre.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Pas sûr du volume? Commençons par un audit.
              </p>
              <button
                onClick={() => handleCTAClick('Demander devis marketing')}
                className="btn-primary text-center inline-block"
              >
                Demander une Estimation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Qu'est-ce qu'un consultant marketing externalisé?",
                  a: "C'est un directeur marketing à la demande. Vous avez la stratégie ET l'exécution, sans embaucher quelqu'un à temps plein. C'est rentable et flexible."
                },
                {
                  q: "Quelle est la durée minimale d'engagement?",
                  a: "6 mois minimum. Après, c'est mois par mois si vous le souhaitez. Ça laisse le temps de voir les résultats (surtout en SEO)."
                },
                {
                  q: "Comment fonctionne l'audit stratégique?",
                  a: "Je fais un diagnostic complet: votre positionnement, vos canaux actuels, vos concurrents, votre budget, vos objectifs. Je vous donne un rapport avec un plan d'action détaillé."
                },
                {
                  q: "Combien de temps avant de voir des résultats?",
                  a: "LinkedIn & automation : 4-8 semaines. SEO : 3-6 mois (c'est plus long mais plus durable). Leads généralement : 3 mois minimum."
                },
                {
                  q: "Travaillez-vous avec les petites entreprises?",
                  a: "Oui, c'est ma cible. Les petites boîtes ont besoin de marketing mais ne peuvent pas embaucher. Je rends ça accessible et rentable."
                },
                {
                  q: "Pouvez-vous garantir des résultats?",
                  a: "Je peux garantir le travail et les efforts. Les résultats dépendent aussi de votre offre, votre prix, votre marché. Je m'engage à optimiser et mesurer tout."
                },
              ].map((item, i) => (
                <details key={i} className="bg-gray-50 p-4 rounded cursor-pointer group">
                  <summary className="font-bold text-gray-900">{item.q}</summary>
                  <p className="mt-4 text-gray-700 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
          <div className="container max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt pour une stratégie marketing efficace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              L'audit stratégique est gratuit. Aucun engagement. Juste un diagnostic clair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCTAClick('Réserver audit stratégique - CTA')}
                className="btn-primary text-center"
              >
                Réserver Audit Gratuit
              </button>
              <a
                href="https://calendar.app.google/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('Calendly marketing - CTA')}
                className="btn-accent text-center"
              >
                Voir mes disponibilités
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
