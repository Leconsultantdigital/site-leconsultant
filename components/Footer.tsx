import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4 text-lg bg-gradient-to-r from-white to-cyan-200 -webkit-background-clip text -webkit-text-fill-color transparent bg-clip-text">
              Le Consultant Digital
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Consultant IA générative, formations et directeur marketing externalisé pour entrepreneurs et PME. Du concret, pas du rêve.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/consulting-ia" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ Formation IA</Link></li>
              <li><Link href="/services/directeur-marketing" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ Directeur Marketing</Link></li>
              <li><Link href="/about#jury" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ Jury Certification</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-white">Ressources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ Blog</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ FAQ</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-cyan-400 transition duration-300">→ À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <p className="text-sm text-slate-300 mb-2 flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>
                13 rue du Belvédère<br />
                26500 Bourg-Lès-Valence
              </span>
            </p>
            <p className="text-sm text-slate-300 mb-4 flex items-center gap-2">
              <span className="text-lg">📞</span>
              <a href="tel:+33624012180" className="hover:text-cyan-400 transition">
                06 24 01 21 80
              </a>
            </p>
            <div className="space-y-2">
              <Link href="/contact" className="btn-primary text-sm w-full text-center block">
                Me Contacter
              </Link>
              <a
                href="https://www.google.com/maps/place/William+Martin+-+Consultant+%2F+Formateur+IA+%26+Marketing+digital/@44.9555181,4.9023188,1113m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d582c43ca83d859:0x9adda185268a3d06!8m2!3d44.9555181!4d4.9048937!16s%2Fg%2F11rq5xjsb6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-cyan-400 transition block text-center"
              >
                ⭐ Voir les avis Google
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; 2026 Le Consultant Digital. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-cyan-400 transition duration-300">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-cyan-400 transition duration-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
