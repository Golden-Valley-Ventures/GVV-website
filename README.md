# Golden Valley Ventures — Website

Premium flagship website for Golden Valley Ventures.  
Built with Next.js 14, React 18, TypeScript, and CSS Modules.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global resets, font imports, utility classes
│   ├── layout.tsx         # Root layout with metadata + Open Graph
│   └── page.tsx           # Homepage — assembles all sections
├── components/
│   ├── ui.tsx             # Shared primitives (Reveal, SectionLabel, GoldRule)
│   ├── Navigation.tsx     # Sticky header with scroll-aware state
│   ├── Hero.tsx           # Immersive entry with orbital rings
│   ├── BrandThesis.tsx    # Who We Are
│   ├── EcosystemOverview.tsx  # Six-pillar orbit diagram
│   ├── CoreDomains.tsx    # Vertical grid
│   ├── AGIntelSpotlight.tsx   # Featured venture module
│   ├── OperatingModel.tsx # Five-step process
│   ├── Philosophy.tsx     # Editorial tenets
│   ├── Impact.tsx         # Purpose-driven capital
│   ├── Initiatives.tsx    # Project table
│   ├── Contact.tsx        # CTA section
│   └── Footer.tsx         # Site footer
├── lib/
│   ├── tokens.ts          # Design tokens (colors, fonts)
│   └── useInView.ts       # Intersection Observer hook
└── styles/
    ├── nav.module.css     # Navigation responsive styles
    └── ecosystem.module.css  # Ecosystem orbit responsive styles
```

---

## Local Development

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option A — Git Push (Recommended)

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Vercel auto-detects Next.js — no configuration needed.
5. Click **Deploy**.

Your site will be live at `your-project.vercel.app`.  
Add a custom domain in **Settings → Domains**.

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts. For production:
vercel --prod
```

---

## Custom Domain

After deploying to Vercel:

1. Go to your project dashboard → **Settings** → **Domains**
2. Add `goldenvalleyventures.com`
3. Update your DNS records as instructed:
   - **A record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

SSL is automatic.

---

## Favicon / Branding Assets

Place your brand assets in the `public/` directory:

```
public/
├── favicon.ico
├── apple-touch-icon.png   (180×180)
├── og-image.jpg           (1200×630 for social sharing)
└── favicon-32x32.png
```

The layout.tsx metadata references these paths.

---

## Architecture Notes

- **App Router** (Next.js 14) — all pages under `src/app/`
- **Client Components** — sections use `"use client"` for scroll-triggered animations
- **Zero external animation libraries** — all motion via CSS transitions + IntersectionObserver
- **No Tailwind** — intentional; inline styles + CSS Modules keep the design system self-contained and token-driven
- **Scalable** — add new pages by creating `src/app/[page]/page.tsx`; add new sections as components

---

## License

Proprietary. © 2026 Golden Valley Ventures.
