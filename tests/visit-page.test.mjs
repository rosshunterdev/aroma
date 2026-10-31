import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const visitUrl = new URL("../site/selected-visit/index.html", import.meta.url);
const stylesheetUrl = new URL("../site/selected-visit/styles.css", import.meta.url);
const homeUrl = new URL("../site/selected-home/index.html", import.meta.url);
const menuUrl = new URL("../site/selected-menu/index.html", import.meta.url);
const reviewPages = [homeUrl, menuUrl, visitUrl];

async function readVisit() {
  return readFile(visitUrl, "utf8");
}

test("Visit review page keeps confirmed and unresolved information distinct", async () => {
  const html = await readVisit();

  assert.match(html, /noindex, nofollow/);
  assert.match(html, /128D Park Road/);
  assert.match(html, /Miramar, Wellington/);
  assert.match(html, /Open in Google Maps/);
  assert.match(
    html,
    /href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=128D\+Park\+Road\+Miramar\+Wellington\+New\+Zealand"/,
  );
  assert.match(html, /Café hours/);
  assert.match(html, /Restaurant hours/);
  assert.match(html, /Hours not yet confirmed/);
  assert.match(html, /Availability and hours not yet confirmed/);
  assert.doesNotMatch(html, /href="(?:tel:|mailto:)/);
});

test("Visit exposes a non-deceptive Restaurant booking destination", async () => {
  const html = await readVisit();

  assert.match(html, /id="restaurant-booking"/);
  assert.match(html, /Booking method · question/);
  assert.match(html, /No booking action is active/);
  assert.doesNotMatch(html, /<form\b|<button\b|<script\b/);
});

test("Home and Restaurant Menu connect to the Visit journey", async () => {
  const home = await readFile(homeUrl, "utf8");
  const menu = await readFile(menuUrl, "utf8");

  assert.match(home, /href="\.\.\/selected-visit\/">Visit<\/a>/);
  assert.match(home, /href="\.\.\/selected-visit\/">See all Visit details<\/a>/);
  assert.match(menu, /href="\.\.\/selected-visit\/">Visit<\/a>/);
  assert.match(menu, /href="\.\.\/selected-visit\/#restaurant-booking">See Restaurant booking details<\/a>/);
});

test("Visit page has one h1, unique IDs and valid local fragment targets", async () => {
  const html = await readVisit();
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

  await access(stylesheetUrl);
});

test("Visit stylesheet includes focus, reflow and reduced-motion support", async () => {
  const css = await readFile(stylesheetUrl, "utf8");

  assert.match(css, /:focus-visible/);
  assert.match(css, /overflow-wrap: anywhere/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(max-width: 410px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test("Selected review pages do not reference missing local routes or assets", async () => {
  for (const page of reviewPages) {
    const html = await readFile(page, "utf8");
    const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(
      (match) => match[1].replaceAll("&amp;", "&"),
    );

    for (const reference of references) {
      if (/^(?:https?:|#)/.test(reference)) continue;

      let target = new URL(reference, page);
      target.hash = "";
      target.search = "";
      if (target.pathname.endsWith("/")) target = new URL("index.html", target);
      await access(target);
    }
  }
});
