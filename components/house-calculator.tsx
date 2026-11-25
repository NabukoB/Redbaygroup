"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { MAX_AREA, houseEstimate, sizes, tiers, type TierId } from "@/lib/house-cost";
import { ksh } from "@/lib/wall";

export function HouseCalculator() {
  const [area, setArea] = useState("120");
  const [tier, setTier] = useState<TierId>("standard");
  const e = houseEstimate(area, tier);
  const name = tiers.find((t) => t.id === tier)!.label.toLowerCase();
  const message = `Hello Redbay Group, I used your house cost guide: about ${e.area} m² (${name}), published guide ${ksh(e.total)}. I would like a BoQ and a real quote for my house. My site is in: `;

  return (
    <div className="rounded-3xl bg-charcoal-deep p-6 text-white md:p-10">
      <label htmlFor="house-area" className="text-sm font-medium text-white/70">Floor area of the house (m²)</label>
      <div className="mt-3 flex items-center gap-3">
        <input id="house-area" type="number" inputMode="decimal" min={1} max={MAX_AREA} value={area} onChange={(ev) => setArea(ev.target.value)} className="h-14 w-full max-w-[220px] rounded-2xl bg-white px-5 text-2xl font-semibold text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red" />
        <span className="text-lg text-white/70">m²</span>
      </div>
      {e.tooBig && <p className="mt-2 text-sm text-white/70">The calculator stops at 2,000 m². Send us the details for a proper quote.</p>}

      <p className="mt-6 text-sm text-white/60">Not sure? Start from a common size:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {sizes.map((s) => (
          <button key={s.label} type="button" onClick={() => setArea(String(s.m2))} className={`rounded-full px-4 py-2 text-sm transition-colors ${e.area === s.m2 ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}>
            {s.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-white/60">Type of house</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tiers.map((t) => (
          <button key={t.id} type="button" onClick={() => setTier(t.id)} className={`rounded-full px-4 py-2 text-sm transition-colors ${tier === t.id ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}>
            {t.label} · {ksh(t.perM2)} per m²
          </button>
        ))}
      </div>

      <div className="mt-8 border-t border-white/10 pt-8" aria-live="polite">
        <p className="text-sm text-white/60">Published guide cost for the building</p>
        <p className="mt-1 text-[clamp(2.4rem,7vw,3.6rem)] font-semibold leading-none tracking-tight">{ksh(e.total)}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/65">
          {e.area} m² × {ksh(e.perM2)} per m². This uses the published Nairobi and Central figure for a {name}, from the Institute of Quantity Surveyors of Kenya (IQSK) as reported in October 2025. It is not a Redbay rate. Land, approvals, fittings, furniture and the perimeter wall are not included.
        </p>
      </div>

      <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto">
        Get a real quote on WhatsApp
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/50">
        Real cost depends on your drawings, finishes, soil, site access and the year. A bill of quantities from your drawings gives the true figure.
      </p>
    </div>
  );
}
