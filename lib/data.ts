// ============================================================
// Data for Le Consultant Digital site
// ============================================================

export const SERVICES = [
  {
    id: 'formation-ia',
    num: '01',
    icon: 'book',
    title: 'Formation IA',
    pitch: 'ChatGPT, Claude, Gemini, Copilot, Perplexity. Formations pragmatiques 100% pratique. Financées CPF & OPCO.',
    bullets: [
      '3 jours intensifs (présentiel ou remote)',
      'Cas d\'usage adaptés à votre secteur',
      'Guide RACEF + 50+ templates',
      'Support 90j + accès plateforme 1 an',
    ],
    href: '/services/formation-ia',
  },
  {
    id: 'consulting-ia',
    num: '02',
    icon: 'bot',
    title: 'Consulting IA',
    pitch: 'Audit IA gratuit, stratégie personnalisée, mise en place workflows. Approche RACEF structurée. 15 ans d\'expérience.',
    bullets: [
      'Audit initial gratuit (demi-journée)',
      'Stratégie IA + roadmap personnalisée',
      'Intégration 3-5 workflows Make.com',
      'Formation équipes + suivi 6 mois',
    ],
    href: '/services/consulting-ia',
  },
  {
    id: 'consultant-marketing',
    num: '03',
    icon: 'chart',
    title: 'Consultant Marketing',
    pitch: 'Directeur marketing externalisé. Stratégie + exécution. LinkedIn, SEO, contenu, automation. À la carte: 0.5j à 1.5j/semaine.',
    bullets: [
      'Audit stratégique gratuit (1 jour)',
      'LinkedIn B2B + SEO + contenu',
      'Automation Make.com + Google Business',
      'Retainer mensuel flexible, minimum 6 mois',
    ],
    href: '/services/consultant-marketing',
  },
];

export const STATS = [
  {
    tag: 'Lead gen',
    big: '+300',
    unit: '%',
    desc: 'de leads qualifiés en 3 mois pour une PME B2B SaaS.',
  },
  {
    tag: 'Formation',
    big: '50',
    unit: '+',
    desc: 'salariés formés à ChatGPT en 6 semaines, ROI dès J+30.',
  },
  {
    tag: 'Revenue',
    big: '€5',
    unit: 'M+',
    desc: 'de revenue générée pour clients ces 3 dernières années.',
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'William nous a fait gagner 6 mois sur l\'IA. Concret, pragmatique, sans prise de tête. On a vu les résultats dès la 3e semaine.',
    name: 'Sophie M.',
    role: 'Fondatrice, MarketAI',
    initials: 'SM',
  },
  {
    stars: 5,
    text: 'Du concret, pas du rêve. Exactement ce qu\'il nous fallait. La formation Claude a transformé notre productivité éditoriale.',
    name: 'Pierre L.',
    role: 'Directeur, TPE Drôme',
    initials: 'PL',
  },
  {
    stars: 5,
    text: 'En 30 jours, on a automatisé 70% de nos tâches répétitives avec Make.com. William sait expliquer simplement et passer à l\'action.',
    name: 'Caroline B.',
    role: 'CEO, Studio Eneko',
    initials: 'CB',
  },
];

export const REVIEWS = [
  {
    stars: 5,
    text: 'William nous a fait gagner 6 mois sur l\'implémentation de l\'IA. Concret, pragmatique, sans prise de tête. Les résultats dès la 3e semaine!',
    name: 'Sophie M.',
    role: 'Directrice Marketing, MarketAI',
    initials: 'SM',
  },
  {
    stars: 5,
    text: 'Du concret, pas du rêve. Exactement ce qu\'il nous fallait. La formation Claude a transformé notre productivité éditoriale et notre flux de travail.',
    name: 'Pierre L.',
    role: 'Directeur Général, TPE Drôme',
    initials: 'PL',
  },
  {
    stars: 5,
    text: 'En 30 jours, on a automatisé 70% de nos tâches répétitives avec Make.com. William sait expliquer simplement et passer à l\'action rapidement.',
    name: 'Caroline B.',
    role: 'CEO, Studio Eneko',
    initials: 'CB',
  },
  {
    stars: 5,
    text: 'La méthode RACEF m\'a permis de structurer mon approche IA de manière claire et reproductible. Un vrai game-changer pour mon cabinet.',
    name: 'Michel D.',
    role: 'Fondateur, Cabinet Consulting',
    initials: 'MD',
  },
  {
    stars: 5,
    text: 'William a formé toute notre équipe à ChatGPT et Claude. Le ROI est flagrant — gain de temps immédiat et utilisation quotidienne des outils IA.',
    name: 'Nathalie R.',
    role: 'Responsable RH, Groupe PME',
    initials: 'NR',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Quel est le prix d\'une formation ChatGPT ?',
    a: 'Les formations courtes (2h, en groupe) commencent à €500. Les accompagnements sur 30/90 jours sont sur devis selon votre périmètre. On démarre toujours par un audit gratuit de 30 min pour évaluer le besoin.',
  },
  {
    q: 'Travaillez-vous à distance ?',
    a: 'Oui, 100% des prestations peuvent se faire en visio (Zoom, Meet). Les formations sont pratiques et trackées sur Slack ou Notion. Je me déplace aussi sur Lyon, Grenoble, Paris pour les formats équipe.',
  },
  {
    q: 'Quel ROI sur le directeur marketing externalisé ?',
    a: 'En moyenne x2 sur le 1er trimestre pour les PME B2B. Mais ça dépend de votre marché et de votre point de départ. L\'audit gratuit permet de cadrer une fourchette honnête avant tout engagement.',
  },
  {
    q: 'Qu\'est-ce que la certification IA RS6776 ?',
    a: 'C\'est la certification nationale en IA générative, reconnue RNCP. Je suis évaluateur officiel pour Educademy — on certifie vos collaborateurs ou stagiaires sur leurs compétences IA réelles.',
  },
  {
    q: 'Puis-je résilier à tout moment ?',
    a: 'Oui. Le contrat directeur marketing externalisé est résiliable à 30 jours. Les formations sont vendues à la session, sans abonnement. Pas de piège, pas d\'engagement long.',
  },
  {
    q: 'Avec quels outils travaillez-vous ?',
    a: 'ChatGPT, Claude, Gemini, Make.com, n8n, Notion, Airtable, Linkedin Sales Navigator, Brevo, Hubspot, Webflow, Framer. La stack s\'adapte à la vôtre — je ne vends pas un outil, je résous un problème.',
  },
];

export const TRUST_ITEMS = [
  { num: '600', label: 'professionnels formés', icon: 'users' },
  { num: '5', sublabel: '/5', label: '120 avis Google certifiés', icon: 'star' },
  { num: '15', sublabel: '+ ans', label: 'd\'expertise digitale', icon: 'badge' },
];

export const BIO = {
  heading: 'William Martin — consultant qui code, exécute et forme.',
  paragraphs: [
    '15 ans dans le digital, 5 en agence et 10 côté annonceur. Quand l\'IA générative est arrivée, j\'ai arrêté de tout faire à la main et j\'ai bâti une méthode pour intégrer ChatGPT, Claude et Make.com dans des process concrets — pas des POC.',
    'Aujourd\'hui, j\'aide entrepreneurs et PME à gagner 10h/semaine sans embaucher, et j\'évalue les certifications IA RS6776 pour Educademy. Basé à Valence, j\'interviens partout en France.',
  ],
  cta: 'En savoir plus sur William',
  ctaHref: '/about',
};
