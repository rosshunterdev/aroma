# Handover — Aroma Coffee Rebuild

## Current State

Static HTML + CSS site. Homepage rebuilt with a carousel and single-screen layout. Menu and contact pages functional. About page not started.

| Page | Status |
|------|--------|
| `index.html` | **Rebuilt** — carousel with 3 slides (Food/Coffee/Tea), defaults to Coffee. "VIEW MENU" CTA below carousel. "Visit Us" block positioned bottom-left of content area. Leaves decoration bottom-right. |
| `menu.html` | Built. Full menu. Added "← Back" link in the tabs bar to return to homepage. |
| `contact.html` | Built. Address, hours, phone/email CTA. No changes this session. |
| `about.html` | Not started — blocked on client content. Nav links to it (will 404). |

### Homepage carousel detail

- 3 slides controlled by FOOD / COFFEE / TEA tab buttons (`role="tab"`, `aria-selected`)
- **Food:** Chicken Pho (left) + Seafood Tom Yum (right) — descriptions from menu
- **Coffee:** Aroma Coffee blurb (left) + Aroma Matcha blurb (right) — original homepage content restored here
- **Tea:** Egg Coffee/$8 (left) + Tea Pot/varieties/$5 (right) — weakest slide, needs better content
- Auto-rotates every 6s, pauses on hover/focus, respects `prefers-reduced-motion`
- Inline `<script>` at bottom of `index.html`, ~40 lines vanilla JS

### Phone number fix

Footer phone number on homepage was using the old site number `(+64)27 4809896`. Fixed to `(020) 456 7837` to match contact page and physical menu. Still unconfirmed with client.

## What's Next

1. **Visual review of homepage** — carousel, CTA, and Visit Us positioning need to be checked in browser. The Visit Us block was repositioned to bottom-left of `.content` area per Ross's direction but hasn't been confirmed visually yet.
2. **Tea slide content** — Egg Coffee on the Tea slide doesn't make categorical sense. Needs either better tea highlights from the client or reduction to 2 slides (Food + Coffee).
3. **Header nav decision** — whether "MENU" goes in the header nav is still deferred. The "VIEW MENU" CTA below the carousel handles it for now.
4. **Mobile layout** — carousel swipe gestures and responsive layout deferred. Desktop-first.
5. **Phone number** — still needs client confirmation.
6. **About page** — blocked on client content.
7. **Product photos** — all three carousel slides use the same `assets/product.jpg` placeholder.

## Blockers

- Visual confirmation of Visit Us positioning (may need further CSS tweaks)
- Tea slide content is weak — needs client input or a design decision
- About page content and product hero images both need client input

## Key Files

- `CLAUDE.md` — project context and constraints
- `decisions.md` — 8 decisions + open phone number issue
- `TODO.md` — full task list (not updated this session — may be stale on structure items)
- `content-status.md` — content tracking by source and confirmation status
- `Aroma Coffee Homepage/design_handoff_aroma_homepage/` — original Claude Design reference
