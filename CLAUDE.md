# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website rebuild for **Aroma Coffee** (also trades as **Aroma Café**) — a Vietnamese-owned cafe in Miramar, Wellington, NZ. This is a client project.

- **Location:** 128D Park Road, Miramar, Wellington 6022 (single location)
- **Hours:** The site currently shows Mon–Fri 7am–3pm and Sat–Sun 9am–3pm, but the source records conflict; treat these as unconfirmed until the client resolves the provenance noted in `content-status.md`.
- **Vietnamese heritage** is part of the brand identity (egg coffee, pho, tom yum on menu)

The old site (aromacoffee.nz) runs Laravel + Vite + Tailwind CSS + Alpine.js. The `/audit` directory contains scraped content and analysis. The old site's audit listed 3 locations but the client confirmed only 1 (Miramar).

## Project Status

**Static HTML + CSS.** No framework, no build system, no package.json. `index.html` is a temporary public-facing page while the early site draft remains under development at `draft.html`, with Menu and Contact. Draft structure follows decision 010 — see `decisions.md` and `TODO.md`.

### Pages

All website files live in `site/`, the only folder Netlify publishes (`netlify.toml`). Docs outside `site/` are never served.

| File | Status | Notes |
|------|--------|-------|
| `index.html` | Built | Temporary landing page; not the approved final homepage |
| `draft.html` | Early draft | Hero, Food/Coffee/Tea tabs and Visit section (decision 010); copy slots for missing client content |
| `menu.html` | Built | Full menu transcribed from physical menu photos |
| `contact.html` | Built | Address, hours, booking CTA |
| `about.html` | Not started | Needs client story content |

### Directory Structure

- `/site` — the published website (pages, CSS, favicon, `redesign/` comps)
- `/audit` — scraped content, assets, and notes from the old aromacoffee.nz site
- `/assets` — menu photos; no product photography yet
- `/design-system` — brand tokens (currently empty, tokens are in `site/styles.css :root`)
- `Aroma Coffee Homepage/` — Claude Design handoff files (reference, not shipped)

## Tech Stack

- Static HTML + CSS, no framework
- Google Fonts: Cormorant Garamond (serif, headings), Figtree (sans, body)
- Design tokens defined as CSS custom properties in `styles.css`
- Responsive via `clamp()` and two breakpoints (640px, 420px)

## Client Content Rules

This is client work. Never write text that asserts a fact about Aroma Coffee (their services, process, pricing, availability, credentials, or location) unless the client said it. Use the `client-copy` skill for any customer-facing text. Consult `content-status.md` for what is confirmed, and leave a short question for unconfirmed facts rather than inventing content.

## Key Constraints

- Single location: 128D Park Road, Miramar, Wellington 6022
- Vietnamese heritage is part of the brand identity
- No online ordering — dine-in only
- No online reservations — phone/email CTA only
- Menu content transcribed from physical menu photos (see `/assets`)
- Phone number discrepancy is unresolved — see `TODO.md`

## Agent skills

### Issue tracker

Specs and implementation tickets are local Markdown under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

This is a single-context repository; domain terms and consequential decisions are documented lazily. See `docs/agents/domain.md`.
