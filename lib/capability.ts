// Facts for the institutional capability statement: used by the page and the PDF so they always match.
import { areas, companies, projects, site } from "@/lib/site";

export const facts: [string, string][] = [
  ["Legal name", site.legal],
  ["Trading as", site.name],
  ["Registration", `${site.nca}, National Construction Authority (NCA)`],
  ["Operating since", `${site.founded}, incorporated ${site.incorporated}`],
  ["Office", site.address],
  ["Insurance", "Contractor's All Risk insurance on our projects"],
  ["Team", "A small permanent team runs every site, with trusted tradespeople engaged for each project. Plant and equipment is hired as each job needs it."],
  ["Contact", `${site.phone}, ${site.email}`],
];

export const divisions = companies.map((c) => ({ name: c.name, text: c.text }));

export const process = [
  "An itemised bill of quantities from your drawings or brief, with labour and materials shown separately",
  "A phased programme and one fixed quotation",
  "Supervised construction by our own team, to the approved drawings",
  "Written inspection reports with photos at key stages, where you ask for them",
  "A handover walk-through and a list of items to fix",
];

export const documents = ["Company registration", "NCA registration certificate", "Contractor's All Risk insurance certificate", "Company profile with project photos"];

const pick = ["merishaw-school", "sacco-office-nairobi", "nanyuki-baraka-home", "lukenya-four-bedroom", "kikuyu-house", "diani-maisonette"];
export const selectedWork = pick
  .map((s) => projects.find((p) => p.slug === s))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({ slug: p.slug as string, name: p.name, place: p.place, note: p.note }));

export const servedAreas = areas;
