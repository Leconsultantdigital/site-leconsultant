'use client';

import Image from 'next/image';

export default function ToolsSection() {
  const tools = [
    { name: 'Claude', logo: '/tools/claude.svg', color: 'from-purple-100 to-purple-50' },
    { name: 'ChatGPT', logo: '/tools/chatgpt.svg', color: 'from-green-100 to-green-50' },
    { name: 'Gemini', logo: '/tools/gemini.svg', color: 'from-blue-100 to-blue-50' },
    { name: 'Make', logo: '/tools/make.svg', color: 'from-orange-100 to-orange-50' },
    { name: 'Notion', logo: '/tools/notion.svg', color: 'from-gray-100 to-gray-50' },
    { name: 'Perplexity', logo: '/tools/perplexity.svg', color: 'from-indigo-100 to-indigo-50' },
    { name: 'Canva', logo: '/tools/canva.svg', color: 'from-pink-100 to-pink-50' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-yellow mb-4 uppercase tracking-widest">⚡ Mes outils préférés</p>
          <h2 className="text-4xl md:text-4xl font-bold text-dark mb-4">
            Les meilleurs outils IA
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Je les utilise tous les jours pour transformer vos workflows et automatiser vos processus.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`
                group relative
                bg-gradient-to-br ${tool.color}
                rounded-2xl p-6 md:p-8
                flex flex-col items-center justify-center
                min-h-40 
                border border-white/50
                shadow-sm
                transition-all duration-300 ease-out
                hover:shadow-lg hover:-translate-y-2
                hover:border-yellow/30
                cursor-pointer
              `}
            >
              {/* Accent bar on hover */}
              <div 
                className="absolute left-0 top-0 h-1 bg-yellow rounded-t-2xl transition-all duration-300 w-0 group-hover:w-full"
              />

              {/* Logo */}
              <div className="w-16 h-16 mb-4 relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-dark text-center text-sm md:text-base">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-mid mb-6">
            Besoin d'aide pour choisir l'outil qui vous convient?
          </p>
          <a href="/contact" className="btn btn-accent inline-block">
            Réserver audit gratuit →
          </a>
        </div>
      </div>
    </section>
  );
}
