"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { detectSource, isSource, type Source } from "@/lib/visit-source";

// Counts page views and WhatsApp/phone taps on our own server (hit.php).
// No cookies, no IP addresses and no outside services: just a tally per page per day,
// plus where each visit came from (Facebook, Google, direct and so on).

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
  if (isSource(saved)) {
    memo = saved;
    return { src: memo, landing: false };
  }
  memo = detectSource({ search: location.search, userAgent: navigator.userAgent, referrer: document.referrer, host: location.hostname });
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
    if (landing) {
      body.set("l", "1");
      try {
        body.set("z", Intl.DateTimeFormat().resolvedOptions().timeZone || ""); // a rough place (for example Europe/London), not an address
      } catch {
        /* optional */
      }
    }
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
