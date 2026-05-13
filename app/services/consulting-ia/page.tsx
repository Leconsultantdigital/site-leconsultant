'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { trackCTAClick, trackServiceView } from '@/lib/analytics';
import { useEffect } from 'react';

export default function ConsultingIA() {
  useEffect(() => {
    trackServiceView('consulting-ia');
  }, []);

  const handleCTAClick = (ctaText: string) => {
    trackCTAClick(ctaText, 'consulting-ia');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/' },
          { name: 'Consulting IA', path: '/services/consulting-ia' },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container max-w-4xl">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Consulting IA Générative
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Transformez votre activité avec l'<span className="text-yellow-400">IA</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Audit IA gratuit, stratégie personnalisée, mise en place workflows. 15 ans d'expérience, approche RACEF structurée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleCTAClick('Réserver audit gratuit')}
                  className="btn-primary text-center"
                >
                  Réserver Audit Gratuit (30 min)
                </button>
                <a
                  href="https://calendar.app.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('Calendly consulting')}
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
            <p className="text-center text-gray-600 mb-6 font-semibold">Plus de 500 entrepreneurs & PME transformés</p>
            <div className="flex justify-center">
              <script defer async src='https://cdn.trustindex.io/loader.js?529b449420543948b996f640a31'></script>
            </div>
          </div>
        </section>

        {/* DESCRIPTION LONGUE */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Pourquoi ce consulting?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Le <strong>consulting IA</strong>, c'est la vraie transformation. Une formation, c'est génial. Mais transformer votre stratégie digitale, structurer votre approche IA, intégrer les outils dans vos processus — c'est un travail d'accompagnement.
              </p>
              <p>
                Je vous aide à <strong>auditer</strong> où vous en êtes avec l'IA. Quels outils utilisez-vous vraiment ? Où gaspillez-vous du temps ? Où manquez-vous d'innovation ? Ensuite, on co-construit une <strong>stratégie IA</strong> adaptée à votre PME ou structure.
              </p>
              <p>
                Le consulting IA, c'est aussi l'intégration technique — connecter ChatGPT ou Claude avec vos outils existants (CRM, email, Make.com), automatiser vos workflows critiques, former progressivement vos équipes. C'est du sur-mesure.
              </p>
              <p>
                Pendant ce travail, <strong>j'apprends à vos équipes à prompter comme des pros avec la méthode RACEF</strong> — une approche structurée pour extraire le maximum de vos outils IA et garantir des résultats mesurables. Pas de vague « digital transformation » mais du concret : combien de temps économisé ? Quel impact sur vos marges ?
              </p>
              <p>
                <strong>Pour qui ?</strong> Entrepreneurs qui veulent innover vite, PME qui se demandent par où commencer avec l'IA, structures qui cherchent un partenaire de confiance pour une vraie transformation.
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
                { icon: '🔍', title: 'Audit initial', desc: '0.5 jour : diagnostic outils, gisements IA, budget estimé' },
                { icon: '📋', title: 'Stratégie IA personnalisée', desc: 'Document détaillé avec objectifs, roadmap, budget, KPIs' },
                { icon: '⚙️', title: 'Intégration technique', desc: 'Mise en place 3-5 workflows IA (Make.com, APIs, automations)' },
                { icon: '👥', title: 'Formation équipes', desc: '3-4 sessions de 2h pour maîtriser les nouveaux workflows' },
                { icon: '📊', title: 'Suivi & optimisation', desc: 'Réunion mensuelle (1h) pendant 6 mois minimum' },
                { icon: '📚', title: 'Accès documentations', desc: 'Templates RACEF et ressources infinies (mises à jour continue)' },
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
            <h2 className="text-3xl font-bold mb-8">Cas client: Consultant indépendant</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded">
              <h3 className="font-bold text-xl mb-4">💰 Stratégie IA + 5 workflows = +3000€/mois de CA</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">CONTEXTE</p>
                  <p className="text-gray-700">Freelancer avec 15 clients, workload trop élevé, pas scalable. Perte de temps sur tâches répétitives, pas d'automatisation.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">SOLUTION</p>
                  <p className="text-gray-700">Audit IA + mise en place 5 workflows automatisés (proposals, suivi clients, reporting, factures, prospection).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">⏱️ Temps libéré</p>
                  <p className="text-2xl font-bold text-green-600">-40%</p>
                  <p className="text-xs text-gray-500">5-8h/semaine d'opérationnel automatisé</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">💵 CA additionnel</p>
                  <p className="text-2xl font-bold text-green-600">+3000€/mois</p>
                  <p className="text-xs text-gray-500">Grâce au temps libéré pour business dev</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">😊 Satisfaction client</p>
                  <p className="text-2xl font-bold text-green-600">+25%</p>
                  <p className="text-xs text-gray-500">Réponses + rapides et fiables</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">🎯 ROI</p>
                  <p className="text-2xl font-bold text-green-600">10x</p>
                  <p className="text-xs text-gray-500">En 6 mois (consulting + workflows)</p>
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
                  <h3 className="text-2xl font-bold">Audit IA Initial</h3>
                  <span className="text-3xl font-bold text-blue-600">Gratuit</span>
                </div>
                <p className="text-gray-700">Demi-journée de diagnostic complet. Pas d'engagement. Vous recevez un rapport détaillé avec recommandations.</p>
              </div>

              {/* Accompagnement */}
              <div className="bg-white rounded-lg p-8 border-2 border-yellow-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Accompagnement & Mise en place</h3>
                  <span className="text-3xl font-bold text-yellow-600">650€/jour</span>
                </div>
                <p className="text-gray-700 mb-6">À la carte, selon vos besoins. Pas d'engagement minimum — vous payez que ce que vous utilisez.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Mise en place workflows IA</li>
                  <li>✅ Formation équipes</li>
                  <li>✅ Intégrations techniques</li>
                  <li>✅ Optimisations continues</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                Besoin d'une estimation? Parlons de votre projet.
              </p>
              <button
                onClick={() => handleCTAClick('Demander devis consulting')}
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
                  q: "Qu'est-ce que le consulting IA exactement?",
                  a: "C'est un accompagnement complet pour transformer votre activité avec l'IA. Audit, stratégie personnalisée, mise en place workflows, formation équipes. Du diagnostic jusqu'à l'optimisation."
                },
                {
                  q: "Combien coûte un audit IA?",
                  a: "L'audit initial (0.5 jour) est gratuit. Pas d'engagement. Vous recevez un rapport détaillé avec recommandations. Après, l'accompagnement se fait à la carte à 650€/jour."
                },
                {
                  q: "Quel est l'engagement minimum?",
                  a: "Pas d'engagement minimum. Vous payez à la journée pour l'accompagnement et la mise en place. Certains clients travaillent avec nous 3-6 mois, d'autres plus longtemps."
                },
                {
                  q: "Comment fonctionne la mise en place des workflows?",
                  a: "On identifie les processus critiques à automatiser, on les met en place (Make.com, APIs, scripts), puis on forme vos équipes à les utiliser. C'est progressif et sans risque."
                },
                {
                  q: "Pouvez-vous m'aider à intégrer avec mon système actuel?",
                  a: "Oui, c'est notre spécialité. CRM, ERP, email, bases de données — on connecte ChatGPT/Claude avec vos outils existants via API ou Make.com."
                },
                {
                  q: "Quels résultats puis-je attendre?",
                  a: "Ça dépend de vos objectifs. En général : temps économisé (20-40h/mois), réduction erreurs, scalabilité, amélioration productivity. On mesure tout avec des KPIs clairs."
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
            <h2 className="text-4xl font-bold mb-6">Commençons par auditer votre situation</h2>
            <p className="text-lg text-gray-700 mb-8">
              30 minutes d'audit gratuit pour comprendre vos besoins et proposer un plan d'action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCTAClick('Réserver audit gratuit - CTA')}
                className="btn-primary text-center"
              >
                Réserver Audit Gratuit
              </button>
              <a
                href="https://calendar.app.google/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('Calendly consulting - CTA')}
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
