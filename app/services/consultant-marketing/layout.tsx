import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultant Marketing | Stratégie & Exécution B2B',
  description: 'Consultant marketing externalisé pour PME. Stratégie, LinkedIn B2B, SEO, contenu, automation. Modèle récurrent, 0.5j à 1.5j/semaine.',
  keywords: [
    'consultant marketing',
    'consultant marketing externalisé',
    'stratégie marketing PME',
    'marketing B2B',
    'consultant stratégie marketing',
    'directeur marketing freelance',
  ],
  openGraph: {
    title: 'Consultant Marketing | Le Consultant Digital',
    description: 'Stratégie marketing de qualité sans engagement long terme. LinkedIn, SEO, contenu, automation.',
    type: 'website',
    url: 'https://leconsultantdigital.fr/services/consultant-marketing',
  },
};

export default function ConsultantMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
