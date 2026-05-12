'use client';

import Link from 'next/link';
import { TRUST_ITEMS } from '@/lib/data';

export type HeroVariant = 'photo' | 'typo' | 'split' | 'centered';

export interface HeroSectionProps {
  variant?: HeroVariant;
}

function HeroPhoto() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fadeInLeft">
            {/* Pill */}
            <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
              <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">✨ NOUVEAU</span>
              <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
            </div>

            {/* Heading — NOUVELLE PROMISE */}
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Vous utilisez{' '}
              <span className="text-yellow">10% de l'IA</span>
              .<br />
              Je vous montre comment<br />
              utiliser les{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(180deg, transparent 60%, #FFD200 60%, #FFD200 90%, transparent 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                100%
              </span>
              .
            </h1>

            {/* Lede — Sub-headline (déjà excellent) */}
            <p className="text-lg text-mid mb-8 max-w-lg leading-relaxed">
              Je transforme votre métier avec l'IA. Pas du rêve. Du concret.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <Link href="/contact" className="btn btn-accent btn-lg text-center hover:shadow-lg transition-all">
                Réserver audit gratuit 15min →
              </Link>
              <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg text-center border-2 hover:bg-yellow/5">
                Voir les services
              </Link>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border animate-slideUp" style={{ animationDelay: '0.4s' }}>
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-bold text-dark">
                    {item.num}
                    {item.sublabel && <span className="text-lg text-mid ml-1">{item.sublabel}</span>}
                  </div>
                  <div className="text-sm text-mid mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative hidden md:block animate-fadeInRight">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Blob background — YELLOW ACCENT */}
              <div
                className="absolute inset-0 bg-yellow opacity-80 rounded-full blur-3xl"
                style={{
                  width: '120%',
                  height: '120%',
                  top: '-10%',
                  right: '-20%',
                  zIndex: 0,
                }}
              />
              {/* Card with shadow */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-100 flex items-center justify-center text-gray-400 text-center px-4">
                  <div>
                    <div className="text-sm font-medium mb-2">📸 Photo William Martin</div>
                    <div className="text-xs text-gray-500">(4:5 aspect ratio)</div>
                  </div>
                </div>
              </div>

              {/* Badge 1: RS6776 */}
              <div className="absolute -top-6 right-4 bg-white rounded-lg p-4 shadow-lg z-20 border-2 border-yellow animate-bounce" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow rounded-md flex items-center justify-center text-dark font-bold text-lg">
                    🏆
                  </div>
                  <div>
                    <div className="font-bold text-sm text-dark">RS6776</div>
                    <div className="text-xs text-mid">Jury certifié IA</div>
                  </div>
                </div>
              </div>

              {/* Badge 2: Disponible */}
              <div className="absolute -bottom-6 -left-4 bg-white rounded-lg p-4 shadow-lg z-20 border-2 border-green-500">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-dark">Disponible</div>
                    <div className="text-xs text-mid">Audit gratuit 30 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTypo() {
  return (
    <section className="py-20 md:py-28 text-center">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
          <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">✨ NOUVEAU</span>
          <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 leading-tight">
          Du concret.<br />
          <span className="font-light text-mid">Pas du rêve.</span>
        </h1>

        <p className="text-lg text-mid mb-10 leading-relaxed">
          Consultant IA générative & directeur marketing externalisé. Pour entrepreneurs et PME qui veulent des résultats — pas des slides.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-accent btn-lg">
            Demander un devis →
          </Link>
          <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg border-2">
            Voir les services
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-96 md:min-h-screen">
      <div className="bg-white flex flex-col justify-center px-6 md:px-16 py-16">
        <div className="eyebrow mb-6">
          <span className="inline-block">William Martin</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
          Consultant IA<br />
          & Directeur<br />
          Marketing.
        </h1>
        <p className="text-lg text-mid mb-8 max-w-md leading-relaxed">
          500+ entrepreneurs formés à ChatGPT, Claude, Make.com. Stratégie + exécution. Du concret, pas du rêve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn btn-accent btn-lg">
            Demander un devis →
          </Link>
          <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg border-2">
            Voir les services
          </Link>
        </div>
      </div>

      <div className="bg-yellow flex items-center justify-center text-white text-2xl font-bold">
        <div className="text-center">
          <div className="w-64 h-64 bg-white/20 rounded-lg flex items-center justify-center">
            Photo William (full bleed)
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCentered() {
  return (
    <section className="py-20 md:py-28 bg-bg-light text-center">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
          <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">✨ NOUVEAU</span>
          <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Vous utilisez 10% de l'IA.<br />
          Je vous montre les{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(180deg, transparent 60%, #FFD200 60%, #FFD200 90%, transparent 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            100%
          </span>
          .
        </h1>

        <p className="text-lg text-mid mb-12 leading-relaxed">
          Je transforme votre métier avec l'IA. Pas du rêve. Du concret.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="btn btn-accent btn-lg">
            Réserver audit gratuit 15min →
          </Link>
          <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg border-2">
            Voir les services
          </Link>
        </div>

        <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white shadow-lg bg-gray-200 flex items-center justify-center text-gray-400">
          Photo William (carrée)
        </div>
      </div>
    </section>
  );
}

export default function HeroSection({ variant = 'photo' }: HeroSectionProps) {
  const variants = {
    photo: HeroPhoto,
    typo: HeroTypo,
    split: HeroSplit,
    centered: HeroCentered,
  };

  const Hero = variants[variant];
  return <Hero />;
}
