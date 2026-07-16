import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Directeur Marketing Externalisé IA-Powered | Tarifs & Missions PME',
  description: 'Directeur marketing externalisé avec IA générative intégrée. Stratégie + exécution, de 500€ à 4 000€ HT/mois selon le rythme. Opérationnel en 2-3 semaines.',
};

export default function DirectorMarketing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-bg-light py-16">
          <div className="container max-w-3xl">
            <span className="eyebrow">Directeur Marketing Externalisé</span>
            <h1 className="text-4xl font-bold mb-4 text-dark">
              Directeur Marketing IA-Powered
            </h1>
            <p className="text-xl text-mid mb-3">
              Stratégie + Exécution Récurrente (500€ à 4 000€ HT/mois)
            </p>
            <p className="text-lg text-dark mb-8">
              <strong>Sans recruter en CDI</strong>, un pilotage marketing senior à temps partagé — quelques
              jours par mois, calé sur votre rythme et votre budget. On appelle aussi ça{' '}
              <strong>marketing externalisé</strong>, <strong>externalisation marketing</strong> ou{' '}
              <strong>direction marketing à temps partagé</strong>. ChatGPT, Claude, Make.com intégrés pour
              accélérer l&apos;exécution.
            </p>
            <Link href="/contact" className="btn btn-primary">Audit Gratuit (30 min)</Link>
          </div>
        </section>

        {/* TL;DR */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="bg-white border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4 text-dark">TL;DR</h2>
              <ul className="space-y-3 text-dark">
                <li>✓ Un pilotage stratégique <strong>quelques jours par mois</strong>, sans CDI, sans charges, sans période d&apos;essai ratée.</li>
                <li>✓ Le budget tourne entre <strong>500 € et 4 000 € HT/mois</strong> selon le rythme d&apos;intervention (1 à 8 jours).</li>
                <li>✓ Opérationnel en <strong>2 à 3 semaines</strong>, contre 4 à 6 mois pour un recrutement classique.</li>
                <li>✓ Visio partout en France, points terrain possibles sur <strong>Valence et la région Auvergne-Rhône-Alpes</strong>.</li>
                <li>✓ Premiers résultats visibles en <strong>4 à 8 semaines</strong> : stratégie clarifiée, priorités posées, KPI en place.</li>
              </ul>
              <Link href="/contact" className="inline-block mt-6 font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
                Je prends rdv pour un diagnostic de 30 minutes, sans engagement →
              </Link>
            </div>
          </div>
        </section>

        {/* Le problème */}
        <section className="py-12 bg-bg-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-dark">Votre PME tourne sans directeur marketing. Et ça se voit.</h2>
            <p className="text-dark mb-6">
              Posez-vous la question franchement : qui décide de votre stratégie marketing aujourd&apos;hui ? Le
              dirigeant, entre deux rendez-vous clients ? Une alternante motivée mais seule face à des sujets
              qui dépassent son expérience ? Une agence qui exécute des campagnes sans vision d&apos;ensemble ?
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border-l-4 border-danger p-5 rounded-lg">
                <p className="font-bold text-dark mb-1">Vous avancez à l&apos;instinct, sans priorités claires.</p>
                <p className="text-mid text-sm">Résultat : le budget marketing part dans tous les sens, les actions se contredisent d&apos;un mois sur l&apos;autre, et personne ne sait vraiment ce qui rapporte.</p>
              </div>
              <div className="bg-white border-l-4 border-danger p-5 rounded-lg">
                <p className="font-bold text-dark mb-1">Recruter un directeur marketing en CDI coûte cher et prend du temps.</p>
                <p className="text-mid text-sm">Un profil senior, c&apos;est 80 000 à 120 000 € chargés par an, plus 4 à 6 mois de recrutement, plus le risque d&apos;erreur de casting sur un poste stratégique.</p>
              </div>
              <div className="bg-white border-l-4 border-danger p-5 rounded-lg">
                <p className="font-bold text-dark mb-1">Votre équipe junior a besoin d&apos;un cap, pas d&apos;un contrôleur.</p>
                <p className="text-mid text-sm">Elle exécute bien, mais elle manque de recul stratégique pour prioriser, arbitrer et défendre le budget marketing en comité de direction.</p>
              </div>
            </div>

            <p className="text-dark mb-6">
              C&apos;est exactement ce que résout un directeur marketing externalisé (CA €200k-€5M typiquement) :
              un pilotage senior, à temps partagé, calé sur votre rythme et votre budget — sans les 40-60k€/an
              d&apos;un CMO interne, ni la rigidité d&apos;une agence classique.
            </p>

            <Link href="/contact" className="inline-block font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
              Je prends rdv pour en discuter, sans engagement →
            </Link>
          </div>
        </section>

        {/* Missions */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-dark">Les missions qu&apos;un directeur marketing externalisé peut piloter pour vous</h2>
            <p className="text-mid mb-8">
              Un directeur marketing externalisé n&apos;est pas un simple exécutant. Il pilote, il arbitre, il rend des comptes chiffrés.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-dark">Stratégie et positionnement</h3>
                <ul className="space-y-2 text-dark mb-4">
                  <li>✓ Audit marketing et diagnostic de l&apos;existant</li>
                  <li>✓ Analyse concurrentielle et positionnement de l&apos;offre</li>
                  <li>✓ Définition des cibles, personas et segmentation</li>
                  <li>✓ Construction d&apos;une feuille de route à 90 jours, 6 mois, 1 an</li>
                </ul>
                <div className="bg-white border-l-4 border-danger p-5 rounded-lg">
                  <p className="font-bold text-dark mb-1">Vous multipliez les actions sans fil rouge.</p>
                  <p className="text-mid text-sm">Un post LinkedIn ici, une campagne Ads là, un salon professionnel entre les deux : sans stratégie commune, chaque euro dépensé travaille tout seul, dans son coin.</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-dark">Acquisition et génération de leads</h3>
                <ul className="space-y-2 text-dark">
                  <li>✓ Stratégie SEO, SEA et inbound marketing</li>
                  <li>✓ Campagnes email et marketing automation</li>
                  <li>✓ Optimisation du tunnel de conversion</li>
                  <li>✓ Suivi du ROI par canal</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-dark">Visibilité et image de marque</h3>
                <ul className="space-y-2 text-dark">
                  <li>✓ Identité de marque et cohérence des supports</li>
                  <li>✓ Stratégie de contenu et relations presse</li>
                  <li>✓ Pilotage des réseaux sociaux et du community management</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-dark">Pilotage, reporting et coordination des prestataires</h3>
                <ul className="space-y-2 text-dark mb-4">
                  <li>✓ Tableaux de bord et KPI marketing</li>
                  <li>✓ Coordination des agences, freelances et outils déjà en place</li>
                  <li>✓ Reporting mensuel au dirigeant, en langage business, pas en jargon marketing</li>
                </ul>
                <div className="bg-white border-l-4 border-danger p-5 rounded-lg">
                  <p className="font-bold text-dark mb-1">Vous payez plusieurs prestataires qui ne se parlent pas.</p>
                  <p className="text-mid text-sm">L&apos;agence SEO ignore ce que fait l&apos;agence Ads, qui elle-même ignore le community manager. Un directeur marketing externalisé coordonne tout ça et évite les doublons.</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-block mt-8 font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
              J&apos;en profite pour cadrer mes prestataires actuels →
            </Link>
          </div>
        </section>

        {/* Paliers / Tarifs */}
        <section className="py-12 bg-bg-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-dark">Les paliers d&apos;accompagnement, avec des tarifs clairs</h2>
            <p className="text-mid mb-8">
              Pas de devis mystère. TJM de référence : <strong>500€ HT/jour</strong>. Voici comment se structure une direction marketing à temps partagé, du plus léger au plus complet.
            </p>

            <div className="space-y-5">
              <div className="bg-white border border-border rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-1 text-dark">Palier 1 — Cadrage stratégique</h3>
                <p className="text-2xl font-bold text-yellow-dark mb-4">500€ à 1 000€ HT/mois</p>
                <ul className="space-y-1 text-sm text-dark mb-4">
                  <li>✓ 1 à 2 jours d&apos;intervention par mois</li>
                  <li>✓ Définition de la stratégie et des priorités</li>
                  <li>✓ Pilotage de vos prestataires ou de votre équipe junior existante</li>
                  <li>✓ Reporting mensuel</li>
                </ul>
                <p className="text-sm text-mid"><strong>Idéal si</strong> vous avez déjà des ressources en interne ou en agence, mais qu&apos;il manque un cap stratégique au-dessus.</p>
              </div>

              <div className="bg-white border-2 border-yellow rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-1 text-dark">Palier 2 — Pilotage actif</h3>
                <p className="text-2xl font-bold text-yellow-dark mb-4">1 500€ à 2 500€ HT/mois</p>
                <ul className="space-y-1 text-sm text-dark mb-4">
                  <li>✓ 3 à 5 jours d&apos;intervention par mois</li>
                  <li>✓ Construction et exécution de la feuille de route</li>
                  <li>✓ Production d&apos;actifs clés (campagnes, contenus stratégiques, séquences email)</li>
                  <li>✓ Suivi hebdomadaire, bilan mensuel chiffré</li>
                </ul>
                <p className="text-sm text-mid"><strong>Idéal si</strong> vous voulez que ça avance concrètement, mais que vous manquez de bras pour produire.</p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-1 text-dark">Palier 3 — Direction marketing complète</h3>
                <p className="text-2xl font-bold text-yellow-dark mb-4">3 000€ à 4 000€ HT/mois</p>
                <ul className="space-y-1 text-sm text-dark mb-4">
                  <li>✓ 6 à 8 jours d&apos;intervention par mois</li>
                  <li>✓ Gestion globale du budget marketing et du ROI consolidé</li>
                  <li>✓ Recrutement et montée en compétences de vos futurs collaborateurs internes</li>
                  <li>✓ Présence renforcée en phase de croissance, levée de fonds ou repositionnement</li>
                </ul>
                <p className="text-sm text-mid"><strong>Idéal si</strong> vous voulez déléguer l&apos;intégralité de la fonction marketing pour vous concentrer sur votre métier de dirigeant.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-danger p-5 rounded-lg mt-6">
              <p className="font-bold text-dark mb-1">Vous ne savez pas quel palier choisir ?</p>
              <p className="text-mid text-sm">C&apos;est justement l&apos;objet du premier échange : on regarde votre situation réelle, pas une grille tarifaire figée, et on ajuste le rythme si besoin après quelques mois.</p>
            </div>

            <Link href="/contact" className="inline-block mt-6 font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
              Je prends rdv pour évaluer le palier adapté à votre situation →
            </Link>
          </div>
        </section>

        {/* Résultats types */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8 text-dark">Résultats Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white border border-border rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold text-yellow-dark">+150%</p>
                <p className="text-sm text-mid">Leads qualifiés (3-6 mois)</p>
              </div>
              <div className="bg-white border border-border rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold text-yellow-dark">€150k+</p>
                <p className="text-sm text-mid">Revenue additionnelle</p>
              </div>
              <div className="bg-white border border-border rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold text-yellow-dark">4x</p>
                <p className="text-sm text-mid">ROI moyen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi ça marche */}
        <section className="py-12 bg-bg-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-6 text-dark">Pourquoi ce modèle marche : l&apos;expérience derrière le pilotage</h2>
            <p className="text-dark mb-6">
              Un directeur marketing externalisé ne vaut que par son vécu terrain. Voici ce qui différencie un pilotage utile d&apos;un pilotage cosmétique.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow">
                <h3 className="font-bold text-lg mb-2 text-dark">15+ ans à structurer des marketings de PME</h3>
                <p className="text-mid">Pas seulement à concevoir des slides de stratégie pour un comité de direction — de l&apos;exécution réelle, mesurée.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow">
                <h3 className="font-bold text-lg mb-2 text-dark">Une méthode transparente</h3>
                <p className="text-mid">Cockpit de suivi partagé, points hebdomadaires, bilan chiffré chaque mois. Vous voyez ce qui avance, pas une boîte noire.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow">
                <h3 className="font-bold text-lg mb-2 text-dark">Un regard extérieur assumé</h3>
                <p className="text-mid">Pas de politique interne, pas de copinage avec tel ou tel prestataire historique. Les décisions se prennent sur les résultats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow">
                <h3 className="font-bold text-lg mb-2 text-dark">Basé à Valence, Drôme, actif partout en France</h3>
                <p className="text-mid">En visio. Les points stratégiques passent très bien en visioconférence ; les ateliers de lancement ou les moments clés peuvent se faire en présentiel en région Auvergne-Rhône-Alpes.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-danger p-5 rounded-lg mb-6">
              <p className="font-bold text-dark mb-1">Vous avez déjà eu une mauvaise expérience avec un consultant marketing ?</p>
              <p className="text-mid text-sm">Souvent, c&apos;est parce que le consultant recommandait sans jamais s&apos;engager sur l&apos;exécution. Ici, le rôle est différent : on pilote, on décide, on rend des comptes sur des chiffres, pas sur des heures facturées.</p>
            </div>

            <Link href="/contact" className="inline-block font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
              J&apos;en profite pour échanger sur mon contexte précis, sans engagement →
            </Link>
          </div>
        </section>

        {/* CDI vs externalisation */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-dark">Externaliser ou recruter en CDI : le vrai arbitrage</h2>
            <p className="text-mid mb-6">
              C&apos;est LA question que tout dirigeant se pose avant de se lancer. Voici les critères qui comptent vraiment.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-2xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-bg-light text-left">
                    <th className="p-4 font-bold text-dark">Critère</th>
                    <th className="p-4 font-bold text-dark">Directeur marketing en CDI</th>
                    <th className="p-4 font-bold text-dark">Directeur marketing externalisé</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Coût annuel', '80 000 à 120 000 € chargés', '6 000 à 48 000 € selon le palier'],
                    ['Délai de mise en route', '4 à 6 mois (recrutement + onboarding)', '2 à 3 semaines'],
                    ["Engagement", "CDI, préavis, risque prud'homal", 'Sans engagement long terme, renouvelable'],
                    ["Niveau d'expertise accessible", 'Limité par le budget disponible', 'Profil senior, inaccessible en CDI pour beaucoup de PME'],
                    ['Flexibilité du rythme', 'Fixe, 35 à 39h/semaine', 'Ajustable selon les besoins réels (1 à 8 jours/mois)'],
                    ["Risque d'erreur de recrutement", 'Élevé sur un poste stratégique', "Quasi nul : la mission s'arrête si ça ne colle pas"],
                  ].map(([critere, cdi, externalise], i) => (
                    <tr key={critere} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-light/50'}>
                      <td className="p-4 font-bold text-dark border-t border-border">{critere}</td>
                      <td className="p-4 text-mid border-t border-border">{cdi}</td>
                      <td className="p-4 text-dark border-t border-border">{externalise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border-l-4 border-danger p-5 rounded-lg mb-6">
              <p className="font-bold text-dark mb-1">Vous avez peur qu&apos;un externe ne s&apos;implique pas comme un salarié ?</p>
              <p className="text-mid text-sm">En pratique, un directeur marketing externalisé qui reste plusieurs mois s&apos;implique autant, voire plus : sa réputation et son renouvellement de mission en dépendent directement.</p>
            </div>

            <p className="text-dark mb-6">
              <strong>Quand le CDI reste pertinent ?</strong> Si votre budget marketing dépasse largement 150 000 € par an
              et que vous avez besoin d&apos;une présence quotidienne à temps plein sur plusieurs fronts simultanés. Pour
              la majorité des PME et ETI, le modèle à temps partagé reste le compromis le plus rentable entre expertise
              et maîtrise des coûts.
            </p>

            <Link href="/contact" className="inline-block font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
              Je prends rdv pour comparer les deux options sur mon cas précis →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-bg-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8 text-dark">FAQ — Directeur marketing externalisé</h2>
            <div className="space-y-4">
              {[
                { q: "C'est quoi, un directeur marketing externalisé ?", a: "C'est un professionnel expérimenté qui pilote votre stratégie marketing à temps partiel, quelques jours par mois, sans être salarié de votre entreprise. Il structure, priorise et rend des comptes, exactement comme un directeur marketing interne, mais avec un rythme et un coût ajustés à votre besoin réel." },
                { q: "Quelle est la différence entre marketing externalisé et une agence marketing ?", a: "Une agence exécute des prestations (SEO, Ads, réseaux sociaux). Un directeur marketing externalisé pilote la stratégie globale et coordonne, éventuellement, plusieurs agences ou prestataires. Les deux rôles sont complémentaires, pas interchangeables." },
                { q: "Combien coûte une externalisation marketing pour une PME ?", a: "Comptez entre 500 € et 4 000 € HT par mois selon le rythme d'intervention, à 500€ HT/jour : de 1-2 jours pour du cadrage stratégique (500€ à 1 000€) à 6-8 jours pour un pilotage complet de la fonction marketing (3 000€ à 4 000€)." },
                { q: "Faut-il être basé à Valence pour travailler avec vous ?", a: "Non. L'essentiel du pilotage se fait en visio, partout en France. Les entreprises de la région Auvergne-Rhône-Alpes peuvent bénéficier de points en présentiel pour les moments clés (lancement de mission, ateliers stratégiques)." },
                { q: "Combien de temps avant de voir des résultats ?", a: "Les premières actions structurantes (stratégie clarifiée, priorités posées, KPI en place) sont visibles en 4 à 8 semaines. Les résultats business concrets — leads qualifiés, visibilité, positionnement — se matérialisent généralement entre 3 et 6 mois." },
                { q: "Engagement minimum ?", a: "Non. Mois par mois. Annulation possible avec 1 mois de préavis. Zéro surprises." },
                { q: "100% remote ou on-site possible ?", a: "100% remote de base. Slack, docs partagés, vidéos régulières. Réunions on-site = possible (frais déplacement déductibles)." },
                { q: "Comment ça marche concrètement ?", a: "1) Audit gratuit (30 min) 2) Nous définissons la stratégie mois 1 3) Exécution récurrente. Rapports mensuels." },
                { q: 'Puis-je commencer par une formation ?', a: "Oui, c'est même recommandé ! Beaucoup commencent par Formation IA (découverte), puis passent à Directeur Marketing (exécution). Transition naturelle." },
                { q: "Qu'est-ce qui garantit les résultats ?", a: "Pas de garantie magique, mais des résultats mesurés mensuellement. Si rien ne fonctionne après 30 jours, on pivote la stratégie. Transparence totale." },
              ].map((item, i) => (
                <details key={i} className="bg-white border border-border p-6 rounded-lg cursor-pointer hover:border-yellow hover:shadow-md transition group">
                  <summary className="font-bold text-dark text-base group-hover:text-yellow-dark transition">{item.q}</summary>
                  <p className="mt-4 text-mid leading-relaxed text-sm">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link href="/contact" className="font-bold text-dark border-b-2 border-yellow hover:text-yellow-dark transition">
                Je prends rdv pour poser toutes vos questions en direct, 30 minutes, sans engagement →
              </Link>
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="py-8">
          <div className="container max-w-3xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-mid mb-3">Sources utiles</h3>
            <ul className="space-y-1 text-sm text-mid list-disc list-inside">
              <li>
                <a href="https://www.andrh.fr/uploads/files/attachments/617174b543453602393007.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-dark underline">
                  ANDRH — Définition et cadre du temps partagé
                </a>
              </li>
              <li>
                <a href="https://www.apec.fr/candidat/etre-accompagne-dans-votre-recherche-demploi/cibler-les-opportunites/fiche-conseils/-le-management-de-transition-donne-une-grande-flexibilite-dans-la-gestion-de-sa-carriere-bruno-blaser-de-manag-in.html" target="_blank" rel="noopener noreferrer" className="hover:text-dark underline">
                  APEC — Fiche conseil sur le management de transition et la flexibilité de carrière
                </a>
              </li>
              <li>
                <a href="https://www.journaldunet.com/business/salaire/directeur-marketing/salaire-00590" target="_blank" rel="noopener noreferrer" className="hover:text-dark underline">
                  JournalDuNet — Salaire directeur marketing en France
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-dark text-white text-center">
          <div className="container">
            <h2 className="text-2xl font-bold mb-4 text-white">Prêt pour une Vraie Stratégie Marketing ?</h2>
            <Link href="/contact" className="btn btn-accent">
              Audit Gratuit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
