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
          <div>
            {/* Pill */}
            <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
              <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">🚀 NOUVEAU</span>
              <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              L'IA générative,<br />
              appliquée à{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(180deg, transparent 60%, #FFD200 60%, #FFD200 90%, transparent 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                votre métier
              </span>
              .
            </h1>

            {/* Lede */}
            <p className="text-lg text-mid mb-8 max-w-lg leading-relaxed">
              William Martin — consultant IA & directeur marketing externalisé. 500+ entrepreneurs formés, 47 avis 4.9/5. Du concret, pas du rêve.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn btn-accent btn-lg text-center">
                Demander un devis →
              </Link>
              <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg text-center border-2">
                Voir les services
              </Link>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i}>
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
          <div className="relative hidden md:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Blob background */}
              <div
                className="absolute inset-0 bg-yellow rounded-full"
                style={{
                  width: '100%',
                  height: '100%',
                  top: '-5%',
                  right: '-10%',
                  zIndex: 0,
                }}
              />
              {/* Card */}
              <div className="absolute inset-0 bg-bg-light rounded-3xl overflow-hidden shadow-lg z-10">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  Photo William (4:5)
                </div>
              </div>
              {/* Badges */}
              <div className="absolute -top-8 right-0 bg-white rounded-lg p-3 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow rounded-md flex items-center justify-center text-dark font-bold">🏆</div>
                  <div>
                    <div className="font-bold text-sm text-dark">RS6776</div>
                    <div className="text-xs text-mid">Jury certifié IA</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg p-3 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
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
        {/* Pill */}
        <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
          <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">🚀 NOUVEAU</span>
          <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 leading-tight">
          Du concret.<br />
          <span className="font-light text-mid">Pas du rêve.</span>
        </h1>

        {/* Lede */}
        <p className="text-lg text-mid mb-10 leading-relaxed">
          Consultant IA générative & directeur marketing externalisé. Pour entrepreneurs et PME qui veulent des résultats — pas des slides.
        </p>

        {/* CTA */}
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
      {/* Left: Text */}
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

      {/* Right: Image */}
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
        {/* Pill */}
        <div className="inline-flex items-center gap-3 mb-8 bg-white border border-border rounded-full px-4 py-2.5">
          <span className="bg-yellow text-dark px-3 py-1 rounded-full text-xs font-bold">🚀 NOUVEAU</span>
          <span className="text-sm font-medium text-dark">Programme IA — 30 jours pour intégrer</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          L'IA générative,<br />
          appliquée à{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(180deg, transparent 60%, #FFD200 60%, #FFD200 90%, transparent 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            votre métier
          </span>
          .
        </h1>

        {/* Lede */}
        <p className="text-lg text-mid mb-12 leading-relaxed">
          William Martin — consultant IA & directeur marketing externalisé. 500+ entrepreneurs formés, 4.9/5 sur Google.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="btn btn-accent btn-lg">
            Demander un devis →
          </Link>
          <Link href="/services/consulting-ia" className="btn btn-ghost btn-lg border-2">
            Voir les services
          </Link>
        </div>

        {/* Circular photo */}
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
