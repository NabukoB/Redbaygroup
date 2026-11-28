// Small pieces of logic: visitor sources, the wall calculator, the quote form and helpers.
import { describe, expect, it } from "vitest";
import { buildQuote, type QuoteAnswers } from "@/lib/quote";
import { buildVisit } from "@/lib/site-visit";
import { neighbours } from "@/lib/utils";
import { detectSource, isSource } from "@/lib/visit-source";
import { MAX_METRES, WALL_RATE, ksh, plots, wallEstimate } from "@/lib/wall";
import { sheetEstimate } from "@/lib/roofing-calc";
import { houseEstimate } from "@/lib/house-cost";

const browser = "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36";
const visit = (o: Partial<Parameters<typeof detectSource>[0]>) =>
  detectSource({ search: "", userAgent: browser, referrer: "", host: "redbaygroup.co.ke", ...o });

describe("where a visit came from", () => {
  it.each([
    ["Facebook link click", { search: "?fbclid=abc" }, "facebook"],
    ["Facebook app's own browser", { userAgent: browser + " [FBAN/EMA;FBAV/400.0;]" }, "facebook"],
    ["Facebook mobile site", { referrer: "https://m.facebook.com/" }, "facebook"],
    ["Facebook link shim", { referrer: "https://l.facebook.com/l.php?u=x" }, "facebook"],
    ["Instagram app", { userAgent: browser + " Instagram 300.0" }, "instagram"],
    ["Google search", { referrer: "https://www.google.com/" }, "google"],
    ["Google Kenya", { referrer: "https://www.google.co.ke/" }, "google"],
    ["Google Ads click", { search: "?gclid=1" }, "google"],
    ["Bing", { referrer: "https://www.bing.com/search?q=x" }, "other-search"],
    ["tagged WhatsApp link", { search: "?src=wa" }, "whatsapp"],
    ["tag is not case sensitive", { search: "?src=WA" }, "whatsapp"],
    ["utm_source tag", { search: "?utm_source=facebook" }, "facebook"],
    ["tag wins over referrer", { search: "?src=wa", referrer: "https://www.google.com/" }, "whatsapp"],
    ["TikTok", { referrer: "https://www.tiktok.com/" }, "tiktok"],
    ["X short links", { referrer: "https://t.co/abc" }, "x"],
    ["LinkedIn", { referrer: "https://www.linkedin.com/" }, "linkedin"],
    ["another website", { referrer: "https://example.org/page" }, "other-site"],
    ["typed in or WhatsApp chat (no referrer)", {}, "direct"],
    ["moving between our own pages", { referrer: "https://redbaygroup.co.ke/projects/" }, "direct"],
    ["our own site with www", { referrer: "https://www.redbaygroup.co.ke/" }, "direct"],
    ["a broken referrer", { referrer: "not a url" }, "direct"],
    ["unknown tag is ignored", { search: "?src=nonsense", referrer: "https://www.google.com/" }, "google"],
  ] as const)("%s", (_name, input, expected) => {
    expect(visit(input)).toBe(expected);
  });

  it("does not mistake look-alike sites for Facebook or Google", () => {
    expect(visit({ referrer: "https://notfacebook.com/" })).toBe("other-site");
    expect(visit({ referrer: "https://google.example.com/" })).toBe("other-site");
  });

  it("only trusts stored values that are real sources", () => {
    expect(isSource("facebook")).toBe(true);
    expect(isSource("hacker")).toBe(false);
    expect(isSource(null)).toBe(false);
  });
});

describe("perimeter wall calculator", () => {
  it("charges the published rate per metre", () => {
    expect(WALL_RATE).toBe(14000);
    expect(wallEstimate("250").total).toBe(3_500_000);
    expect(wallEstimate("100").total).toBe(1_400_000);
  });

  it("handles blanks, nonsense and negatives as zero", () => {
    for (const typed of ["", "abc", "-50"]) expect(wallEstimate(typed)).toMatchObject({ metres: 0, total: 0 });
  });

  it("accepts decimals", () => {
    expect(wallEstimate("12.5").total).toBe(175_000);
  });

  it("caps very long walls and says so", () => {
    expect(wallEstimate("20000")).toEqual({ metres: MAX_METRES, total: MAX_METRES * WALL_RATE, tooLong: true });
    expect(wallEstimate("10000").tooLong).toBe(false);
  });

  it("plot sizes match their real perimeters (within 1 m)", () => {
    const ft = 0.3048;
    const real = [2 * (50 + 100) * ft, 4 * 100 * ft, 2 * (100 + 200) * ft, 4 * Math.sqrt(43560) * ft];
    plots.forEach((p, i) => expect(Math.abs(p.m - real[i]!)).toBeLessThanOrEqual(1));
  });

  it("formats shillings with commas", () => {
    expect(ksh(3_500_000)).toBe("KSh 3,500,000");
  });
});

describe("quote form message", () => {
  const base: QuoteAnswers = { type: "", location: "", drawings: "", budget: "", start: "", details: "", name: "" };

  it("needs the project type and the site location", () => {
    expect(buildQuote(base).ok).toBe(false);
    expect(buildQuote({ ...base, type: "New home" }).ok).toBe(false);
    expect(buildQuote({ ...base, location: "Kitengela" }).ok).toBe(false);
    expect(buildQuote({ ...base, type: "New home", location: "   " }).ok).toBe(false);
  });

  it("fills gaps with 'Not said' and leaves out empty extras", () => {
    const r = buildQuote({ ...base, type: "Perimeter wall", location: "Kikuyu" });
    expect(r).toEqual({
      ok: true,
      message: "Hello Redbay Group, I would like a quote.\n\nProject: Perimeter wall\nSite location: Kikuyu\nDrawings: Not said\nBudget: Not said\nStart: Not said",
    });
  });

  it("includes details and name when given, trimmed", () => {
    const r = buildQuote({ ...base, type: "New home", location: " Nanyuki ", details: " 4 bedrooms ", name: " Jane " });
    expect(r.ok && r.message).toContain("Site location: Nanyuki\n");
    expect(r.ok && r.message.endsWith("Details: 4 bedrooms\nName: Jane")).toBe(true);
  });
});

describe("'more' links helper", () => {
  const list = ["a", "b", "c", "d"];
  it("takes the next items, wrapping round", () => {
    expect(neighbours(list, 2, 3)).toEqual(["d", "a", "b"]);
  });
  it("never includes the current item, even when the list is short", () => {
    expect(neighbours(["a", "b"], 0, 3)).toEqual(["b"]);
    expect(neighbours(["a"], 0, 3)).toEqual([]);
  });
});

describe("roofing sheets calculator", () => {
  it("rounds up the sheets across and doubles them for two slopes", () => {
    expect(sheetEstimate("10", "4", "corrugated", 2)).toMatchObject({ perSide: 14, sheets: 28, area: 80 });
    expect(sheetEstimate("10", "4", "box", 1)).toMatchObject({ perSide: 10, sheets: 10 });
  });
  it("treats blanks and nonsense as nothing", () => {
    expect(sheetEstimate("", "4", "box", 2).sheets).toBe(0);
    expect(sheetEstimate("abc", "-3", "box", 2)).toMatchObject({ sheets: 0, spare: 0 });
  });
  it("caps huge roofs and says so", () => {
    expect(sheetEstimate("500", "4", "box", 1)).toMatchObject({ width: 200, tooBig: true });
  });
});

describe("house cost calculator", () => {
  it("multiplies area by the published rate", () => {
    expect(houseEstimate("120", "standard").total).toBe(5_850_000);
    expect(houseEstimate("120", "luxury").total).toBe(10_080_000);
  });
  it("handles blanks and caps large areas", () => {
    expect(houseEstimate("", "standard").total).toBe(0);
    expect(houseEstimate("9000", "luxury")).toMatchObject({ area: 2000, tooBig: true });
  });
});

import { hybridVerdict } from "@/lib/hybrid-check";

describe("hybrid check", () => {
  const base = { wind: "windy", surroundings: "open", mount: "mast", grid: "none", night: true } as const;
  it("sends sheltered or surrounded sites to solar", () => {
    expect(hybridVerdict({ ...base, wind: "sheltered" }).verdict).toBe("solar-only");
    expect(hybridVerdict({ ...base, surroundings: "surrounded" }).verdict).toBe("solar-only");
  });
  it("asks for wind readings when the wind is unknown", () => {
    expect(hybridVerdict({ ...base, wind: "unknown" }).verdict).toBe("measure-first");
  });
  it("recommends an assessment for an open, windy site, and warns about roofs", () => {
    expect(hybridVerdict(base).verdict).toBe("worth-assessing");
    expect(hybridVerdict({ ...base, mount: "roof" }).notes.join(" ")).toMatch(/roof/);
  });
});

import { blockEstimate, concreteEstimate } from "@/lib/materials-calc";

describe("materials calculator", () => {
  it("counts blocks from wall area less openings, with 5% spare", () => {
    expect(blockEstimate("40", "3", "6")).toEqual({ area: 114, net: 1425, blocks: 1497 });
    expect(blockEstimate("0", "3", "0").blocks).toBe(0);
    expect(blockEstimate("2", "2", "100").blocks).toBe(0);
  });
  it("works out cement, sand and ballast for a mix", () => {
    expect(concreteEstimate("5", "1:2:4")).toEqual({ volume: 5, bags: 34, sand: 2.31, ballast: 4.62 });
    expect(concreteEstimate("0", "1:2:4").bags).toBe(0);
  });
});

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

describe("one source for the wall rate", () => {
  it("never types the rate into pages or guides", () => {
    const hits: string[] = [];
    const walk = (dir: string) => {
      for (const f of readdirSync(dir)) {
        const p = join(dir, f);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(ts|tsx)$/.test(f) && !p.endsWith("lib/wall.ts") && readFileSync(p, "utf8").includes("14,000")) hits.push(p);
      }
    };
    for (const d of ["app", "lib", "components"]) walk(d);
    expect(hits).toEqual([]);
  });
});

describe("site visit form message", () => {
  it("needs a reason and a place", () => {
    expect(buildVisit({ purpose: "", location: "Kikuyu", date: "", time: "", notes: "", name: "" }).ok).toBe(false);
    expect(buildVisit({ purpose: "Site visit for a quote", location: " ", date: "", time: "", notes: "", name: "" }).ok).toBe(false);
  });
  it("writes the answers out for WhatsApp and for the enquiry", () => {
    const r = buildVisit({ purpose: "Building inspection or defects check", location: "Kitengela", date: "2026-12-05", time: "Morning", notes: "Cracks in the gable wall", name: "Wanjiru" });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.message).toContain("Reason: Building inspection or defects check");
      expect(r.message).toContain("Site location: Kitengela");
      expect(r.message).toContain("Name: Wanjiru");
      expect(r.details).toBe("Preferred date: 2026-12-05\nPreferred time: Morning\nNotes: Cracks in the gable wall");
    }
  });
});
