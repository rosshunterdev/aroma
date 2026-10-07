# Handover — Aroma Coffee Rebuild

As of Session 8 (2026-10-07).

## Product discovery — 2026-10-03 onward

Work is on `codex/product-discovery`. Product discovery, the specification as a planning baseline and the phased ticket plan have been reviewed; individual product choices retain their approved/proposed statuses in `decisions.md`. The specification is at `.scratch/final-site/spec.md` and the 26 tickets are under `.scratch/final-site/issues/`. Do not begin concept implementation until the reconciled planning PR is reviewed again.

PR #4 is merged into `main`. Publishable website and browser-review concept artifacts live under `site/`, `netlify.toml` publishes only that folder, and documentation/specifications/tickets remain outside it. Options A, B and C remain unchanged under `site/redesign/`; new planning concepts will use `site/concepts/`. Shared decisions occupy IDs 010–013 and this branch's planning decisions start at 014.

Phase A produces three equally mature, responsive, noindex Home-page concepts using one shared content structure. Ross's Options A and C are quality benchmarks rather than templates. Ross reviews the combined pool, curates the strongest two or three total concepts for Phillip, and only the selected direction proceeds to whole-site refinement. Use “Aroma Coffee” provisionally until Phillip confirms the trading name. See `docs/product-discovery.md` for the discovery record and `content-status.md` for provenance.

## Current state

Three "Kiwi" homepage comps exist for Phillip's 2026-10-05 brief (decisions 011, 013). Ross and Ben both prefer Option A. Ross will show Phillip in person next week, only once he is happy with the designs; a friend reviews the links afterwards.

| Item | Status |
|------|--------|
| `site/redesign/option-a.html` | Built. "Park Kitchen close". Preferred by Ross and Ben. |
| `site/redesign/option-b.html` | Built. "Warmer Kiwi". Ross: not up to A's standard. |
| `site/redesign/option-c.html` | Built Session 8. Swimsuit-inspired: split hero, dotted rules, giant AROMA footer. Ross: "looks good", deeper review pending. |
| `site/draft.html`, `menu.html`, `contact.html` | Decision 010 structure, old brown/cream styling. Not restyled. |
| `site/index.html` | Temporary public landing page. Unchanged. |
| `phillip.md` | Questions to ask Phillip. |

- A and B switchers do not link to C (kept untouched on purpose); C's switcher links to all three.
- Serve locally with `npx serve site` (Session 8 used port 5179).

**Preview links (PR #4):**
- https://deploy-preview-4--aromacoffeemiramar.netlify.app/redesign/option-a.html
- https://deploy-preview-4--aromacoffeemiramar.netlify.app/redesign/option-c.html
- Tell viewers: "See the day menu" opens the old brown menu page; only the homepage is redesigned.

**PR #5 (Ben/Codex, `codex/product-discovery`):** final-site spec + 26 tickets. Ross's (edited) review: Codex may make its own three concepts, with A and C as the bar; Ross picks which 2–3 designs reach Phillip; Home-only first for timing. Before Phase A: build inside `site/`, number decisions from 014, mark unagreed items (e.g. no Menu nav) as proposals, `needs-human`/`blocked` statuses and owners on tickets, "Aroma Coffee" until trading name confirmed.

**PR #3:** closed unmerged (old draft is being left behind). Its commits ride along inside #4, harmless.

**PR #4:** merged into `main` as `bdda5c1`; this planning branch has been rebased onto that baseline.

## Verified

- Option C: Playwright (Chromium) `check.js` pass at 1440; headings/overflow/copy audit at 390; no overflow at 320; footer focus ring visible; screenshots reviewed.
- PR #4 preview: A/B/C 200, every doc 404, Schibsted Grotesk loads.
- PR #5 review: `gh pr review` exited cleanly; not visually confirmed on GitHub.
- Not verified: real phones, screen readers, non-Chromium browsers.

## Next steps

1. Ross/Claude: complete final review of rebased PR #5.
2. After explicit approval, begin Ticket 01's shared Home concept content/structure pack; new concept artifacts belong under `site/concepts/`.
3. Branch cleanup: delete merged `codex/under-construction-page`, `codex/onboarding-continuity`, `feature/site-structure-proposal`, and `feature/redesign-options` only with Ross's explicit go-ahead.
4. Ross: deeper review of Option C (and A), noting what to change. (30 min)
5. Ross: curate 2–3 designs from his and Codex's combined pool for Phillip; ask the `phillip.md` questions during client review.

## Blockers / waiting on

- Ross: deeper review of C; which comp(s) go to Phillip.
- Ben/Ross/Claude: final PR #5 review before Ticket 01 begins; pricing split remains a separate owner discussion.
- Phillip: direction pick; restaurant menu, hours, start date; Vietnamese specials; hero sentence, photos, phone, email, hours, socials, domain control (all in `phillip.md`).

## Concerns

- Parallel-design ownership is resolved for Phase A: Codex creates three Home concepts under `site/concepts/`; Ross preserves and curates the combined pool with Options A/B/C.
- `check.js` Option A red-outline check is skipped when served by `npx serve` (URL has no `.html`); Session 7's pass may not have tested it. Use `includes('option-a')`.
- Option C was built quickly in one pass; only Ross's quick look so far. "See the day menu" appears twice on C (hero and Menus).
- Pricing notes are in git history (Session 6). Repo is private; keep pricing out of tracked files.
- Deferred minors: `check.js` copy audit is substring-based; `headingFont` reads the declared stack; A/B announce the Vietnamese tag before the dish name (fixed in C).
- Docs drift (minor, carried): decision 007 heading still says "(PROPOSED)"; phone entry uses "UNRESOLVED".

## Git state

- `main`: includes merged PR #4 at `bdda5c1`.
- `feature/site-structure-proposal`: PR #3 closed unmerged; commits contained in #4.
- `feature/redesign-options`: PR #4 merged; Options A/B/C now live under `site/redesign/` on `main`.
- `codex/product-discovery`: Ben's PR #5, open and rebased onto merged PR #4; awaiting final review.
- Local only, gitignored: `NEXT-ACTIONS.md`, `docs/park-kitchen-reference.png`, `.playwright-mcp/` screenshots, `.superpowers/sdd/plan/` (stale, safe to delete).

## Key files

- `decisions.md`: shared decisions 001–013, Codex planning decisions 014–031 and the open phone-number issue
- `.scratch/redesign/`: spec, plan, `check.js` (A/B/C)
- `phillip.md`: client questions; answers go to `content-status.md`
- `content-status.md`: content provenance, including the 2026-10-05 meeting
