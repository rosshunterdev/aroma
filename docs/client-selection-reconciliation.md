# Client selection and Phase B reconciliation

**Reconciled:** 2026-10-27

**Baseline:** `origin/main` at `21ef694` after PRs #8–#11 merged and PR #12 was rebased

**Purpose:** Preserve the evidence for Phillip's concept selection and align the planning baseline before any selected-direction implementation.

## Repository state found

- `origin/main` now includes PR #8 Warm Neighbourhood, PR #9 Refined Minimal, PR #10 Day-to-night Aroma and PR #11's Option A reference photograph, on top of the earlier Ross/Claude Options A/B/C, shared concept content pack, Decision 033 and original 26-ticket plan.
- All three Codex concept implementations now live under `site/concepts/` on `main`. They remain Phase A review artifacts, not production direction.
- `origin/meeting/phillip-concepts` combines Refined Minimal and Warm Neighbourhood with Ross Option A and adds the offline presenter used for the client meeting.
- PR #11 merged a provisional counter photograph into Option A after selection. That photograph is reference material, not the final Ross photography requested by Phillip.
- `site/index.html` remains the temporary public homepage. The publication boundary remains `site/` only. PR #12 changes no client-facing website source relative to this current baseline.

## Exact presentation mapping

The durable presenter at commit `c339cde` (`origin/meeting/phillip-concepts:site/present/index.html`) defines this order:

| Client presenter label | Exact artifact | Source branch / PR |
| --- | --- | --- |
| Design 1 | `site/concepts/refined-minimal/index.html` | `main`, merged through PR #9 |
| Design 2 | `site/redesign/option-a.html` | `main`; meeting copy on `origin/meeting/phillip-concepts`; reference photo merged through PR #11 |
| Design 3 | `site/concepts/warm-neighbourhood/index.html` | `main`, merged through PR #8 |

PR #11 independently says: “Phillip chose Option A (Design 2) at the 2026-10-20 meeting.” Together, these sources establish that the newly relayed “Option 2” is presenter Design 2 / Ross Option A, and “Option 3” is Warm Neighbourhood. Ticket numbers and PR numbers are not client option numbers.

The Day-to-night Aroma concept in PR #10 was not part of the three-item meeting presenter.

## Client decision and design criterion

Phillip selected Design 2 / Option A as the overall direction because its information presentation is basic, clear and easy to understand. Design 3 is secondary inspiration because he liked its more special/distinctive design treatment.

Phase B therefore starts from Design 2's structure and clarity. It may explore bounded traits from Design 3 only when they add personality without obscuring information or complicating journeys. No specific Design 3 component is approved for reuse yet.

“Clarity first” means:

- immediate understanding of what Aroma offers;
- obvious Menu access;
- an unmistakable Café/Restaurant distinction within the Menu experience;
- readable typography and clear hierarchy;
- understandable actions and predictable navigation;
- restrained interaction; and
- no decorative treatment that hides practical information.

## Information architecture and content reconciliation

- Decision 033 remains current: `Aroma · Menu · Visit`; About is deferred.
- Menu remains one destination with specials first, a Café/Restaurant switch and Café first.
- Phillip has now confirmed that the Café and Restaurant sides contain different menu content. This does not create two top-level Menu pages.
- Exact Café and Restaurant items, descriptions, prices and availability remain unconfirmed. Phillip is reviewing his current menu photographs and may send suitable/current source material.
- Phillip wants Ross to take new photography. Ross owns that action; final approved assets do not yet exist.
- Domain-login access is unavailable because the former credential holder lost it. The agency has been asked to recover access, which should then be given to Ross. This blocks domain ownership verification and cutover, not Phase B design refinement.

## Merged concept history

- **PR #8:** merged Warm Neighbourhood / presenter Design 3. It remains secondary design evidence; it is not the selected production baseline.
- **PR #9:** merged Refined Minimal / presenter Design 1. It remains unselected Phase A evidence.
- **PR #10:** merged Day-to-night Aroma. It remains Phase A evidence and was not part of the meeting presenter.
- **PR #11:** merged the provisional counter reference photograph into selected Option A / presenter Design 2. The image is not the final Ross photography requested by Phillip.
- **`origin/meeting/phillip-concepts`:** remains the durable mapping/presentation record. Its presentation-only shell is not the production baseline.

The presence of all concepts on `main` preserves design history; it does not change Phillip's selection or authorize unselected concepts as production direction.

## Phase gates and next work

Tickets 05 and 06 are complete because Ross curated the three-item presenter and Phillip selected Design 2. Ticket 07 is the next executable ticket once this reconciliation PR merges. It is unblocked because the selected artifact and governing clarity criterion are now known; it must still use labelled placeholders for unresolved content and photography.

Phase B ticket intent is now:

1. **07:** refine the selected Option A system and Home, testing only bounded compatible influence from Design 3;
2. **08:** refine the single Menu experience, including specials and a clear Café/Restaurant switch with genuinely distinct content;
3. **09:** refine Visit and the Restaurant booking path using placeholders for unconfirmed facts;
4. **10:** reconcile the deferred About strategy and document the later gate rather than designing an unsupported About page;
5. **11–12:** Ross and Phillip review the coherent selected direction before production implementation.

Production content, final photography, domain access and release approval remain human dependencies and are not reasons to delay Ticket 07.
