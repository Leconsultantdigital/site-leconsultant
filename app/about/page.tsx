import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Le Consultant Digital',
  description: 'William Martin, consultant IA générative. 15+ ans expertise digital et marketing. Du concret, pas du rêve.',
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">À Propos de Moi</h1>
            <p className="text-xl text-gray-600">
              Consultant IA générative, formateur et directeur marketing externalisé.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-gray-600">Années d'expérience digital</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-gray-600">Entrepreneurs & salariés formés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">€5M+</p>
                <p className="text-gray-600">Revenue client générée</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Mon Histoire</h2>
              <p className="text-gray-700 mb-4">
                Après 10 ans en agences marketing et 5 ans en tant que consultant indépendant, j'ai vu une évidence : <strong>l'IA générative change tout</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                Plutôt que de la croire ou de paniquer, j'ai décidé d'apprendre, d'expérimenter, et de partager.
              </p>
              <p className="text-gray-700 mb-4">
                Aujourd'hui, j'aide entrepreneurs et PME à <strong>maîtriser l'IA</strong> pour :
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Gagner du temps (10h/semaine minimum)</li>
                <li>✓ Générer plus de leads</li>
                <li>✓ Automatiser les tâches répétitives</li>
                <li>✓ Devenir plus compétitifs</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Ma Philosophie</h2>
              <p className="text-gray-700 mb-4">
                <strong>"Du concret, pas du rêve."</strong>
              </p>
              <p className="text-gray-700">
                Pas de promesses miracles, pas de théorie inutile. Juste de l'IA appliquée à votre métier, vos défis, vos objectifs.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Expertise & Certifications</h2>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Expert IA générative (ChatGPT, Claude, Gemini, Copilot)</li>
                <li>✓ Consultant digital & marketing</li>
                <li>✓ Jury évaluateur certification IA RS6776</li>
                <li>✓ Formateur LinkedIn B2B</li>
                <li>✓ Spécialiste Make.com et automatisations</li>
                <li>✓ SEO & content marketing</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Partenaires</h2>
              <p className="text-gray-700 mb-4">
                Je travaille avec :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>🤝 <strong>CréActifs</strong> — Formations entrepreneurs</li>
                <li>🤝 <strong>Mill Forma</strong> — Formations BTP & digital</li>
                <li>🤝 <strong>Eneko</strong> — Conseil & formation PME</li>
                <li>🤝 <strong>Gedaf</strong> — Formations sectorielles</li>
                <li>🤝 <strong>Educademy</strong> — Certification IA générative RS6776</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Vous Voulez Discuter ?</h3>
              <p className="text-gray-700 mb-6">
                Je suis disponible pour évaluer votre situation, discuter de vos défis et définir un plan d'action.
              </p>
              <Link href="/contact" className="btn-primary">
                Réserver une Consultation Gratuite
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
