// "Does wind make sense at your site?" A plain checklist, not a calculation: it points to solar only,
// measure the wind first, or a hybrid worth assessing. No power or price figures, because those need a site visit.

export type Wind = "measured" | "windy" | "unknown" | "sheltered";
export type Surroundings = "open" | "some" | "surrounded";
export type Mount = "mast" | "roof" | "unsure";
export type Grid = "none" | "weak" | "grid";

export type Answers = { wind: Wind; surroundings: Surroundings; mount: Mount; grid: Grid; night: boolean };
export type Verdict = "solar-only" | "measure-first" | "worth-assessing";

export const labels = {
  wind: { measured: "I have measured wind data", windy: "Looks windy (leaning trees, open high ground)", unknown: "I don't know", sheltered: "Sheltered, calm most days" },
  surroundings: { open: "Open land", some: "Some trees or buildings nearby", surrounded: "Surrounded by tall trees or buildings" },
  mount: { mast: "On its own mast on open ground", roof: "On the roof", unsure: "Not sure yet" },
  grid: { none: "No grid power", weak: "Grid with frequent blackouts", grid: "Reliable grid" },
} as const;

export function hybridVerdict(a: Answers): { verdict: Verdict; title: string; text: string; notes: string[] } {
  const notes: string[] = [];
  if (a.mount === "roof") notes.push("A turbine on a house roof usually gets turbulent wind and passes vibration into the building. A mast on open ground is the better choice.");
  if (a.grid === "grid" && !a.night) notes.push("With reliable grid power and little use at night, solar with net metering is usually the simpler first step.");

  if (a.wind === "sheltered" || a.surroundings === "surrounded") {
    return {
      verdict: "solar-only",
      title: "Solar and batteries are likely the better buy",
      text: "A sheltered site or one surrounded by tall trees and buildings gives a turbine little useful wind. Put the money into solar panels and batteries.",
      notes,
    };
  }
  if (a.wind === "unknown" || a.surroundings === "some") {
    return {
      verdict: "measure-first",
      title: "Measure the wind before you decide",
      text: "Wind depends heavily on the exact spot. A few months of readings on a pole at the planned height will tell you if a turbine is worth buying. Meanwhile, a solar and battery system can go ahead and be expanded later.",
      notes,
    };
  }
  return {
    verdict: "worth-assessing",
    title: "A hybrid is worth a proper site assessment",
    text: "Open ground and a windy site are the right start. Next we check the wind at the planned mast height, the foundation and what you need to run at night, then size the panels, turbine and batteries to that.",
    notes,
  };
}

export function hybridMessage(a: Answers, v: Verdict, place: string): string {
  const night = a.night ? "yes, power is needed at night" : "mostly daytime use";
  return [
    "Hello Redbay Group, I used your 'Does wind make sense at my site?' check.",
    `Wind: ${labels.wind[a.wind]}. Surroundings: ${labels.surroundings[a.surroundings]}. Turbine: ${labels.mount[a.mount]}. Power now: ${labels.grid[a.grid]}. Night use: ${night}.`,
    `Result: ${v}.`,
    `My site is in: ${place.trim() || ""}`,
  ].join(" ");
}
