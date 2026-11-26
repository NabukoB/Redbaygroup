"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { hybridMessage, hybridVerdict, labels, type Answers } from "@/lib/hybrid-check";

function Choice<T extends string>({ name, legend, options, value, onChange }: { name: string; legend: string; options: Record<T, string>; value: T; onChange: (v: T) => void }) {
  return (
    <fieldset className="mt-6">
      <legend className="text-sm font-medium text-white/70">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {(Object.keys(options) as T[]).map((k) => (
          <label key={k} className={`cursor-pointer rounded-full px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-red ${value === k ? "bg-white text-charcoal-deep" : "bg-white/10 hover:bg-white/20"}`}>
            <input type="radio" name={name} value={k} checked={value === k} onChange={() => onChange(k)} className="sr-only" />
            {options[k]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function HybridCheck() {
  const [a, setA] = useState<Answers>({ wind: "unknown", surroundings: "some", mount: "mast", grid: "weak", night: true });
  const [place, setPlace] = useState("");
  const r = hybridVerdict(a);
  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => setA((x) => ({ ...x, [k]: v }));

  return (
    <div className="rounded-3xl bg-charcoal-deep p-6 text-white md:p-10">
      <Choice name="wind" legend="How windy is the site?" options={labels.wind} value={a.wind} onChange={(v) => set("wind", v)} />
      <Choice name="surroundings" legend="What is around the planned turbine spot?" options={labels.surroundings} value={a.surroundings} onChange={(v) => set("surroundings", v)} />
      <Choice name="mount" legend="Where would the turbine go?" options={labels.mount} value={a.mount} onChange={(v) => set("mount", v)} />
      <Choice name="grid" legend="Power at the site today" options={labels.grid} value={a.grid} onChange={(v) => set("grid", v)} />
      <Choice name="night" legend="Do you need power at night?" options={{ yes: "Yes", no: "Mostly daytime" }} value={a.night ? "yes" : "no"} onChange={(v) => set("night", v === "yes")} />

      <div className="mt-8 border-t border-white/10 pt-8" aria-live="polite">
        <p className="text-sm text-white/60">Our guide for your site</p>
        <p className="mt-1 text-2xl font-semibold leading-snug tracking-tight">{r.title}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/70">{r.text}</p>
        {r.notes.map((n) => (
          <p key={n} className="mt-3 text-[15px] leading-relaxed text-white/70">{n}</p>
        ))}
      </div>

      <label htmlFor="hy-place" className="mt-8 block text-sm font-medium text-white/70">Where is the site? (town or county)</label>
      <input
        id="hy-place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="mt-3 h-14 w-full max-w-md rounded-2xl bg-white px-5 text-lg text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red"
      />
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(hybridMessage(a, r.verdict, place))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto"
      >
        Ask Redbay Energy about my site
      </a>
      <p className="mt-4 text-sm leading-relaxed text-white/50">This is a first guide, not an assessment. Wind varies from one spot to the next, so we confirm on site before recommending a turbine.</p>
    </div>
  );
}
