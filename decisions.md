# Decisions

Architectural, design, and content decisions made during the Aroma Coffee rebuild.

## 001 — Static HTML + CSS, no framework

**Date:** 2026-09-17
**Decision:** Ship as plain HTML + CSS with no build system.
**Why:** The site is 4 pages for a single cafe. A framework adds complexity with no benefit. Pages can be hosted anywhere (Netlify, Cloudflare Pages, even shared hosting).

## 002 — Single location, not three

**Date:** 2026-09-18
**Decision:** Treat Aroma Coffee as a single-location business (128D Park Road, Miramar).
**Why:** The old site's `/shops` page listed 3 locations (Miramar, Cuba Mall, Island Bay) but the client confirmed only the Miramar location. The old site data was outdated or incorrect.
**Impact:** No need for a "Locations" page — the contact page covers the single address.

## 003 — No online ordering or reservations

**Date:** 2026-09-18
**Decision:** No e-commerce, no reservation form. Bookings via phone/email CTA.
**Why:** The client doesn't sell products online. The old reservation form's backend status is unknown. A phone number CTA is simpler and confirmed by the client.

## 004 — 4-page site structure

**Date:** 2026-09-18
**Decision:** Home, Menu, Contact, About — down from the old site's 14 routes.
**Why:** 6 of the old site's 14 pages were broken or empty (placeholder product pages, 404 routes, duplicate content). The new structure matches what a cafe customer actually needs: see the menu, find the location, learn about the business.

## 005 — Menu transcribed from physical photos

**Date:** 2026-09-18
**Decision:** Transcribe menu items and prices directly from the client's physical menu photos.
**Why:** The old site had no real menu content (only placeholder text). Physical menu photos were provided by the developer who visited the cafe. The W23.2024 dated version was used as the most recent.
**Risk:** Prices and items may have changed since the photos were taken. Needs client confirmation before launch.

## 006 — Layout and structure is first-pass

**Date:** 2026-09-18
**Decision:** Current page layouts are functional but need a proper design pass.
**Why:** The homepage was implemented from a Claude Design handoff with a clear spec. The menu and contact pages were built to match the same design system but without a dedicated design comp. They need review for visual hierarchy, spacing, and how the pages feel as a whole site rather than individual screens.
**Action:** Run a design review session before considering these pages final.

## 007 — Site structure and navigation redesign (PROPOSED)

**Date:** 2026-09-18
**Status:** PROPOSED — not yet implemented. Ross has an alternative artistic direction in mind; this proposal should be compared against that before either is built.

### Current structure (problems)

```
Header:   HOME          ABOUT   CONTACT
Tabs:     FOOD   COFFEE   TEA
```

- "Menu" is the #1 thing cafe visitors look for but has no direct link in the header nav
- Category tabs on the homepage look like they switch content in place but actually navigate away to `menu.html` — confusing interaction pattern
- Homepage functions as a half-menu rather than a landing page
- ABOUT and CONTACT as the only header links feels sparse, especially while About has no content

### Proposed structure

```
Header:   AROMA (logo/home)     MENU   ABOUT   CONTACT
```

**4 pages, no category tabs:**

| Page | Role |
|------|------|
| **Home** | Landing page — hero image, one-line brand intro, then 3 blocks: Menu preview, Visit (address + hours), Book (phone CTA). Every visitor gets their answer in one scroll. |
| **Menu** | Full menu with on-page anchor tabs at the top (`Breakfast & Lunch` / `Coffee & Drinks` / `Kids`). Single page, scrollable, like reading the physical menu. |
| **About** | Vietnamese heritage story (when client provides content). Earns its place because the heritage is the differentiator — egg coffee, pho, shaking coffee aren't standard Wellington cafe fare. |
| **Contact** | Address, hours, phone/email CTA, optional map embed. |

### Why this is better

1. **"Menu" in the header** — the single biggest usability win. The most common reason someone visits a cafe website.
2. **No tabs on the homepage** — removes the confusing navigate-away pattern. Homepage becomes a proper landing page.
3. **On-page anchors on menu** — gives the tab filtering feel without page navigation confusion.
4. **Simpler header** — logo + 3 links. Clean at all widths, no wrapping issues on mobile.

### What stays the same

All CSS, tokens, colours, typography, footer, leaf decoration. The visual language doesn't change — only how pages are organised and how nav works.

### Alternative direction

Ross has an artistic structure in mind that may take a different approach. This proposal should be evaluated alongside that before committing to either. The two should be compared on both usability and the visual feel Ross is going for.

---

## 008 — Homepage carousel instead of static layout

**Date:** 2026-09-18
**Decision:** Replace the static three-column homepage content with a tab-controlled carousel (Food / Coffee / Tea), defaulting to the Coffee slide.
**Why:** Ross's artistic direction. The tabs become real in-page controls instead of confusing navigation links to menu.html. Each slide highlights two signature items from that category. The homepage becomes a single-screen landing page with a "VIEW MENU" CTA and a compact "Visit Us" block in the bottom-left.
**Impact:** Homepage now uses vanilla JS (~40 lines inline). The structure decision from 007 (MENU in header) is partially addressed — the CTA handles menu access for now, header nav change deferred.

---

## 009 — Temporary root page while the final site is developed

**Date:** 2026-09-30
**Decision:** Use `index.html` for a standalone temporary landing page and preserve the early homepage draft at `draft.html` with its existing Menu and Contact pages.
**Why:** The temporary page can be removed cleanly without deleting, duplicating or substantially restructuring the unfinished site. Draft-page Home links point to `draft.html`, while the temporary page exposes no navigation into provisional content.
**Impact:** The temporary page is an interim public entry point, not an approved final homepage. Restoring the draft as the root later requires deleting the temporary page and stylesheet, renaming `draft.html` to `index.html`, and restoring its internal Home links.

---

## Open — Phone number discrepancy

**Status:** UNRESOLVED — needs client confirmation
**Numbers found:**
- `(020) 456 7837` — printed on the physical menu, listed as booking number
- `(+64)27 480 9896` — used in the old site footer and reservation page
- The old site's terms page also listed `(020) 4567837`

**Currently using:** `(020) 456 7837` in footer and contact page (matches the physical menu).
**Action needed:** Ask the client which number is current and whether both are active.
