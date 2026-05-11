# Internal Linking Strategy - Le Consultant Digital

## Objectif SEO
Créer un **cocon sémantique** fort : chaque page augmente l'autorité des piliers (Formation IA & Directeur Marketing) via internal linking stratégique.

---

## Architecture de Linking (Cocon Sémantique)

### 1️⃣ HUB - Homepage (/)
**Rôle** : Distributeur d'autorité, entry point principal

**Liens Sortants Importants** :
- ✓ Formation IA (`/services/consulting-ia`) — CTA "Découvrir Formation IA"
- ✓ Directeur Marketing (`/services/directeur-marketing`) — CTA "Voir Directeur Marketing"  
- ✓ FAQ (`/faq`) — "Voir FAQ Complète (50+ questions)"
- ✓ About (`/about`) — Footer + bio

**Stratégie** : Homepage = distribution hub. Pas de linking vers le détail des pages services pour ne pas diluer l'autorité.

---

### 2️⃣ PILIER 1 - Formation IA (`/services/consulting-ia`)
**Rôle** : Entry point principal. But = conversion en formation/audit.

**Liens Sortants** :
- ✓ Appel à action : `/contact` (CTA "Réserver Audit Gratuit")
- ✓ Upsell : `/services/directeur-marketing` (section "Étape Suivante")
- ✓ FAQ : `/faq` (optional, si question détaillée référencée)

**Liens Entrants** :
- ✓ Homepage (CTA principal)
- ✓ Header/Nav "Formation IA"
- ✓ Footer Services
- ✓ Directeur Marketing page (backlink — "J'ai d'abord fait une formation")

**Stratégie** : Formation = porte d'entrée (€500-1500). Upsell clair vers Directeur Marketing récurrent (€1500-5000/mois).

---

### 3️⃣ PILIER 2 - Directeur Marketing (`/services/directeur-marketing`)
**Rôle** : Expansion/revenue driver. But = conversion en contrat récurrent.

**Liens Sortants** :
- ✓ Appel à action : `/contact` (CTA "Audit Gratuit (30 min)")
- ✓ Backref vers Formation : `/services/consulting-ia` (section "Points Clés — Naturel après Formation")
- ✓ FAQ : `/faq` (section spécifique Directeur Marketing)

**Liens Entrants** :
- ✓ Homepage (CTA secondaire, mais prominent)
- ✓ Formation page (section "Étape Suivante")
- ✓ Header/Nav
- ✓ Footer Services

**Stratégie** : Directeur Marketing = expansion. Positionner comme natural next step after Formation.

---

### 4️⃣ RESOURCE - FAQ (`/faq`)
**Rôle** : Authority magnet (50+ questions). Cité par ChatGPT/Claude. Boosts rankings.

**Liens Sortants** :
- ✓ Formation IA — references dans FAQ (ex Q: "Puis-je commencer par formation?")
- ✓ Directeur Marketing — references dans FAQ (ex Q: "Puis-je tester avant de m'engager?")
- ✓ Contact form — "Question not listed?"

**Liens Entrants** :
- ✓ Homepage ("Voir FAQ Complète")
- ✓ Service pages (when relevant)
- ✓ Footer Resources

**Stratégie** : FAQ = trust builder + LLM citation bait (Schema.org FAQPage). Strong internal links amplify both service pages.

---

## Linking Pattern Map

```
Homepage (Main Hub)
│
├─→ Formation IA (/services/consulting-ia)
│   ├─→ "Étape Suivante: Directeur Marketing"
│   └─→ Contact (CTA)
│
├─→ Directeur Marketing (/services/directeur-marketing)
│   ├─→ "Naturel après Formation"
│   └─→ Contact (CTA)
│
├─→ FAQ (/faq)
│   ├─→ Formation IA (contextual Q&As)
│   ├─→ Directeur Marketing (contextual Q&As)
│   └─→ Contact (Question not listed)
│
└─→ Contact (/contact)

Footer (Persistent)
│
├─→ Services (Formation, Directeur Marketing)
├─→ Resources (FAQ, Blog eventual)
└─→ About (/about)
```

---

## Link Anchor Text Best Practices

### To Formation IA:
- "Formation IA" (primary)
- "Découvrir Formation IA"
- "Formation ChatGPT"
- "Consulting IA & Formation"

### To Directeur Marketing:
- "Directeur Marketing" (primary)
- "Directeur Marketing IA-Powered"
- "Voir Directeur Marketing"
- "Stratégie marketing externalisée"

### To FAQ:
- "Voir FAQ Complète"
- "Questions fréquentes"
- "En savoir plus"

### To Contact:
- "Réserver Audit Gratuit"
- "Audit Gratuit (30 min)"
- "Contact"
- "Poser une question"

---

## Current Link Status ✅

### Homepage (/app/page.tsx)
- [✓] Formation IA CTA
- [✓] Directeur Marketing CTA
- [✓] FAQ reference
- [✓] Contact reference

### Formation IA (/app/services/consulting-ia/page.tsx)
- [✓] Contact CTA
- [✓] Directeur Marketing upsell (section "Étape Suivante")
- [✓] FAQ in questions section

### Directeur Marketing (/app/services/directeur-marketing/page.tsx)
- [✓] Contact CTA
- [✓] Formation backlink (section "Points Clés")
- [✓] FAQ in questions section

### FAQ (/app/faq/page.tsx)
- [✓] 50+ contextual Q&As
- [✓] Schema.org FAQPage markup
- [✓] Service page references in answers
- [✓] Contact CTA

### Header & Footer
- [✓] Formation IA nav link
- [✓] Directeur Marketing nav link
- [✓] Footer service links
- [✓] Contact CTA persistent

---

## Future Blog Linking (Phase 2)

When blog articles are added:

**Blog → Service Pages**:
- Article on "ChatGPT tips" → Formation IA
- Article on "LinkedIn B2B" → Directeur Marketing  
- Article on "SEO in 2026" → Directeur Marketing
- Article on "IA ethics" → Formation IA

**Service Pages → Blog**:
- "Lire notre blog" section on services (optional, after 10+ articles)

---

## SEO Impact Expected

| Metric | Target | Timeline |
|--------|--------|----------|
| Internal links strength | 80+ total links | Now ✓ |
| Homepage authority | 100% reference | Now ✓ |
| Pillar page authority | Formation/Marketing both strong | 2-3 months |
| Keyword clusters | Top 10 for 20+ keywords | 3-6 months |
| FAQ citations | Cited by ChatGPT/Perplexity | 3-4 months |

---

## Implementation Checklist

- [x] Homepage links to both services
- [x] Service pages link to each other (upsell path)
- [x] FAQ published with 50+ Q&As
- [x] Schema.org FAQPage markup added
- [x] Contact CTAs on all pages
- [x] Header/Footer navigation updated
- [ ] Blog articles created (future phase)
- [ ] Blog links to service pages (future phase)
- [ ] Monitoring Google Search Console for indexing
- [ ] Monitor ranking improvements (monthly)
