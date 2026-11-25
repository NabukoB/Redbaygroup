"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { site } from "@/lib/site";

// Share a page on WhatsApp or Facebook, or copy its link. Shared links carry ?src=wa or ?src=fb so the stats show where visits came from.
// WhatsApp uses api.whatsapp.com (not wa.me) so a share is never counted as a customer message tap.
export function ShareButtons({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const page = `${site.url}${path}`;
  const wa = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${page}?src=wa`)}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${page}?src=fb`)}`;
  const pill = "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-[15px] font-medium text-charcoal-deep transition-colors hover:bg-mist";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${page}?src=wa`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard can be blocked */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3" aria-label="Share this page">
      <span className="text-sm text-slate">Share this:</span>
      <a className={pill} href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className={pill} href={fb} target="_blank" rel="noopener noreferrer">Facebook</a>
      <button type="button" onClick={copy} className={pill}>
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
