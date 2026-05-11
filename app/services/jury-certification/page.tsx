import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jury Certification IA RS6776 | Évaluateur Officiel',
  description: 'Certification IA générative RS6776. Évaluateur officiel Educademy. Formation certifiante.',
};

export default function JuryCertification() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Jury Certification IA Générative (RS6776)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Certification nationale reconnue RNCP. Partenaire Educademy.
            </p>
            <Link href="/contact" className="btn-primary">En Savoir Plus</Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">C'est Quoi, la Certification IA RS6776 ?</h2>
            <p className="text-gray-700 mb-4">
              La certification <strong>RS6776</strong> est une <strong>certification professionnelle nationale</strong> reconnue par France Compétences et l'État.
            </p>
            <p className="text-gray-700 mb-4">
              Elle valide les compétences en <strong>IA générative</strong> :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Maîtrise des outils (ChatGPT, Claude, Gemini, etc.)</li>
              <li>✓ Cas d'usage métier</li>
              <li>✓ Éthique et légalité de l'IA</li>
              <li>✓ Intégration en entreprise</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Mon Rôle : Évaluateur Officiel</h2>
            <p className="text-gray-700 mb-4">
              Je suis <strong>jury évaluateur</strong> pour Educademy, partenaire officiel.
            </p>
            <p className="text-gray-700 mb-4">
              Mon rôle :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Évaluer les candidats sur leurs compétences IA</li>
              <li>✓ Valider les cas d'usage pratiques</li>
              <li>✓ Délivrer la certification officielle</li>
              <li>✓ Accompagner les apprenants</li>
            </ul>

            <div className="mt-8 bg-white p-6 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold mb-2">Pour Qui ?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Entrepreneurs qui veulent valider leur expertise IA</li>
                <li>✓ Salariés en reconversion / montée en compétences</li>
                <li>✓ Consultants / coaches en IA</li>
                <li>✓ Développeurs, marketeurs, managers intéressés</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Format & Durée</h2>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold">👤 Évaluation Individuelle</h3>
                <p className="text-sm text-gray-600">2-3h | 1:1 avec jury</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold">📊 Présentation d'un Projet</h3>
                <p className="text-sm text-gray-600">Cas d'usage IA appliqué à votre métier</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold">📋 Questions de Fond</h3>
                <p className="text-sm text-gray-600">Compétences, éthique, tendances 2025</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold">✅ Certification</h3>
                <p className="text-sm text-gray-600">Certificat officiel RS6776 si réussi</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Tarif</h2>

            <div className="bg-white p-8 rounded-lg border-2 border-accent">
              <p className="text-center mb-4">
                <span className="text-4xl font-bold text-accent">€500</span>
              </p>
              <p className="text-center text-gray-600 mb-6">
                Évaluation complète (2-3h) + Certification RS6776
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Entretien diagnostic (30 min)</li>
                <li>✓ Évaluation complète (2-3h)</li>
                <li>✓ Certificat officiel RS6776</li>
                <li>✓ Feedback détaillé</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "La certification est-elle reconnue par l'État ?", a: "Oui, RS6776 est enregistrée au RNCP (Répertoire National des Certifications Professionnelles)." },
                { q: "Combien de temps pour avoir le certificat ?", a: "Après évaluation réussie : 5-10 jours." },
                { q: "Peut-on repasser si on échoue ?", a: "Oui, on peut repasser (tarif réduit après 1ère tentative)." },
                { q: "Comment préparer l'évaluation ?", a: "Je fournis un guide + 3 mocks gratuites pour bien vous préparer." },
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
            <h2 className="text-2xl font-bold mb-4">Validez Votre Expertise IA</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Obtenez la certification RS6776. Reconnue nationale. Boost votre crédibilité.
            </p>
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
              Demander Info
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
