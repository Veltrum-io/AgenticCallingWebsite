# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Converz landing page — a single-file static HTML page for an AI voice model product (private beta). No build system, no package manager, no external JS dependencies. Everything lives in `index.html`.

## Running

Open `index.html` directly in a browser. No server required. For local serving:
```
npx serve .
# or
python3 -m http.server
```

## Architecture

The entire page is one file with three logical sections inside `<script>`:

### 1. Data constants (top of script)
All page content is defined as JS constants before any rendering logic:
- `MARQUEE_ITEMS`, `FEATURES`, `INDUSTRIES`, `ARCH_NODES`, `ARCH_CHIPS`, `ENTERPRISE_CARDS` — arrays that drive rendered sections
- `VOICES_INDUSTRIES`, `VOICES_LIST` — state data for the interactive voice demo

To add/edit content in any section, edit only these constants — the render functions read from them.

### 2. Render IIFEs (one per section)
Each page section is rendered by a self-contained IIFE that writes `innerHTML` into a container element. Order in script:
- Wave canvas animation (Hero background)
- Navbar scroll blur effect
- Rise-in animations (`[data-rise]` attribute)
- Marquee (logo strip)
- Features grid
- Industry tabs + panel
- Architecture pipeline + chips
- Enterprise cards
- CTA decorative bars
- Voices interactive demo (most complex — see below)

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

All CSS is in a single `<style>` block, minified inline. Sections are demarcated by `/* SECTION NAME */` comments. Class names use BEM-lite prefixes per section (`nav-*`, `hero-*`, `feature-*`, `ind-*`, `arch-*`, `dash-*`, `int-*`, `ent-*`, `cta-*`).

State classes are always `on` / `off` (active/inactive toggles on tabs and buttons).

## Animations

- `@keyframes` defined at top of `<style>`: `floaty`, `floaty2` (ambient blobs), `marquee` (logo strip), `flow` (dashed arrow in architecture pipeline), `czspin` (orb ring text), `czpulse` (orb pulse ring), `czfloat` (orb float)
- Hero rise-ins use the Web Animations API (`el.animate(...)`) with staggered delays via `[data-rise]` attribute; skipped if `prefers-reduced-motion` is set
- Wave canvas uses `requestAnimationFrame` with layered sine functions; DPR-aware sizing via `ResizeObserver`
