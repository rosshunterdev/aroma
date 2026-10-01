# Session Log

Chronological record of work done on the Aroma Coffee rebuild.

---

## Session 1 — 2026-09-12

- Scraped and audited the old site (aromacoffee.nz)
- Created `/audit` directory with page content, structural issues, contact info, platform analysis
- Identified major issues: placeholder product pages, broken nav, boilerplate legal pages, inconsistent contact info

## Session 2 — 2026-09-17

- Designed homepage mockup (saved as `NEW-DESIGN.png`)
- Wrote a prompt for Claude Design to build the mockup as a working page
- Received design handoff with full HTML, CSS, component breakdown, and design tokens
- Handoff files saved to `Aroma Coffee Homepage/design_handoff_aroma_homepage/`
- Implemented `index.html` and `styles.css` at project root from the handoff
- Replaced placeholder lorem ipsum with real copy from the old site (coffee + matcha blurbs)

## Session 3 — 2026-09-18

- Reviewed all audit files and proposed a simplified 4-page structure (Home, Menu, Contact, About)
- Client confirmed: single location (Miramar only), no online ordering, no online reservations
- Client provided physical menu photos and opening hours
- Built `menu.html` — full breakfast/lunch and drinks menu transcribed from photos
- Built `contact.html` — address, hours, phone/email booking CTA
- Updated `index.html` nav links to point to real pages, tabs link to menu sections
- Created project documentation (this file, `decisions.md`, `TODO.md`)
- Updated `CLAUDE.md` to reflect current project state

- Proposed alternative site structure (decision 007 in `decisions.md`) — MENU in header nav, drop category tabs, homepage becomes a landing page
- Ross noted he has an artistic structure in mind to compare against the proposal

### Outstanding from this session
- Phone number discrepancy not yet confirmed with client
- Menu and contact page layouts need design review
- About page not started (no content)
- Structure decision pending — compare proposed nav redesign vs Ross's artistic direction

## Session 4 — 2026-09-18

- Planned and built homepage carousel: 3 slides (Food/Coffee/Tea) with tab controls, auto-rotate, swipe-ready structure
- Added "VIEW MENU" CTA button below carousel linking to `menu.html`
- Added "Visit Us" block (address + hours) positioned bottom-left of content area
- Added "← Back" link to menu page tabs for easy return to homepage
- Fixed homepage footer phone number inconsistency (was using old site number)
- Carousel defaults to Coffee slide, which restores the original Aroma Coffee + Aroma Matcha layout

### Outstanding from this session
- Visit Us positioning needs visual confirmation — was being iterated on
- Tea slide content is categorically wrong (Egg Coffee on Tea slide) — needs client input
- Header nav structure still deferred (MENU link not yet added to header)
- Mobile carousel layout deferred
- TODO.md not updated — structure-related items may be stale

## Session 5 — 2026-10-01 — Site structure and homepage accessibility

Note: Codex/Ben work on 2026-09-30 (PR #1 onboarding, PR #2 temporary page) was recorded in HANDOVER.md at the time, not here.

- **Did:** Design critique and audit of `draft.html` (16/32 on applicable heuristics; four P1 accessibility issues). Built annotated mock of a new structure; Ross agreed it. Implemented it on `feature/site-structure-proposal`: header (wordmark + MENU + VISIT), hero with copy slots, tabs without autoplay, in-flow Visit section, menu anchors and heading order, focus and contrast fixes. Added Playwright MCP (`.mcp.json`).
- **Decided:** 010 (BUILT, awaiting Ben/Codex review). 008 auto-rotation and 007 marked SUPERSEDED by 010.
- **Broke or found:** Contact page booking buttons were cream on cream (pre-existing); fixed. Sage text on cream was 2.5:1; replaced by `--sage-text`.
- **Verified:** Playwright/Chromium at 1440px and 390px on all three draft pages: one h1, no skipped heading levels, no failed requests, no horizontal scroll; tab keyboard behaviour and no autoplay confirmed; screenshots reviewed. Not verified: real devices, screen reader.
