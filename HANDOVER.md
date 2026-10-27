# Handover — Aroma Coffee Rebuild

As of the client-selection reconciliation on 2026-10-27.

## Current state

Phase A concept comparison is complete. Phillip selected the meeting presenter's **Design 2**, which is Ross Option A at `site/redesign/option-a.html`, because its information presentation is basic and clear. He also liked **Design 3**, Warm Neighbourhood, for its more special/distinctive treatment. Option A is the baseline; Warm Neighbourhood is secondary inspiration only where clarity is preserved.

Decision 033 remains the current information architecture: **Aroma · Menu · Visit**. Menu is one page with specials first, a Café/Restaurant switch and Café first. Phillip has now confirmed that the Café and Restaurant sides contain different menu content. About remains deferred.

The exact mapping, branch/PR archaeology and concept-PR disposition are in `docs/client-selection-reconciliation.md`.

| Item | Status |
| --- | --- |
| `site/index.html` | Temporary public landing page; unchanged by reconciliation. |
| `site/redesign/option-a.html` | Selected overall direction; already on `main`. |
| `origin/meeting/phillip-concepts` | Durable meeting presenter: Design 1 Refined Minimal, Design 2 Option A, Design 3 Warm Neighbourhood. |
| PR #8 | Merged Warm Neighbourhood / Design 3 into `main`; secondary design evidence, not selected baseline. |
| PR #9 | Merged Refined Minimal / Design 1 into `main`; unselected Phase A evidence. |
| PR #10 | Merged Day-to-night into `main`; Phase A evidence not included in the meeting presenter. |
| PR #11 | Merged a provisional counter reference photo into selected Option A; not final photography. |
| `.scratch/final-site/` | Specification and ticket graph reconciled to Decisions 033–035. |

## Next executable work

After the reconciliation PR merges, Ticket 07 is `ready-for-agent`: refine the selected Option A system and Home. It is unblocked because the exact selected artifact and clarity-first criterion are known. Use labelled placeholders for unresolved facts/assets; do not begin from a blend of concepts.

Phase B then proceeds through:

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

- Reconciliation branch: `codex/client-selection-phase-b`, rebased onto `origin/main` at `21ef694` after PRs #8–#11 merged.
- Netlify publishes only `site/`; repository documentation remains outside the published output.
- No client-facing HTML, CSS, JavaScript, assets or temporary homepage source changed in this reconciliation.
- All Phase A concept PRs are now merged. Treat their `site/concepts/` artifacts as historical review evidence; only Option A is the selected Phase B baseline.

## Key records

- `docs/client-selection-reconciliation.md` — selection mapping, evidence and PR disposition
- `decisions.md` — Decisions 033–035 govern navigation, selection and menu relationship
- `content-status.md` — fact and asset provenance
- `phillip.md` / `TODO.md` — remaining client and operational dependencies
- `.scratch/final-site/spec.md` / `issues/` — reconciled programme and executable tickets
