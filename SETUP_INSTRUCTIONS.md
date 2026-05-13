# 🚀 Setup Instructions — Phase 1 Complete

## Status: ✅ Production Ready (Phase 1A-1C Complete)

All infrastructure is in place. To launch the site, follow these steps:

---

## 📋 Pre-Deployment Checklist

### 1. **Configure Resend Email Service** (Required for contact form)

```bash
# Option A: Local Development
1. Go to https://resend.com
2. Sign up / Log in
3. Create API key in Settings > API Keys
4. Create `.env.local` file in project root:

RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Option B: Production (Vercel)
- Add RESEND_API_KEY to Vercel Environment Variables
```

**Test locally:**
```bash
npm run dev
# Visit http://localhost:3000/contact
# Fill form → Should send email to contact@leconsultantdigital.fr
```

---

### 2. **Google Analytics Setup**

✅ **Already Configured:**
- GA4 ID: `G-KYW5SBZ177`
- Events tracked: CTA clicks, form submissions, page views

**To verify in production:**
1. Go to Google Analytics (GA4)
2. Check Real-Time → Events
3. Should see `page_view`, `click_cta`, `submit_contact_form` events

---

### 3. **Image Placeholders**

✅ **Temporary Placeholders Created:**
- `/public/william-placeholder.svg` — Bio section image
- `/public/og-image.svg` — Social media sharing image

**To replace with real photos:**
```bash
# When you have William's photos:
1. Convert SVG placeholders to JPG (1200x630 for OG, 400x500 for bio)
2. Replace files in /public
3. Update BioBlock.tsx if needed
```

---

### 4. **Security Headers**

✅ **Configured in `next.config.js`:**
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()

**For production (HTTPS):**
Uncomment HSTS header in `next.config.js`:
```javascript
{
  key: 'Strict-Transport-Security',
  value: 'max-age=31536000; includeSubDomains; preload'
}
```

---

## 🧪 Testing Checklist

- [ ] **Desktop Testing** (1920px, 1280px)
  - [ ] Hero section displays correctly
  - [ ] All 9 sections render
  - [ ] CTA buttons clickable
  - [ ] Images load

- [ ] **Mobile Testing** (375px — iPhone 14)
  - [ ] Text readable
  - [ ] Buttons full-width
  - [ ] No overflow
  - [ ] Forms accessible

- [ ] **Contact Form Testing**
  - [ ] Fill form with valid data
  - [ ] Submit → Check email received
  - [ ] Try invalid data → Error messages display
  - [ ] GA4 tracking fires

- [ ] **Analytics Testing**
  - [ ] Open Google Analytics real-time
  - [ ] Click "Commencer gratuitement" CTA
  - [ ] Event `click_cta` should appear in GA4
  - [ ] Submit contact form
  - [ ] Event `submit_contact_form` should appear

- [ ] **SEO Verification**
  - [ ] Run PageSpeed Insights
  - [ ] Target: 90+ score
  - [ ] Core Web Vitals: all green
  - [ ] Check /contact page meta tags

---

## 🚀 Deployment

### Local Build Test
```bash
npm run build
npm run start
# Visit http://localhost:3000
# Verify everything works before deploying
```

### Deploy to Vercel
```bash
git add .
git commit -m "chore: Phase 1 complete - responsive, security, conversion, SEO"
git push origin main

# Vercel auto-deploys on push
# Monitor: https://vercel.com/williammartin/site-leconsultant
```

### Add Environment Variables to Vercel
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add: `RESEND_API_KEY` = your_api_key
3. Redeploy

---

## 📊 Phase 1 Summary

| Component | Status | File |
|-----------|--------|------|
| **Responsive Design** | ✅ | All components |
| **Security Headers** | ✅ | `next.config.js` |
| **Contact Form + Email** | ✅ | `app/api/contact/route.ts` + ContactForm |
| **GA4 Tracking** | ✅ | `lib/analytics.ts` + components |
| **SEO (Breadcrumbs)** | ✅ | `BreadcrumbSchema.tsx` |
| **Images (Placeholder)** | ✅ | `/public` |

---

## 🎯 Phase 2 (Optional — Not blocking launch)

- [ ] Create `/services/consulting-ia` page
- [ ] Create `/services/directeur-marketing` page
- [ ] Create `/services/jury-certification` page
- [ ] Create `/about` page
- [ ] Blog infrastructure
- [ ] Advanced GA4 events (scroll depth, etc.)

---

## 📞 Support

**Questions?**
- Review: DESIGN_NEW.md (design spec)
- Check: lib/analytics.ts (GA4 events)
- Test: app/api/contact/route.ts (email flow)

**Next Step:** Configure Resend API key and run `npm run dev` to test locally.

---

**Last Updated:** 2026-05-13 | **Phase:** 1 (Complete) | **Status:** 🚀 Ready for Launch
