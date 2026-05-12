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
    <div className="w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-bold text-yellow text-center mb-12 uppercase tracking-widest">
          🤝 Ils nous font confiance
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 md:gap-20"
            style={{
              animation: 'scroll-horizontal 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[180px] md:w-[240px] h-24 md:h-32 flex items-center justify-center bg-gradient-to-br from-yellow/5 to-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
