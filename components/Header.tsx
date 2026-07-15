'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À propos' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="hidden md:flex gap-2 items-center">
          {NAV_LINKS.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition ${
                  active ? 'text-dark font-semibold bg-dark/[0.04]' : 'text-mid hover:text-dark hover:bg-dark/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-accent btn-sm ml-2">
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
          <div className="container py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-mid font-medium hover:text-dark transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-accent block text-center mt-4">
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
