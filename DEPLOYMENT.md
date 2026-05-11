# Guide de Déploiement — Le Consultant Digital

## 🚀 Déployer sur Vercel (recommandé)

Vercel = meilleure plateforme pour Next.js. Performance garantie, SEO optimisé, Core Web Vitals au vert.

### Étape 1 : Git Setup

```bash
cd site-leconsultant

# Init git
git init
git add .
git commit -m "Initial commit: Site leconsultantdigital.fr"

# Connecter à GitHub (créer repo d'abord)
git remote add origin https://github.com/YOUR_USERNAME/leconsultantdigital
git branch -M main
git push -u origin main
```

### Étape 2 : Vercel Deployment

1. Aller sur https://vercel.com
2. Créer compte (gratuit)
3. Importer repo GitHub
4. Configurer variables d'environnement (.env)
5. Cliquer "Deploy"

→ Site live en ~3 min

### Étape 3 : Domain Configuration

1. Aller dans Vercel → Settings → Domains
2. Ajouter domaine : `leconsultantdigital.fr`
3. Mettre à jour DNS chez votre registrar
4. Attendre propagation DNS (24-48h)

**DNS Records à ajouter** (chez votre registrar) :

```
Type    Name                Host                  TTL
CNAME   leconsultantdigital vercel.app            3600
```

(Vercel fourni les détails exacts)

### Étape 4 : SSL Certificate

Vercel = SSL automatique gratuit ✅

### Étape 5 : Monitoring

Vercel Analytics = gratuit, intégré.

Vérifier :
- Lighthouse score (85+)
- Core Web Vitals (vert)
- Response times

## 🔧 Variables d'Environnement (Production)

Créer dans Vercel Settings → Environment Variables :

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX         # Google Analytics
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
BREVO_API_KEY=your_api_key_here        # Email (si utilisé)
```

## 📈 Post-Déploiement

### GA4 Setup
```
1. Créer compte Google Analytics
2. Créer Property "Le Consultant Digital"
3. Obtenir Measurement ID (G-XXXXXXXXXX)
4. Ajouter dans NEXT_PUBLIC_GA_ID
5. Vérifier tracking en 24h
```

### Google Search Console
```
1. Aller sur https://search.google.com/search-console
2. Ajouter Property : leconsultantdigital.fr
3. Vérifier propriété (via DNS)
4. Soumettre sitemap.xml
5. Attendre indexation (1-2 semaines)
```

### Performance Check
```
1. Lighthouse : https://PageSpeed.web.dev
2. Vérifier :
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100
```

## 🔄 Updates & Maintenance

### Push Updates

```bash
cd site-leconsultant

# Faire vos modifications

git add .
git commit -m "Update: description courte"
git push origin main
```

Vercel redéploie automatiquement !

### Monitoring Logs

Vercel Dashboard → Deployments → voir logs

## 📱 Responsive Testing

- Desktop (1920px) ✅
- Tablet (768px) ✅
- Mobile (375px) ✅

Vérifier sur https://responsivedesignchecker.com

## 🔒 Sécurité

Vercel gère :
- HTTPS/SSL ✅
- DDoS protection ✅
- Firewalls ✅

À ajouter soi-même :
- [ ] Headers de sécurité (CSP, X-Frame-Options)
- [ ] Rate limiting
- [ ] CAPTCHA sur formulaire (si needed)

## 💰 Coûts Estimés

| Service | Coût | Notes |
|---------|------|-------|
| Vercel  | €0   | Gratuit pour usage perso |
| Domain  | €12-15/an | Registrar (OVH, Gandi...) |
| Email   | €0-20/mois | Brevo gratuit ou Pro |
| Analytics | €0 | GA4 gratuit, Vercel gratuit |
| Total | €12-35/mois | Très économique |

## ⚠️ Troubleshooting

### Site ne déploie pas
- [ ] Vérifier erreurs build dans Vercel logs
- [ ] Vérifier Node version compatible
- [ ] Vérifier dépendances package.json

### Performance lente
- [ ] Vérifier images optimisées
- [ ] Vérifier pas de blocker CSS/JS
- [ ] Vérifier Core Web Vitals dans Vercel Analytics

### Domain ne fonctionne pas
- [ ] DNS peut prendre 24-48h
- [ ] Vérifier DNS records corrects
- [ ] Flush DNS local : `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

## 📞 Support

- Docs Vercel : https://vercel.com/docs
- Docs Next.js : https://nextjs.org/docs
- Questions : consultez CLAUDE.md

---

Ready to deploy ? 🚀
