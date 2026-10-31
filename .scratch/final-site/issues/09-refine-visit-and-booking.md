# 09: Refine Visit and the Restaurant booking journey

**What to build:** A production-ready Visit design and a clear Restaurant booking journey that fit the selected system without inventing the booking method, hours or launch status.

**Blocked by:** 07: Refine the selected system and Home experience.

**Owner:** Ben/Codex

**Status:** awaiting-review

- [x] Visit clearly separates Café and Restaurant hours using labelled placeholders until the values are confirmed.
- [x] Address, external Maps action, contact and Restaurant booking areas have a predictable hierarchy.
- [x] The Restaurant booking action is easy to find from the Restaurant menu journey and Visit without assuming its mechanism.
- [x] Mobile and desktop designs remain readable, keyboard operable and consistent with Option A's clarity-first system.

## Comments

- 2026-10-27 — Supersedes the former dedicated Restaurant-page refinement ticket while retaining ID 09; the Restaurant content itself is handled inside Menu.
- 2026-10-31 — Unblocked: Ticket 08 review outcome recorded (direction accepted; three refinements requested in Ticket 08 may proceed in parallel). The Restaurant booking action should be reachable from the Restaurant section of `site/selected-menu/`.
- 2026-10-31 — Implemented on `codex/refine-visit-booking` from baseline `664c90d` at `site/selected-visit/`, with narrow selected-Home and selected-Menu links into the Visit and booking journey. The review page uses the confirmed address and external Maps action; Café hours, Restaurant hours, contact, arrival information, Restaurant status and booking method remain explicit questions with no fake form, contact link or confirmation behaviour. Focused structural and local link/asset tests pass. Rendered browser review covered 320, 390, 480, 768, 1024 and 1440 CSS-pixel widths, Home/Menu/fragment/Back journeys, the external Maps URL and visible keyboard focus. Awaiting Ross review; this is not client approval or production release.
- 2026-10-31 — PR #19 opened against `main`. Netlify reported the deploy ready and the Visit path was verified at `https://deploy-preview-19--aromacoffeemiramar.netlify.app/selected-visit/` with the expected title, `h1` and `noindex, nofollow` boundary.
