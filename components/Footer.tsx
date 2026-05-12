import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow rounded-md flex items-center justify-center text-dark font-bold text-sm">
                L
              </div>
              <span className="font-bold text-dark">Le Consultant Digital</span>
            </div>
            <p className="text-mid text-sm leading-relaxed">
              Consultant IA générative, formations et directeur marketing externalisé pour entrepreneurs et PME. Du concret, pas du rêve.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/consulting-ia" className="text-mid hover:text-yellow transition duration-300">Formation IA</Link></li>
              <li><Link href="/services/directeur-marketing" className="text-mid hover:text-yellow transition duration-300">Directeur Marketing</Link></li>
              <li><Link href="/about" className="text-mid hover:text-yellow transition duration-300">Certification IA</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Ressources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/faq" className="text-mid hover:text-yellow transition duration-300">FAQ</Link></li>
              <li><Link href="/about" className="text-mid hover:text-yellow transition duration-300">À Propos</Link></li>
              <li><Link href="/contact" className="text-mid hover:text-yellow transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-dark uppercase tracking-wider text-xs">Contact</h4>
            <p className="text-sm text-mid mb-3">
              13 rue du Belvédère<br />
              26500 Bourg-Lès-Valence
            </p>
            <p className="text-sm mb-4">
              <a href="tel:+33624012180" className="text-mid hover:text-yellow transition">
                06 24 01 21 80
              </a>
            </p>
            <div className="space-y-2">
              <Link href="/contact" className="btn btn-accent text-sm w-full text-center block">
                Me Contacter
              </Link>
              <a
                href="https://www.google.com/maps/place/William+Martin+-+Consultant+%2F+Formateur+IA+%26+Marketing+digital/@44.9555181,4.9023188,1113m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d582c43ca83d859:0x9adda185268a3d06!8m2!3d44.9555181!4d4.9048937!16s%2Fg%2F11rq5xjsb6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-mid hover:text-yellow transition block text-center py-2"
              >
                ⭐ Voir les avis Google
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>&copy; 2026 Le Consultant Digital. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-dark transition duration-300">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-dark transition duration-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
