"use client";

import { useState, type FormEvent } from "react";
import { send } from "@/components/tracker";
import { site } from "@/lib/site";

// Short quote form. Nothing is stored or sent to a server: on submit it opens
// WhatsApp with the answers written out, so every enquiry arrives ready to price.
const types = [
  "New home",
  "Perimeter wall",
  "School building",
  "Shell and roofing only",
  "Finishes or interiors",
  "Office renovation",
  "Gazebo or outdoor structure",
  "Solar or wind power",
  "Bill of quantities only",
  "Something else",
];
const budgets = ["Not sure yet", "Under KSh 1 million", "KSh 1–3 million", "KSh 3–6 million", "KSh 6–10 million", "Over KSh 10 million"];
const starts = ["As soon as possible", "Within 3 months", "In 3–6 months", "Later than 6 months", "Just planning"];
const drawingsOpts = ["Yes, approved drawings", "Yes, but not yet approved", "No drawings yet"];

const field = "mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red";
const label = "block text-sm font-medium text-charcoal-deep";

export function QuoteForm() {
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (!get("type") || !get("location")) {
      setError("Please choose the type of project and tell us where the site is.");
      return;
    }
    setError("");
    const lines = [
      "Hello Redbay Group, I would like a quote.",
      "",
      `Project: ${get("type")}`,
      `Site location: ${get("location")}`,
      `Drawings: ${get("drawings") || "Not said"}`,
      `Budget: ${get("budget") || "Not said"}`,
      `Start: ${get("start") || "Not said"}`,
      get("details") ? `Details: ${get("details")}` : "",
      get("name") ? `Name: ${get("name")}` : "",
    ].filter((l, i) => l !== "" || i === 1);
    if (location.hostname === "redbaygroup.co.ke") send("whatsapp", location.pathname);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-mist p-6 md:p-10" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="q-type" className={label}>What do you want to build? *</label>
          <select id="q-type" name="type" required defaultValue="" className={field}>
            <option value="" disabled>Choose one</option>
            {types.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="q-location" className={label}>Where is the site? *</label>
          <input id="q-location" name="location" required placeholder="Town or area, e.g. Kitengela" className={field} />
        </div>
        <div>
          <label htmlFor="q-drawings" className={label}>Do you have drawings?</label>
          <select id="q-drawings" name="drawings" defaultValue="" className={field}>
            <option value="">Choose one</option>
            {drawingsOpts.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="q-budget" className={label}>Rough budget</label>
          <select id="q-budget" name="budget" defaultValue="" className={field}>
            <option value="">Choose one</option>
            {budgets.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="q-start" className={label}>When do you want to start?</label>
          <select id="q-start" name="start" defaultValue="" className={field}>
            <option value="">Choose one</option>
            {starts.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="q-name" className={label}>Your name</label>
          <input id="q-name" name="name" autoComplete="name" className={field} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="q-details" className={label}>Anything else we should know?</label>
          <textarea
            id="q-details"
            name="details"
            rows={4}
            placeholder="Size, number of bedrooms, boundary length, finishes you like…"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red"
          />
        </div>
      </div>
      {error && (
        <p role="alert" className="mt-5 text-[15px] font-medium text-red">
          {error}
        </p>
      )}
      <button type="submit" className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto">
        Send on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-relaxed text-slate">
        This opens WhatsApp with your answers filled in, so you can add photos or drawings before sending. Nothing is stored on this website.
      </p>
    </form>
  );
}
