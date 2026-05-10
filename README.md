# ProLocalBuilder

Marketing site for [prolocalbuilder.com](https://prolocalbuilder.com) — websites for local businesses, $750 flat.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with `next lint` |
| `npm run typecheck` | Type-check without emitting |

## Project structure

```
prolocalbuilder-web/
├── app/
│   ├── globals.css      # Tailwind + brand-bible component classes
│   ├── layout.tsx       # Root layout + fonts + metadata
│   └── page.tsx         # Home (assembles all sections)
├── components/          # One file per landing-page section
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── WhatWeBuild.tsx
│   ├── Pricing.tsx
│   ├── Honesty.tsx
│   ├── Process.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── MobilePhoneBar.tsx
├── lib/
│   └── site.ts          # Site constants, pricing tiers, FAQs, process steps
├── tailwind.config.ts   # Brand bible tokens (colors, type scale, spacing)
└── tsconfig.json
```

## Editing content

- **Phone, email, founder, service area** → `lib/site.ts`
- **Pricing tiers + features** → `lib/site.ts` (`tiers` export)
- **FAQ entries** → `lib/site.ts` (`faqs` export)
- **Process steps** → `lib/site.ts` (`processSteps` export)
- **Brand colors / type / spacing** → `tailwind.config.ts`

## Deployment

### Option A — Vercel (recommended, free tier)

1. Push this repo to GitHub
2. Go to <https://vercel.com/new>, import the repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Add custom domain `prolocalbuilder.com` in Vercel → DNS records as instructed

### Option B — Cloudflare Pages (free tier)

1. Push this repo to GitHub
2. <https://pages.cloudflare.com/> → "Connect to Git" → select repo
3. Build settings: framework preset **Next.js**, build command `npm run build`, output `.next`
4. Add custom domain in the Pages dashboard

## Brand bible

Design tokens live in `tailwind.config.ts`. Don't hardcode colors, sizes, or spacing — extend the config instead. The full bible (with rationale and "never" rules) is at `../prolocalbuilder/brand-bible.md`.

## License

Proprietary. © 2026 ProLocalBuilder.
