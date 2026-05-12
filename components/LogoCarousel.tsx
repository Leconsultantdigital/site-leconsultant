'use client';

import Image from 'next/image';

interface Partner {
  name: string;
  logo: string; // URL du logo
}

interface LogoCarouselProps {
  partners: Partner[];
}

export default function LogoCarousel({ partners }: LogoCarouselProps) {
  // Dupliquer les logos pour créer une boucle continue
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="container">
        <p className="text-sm font-bold text-mid text-center mb-10 uppercase tracking-widest">
          🤝 Partenaires de confiance
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 md:gap-12"
            style={{
              animation: 'scroll-horizontal 30s linear infinite',
              width: 'fit-content',
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[140px] md:w-[160px] h-16 md:h-20 flex items-center justify-center bg-bg-light rounded-lg border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-full p-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 16px));
          }
        }
      `}</style>
    </div>
  );
}
