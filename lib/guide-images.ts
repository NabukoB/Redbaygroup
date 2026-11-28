// A picture for every guide. Where Redbay has a real photo that fits, it is used (with the project named underneath).
// Where it does not (for example solar, wind or paperwork topics), the guide gets an illustrated panel instead.
import { imgSrc, projects } from "@/lib/site";

export type GuidePhoto = { kind: "photo"; dir: "projects" | "designs"; slug: string; file: string; alt: string };
export type GuidePanel = { kind: "panel"; icon: "sun" | "plug" | "thermometer" | "wind" | "windsun" | "droplets" | "file" | "clipboard" | "stamp" | "rain" | "tank"; label: string };
export type GuideImage = GuidePhoto | GuidePanel;

const p = (slug: string, file: string, alt: string): GuidePhoto => ({ kind: "photo", dir: "projects", slug, file, alt });
const d = (slug: string, file: string, alt: string): GuidePhoto => ({ kind: "photo", dir: "designs", slug, file, alt });
const panel = (icon: GuidePanel["icon"], label: string): GuidePanel => ({ kind: "panel", icon, label });

export const guideImages: Record<string, GuideImage> = {
  // Building costs and BoQs
  "cost-of-building-a-house-per-square-metre-kenya": p("nanyuki-baraka-home", "finished-front", "Finished two-storey maisonette in Baraka Estate, Nanyuki, with balconies and a boundary wall"),
  "how-to-read-a-bill-of-quantities": panel("file", "Bill of quantities"),
  "does-your-quotation-include-everything": panel("clipboard", "Quotation checklist"),
  "perimeter-wall-cost-kenya": p("karen-perimeter-wall", "finished-panels", "Finished stone perimeter wall panels in Karen"),
  "gypsum-ceiling-cost-kenya": p("cyber1-office-interiors", "reception-ceiling", "Gypsum ceiling with recessed lighting in an office reception"),
  "septic-tank-cost-kenya": panel("tank", "Septic tanks"),
  "building-your-house-in-phases": p("kikuyu-house", "front", "Two-storey house in Kikuyu at shell stage with balconies and steel balustrades"),
  "how-many-blocks-and-bags-of-cement-for-a-house": p("oljororok-bungalow", "walling-columns", "Block walls and reinforced concrete columns rising on a bungalow"),
  "cabro-paving-cost-kenya": p("merishaw-school", "courtyard-paving", "Cabro paving being laid in a school courtyard"),
  // Roofing and waterproofing
  "roofing-options-kenya": p("kericho-roofing", "finished-roof", "Two-storey home in Kericho with a finished red tile roof"),
  "flat-roofs-practical-questions": p("kibwezi-maisonette", "rear-plastered", "Rear of a house with plastered walls, two roof levels and a first-floor terrace"),
  "flat-roof-leaking-causes-and-fixes": p("nanyuki-baraka-home", "roof-slab-gate-view", "Concrete structure complete to roof level, with the roof slab formwork still up"),
  "damp-and-waterproofing": p("tala-bungalow-shell", "rear-wall", "Plastered rear wall of a bungalow with steel-framed windows and the stone foundation below"),
  "choosing-a-waterproofing-method": panel("droplets", "Waterproofing methods"),
  "bathroom-waterproofing-before-tiling": panel("droplets", "Bathroom waterproofing"),
  "balcony-and-terrace-leaks": p("nanyuki-baraka-home", "finished-balconies", "Finished house with columned balconies, black steel balustrades and a decorative parapet"),
  "water-tank-waterproofing": p("kikuyu-house", "stair-tower", "Stair tower with tall windows and a water tank on the roof"),
  "basement-and-retaining-wall-waterproofing": panel("droplets", "Basements and retaining walls"),
  // Foundations and structure
  "building-on-black-cotton-soil": p("kakamega-bungalow", "foundation-excavation", "Site team digging foundation trenches"),
  "cracks-in-walls-when-to-worry": p("lukenya-four-bedroom", "plastered-front", "Plastered front of a house with grey steel windows fitted"),
  "perimeter-walls-what-to-know": p("nanyuki-perimeter-wall", "finished-wall", "Finished perimeter wall in Nanyuki"),
  "adding-a-floor-to-an-existing-house-kenya": p("kibwezi-maisonette", "two-storey-shell", "Two-storey shell after the formwork was struck, with the first-floor walls complete"),
  // Materials compared
  "machine-cut-stone-vs-blocks": p("nanyuki-baraka-home", "walling", "Machine-cut stone walling at ground floor with slab formwork in place"),
  "types-of-iron-sheets-kenya": p("tala-bungalow-shell", "finished-roof", "Bungalow in Tala with a grey stone-coated tile hipped roof"),
  "septic-tank-or-biodigester": panel("tank", "Septic tank or biodigester"),
  // Home designs and plans
  "maisonette-or-bungalow": d("ensuite-maisonette-roof-terrace", "3", "Two-storey maisonette design at dusk with a lit balcony and veranda"),
  "building-approvals-kenya": panel("stamp", "Building approvals"),
  "building-at-the-coast": p("diani-maisonette", "front-pergolas", "Coastal maisonette in Diani with coral stone cladding and timber pergolas"),
  "planning-a-school-building": p("merishaw-school", "three-storey-block", "Three-storey classroom block at Merishaw School"),
  // Finishes and interiors
  "gypsum-ceilings-where-they-work": p("ukunda-interiors", "open-plan", "Open-plan room with a tray ceiling and downlights"),
  "epoxy-floors-choose-for-your-home": p("ukunda-interiors", "living-to-kitchen", "Living area with polished floors opening onto the staircase and kitchen"),
  "planning-a-kitchen": p("nakuru-interiors", "kitchen", "Fitted kitchen with granite worktops and two-tone cabinets"),
  "office-renovation-guide": p("sacco-office-nairobi", "open-office", "Open-plan office after renovation"),
  // Common mistakes
  "common-construction-mistakes-kenya": p("kikuyu-perimeter-wall", "foundation-courses", "Stone foundation courses being laid"),
  "build-a-house-in-kenya-from-abroad-safely": p("kamulu-roofing-shell", "front-full", "Two-storey home in Kamulu with a hipped red tile roof and balconies"),
  "how-to-check-a-building-contractor": p("nanyuki-perimeter-wall", "walling-team", "Masons building a perimeter wall"),
  // Solar, water and energy
  "solar-power-for-homes-and-schools": panel("sun", "Solar power"),
  "net-metering-kenya": panel("plug", "Net metering"),
  "solar-for-schools-kenya": panel("sun", "Solar for schools"),
  "solar-water-heaters-kenya": panel("thermometer", "Solar water heaters"),
  "small-wind-turbines-kenya": panel("wind", "Small wind turbines"),
  "solar-wind-hybrid-systems": panel("windsun", "Solar and wind hybrids"),
  "rainwater-harvesting-for-homes": panel("rain", "Rainwater harvesting"),
};

export function guideImage(slug: string): GuideImage | undefined {
  return guideImages[slug];
}

export function guidePhotoSrc(i: GuidePhoto, w: 800 | 1600): string {
  return imgSrc(`/${i.dir}/${i.slug}`, i.file, w);
}

// Names the project a photo comes from, for the caption under it.
export function guidePhotoSource(i: GuidePhoto): { text: string; href: string } {
  if (i.dir === "designs") return { text: "Concept render of a Redbay home design", href: `/designs/${i.slug}/` };
  const proj = projects.find((x) => x.slug === i.slug);
  return { text: proj ? `Redbay project: ${proj.name}, ${proj.place}` : "Redbay project", href: `/projects/${i.slug}/` };
}
