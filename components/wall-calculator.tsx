"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export const WALL_RATE = 14000; // KSh per running metre: 2.4 m high wall on a 0.8 m deep foundation

// Common Kenyan plot sizes, perimeter in metres (1 ft = 0.3048 m)
const plots = [
  { label: "50 × 100 ft (⅛ acre)", m: 91 },
  { label: "100 × 100 ft (¼ acre)", m: 122 },
  { label: "100 × 200 ft (½ acre)", m: 183 },
  { label: "1 acre (square)", m: 255 },
];

const ksh = (n: number) => `KSh ${Math.round(n).toLocaleString("en-KE")}`;

export function WallCalculator() {
  const [length, setLength] = useState("100");
  const m = Math.min(Math.max(Number(length) || 0, 0), 10000);
  const total = m * WALL_RATE;
  const message = `Hello Redbay Group, I used your wall calculator: about ${m} m of boundary, estimate ${ksh(total)}. I would like an exact quote. My site is in: `;

  return (
    <div className="rounded-3xl bg-charcoal-deep p-6 text-white md:p-10">
      <label htmlFor="wall-length" className="text-sm font-medium text-white/70">
        Length of your boundary (metres)
      </label>
      <div className="mt-3 flex items-center gap-3">
        <input
          id="wall-length"
          type="number"
          inputMode="decimal"
          min={1}
          max={10000}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="h-14 w-full max-w-[220px] rounded-2xl bg-white px-5 text-2xl font-semibold text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red"
        />
        <span className="text-lg text-white/70">metres</span>
      </div>
      {Number(length) > 10000 && (
        <p className="mt-2 text-sm text-white/70">That is a very long wall. The calculator stops at 10,000 m; send us the details for a proper quote.</p>
      )}

      <p className="mt-6 text-sm text-white/60">Not sure? Start from a common plot size:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {plots.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setLength(String(p.m))}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${m === p.m ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}
          >
            {p.label} · {p.m} m
          </button>
        ))}
      </div>

      <div className="mt-8 border-t border-white/10 pt-8" aria-live="polite">
        <p className="text-sm text-white/60">Estimated cost</p>
        <p className="mt-1 text-[clamp(2.4rem,7vw,3.6rem)] font-semibold leading-none tracking-tight">{ksh(total)}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/65">
          {m} m × {ksh(WALL_RATE)} per metre, for a wall 2.4 m high on a 0.8 m deep foundation. Before VAT. The gate is priced separately.
        </p>
      </div>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto"
      >
        Get an exact quote on WhatsApp
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/50">
        This is a guide, not a quote. Soil, slope, access and finish can change the price. We confirm the exact rate after seeing the site.
      </p>
    </div>
  );
}
