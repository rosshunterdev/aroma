# Client selection and Phase B reconciliation

**Reconciled:** 2026-10-27  
**Baseline:** `origin/main` at `03948b2` after `git fetch --prune origin`  
**Purpose:** Preserve the evidence for Phillip's concept selection and align the planning baseline before any selected-direction implementation.

## Repository state found

- `origin/main` still ends at PR #7. It contains Ross/Claude Options A/B/C under `site/redesign/`, the shared concept content pack, Decision 033 and the original 26-ticket plan.
- Three completed Codex concept implementations remain in open PRs rather than `main`: PR #8 Warm Neighbourhood, PR #9 Refined Minimal and PR #10 Day-to-night Aroma.
- `origin/meeting/phillip-concepts` combines Refined Minimal and Warm Neighbourhood with Ross Option A and adds the offline presenter used for the client meeting.
- PR #11, based on `origin/feature/option-a-hero-photo`, adds a provisional counter photograph to Option A after selection. That photograph is reference material, not the final Ross photography requested by Phillip.
- `site/index.html` remains the temporary public homepage. The current publication boundary remains `site/` only. This reconciliation changes no client-facing website source.

## Exact presentation mapping

The durable presenter at commit `c339cde` (`origin/meeting/phillip-concepts:site/present/index.html`) defines this order:

| Client presenter label | Exact artifact | Source branch / PR |
| --- | --- | --- |
| Design 1 | `site/concepts/refined-minimal/index.html` | `origin/codex/concept-refined-minimal`, PR #9 |
| Design 2 | `site/redesign/option-a.html` | Already on `main`; meeting copy on `origin/meeting/phillip-concepts` |
| Design 3 | `site/concepts/warm-neighbourhood/index.html` | `origin/codex/concept-warm-neighbourhood`, PR #8 |

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

## Concept PR disposition

- **PR #11 (selected Option A reference photograph):** do not merge it merely to establish the selection; Option A itself is already on `main`. Keep the PR available as selected-direction/reference-photography evidence. Rebase or deliberately incorporate only the useful image evidence during Phase B, after Ross confirms how the selected artifact should be preserved.
- **PR #8 (Warm Neighbourhood / Design 3):** keep open until this reconciliation is reviewed, then close without merging to production. Retain its branch/preview as secondary design evidence for bounded refinement exploration.
- **PR #9 (Refined Minimal / Design 1):** close without merging after reconciliation review; retain the branch/preview as Phase A history.
- **PR #10 (Day-to-night):** close without merging after reconciliation review; retain the branch/preview as Phase A history. It was not in the meeting presenter.
- **`origin/meeting/phillip-concepts`:** retain as the durable mapping/presentation record. It should not become the production baseline because it combines multiple review concepts and presentation-only assets.

No concept PR should be merged simply to collect every experiment on `main`.

## Phase gates and next work

Tickets 05 and 06 are complete because Ross curated the three-item presenter and Phillip selected Design 2. Ticket 07 is the next executable ticket once this reconciliation PR merges. It is unblocked because the selected artifact and governing clarity criterion are now known; it must still use labelled placeholders for unresolved content and photography.

Phase B ticket intent is now:

1. **07:** refine the selected Option A system and Home, testing only bounded compatible influence from Design 3;
2. **08:** refine the single Menu experience, including specials and a clear Café/Restaurant switch with genuinely distinct content;
3. **09:** refine Visit and the Restaurant booking path using placeholders for unconfirmed facts;
4. **10:** reconcile the deferred About strategy and document the later gate rather than designing an unsupported About page;
5. **11–12:** Ross and Phillip review the coherent selected direction before production implementation.

Production content, final photography, domain access and release approval remain human dependencies and are not reasons to delay Ticket 07.
