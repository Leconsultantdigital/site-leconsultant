'use client';

export default function PartnersSection() {
  const partners = [
    { name: 'Clarsi', logo: '🔵', color: 'from-blue-50 to-blue-100' },
    { name: 'CréActifs', logo: '✨', color: 'from-cyan-50 to-cyan-100' },
    { name: 'Eneko', logo: '💼', color: 'from-indigo-50 to-indigo-100' },
    { name: 'Gedaf Elsete', logo: '🎯', color: 'from-yellow-50 to-yellow-100' },
    { name: 'Mantion', logo: '🚀', color: 'from-orange-50 to-orange-100' },
  ];

  return (
    <section className="py-12 md:py-16 bg-bg-light border-b border-border">
      <div className="container">
        <p className="text-sm font-bold text-mid text-center mb-10 uppercase tracking-widest">
          🤝 Partenaires de confiance
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <div
              key={i}
              className={`
                group
                bg-gradient-to-br ${partner.color}
                rounded-xl px-6 py-3 md:px-8 md:py-4
                border border-white/80
                transition-all duration-300
                hover:shadow-md hover:scale-105
                cursor-pointer
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-semibold text-dark text-sm md:text-base">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
