# Handover — Aroma Coffee Rebuild

As of Session 12 (2026-11-06). `main` is at `b0ff0ce` (PR #22). PR #23 (`feature/phillip-review`) is open, not merged.

**Team:** Ben (Codex) is out of the development loop for the meantime (D-036). Ross and Claude Code own all implementation tickets, including those still labelled `Owner: Ben/Codex`. The ticket process is unchanged: `.scratch/final-site/` spec and numbered tickets, rules in `docs/agents/issue-tracker.md`.

## Current state

Phase B (refine the selected direction) is at its last gate: **Ticket 12, Phillip design approval.**

- **Direction:** Phillip selected Design 2 (Ross Option A, `site/redesign/option-a.html`) for clarity, with Design 3 (Warm Neighbourhood) as bounded secondary influence (D-034). Navigation is **Aroma · Menu · Visit** (D-033); Café and Restaurant have different menu content (D-035). About is deferred (Ticket 10).
- **Ticket 07, Home** (`site/selected-home/`): complete. Figtree throughout. Has the "Compare designs" bar linking Option A; kept on purpose because Phillip's Option A vs refined preference is still pending.
- **Ticket 08, Menu** (`site/selected-menu/`): complete (PRs #17, #20, #21). Specials first, native Café/Restaurant anchors, no JavaScript. Sticky switch is option E (square floating box with side padding). Café items are 2024 printed-menu transcription with `$?` prices, not confirmed content. Restaurant and Specials prices read `Price to confirm`.
- **Ticket 09, Visit** (`site/selected-visit/`): complete (PR #19). Confirmed address and Maps link; hours, contact and booking method are question slots with no fake controls.
- **Ticket 11, Ross review:** complete, **ready for Phillip** (2026-11-06). Non-blocking follow-ups are listed in the ticket.
- **`/preview` link** (PR #23, `netlify.toml`): 302 to `/selected-home/`. Verified on deploy preview 23; live only after #23 merges.
- All three review pages are `noindex, nofollow`. `site/index.html` remains the temporary public landing page.

| Item | Status |
| --- | --- |
| `site/menu-ross/` | Ross's Menu draft (PR #16); comparison and transcription evidence only. |
| `site/concepts/`, PRs #8–#11 | Phase A evidence; not the baseline. |
| `origin/meeting/phillip-concepts` | Meeting presenter for Designs 1–3. |
| `.scratch/final-site/` | Spec and 26-ticket graph. 01–09 and 11 complete; 13 `ready-for-agent`; the rest blocked or `needs-human`. |

## Next steps

1. Ross: merge PR #23 and confirm `aromacoffeemiramar.netlify.app/preview` works on the live site (2 min).
2. Ross: send Phillip the review message (stored in git-ignored `NEXT-ACTIONS.md`, not in the repo).
3. Ross + Claude: record Phillip's reply in Ticket 12: approval or revisions, plus his Option A vs refined preference. Remove the compare bar once he has chosen.
4. Claude: Ticket 13, hosting and maintenance research (`ready-for-agent`, no blockers, about 1 hr).
5. Claude: update `Owner: Ben/Codex` on tickets 13 and 16–23 and the joint-maintenance line in `README.md` (10 min).
6. Ross: decide whether to commit the six untracked `assets/` photos.

## Blockers / waiting on

- **Phillip:** design approval and Option A vs refined preference (Ticket 12).
- **Photography:** Ross owns the shoot; Phillip approves. No approved final photography yet (Ticket 15).
- **Menu source:** Phillip expects a new menu "next month" and plans to photograph it. Not received. Uber Eats, Google and DoorDash material is reference only (`content-status.md`).
- **Domain:** Phillip reports "I got domain already". Access, registrar, DNS and recovery are unverified. Blocks cutover, not design.
- **Other client facts:** Restaurant name, status, hours and booking; Café hours; contact details; story; Vietnamese highlights; trading name; socials (`phillip.md`, `TODO.md`, Ticket 14).

## Concerns

- **Public repo (D-032).** Client quotes and business details in `phillip.md`, tickets and these docs are publicly readable on GitHub. Keep anything Phillip-facing in git-ignored `NEXT-ACTIONS.md`.
- **Accessibility not fully verified.** Screen-reader, full keyboard and true 200% zoom passes are deferred to Ticket 21. Reviews so far are not WCAG certification.
- **Ticket 11 follow-ups:** Home and Visit Maps links use different queries; one em dash remains in a Restaurant placeholder; footers differ between pages.
- **`/preview` is temporary.** Repoint or remove it before launch.
- `node --test tests/` fails on Windows (directory treated as a file). Run files explicitly: `node --test tests/menu-page.test.mjs tests/visit-page.test.mjs`.
- The two Phillip quotes added in PR #19 ("I got domain already", new menu "next month") were relayed by Ross; wording not yet confirmed.
- No Python on this machine. The Playwright MCP blocks `file://`, so local screenshots need a temporary static server (a script was used from the session scratchpad; not in the repo).

## Git and publication boundaries

- Netlify publishes only `site/`; repository docs are never served.
- New work branches fresh from `main`. Old `codex/*` branches are historical.
- Six untracked images in `assets/` (`Phillip cafe.jpg`, `aroma entrance.jpg`, `aroma pool.jpg`, `aroma-building.png`, `aroma-counter.png`, `aroma-entrance.png`) are uncommitted on purpose; none is approved final photography.

## Verification on record

- Tests: `node --test tests/menu-page.test.mjs tests/visit-page.test.mjs` 16/16 on `main` after PR #21.
- Ticket 11 checks (Session 12) on Home, Menu and Visit at 1440, 768, 390 and 320 CSS px: no horizontal overflow, no 404s or JavaScript errors, one `h1` each, `noindex, nofollow`, no images without `alt`, all cross-page links resolve. Screenshots `.playwright-mcp/t11-*.png` (git-ignored).
- Deploy preview 23: `/preview` → `/selected-home/`, header links reach Menu and Visit at 390px.

## Key records

- `decisions.md`: D-033 to D-036 govern navigation, selection, menu relationship and team ownership.
- `docs/client-selection-reconciliation.md`: Phase A to Phase B selection mapping and PR disposition.
- `content-status.md`: fact and asset provenance.
- `phillip.md` / `TODO.md`: client and operational dependencies.
- `.scratch/final-site/spec.md` and `issues/`: programme and tickets.
