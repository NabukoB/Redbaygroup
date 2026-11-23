// Checks the finished website in out/ (run `npm run build` first): every page, link, image and search tag.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parse, type HTMLElement } from "node-html-parser";
import { describe, expect, it } from "vitest";

const out = join(process.cwd(), "out");
const SITE = "https://redbaygroup.co.ke";
const built = existsSync(join(out, "index.html"));

// Every page: out/**/index.html -> "/path/"
const pageFiles = built
  ? readdirSync(out, { recursive: true, withFileTypes: true })
      .filter((f) => f.isFile() && f.name === "index.html")
      .map((f) => join(f.parentPath, f.name))
  : [];
const toPath = (file: string) => file.slice(out.length).replace(/index\.html$/, "").replace(/\\/g, "/") || "/";
const pages = pageFiles.map((file) => ({ path: toPath(file), doc: parse(readFileSync(file, "utf8")) }));

// A link or image resolves if a page or file for it exists in out/
const resolves = (href: string) => {
  const clean = decodeURI(href.split(/[?#]/)[0]!);
  if (clean.endsWith("/")) return existsSync(join(out, clean, "index.html"));
  return existsSync(join(out, clean));
};
const meta = (doc: HTMLElement, sel: string) => doc.querySelector(sel)?.getAttribute("content") ?? "";

describe.skipIf(!built)("every page", () => {
  it("there are pages to check", () => {
    expect(pages.length).toBeGreaterThan(50);
  });

  it.each(pages.filter((p) => p.path !== "/404/" && p.path !== "/_not-found/").map((p) => [p.path, p.doc] as const))("%s", (path, doc) => {
    // One main heading
    expect(doc.querySelectorAll("h1").length, "h1 count").toBe(1);

    // Search title and description within Google's limits
    const title = doc.querySelector("title")?.text ?? "";
    expect(title.length, `title "${title}"`).toBeGreaterThan(10);
    expect(title.length, `title "${title}"`).toBeLessThanOrEqual(70);
    const description = meta(doc, 'meta[name="description"]');
    expect(description.length, `description "${description}"`).toBeGreaterThanOrEqual(70);
    expect(description.length, `description "${description}"`).toBeLessThanOrEqual(160);

    // Canonical address is this page
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(SITE + path);

    // Share card has an image and a matching address
    expect(meta(doc, 'meta[property="og:image"]'), "share image").toMatch(/^https:\/\//);
    expect(meta(doc, 'meta[property="og:url"]')).toBe(SITE + path);

    // Not hidden from search engines by mistake
    expect(meta(doc, 'meta[name="robots"]')).not.toMatch(/noindex/);

    // Structured data parses
    for (const s of doc.querySelectorAll('script[type="application/ld+json"]')) expect(() => JSON.parse(s.text), "JSON-LD").not.toThrow();

    // Every image has alt text and a real file
    for (const img of doc.querySelectorAll("img")) {
      expect(img.hasAttribute("alt"), `alt on ${img.getAttribute("src")}`).toBe(true);
      const src = img.getAttribute("src") ?? "";
      if (src.startsWith("/")) expect(resolves(src), src).toBe(true);
    }

    // Every link to our own site goes to a page that exists
    for (const a of doc.querySelectorAll("a[href]")) {
      const href = a.getAttribute("href")!;
      if (href.startsWith("/") && !href.startsWith("//")) expect(resolves(href), `broken link ${href}`).toBe(true);
      if (href.startsWith(SITE)) expect(resolves(href.slice(SITE.length) || "/"), `broken link ${href}`).toBe(true);
      // Links that open a new tab can't control this page
      if (a.getAttribute("target") === "_blank") expect(a.getAttribute("rel") ?? "", href).toMatch(/noopener/);
      // Every link has something to read out
      const label = (a.text + (a.getAttribute("aria-label") ?? "") + a.querySelectorAll("img").map((i) => i.getAttribute("alt")).join("")).trim();
      expect(label, `empty link ${href}`).not.toBe("");
    }

    // WhatsApp links carry a message and the right number
    for (const a of doc.querySelectorAll('a[href^="https://wa.me/"]')) expect(a.getAttribute("href")).toMatch(/^https:\/\/wa\.me\/254\d{9}(\?text=.+)?$/);
  });

  it("no two pages share a title or description", () => {
    const seen = (sel: (d: HTMLElement) => string) => {
      const vals = pages.filter((p) => p.path !== "/404/" && p.path !== "/_not-found/").map((p) => sel(p.doc));
      return vals.filter((v, i) => vals.indexOf(v) !== i);
    };
    expect(seen((d) => d.querySelector("title")?.text ?? "")).toEqual([]);
    expect(seen((d) => meta(d, 'meta[name="description"]'))).toEqual([]);
  });
});

describe.skipIf(!built)("site files", () => {
  const sitemap = built ? readFileSync(join(out, "sitemap.xml"), "utf8") : "";
  const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]!);

  it("sitemap lists every page, and only real pages", () => {
    const expected = pages.map((p) => SITE + p.path).filter((u) => !u.endsWith("/404/") && !u.endsWith("/_not-found/"));
    expect(listed.filter((u) => !expected.includes(u)), "in sitemap but no page").toEqual([]);
    expect(expected.filter((u) => !listed.includes(u)), "page missing from sitemap").toEqual([]);
  });

  it("robots.txt allows search engines and points to the sitemap", () => {
    const robots = readFileSync(join(out, "robots.txt"), "utf8");
    expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`);
    expect(robots).not.toMatch(/Disallow: \/\s*$/m);
  });

  it("llms.txt links resolve", () => {
    const llms = readFileSync(join(out, "llms.txt"), "utf8");
    const links = [...llms.matchAll(/\]\((https:\/\/redbaygroup\.co\.ke[^)]*)\)/g)].map((m) => m[1]!.slice(SITE.length) || "/");
    expect(links.length).toBeGreaterThan(20);
    for (const l of links) expect(resolves(l), l).toBe(true);
  });

  it("security rules and the private stats folder are in place", () => {
    const rules = readFileSync(join(out, ".htaccess"), "utf8");
    expect(rules).toContain("Content-Security-Policy");
    expect(rules).toContain("Strict-Transport-Security");
    expect(rules).toMatch(/Cache-Control "no-cache"/);
    expect(readFileSync(join(out, "_stats", ".htaccess"), "utf8")).toMatch(/Require all denied|Deny from all/i);
  });

  it("IndexNow key file matches its name", () => {
    const key = readdirSync(out).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
    expect(key).toBeDefined();
    expect(readFileSync(join(out, key!), "utf8").trim()).toBe(key!.replace(".txt", ""));
  });

  it("no page loads anything from another website", () => {
    for (const { path, doc } of pages) {
      for (const el of doc.querySelectorAll("script[src], link[rel=stylesheet], img[src]")) {
        const src = el.getAttribute("src") ?? el.getAttribute("href") ?? "";
        expect(src.startsWith("http") && !src.startsWith(SITE), `${path}: ${src}`).toBe(false);
      }
    }
  });
});
