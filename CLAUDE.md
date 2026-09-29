# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website rebuild for **Aroma Coffee** (also trades as **Aroma Café**) — a Vietnamese-owned cafe in Miramar, Wellington, NZ. This is a client project.

- **Location:** 128D Park Road, Miramar, Wellington 6022 (single location)
- **Hours:** Mon–Fri 7am–3pm, Sat–Sun 9am–3pm
- **Vietnamese heritage** is part of the brand identity (egg coffee, pho, tom yum on menu)

The old site (aromacoffee.nz) runs Laravel + Vite + Tailwind CSS + Alpine.js. The `/audit` directory contains scraped content and analysis. The old site's audit listed 3 locations but the client confirmed only 1 (Miramar).

## Project Status

**Static HTML + CSS.** No framework, no build system, no package.json. Homepage, menu, and contact pages are built. Layout and structure are first-pass and need design review — see `TODO.md`.

### Pages

| File | Status | Notes |
|------|--------|-------|
| `index.html` | Built | Homepage — hero with coffee/matcha blurbs, category tabs |
| `menu.html` | Built | Full menu transcribed from physical menu photos |
| `contact.html` | Built | Address, hours, booking CTA |
| `about.html` | Not started | Needs client story content |

### Directory Structure

- `/audit` — scraped content, assets, and notes from the old aromacoffee.nz site
- `/assets` — images (menu photos from client, product photo placeholder)
- `/design-system` — brand tokens (currently empty, tokens are in `styles.css :root`)
- `Aroma Coffee Homepage/` — Claude Design handoff files (reference, not shipped)

## Tech Stack

- Static HTML + CSS, no framework
- Google Fonts: Cormorant Garamond (serif, headings), Figtree (sans, body)
- Design tokens defined as CSS custom properties in `styles.css`
- Responsive via `clamp()` and two breakpoints (640px, 420px)

## Client Content Rules

This is client work. Never write text that asserts a fact about Aroma Coffee (their services, process, pricing, availability, credentials, or location) unless the client said it. Use the `client-copy` skill for any customer-facing text. Leave a short question for unconfirmed facts rather than inventing content.

## Key Constraints

- Single location: 128D Park Road, Miramar, Wellington 6022
- Vietnamese heritage is part of the brand identity
- No online ordering — dine-in only
- No online reservations — phone/email CTA only
- Menu content transcribed from physical menu photos (see `/assets`)
- Phone number discrepancy is unresolved — see `TODO.md`
