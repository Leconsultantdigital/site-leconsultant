'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white/92 backdrop-blur-sm sticky top-0 z-50 border-b border-border/60">
      <nav className="container flex justify-between items-center py-4 h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition">
          <Image
            src="/logo.jpg"
            alt="Le Consultant Digital"
            width={50}
            height={50}
            className="h-[50px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-mid font-medium hover:text-dark transition relative flex items-center gap-1">
              Services
              <span className="text-xs">▼</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/services/formation-ia" className="block px-4 py-3 text-mid font-medium hover:bg-yellow/10 hover:text-dark transition border-b border-border/50">
                🎓 Formation IA
                <p className="text-xs text-mid mt-1">3 jours, 100% pratique</p>
              </Link>
              <Link href="/services/consulting-ia" className="block px-4 py-3 text-mid font-medium hover:bg-yellow/10 hover:text-dark transition border-b border-border/50">
                🚀 Consulting IA
                <p className="text-xs text-mid mt-1">Audit gratuit, stratégie personnalisée</p>
              </Link>
              <Link href="/services/consultant-marketing" className="block px-4 py-3 text-mid font-medium hover:bg-yellow/10 hover:text-dark transition">
                📈 Consultant Marketing
                <p className="text-xs text-mid mt-1">Directeur marketing externalisé</p>
              </Link>
              <div className="border-t border-border/50 px-4 py-2 bg-gray-50">
                <Link href="/services/consultant-marketing/visibilite-locale" className="text-xs text-mid hover:text-dark transition font-medium">
                  └─ Visibilité Locale
                </Link>
              </div>
            </div>
          </div>

          <Link href="/faq" className="text-mid font-medium hover:text-dark transition relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="btn btn-accent text-sm">
            Demander un devis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-dark hover:text-yellow transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 space-y-3">
            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left text-mid font-medium hover:text-dark transition py-2 flex justify-between items-center"
              >
                Services
                <span className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-2 mt-2 border-l-2 border-yellow/50 pl-3">
                  <Link href="/services/formation-ia" className="block text-mid hover:text-dark transition py-2">
                    🎓 Formation IA
                  </Link>
                  <Link href="/services/consulting-ia" className="block text-mid hover:text-dark transition py-2">
                    🚀 Consulting IA
                  </Link>
                  <Link href="/services/consultant-marketing" className="block text-mid hover:text-dark transition py-2">
                    📈 Consultant Marketing
                  </Link>
                  <Link href="/services/consultant-marketing/visibilite-locale" className="block text-sm text-mid hover:text-dark transition py-2 ml-4">
                    └─ Visibilité Locale
                  </Link>
                </div>
              )}
            </div>

            <Link href="/faq" className="block text-mid font-medium hover:text-dark transition py-2">
              FAQ
            </Link>
            <Link href="/contact" className="btn btn-accent block text-center mt-4">
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
