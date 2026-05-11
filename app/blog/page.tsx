import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Articles IA, Marketing, Consulting',
  description: 'Articles sur l\'IA générative, stratégie marketing, formation, Make.com, LinkedIn B2B.',
};

export default function Blog() {
  const articles = [
    {
      slug: 'comment-utiliser-chatgpt-marketing',
      title: 'Comment Utiliser ChatGPT en Marketing ?',
      excerpt: '10 prompts essentiels pour générer du contenu marketing en 1/3 du temps.',
      date: '2026-05-07',
      readTime: '5 min',
    },
    {
      slug: 'claude-vs-chatgpt',
      title: 'Claude vs ChatGPT : Quelle IA Choisir ?',
      excerpt: 'Comparaison détaillée. Quand utiliser Claude, quand utiliser ChatGPT.',
      date: '2026-05-06',
      readTime: '7 min',
    },
    {
      slug: 'seo-ia-2026',
      title: 'SEO + IA : La Stratégie 2026',
      excerpt: 'Comment l\'IA change le SEO. Bonnes pratiques pour rester visible.',
      date: '2026-05-05',
      readTime: '8 min',
    },
    {
      slug: 'make-com-automation',
      title: 'Make.com : Automatiser Vos Workflows',
      excerpt: 'Guide pratique. Cas d\'usage. ROI. Sans code.',
      date: '2026-05-04',
      readTime: '6 min',
    },
    {
      slug: 'linkedin-b2b-ia',
      title: 'LinkedIn B2B + IA : Générez des Leads',
      excerpt: 'Stratégie B2B. Contenu. Automation avec IA.',
      date: '2026-05-03',
      readTime: '9 min',
    },
    {
      slug: 'methode-racef',
      title: 'Méthode RACEF : Mon Approche Consulting',
      excerpt: 'Recherche → Apprentissage → Cas → Exécution → Follow-up',
      date: '2026-05-02',
      readTime: '4 min',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Articles sur l\'IA, marketing et stratégie digital</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl">
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article.slug} className="border-b pb-8 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600">
                        {article.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Lire la suite →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Vous voulez rester à jour ?</h3>
              <p className="text-gray-600 mb-4">
                2 nouveaux articles par mois sur l\'IA et le marketing digital.
              </p>
              <button className="btn-primary">S\'abonner à la Newsletter</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
