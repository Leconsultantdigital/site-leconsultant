import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Directeur Marketing IA-Powered | Stratégie + Exécution Récurrente',
  description: 'Directeur marketing externalisé avec IA générative intégrée. Stratégie + exécution mensuelle. €1500-5000/mois. Pour entrepreneurs et PME.',
};

export default function DirectorMarketing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Directeur Marketing IA-Powered
            </h1>
            <p className="text-xl text-gray-600 mb-3">
              Stratégie + Exécution Récurrente (€1500-5000/mois)
            </p>
            <p className="text-lg text-gray-700 mb-8">
              <strong>Sans recruter un CMO</strong>, obtenez une stratégie marketing professionnelle + exécution quotidienne. ChatGPT, Claude, Make.com intégrés pour accélérer tout.
            </p>
            <Link href="/contact" className="btn-primary">Audit Gratuit (30 min)</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">C'est Pour Vous Si…</h2>
            <p className="text-gray-700 mb-6">
              Vous êtes entrepreneur ou PME (CA €200k - €5M) et vous avez besoin d'une présence marketing solide, <strong>mais</strong> :
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 pl-4 mb-8">
              <h3 className="font-bold text-red-900 mb-3">❌ Votre situation actuelle</h3>
              <ul className="space-y-2 text-red-900">
                <li>✗ Pas de CMO en interne (coût €40-60k/an)</li>
                <li>✗ Les agences classiques sont trop chères (€3-10k/mois) ou pas réactives</li>
                <li>✗ Vous avez besoin de quelqu'un de disponible et réactif</li>
                <li>✗ Vous voulez quelqu'un expert en IA pour ne pas prendre du retard</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-blue-900 mb-3">✅ Ce que je vous apporte</h3>
              <ul className="space-y-2 text-blue-900">
                <li>✓ Stratégie marketing 360° : personas, positionnement, plan annuel</li>
                <li>✓ Exécution quotidienne : contenu, réseaux, SEO, leads</li>
                <li>✓ IA intégrée (ChatGPT, Claude, Make.com) pour 3x plus d'output</li>
                <li>✓ Disponibilité 5j/7 + réunions régulières + rapports</li>
                <li>✓ Pricing prévisible : €1500-5000/mois, sans engagement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Livrables Mensuels</h2>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">📊 Stratégie Marketing</h3>
                <p className="text-gray-700 mb-2">Mois 1 : Audit complet, personas, positionnement, roadmap 12 mois</p>
                <p className="text-sm text-gray-600">Puis : ajustements mensuels basés sur les résultats</p>
              </div>

              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">📱 Contenu & Réseaux Sociaux (IA-Accéléré)</h3>
                <p className="text-gray-700 mb-2">Posts LinkedIn qualifiés, newsletters, articles blog. ChatGPT/Claude pour générer, je vous propose et publie.</p>
                <p className="text-sm text-gray-600">Résultat : 4-8 semaines de contenu préparé en quelques jours</p>
              </div>

              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">🎯 SEO & Référencement</h3>
                <p className="text-gray-700 mb-2">Audit on-page, mots-clés, contenu SEO, netlinking. IA pour débusquer les opportunités rapidement.</p>
                <p className="text-sm text-gray-600">Cible : 50+ positions top 20, 20+ top 3 en 6 mois</p>
              </div>

              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">📊 Analytics & Reporting</h3>
                <p className="text-gray-700 mb-2">GA4 configuré, dashboards temps réel, rapports mensuels avec insights actionnables.</p>
                <p className="text-sm text-gray-600">Transparence complète : visits, leads, conversions, ROI</p>
              </div>

              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">⚙️ Automatisation Make.com</h3>
                <p className="text-gray-700 mb-2">Workflows pour syncer vos outils (CRM, email, Notion, Slack, etc). Plus de tâches manuelles.</p>
                <p className="text-sm text-gray-600">Ex : nouveau lead → auto-ajouté à Notion + email auto-envoyé</p>
              </div>

              <div className="bg-white p-5 rounded border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">💬 Suivi & Disponibilité</h3>
                <p className="text-gray-700 mb-2">Réunions hebdo (Starter), calls urgentes 48h, Slack pour les questions rapides.</p>
                <p className="text-sm text-gray-600">Vous n'êtes pas seul : quelqu'un pense à votre marketing chaque jour</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Tarifs</h2>

            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">📊 Package Starter</h3>
                <p className="text-2xl font-bold text-accent mb-4">€1500/mois</p>
                <ul className="text-sm space-y-1">
                  <li>✓ 10h/mois directeur marketing</li>
                  <li>✓ 2 réunions mensuelles</li>
                  <li>✓ Stratégie + exécution basique</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-blue-50">
                <h3 className="font-bold text-lg mb-2">⭐ Package Standard</h3>
                <p className="text-2xl font-bold text-accent mb-4">€3000/mois</p>
                <ul className="text-sm space-y-1">
                  <li>✓ 20h/mois directeur marketing</li>
                  <li>✓ 4 réunions mensuelles</li>
                  <li>✓ Stratégie + exécution complète</li>
                  <li>✓ Contenu + réseaux + SEO</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">🚀 Package Premium</h3>
                <p className="text-2xl font-bold text-accent mb-4">€5000+/mois</p>
                <ul className="text-sm space-y-1">
                  <li>✓ 30h/mois directeur marketing</li>
                  <li>✓ Disponibilité quasi full-time</li>
                  <li>✓ Accès prioritaire</li>
                  <li>✓ Reporting avancé</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">Résultat Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded text-center">
                <p className="text-2xl font-bold text-accent">+150%</p>
                <p className="text-sm text-gray-600">Leads qualifiés (3-6 mois)</p>
              </div>
              <div className="bg-white p-6 rounded text-center">
                <p className="text-2xl font-bold text-accent">€150k+</p>
                <p className="text-sm text-gray-600">Revenue additionnelle</p>
              </div>
              <div className="bg-white p-6 rounded text-center">
                <p className="text-2xl font-bold text-accent">4x</p>
                <p className="text-sm text-gray-600">ROI moyen</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Points Clés</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">✓ Flexibilité</h3>
                <p className="text-gray-700">
                  Mois par mois, pas d'engagement long terme. Annulation avec 1 mois de préavis. Idéal pour tester.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">✓ 100% Remote</h3>
                <p className="text-gray-700">
                  Pas besoin d'être en France. Je travaille où vous êtes (Slack, vidéos, docs). Option réunions on-site si besoin.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">✓ Résultats Mesurés</h3>
                <p className="text-gray-700">
                  Pas de promesses : dashboards clairs, KPIs, rapports mensuels. Transparence totale.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">✓ Naturel après Formation</h3>
                <p className="text-gray-700">
                  Beaucoup de clients commencent par une formation IA, puis passent à du Directeur Marketing pour l'exécution. Progression logique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Engagement minimum ?", a: "Non, mois par mois. Annulation avec 1 mois de préavis. Pas de surprise." },
                { q: "100% remote ?", a: "Oui. Slack, vidéos, docs partagés. Option réunions on-site si vous le souhaitez." },
                { q: "Comment ça marche concrètement ?", a: "1) Audit gratuit (30 min) 2) Nous définissons la stratégie mois 1 3) Exécution récurrente. Rapports mensuels." },
                { q: "Puis-je commencer par une formation ?", a: "Oui, c'est recommendé ! Beaucoup commencent par Formation IA, puis passent à Directeur Marketing pour l'exécution." },
                { q: "Qu'est-ce qui garantit les résultats ?", a: "Pas de garantie magique, mais résultats mesurés mensuellement. Si ça ne fonctionne pas après 30j, on pivote." },
              ].map((item, i) => (
                <details key={i} className="bg-gray-50 p-4 rounded cursor-pointer">
                  <summary className="font-bold">{item.q}</summary>
                  <p className="mt-3 text-gray-700 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
          <div className="container">
            <h2 className="text-2xl font-bold mb-4">Prêt pour une Vraie Stratégie Marketing ?</h2>
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
              Audit Gratuit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
