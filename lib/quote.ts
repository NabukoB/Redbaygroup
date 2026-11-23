// Builds the WhatsApp message from the quote form. Kept separate from the form so it can be tested.
export type QuoteAnswers = { type: string; location: string; drawings: string; budget: string; start: string; details: string; name: string };

export type QuoteResult = { ok: true; message: string } | { ok: false; error: string };

export function buildQuote(a: QuoteAnswers): QuoteResult {
  const t = (s: string) => s.trim();
  if (!t(a.type) || !t(a.location)) return { ok: false, error: "Please choose the type of project and tell us where the site is." };
  const lines = [
    "Hello Redbay Group, I would like a quote.",
    "",
    `Project: ${t(a.type)}`,
    `Site location: ${t(a.location)}`,
    `Drawings: ${t(a.drawings) || "Not said"}`,
    `Budget: ${t(a.budget) || "Not said"}`,
    `Start: ${t(a.start) || "Not said"}`,
    ...(t(a.details) ? [`Details: ${t(a.details)}`] : []),
    ...(t(a.name) ? [`Name: ${t(a.name)}`] : []),
  ];
  return { ok: true, message: lines.join("\n") };
}
