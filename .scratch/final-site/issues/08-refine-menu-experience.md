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
