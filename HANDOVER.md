# Handover — Aroma Coffee Rebuild

## Onboarding reconciliation — Codex/Ben side, 2026-09-30

Work is on `codex/onboarding-continuity`. Commit `59f51ff` contains the substantive onboarding/configuration changes; `9ad489d` records the final handoff metadata. The pass corrected shared documentation, added the concise Codex map in `AGENTS.md`, and configured the focused project-local Matt Pocock skills with local Markdown tickets under `.scratch/`. No client-facing HTML/CSS/JavaScript was changed. Validation included `git diff --check`, local-reference checks, source review, and browser inspection at default and desktop viewport sizes.

The preserved draft has confirmed broken references: `draft.html`, `menu.html` and `contact.html` link to missing `about.html`, while `draft.html` references missing `assets/product.jpg`. Treat these as recorded final-site blockers, not regressions in the temporary public page.

## Current State

Branch `codex/under-construction-page` adds a standalone temporary landing page at `index.html`. It uses only the confirmed Miramar address and is not the approved final homepage. The early static-site draft remains available at `draft.html`; menu and contact remain part of that draft. About is blocked on client story content, and the draft's contact details and hours remain provisional.

| Page | Status |
|------|--------|
| `index.html` | Temporary public-facing landing page. No draft navigation, provisional contact details or JavaScript. |
| `draft.html` | Preserved early homepage draft — carousel with 3 slides (Food/Coffee/Tea), defaults to Coffee. |
| `menu.html` | Built. Full menu. Home, brand and "← Back" links now return to `draft.html`. |
| `contact.html` | Built. Address, hours, phone/email CTA. Home and brand links now return to `draft.html`. |
| `about.html` | Not started — blocked on client content. Nav links to it (will 404). |

### Draft homepage carousel detail

- 3 slides controlled by FOOD / COFFEE / TEA tab buttons (`role="tab"`, `aria-selected`)
- **Food:** Chicken Pho (left) + Seafood Tom Yum (right) — descriptions from menu
- **Coffee:** Aroma Coffee blurb (left) + Aroma Matcha blurb (right) — original homepage content restored here
- **Tea:** Egg Coffee/$8 (left) + Tea Pot/varieties/$5 (right) — weakest slide, needs better content
- Auto-rotates every 6s, pauses on hover/focus, respects `prefers-reduced-motion`
- Inline `<script>` at bottom of `draft.html`, ~40 lines vanilla JS

### Phone number fix

The draft homepage footer was using the old site number `(+64)27 4809896`. It was changed to `(020) 456 7837` to match the contact page and physical menu, but remains unconfirmed with the client.

## What's Next

1. **Visual review of draft homepage** — carousel, CTA, and Visit Us positioning need to be checked in browser. The Visit Us block was repositioned to bottom-left of `.content` area per Ross's direction but hasn't been confirmed visually yet.
2. **Tea slide content** — Egg Coffee on the Tea slide doesn't make categorical sense. Needs either better tea highlights from the client or reduction to 2 slides (Food + Coffee).
3. **Header nav decision** — whether "MENU" goes in the header nav is still deferred. The "VIEW MENU" CTA below the carousel handles it for now.
4. **Mobile layout** — carousel swipe gestures and responsive layout deferred. Desktop-first.
5. **Phone number** — still needs client confirmation.
6. **About page** — blocked on client content.
7. **Product photos** — all three draft carousel slides reference `assets/product.jpg`, but that file is absent, so the images are broken.
8. **Opening hours and email** — both need client confirmation; repository records conflict about the source of the displayed hours.
9. **About navigation** — all three preserved draft pages link to missing `about.html`; choose an intentional pre-content state before final-site launch.

## Blockers

- Visual confirmation of Visit Us positioning (may need further CSS tweaks)
- Tea slide content is weak — needs client input or a design decision
- About page content and product hero images both need client input
- Phone, email, opening hours and menu accuracy need explicit launch confirmation
- The About link and missing draft-homepage image remain broken states within the early draft

## Key Files

- `CLAUDE.md` — project context and constraints
- `decisions.md` — 8 decisions + open phone number issue
- `TODO.md` — current backlog and client-input questions
- `content-status.md` — content tracking by source and confirmation status
- `Aroma Coffee Homepage/design_handoff_aroma_homepage/` — original Claude Design reference
