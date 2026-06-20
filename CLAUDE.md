# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Converz landing page for an AI voice model product (private beta). No build system, no package manager, no external JS dependencies. Three static HTML files:
- `index.html` — full landing page (all interactive content)
- `privacy.html` — Privacy Policy (static prose, same design tokens/navbar as index)
- `terms.html` — Terms of Service (same structure as privacy.html)

## Running

Open `index.html` directly in a browser. No server required. For local serving:
```
npx serve .
# or
python3 -m http.server
```

## Deployment

Deployed on Vercel. `vercel.json` contains a single rewrite routing `/` → `/index.html`.

## Architecture

The entire page is one file with three logical sections inside `<script>`:

### 1. Data constants (top of script)
All page content is defined as JS constants before any rendering logic:
- `MARQUEE_ITEMS`, `FEATURES`, `INDUSTRIES`, `ENTERPRISE_CARDS` — arrays that drive their respective rendered sections
- `HIGHLIGHTS_ROWS` — three rows with `{title, desc, viz}` where `viz` is a key (`'latency'`, `'voice'`, `'turns'`) selecting which inline visualization to render
- `VOICES_INDUSTRIES`, `VOICES_LIST` — state data for the interactive voice demo

The analytics section (`<!-- ANALYTICS -->`) is **static HTML** — not driven by a data constant.

To add/edit content in any section, edit only these constants — the render functions read from them.

### 2. Render IIFEs (one per section)
Each page section is rendered by a self-contained IIFE that writes `innerHTML` into a container element. HTML section order (top to bottom):

1. Ambient blobs (fixed, CSS-only)
2. Navbar
3. Hero (wave canvas + rise-in animations)
4. **Voices interactive demo** (see below) — `#experience`
5. Features grid — `#features`
6. Industry tabs + panel — `#industries`
7. Analytics — static HTML, no IIFE
8. Highlights rows (`HIGHLIGHTS_ROWS`) — `#highlights`
9. Enterprise cards — `#enterprise`
10. CTA section
11. Footer

IIFE execution order in `<script>` follows the same sequence. Each IIFE is delimited by a `// ─── SECTION NAME ───` comment.

### 3. Voices demo (stateful IIFE)
The most interactive section. State: `selInd` (selected industry), `selVoice` (selected voice), `playing` (bool). Uses:
- SVG bezier paths (`vl-left-path`, `vl-right-path`) connecting industry/voice columns to a central orb
- Animated SVG rect nodes (`vl-left-node`, `vl-right-node`) traversing the bezier curves via `requestAnimationFrame`
- Orb play/pause toggling `orb-pulse` visibility and a 5.4s auto-stop timer
- `renderCols()` rebuilds both button columns and re-attaches click listeners on every selection change

## Design tokens

| Purpose | Value |
|---|---|
| Page background | `#F5F1EE` |
| Warm accent (light) | `#F3DAD1`, `#EBC9BC`, `#D9B3A3` |
| Dark / text | `#111827`, `#1b1b1f` |
| Muted text | `#4B5563`, `#6B7280` |
| Coral accent | `#C9603A` (voice industry selector dot) |
| Blue accent | `#5E86B8` (voice toggle) |
| Success green | `#5BB98C` (checkmarks, sentiment bar) |

Fonts loaded from Google Fonts: `Geist` (body) and `Geist Mono` (unused in current markup but loaded).

## CSS conventions

All CSS is in a single `<style>` block, minified inline. Sections are demarcated by `/* SECTION NAME */` comments. Class names use BEM-lite prefixes per section (`nav-*`, `hero-*`, `feature-*`, `ind-*`, `arch-*`, `dash-*`, `int-*`, `ent-*`, `cta-*`, `hl-*`, `vl-*`).

State classes are always `on` / `off` (active/inactive toggles on tabs and buttons).

`privacy.html` and `terms.html` duplicate the global reset, ambient, and navbar CSS from `index.html` — when updating shared styles, update all three files.

## Animations

- `@keyframes` defined at top of `<style>`: `floaty`, `floaty2` (ambient blobs), `marquee` (logo strip), `flow` (dashed arrow in architecture pipeline), `czspin` (orb ring text), `czpulse` (orb pulse ring), `czfloat` (orb float)
- Hero rise-ins use the Web Animations API (`el.animate(...)`) with staggered delays via `[data-rise]` attribute; skipped if `prefers-reduced-motion` is set
- Wave canvas uses `requestAnimationFrame` with layered sine functions; DPR-aware sizing via `ResizeObserver`
