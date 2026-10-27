# 07: Refine the selected system and Home experience

**What to build:** Refine presenter Design 2 / Ross Option A into the selected shared visual system and Home design. Preserve its basic, clear information presentation; explore only bounded compatible qualities from Design 3 / Warm Neighbourhood where they add personality without reducing clarity.

**Blocked by:** 06: Obtain Phillip's concept selection.

**Owner:** Ben/Codex

**Status:** complete

- [x] Shared colour, typography, spacing, interaction and responsive rules begin from Option A rather than indiscriminately merging concepts.
- [x] Home makes Aroma's offer immediately understandable, exposes Menu and Visit predictably and contains no Food/Coffee/Tea carousel.
- [x] Any explored Design 3 influence is identified explicitly and rejected when it weakens hierarchy, legibility or customer journeys.
- [x] Mobile uses `Aroma · Menu · Visit`; Menu access and the Café/Restaurant distinction are obvious.
- [x] Review artifacts distinguish approved decisions from production content and photography placeholders; final photography is not invented.

## Comments

- 2026-10-27 — Unblocked by the evidence-backed selection. Start only after the reconciliation PR merges; final photography and exact menus are parallel human dependencies, not Ticket 07 blockers.
- 2026-10-27 — Implementation location: `site/selected-home/`. This review-only path preserves `site/index.html`, Ross Option A and every Phase A concept as historical evidence. The first pass keeps Option A's direct header, four-section order, square actions and linear hierarchy. It tests three bounded Warm Neighbourhood traits: serif display typography, restrained red/index details and a deep-green Visit band. Its asymmetric offering sequence and staggered highlight cards were rejected because they weaken predictable scanning.
- 2026-10-27 — Browser-reviewed after a genuine second visual pass at 320, 390, 480, 768, 1024 and 1440 CSS pixels. The pass corrected an over-tall mobile hero crop and a hidden highlight label. Checks found no horizontal overflow, all tested interactive targets at least 44px high, one logical `h1`, intact landmarks/fragments/assets, visible keyboard focus, no browser console errors and palette contrast from 6.01:1 to 12.47:1 for the tested text pairs.
- 2026-10-27 — Two-axis review against `origin/main`: Standards found stale `README.md`/`HANDOVER.md` state and Spec found repeated “Future action” annotations. Both findings were resolved before review-ready status. No code-smell or additional specification findings were reported.
- 2026-10-28 — Ross review outcome: approved and merged (PR #13). Ross changed typography to Figtree throughout to match Option A (his preference; `--serif` now points to Figtree, so serif display type can be revisited when Phillip compares) and removed the internal "First" note from the Café label. Hero actions kept as "Explore the Café / Restaurant" while the phone number is unconfirmed. Phillip's comparison against Option A is pending via the review switcher (PR #14) and does not block Ticket 08.
