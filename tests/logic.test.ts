// Small pieces of logic: visitor sources, the wall calculator, the quote form and helpers.
import { describe, expect, it } from "vitest";
import { buildQuote, type QuoteAnswers } from "@/lib/quote";
import { neighbours } from "@/lib/utils";
import { detectSource, isSource } from "@/lib/visit-source";
import { MAX_METRES, WALL_RATE, ksh, plots, wallEstimate } from "@/lib/wall";

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
