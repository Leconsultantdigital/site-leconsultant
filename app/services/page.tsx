import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import FinalCTA from '@/components/FinalCTA';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Services | Consulting IA, Formation, Directeur Marketing, Jury Certification',
  description: 'Consulting IA générative, formations pratiques, directeur marketing externalisé et jury de certification IA (RS6776). Méthode RACEF, tarifs indicatifs.',
};

const RACEF_STEPS: [string, string, string][] = [
  ['01', 'Recadrer', "On clarifie l'objectif business — pas l'outil. Audit 30 min offert."],
  ['02', 'Auditer', 'Stack actuelle, équipes, données. On identifie les 3 gisements de gain.'],
  ['03', 'Cartographier', "Plan d'action 30/60/90 jours. Process à automatiser, prompts à industrialiser."],
  ['04', 'Exécuter', 'On déploie ChatGPT, Claude, Make.com. On forme les équipes en pratique.'],
  ['05', 'Faire grandir', "Reporting mensuel, itérations, montée en autonomie. Vous gardez la main."],
];

const PRICING_ROWS: [string, string, string, string][] = [
  ['Formation IA (ChatGPT, Claude…)', 'Groupe ou 1:1', '3 jours', 'Sur devis (CPF/OPCO)'],
  ['Consulting IA', '1:1, à la carte', 'Après audit gratuit', '650€/jour'],
  ['Consultant Marketing', 'Retainer flexible', '0.5 à 1.5j/semaine', '1 000€ à 3 000€/mois'],
  ['Directeur Marketing Externalisé', 'Mensuel', '1 à 8j/mois', '500€ à 4 000€/mois'],
  ['Jury Certification IA (RS6776)', '1:1', 'Évaluation', '500€'],
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }]} />
      <Header />

      <main className="flex-grow">
        {/* Page hero */}
        <section className="bg-bg-light py-16 border-b border-border">
          <div className="container max-w-3xl">
            <div className="text-sm text-mid mb-3">
              <Link href="/" className="hover:text-dark transition">Accueil</Link> / Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Mes services.
            </h1>
            <p className="text-xl text-mid">
              Du conseil ponctuel au directeur marketing externalisé, en passant par la formation et la
              certification IA. Chacun avec un livrable clair, un prix clair, un calendrier clair.
            </p>
          </div>
        </section>

        {/* Services grid (real data, real subpages) */}
        <ServicesGrid showFooterLink={false} />

        {/* Méthode RACEF */}
        <section className="py-16 md:py-20 bg-bg-light">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Méthode propriétaire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                RACEF — la méthode pour passer à l&apos;action
              </h2>
              <p className="text-mid">
                5 étapes courtes, mesurables. Pensées pour des PME qui n&apos;ont pas le temps de faire de la recherche.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {RACEF_STEPS.map(([num, title, desc]) => (
                <div key={num} className="bg-white border border-border rounded-2xl p-6">
                  <div
                    className="text-4xl font-bold text-yellow mb-4 leading-none"
                    style={{ WebkitTextStroke: '1.5px #C9A600' }}
                  >
                    {num}
                  </div>
                  <h4 className="font-bold text-dark mb-2">{title}</h4>
                  <p className="text-sm text-mid leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs indicatifs */}
        <section className="py-16 md:py-20">
          <div className="container-tight">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow">Tarifs indicatifs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Combien ça coûte.</h2>
              <p className="text-mid">Prix de référence — l&apos;audit gratuit cadre toujours un devis sur-mesure.</p>
            </div>
            <div className="border border-border rounded-2xl overflow-hidden bg-white">
              <div className="hidden md:grid grid-cols-[1.4fr_1fr_1fr_auto] gap-6 px-7 py-4 bg-bg-light text-xs font-bold uppercase tracking-widest text-mid">
                <div>Prestation</div>
                <div>Format</div>
                <div>Durée</div>
                <div>Prix</div>
              </div>
              {PRICING_ROWS.map(([name, format, duration, price], i) => (
                <div
                  key={name}
                  className={`grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_auto] gap-2 md:gap-6 px-7 py-5 items-center ${
                    i < PRICING_ROWS.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="font-bold text-dark">{name}</div>
                  <div className="text-sm text-mid">{format}</div>
                  <div className="text-sm text-mid">{duration}</div>
                  <div className="font-bold text-dark">{price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
