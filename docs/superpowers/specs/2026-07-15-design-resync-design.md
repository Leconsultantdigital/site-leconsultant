# Resynchronisation du design (claude.ai/design) sur site-leconsultant

**Date** : 2026-07-15
**Statut** : Approuvé

## Contexte

Le projet claude.ai/design "Leconsultantdigital.fr" (fichier `Le Consultant Digital - Site.html`,
projectId `019e0324-d6c9-739b-895e-bc870b68571a`) a servi de base initiale à `site-leconsultant`,
le site Next.js 14 + Tailwind actuellement déployé en production sur Vercel
(https://site-leconsultant.vercel.app, repo `Leconsultantdigital/site-leconsultant`).

Depuis cet import initial, le site a évolué indépendamment (10 commits : redesign homepage
"inspiré Yes We Prompt", ajout de 4 pages services détaillées, phase sécurité/email/analytics/SEO,
corrections de menu). Le design source, lui, propose une direction visuelle différente
(hero avec variantes, système de tokens CSS propre, structure de sections différente).

Objectif : réimplémenter la direction visuelle du design source sur la homepage, le header/footer,
et les pages About/Contact/FAQ — **tout en conservant** le contenu réel et fonctionnel déjà en
production (logos partenaires réels, formulaire de contact branché sur l'API, pages Services
existantes, données réelles de `lib/data.ts`).

## Décisions validées

1. **Périmètre** : réécriture de la homepage, Header, Footer, About, Contact, FAQ.
   `app/services/**` (5 pages), `app/layout.tsx` (SEO/schema/GA4), `app/api/contact`,
   `lib/analytics.ts` restent **intouchés**.
2. **Contenu réel conservé** : logos partenaires réels (Clarsi, CréActifs, Eneko, Gedaf Elsete,
   Mantion, Mill Forma, Simeuble.fr), menu Services vers les vraies sous-pages, formulaire de
   contact fonctionnel (`/api/contact`), données réelles de `lib/data.ts` (SERVICES avec les
   vrais ids/pages, STATS, TESTIMONIALS, BIO).
3. **Réglages visuels** (tweaks sauvegardés dans l'outil design, confirmés par William) :
   - Variante de hero : **Photo** (accroche à gauche, portrait à droite, badges RS6776 / Audit gratuit)
   - Thème dominant : **Blanc** (jaune en accent uniquement)
   - Layout des services : **Grille** (3 colonnes)
4. **Approche CSS** : tout traduire en classes utilitaires **Tailwind**, cohérent avec le reste
   du codebase. Pas d'import du CSS custom du design (`styles/tokens.css` / `site.css`) tel quel.
   Ajouts mineurs à `tailwind.config.js`/`globals.css` : une ombre `shadow-yellow` (glow jaune),
   et des classes composants (`@layer components`) pour `.btn-primary/.btn-ghost/.btn-accent`,
   `.eyebrow`, `.stat-card` si utile pour éviter la répétition.
5. **Stratégie composants** : réutiliser et réécrire en place les fichiers déjà nommés de façon
   pérenne (`HeroSection.tsx`, `StatsSection.tsx`, `ServicesGrid.tsx`, `TestimonialsSection.tsx`,
   `BioBlock.tsx`, `FAQSection.tsx`, `FinalCTA.tsx`, `Header.tsx`, `Footer.tsx`), plutôt que créer
   un nouveau jeu de composants à côté. Supprimer les fichiers devenus inutilisés après la bascule
   de `app/page.tsx` (candidats : `HeroMinimal.tsx`, `StatsNew.tsx`, `ReviewCarouselNew.tsx`,
   `ServicesComparison.tsx`, `FeaturesGrid.tsx`, `LogoCarousel.tsx` si remplacé, `StatCounter.tsx`,
   `PartnersSection.tsx` si redondant) — après vérification qu'ils ne sont plus importés nulle part.

## Périmètre détaillé

### Header (`components/Header.tsx`)
Garde le mega-menu Services actuel (liens réels vers `/services/formation-ia`,
`/services/consulting-ia`, `/services/consultant-marketing`, `/services/directeur-marketing`,
`/services/jury-certification`), restylé pour matcher le nouveau look : wordmark "Le Consultant /
Digital", nav avec underline au hover, bouton CTA "Demander un devis" en accent jaune.

### Footer (`components/Footer.tsx`)
4 colonnes : marque + pitch, Services (liens réels), Société (À propos/FAQ/Contact/Mentions
légales), Contact (email/téléphone/adresse/LinkedIn).

### Homepage (`app/page.tsx`)
Nouvel enchaînement de sections :
1. Hero (variante Photo)
2. Stats (3 chiffres clés, données réelles de `lib/data.ts`)
3. Services (grille 3+ colonnes, données réelles — pas les 3 services génériques du design brut)
4. LogoBar (vrais logos partenaires, bandeau restylé)
5. Testimonials (3 témoignages réels)
6. Bio (William Martin, photo + texte)
7. FAQ preview (4 premières questions + lien vers FAQ complète)
8. FinalCTA (bandeau sombre, 2 CTA)

### About (`app/about/page.tsx`)
Hero de page + bio détaillée + grille compétences/certifications + témoignages + CTA finale.
Contenu réel conservé/complété si le design source apporte des éléments manquants.

### Contact (`app/contact/page.tsx`)
Restylage visuel (form-card + aside "En direct") en conservant le câblage existant vers
`/api/contact` (ne pas réintroduire le formulaire non-fonctionnel du design brut).

### FAQ (`app/faq/page.tsx`)
Restylage visuel, liste complète des questions réelles.

## Hors périmètre

- `app/services/**` (5 pages détaillées)
- `app/layout.tsx` (GA4, schema.org LocalBusiness, metadata SEO)
- `app/api/contact/route.ts`, `lib/analytics.ts`
- Contenu des pages services elles-mêmes

## Vérification avant déploiement

- `npm run build` doit passer sans erreur.
- Vérification visuelle en local (dev server) : homepage, about, contact (soumission de test),
  faq, header/footer sur desktop + mobile.
- Aucune régression sur les liens vers les pages services existantes.
- Une fois vérifié : commit + push sur `main` (déclenche le déploiement Vercel automatique),
  à la demande explicite de William.
