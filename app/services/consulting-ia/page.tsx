import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting IA & Formation ChatGPT | Le Consultant Digital',
  description: 'Formations ChatGPT, Claude, Gemini. Consulting IA générative. Méthode RACEF. Du concret pour entrepreneurs et PME.',
  keywords: ['formation ChatGPT', 'consulting IA', 'formation Claude', 'Make.com', 'LinkedIn B2B'],
};

export default function ConsultingIA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Formations IA Générative & Consulting Digital
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ChatGPT, Claude, Make.com, LinkedIn B2B. <strong>Du concret</strong>, pas des buzzwords.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Réserver Audit Gratuit
              </Link>
            </div>
          </div>
        </section>

        {/* Pourquoi cette prestation */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Pourquoi le Consulting IA ?</h2>
            <p className="text-gray-700 mb-4">
              L'IA générative change tout en 2025-2026. Les entrepreneurs et PME qui ne l'intègrent pas perdent 6-12 mois de compétitivité.
            </p>
            <p className="text-gray-700 mb-4">
              Je vous aide à <strong>maîtriser les outils</strong> (ChatGPT, Claude, Gemini, Make.com) pour :
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Gagner 10h/semaine en productivité</li>
              <li>✓ Créer du contenu marketing en 1/3 du temps</li>
              <li>✓ Automatiser vos workflows (Make.com)</li>
              <li>✓ Maîtriser le LinkedIn B2B avec IA</li>
              <li>✓ Former vos salariés à l'IA</li>
            </ul>
          </div>
        </section>

        {/* Qu'est inclus */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Ce Qui Est Inclus</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">📚 Formation ChatGPT Niveau 1</h3>
                <p className="text-gray-700 mb-2">2-4 heures | Groupe ou 1:1</p>
                <p className="text-gray-600">
                  Les 50 prompts essentiels. Cas d'usage marketing, contenu, productivité. Pratique 100%.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🤖 Consulting IA Générative</h3>
                <p className="text-gray-700 mb-2">Session diagnostic | 1-2h</p>
                <p className="text-gray-600">
                  Audit de votre stratégie IA. Outils à adopter. Plan d'action personnalisé (30 jours, 90 jours).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">⚙️ Atelier Make.com</h3>
                <p className="text-gray-700 mb-2">4 heures | Groupe ou 1:1</p>
                <p className="text-gray-600">
                  Automatisez vos workflows. Intégrez vos outils (Notion, Airtable, Zapier). ROI immédiat.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">📱 Formation LinkedIn B2B + IA</h3>
                <p className="text-gray-700 mb-2">3 heures | Groupe ou 1:1</p>
                <p className="text-gray-600">
                  Maîtrisez le LinkedIn. Générez des leads B2B. Utilisez Claude/ChatGPT pour optimiser.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🎓 Formation Claude (Avancée)</h3>
                <p className="text-gray-700 mb-2">2-4 heures | Groupe ou 1:1</p>
                <p className="text-gray-600">
                  Claude vs ChatGPT. Cas d'usage spécialisés. API Claude pour développeurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ma Méthodologie */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Ma Méthodologie : 3 Phases Structurées</h2>
            <p className="text-gray-700 mb-6">
              Chaque formation/consulting suit ce processus pour garantir des résultats mesurables et durables :
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg mb-2">Phase 1 — Audit & Diagnostic</h3>
                <p className="text-gray-700">
                  Je comprends votre contexte, vos enjeux, vos outils actuels et vos objectifs réels. Pas de solution généralisée.
                </p>
                <p className="text-gray-600 text-sm mt-2"><strong>Durée :</strong> 1-2 sessions (1-2h total)</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg mb-2">Phase 2 — Formation Intensive & Pratique</h3>
                <p className="text-gray-700">
                  Formation en petits groupes (max 8 personnes) 100% adaptée à votre métier. Hands-on sur vos cas réels.
                </p>
                <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                  <li>✓ Fondamentaux + cas d'usage spécifiques</li>
                  <li>✓ Utilisation d'outils (ChatGPT, Claude, Make.com, LinkedIn)</li>
                  <li>✓ Création de ressources réutilisables pour votre équipe</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2"><strong>Durée :</strong> 2-4 heures selon besoins</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg mb-2">Phase 3 — Suivi & Optimisation</h3>
                <p className="text-gray-700">
                  Post-formation, vous n'êtes pas seul. Accès à ma documentation, questions par Slack, ajustements nécessaires.
                </p>
                <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                  <li>✓ Suivi 30 jours gratuit</li>
                  <li>✓ Itération sur vos workflows</li>
                  <li>✓ Option : passage à du consulting récurrent (Directeur Marketing IA-powered)</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2"><strong>Durée :</strong> Variable selon besoin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cas client */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Cas Client</h2>

            <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-lg mb-2">PME Marketing | +300% Leads en 3 Mois</h3>
              <p className="text-sm text-gray-600 mb-4">
                Secteur: Marketing Digital | Taille: 15 salariés
              </p>
              <div>
                <p className="text-gray-700 mb-4">
                  <strong>Situation initiale :</strong> Équipe sans IA, processus manuels, 20 leads/mois
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Intervention :</strong> Formation ChatGPT (équipe), consulting Make.com, mise en place workflows
                </p>
                <p className="text-gray-700">
                  <strong>Résultat :</strong> 60+ leads/mois, productivité +4h/j par personne, ROI = 600%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Tarifs & Packages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Formation Seule</h3>
                <p className="text-3xl font-bold text-accent mb-4">€500-1500</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 2-4 heures</li>
                  <li>✓ 1:1 ou groupe</li>
                  <li>✓ Support post-formation</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 bg-blue-50">
                <h3 className="font-bold text-lg mb-2">Consulting + Formation</h3>
                <p className="text-3xl font-bold text-accent mb-4">€2000-5000</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Audit complet</li>
                  <li>✓ 2-3 sessions formation</li>
                  <li>✓ Plan d'action personnalisé</li>
                  <li>✓ Suivi 30 jours</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8 text-sm">
              Tarif sur devis pour formations équipes (10+ personnes)
            </p>
          </div>
        </section>

        {/* FAQ Service */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Questions sur Ce Service</h2>

            <div className="space-y-4">
              {[
                { q: "Quelle est la durée d'une formation ?", a: "2-4 heures selon le sujet. Flexible selon vos disponibilités." },
                { q: "Peut-on faire du sur-mesure ?", a: "Oui, 100%. Chaque formation s'adapte à votre contexte métier. Phase 1 diagnostique le besoin exact." },
                { q: "Quel est le ROI d'une formation IA ?", a: "En moyenne 3-6x en 30 jours. +10h productivité/semaine/personne selon les cas d'usage." },
                { q: "Vous formez les équipes aussi ?", a: "Oui, en petits groupes de 2-8 personnes max. Plus efficace pour la pratique et les questions." },
                { q: "Puis-je passer à du consulting plus récurrent après ?", a: "Oui, beaucoup de clients passent à du Directeur Marketing IA-powered après une formation initiale. Voir service Directeur Marketing." },
              ].map((item, i) => (
                <details key={i} className="bg-white p-4 rounded-lg cursor-pointer">
                  <summary className="font-bold">{item.q}</summary>
                  <p className="mt-3 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Étape suivante */}
        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Étape Suivante : Passer au Directeur Marketing IA-Powered</h2>
            <p className="text-gray-700 mb-6">
              Après cette formation/consulting, si vous souhaitez une stratégie marketing plus complète et du soutien récurrent (stratégie, SEO, contenu, LinkedIn, leads)...
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600 mb-6">
              <h3 className="font-bold text-lg mb-2">📊 Directeur Marketing Externalisé (IA-Powered)</h3>
              <p className="text-gray-700 mb-4">
                Une prestation <strong>récurrente</strong> : stratégie mensuelle + exécution en continu. Facture de €1500-5000/mois.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Parfait pour les entrepreneurs qui veulent <strong>grandir sans recruter</strong> un CMO à temps plein.
              </p>
              <Link href="/services/directeur-marketing" className="text-blue-600 font-bold hover:text-blue-800">
                En Savoir Plus sur le Directeur Marketing →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
          <div className="container">
            <h2 className="text-2xl font-bold mb-4">Prêt à Maîtriser l'IA ?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Réservez un audit gratuit (30 min) pour évaluer vos besoins en formation/consulting.
            </p>
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
