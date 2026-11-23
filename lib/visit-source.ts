// Works out where a visit came from, from what the browser knows when the page opens.
// Kept free of browser globals so it can be tested on its own.

export const sources = ["facebook", "instagram", "google", "other-search", "whatsapp", "tiktok", "x", "linkedin", "other-site", "direct"] as const;
export type Source = (typeof sources)[number];

// Tags we can add to links we share ourselves, e.g. ?src=wa
const tags: Record<string, Source> = { fb: "facebook", facebook: "facebook", ig: "instagram", instagram: "instagram", wa: "whatsapp", whatsapp: "whatsapp", google: "google", gbp: "google", tiktok: "tiktok", tt: "tiktok", x: "x", twitter: "x", li: "linkedin", linkedin: "linkedin" };

const referrers: [RegExp, Source][] = [
  [/(^|\.)(facebook\.com|fb\.com|fb\.me|messenger\.com)$/, "facebook"],
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)google\.(com?\.)?[a-z]{2,3}$/, "google"],
  [/(^|\.)(bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|brave\.com|yandex\.[a-z]+)$/, "other-search"],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, "whatsapp"],
  [/(^|\.)tiktok\.com$/, "tiktok"],
  [/(^|\.)(t\.co|x\.com|twitter\.com)$/, "x"],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, "linkedin"],
];

export function detectSource(v: { search: string; userAgent: string; referrer: string; host: string }): Source {
  const q = new URLSearchParams(v.search);
  const tag = tags[(q.get("src") || q.get("utm_source") || "").toLowerCase()];
  if (tag) return tag;
  if (q.has("fbclid")) return "facebook";
  if (q.has("gclid")) return "google";
  if (/FBAN|FBAV|FB_IAB|FBIOS/.test(v.userAgent)) return "facebook";
  if (/Instagram/.test(v.userAgent)) return "instagram";
  let from = "";
  try {
    from = v.referrer ? new URL(v.referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    /* a bad referrer counts as none */
  }
  if (!from || from === v.host.replace(/^www\./, "")) return "direct";
  return referrers.find(([re]) => re.test(from))?.[1] ?? "other-site";
}

// Checks a stored value really is one of our sources before trusting it
export const isSource = (s: unknown): s is Source => (sources as readonly unknown[]).includes(s);
