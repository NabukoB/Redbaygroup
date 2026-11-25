"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { profiles, sheetEstimate, type ProfileId } from "@/lib/roofing-calc";

const field = "h-14 w-full rounded-2xl bg-white px-5 text-2xl font-semibold text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red";

export function RoofingCalculator() {
  const [width, setWidth] = useState("10");
  const [run, setRun] = useState("4");
  const [profile, setProfile] = useState<ProfileId>("corrugated");
  const [sides, setSides] = useState<1 | 2>(2);
  const e = sheetEstimate(width, run, profile, sides);
  const label = profiles.find((p) => p.id === profile)!.label.toLowerCase();
  const message = `Hello Redbay Group, I used your roofing sheets calculator: about ${e.sheets} ${label} sheets, each ${e.run} m long, for a roof of ${e.area} m². I would like a quote for the roofing. My site is in: `;

  return (
    <div className="rounded-3xl bg-charcoal-deep p-6 text-white md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="roof-width" className="text-sm font-medium text-white/70">Roof width along the ridge (metres)</label>
          <input id="roof-width" type="number" inputMode="decimal" min={1} value={width} onChange={(ev) => setWidth(ev.target.value)} className={`mt-3 ${field}`} />
        </div>
        <div>
          <label htmlFor="roof-run" className="text-sm font-medium text-white/70">Ridge to eaves, with overhang (metres)</label>
          <input id="roof-run" type="number" inputMode="decimal" min={1} value={run} onChange={(ev) => setRun(ev.target.value)} className={`mt-3 ${field}`} />
        </div>
      </div>

      <p className="mt-6 text-sm text-white/60">Sheet profile</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {profiles.map((p) => (
          <button key={p.id} type="button" onClick={() => setProfile(p.id)} className={`rounded-full px-4 py-2 text-sm transition-colors ${profile === p.id ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}>
            {p.label} · covers {Math.round(p.cover * 1000)} mm
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-white/60">Roof shape</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {([[1, "One slope"], [2, "Two slopes (gable)"]] as const).map(([n, t]) => (
          <button key={n} type="button" onClick={() => setSides(n)} className={`rounded-full px-4 py-2 text-sm transition-colors ${sides === n ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}>
            {t}
          </button>
        ))}
      </div>
      {e.tooBig && <p className="mt-3 text-sm text-white/70">The calculator stops at 200 m. Send us the details for a proper count.</p>}

      <div className="mt-8 border-t border-white/10 pt-8" aria-live="polite">
        <p className="text-sm text-white/60">Sheets needed</p>
        <p className="mt-1 text-[clamp(2.4rem,7vw,3.6rem)] font-semibold leading-none tracking-tight">{e.sheets} sheets</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/65">
          {e.perSide} sheets across each slope ({e.width} m ÷ {Math.round(e.cover * 1000)} mm cover, rounded up), each {e.run} m long. Add {e.spare} spare for cutting and damage. Roof area about {e.area} m². Ridge caps and flashings are bought separately.
        </p>
      </div>

      <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto">
        Get a roofing quote on WhatsApp
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/50">
        A guide, not a quote. Hips, valleys, dormers and sheets that run beyond the roof edge change the count. We confirm the exact order after seeing the roof or the drawings.
      </p>
    </div>
  );
}
