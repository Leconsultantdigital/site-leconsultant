import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation IA Générative | ChatGPT, Claude, Canva AI',
  description: 'Formations IA pragmatiques pour PME et entrepreneurs. ChatGPT, Claude, Gemini, Copilot, Perplexity. Financées CPF et OPCO. 3 jours intensifs, 100% pratique.',
  keywords: [
    'formation IA',
    'formation ChatGPT',
    'formation Claude',
    'formation IA générative',
    'formation IA PME',
    'formation IA entreprise',
    'formation Canva AI',
    'formation CPF IA',
  ],
  openGraph: {
    title: 'Formation IA Générative | Le Consultant Digital',
    description: 'Formez vos équipes à l\'IA en 3 jours. ChatGPT, Claude, et 5+ autres outils. Financement CPF & OPCO inclus.',
    type: 'website',
    url: 'https://leconsultantdigital.fr/services/formation-ia',
  },
};

export default function FormationIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
