import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand + pitch */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition">
              <Image
                src="/logo.jpg"
                alt="Le Consultant Digital"
                width={50}
                height={50}
                className="h-[50px] w-auto"
              />
            </Link>
            <p className="text-mid text-sm leading-relaxed max-w-xs">
              Consultant IA générative &amp; directeur marketing externalisé.
              Du concret, pas du rêve — depuis Valence, Drôme.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="text-mid hover:text-dark transition duration-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Société */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Société</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-mid hover:text-dark transition duration-300">À propos</Link></li>
              <li><Link href="/faq" className="text-mid hover:text-dark transition duration-300">FAQ</Link></li>
              <li><Link href="/contact" className="text-mid hover:text-dark transition duration-300">Contact</Link></li>
              <li><Link href="/mentions-legales" className="text-mid hover:text-dark transition duration-300">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:contact@leconsultantdigital.fr" className="text-mid hover:text-dark transition">
                  contact@leconsultantdigital.fr
                </a>
              </li>
              <li>
                <a href="tel:+33624012180" className="text-mid hover:text-dark transition">
                  06 24 01 21 80
                </a>
              </li>
              <li className="text-mid">
                13 rue du Belvédère<br />26500 Bourg-Lès-Valence
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/William+Martin+-+Consultant+%2F+Formateur+IA+%26+Marketing+digital/@44.9555181,4.9023188,1113m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d582c43ca83d859:0x9adda185268a3d06!8m2!3d44.9555181!4d4.9048937!16s%2Fg%2F11rq5xjsb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mid hover:text-dark transition"
                >
                  ⭐ Voir les avis Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted">
          <span>© 2026 Le Consultant Digital — William Martin. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-dark transition duration-300">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-dark transition duration-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
