"use client";

import { useRef, useState, type FormEvent } from "react";
import { send } from "@/components/tracker";
import { buildQuote } from "@/lib/quote";
import { site } from "@/lib/site";

// Short quote form. Two ways to send: open WhatsApp with the answers written out,
// or post them to inquiry.php, which emails the office and keeps a private copy.
const types = [
  "New home",
  "Perimeter wall",
  "School building",
  "Shell and roofing only",
  "Finishes or interiors",
  "Office renovation",
  "Waterproofing or damp",
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
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const mode = useRef<"whatsapp" | "enquiry">("whatsapp");

  const sendEnquiry = async (f: FormData) => {
    const phone = String(f.get("phone") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    if (!/^[+0-9 ()-]{7,30}$/.test(phone) && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please add a phone number or email so we can reply.");
      return;
    }
    setBusy(true);
    try {
      f.set("page", location.pathname);
      const r = await fetch("/inquiry.php", { method: "POST", body: f });
      const j = (await r.json()) as { ok?: boolean };
      if (!j.ok) throw new Error("failed");
      setSent(true);
    } catch {
      setError("We could not send that. Please use the WhatsApp button, or call us.");
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "");
    const result = buildQuote({ type: get("type"), location: get("location"), drawings: get("drawings"), budget: get("budget"), start: get("start"), details: get("details"), name: get("name") });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    if (mode.current === "enquiry") {
      void sendEnquiry(f);
      return;
    }
    if (location.hostname === "redbaygroup.co.ke") send("whatsapp", location.pathname);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(result.message)}`, "_blank", "noopener");
  };

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-mist p-8 md:p-10">
        <h2 className="heading text-[28px]">Thank you. We have your enquiry.</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate">We will reply on the phone number or email you gave us, usually within a working day.</p>
      </div>
    );
  }

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
        <div>
          <label htmlFor="q-phone" className={label}>Phone (for the enquiry option)</label>
          <input id="q-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 0712 345 678" className={field} />
        </div>
        <div>
          <label htmlFor="q-email" className={label}>Email (optional)</label>
          <input id="q-email" name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="q-website">Leave this empty</label>
          <input id="q-website" name="website" tabIndex={-1} autoComplete="off" />
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
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="submit" onClick={() => (mode.current = "whatsapp")} className="inline-flex h-14 w-full items-center justify-center rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90 sm:w-auto">
          Send on WhatsApp
        </button>
        <button type="submit" disabled={busy} onClick={() => (mode.current = "enquiry")} className="inline-flex h-14 w-full items-center justify-center rounded-full border border-charcoal-deep px-8 text-base font-semibold text-charcoal-deep transition-colors hover:bg-white disabled:opacity-60 sm:w-auto">
          {busy ? "Sending…" : "Send as an enquiry"}
        </button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate">
        WhatsApp opens with your answers filled in, so you can add photos or drawings. Or send an enquiry here and we reply by phone or email. Enquiries are saved only so we can reply, and never sold.
      </p>
    </form>
  );
}
