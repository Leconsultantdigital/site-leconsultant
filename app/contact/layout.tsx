import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact William Martin | Consultant IA Générative',
  description: 'Contactez William Martin pour une consultation gratuite de 30 min. Formations ChatGPT, Claude, consulting IA, directeur marketing externalisé.',
  keywords: ['contact consultant IA', 'devis formation ChatGPT', 'audit IA gratuit', 'consulting digital'],
  openGraph: {
    title: 'Contact | Le Consultant Digital',
    description: 'Parlons de votre projet. 30 min de consultation gratuite.',
    type: 'website',
    url: 'https://leconsultantdigital.fr/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
