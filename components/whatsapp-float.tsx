"use client";

import { MessageCircle } from "lucide-react";
import type { MouseEvent } from "react";
import { site } from "@/lib/site";

const link = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Always-visible WhatsApp button. The opening message names the page the visitor
// was reading, so every enquiry arrives with context.
export function WhatsAppFloat() {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const page = document.title.split(" | ")[0];
    e.currentTarget.href = link(`Hello Redbay Group, I was reading "${page}" on your website and would like to talk about my project.`);
  };
  return (
    <a
      href={link("Hello Redbay Group, I would like to talk about my project.")}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-charcoal-deep pl-4 pr-5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red md:bottom-6 md:right-6"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]">
        <MessageCircle className="h-4.5 w-4.5 text-white" strokeWidth={2.2} aria-hidden="true" />
      </span>
      Get a quote
      <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
    </a>
  );
}
