'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/services/consulting-ia" className="text-mid font-medium hover:text-dark transition relative group">
            Formation IA
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services/directeur-marketing" className="text-mid font-medium hover:text-dark transition relative group">
            Directeur Marketing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
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
            <Link href="/services/consulting-ia" className="block text-mid font-medium hover:text-dark transition py-2">
              Formation IA
            </Link>
            <Link href="/services/directeur-marketing" className="block text-mid font-medium hover:text-dark transition py-2">
              Directeur Marketing
            </Link>
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
