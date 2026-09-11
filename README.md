# Aroma Coffee — Website Rebuild

Website rebuild for Aroma Coffee, a Vietnamese-owned cafe and restaurant in Wellington, NZ.

## Locations

- **Miramar** — 128D Park Road, Miramar, Wellington 6022
- **Cuba Mall** — 126A Cuba Mall, Te Aro
- **Island Bay** — 121A The Parade, Island Bay

## Current Status

**Pre-framework** — auditing the existing site before selecting a stack.

- [x] Audit of existing site (aromacoffee.nz) — content, structure, platform
- [ ] Stack selection
- [ ] Design system / brand tokens
- [ ] Build

## Project Structure

```
/audit            Scraped content and analysis from the old site
/design-system    Brand decisions, tokens, typography (pending)
aroma-leaf-cluster.svg   Decorative leaf cluster (brand asset)
```

## Old Site

The current site at [aromacoffee.nz](https://aromacoffee.nz) runs **Laravel + Vite + Tailwind CSS + Alpine.js**. See `/audit/platform-analysis.md` for full details and `/audit/structural-issues.md` for known problems.
