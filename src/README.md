# Converz — Landing Page

Marketing website for **Converz**, an AI voice model product (private beta). Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind v4.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind v4 (`@theme` tokens) + inline styles |
| Fonts | Geist Sans, Geist Mono (via `next/font/google`) |
| Deployment | Vercel (Root Directory: `src/`) |

## Getting Started

```bash
cd src
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve production build locally
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, favicon
│   ├── globals.css         # Design tokens (@theme), keyframes, base reset
│   ├── page.tsx            # Home page — assembles all section components
│   ├── privacy/page.tsx    # Privacy Policy page
│   └── terms/page.tsx      # Terms of Service page
├── components/
│   ├── Navbar.tsx          # Fixed navbar — scroll-aware bg, CTA buttons
│   ├── Hero.tsx            # Hero section — wave canvas + rise-in animations
│   ├── VoicesDemo.tsx      # Interactive voice demo (#experience)
│   ├── Features.tsx        # Features grid (#features)
│   ├── IndustryTabs.tsx    # Industry tab selector (#industries)
│   ├── Analytics.tsx       # Analytics section + Highlights rows
│   ├── Enterprise.tsx      # Enterprise cards (#enterprise)
│   ├── CTA.tsx             # Bottom call-to-action section
│   ├── Footer.tsx          # Footer
│   ├── Ambient.tsx         # Fixed animated gradient blobs (CSS-only)
│   └── WaveCanvas.tsx      # DPR-aware sine wave canvas (used in Hero)
└── public/
    └── logo.png            # Converz wordmark
```

## Pages

| Route | Description |
|---|---|
| `/` | Full landing page with interactive voice demo |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

All routes are statically prerendered at build time.

## Design Tokens

Defined in `app/globals.css` under `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-cz-bg` | `#F5F1EE` | Page background |
| `--color-cz-coral` | `#C9603A` | Primary accent, CTAs |
| `--color-cz-dark` | `#111827` | Body text, headings |
| `--color-cz-muted` | `#4B5563` | Secondary text |
| `--color-cz-warm-100` | `#F3DAD1` | Warm fills, callouts |
| `--color-cz-blue` | `#5E86B8` | Voice toggle accent |
| `--color-cz-green` | `#5BB98C` | Success states |

## CTA Links

All call-to-action buttons (Join Beta Waitlist, Sign In, Talk to our team, Book Enterprise Demo) link to:

```
https://forms.cloud.microsoft/r/Fej2LMBkGy?origin=lprLink
```

## Deployment

Deployed on Vercel. Set **Root Directory** to `src` in the Vercel project settings (Build & Development Settings → Root Directory). The `vercel.json` inside `src/` handles the rest.

```json
{
  "framework": "nextjs"
}
```

No additional environment variables are required.
