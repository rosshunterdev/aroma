# Handover — Aroma Coffee Rebuild

As of Session 5 (2026-10-01).

## For Ben / Codex: review requested

Branch `feature/site-structure-proposal` implements decision 010 (`decisions.md`). Please review:

1. **Structure** — `.scratch/site-structure/spec.md` (acceptance criteria, open questions) and `.scratch/site-structure/mock.html` (open in a browser; numbered pins explain each change).
2. **Implementation** — `draft.html`, `menu.html`, `contact.html`, `styles.css`. Tickets with verify steps: `.scratch/site-structure/issues/01–06`.
3. **Open questions** — keep `contact.html` file name with a "Visit" label, or rename? Is dropping 008's auto-rotation acceptable?

`index.html` / `temporary.css` (temporary public page) are untouched.

## Current state

| Page | Status |
|------|--------|
| `index.html` | Temporary public landing page. Unchanged. |
| `draft.html` | Restructured (010): hero with one `h1` and client copy slots, Food/Coffee/Tea tabs without autoplay, in-flow Visit section. No broken images; missing photos are copy slots. |
| `menu.html` | Header updated; FOOD/COFFEE/TEA anchors match home tabs; heading order fixed (one `h1`, no skipped levels). |
| `contact.html` | Labelled VISIT in nav; header updated; booking buttons fixed (were cream on cream, effectively invisible). |
| `about.html` | Not started, and no longer linked from anywhere. |

Copy slots (`.copy-slot`) mark every place awaiting client words or photos: hero sentence, hero photo, three dish/drink photos, Egg Coffee description.

## Verified

Playwright (Chromium) against a local static server, 1440px and 390px, all three draft pages:
- One `h1` per page, no skipped heading levels, no failed requests, no horizontal scroll.
- Tabs: ArrowRight moves focus and panel; "See all" link updates to `menu.html#tea`; selection unchanged after 7s idle.
- Screenshots reviewed: homepage desktop and mobile, menu and contact desktop, mobile header, contact buttons, panel focus.

Not verified: real devices, a screen reader pass, browsers other than Chromium.

## Next steps

1. Send Ben the PR #3 link; Codex reviews and answers the two open questions in the spec.
2. Send client the copy-slot questions plus the existing list in `TODO.md` (phone, email, hours, socials, menu accuracy, trading name).
3. Merge after review; then decide when `draft.html` replaces the temporary `index.html` (decision 009 describes the swap).
4. Screen reader pass (NVDA) once content is in.

## Blockers / waiting on

- Client: hero sentence, photos, Egg Coffee description, whether Tea stays a highlighted category, About story.
- Client: phone, email, hours, socials, menu accuracy (see `content-status.md`).
- Netlify "Powered by Netlify" badge seen on the deployed site in a screenshot: confirm whether it is a preview-only overlay.

## Git state

- `main`: unchanged since PR #2 merge (`4f84c62`).
- `feature/site-structure-proposal`: proposal docs, Playwright MCP config (`.mcp.json`), implementation, session docs. Pushed; open as PR #3 (https://github.com/rosshunterdev/aroma/pull/3), not merged.
- Local only: this HANDOVER update and the session-log PR line (uncommitted). Commit with the first review follow-up.

## Key files

- `decisions.md` — decisions 001–010 and the open phone-number issue
- `TODO.md` — backlog and client questions
- `content-status.md` — content provenance and confirmation state
- `.scratch/site-structure/` — spec, tickets, mock for decision 010
