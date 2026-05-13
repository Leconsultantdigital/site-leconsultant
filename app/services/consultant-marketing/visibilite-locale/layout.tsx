import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visibilité Locale | SEO Local & Google Business',
  description: 'Optimisation visibilité locale. Fiche Google Business, Local Pack, avis, SEO local. Apparaissez dans les résultats près de Valence, Rhône-Alpes.',
  keywords: [
    'visibilité locale',
    'SEO local',
    'Google Business',
    'Local Pack',
    'fiche Google My Business',
    'avis Google',
    'SEO Valence',
    'consultant local',
  ],
  openGraph: {
    title: 'Visibilité Locale | Le Consultant Digital',
    description: 'Dominez le Local Pack et les résultats de recherche locaux. Stratégie geo-ciblée complète.',
    type: 'website',
    url: 'https://leconsultantdigital.fr/services/consultant-marketing/visibilite-locale',
  },
};

export default function VisibiliteLocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
