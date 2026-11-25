// The Knowledge Hub: every guide sits in exactly one topic, and every link on a topic points somewhere real.
import { describe, expect, it } from "vitest";
import { insights } from "@/lib/insights";
import { topics } from "@/lib/knowledge";
import { services } from "@/lib/services";
import { companies } from "@/lib/site";

const known = new Set([
  "/", "/projects/", "/designs/", "/services/", "/get-a-quote/", "/bill-of-quantities-service/",
  "/house-cost-calculator/", "/build-in-kenya-from-abroad/", "/perimeter-wall-calculator/", "/roofing-sheets-calculator/",
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
});
