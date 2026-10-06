# Handover — Aroma Coffee Rebuild

As of Session 7 (2026-10-05).

## Current state

Phillip (owner) asked on 2026-10-05 for a "Kiwi" redesign: green primary, red secondary, white background, minimalist like Park Kitchen, Vietnamese styling only on highlighted items, and a future evening restaurant alongside the cafe (decision 011).

| Item | Status |
|------|--------|
| `site/redesign/option-a.html` | Built. "Park Kitchen close": Figtree, uppercase nav, red outline + tag on Vietnamese cards. |
| `site/redesign/option-b.html` | Built. "Warmer Kiwi": Fraunces headings, green header/footer bands, red-edged featured card. |
| `site/draft.html`, `menu.html`, `contact.html` | Decision 010 structure, old brown/cream styling. Not yet restyled. |
| `site/index.html` | Temporary public landing page. Unchanged. |
| `phillip.md` | Questions to ask Phillip (restaurant, style, older open items). |

- Website now lives in `site/`; `netlify.toml` publishes only that folder (decision 012). Serve locally with `npx serve site`.
- GitHub repo is private; Ben (BenjiBuffalo) has write access.

**Preview links (PR #4):**
- https://deploy-preview-4--aromacoffeemiramar.netlify.app/redesign/option-a.html
- https://deploy-preview-4--aromacoffeemiramar.netlify.app/redesign/option-b.html
- Tell viewers: "See the day menu" opens the old brown menu page; only the homepage is redesigned.

## Verified

- Playwright (Chromium): `.scratch/redesign/check.js` passes at 1440/390/320 px on both comps; Option B focus rings visible on green; switcher works both ways.
- PR #4 preview: all pages 200, every doc 404, Fraunces loads, no sideways scroll at 390 px.
- Final whole-branch review (fresh reviewer): 0 critical, 0 important.
- Not verified: real phones, screen readers, non-Chromium browsers, Netlify toolbar overlap on a real phone.

## Next steps

1. Ross: send Ben the drafted message; get his review of PR #4 links and PR #3.
2. Ross: send Phillip both links (with the brown menu note) and ask him to pick A or B; ask the `phillip.md` questions.
3. Claude: roll the chosen direction out to `menu.html` and `contact.html` and replace `draft.html` styling (needs a new spec; estimate after the pick).
4. Ben confirms PR #3 → merge → merge or rebase PR #4 (production stops serving docs only once `site/` reaches `main`).
5. Swap the draft in as `index.html` (decision 009), then point aromacoffee.nz at Netlify once domain control is known.

## Blockers / waiting on

- Phillip: A or B; restaurant menu, hours, start date; which items are Vietnamese specials; hero sentence, photos, phone, email, hours, socials, domain control (all in `phillip.md`).
- Ben: PR #3 acceptance; PR #4 feedback; pricing split with Ross.
- Production and PR #3 preview still serve docs publicly until `site/` reaches `main`.

## Concerns

- Pricing notes are in git history (Session 6 `HANDOVER.md`). Repo is now private; keep pricing out of tracked files from now on.
- PR #4 is stacked on PR #3; review gets confusing if #3 stalls.
- Deferred minors from review: `check.js` copy audit is substring-based; its `headingFont` reads the declared stack, not the loaded font; Vietnamese tag is announced before the dish name by screen readers.
- Docs drift (minor, carried): decision 007 heading still says "(PROPOSED)"; phone entry uses "UNRESOLVED" (not in the status set).

## Git state

- `main`: unchanged since PR #2 merge (`4f84c62`).
- `feature/site-structure-proposal`: PR #3, open, through `65206b5`.
- `feature/redesign-options`: draft PR #4 (do not merge), pushed through `62b86ae`.
- Uncommitted: this handover, `session-log.md` (Sessions 6 tail + 7), `decisions.md` (010 note, 011, 012).
- Local only, gitignored: `NEXT-ACTIONS.md`, `docs/park-kitchen-reference.png`, `.superpowers/sdd/plan/` (stale scratch workspace, safe to delete).

## Key files

- `decisions.md`: 001–012 and the open phone-number issue
- `.scratch/redesign/`: spec, plan, `check.js` for decision 011
- `phillip.md`: client questions; answers go to `content-status.md`
- `content-status.md`: content provenance, including the 2026-10-05 meeting
