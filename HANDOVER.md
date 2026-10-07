# Handover — Aroma Coffee Rebuild

As of Session 8 (2026-10-07).

## Current state

Design is in Phase A: Home-page concepts only. Ross's three comps (A, B, C) are on `main` and live at `/redesign/` (noindex, unlinked). Ben's planning PR #5 is merged: Codex now builds three Home concepts of its own under `site/concepts/`, starting with ticket 01. Ross then curates 2–3 designs from the combined pool and shows Phillip in person next week; a friend reviews links afterwards.

| Item | Status |
|------|--------|
| `site/redesign/option-a.html` | Built. "Park Kitchen close". Preferred by Ross and Ben. |
| `site/redesign/option-b.html` | Built. "Warmer Kiwi". Ross: not up to A's standard. |
| `site/redesign/option-c.html` | Built Session 8. Swimsuit-inspired. Ross: "looks good", deeper review pending. |
| `site/concepts/` | Not started. Codex's three Home concepts (tickets 02–04). |
| `.scratch/final-site/spec.md` + `issues/` | Ben's final-site spec and 26 tickets (merged via PR #5). |
| `docs/product-discovery.md`, `GLOSSARY.md` | Ben's discovery record and terms. |
| `site/draft.html`, `menu.html`, `contact.html` | Old draft; being left behind (PR #3 closed). |
| `site/index.html` | Temporary public landing page. Unchanged, live. |
| `phillip.md` | Questions to ask Phillip. |

- Netlify publishes only `site/` (012). GitHub repo is now **public** (032): Netlify's free plan refused to build Ben's commits while private.
- Decisions 014–031 are Ben's. 11 are `PROPOSED` and wait on Ross's confirmation (015, 017–019, 021–025, 028, 029, 031; 030 partly). 017 includes dropping the Menu nav item.
- Serve locally with `npx serve site`.

**Links (production):**
- https://aromacoffeemiramar.netlify.app/redesign/option-a.html
- https://aromacoffeemiramar.netlify.app/redesign/option-c.html
- Tell viewers: "See the day menu" opens the old brown menu page; only the homepage is redesigned.

## Verified

- Production after PR #5 merge (Playwright fetch): `/`, option-a, option-c 200; `HANDOVER.md`, `decisions.md`, `phillip.md`, `GLOSSARY.md`, `docs/product-discovery.md`, `.scratch/final-site/spec.md` all 404.
- PR #5 before merge: rebased on `main`, docs only (no `site/` files), decisions 001–013 intact.
- Option C: `check.js` pass at 1440; headings/overflow/copy audit at 390; no overflow at 320.
- Not verified: Netlify deploy previews for Ben's commits now that the repo is public (expected to work on his next push).

## Next steps

1. Push `docs/session-8-close`, PR, Ross merges. (5 min)
2. Ben: Codex starts ticket 01 (shared Home content pack), then concepts 02–04.
3. Ross: confirm or reject the PROPOSED decisions in `decisions.md` 014–031, starting with 017 (Menu nav) and 025 (launch scope). (30 min)
4. Ross: deeper review of Option C (and A), noting changes; Claude applies them on a new branch. (30 min + 1 hr)
5. Ross: send the friend the A and C links. (2 min)
6. Ross: curate 2–3 designs from A/C + Codex concepts; show Phillip next week; ask `phillip.md` questions.

## Blockers / waiting on

- Ben/Codex: tickets 01–04; pricing split with Ross.
- Ross: PROPOSED decisions; deeper review of C.
- Phillip: direction pick; restaurant menu, hours, start date; Vietnamese specials; hero sentence, photos, phone, email, hours, socials, domain control (all in `phillip.md`).

## Concerns

- Repo is public: Session 6 pricing notes (git history), `phillip.md`, `content-status.md` are readable on GitHub. Ross's call (032); revisit before launch.
- `main` not protected (rulesets need GitHub Team on private repos; now public, a ruleset may be enforceable, unchecked).
- Ben's decision statuses use tokens outside the closed set (`APPROVED`, `PROPOSED`, `APPROVED CLIENT DIRECTION`). Left as written; tidy only with Ben's agreement.
- `check.js` Option A red-outline check is skipped under `npx serve` (URL has no `.html`); use `includes('option-a')`.
- Option C built in one pass; "See the day menu" appears twice (hero and Menus).
- Docs drift (minor): 007 heading still says "(PROPOSED)"; decision 010 status not updated for PR #3 closing.

## Git state

- `main`: through `8ab5cc7` (merge of PR #5).
- `docs/session-8-close`: this handover, decision 012 status + 032, Session 8 log update. Not yet pushed.
- PR #3 closed, #4 and #5 merged. Old branches deleted locally; GitHub deletions done by Ross via web (not confirmed).
- `git stash` holds a copy of these docs from before the merge; drop once the docs PR merges.
- Local only, gitignored: `NEXT-ACTIONS.md`, `docs/park-kitchen-reference.png`, `.playwright-mcp/`, `.superpowers/sdd/plan/` (stale).

## Key files

- `decisions.md`: 001–013 shared, 014–031 Ben's planning, 032 repo public, open phone-number issue
- `.scratch/final-site/`: spec and tickets (Ben/Codex)
- `.scratch/redesign/`: spec, plan, `check.js` (A/B/C)
- `phillip.md`: client questions; answers go to `content-status.md`
