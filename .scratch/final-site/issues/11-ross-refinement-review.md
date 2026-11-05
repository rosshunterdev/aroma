# 11: Complete the Ross refinement gate

**What to build:** A documented internal review confirming that the selected Option A direction forms one coherent, implementable Home, Menu and Visit experience before final client design approval.

**Blocked by:** 08: Refine the shared Menu experience; 09: Refine Visit and the Restaurant booking journey.

**Owner:** Ross

**Status:** complete

- [x] Ross reviews Home, Menu and Visit across representative viewports.
- [x] Option A's clarity, the Menu's Café/Restaurant distinction and any bounded Design 3 influence are explicitly assessed.
- [x] Accessibility, content-placeholder and implementation-feasibility concerns are resolved or recorded.
- [x] The gate records an explicit ready/not-ready outcome for Phillip approval.

## Comments

- 2026-10-27 — Gate narrowed from the stale five-page proposal to the approved Home/Menu/Visit direction.
- 2026-11-06 — **Outcome: ready for Phillip approval.** Ross reviewed `site/selected-home/`, `site/selected-menu/` and `site/selected-visit/` on `main` (`b0ff0ce`) from full-page screenshots at 1440 and 390 CSS px and the live Netlify pages, and is happy with Option A's clarity, the Café/Restaurant distinction and the bounded Design 3 influence (red details, Vietnamese highlight tag, green Visit band). Automated checks at 1440, 768, 390 and 320 CSS px: no horizontal overflow, no 404s or JavaScript errors, one `h1` per page, `noindex, nofollow` on all three, no images without `alt`, all cross-page links resolve. Recorded, not blocking:
  1. Home and Visit Google Maps links use different search queries; align them in production (Tickets 16/20).
  2. One em dash remains in a Restaurant placeholder description on Menu.
  3. Footers differ between pages (Visit has "Return to home", Home does not).
  4. The "Compare designs" switcher on selected Home is review scaffolding; remove before any page goes live.
  5. Screen-reader, full keyboard and 200% zoom passes are deferred to Ticket 21.
  Unblocks Ticket 12.
