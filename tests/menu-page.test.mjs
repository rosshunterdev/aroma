import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../site/selected-menu/index.html", import.meta.url);
const stylesheetUrl = new URL("../site/selected-menu/styles.css", import.meta.url);
const homeUrl = new URL("../site/selected-home/index.html", import.meta.url);

async function readPage() {
  return readFile(pageUrl, "utf8");
}

test("Menu review page keeps the agreed information order and provenance boundaries", async () => {
  const html = await readPage();
  const specials = html.indexOf('id="specials"');
  const cafe = html.indexOf('id="cafe-menu"');
  const restaurant = html.indexOf('id="restaurant-menu"');

  assert.ok(specials > -1, "Specials section is present");
  assert.ok(specials < cafe, "Specials appear before Café");
  assert.ok(cafe < restaurant, "Café appears before Restaurant");
  assert.match(html, /noindex, nofollow/);
  assert.match(html, /Menu design review/);
  assert.doesNotMatch(html, /\$\d/);
});

test("Café and Restaurant navigation uses native fragment links", async () => {
  const html = await readPage();

  assert.match(html, /<nav[^>]+aria-label="Choose a menu"/);
  assert.match(html, /href="#cafe-menu"/);
  assert.match(html, /href="#restaurant-menu"/);
  assert.match(html, /<section[^>]+id="cafe-menu"/);
  assert.match(html, /<section[^>]+id="restaurant-menu"/);
  assert.doesNotMatch(html, /role="tab"|role="tabpanel"|aria-selected|<script/);
});

test("Menu navigation is neutral and its sticky background is opaque", async () => {
  const css = await readFile(stylesheetUrl, "utf8");
  const switchRule = css.match(/\.menu-switch\s*\{(?<body>[^}]*)\}/)?.groups?.body ?? "";
  const cafeRule = css.match(/\.menu-switch__link--cafe\s*\{(?<body>[^}]*)\}/)?.groups?.body ?? "";
  const restaurantRule = css.match(/\.menu-switch__link--restaurant\s*\{(?<body>[^}]*)\}/)?.groups?.body ?? "";
  const cafeHoverRule = css.match(/\.menu-switch__link--cafe:hover\s*\{(?<body>[^}]*)\}/)?.groups?.body ?? "";
  const restaurantHoverRule = css.match(/\.menu-switch__link--restaurant:hover\s*\{(?<body>[^}]*)\}/)?.groups?.body ?? "";

  assert.match(switchRule, /background:\s*var\(--white\)/);
  assert.doesNotMatch(switchRule, /background:\s*rgb\([^)]*\//, "Sticky background has no alpha channel");
  assert.match(cafeRule, /background:\s*var\(--white\)/);
  assert.match(restaurantRule, /background:\s*var\(--white\)/);
  assert.match(cafeHoverRule, /background:\s*var\(--green-dark\)/);
  assert.match(restaurantHoverRule, /background:\s*var\(--red\)/);
});

test("Café uses the provisional 2024 transcription without confirmed prices", async () => {
  const html = await readPage();
  const cafe = html.slice(html.indexOf('id="cafe-menu"'), html.indexOf('id="restaurant-menu"'));

  assert.match(cafe, /From the 2024 printed menu · provisional/);
  assert.match(cafe, /Which of these items, descriptions and prices are still current\?/);
  for (const category of [
    "Breakfast &amp; lunch",
    "Coffee &amp; chocolate",
    "Tea",
    "Milkshakes &amp; smoothies",
    "Bottled drinks",
  ]) {
    assert.match(cafe, new RegExp(category));
  }
  for (const item of ["Toast &amp; Eggs", "Chicken Pho", "Egg Coffee", "Fresh LHG", "Pump Water"]) {
    assert.match(cafe, new RegExp(item));
  }
  assert.match(cafe, />\$\?</);
  assert.doesNotMatch(cafe, /\$\d/);
  assert.doesNotMatch(cafe, />Item name</);
});

test("Restaurant content remains explicitly unresolved", async () => {
  const html = await readPage();
  const restaurant = html.slice(html.indexOf('id="restaurant-menu"'));

  assert.match(restaurant, /Restaurant content · question/);
  assert.match(restaurant, /Item name/);
  assert.match(restaurant, /Price —/);
  assert.doesNotMatch(restaurant, /\$\d/);
});

test("The page preserves the selected Home navigation and review boundaries", async () => {
  const html = await readPage();

  assert.match(html, /href="\.\.\/selected-home\/"[^>]+aria-label="Aroma Coffee home"/);
  assert.match(html, /href="\.\.\/selected-home\/#visit"/);
  assert.match(html, /href="#main"[^>]*>Skip to content/);
  assert.match(html, /Figtree/);
});

test("The Menu page has one h1, unique IDs and valid local fragment targets", async () => {
  const html = await readPage();
  const h1s = html.match(/<h1\b/g) ?? [];
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const fragments = [...html.matchAll(/href="#([^"]+)"/g)].map(
    (match) => match[1],
  );

  assert.equal(h1s.length, 1, "The page has exactly one h1");
  assert.equal(new Set(ids).size, ids.length, "Every element ID is unique");
  for (const fragment of fragments) {
    assert.ok(ids.includes(fragment), `#${fragment} resolves to an element ID`);
  }

  await access(new URL("../site/selected-home/index.html", import.meta.url));
  await access(new URL("../site/selected-menu/styles.css", import.meta.url));
});

test("Menu stylesheet includes responsive, focus and fragment-offset support", async () => {
  const css = await readFile(stylesheetUrl, "utf8");

  assert.match(css, /:focus-visible/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(max-width: 410px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test("Selected Home links each relevant Menu entry point to the Menu page", async () => {
  const html = await readFile(homeUrl, "utf8");

  assert.match(html, /href="\.\.\/selected-menu\/">Menu<\/a>/);
  assert.match(html, /href="\.\.\/selected-menu\/#cafe-menu">See the Café menu<\/a>/);
  assert.match(html, /href="\.\.\/selected-menu\/#restaurant-menu">See the Restaurant menu<\/a>/);
});
