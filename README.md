# Le Consultant Digital — Site Web

Site Next.js optimisé pour SEO/GEO, performance et conversion.

## 📋 Structure du Projet

```
site-leconsultant/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Styles globaux
│   ├── about/
│   │   └── page.tsx            # À propos
│   ├── blog/
│   │   └── page.tsx            # Articles
│   ├── contact/
│   │   └── page.tsx            # Formulaire contact
│   ├── faq/
│   │   └── page.tsx            # FAQ
│   └── services/
│       ├── consulting-ia/
│       ├── directeur-marketing/
│       └── jury-certification/
├── components/
│   ├── Header.tsx              # Navigation
│   └── Footer.tsx              # Pied de page
├── public/                     # Images, favicon
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
cd site-leconsultant
npm install
```

### Développement

```bash
npm run dev
```

Site accessible : http://localhost:3000

### Build Production

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local` :

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-url
```

### Brevo (Email)

Pour activer l'email du formulaire contact :

1. Créer compte Brevo (ex-Sendinblue)
2. Ajouter clé API dans `.env.local`
3. Déployer API route `/api/contact`

## 📱 Optimisations SEO/Performance

✅ **Fait** :
- Core Web Vitals optimisés (Next.js natif)
- Images optimisées
- Fonts preloadées
- Métadonnées SEO complètes
- Schema.org structuré
- Mobile-first responsive
- CSS Tailwind (minimal)

⏳ **À Faire** :
- [ ] GA4 configuration
- [ ] Google Search Console verification
- [ ] Sitemap.xml auto-generation
- [ ] Robots.txt
- [ ] Intégration email (Brevo/SendGrid)
- [ ] Calendly embed
- [ ] Optimisation images (screenshots, logos)

## 🎯 Pages Principales

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero + 3 services + testimonials |
| Consulting IA | `/services/consulting-ia` | Formations + méthode RACEF |
| Dir. Marketing | `/services/directeur-marketing` | CMO externalisé |
| Jury Certification | `/services/jury-certification` | Certification IA RS6776 |
| À Propos | `/about` | Bio + expertise |
| Contact | `/contact` | Formulaire + Calendly |
| FAQ | `/faq` | 50+ questions |
| Blog | `/blog` | Articles (6 créés) |

## 🎨 Design System

**Couleurs** :
- Primary: `#1F2937` (dark gray)
- Secondary: `#3B82F6` (blue)
- Accent: `#10B981` (green)

**Fonts** :
- Sans: Inter (Google Fonts)
- Tailles: clamp() pour responsive

## 📊 Next Steps

### Semaine 1 : Contenu
- [ ] Ajouter contenu blog (8 articles complets)
- [ ] Optimiser images & logos partenaires
- [ ] FAQ complète (50 Q&R)

### Semaine 2 : Technique
- [ ] GA4 + GSC setup
- [ ] Email automation (Brevo)
- [ ] Sitemap + robots.txt
- [ ] Speedtest & optimisations

### Semaine 3 : Déploiement
- [ ] Vercel deployment
- [ ] Domain configuration
- [ ] SSL/HTTPS ✅
- [ ] Monitoring

### Semaine 4 : Lancement
- [ ] GBP optimization
- [ ] PR local
- [ ] Netlinking (partenaires)
- [ ] Tests conversion

## 📈 Métriques à Tracker

**GA4 Events** :
- Clicks sur CTA (Audit, Services)
- Form submissions
- Calendly bookings
- Scroll depth

**SEO (GSC)** :
- Top 20 positions
- CTR moyen
- Impressions

**Performance** :
- Lighthouse score
- Core Web Vitals
- Time to Interactive

## 🚀 Déploiement Vercel

1. Repo GitHub
2. Connexion Vercel
3. Configuration environnement
4. Auto-deploy sur push

```bash
# Setup Git
git init
git add .
git commit -m "Initial commit"
git push origin main
```

## 📧 Support

Questions ? Consultez CLAUDE.md pour la stratégie complète.

---

Made with ❤️ by Claude Code | Next.js + Tailwind
