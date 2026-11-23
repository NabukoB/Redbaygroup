// The site's content: every slug is unique, every link points somewhere real,
// every photo file exists, and nothing is left half-written.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { companies, faqs, hasPage, imgSrc, photoSrc, projects, site } from "@/lib/site";

const pub = join(process.cwd(), "public");
const exists = (url: string) => existsSync(join(pub, url));

const dupes = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);
const projectPages = projects.filter(hasPage);
const projectSlugs = projects.flatMap((p) => (p.slug ? [p.slug] : []));
const insightSlugs = insights.map((i) => i.slug);

// Every page address the site builds, to check links against
const appPages = readdirSync(join(process.cwd(), "app"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("[") && existsSync(join(process.cwd(), "app", d.name, "page.tsx")))
  .map((d) => `/${d.name}/`);
const pages = new Set([
  "/",
  ...appPages,
  ...projectPages.map((p) => `/projects/${p.slug}/`),
  ...insights.map((i) => `/insights/${i.slug}/`),
  ...designs.map((d) => `/designs/${d.slug}/`),
  ...locations.map((l) => `/locations/${l.slug}/`),
  ...services.map((s) => `/services/${s.slug}/`),
  ...companies.map((c) => `/companies/${c.slug}/`),
]);

describe("slugs are unique", () => {
  it.each([
    ["projects", projectSlugs],
    ["guides", insightSlugs],
    ["designs", designs.map((d) => d.slug)],
    ["locations", locations.map((l) => l.slug)],
    ["services", services.map((s) => s.slug)],
    ["divisions", companies.map((c) => c.slug)],
  ])("%s", (_name, slugs) => {
    expect(dupes(slugs)).toEqual([]);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("guide titles are unique", () => {
    expect(dupes(insights.map((i) => i.title))).toEqual([]);
  });
});

describe("photos", () => {
  it.each(projectPages.map((p) => [p.slug, p] as const))("project %s has every photo in both sizes", (_s, p) => {
    for (const ph of p.photos) {
      expect(exists(photoSrc(p.slug, ph.file, 800)), photoSrc(p.slug, ph.file, 800)).toBe(true);
      expect(exists(photoSrc(p.slug, ph.file, 1600)), photoSrc(p.slug, ph.file, 1600)).toBe(true);
      expect(ph.alt.length, `alt text for ${p.slug}/${ph.file}`).toBeGreaterThan(15);
    }
    expect(dupes(p.photos.map((ph) => ph.file))).toEqual([]);
  });

  it.each(designs.map((d) => [d.slug, d] as const))("design %s has every render in both sizes", (_s, d) => {
    const base = `/designs/${d.slug}`;
    for (const ph of d.photos) {
      expect(exists(imgSrc(base, ph.file, 800)), imgSrc(base, ph.file, 800)).toBe(true);
      expect(exists(imgSrc(base, ph.file, 1600)), imgSrc(base, ph.file, 1600)).toBe(true);
      expect(ph.alt.length).toBeGreaterThan(15);
    }
    if (d.interiorsFrom !== undefined) {
      expect(d.interiorsFrom).toBeGreaterThan(0);
      expect(d.interiorsFrom).toBeLessThan(d.photos.length);
    }
  });

  it("no photo folders are left over from removed projects or designs", () => {
    const folders = (dir: string) => readdirSync(join(pub, dir), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
    expect(folders("projects").filter((f) => !projectSlugs.includes(f))).toEqual([]);
    expect(folders("designs").filter((f) => !designs.some((d) => d.slug === f))).toEqual([]);
  });
});

describe("links point to real pages", () => {
  const internal = (href: string) => href.startsWith("/");

  it.each(insights.map((i) => [i.slug, i] as const))("guide %s", (_s, g) => {
    for (const r of g.related ?? []) if (internal(r.href)) expect(pages.has(r.href), r.href).toBe(true);
  });

  it.each(locations.map((l) => [l.slug, l] as const))("area %s lists real projects and guides", (_s, l) => {
    for (const p of l.projects) expect(projectSlugs, p).toContain(p);
    for (const g of l.guides) expect(insightSlugs, g).toContain(g);
  });

  it.each(services.map((s) => [s.slug, s] as const))("service %s lists real projects and guides", (_s, s) => {
    for (const p of s.projects) expect(projectSlugs, p).toContain(p);
    for (const g of s.guides) expect(insightSlugs, g).toContain(g);
  });

  it("every project with photos belongs to at most one area", () => {
    const counted = locations.flatMap((l) => l.projects);
    expect(dupes(counted)).toEqual([]);
  });
});

describe("content is complete", () => {
  it.each(insights.map((i) => [i.slug, i] as const))("guide %s", (_s, g) => {
    expect(g.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(g.date))).toBe(false);
    expect(g.sections.length).toBeGreaterThan(0);
    for (const s of g.sections) {
      expect(s.heading.trim()).not.toBe("");
      expect(s.body.length + (s.list?.length ?? 0), `section "${s.heading}" is empty`).toBeGreaterThan(0);
      for (const b of [...s.body, ...(s.list ?? [])]) expect(b.trim()).not.toBe("");
    }
  });

  it("projects with photos have a summary and a scope", () => {
    for (const p of projects.filter((p) => p.photos?.length)) {
      expect(hasPage(p), `${p.name} ${p.place} is missing a slug or summary`).toBe(true);
      expect(p.scope?.length, `${p.slug} scope`).toBeGreaterThan(0);
    }
  });

  it("FAQs have a question and a real answer", () => {
    for (const f of faqs) {
      expect(f.q.trim().endsWith("?"), f.q).toBe(true);
      expect(f.a.length).toBeGreaterThan(30);
    }
  });

  it("contact details are consistent", () => {
    expect(site.whatsapp).toMatch(/^254\d{9}$/);
    expect(site.phone.replace(/\D/g, "")).toBe(site.whatsapp);
  });
});

describe("things we promised never to publish", () => {
  const source = ["lib", "app", "components"]
    .flatMap((dir) => readdirSync(join(process.cwd(), dir), { recursive: true, withFileTypes: true }))
    .filter((f) => f.isFile() && /\.(ts|tsx)$/.test(f.name))
    .map((f) => readFileSync(join(f.parentPath, f.name), "utf8"))
    .join("\n")
    // Only what visitors could see: drop code comments
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/\{?\/\*[\s\S]*?\*\/\}?/g, "");

  it("the SACCO client is never named", () => {
    expect(source).not.toMatch(/UN SACCO|United Nations SACCO/i);
  });

  it("no placeholder text", () => {
    expect(source).not.toMatch(/lorem ipsum|TODO:|FIXME|\bTBD\b|xxx/i);
  });

  it("the wall rate quoted in words matches the calculator", () => {
    const quoted = [...source.matchAll(/KSh ?([\d,]+) per (running )?met/gi)].map((m) => Number(m[1]!.replace(/,/g, "")));
    for (const n of quoted) expect(n).toBe(14000);
  });
});
