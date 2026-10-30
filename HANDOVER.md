# Handover — Aroma Coffee Rebuild

As of the Ticket 08 implementation handoff on 2026-10-30.

## Current state

Phase A concept comparison is complete. Phillip selected the meeting presenter's **Design 2**, which is Ross Option A at `site/redesign/option-a.html`, because its information presentation is basic and clear. He also liked **Design 3**, Warm Neighbourhood, for its more special/distinctive treatment. Option A is the baseline; Warm Neighbourhood is secondary inspiration only where clarity is preserved.

Decision 033 remains the current information architecture: **Aroma · Menu · Visit**. Menu is one page with specials first, a Café/Restaurant switch and Café first. Phillip has now confirmed that the Café and Restaurant sides contain different menu content. About remains deferred.

Ticket 07 is complete and merged (PR #13) at `site/selected-home/`. It preserves Option A's direct structure with bounded Warm Neighbourhood influence: restrained red/index details and a deep-green Visit band. Ross switched its typography to Figtree throughout to match Option A; serif display type can be revisited later. It remains a noindex review artifact with explicit copy, fact and photography questions; the temporary public homepage is unchanged.

A "Compare designs" switcher (PR #14) links Option A and `site/selected-home/` so Phillip can compare them. His preference is pending and does not block Ticket 08. The switcher is review scaffolding: remove it before either page becomes the live homepage.

Ticket 08 is implemented and awaiting Ross review at `site/selected-menu/`. The review-only page presents specials first, then a persistent native-anchor choice between a Café-first section and a visually distinct Restaurant section. Both menus remain in the document, so deep links, browser Back and keyboard navigation work without JavaScript or hidden content. The header stays simple: the optional Café/Restaurant dropdown was not adopted because it would duplicate the clear on-page navigation and add touch/keyboard complexity. The selected Home review now links its Menu navigation and both offering cards to the relevant Menu anchors.

All Menu names, categories, items, descriptions, prices, specials, availability and photography remain explicit question/content slots. No provisional menu transcription, delivery listing or unapproved image has been promoted into the review design.

The exact mapping, branch/PR archaeology and concept-PR disposition are in `docs/client-selection-reconciliation.md`.

| Item | Status |
| --- | --- |
| `site/index.html` | Temporary public landing page; unchanged by reconciliation. |
| `site/selected-home/` | Ticket 07 selected Home refinement; merged, noindex and not linked from the temporary homepage. |
| `site/selected-menu/` | Ticket 08 shared Menu refinement; awaiting review, noindex and linked only from selected Home. |
| `site/redesign/option-a.html` | Selected overall direction; already on `main`. Its old A/B bar is now the compare switcher. |
| `origin/meeting/phillip-concepts` | Durable meeting presenter: Design 1 Refined Minimal, Design 2 Option A, Design 3 Warm Neighbourhood. |
| PR #8 | Merged Warm Neighbourhood / Design 3 into `main`; secondary design evidence, not selected baseline. |
| PR #9 | Merged Refined Minimal / Design 1 into `main`; unselected Phase A evidence. |
| PR #10 | Merged Day-to-night into `main`; Phase A evidence not included in the meeting presenter. |
| PR #11 | Merged a provisional counter reference photo into selected Option A; not final photography. |
| `.scratch/final-site/` | Specification and ticket graph reconciled to Decisions 033–035. |

## Current review gate

Ross reviewed and approved Ticket 07 on 2026-10-28. **Ticket 08 now awaits Ross review.** Phillip's Option A vs refined comparison continues in parallel. Do not start Ticket 09 until the Ticket 08 outcome is recorded.

Phase B proceeds through:

1. Ticket 08 — Ross review of the shared Menu refinement;
2. Ticket 09 — refine Visit and the Restaurant booking journey after Ticket 08 is accepted;
3. Ticket 11 — Ross refinement review;
4. Ticket 12 — Phillip design approval.

Ticket 10 records About as deferred and is not on the current Phase B critical path.

## Human dependencies

- **Photography:** Phillip wants Ross to take new photography. Ross owns the shoot; Phillip approves the final assets. No final approved photography exists yet.
- **Menu source:** Phillip is reviewing existing menu photographs and may send suitable/current material. Exact Café and Restaurant menus remain unconfirmed. An Uber Eats listing (7 delivery items) and public Google/DoorDash photos are reference only until Phillip confirms them; see `content-status.md`.
- **Domain:** credentials are unavailable because the former holder lost them. The agency is recovering access; Ross should receive access afterward. This blocks ownership verification and final cutover, not design refinement.
- **Other client facts:** Restaurant name/status/hours/booking, Café hours, contact details, story, Vietnamese highlights, trading name and socials remain unresolved in `phillip.md` and `TODO.md`.

## Git and publication boundaries

- Ticket 07 merged via PR #13 (`7a5770d`); compare switcher merged via PR #14 (`3933a28`).
- Ticket 08 was built from `origin/main` at `5a8ef33` on branch `codex/refine-menu-experience`; its PR and review outcome remain to be recorded.
- Netlify publishes only `site/`; repository documentation remains outside the published output.
- `site/index.html` and Phase A concept artifacts remain unchanged.
- All Phase A concept PRs are now merged. Treat their `site/concepts/` artifacts as historical review evidence; only Option A is the selected Phase B baseline.

## Ticket 08 verification

- Automated structural tests cover information order, noindex boundaries, provenance-safe placeholders, native fragment links, selected Home entry points, one `h1`, unique IDs, fragment targets, focus styles and responsive/reduced-motion rules.
- Real-browser visual review covered 320, 390, 480, 768, 1024 and 1440 CSS-pixel widths. A second pass covered the selected Home links, sticky switch, Café/Restaurant deep links, browser Back, visible keyboard focus, long-description wrapping and 160% text zoom/reflow at 390px.
- The implementation uses no JavaScript, framework or new dependency. A later audit should still include NVDA/VoiceOver and automated accessibility tooling before launch; this review is not a WCAG certification.

## Key records

- `docs/client-selection-reconciliation.md` — selection mapping, evidence and PR disposition
- `decisions.md` — Decisions 033–035 govern navigation, selection and menu relationship
- `content-status.md` — fact and asset provenance
- `phillip.md` / `TODO.md` — remaining client and operational dependencies
- `.scratch/final-site/spec.md` / `issues/` — reconciled programme and executable tickets
