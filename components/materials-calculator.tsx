"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { blockEstimate, concreteEstimate, mixes, type MixId } from "@/lib/materials-calc";

const field = "h-14 w-full rounded-2xl bg-white px-5 text-2xl font-semibold text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red";
const nf = (n: number) => n.toLocaleString("en-KE");

export function MaterialsCalculator() {
  const [length, setLength] = useState("40");
  const [height, setHeight] = useState("3");
  const [openings, setOpenings] = useState("6");
  const [volume, setVolume] = useState("5");
  const [mix, setMix] = useState<MixId>("1:2:4");
  const b = blockEstimate(length, height, openings);
  const c = concreteEstimate(volume, mix);
  const message = `Hello Redbay Group, I used your building materials calculator: about ${nf(b.blocks)} blocks for ${b.area} m² of walling, and ${c.bags} bags of cement for ${c.volume} m³ of concrete. I would like a bill of quantities for my project. My site is in: `;

  return (
    <div className="rounded-3xl bg-charcoal-deep p-6 text-white md:p-10">
      <h2 className="text-lg font-semibold">Walling blocks</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="m-len" className="text-sm font-medium text-white/70">Total wall length (m)</label>
          <input id="m-len" type="number" inputMode="decimal" min={0} value={length} onChange={(e) => setLength(e.target.value)} className={`mt-3 ${field}`} />
        </div>
        <div>
          <label htmlFor="m-h" className="text-sm font-medium text-white/70">Wall height (m)</label>
          <input id="m-h" type="number" inputMode="decimal" min={0} value={height} onChange={(e) => setHeight(e.target.value)} className={`mt-3 ${field}`} />
        </div>
        <div>
          <label htmlFor="m-o" className="text-sm font-medium text-white/70">Doors and windows (m²)</label>
          <input id="m-o" type="number" inputMode="decimal" min={0} value={openings} onChange={(e) => setOpenings(e.target.value)} className={`mt-3 ${field}`} />
        </div>
      </div>
      <p className="mt-6 text-sm text-white/60" aria-live="polite">Blocks to order, 400 × 200 mm, with 5% spare</p>
      <p className="mt-1 text-[clamp(2.2rem,6vw,3.2rem)] font-semibold leading-none tracking-tight">{nf(b.blocks)} blocks</p>
      <p className="mt-2 text-[15px] text-white/65">{b.area} m² of walling after openings.</p>

      <div className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-lg font-semibold">Concrete</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="c-v" className="text-sm font-medium text-white/70">Volume of concrete (m³)</label>
            <input id="c-v" type="number" inputMode="decimal" min={0} value={volume} onChange={(e) => setVolume(e.target.value)} className={`mt-3 ${field}`} />
          </div>
          <div>
            <label htmlFor="c-m" className="text-sm font-medium text-white/70">Mix (cement : sand : ballast)</label>
            <select id="c-m" value={mix} onChange={(e) => setMix(e.target.value as MixId)} className="mt-3 h-14 w-full rounded-2xl bg-white px-4 text-base font-medium text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red">
              {mixes.map((m) => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3" aria-live="polite">
          <div><dt className="text-sm text-white/60">Cement (50 kg bags)</dt><dd className="mt-1 text-3xl font-semibold">{nf(c.bags)}</dd></div>
          <div><dt className="text-sm text-white/60">Sand</dt><dd className="mt-1 text-3xl font-semibold">{c.sand} m³</dd></div>
          <div><dt className="text-sm text-white/60">Ballast</dt><dd className="mt-1 text-3xl font-semibold">{c.ballast} m³</dd></div>
        </dl>
      </div>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto"
      >
        Get a bill of quantities on WhatsApp
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/50">A guide for planning, not a bill of quantities. Mortar, plaster, steel and the real wall layout change the totals.</p>
    </div>
  );
}
