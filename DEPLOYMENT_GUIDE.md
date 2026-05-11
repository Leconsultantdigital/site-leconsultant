# Deployment Guide - Le Consultant Digital

**Last Updated**: May 11, 2026  
**Status**: Ready for Production Deployment

---

## 📋 Pre-Deployment Checklist

- [x] Content written & optimized (PHASE 1)
- [x] All pages rendering correctly (PHASE 2)
- [x] Technical SEO complete (PHASE 3)
- [ ] GA4 configured (PHASE 4)
- [ ] Contact form tested (PHASE 4)
- [ ] Environment variables set (PHASE 4)
- [ ] Domain DNS configured
- [ ] SSL certificate ready
- [ ] Backup created

---

## 🚀 Step 1: Prepare Environment Variables

### 1.1 Create `.env.local` (DO NOT commit to git)

```bash
# Copy from .env.example
cp .env.example .env.local
```

### 1.2 Fill in the required values:

#### Google Analytics 4
1. Go to [Google Analytics 4](https://analytics.google.com)
2. Create new property: "leconsultantdigital.fr"
3. Get **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Add to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Contact Form Email Service
Choose ONE option:

**Option A: Resend** (Recommended - simplest)
1. Go to [Resend.com](https://resend.com)
2. Sign up & verify domain
3. Get API key from dashboard
4. Add to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

**Option B: SendGrid**
1. Go to [SendGrid.com](https://sendgrid.com)
2. Create account & verify domain
3. Get API key (Settings → API Keys)
4. Add to `.env.local`:
```
SENDGRID_API_KEY=SG_your_key_here
SENDGRID_FROM_EMAIL=noreply@leconsultantdigital.fr
```

**Option C: EmailJS** (Client-side - no backend needed)
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create account & add Email Service
3. Get Service ID, Template ID, Public Key
4. Add to `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

---

## 🔗 Step 2: Configure Domain & DNS

### 2.1 Point domain to Vercel

If using Vercel hosting:
1. Add domain in Vercel dashboard
2. Update DNS at domain registrar:

```
CNAME: leconsultantdigital.fr → cname.vercel-dns.com
```

Or use Vercel's nameservers (preferred):
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### 2.2 Verify SSL Certificate
- ✅ Auto-enabled on Vercel (free)
- Takes 15-30 min after DNS propagates

---

## 📊 Step 3: Setup Google Analytics 4

### 3.1 Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Admin → Create Property
3. Name: "Le Consultant Digital"
4. Business Type: "Service"
5. Get **Measurement ID**

### 3.2 Add to Environment
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3.3 Test GA4
1. Deploy site (see Step 5)
2. Visit site in new tab
3. Open GA4 dashboard → Realtime
4. Should see 1 active user in 5-10 seconds

### 3.4 Setup Conversions
In GA4 dashboard:
1. **Events → Create Event**
   - Event name: `contact_form_submission`
   - Trigger: Form submit on `/contact`

2. **Conversions**
   - Mark `contact_form_submission` as conversion
   - Expected: 2-3/day initially, 30+/month at scale

---

## 📧 Step 4: Test Contact Form

### 4.1 Manual Testing
1. Go to `leconsultantdigital.fr/contact`
2. Fill out form
3. Click "Submit"
4. Should see success message
5. Check email for submission

### 4.2 Verify Submission Flow
- [ ] Email received at `contact@leconsultantdigital.fr`
- [ ] GA4 logs `contact_form_submission` event
- [ ] Form clears after submit
- [ ] Success message displays

### 4.3 Edge Cases to Test
- Missing required fields → Error message
- Invalid email → Error message
- Spam submission → Check honeypot field
- Multiple rapid submissions → Rate limit (prevent spam)

---

## 🌐 Step 5: Deploy to Production

### Option A: Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod

# 4. Set environment variables in Vercel dashboard
# Add each var from .env.local to Vercel Settings → Environment Variables

# 5. Redeploy with env vars
vercel --prod
```

### Option B: Deploy to Other Hosting

**Netlify**:
```bash
npm run build
# Connect GitHub to Netlify
# Add env vars in Netlify dashboard
# Deploy from git
```

**Docker/Self-hosted**:
```bash
npm run build
npm run start
# Add env vars before running
# Configure reverse proxy (nginx/Apache)
# Setup SSL (Let's Encrypt)
```

---

## ✅ Step 6: Post-Deployment Verification

### 6.1 Verify Site is Live
```bash
curl https://leconsultantdigital.fr
# Should return 200 OK
```

### 6.2 Check Google Indexing
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `leconsultantdigital.fr`
3. Submit sitemap: `https://leconsultantdigital.fr/sitemap.xml`
4. Check indexing status (24-48 hours)

### 6.3 Verify Core Web Vitals
1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter `leconsultantdigital.fr`
3. Check scores:
   - Performance: > 85 ✅
   - Accessibility: > 90 ✅
   - Best Practices: > 90 ✅
   - SEO: > 90 ✅

### 6.4 Test Analytics
1. Open site in incognito window
2. Check GA4 Realtime dashboard
3. Should see user activity in 5-10 seconds

### 6.5 Test Contact Form End-to-End
1. Submit test form
2. Check email received
3. Verify GA4 logs conversion
4. Test spam protection

---

## 📈 Step 7: Monitoring & Maintenance

### Weekly Tasks
- [ ] Check GA4 for unusual traffic patterns
- [ ] Monitor 404 errors in Search Console
- [ ] Review contact form submissions

### Monthly Tasks
- [ ] Review keyword rankings (use Semrush/Ahrefs)
- [ ] Check Core Web Vitals
- [ ] Analyze traffic sources
- [ ] Monitor page speed
- [ ] Update blog content (2+ articles)

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Review landing page conversions
- [ ] A/B test CTAs
- [ ] Update case studies/testimonials

---

## 🔒 Security Checklist

- [x] HTTPS enabled (Vercel auto)
- [x] Environment variables not committed
- [x] Rate limiting on contact form
- [x] Honeypot field for spam prevention
- [x] CORS properly configured
- [ ] CSP headers configured
- [ ] X-Frame-Options: SAMEORIGIN

---

## 📞 Troubleshooting

### GA4 Not Tracking
- [ ] Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is correct
- [ ] Verify site deployed with env var
- [ ] Check browser console for errors
- [ ] Wait 24h for initial data

### Contact Form Not Sending
- [ ] Check email service credentials
- [ ] Verify email address in env var
- [ ] Check spam folder
- [ ] Test with Postman if API-based

### DNS Not Resolving
- [ ] Wait 30-60 min for DNS propagation
- [ ] Flush DNS cache: `sudo dscacheutil -flushcache`
- [ ] Verify CNAME record in registrar

---

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Google Analytics 4 Setup](https://support.google.com/analytics/answer/10089681)
- [Resend Documentation](https://resend.com/docs)
- [Google Search Console](https://search.google.com/search-console)

---

## 🎉 Go-Live Checklist

Once deployed:

- [ ] Site accessible at leconsultantdigital.fr
- [ ] HTTPS working (green lock)
- [ ] GA4 tracking active
- [ ] Contact form operational
- [ ] Mobile responsive working
- [ ] All pages indexed in Google
- [ ] Sitemap submitted
- [ ] robots.txt working
- [ ] Schema.org markup valid
- [ ] Monitoring in place

**Status**: ✅ READY FOR LAUNCH

---

**Estimated Timeline**:
- Setup: 2-3 hours
- Deployment: 30 min
- DNS propagation: 24-48 hours
- Google indexing: 1-2 weeks
- Significant rankings: 2-4 weeks

**Support**: Contact Claude Code for any deployment issues.
