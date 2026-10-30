export const site = {
  name: "Redbay Group",
  legal: "Redbay Construction Ltd",
  tagline: "Building places. Shaping futures.",
  url: "https://redbaygroup.co.ke",
  location: "Ruaraka, Nairobi",
  locality: "Nairobi",
  founded: 2019,
  incorporated: 2022,
  nca: "NCA Category 7",
  phone: "+254 725 546 059",
  whatsapp: "254725546059",
  email: "hello@redbaygroup.co.ke",
  emailIsReal: true,
};

// Towns where Redbay has built (from the project list)
export const areas = ["Nairobi", "Isinya", "Lukenya", "Nanyuki", "Nyahururu", "Kakamega", "Diani"];

export type Division = "Homes" | "Schools" | "Interiors" | "Energy";

export type Company = {
  slug: string;
  name: string;
  division: Division;
  line: string;
  text: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  services: { name: string; text: string }[];
};

export const companies: Company[] = [
  {
    slug: "construction",
    name: "Redbay Construction",
    division: "Homes",
    line: "Building resilient structures.",
    text: "Residential construction and development, delivering quality homes built for durability, functionality and modern living.",
    seoTitle: "Home Builders in Nairobi and Across Kenya",
    seoDescription:
      "NCA Category 7 home builders in Nairobi. We build maisonettes, bungalows and villas, plus perimeter walls, roofing and cabro paving across Kenya.",
    intro:
      "We build family homes from the foundation to the final coat of paint: maisonettes, bungalows and villas, built to your approved drawings and priced line by line.",
    services: [
      { name: "New homes", text: "Maisonettes, bungalows and villas, from setting out to handover." },
      { name: "Perimeter walls and gates", text: "Stone and block boundary walls, built straight and ready for gates and fencing." },
      { name: "Roofing and flat roofs", text: "New roofs, re-roofing and waterproofed flat roofs that drain properly." },
      { name: "Cabro paving and external works", text: "Driveways, parking and walkways laid on a compacted, graded base." },
      { name: "Earthworks and backfilling", text: "Site clearing, levelling and backfilling to the levels on your drawings." },
      { name: "Renovations and extensions", text: "Adding rooms or floors, and bringing older homes up to date." },
    ],
  },
  {
    slug: "schools",
    name: "Redbay Schools",
    division: "Schools",
    line: "Building spaces for learning.",
    text: "Developing functional, inspiring and adaptable educational infrastructure for schools and learning institutions.",
    seoTitle: "School Construction and Classroom Builders in Kenya",
    seoDescription:
      "Redbay Schools builds classrooms, school blocks, extensions and upper floors for schools in Kenya, delivered by an NCA Category 7 licensed contractor.",
    intro:
      "Schools need buildings that are safe, durable and easy to maintain. We build new school blocks, add floors and extensions, and finish learning spaces so they stand up to daily use.",
    services: [
      { name: "School buildings", text: "New classroom blocks and school buildings built to approved drawings." },
      { name: "Extensions and upper floors", text: "Adding classrooms or a new floor while the school keeps running." },
      { name: "Finishes for learning spaces", text: "Screeding, plastering, tiling, painting and window grills." },
      { name: "School compounds", text: "Perimeter walls, gates, paving and walkways around the school." },
    ],
  },
  {
    slug: "interiors",
    name: "Redbay Interiors",
    division: "Interiors",
    line: "Finishing with personality and taste.",
    text: "Transforming spaces through thoughtful design, quality finishes and functional interior solutions.",
    seoTitle: "Interior Finishes, Tiling and Epoxy Floors in Nairobi",
    seoDescription:
      "Interior finishes in Nairobi and across Kenya: tiling, epoxy flooring, screeding, plastering, painting and grills for homes, schools and offices.",
    intro:
      "Finishes are what people see and touch every day. We help you choose finishes that suit how a space is used, then install them properly.",
    services: [
      { name: "Floors", text: "Tiling, screeding and seamless epoxy floors for homes, schools and workshops." },
      { name: "Walls", text: "Plastering, painting and feature finishes." },
      { name: "Grills and metalwork", text: "Window and door grills fitted securely and finished to last." },
      { name: "Renovation finishes", text: "Refreshing tired rooms without rebuilding them." },
    ],
  },
  {
    slug: "energy",
    name: "Redbay Energy",
    division: "Energy",
    line: "Powering a sustainable future.",
    text: "Delivering solar and wind energy solutions for homes, institutions and developments.",
    seoTitle: "Solar and Wind Energy Solutions in Kenya",
    seoDescription:
      "Redbay Energy delivers solar and wind energy solutions in Kenya, including Elege vertical-axis wind turbines, for homes, schools, institutions and developments.",
    intro:
      "Reliable power matters for homes and schools alike. We plan and install solar and wind systems sized to how much power a building actually uses.",
    services: [
      { name: "Wind turbines", text: "Elege vertical-axis wind turbines, which work in wind from any direction." },
      { name: "Solar power", text: "Solar systems for homes, schools and institutions." },
      { name: "Power for new builds", text: "Planning renewable power into a building from the start." },
    ],
  },
];

// Real projects only. Add interiors and energy jobs here as they are documented.
export const projects: { name: string; place: string; division: Division; note: string }[] = [
  { name: "Merishaw School", place: "Isinya, Kajiado", division: "Schools", note: "School buildings" },
  { name: "Five-bedroom villa", place: "Diani, Kwale", division: "Homes", note: "Private residence" },
  { name: "Maisonettes", place: "Nanyuki", division: "Homes", note: "Residential development" },
  { name: "Maisonettes", place: "Lukenya", division: "Homes", note: "Residential development" },
  { name: "Bungalows", place: "Nyahururu", division: "Homes", note: "Family homes" },
  { name: "Bungalows", place: "Kakamega", division: "Homes", note: "Family homes" },
];

export const approach = [
  { name: "Quality and durability", text: "Materials and workmanship chosen to last, checked at every stage." },
  { name: "Thoughtful design", text: "Spaces planned around how families, pupils and teachers will use them." },
  { name: "Responsible development", text: "Licensed, insured and built to the approved drawings." },
  { name: "Professional project delivery", text: "A clear quote, an agreed timeline and supervision on every site." },
  { name: "Long-term value", text: "Buildings that keep serving the people in them for generations." },
];

// A real sequence, so these are numbered on the page
export const steps = [
  { name: "Site visit and brief", text: "We walk the site, read your plans and agree what is being built." },
  { name: "Bill of quantities", text: "Every item measured and priced, so you can see where the money goes." },
  { name: "Fixed quotation", text: "One clear total, with the scope, timeline and payment stages written down." },
  { name: "Build and supervise", text: "Our team and trusted tradespeople build, with supervision on site." },
  { name: "Inspection and handover", text: "We walk through the finished work with you and fix what needs fixing." },
];

export const faqs = [
  {
    q: "Where in Kenya do you work?",
    a: "We are based in Ruaraka, Nairobi, and have built in Isinya, Lukenya, Nanyuki, Nyahururu, Kakamega and Diani. Tell us where your site is and we will confirm.",
  },
  {
    q: "Are you a licensed contractor?",
    a: "Yes. Redbay Construction Ltd is registered with the National Construction Authority (NCA) as a Category 7 contractor.",
  },
  {
    q: "Are your projects insured?",
    a: "Yes. We hold Contractor’s All Risk insurance on our projects.",
  },
  {
    q: "How do you price a project?",
    a: "We measure the work into an itemised bill of quantities, then give you one fixed quotation with the scope, timeline and payment stages written down. Prices are quoted before VAT.",
  },
  {
    q: "What should I send to get a quote?",
    a: "Your drawings if you have them, the site location, a few photos of the site, and when you would like to start. If you do not have drawings yet, tell us what you want to build and we will advise on next steps.",
  },
  {
    q: "Do you build from my architect’s drawings?",
    a: "Yes. We build to the approved drawings and work with your architect and engineer during construction.",
  },
];
