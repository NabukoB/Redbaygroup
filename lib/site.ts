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
  // Google Business Profile, listed as "Redbay Construction LTD"
  googleProfile: "https://share.google/jXxjlTGROMj5VwUtr",
  googleProfileName: "Redbay Construction LTD",
  facebook: "https://www.facebook.com/share/1NiTdxiXXz/",
  emailIsReal: true,
};

// Towns where Redbay has built (from the project list)
export const areas = ["Nairobi", "Kikuyu", "Isinya", "Lukenya", "Nanyuki", "Nyahururu", "Kakamega", "Diani", "Ukunda"];

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

export type ProjectPhoto = { file: string; alt: string };

export type Project = {
  name: string;
  place: string;
  division: Division;
  note: string;
  // Projects with photos get their own page at /projects/<slug>/
  slug?: string;
  summary?: string;
  scope?: string[];
  photos?: ProjectPhoto[];
  // Closing call to action on the project page
  cta?: { title: string; text: string };
};

// Image helpers: every image exists at -1600.webp and -800.webp in /public/<base>
export const imgSrc = (base: string, file: string, w: 800 | 1600) => `${base}/${file}-${w}.webp`;
export const photoSrc = (slug: string, file: string, w: 800 | 1600) => imgSrc(`/projects/${slug}`, file, w);

// Real projects only. Add interiors and energy jobs here as they are documented.
// Projects with photos are listed first.
export const projects: Project[] = [
  {
    name: "Two-storey family home",
    place: "Baraka Estate, Nanyuki",
    division: "Homes",
    note: "Full build",
    slug: "nanyuki-baraka-home",
    summary:
      "A two-storey family home in Baraka Estate, Nanyuki, built from walling to the final coat of paint, with tiled floors and a cabro driveway.",
    // TODO: confirm scope and year with Redbay
    scope: [
      "Machine-cut stone walling with a reinforced concrete frame",
      "Ground-floor and roof slabs, columned balconies and parapet detailing",
      "Steel windows, doors and black steel balustrades",
      "Internal and external plaster, cornices and painting",
      "Marble-effect floor tiles, tiled entrance steps and cabro driveway",
    ],
    photos: [
      { file: "finished-balconies", alt: "The finished house with columned balconies, black steel balustrades and decorative parapet detailing" },
      { file: "finished-front", alt: "Finished two-storey home in Baraka Estate, Nanyuki, with white and grey walls, balconies and a cabro driveway" },
      { file: "finished-driveway", alt: "Side view of the finished home along the cabro-paved driveway and boundary wall" },
      { file: "interior-balcony-room", alt: "Upper-floor room with a full-height steel door opening onto the balcony and marble-effect floor tiles" },
      { file: "interior-tiled-room", alt: "Bright upper-floor room with marble-effect tiles, cornice and painted walls" },
      { file: "interior-living", alt: "Ground-floor living room with full-height steel windows and a ceiling with a recessed border" },
      { file: "walling", alt: "Machine-cut stone walling at ground floor with the slab formwork in place" },
      { file: "walling-openings", alt: "Close view of the stone walling, window openings and beam formwork" },
      { file: "walling-window", alt: "Stone walling around a window opening, with the boundary wall behind" },
      { file: "first-floor-walls", alt: "Ground-floor slab complete and first-floor walls rising" },
      { file: "roof-slab-formwork", alt: "Roof slab formwork and props in place, seen through the gate" },
      { file: "roof-slab-gate-view", alt: "Structure complete to roof level, with the formwork still up" },
      { file: "plastering", alt: "Plasterers rendering the walls between the balcony columns" },
      { file: "plastered-corner", alt: "Plastered corner with balconies, steel balustrades and full-height windows" },
      { file: "plastered-street-view", alt: "The plastered house seen from the road, behind the boundary wall and gate" },
      { file: "painting-start", alt: "Painting under way on the ground floor, with scaffolding still up" },
      { file: "painting-scaffold", alt: "Exterior painting in progress on the balconies and parapets" },
    ],
  },
  {
    name: "Home interiors",
    place: "Ukunda, Kwale",
    division: "Interiors",
    note: "Interior finishes",
    slug: "ukunda-interiors",
    summary:
      "Interior finishes for an open-plan family home in Ukunda: a feature TV wall, tray ceilings with concealed lighting, and polished floor tiling throughout.",
    // TODO: confirm with Redbay that this scope matches the job
    scope: [
      "Feature TV wall with marble-effect panels, fluted slat panels and lit display shelves",
      "Tray ceilings with concealed LED strip lighting and downlights",
      "Large-format polished floor tiles with matching skirting",
      "Wall painting throughout the living and dining areas",
    ],
    photos: [
      { file: "living-room", alt: "Open-plan living room in Ukunda with a fluted wood and marble-effect feature TV wall, tray ceiling and polished tiles" },
      { file: "feature-wall", alt: "Feature TV wall with marble-effect panels, fluted slat panels and lit display shelves" },
      { file: "feature-wall-side", alt: "Side view of the feature wall beside painted walls, artwork and sliding windows" },
      { file: "living-to-kitchen", alt: "Living area opening onto the staircase with step lights and the kitchen beyond" },
      { file: "open-plan", alt: "Open-plan room with a column, tray ceiling with downlights and polished floor tiles" },
      { file: "entrance-detail", alt: "Painted wall, timber double doors and artwork in the living area" },
      { file: "dining-curtains", alt: "Dining area framed by a painted archway, with full-height curtains, downlights and the feature wall" },
      { file: "dining-to-kitchen", alt: "Dining area with a round column, artwork and a view through to the kitchen" },
      { file: "archway-view", alt: "View through a painted archway into a bright room with sliding windows and a tray ceiling" },
    ],
  },
  {
    name: "Two-storey family home",
    place: "Kikuyu, Kiambu",
    division: "Homes",
    note: "Shell works",
    slug: "kikuyu-house",
    summary:
      "Shell works for a two-storey family home in Kikuyu: concrete frame, walls, flat roof slabs, a stair tower and wide balconies with steel balustrades.",
    // TODO: confirm scope with Redbay
    scope: [
      "Reinforced concrete frame, columns and floor slabs",
      "Walling and flat roof slabs with deep overhangs",
      "Stair tower with tall vertical windows and a raised water tank",
      "Balconies with decorative steel balustrades",
      "Steel windows and doors fitted, external render under way",
    ],
    photos: [
      { file: "front", alt: "Two-storey house in Kikuyu at shell stage with balconies, steel balustrades and timber scaffolding" },
      { file: "front-corner", alt: "Corner view of the Kikuyu house showing the balcony, steel windows and rendered walls" },
      { file: "rear", alt: "Rear of the house with the stair tower, tall windows and a long upper balcony" },
      { file: "rear-balcony", alt: "Upper balcony with decorative steel balustrade above the ground-floor veranda" },
      { file: "stair-tower", alt: "Stair tower with tall vertical windows and a water tank on the roof" },
    ],
  },
  {
    name: "Perimeter wall",
    place: "Kikuyu, Kiambu",
    division: "Homes",
    note: "Perimeter wall",
    slug: "kikuyu-perimeter-wall",
    cta: {
      title: "Need a perimeter wall?",
      text: "Tell us the length of your boundary and the site location. We will measure it and give you a fixed quote.",
    },
    summary:
      "A machine-cut stone perimeter wall for a home in Kikuyu, built on trench foundations with a stone base, a damp-proof layer and concrete columns.",
    // TODO: confirm scope and wall length with Redbay
    scope: [
      "Trench excavation set out with string lines",
      "Concrete strip footing in the trench",
      "Hardcore stone foundation courses",
      "Damp-proof membrane above the foundation",
      "Machine-cut stone walling with concrete columns",
    ],
    photos: [
      { file: "wall-length", alt: "Finished section of machine-cut stone perimeter wall beside the house in Kikuyu" },
      { file: "wall-corner", alt: "Long run of the stone perimeter wall with concrete columns and the neighbouring wall" },
      { file: "stone-foundation", alt: "Stone foundation courses laid in the trench along the boundary line" },
      { file: "foundation-courses", alt: "Mortared stone foundation courses rising out of the trench" },
      { file: "trench-concrete", alt: "Concrete strip footing in the excavated trench with string lines for alignment" },
      { file: "trench-excavation", alt: "Site team excavating the foundation trench for the perimeter wall" },
    ],
  },
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
    a: "We are based in Ruaraka, Nairobi, and have worked in Kikuyu, Isinya, Lukenya, Nanyuki, Nyahururu, Kakamega, Diani and Ukunda. Tell us where your site is and we will confirm.",
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
