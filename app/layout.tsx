import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Consultant IA Générative #1 en France | Le Consultant Digital',
  description: 'Consulting digital, formations ChatGPT/Claude, directeur marketing externalisé. Du concret, pas du rêve. Basé à Valence (Drôme).',
  keywords: ['consultant IA', 'formation ChatGPT', 'consulting IA générative', 'directeur marketing', 'marketing digital'],
  metadataBase: new URL('https://leconsultantdigital.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://leconsultantdigital.fr',
    title: 'Consultant IA Générative #1 en France',
    description: 'Consulting digital, formations ChatGPT/Claude, directeur marketing externalisé.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Consultant Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultant IA Générative #1 en France',
    description: 'Consulting digital, formations ChatGPT/Claude, directeur marketing externalisé.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://leconsultantdigital.fr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://leconsultantdigital.fr" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://leconsultantdigital.fr',
              name: 'William Martin - Consultant / Formateur IA & Marketing digital',
              description: 'Consultant IA générative, formations ChatGPT/Claude, directeur marketing externalisé. Basé à Bourg-Lès-Valence, Drôme.',
              url: 'https://leconsultantdigital.fr',
              telephone: '+33624012180',
              email: 'contact@leconsultantdigital.fr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '13 rue du Belvédère',
                addressLocality: 'Bourg-Lès-Valence',
                addressRegion: 'Drôme',
                postalCode: '26500',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '44.9555181',
                longitude: '4.9048937',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Valence',
                },
                {
                  '@type': 'State',
                  name: 'Drôme',
                },
                {
                  '@type': 'State',
                  name: 'Rhône-Alpes',
                },
              ],
              image: 'https://leconsultantdigital.fr/og-image.jpg',
              priceRange: '€500-€5000',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '120',
              },
              knowsAbout: ['ChatGPT', 'Claude', 'IA générative', 'Make.com', 'SEO', 'Marketing digital', 'LinkedIn B2B'],
              sameAs: [
                'https://www.linkedin.com/in/williammartin',
                'https://www.google.com/maps/place/William+Martin+-+Consultant+%2F+Formateur+IA+%26+Marketing+digital/@44.9555181,4.9023188,1113m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d582c43ca83d859:0x9adda185268a3d06!8m2!3d44.9555181!4d4.9048937!16s%2Fg%2F11rq5xjsb6',
              ],
              service: [
                {
                  '@type': 'Service',
                  name: 'Formation IA & Consulting Digital',
                  description: 'Formations ChatGPT, Claude, Make.com en petits groupes. Consulting IA générative personnalisé.',
                  url: 'https://leconsultantdigital.fr/services/consulting-ia',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'Le Consultant Digital',
                  },
                  areaServed: 'FR',
                  potentialAction: {
                    '@type': 'ReserveAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://leconsultantdigital.fr/contact',
                      actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
                    },
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Directeur Marketing IA-Powered',
                  description: 'Stratégie marketing + exécution mensuelle (€1500-5000/mois). IA intégrée.',
                  url: 'https://leconsultantdigital.fr/services/directeur-marketing',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'Le Consultant Digital',
                  },
                  areaServed: 'FR',
                  potentialAction: {
                    '@type': 'ReserveAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://leconsultantdigital.fr/contact',
                      actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
                    },
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization Schema for E-E-A-T */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Le Consultant Digital',
              url: 'https://leconsultantdigital.fr',
              logo: 'https://leconsultantdigital.fr/logo.png',
              description: 'Expert en IA générative et marketing digital pour entrepreneurs et PME.',
              sameAs: [
                'https://www.linkedin.com/in/williammartin',
                'https://www.google.com/maps/place/William+Martin+-+Consultant+%2F+Formateur+IA+%26+Marketing+digital/@44.9555181,4.9023188,1113m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d582c43ca83d859:0x9adda185268a3d06!8m2!3d44.9555181!4d4.9048937!16s%2Fg%2F11rq5xjsb6',
              ],
              knowsAbout: ['IA générative', 'ChatGPT', 'Claude', 'Marketing digital', 'SEO'],
              educationCredentials: ['Certification IA RS6776 (RNCP)', '15+ années marketing'],
            }),
          }}
        />

        {/* TrustIndex Widget */}
        <script defer async src='https://cdn.trustindex.io/loader.js?8efd29336181585fb20608aaeec'></script>

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KYW5SBZ177"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KYW5SBZ177', {
                page_path: window.location.pathname,
                allow_google_signals: true,
                allow_ad_personalization: true
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
