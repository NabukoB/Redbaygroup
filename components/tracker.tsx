"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Counts page views and WhatsApp/phone taps on our own server (hit.php).
// No cookies, no IP addresses and no outside services: just a tally per page per day.
const send = (event: "view" | "whatsapp" | "call", path: string) => {
  try {
    const body = new URLSearchParams({ e: event, p: path });
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
