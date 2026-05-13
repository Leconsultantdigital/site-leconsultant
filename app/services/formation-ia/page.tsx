'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { trackCTAClick, trackServiceView } from '@/lib/analytics';
import { useEffect } from 'react';

export default function FormationIA() {
  useEffect(() => {
    trackServiceView('formation-ia');
  }, []);

  const handleCTAClick = (ctaText: string) => {
    trackCTAClick(ctaText, 'formation-ia');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/' },
          { name: 'Formation IA', path: '/services/formation-ia' },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container max-w-4xl">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎓 Formation IA Générative
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Formez vos équipes à l'IA en <span className="text-yellow-400">3 jours</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Formation pragmatique, 100% pratique. ChatGPT, Claude, Gemini, Copilot, Perplexity, Canva AI.
                Financement CPF & OPCO inclus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleCTAClick('Demander devis formation')}
                  className="btn-primary text-center"
                >
                  Demander Devis Formation
                </button>
                <a
                  href="https://calendar.app.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('Calendly formation')}
                  className="btn-accent text-center"
                >
                  Réserver une Démo (30 min)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR - TrustIndex */}
        <section className="py-12 bg-white border-y">
          <div className="container max-w-4xl">
            <p className="text-center text-gray-600 mb-6 font-semibold">Nos clients nous font confiance</p>
            <div className="flex justify-center">
              <script defer async src='https://cdn.trustindex.io/loader.js?529b449420543948b996f640a31'></script>
            </div>
          </div>
        </section>

        {/* DESCRIPTION LONGUE */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Pourquoi cette formation?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                La <strong>formation IA générative</strong> n'est pas un luxe, c'est une nécessité. Vos équipes travaillent chaque jour avec des outils obsolètes alors que ChatGPT, Claude, Gemini et Perplexity révolutionnent les workflows.
              </p>
              <p>
                Je propose des <strong>formations IA pragmatiques</strong>, adaptées à votre métier — pas du marketing « augmentez vos ventes de 300% » mais du concret. Formation ChatGPT pour les PME, c'est apprendre à automatiser vos tâches répétitives. C'est former vos commerciaux à générer des argumentaires en 2 minutes. C'est montrer à vos marketers comment utiliser Canva AI ou NotebookLM pour créer 10x plus vite.
              </p>
              <p>
                Chaque formation inclut <strong>des cas d'usage réels</strong> liés à votre secteur. On ne parle pas d'IA en général — on fait de l'IA au service de votre business. Vous ressortez avec des compétences immédiatement utilisables, pas des slides PowerPoint oubliées le lendemain.
              </p>
              <p>
                <strong>Pour qui ?</strong> Entrepreneurs, TPE, PME, structures d'apprentissage, équipes marketing, commerciaux, managers. Bref, tous ceux qui veulent maîtriser les outils IA sans se perdre dans la technologie.
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
                { icon: '📅', title: '3 jours de formation', desc: 'Présentiel ou remote, 100% intensif' },
                { icon: '🛠️', title: 'Modules pratiques', desc: 'ChatGPT, Claude, Gemini, Copilot, Perplexity, Canva AI' },
                { icon: '🎯', title: 'Cas d\'usage sectoriels', desc: 'Adaptés à votre métier (marketing, vente, ops)' },
                { icon: '💻', title: 'Hands-on practice', desc: 'Chaque participant travaille sur son use case réel' },
                { icon: '📖', title: 'Guide RACEF PDF', desc: '50+ templates de prompts réutilisables' },
                { icon: '🔐', title: 'Plateforme d\'accès', desc: 'Ressources, mises à jour, templates — 1 an inclus' },
                { icon: '💬', title: 'Support email 90j', desc: 'Questions, optimisations post-formation' },
                { icon: '💰', title: 'Financement CPF/OPCO', desc: 'On gère les démarches administratives' },
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
            <h2 className="text-3xl font-bold mb-8">Cas client: PME d'étanchéité</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded">
              <h3 className="font-bold text-xl mb-4">📊 Automatiser 20h/semaine avec Notion + Claude</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">CONTEXTE</p>
                  <p className="text-gray-700">Dirigeant débordé, gestion manuelle des chantiers, factures, clients. Pas de centralisation, perte d'informations.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">SOLUTION</p>
                  <p className="text-gray-700">Formation IA + mise en place tableau de bord Notion centralisant chantiers, achats, factures, clients, frais.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">⏱️ Temps économisé</p>
                  <p className="text-2xl font-bold text-green-600">20h/semaine</p>
                  <p className="text-xs text-gray-500">Gestion manuelle → automatisée</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">👁️ Visibilité</p>
                  <p className="text-2xl font-bold text-blue-600">360°</p>
                  <p className="text-xs text-gray-500">Sur toute l'activité en temps réel</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📋 Erreurs factures</p>
                  <p className="text-2xl font-bold text-green-600">0%</p>
                  <p className="text-xs text-gray-500">vs 15% avant (réduction 100%)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">⚡ Réponse client</p>
                  <p className="text-2xl font-bold text-green-600">-70%</p>
                  <p className="text-xs text-gray-500">Plus rapide et fiable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Tarification</h2>
            <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-yellow-400">
              <div className="text-center mb-8">
                <p className="text-gray-600 font-semibold mb-2">Formation IA — 3 jours intensifs</p>
                <p className="text-4xl font-bold mb-4">Sur devis</p>
                <p className="text-gray-700 mb-6">
                  Le tarif dépend de votre financement (CPF, OPCO, direct). <br/>
                  <strong>Nous gérons les démarches administratives pour vous.</strong>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded">
                  <p className="font-bold">💰 CPF</p>
                  <p className="text-sm text-gray-600 mt-2">Utilisez votre compte CPF</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded">
                  <p className="font-bold">🏢 OPCO</p>
                  <p className="text-sm text-gray-600 mt-2">Financement via OPCO (AFDAS, Constructys, etc.)</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded">
                  <p className="font-bold">🎁 Direct</p>
                  <p className="text-sm text-gray-600 mt-2">Investissement direct (conditions préférentielles)</p>
                </div>
              </div>
              <button
                onClick={() => handleCTAClick('Demander devis formation')}
                className="w-full btn-primary text-center"
              >
                Demander un Devis Personnalisé
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
                  q: "Combien coûte une formation IA générative?",
                  a: "Le tarif dépend de votre financement (CPF, OPCO ou direct). Nous gérons les démarches administratives pour vous. Contactez-nous pour un devis personnalisé."
                },
                {
                  q: "Puis-je financer ma formation IA avec mon CPF?",
                  a: "Oui, 100%. Notre formation est finançable via CPF. Nous vous aidons à créer votre dossier et gérons l'inscription auprès de l'organisme."
                },
                {
                  q: "Faut-il des prérequis pour suivre une formation IA?",
                  a: "Non. La formation est adaptée à tous les niveaux, des complets débutants aux utilisateurs intermédiaires. Chacun travaille à son rythme."
                },
                {
                  q: "La formation est-elle à distance ou présentiel?",
                  a: "Les deux. La formation peut se faire en présentiel (Valence/Rhône-Alpes) ou 100% à distance via Zoom. Vous choisissez."
                },
                {
                  q: "Qu'est-ce que je vais apprendre exactement?",
                  a: "ChatGPT, Claude, Gemini, Copilot, Perplexity, Canva AI, NotebookLM. Chaque module est 100% pratique avec des cas d'usage réels liés à votre secteur."
                },
                {
                  q: "Après la formation, aurai-je accès aux ressources?",
                  a: "Oui. Vous recevez le guide RACEF PDF, 50+ templates de prompts, et l'accès à notre plateforme privée pendant 1 an avec mises à jour régulières."
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
            <h2 className="text-4xl font-bold mb-6">Prêt à former vos équipes?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Commençons par discuter de vos besoins. 30 minutes de consultation gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCTAClick('Demander devis formation - CTA')}
                className="btn-primary text-center"
              >
                Demander un Devis
              </button>
              <a
                href="https://calendar.app.google/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('Calendly formation - CTA')}
                className="btn-accent text-center"
              >
                Réserver un Créneau
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
