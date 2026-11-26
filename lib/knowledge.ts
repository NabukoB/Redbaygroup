// Construction Knowledge Hub: every guide belongs to exactly one topic. Topic pages gather the guides
// and point readers to the Redbay service, calculator or division that fits the topic.
export type Topic = {
  slug: string;
  name: string; // short name for cards and links
  title: string; // page h1
  seoTitle: string; // under 55 characters; the site name is added after it
  seoDescription: string;
  intro: string;
  guides: string[]; // insight slugs, in reading order
  help: { label: string; text: string; href: string }[]; // Redbay services and tools for this topic
  message: string; // WhatsApp opening line
};

export const topics: Topic[] = [
  {
    slug: "building-costs-and-boqs",
    name: "Building costs and BoQs",
    title: "Building costs and bills of quantities",
    seoTitle: "Building Costs and BoQs in Kenya: Guides",
    seoDescription:
      "What building costs in Kenya and how a bill of quantities works: cost per square metre, walls, ceilings, septic tanks and how to compare quotations.",
    intro:
      "What a house, a wall or a ceiling costs, and how to read a quotation so you can compare like with like. Start with the published figures, then price your own drawings with a bill of quantities.",
    guides: [
      "cost-of-building-a-house-per-square-metre-kenya",
      "how-to-read-a-bill-of-quantities",
      "does-your-quotation-include-everything",
      "perimeter-wall-cost-kenya",
      "gypsum-ceiling-cost-kenya",
      "septic-tank-cost-kenya",
      "building-your-house-in-phases",
    ],
    help: [
      { label: "Bill of quantities service", text: "An itemised BoQ from your drawings, with labour and materials listed separately.", href: "/bill-of-quantities-service/" },
      { label: "House cost calculator", text: "A quick published-guide estimate from your floor area.", href: "/house-cost-calculator/" },
      { label: "Perimeter wall calculator", text: "An instant estimate from your boundary length.", href: "/perimeter-wall-calculator/" },
    ],
    message: "Hello Redbay Group, I read your building cost guides and would like a bill of quantities for my project.",
  },
  {
    slug: "roofing-and-waterproofing",
    name: "Roofing and waterproofing",
    title: "Roofing and waterproofing",
    seoTitle: "Roofing and Waterproofing Guides for Kenya",
    seoDescription:
      "Roofing and waterproofing guides for Kenya: iron sheets, tiles and flat roofs, plus how to find and fix leaks in roofs, bathrooms, balconies and tanks.",
    intro:
      "Choosing a roof, working out what a leak really is, and picking the waterproofing that suits the surface. Most leaks come from a few repeat mistakes, and most are cheaper to prevent than to repair.",
    guides: [
      "roofing-options-kenya",
      "flat-roofs-practical-questions",
      "flat-roof-leaking-causes-and-fixes",
      "damp-and-waterproofing",
      "choosing-a-waterproofing-method",
      "bathroom-waterproofing-before-tiling",
      "balcony-and-terrace-leaks",
      "water-tank-waterproofing",
      "basement-and-retaining-wall-waterproofing",
    ],
    help: [
      { label: "Waterproofing service", text: "Flat roofs, bathrooms, balconies, tanks and basements, found and fixed.", href: "/services/waterproofing/" },
      { label: "Roofing service", text: "New roofs and repairs, from iron sheets to flat roofs.", href: "/services/roofing/" },
      { label: "Roofing sheets calculator", text: "How many iron sheets your roof needs.", href: "/roofing-sheets-calculator/" },
    ],
    message: "Hello Redbay Group, I read your roofing and waterproofing guides and need help with my roof or a leak.",
  },
  {
    slug: "foundation-and-structural-problems",
    name: "Foundations and structure",
    title: "Foundation and structural problems",
    seoTitle: "Foundation and Structural Problems: Kenya Guides",
    seoDescription:
      "Foundation and structural guides for Kenya: building on black cotton soil, when cracks in walls are serious, and how to build a perimeter wall that lasts.",
    intro:
      "Soil, cracks and walls: the problems that decide whether a building stays sound. Learn what to look for before you pour a foundation, and which cracks need an engineer.",
    guides: [
      "building-on-black-cotton-soil",
      "cracks-in-walls-when-to-worry",
      "perimeter-walls-what-to-know",
    ],
    help: [
      { label: "Architectural and structural drawings", text: "Foundation and structural drawings for approval and for building.", href: "/services/drawings/" },
      { label: "Site audits and inspection", text: "A written report with photos on cracks, defects and workmanship.", href: "/services/site-audits/" },
      { label: "Property maintenance", text: "Planned inspections and repairs before small faults grow.", href: "/services/property-maintenance/" },
    ],
    message: "Hello Redbay Group, I read your foundation and structure guides and would like advice on my building.",
  },
  {
    slug: "construction-materials-comparisons",
    name: "Materials compared",
    title: "Construction materials compared",
    seoTitle: "Construction Materials Compared in Kenya",
    seoDescription:
      "Construction materials compared for Kenya: machine-cut stone against blocks, iron sheet types, and septic tanks against biodigesters.",
    intro:
      "Side-by-side comparisons of the materials and systems homeowners ask about most, so you can choose on facts rather than on the loudest salesperson.",
    guides: [
      "machine-cut-stone-vs-blocks",
      "types-of-iron-sheets-kenya",
      "septic-tank-or-biodigester",
    ],
    help: [
      { label: "Bill of quantities service", text: "Materials priced with quantities, so supplier quotes compare fairly.", href: "/bill-of-quantities-service/" },
      { label: "Our specialised services", text: "Roofing, waterproofing, site setup and more.", href: "/services/" },
      { label: "Projects we have built", text: "See the materials in finished work.", href: "/projects/" },
    ],
    message: "Hello Redbay Group, I read your materials guides and would like advice on what to use for my building.",
  },
  {
    slug: "home-designs-and-floor-plans",
    name: "Home designs and plans",
    title: "Home designs and floor plans",
    seoTitle: "Home Designs and Floor Plans in Kenya: Guides",
    seoDescription:
      "Home design guides for Kenya: bungalow or maisonette, building approvals, building at the coast and planning a school, with ready designs you can build.",
    intro:
      "Choosing a house type, getting approvals and planning for your region. Then browse our concept designs, each with a described layout and photos.",
    guides: [
      "maisonette-or-bungalow",
      "building-approvals-kenya",
      "building-at-the-coast",
      "planning-a-school-building",
    ],
    help: [
      { label: "Home designs", text: "Concept designs with room-by-room layouts that we can build for you.", href: "/designs/" },
      { label: "Architectural and structural drawings", text: "Drawings prepared for building approval.", href: "/services/drawings/" },
      { label: "House cost calculator", text: "A quick published-guide estimate from your floor area.", href: "/house-cost-calculator/" },
    ],
    message: "Hello Redbay Group, I read your home design guides and would like help with plans for my house.",
  },
  {
    slug: "finishing-materials-and-interiors",
    name: "Finishes and interiors",
    title: "Finishing materials and interior solutions",
    seoTitle: "Finishing Materials and Interiors: Kenya Guides",
    seoDescription:
      "Finishing and interior guides for Kenya: gypsum ceilings, epoxy floors, planning a kitchen and renovating an office, with what each finish really involves.",
    intro:
      "Ceilings, floors, kitchens and offices: the finishes people live with every day. Learn where each one works, what it involves and what to ask before you commit.",
    guides: [
      "gypsum-ceilings-where-they-work",
      "epoxy-floors-choose-for-your-home",
      "planning-a-kitchen",
      "office-renovation-guide",
    ],
    help: [
      { label: "Redbay Interiors", text: "Ceilings, floors, kitchens and fit-outs for homes and offices.", href: "/companies/interiors/" },
      { label: "Projects we have built", text: "See finished interiors.", href: "/projects/" },
      { label: "Get a quote", text: "A short form that opens WhatsApp with your project details.", href: "/get-a-quote/" },
    ],
    message: "Hello Redbay Group, I read your finishing and interiors guides and would like a quote for my project.",
  },
  {
    slug: "common-construction-mistakes",
    name: "Common mistakes",
    title: "Common construction mistakes",
    seoTitle: "Common Construction Mistakes in Kenya to Avoid",
    seoDescription:
      "The most common construction mistakes in Kenya and how to avoid them: unchecked contractors, vague quotations, skipped drawings, soil and waterproofing.",
    intro:
      "Most building problems start with a decision made before the first block is laid. These guides cover the mistakes that cost homeowners the most, and what to do instead.",
    guides: [
      "common-construction-mistakes-kenya",
      "build-a-house-in-kenya-from-abroad-safely",
      "how-to-check-a-building-contractor",
    ],
    help: [
      { label: "Project management", text: "We run the site for owners who cannot be there.", href: "/services/project-management/" },
      { label: "Site audits and inspection", text: "An independent report on work already done.", href: "/services/site-audits/" },
      { label: "Contractor checklist", text: "10 questions to ask before you hire, with a printable PDF.", href: "/contractor-checklist/" },
      { label: "Building from abroad", text: "Managed builds and inspections for Kenyans living abroad.", href: "/build-in-kenya-from-abroad/" },
    ],
    message: "Hello Redbay Group, I read your guide on construction mistakes and would like help avoiding them on my project.",
  },
  {
    slug: "solar-water-and-energy",
    name: "Solar, water and energy",
    title: "Solar, water and energy",
    seoTitle: "Solar, Water and Energy Guides for Kenya",
    seoDescription:
      "Solar, wind, net metering and rainwater guides for Kenyan homes and schools: what to install, how the numbers work and what to ask an installer.",
    intro:
      "Power and water for homes and schools: solar, small wind, hybrid systems, net metering, solar water heating and rainwater harvesting.",
    guides: [
      "solar-power-for-homes-and-schools",
      "net-metering-kenya",
      "solar-for-schools-kenya",
      "solar-water-heaters-kenya",
      "small-wind-turbines-kenya",
      "solar-wind-hybrid-systems",
      "rainwater-harvesting-for-homes",
    ],
    help: [
      { label: "Does wind make sense at your site?", text: "A five-question check, then a site assessment by Redbay Energy.", href: "/hybrid-solar-wind-systems/" },
      { label: "Redbay Energy", text: "Solar and wind systems for homes and schools.", href: "/companies/energy/" },
      { label: "Get a quote", text: "A short form that opens WhatsApp with your project details.", href: "/get-a-quote/" },
    ],
    message: "Hello Redbay Group, I read your solar and energy guides and would like advice for my property.",
  },
];

type Help = Topic["help"][number];

const boq: Help = { label: "Bill of quantities service", text: "An itemised BoQ from your drawings, with labour and materials listed separately.", href: "/bill-of-quantities-service/" };
const quote: Help = { label: "Get a quote", text: "A short form that opens WhatsApp with your project details.", href: "/get-a-quote/" };
const siteSetup: Help = { label: "Site setup", text: "Site house, toilet, CCTV and a barricade or perimeter wall, so the plot is secure before building starts.", href: "/services/site-setup/" };
const wallCalc: Help = { label: "Perimeter wall calculator", text: "An instant estimate from your boundary length.", href: "/perimeter-wall-calculator/" };
const pm: Help = { label: "Project management", text: "Redbay runs the site, the schedule and the payments stage by stage.", href: "/services/project-management/" };
const audits: Help = { label: "Site audits and inspections", text: "An independent check of work in progress or a finished building.", href: "/services/site-audits/" };
const checklist: Help = { label: "Contractor checklist (PDF)", text: "A one-page list of what to check before you sign with any contractor.", href: "/contractor-checklist/" };
const interiors: Help = { label: "Redbay Interiors", text: "Ceilings, partitions, cabinets and finishes, priced and installed.", href: "/companies/interiors/" };
const hybrid: Help = { label: "Does wind make sense at your site?", text: "A five-question check, then a site assessment by Redbay Energy.", href: "/hybrid-solar-wind-systems/" };
const houseCalc: Help = { label: "House cost calculator", text: "A quick published-guide estimate from your floor area.", href: "/house-cost-calculator/" };

// Guides whose best next step differs from their topic's default list.
export const guideHelp: Record<string, Help[]> = {
  "perimeter-wall-cost-kenya": [wallCalc, siteSetup, boq],
  "perimeter-walls-what-to-know": [wallCalc, siteSetup, quote],
  "septic-tank-cost-kenya": [boq, quote],
  "septic-tank-or-biodigester": [boq, quote],
  "gypsum-ceiling-cost-kenya": [interiors, quote],
  "gypsum-ceilings-where-they-work": [interiors, quote],
  "how-to-read-a-bill-of-quantities": [boq, checklist],
  "does-your-quotation-include-everything": [boq, checklist, audits],
  "how-to-check-a-building-contractor": [checklist, boq, audits],
  "building-your-house-in-phases": [pm, boq],
  "cost-of-building-a-house-per-square-metre-kenya": [houseCalc, boq, pm],
  "types-of-iron-sheets-kenya": [{ label: "Roofing sheets calculator", text: "How many sheets your roof needs, from its width and length.", href: "/roofing-sheets-calculator/" }, { label: "Roofing service", text: "Redbay supplies and fixes roofs in sheets, tiles and flat roofs.", href: "/services/roofing/" }],
  "solar-wind-hybrid-systems": [hybrid, { label: "Redbay Energy", text: "Solar and wind systems for homes and schools.", href: "/companies/energy/" }],
  "small-wind-turbines-kenya": [hybrid, { label: "Redbay Energy", text: "Solar and wind systems for homes and schools.", href: "/companies/energy/" }],
  "build-a-house-in-kenya-from-abroad-safely": [{ label: "Building from abroad", text: "How Redbay builds for clients who live overseas.", href: "/build-in-kenya-from-abroad/" }, pm, audits],
};

export const helpFor = (guideSlug: string): Help[] => guideHelp[guideSlug] ?? topicOf(guideSlug)?.help ?? [];

export const topicOf = (guideSlug: string) => topics.find((t) => t.guides.includes(guideSlug));
