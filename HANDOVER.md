# Handover — Aroma Coffee Rebuild

As of the Ticket 07 selected-Home refinement on 2026-10-27.

## Current state

Phase A concept comparison is complete. Phillip selected the meeting presenter's **Design 2**, which is Ross Option A at `site/redesign/option-a.html`, because its information presentation is basic and clear. He also liked **Design 3**, Warm Neighbourhood, for its more special/distinctive treatment. Option A is the baseline; Warm Neighbourhood is secondary inspiration only where clarity is preserved.

Decision 033 remains the current information architecture: **Aroma · Menu · Visit**. Menu is one page with specials first, a Café/Restaurant switch and Café first. Phillip has now confirmed that the Café and Restaurant sides contain different menu content. About remains deferred.

Ticket 07 is review-ready at `site/selected-home/`. It preserves Option A's direct structure and tests only bounded Warm Neighbourhood influence: serif display typography, restrained red/index details and a deep-green Visit band. It remains a noindex review artifact with explicit copy, fact and photography questions; the temporary public homepage is unchanged.

The exact mapping, branch/PR archaeology and concept-PR disposition are in `docs/client-selection-reconciliation.md`.

| Item | Status |
| --- | --- |
| `site/index.html` | Temporary public landing page; unchanged by reconciliation. |
| `site/selected-home/` | Ticket 07 selected Home refinement; review-ready, noindex and not linked from the temporary homepage. |
| `site/redesign/option-a.html` | Selected overall direction; already on `main`. |
| `origin/meeting/phillip-concepts` | Durable meeting presenter: Design 1 Refined Minimal, Design 2 Option A, Design 3 Warm Neighbourhood. |
| PR #8 | Merged Warm Neighbourhood / Design 3 into `main`; secondary design evidence, not selected baseline. |
| PR #9 | Merged Refined Minimal / Design 1 into `main`; unselected Phase A evidence. |
| PR #10 | Merged Day-to-night into `main`; Phase A evidence not included in the meeting presenter. |
| PR #11 | Merged a provisional counter reference photo into selected Option A; not final photography. |
| `.scratch/final-site/` | Specification and ticket graph reconciled to Decisions 033–035. |

## Current review gate

Ross and Phillip should review Ticket 07 before the selected system expands. Ticket 08 must not start from this branch or before the Ticket 07 review outcome is recorded.

After Ticket 07 approval, Phase B proceeds through:

1. Ticket 08 — refine the shared Menu experience;
2. Ticket 09 — refine Visit and the Restaurant booking journey;
3. Ticket 11 — Ross refinement review;
4. Ticket 12 — Phillip design approval.

Ticket 10 records About as deferred and is not on the current Phase B critical path.

## Human dependencies

- **Photography:** Phillip wants Ross to take new photography. Ross owns the shoot; Phillip approves the final assets. No final approved photography exists yet.
- **Menu source:** Phillip is reviewing existing menu photographs and may send suitable/current material. Exact Café and Restaurant menus remain unconfirmed.
- **Domain:** credentials are unavailable because the former holder lost them. The agency is recovering access; Ross should receive access afterward. This blocks ownership verification and final cutover, not design refinement.
- **Other client facts:** Restaurant name/status/hours/booking, Café hours, contact details, story, Vietnamese highlights, trading name and socials remain unresolved in `phillip.md` and `TODO.md`.

## Git and publication boundaries

- Ticket 07 branch: `codex/refine-selected-home`, based on `origin/main` at merged PR #12 (`6f8e2b6`).
- Netlify publishes only `site/`; repository documentation remains outside the published output.
- Ticket 07 adds only the review path `site/selected-home/`; `site/index.html`, Ross Option A and Phase A concept artifacts remain unchanged.
- All Phase A concept PRs are now merged. Treat their `site/concepts/` artifacts as historical review evidence; only Option A is the selected Phase B baseline.

## Key records

- `docs/client-selection-reconciliation.md` — selection mapping, evidence and PR disposition
- `decisions.md` — Decisions 033–035 govern navigation, selection and menu relationship
- `content-status.md` — fact and asset provenance
- `phillip.md` / `TODO.md` — remaining client and operational dependencies
- `.scratch/final-site/spec.md` / `issues/` — reconciled programme and executable tickets
