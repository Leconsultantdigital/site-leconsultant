# Design System — leconsultantdigital.fr

## Color Palette

**Primary Brand Colors** (OKLCH)
- **Yellow (Accent)**: `#FFD200` — Primary call-to-action, highlights, emphasis
- **Dark (Primary)**: `#1C1C2E` — Text, headings, dark backgrounds
- **Secondary (Blue)**: `#1AB4F5` — Information, featured elements, service 1
- **Success (Green)**: `#22C55E` — Validation, service 3, positive feedback
- **Warning (Orange)**: `#F59E0B` — Caution, secondary CTAs

**Neutrals** (Tinted, not pure)
- **Mid-gray**: `#6B7280` — Body text, secondary content
- **Border**: `#E5E7EB` — Dividers, subtle lines
- **Light BG**: `#F4F6F8` — Card backgrounds, subtle tints

## Typography

**Font Stack**: Comfortaa, Trebuchet MS, system-ui, sans-serif
- Approachable, friendly, modern
- Not overly futuristic; readable at all sizes

**Scale & Hierarchy**
- **H1**: 3.5rem (mobile) → 4rem+ (desktop), font-weight 700
- **H2**: 2.25rem (mobile) → 4rem (desktop), font-weight 700
- **H3**: 1.25rem → 1.5rem, font-weight 700
- **Body**: 1rem, line-height 1.6, max 65–75ch
- **Small**: 0.875rem, text-muted

**Weight Contrast**: 400 (body) → 700 (heading) — minimum 1.5× ratio

## Components

### Service Cards
- **Gradient backgrounds** per service (blue/cyan, yellow/orange, green/teal)
- **Asymmetric layout**: Middle card scales 105% on desktop
- **Accent line**: Colored underline under service number (dynamic per service)
- **Checkmarks**: Colored circles (service-specific background)
- **Shadow**: `shadow-lg` base, `shadow-2xl` on hover
- **Hover**: `-translate-y-3`, enhanced border

### Stats / Trust Items
- **Grid layout**: 2 columns on desktop (600 + 5/5 same row, 15 ans below)
- **Cards**: Gradient background (color/10 opacity), border, large text (text-5xl/6xl)
- **Icons**: Simple SVG, service-specific colors (users, star, badge)

### Review Carousel
- **Auto-scroll**: Every 6 seconds, stops on interaction
- **Navigation**: Dots + arrows, dots extend on active (w-8)
- **Card**: Yellow/10 gradient, yellow/30 border, rounded-3xl
- **Stars**: 5-point rating display
- **Quote**: Italic text, author + role + date

### Logo Carousel
- **Size**: 240px width, 128px height containers
- **Animation**: 40s linear scroll, seamless loop via duplicate array
- **Styling**: Gradient light background, rounded-2xl borders
- **Interaction**: Hover lifts card (-translate-y-1), shadow-lg

### Footer
- **Text alignment**: Centered (copyright + legal links)
- **Spacing**: Generous padding, clear section breaks
- **Links**: Hover to yellow on dark backgrounds

## Layout Rules

- **Container max-width**: 1200px (via `.container`)
- **Padding**: `p-8 md:p-10` to `p-12 md:p-14` depending on section importance
- **Spacing between sections**: `py-16 md:py-20` to `py-20 md:py-28`
- **No nested cards** — use full-width sections with breathing room
- **Responsive breakpoint**: `md:` (768px)

## Motion

- **Ease function**: ease-out (cubic-bezier(0.16, 1, 0.3, 1) or equiv)
- **Durations**: 300ms (hover), 2000ms (counters), 6000ms (carousel auto-scroll)
- **No layout shifts**: Avoid animating width/height; use opacity + transform
- **Animations on scroll**: IntersectionObserver (StatCounter, fade-in effects)

## Responsive Design

- **Mobile first**: Base styles are mobile, `md:` overrides for 768px+
- **Columns**: 1 col mobile → 2–3 col desktop (context-dependent)
- **Font sizes**: Scale up on desktop (1.125x–1.5x multiplier)
- **Touch targets**: Min 44px × 44px for buttons/links

## Brand Voice in Visual Design

1. **Trustworthy**: Solid colors, clear hierarchy, no excessive effects
2. **Energetic**: Yellow accent, modern typography, smooth animations
3. **Accessible**: High contrast (text on dark), readable fonts, descriptive labels
4. **Focused**: Every element serves a purpose; no decorative fluff

---

*Last updated: 2026-05-12*
