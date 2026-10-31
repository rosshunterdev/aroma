# 08: Refine the shared Menu experience

**What to build:** A production-ready single Menu-page design using Decision 033: specials first, then an obvious Café/Restaurant switch with Café first. The two sides must support genuinely different content without confusing customers.

**Blocked by:** 07: Refine the selected system and Home experience.

**Owner:** Ben/Codex

**Status:** awaiting-review

- [x] Specials, the Café-first state and the Café/Restaurant distinction are immediately understandable on mobile and desktop.
- [x] Café and Restaurant use separate labelled placeholder content; no menu item, description or price is invented.
- [x] Switching is predictable, keyboard operable and does not hide the current context or imply that the menus are shared.
- [x] Menu hierarchy, categories, optional jump links and approved Vietnamese-highlight treatment remain readable and restrained.
- [x] The design is reviewed for keyboard flow, reflow, contrast and content-placeholder clarity.

## Comments

- 2026-10-27 — Supersedes the former dedicated Café-page refinement ticket while retaining ID 08; aligned to Decisions 033 and 035.
- 2026-10-28 — Unblocked: Ticket 07 review outcome recorded. Ross idea to consider (not a decision): a small header dropdown under Menu with Café and Restaurant, each jumping to that side of the one Menu page, within Decision 033. Weigh it against added complexity on mobile. Uber Eats listing (delivery subset, 7 items) is reference only; see `content-status.md`.
- 2026-10-30 — Implemented on `codex/refine-menu-experience` from baseline `5a8ef33` at `site/selected-menu/`, with minimal selected-Home links into the review page. Chose persistent native Café/Restaurant anchors instead of the optional header dropdown: both menus stay visible, deep-linkable and keyboard accessible without duplicated navigation or JavaScript state. All unconfirmed content remains explicitly labelled as a question/content slot; no provisional menu data or photography is used. Structural tests pass. Real-browser review covered 320, 390, 480, 768, 1024 and 1440 CSS-pixel widths plus deep links, Back, visible focus, long wrapping and 160% zoom/reflow at 390px. Awaiting Ross review; this is not approval or merge confirmation.
- 2026-10-31 — Ross review outcome: **direction accepted with refinements.** PRs #16 and #17 are both merged. `site/selected-menu/` is the base going forward: native anchors, both menus visible, no JavaScript and no header dropdown. The anchor links, deep-green Restaurant band and placeholder treatment were reviewed at 1440 and 390 CSS px and are accepted. Ross's `site/menu-ross/` stays on `main` as comparison evidence only. Changes requested before this ticket is complete:
  1. **Switch hides the current context.** The sticky switch always styles Café solid green and Restaurant outlined, so it reads as "Café selected" while the Restaurant section is in view (seen at 390px on `#restaurant-menu`). Style both options neutrally or indicate the section in view. The "Switching is predictable" criterion is unchecked until this is fixed.
  2. **Sticky switch background.** `rgb(255 255 255 / 96%)` lets item text show faintly through the bar on mobile. Make it opaque.
  3. **Café content.** Bring the Café categories and items from `site/menu-ross/` (2024 printed menu transcription) into the Café section. Keep its "from the 2024 printed menu: still current?" question and `$?` price-to-confirm treatment. Add no prices or specials; the Restaurant side stays as content slots.
  These refinements do not block Ticket 09, which may proceed in parallel.
- 2026-10-31 — Implemented all three requested refinements on `codex/ticket-08-menu-refinements` from `origin/main` baseline `664c90d`. The sticky Café and Restaurant links now use neutral white treatments with their existing green/red distinction, the sticky background is fully opaque, and the complete Café transcription from `site/menu-ross/` is rendered as 2024 provisional content with `$?` prices and visible confirmation questions. Restaurant content remains unresolved placeholders. Focused tests pass 9/9; a source-parity check matched all 40 Café item names and all 40 `$?` slots between the Ross reference and selected Menu. Real-browser review covered 320, 390, 480, 768, 1024 and 1440 CSS-pixel widths plus both direct anchors, browser Back, sticky behaviour, focus visibility, wrapping and overflow. A separate Standards review identified and corrected one CSS cascade-order issue that had made the Restaurant hover inherit Café green; the final pass found no remaining departure from repository instructions, the static/no-dependency architecture or provenance rules. A separate Spec review found all three requested refinements satisfied and no Ticket 09 scope added. PR #19 remains the source of its Visit/booking integration while open; this branch does not overwrite or claim those changes. Awaiting Ross review; this is not approval or merge confirmation.
