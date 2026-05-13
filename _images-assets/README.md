# 🖼️ Images Assets — Dossier Central

**Ce dossier contient TOUTES les photos brutes du site** (avant optimisation).

Claude Code les téléchargera d'ici et les optimisera dans `/public` automatiquement.

---

## 📁 Structure

```
_images-assets/
├─ william/              ← Photos de William Martin
│  ├─ portrait.jpg       (4:5 — 400×500px min)
│  ├─ square.jpg         (1:1 — 400×400px min)
│  └─ action.jpg         (optional — action shot)
│
├─ services/             ← Photos pour les pages services
│  ├─ consulting-ia/
│  │  ├─ hero.jpg
│  │  └─ case-study-1.jpg
│  ├─ directeur-marketing/
│  │  ├─ hero.jpg
│  │  └─ case-study-1.jpg
│  └─ jury-certification/
│     ├─ hero.jpg
│     └─ process.jpg
│
├─ testimonials/         ← Photos des clients/témoignages
│  ├─ client-1.jpg
│  ├─ client-2.jpg
│  └─ client-3.jpg
│
└─ misc/                 ← Autres assets
   ├─ logo.png
   └─ favicon.ico
```

---

## 📋 Checklist: Qui met quoi ici?

**TOI:**
- [ ] Mets les photos brutes dans les dossiers
- [ ] Nomme les fichiers clairement (ex: `portrait.jpg`, pas `IMG_1234.jpg`)
- [ ] Format: JPG ou PNG (je les optimiserai)
- [ ] Dimensions: minimum width/height noted above

**Claude:**
- [ ] Télécharge d'ici
- [ ] Optimise via Next.js Image component
- [ ] Déplace vers `/public` (site-leconsultant/public/)
- [ ] Intègre dans les pages

---

## 📝 Notes

- **Résolution**: Plus c'est HD, mieux c'est (je compresserai)
- **Format**: JPG = photos, PNG = logos/transparents
- **Nommage**: En anglais, sans accents (ex: `william-portrait.jpg`)
- **Limite**: Pas de limite de taille pour cette version brute

---

## ✅ Statut

- [ ] william/portrait.jpg — À remplir
- [ ] william/square.jpg — À remplir
- [ ] services/* — À remplir
- [ ] testimonials/* — À remplir
