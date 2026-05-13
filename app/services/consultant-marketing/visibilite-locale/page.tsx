'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { trackCTAClick, trackServiceView } from '@/lib/analytics';
import { useEffect } from 'react';
import Link from 'next/link';

export default function VisibiliteLocale() {
  useEffect(() => {
    trackServiceView('visibilite-locale');
  }, []);

  const handleCTAClick = (ctaText: string) => {
    trackCTAClick(ctaText, 'visibilite-locale');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Services', path: '/' },
          { name: 'Consultant Marketing', path: '/services/consultant-marketing' },
          { name: 'Visibilité Locale', path: '/services/consultant-marketing/visibilite-locale' },
        ]}
      />
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container max-w-4xl">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📍 Visibilité Locale
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Dominez les résultats <span className="text-yellow-400">locaux</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Fiche Google Business optimisée, Local Pack, avis, SEO local. Soyez visible près de Valence, Rhône-Alpes, et au-delà.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleCTAClick('Réserver audit local')}
                  className="btn-primary text-center"
                >
                  Audit Gratuit
                </button>
                <a
                  href="https://calendar.app.google/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('Calendly local')}
                  className="btn-accent text-center"
                >
                  Calendly
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR - TrustIndex */}
        <section className="py-12 bg-white border-y">
          <div className="container max-w-4xl">
            <p className="text-center text-gray-600 mb-6 font-semibold">Avis Google: 5/5 — Experts locaux de confiance</p>
            <div className="flex justify-center">
              <script defer async src='https://cdn.trustindex.io/loader.js?529b449420543948b996f640a31'></script>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">La visibilité locale, c'est crucial</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                <strong>75% des recherches locales génèrent une visite ou un appel</strong> dans les 24h. Si vos clients potentiels cherchent "consultant marketing Valence" ou "formation IA Rhône-Alpes", il faut que vous soyez visible.
              </p>
              <p>
                Une fiche Google Business optimisée + avis de qualité + contenu local = domination locale. C'est peu cher, c'est durable, et ça rapporte beaucoup.
              </p>
              <p>
                Je vous aide à <strong>optimiser votre présence complètement</strong> : fiche Google Business parfaite, 8-10 posts/mois, gestion des avis, SEO local, citations d'autorité. Résultat : vous apparaissez dans le Local Pack quand quelqu'un cherche "consultant" dans votre zone.
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
                { icon: '🔍', title: 'Audit Local', desc: 'Analyse fiche Google, concurrents locaux, positionnement' },
                { icon: '📍', title: 'Optimisation Fiche', desc: 'Photos, descriptions, infos pratiques, catégories' },
                { icon: '📱', title: 'Posts Google', desc: '8-10 posts/mois (actualités, promotions, Q&R)' },
                { icon: '⭐', title: 'Gestion Avis', desc: 'Demande avis, réponses professionnelles aux clients' },
                { icon: '🗺️', title: 'SEO Local', desc: 'Citations, schema.org local, liens locaux de qualité' },
                { icon: '📊', title: 'Reporting', desc: 'Mensuel : vues, appels, conversions, insights' },
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
            <h2 className="text-3xl font-bold mb-8">Cas client: Cabinet B2B Valence</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded">
              <h3 className="font-bold text-xl mb-4">📍 De zéro à Local Pack en 4 mois</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">AVANT</p>
                  <p className="text-gray-700">Fiche Google Business existante mais abandonnée. Pas de photo, description minimaliste, 0 avis. Invisible en local.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">APRÈS</p>
                  <p className="text-gray-700">Fiche optimisée, 15+ photos, 8 avis 5/5, posts réguliers, apparition systématique dans Local Pack.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📍 Local Pack</p>
                  <p className="text-2xl font-bold text-orange-600">Position #1</p>
                  <p className="text-xs text-gray-500">"Consultant B2B Valence"</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📞 Appels/mois</p>
                  <p className="text-2xl font-bold text-orange-600">+12/mois</p>
                  <p className="text-xs text-gray-500">vs 1-2 avant</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">⭐ Avis</p>
                  <p className="text-2xl font-bold text-orange-600">8 avis</p>
                  <p className="text-xs text-gray-500">5/5, réponses pro</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">📊 Vue fiche/mois</p>
                  <p className="text-2xl font-bold text-orange-600">+400%</p>
                  <p className="text-xs text-gray-500">De 20 à 100 vues</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING & NOTE */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Intégré à votre Retainer Marketing</h2>
            <div className="bg-white rounded-lg p-8 border-2 border-yellow-400 text-center">
              <p className="text-gray-700 mb-4">
                La visibilité locale est <strong>incluse dans votre retainer Consultant Marketing</strong> (à partir de 1 000€/mois).
              </p>
              <p className="text-gray-600 mb-6">
                8-10 posts Google Business + gestion avis + optimisations continues.
              </p>
              <Link href="/services/consultant-marketing" className="btn-primary inline-block">
                Voir l'offre Consultant Marketing
              </Link>
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
                  q: "Comment améliorer ma visibilité locale sur Google?",
                  a: "Fiche Google Business optimisée (photos, descriptions, infos à jour), avis de qualité, posts réguliers, SEO local technique. C'est l'ensemble qui joue."
                },
                {
                  q: "Qu'est-ce que le Local Pack et comment y apparaître?",
                  a: "C'est les 3 résultats locaux que Google affiche en haut des résultats. Pour y entrer: fiche optimisée, avis, pertinence locale, signaux de proximité."
                },
                {
                  q: "Comment optimiser ma fiche Google Business?",
                  a: "15+ photos de qualité, description 750+ caractères, toutes catégories pertinentes, horaires à jour, attributs (parking, WiFi, etc.), réponses aux avis."
                },
                {
                  q: "Combien de temps avant de voir des résultats?",
                  a: "Visibilité immédiate si vous avez une fiche. Entrée Local Pack: 4-8 semaines. Top position: 3-6 mois avec efforts continus."
                },
                {
                  q: "Comment générer plus d'avis Google?",
                  a: "Demander après une transaction réussie (email, SMS, code QR). Répondre à TOUS les avis rapidement et professionnellement. Les avis positifs attirent les clients."
                },
                {
                  q: "C'est combien pour l'optimisation locale?",
                  a: "C'est inclus dans le retainer Consultant Marketing. À partir de 1 000€/mois pour 0.5 jour/semaine."
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
            <h2 className="text-4xl font-bold mb-6">Prêt à dominer votre marché local?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Auditez votre présence locale. C'est gratuit et sans engagement.
            </p>
            <button
              onClick={() => handleCTAClick('Réserver audit local - CTA')}
              className="btn-primary text-center inline-block"
            >
              Demander un Audit
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
