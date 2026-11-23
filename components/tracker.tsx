"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Counts page views and WhatsApp/phone taps on our own server (hit.php).
// No cookies, no IP addresses and no outside services: just a tally per page per day,
// plus where each visit came from (Facebook, Google, direct and so on).

type Source = "facebook" | "instagram" | "google" | "other-search" | "whatsapp" | "tiktok" | "x" | "linkedin" | "other-site" | "direct";
const tags: Record<string, Source> = { fb: "facebook", facebook: "facebook", ig: "instagram", instagram: "instagram", wa: "whatsapp", whatsapp: "whatsapp", google: "google", gbp: "google", tiktok: "tiktok", tt: "tiktok", x: "x", twitter: "x", li: "linkedin", linkedin: "linkedin" };

// Works out where this visit came from: a ?src= tag on the link, the app's own browser, or the referring site.
const detect = (): Source => {
  const q = new URLSearchParams(location.search);
  const tag = tags[(q.get("src") || q.get("utm_source") || "").toLowerCase()];
  if (tag) return tag;
  if (q.has("fbclid")) return "facebook";
  if (q.has("gclid")) return "google";
  const ua = navigator.userAgent;
  if (/FBAN|FBAV|FB_IAB|FBIOS/.test(ua)) return "facebook";
  if (/Instagram/.test(ua)) return "instagram";
  let host = "";
  try {
    host = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    /* ignore a bad referrer */
  }
  if (!host || host === location.hostname) return "direct";
  if (/(^|\.)(facebook\.com|fb\.com|fb\.me|messenger\.com)$/.test(host)) return "facebook";
  if (/(^|\.)instagram\.com$/.test(host)) return "instagram";
  if (/(^|\.)google\.[a-z.]+$/.test(host)) return "google";
  if (/(^|\.)(bing\.com|duckduckgo\.com|yahoo\.com|ecosia\.org|brave\.com|yandex\.[a-z]+)$/.test(host)) return "other-search";
  if (/(^|\.)(whatsapp\.com|wa\.me)$/.test(host)) return "whatsapp";
  if (/(^|\.)tiktok\.com$/.test(host)) return "tiktok";
  if (/(^|\.)(t\.co|x\.com|twitter\.com)$/.test(host)) return "x";
  if (/(^|\.)(linkedin\.com|lnkd\.in)$/.test(host)) return "linkedin";
  return "other-site";
};

// Remembered for this browser tab only, so later taps are credited to how the visit started.
let memo: Source | null = null;
const KEY = "rb_src";
const source = (): { src: Source; landing: boolean } => {
  if (memo) return { src: memo, landing: false };
  let saved: string | null = null;
  try {
    saved = sessionStorage.getItem(KEY);
  } catch {
    /* storage can be blocked */
  }
  if (saved) {
    memo = saved as Source;
    return { src: memo, landing: false };
  }
  memo = detect();
  try {
    sessionStorage.setItem(KEY, memo);
  } catch {
    /* fine without it */
  }
  return { src: memo, landing: true };
};

export const send = (event: "view" | "whatsapp" | "call", path: string) => {
  try {
    const { src, landing } = source();
    const body = new URLSearchParams({ e: event, p: path, s: src });
    if (landing) body.set("l", "1");
    if (!navigator.sendBeacon?.("/hit.php", body)) fetch("/hit.php", { method: "POST", body, keepalive: true }).catch(() => {});
  } catch {
    /* counting must never break the page */
  }
};

export function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (location.hostname === "redbaygroup.co.ke") send("view", pathname);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || location.hostname !== "redbaygroup.co.ke") return;
      if (a.href.startsWith("https://wa.me/")) send("whatsapp", location.pathname);
      else if (a.href.startsWith("tel:")) send("call", location.pathname);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
