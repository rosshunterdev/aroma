// Paste into Playwright MCP browser_evaluate as `function`.
// Run on redesign/option-a.html and option-b.html at 1440, 390 and 320 px wide.
async () => {
  const ALLOW = [
    'design option a, for review', 'design option b, for review',
    'option a', 'option b', 'menus', 'cafe', 'restaurant',
    'day menu', 'evening menu', 'see the day menu', 'see the full menu',
    'vietnamese special', 'your words / menu and hours',
    'will the restaurant have its own menu? what days and hours will it open?'
  ];
  const r = {};
  const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => +h.tagName[1]);
  r.h1Count = levels.filter(l => l === 1).length;
  r.skippedHeading = levels.some((l, i) => i > 0 && l > levels[i - 1] + 1);
  r.horizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
  r.brokenImages = [...document.images].filter(i => !i.complete || i.naturalWidth === 0).length;
  r.switcherLinks = [...document.querySelectorAll('.switcher a')].map(a => a.getAttribute('href'));
  const tags = [...document.querySelectorAll('.tag--viet')];
  r.vietTagCount = tags.length;
  r.vietTagsHaveText = tags.every(t => t.textContent.trim().toLowerCase() === 'vietnamese special');
  // Option A only: every tagged card carries a visible red outline.
  r.vietCardsOutlined = !location.pathname.endsWith('option-a.html') || tags.every(t => {
    const cs = getComputedStyle(t.closest('.item'));
    return ['Top', 'Right', 'Bottom', 'Left'].every(side =>
      cs['border' + side + 'Style'] === 'solid' && parseFloat(cs['border' + side + 'Width']) >= 1 &&
      cs['border' + side + 'Color'] === 'rgb(200, 55, 45)');
  });
  r.hasDayEvening = !!document.getElementById('day') && !!document.getElementById('evening');
  r.noindexPresent = !!document.querySelector('meta[name="robots"][content*="noindex"]');
  r.emDash = document.body.textContent.includes('—');
  r.transitionAll = [...document.querySelectorAll('style')].some(s => /transition\s*:\s*all|transition-all/.test(s.textContent));
  const h1 = document.querySelector('h1');
  r.headingFont = h1 ? getComputedStyle(h1).fontFamily : null;

  // Copy audit: every visible text node must exist in draft.html or ALLOW.
  const src = (await (await fetch('../draft.html')).text()).replace(/&amp;/g, '&').toLowerCase();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  r.unknownText = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    if (t && !src.includes(t) && !ALLOW.includes(t)) r.unknownText.push(t);
  }

  r.pass = r.h1Count === 1 && !r.skippedHeading && !r.horizontalScroll &&
    r.brokenImages === 0 && r.switcherLinks.length === 2 &&
    r.vietTagCount > 0 && r.vietTagsHaveText && r.vietCardsOutlined && r.hasDayEvening &&
    r.noindexPresent && !r.emDash && !r.transitionAll && r.unknownText.length === 0;
  return r;
}
