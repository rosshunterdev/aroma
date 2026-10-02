# Handover — Aroma Coffee Rebuild

As of Session 6 (2026-10-02).

## For Ben / Codex: review requested

Branch `feature/site-structure-proposal` implements decision 010 (`decisions.md`). Please review:

1. **Structure** — `.scratch/site-structure/spec.md` (acceptance criteria, open questions) and `.scratch/site-structure/mock.html` (open in a browser; numbered pins explain each change).
2. **Implementation** — `draft.html`, `menu.html`, `contact.html`, `styles.css`. Tickets with verify steps: `.scratch/site-structure/issues/01–07`.
3. **Open questions** — keep `contact.html` file name with a "Visit" label, or rename? Is dropping 008's auto-rotation acceptable?

Working assumption (Session 5, Ross): review treated as accepted so work continues on this branch. Acceptance is **not yet confirmed**; do not merge until Ben confirms.

## Current state

| Page | Status |
|------|--------|
| `index.html` | Temporary public landing page. Unchanged. |
| `draft.html` | Restructured (010): hero with copy slots, Food/Coffee/Tea tabs without autoplay, in-flow Visit section. |
| `menu.html` | FOOD/COFFEE/TEA anchors match home tabs; heading order fixed. |
| `contact.html` | Labelled VISIT in nav; booking buttons fixed. |
| `about.html` | Not started, not linked. |

Copy slots (`.copy-slot`) mark every place awaiting client words or photos.

**Live vs preview (checked Session 6):**
- `https://aromacoffeemiramar.netlify.app/` serves `main`: temporary page, fine to show.
- `https://aromacoffeemiramar.netlify.app/draft.html` is the **old** draft from `main`: 3 broken images, ABOUT link to missing page, autoplay. Do not show.
- `https://deploy-preview-3--aromacoffeemiramar.netlify.app/draft.html` is the new draft (built from `927f727`, before ticket 07). Safe to show; close Netlify's "Collaborate" toolbar first.
- "Powered by Netlify" badge appears on the **production** temporary page, not only previews.

## Verified

- Session 5: Playwright (Chromium) at 1440px and 390px on all three draft pages: one `h1`, no skipped headings, no failed requests, no horizontal scroll, tab keyboard behaviour, no autoplay. Ticket 07 metadata and favicon confirmed.
- Session 6: Playwright at 390px on the live temporary page and the preview draft (screenshots in `.playwright-mcp/`, gitignored); preview `menu.html` and `contact.html` return 200. Source read through: no leftover notes, no unsourced client facts.
- Not verified: real devices, screen reader, non-Chromium browsers.

## Next steps

1. Ross: agree with Ben who is offering the work and how payment is split, before quoting the client.
2. Ross: set build fee and monthly care fee (Session 6 suggestion: about $600 + $20/month; not decided).
3. Ross: visit the cafe; show temporary page and preview draft; ask the question list (`NEXT-ACTIONS.md`) plus "who controls aromacoffee.nz / what do you pay now?" and permission to take photos.
4. Give Claude the client's answers and photos: fill copy slots, update `content-status.md` (2–3 h).
5. Ben confirms PR #3, then merge, then swap `draft.html` in as `index.html` (decision 009, about 20 min).
6. Point aromacoffee.nz at Netlify once domain control is known.

## Blockers / waiting on

- Ben: confirm PR #3 acceptance (currently assumed); pricing and who-offers-the-work arrangement.
- Ross: highlight column stagger from `NEW-DESIGN.png`: restore, or keep top-aligned?
- Client: hero sentence, photos, Egg Coffee description, Tea category, About story, phone, email, hours, socials, menu accuracy, trading name, domain control.
- Netlify badge on production: decide whether to remove it (how is unchecked; may need a setting or paid plan).

## Concerns

- Production `/draft.html` is a public, broken old draft (broken images, 404 link). Anyone with the URL sees it until PR #3 merges.
- Hours, phone and email are shown publicly on preview pages but unconfirmed (`content-status.md`).
- Pricing advice was given quickly without NZ market research; treat the numbers as a starting point.
- Docs drift (minor): decision 007 heading still says "(PROPOSED)"; phone entry uses "UNRESOLVED" (not in the status set); Session 1–4 headings lack titles.

## Git state

- `main`: unchanged since PR #2 merge (`4f84c62`).
- `feature/site-structure-proposal`: open as PR #3 (https://github.com/rosshunterdev/aroma/pull/3), not merged.
- 4 local commits not pushed: `18897a9`, `9650e29`, `e23ba2e`, `fb6b035` (gitignore `.playwright-mcp/`). Push pending Ross's approval.
- Uncommitted: `HANDOVER.md`, `session-log.md` (Session 6 docs).
- `NEXT-ACTIONS.md` (gitignored) holds Ross's personal checklist; partly stale (Playwright restart and meta tags are done).

## Key files

- `decisions.md` — decisions 001–010 and the open phone-number issue
- `TODO.md` — backlog and client questions
- `content-status.md` — content provenance and confirmation state
- `.scratch/site-structure/` — spec, tickets, mock for decision 010
