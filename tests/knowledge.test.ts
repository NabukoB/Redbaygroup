// The Knowledge Hub: every guide sits in exactly one topic, and every link on a topic points somewhere real.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { insights } from "@/lib/insights";
import { guideHelp, topics } from "@/lib/knowledge";
import { services } from "@/lib/services";
import { companies } from "@/lib/site";

const known = new Set([
  "/", "/projects/", "/designs/", "/services/", "/get-a-quote/", "/bill-of-quantities-service/",
  "/house-cost-calculator/", "/build-in-kenya-from-abroad/", "/hybrid-solar-wind-systems/", "/contractor-checklist/", "/perimeter-wall-calculator/", "/roofing-sheets-calculator/",
  ...services.map((s) => `/services/${s.slug}/`),
  ...companies.map((c) => `/companies/${c.slug}/`),
]);

describe("knowledge hub", () => {
  it("puts every guide in exactly one topic", () => {
    const all = topics.flatMap((t) => t.guides);
    expect(all.filter((s, i) => all.indexOf(s) !== i)).toEqual([]);
    expect(insights.map((i) => i.slug).filter((s) => !all.includes(s))).toEqual([]);
    for (const s of all) expect(insights.some((i) => i.slug === s), s).toBe(true);
  });
  it("has unique topic slugs and sensible page text", () => {
    expect(new Set(topics.map((t) => t.slug)).size).toBe(topics.length);
    for (const t of topics) {
      expect(t.seoTitle.length, t.slug).toBeLessThanOrEqual(55);
      expect(t.seoDescription.length, t.slug).toBeGreaterThanOrEqual(70);
      expect(t.seoDescription.length, t.slug).toBeLessThanOrEqual(160);
      expect(t.help.length, t.slug).toBeGreaterThanOrEqual(2);
    }
  });
  it("only links to pages that exist", () => {
    for (const t of topics) for (const h of t.help) expect(known.has(h.href), `${t.slug}: ${h.href}`).toBe(true);
  });
  it("sends each per-guide help list to real guides and real pages", () => {
    for (const [slug, list] of Object.entries(guideHelp)) {
      expect(insights.some((i) => i.slug === slug), slug).toBe(true);
      expect(list.length, slug).toBeGreaterThanOrEqual(2);
      for (const h of list) expect(known.has(h.href), `${slug}: ${h.href}`).toBe(true);
    }
  });
  it("links to the site setup service from the wall pages", () => {
    for (const s of ["perimeter-wall-cost-kenya", "perimeter-walls-what-to-know"]) expect(guideHelp[s]!.some((h) => h.href === "/services/site-setup/"), s).toBe(true);
  });
  it("has a share image for every guide, topic and page that names one", () => {
    const names = [
      "hub", "contractor-checklist", "roofing-sheets-calculator", "house-cost-calculator", "perimeter-wall-calculator", "build-in-kenya-from-abroad", "hybrid-solar-wind-systems",
      ...topics.map((t) => `t-${t.slug}`),
      ...insights.map((i) => `g-${i.slug}`),
    ];
    for (const n of names) expect(existsSync(join(process.cwd(), "public", "share", `${n}.png`)), `run scripts/make-share-cards.sh: missing ${n}`).toBe(true);
  });
});
