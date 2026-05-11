'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100/50 shadow-sm">
      <nav className="container flex justify-between items-center py-5">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 -webkit-background-clip text -webkit-text-fill-color transparent bg-clip-text hover:opacity-80 transition">
          ▲ Le Consultant Digital
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/services/consulting-ia" className="text-slate-700 font-medium hover:text-blue-600 transition relative group">
            Formation IA
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services/directeur-marketing" className="text-slate-700 font-medium hover:text-blue-600 transition relative group">
            Directeur Marketing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/blog" className="text-slate-700 font-medium hover:text-blue-600 transition relative group">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="btn-primary text-sm">
            Audit Gratuit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-700 hover:text-blue-600 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-6 space-y-4">
            <Link href="/services/consulting-ia" className="block text-slate-700 font-medium hover:text-blue-600 transition py-2">
              Formation IA
            </Link>
            <Link href="/services/directeur-marketing" className="block text-slate-700 font-medium hover:text-blue-600 transition py-2">
              Directeur Marketing
            </Link>
            <Link href="/blog" className="block text-slate-700 font-medium hover:text-blue-600 transition py-2">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary block text-center mt-4">
              Audit Gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
