import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting IA Générative | Transformation Digitale PME',
  description: 'Consulting IA pour PME et entrepreneurs. Audit IA, stratégie personnalisée, intégration workflows, formation équipes. Approche RACEF structurée.',
  keywords: [
    'consulting IA',
    'consulting IA générative',
    'audit IA',
    'stratégie IA',
    'transformation IA',
    'conseil IA',
    'consulting digital',
    'audit IA gratuit',
  ],
  openGraph: {
    title: 'Consulting IA Générative | Le Consultant Digital',
    description: 'Transformez votre activité avec l\'IA. Audit gratuit, stratégie personnalisée, mise en place workflows.',
    type: 'website',
    url: 'https://leconsultantdigital.fr/services/consulting-ia',
  },
};

export default function ConsultingIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
