# Handover — Aroma Coffee Rebuild

As of Session 8 (2026-10-07).

## Product discovery — 2026-10-03 onward

Work is on `codex/product-discovery`. Product discovery and the finished-site specification are approved as a planning baseline; individual product choices retain their approved/proposed status in `decisions.md`. The specification is at `.scratch/final-site/spec.md` and the phase-gated ticket plan is under `.scratch/final-site/issues/`. Do not begin concept implementation until the rebased planning PR receives final review. Phillip's 2026-10-05 client direction supersedes the early draft's visual assumptions: minimalist Kiwi-oriented styling, green primary, red secondary, white background, selective Vietnamese accents, and distinct Café/Restaurant offerings. See `docs/product-discovery.md` for the discovery record and `content-status.md` for provenance. Options A, B and C are preserved under `site/redesign/` as design evidence.

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

**PR #4:** to be renamed and marked ready, then merged once Ben replies (message sent asking; he then rebases #5 onto `main`). Merging stops production serving docs.

## Verified

- Option C: Playwright (Chromium) `check.js` pass at 1440; headings/overflow/copy audit at 390; no overflow at 320; footer focus ring visible; screenshots reviewed.
- PR #4 preview: A/B/C 200, every doc 404, Schibsted Grotesk loads.
- PR #5 review: `gh pr review` exited cleanly; not visually confirmed on GitHub.
- Not verified: real phones, screen readers, non-Chromium browsers.

## Next steps

1. Ben replies yes → Ross merges PR #4 → verify production returns 404 for docs. Ben then rebases #5.
2. Branch cleanup: delete merged `codex/under-construction-page`, `codex/onboarding-continuity`, `feature/site-structure-proposal`, and `feature/redesign-options` after #4 merges (needs Ross's explicit go-ahead).
3. Ross: deeper review of Option C (and A), noting what to change. (30 min)
4. Ross: send the friend the C (and A) preview links with the brown-menu note. (2 min)
5. Claude: apply Ross's review changes; roll the chosen direction to `menu.html` and `contact.html` before the Phillip meeting (about 2–2.5 hrs after the pick).
6. Ross: pick 2–3 designs (his and Codex's); show Phillip in person next week; ask the `phillip.md` questions.

## Blockers / waiting on

- Ross: deeper review of C; which comp(s) go to Phillip.
- Ben: OK to merge PR #4; reply to PR #5 review; pricing split with Ross.
- Phillip: direction pick; restaurant menu, hours, start date; Vietnamese specials; hero sentence, photos, phone, email, hours, socials, domain control (all in `phillip.md`).
- Production and PR #3 preview still serve docs publicly until `site/` reaches `main`.

## Concerns

- Decision numbering will clash when PR #5 merges (it uses 010–027; ours run to 013). Renumbering requested in review.
- PR #5 and Claude's comps risk parallel, duplicated design work if ownership isn't agreed.
- `check.js` Option A red-outline check is skipped when served by `npx serve` (URL has no `.html`); Session 7's pass may not have tested it. Use `includes('option-a')`.
- Option C was built quickly in one pass; only Ross's quick look so far. "See the day menu" appears twice on C (hero and Menus).
- Pricing notes are in git history (Session 6). Repo is private; keep pricing out of tracked files.
- Deferred minors: `check.js` copy audit is substring-based; `headingFont` reads the declared stack; A/B announce the Vietnamese tag before the dish name (fixed in C).
- Docs drift (minor, carried): decision 007 heading still says "(PROPOSED)"; phone entry uses "UNRESOLVED".

## Git state

- `main`: unchanged since PR #2 merge (`4f84c62`).
- `feature/site-structure-proposal`: PR #3 closed unmerged; commits contained in #4.
- `feature/redesign-options`: PR #4, includes Session 8 docs commit; awaiting Ben's OK to merge.
- `codex/product-discovery`: Ben's PR #5, open; to rebase after #4.
- Local only, gitignored: `NEXT-ACTIONS.md`, `docs/park-kitchen-reference.png`, `.playwright-mcp/` screenshots, `.superpowers/sdd/plan/` (stale, safe to delete).

## Key files

- `decisions.md`: 001–013 and the open phone-number issue
- `.scratch/redesign/`: spec, plan, `check.js` (A/B/C)
- `phillip.md`: client questions; answers go to `content-status.md`
- `content-status.md`: content provenance, including the 2026-10-05 meeting
