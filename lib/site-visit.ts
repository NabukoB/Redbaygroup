// Builds the WhatsApp message and the enquiry text for the "book a site visit" form. Kept apart so it can be tested.
export type VisitAnswers = { purpose: string; location: string; date: string; time: string; notes: string; name: string };

export type VisitResult = { ok: true; message: string; details: string } | { ok: false; error: string };

export function visitDetails(a: Pick<VisitAnswers, "date" | "time" | "notes">): string {
  const t = (s: string) => s.trim();
  return [`Preferred date: ${t(a.date) || "Not said"}`, `Preferred time: ${t(a.time) || "Not said"}`, ...(t(a.notes) ? [`Notes: ${t(a.notes)}`] : [])].join("\n");
}

export function buildVisit(a: VisitAnswers): VisitResult {
  const t = (s: string) => s.trim();
  if (!t(a.purpose) || !t(a.location)) return { ok: false, error: "Please choose what the visit is for and tell us where the site is." };
  const details = visitDetails(a);
  const lines = ["Hello Redbay Group, I would like to book a site visit.", "", `Reason: ${t(a.purpose)}`, `Site location: ${t(a.location)}`, details, ...(t(a.name) ? [`Name: ${t(a.name)}`] : [])];
  return { ok: true, message: lines.join("\n"), details };
}
