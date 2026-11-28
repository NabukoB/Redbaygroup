"use client";

import { useRef, useState, type FormEvent } from "react";
import { send } from "@/components/tracker";
import { buildVisit } from "@/lib/site-visit";
import { site } from "@/lib/site";

// Two ways to send: open WhatsApp with the answers written out, or post them to inquiry.php,
// which emails the office and keeps a private copy.
const purposes = [
  "Site visit for a quote",
  "Site supervision of my build",
  "Building inspection or defects check",
  "Check the site before buying or building",
  "Something else",
];
const times = ["Morning", "Afternoon", "Any time"];

const field = "mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-charcoal-deep outline-none focus-visible:ring-2 focus-visible:ring-red";
const label = "block text-sm font-medium text-charcoal-deep";

export function SiteVisitForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const mode = useRef<"whatsapp" | "enquiry">("whatsapp");

  const sendEnquiry = async (f: FormData, details: string) => {
    const phone = String(f.get("phone") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    if (!/^[+0-9 ()-]{7,30}$/.test(phone) && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please add a phone number or email so we can reply.");
      return;
    }
    const body = new FormData();
    body.set("type", `Site visit: ${String(f.get("purpose") ?? "")}`);
    body.set("location", String(f.get("location") ?? ""));
    body.set("details", details);
    body.set("name", String(f.get("name") ?? ""));
    body.set("phone", phone);
    body.set("email", email);
    body.set("website", String(f.get("website") ?? ""));
    body.set("page", location.pathname);
    setBusy(true);
    try {
      const r = await fetch("/inquiry.php", { method: "POST", body });
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
    const result = buildVisit({ purpose: get("purpose"), location: get("location"), date: get("date"), time: get("time"), notes: get("notes"), name: get("name") });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    if (mode.current === "enquiry") {
      void sendEnquiry(f, result.details);
      return;
    }
    if (location.hostname === "redbaygroup.co.ke") send("whatsapp", location.pathname);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(result.message)}`, "_blank", "noopener");
  };

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-mist p-8 md:p-10">
        <h2 className="heading text-[28px]">Thank you. We have your request.</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate">We will contact you on the phone number or email you gave us to confirm the day and time.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-mist p-6 md:p-10" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="v-purpose" className={label}>What is the visit for? *</label>
          <select id="v-purpose" name="purpose" required defaultValue="" className={field}>
            <option value="" disabled>Choose one</option>
            {purposes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="v-location" className={label}>Where is the site? *</label>
          <input id="v-location" name="location" required placeholder="Town or area, e.g. Kitengela" className={field} />
        </div>
        <div>
          <label htmlFor="v-date" className={label}>Preferred date</label>
          <input id="v-date" name="date" type="date" className={field} />
        </div>
        <div>
          <label htmlFor="v-time" className={label}>Preferred time</label>
          <select id="v-time" name="time" defaultValue="" className={field}>
            <option value="">Choose one</option>
            {times.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="v-name" className={label}>Your name</label>
          <input id="v-name" name="name" autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="v-phone" className={label}>Phone (for the enquiry option)</label>
          <input id="v-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 0712 345 678" className={field} />
        </div>
        <div>
          <label htmlFor="v-email" className={label}>Email (optional)</label>
          <input id="v-email" name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="v-website">Leave this empty</label>
          <input id="v-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="v-notes" className={label}>Anything we should know about the site?</label>
          <textarea
            id="v-notes"
            name="notes"
            rows={4}
            placeholder="Stage of the build, access to the plot, what worries you…"
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
          {busy ? "Sending…" : "Send as a request"}
        </button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate">
        This is a request, not a confirmed booking. We reply to agree the day and time, and tell you about any visit fee before we come. Your details are used only to reply, and never sold.
      </p>
    </form>
  );
}
