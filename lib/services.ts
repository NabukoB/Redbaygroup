// Specialised services. Each one gets its own page at /services/<slug>/.
// Methods are described in general terms; no prices or guarantees until Redbay confirms them.
export type Service = {
  slug: string;
  name: string; // short name for links
  title: string; // page h1
  seoTitle: string; // under 55 characters; the site name is added after it
  seoDescription: string;
  intro: string;
  areas: { heading: string; text: string }[]; // where we do it
  signs: string[]; // signs you need it
  methods: { heading: string; text: string }[];
  process: string[];
  faqs: { q: string; a: string }[];
  guides: string[]; // insight slugs
  projects: string[]; // project slugs that show related work
  message: string; // WhatsApp opening line
};

export const services: Service[] = [
  {
    slug: "drawings",
    name: "Architectural and structural drawings",
    title: "Architectural and structural drawings",
    seoTitle: "Architectural and Structural Drawings in Kenya",
    seoDescription:
      "Architectural and structural drawings by Redbay, an NCA-registered contractor, for building approval. An architect signs where required.",
    intro:
      "Every approved building starts with drawings. We prepare the floor plans, elevations and sections, and the structural drawings for the foundations, columns, beams, slabs and roof, in the form that approval submissions need.",
    areas: [
      { heading: "New house plans", text: "Architectural drawings for a new home, school or building, designed around your plot, budget and the way you will use the space." },
      { heading: "Structural drawings", text: "The foundations, columns, beams, slabs and roof frame, designed to carry the loads on the building." },
      { heading: "Approval submissions", text: "Drawings prepared for building approval, with the sets and details that the approving authority asks for." },
      { heading: "Reviewing your own plan", text: "Checking a plan you already have for structure, layout and approvals before you build from it." },
    ],
    signs: [
      "You have a plot but no drawings yet",
      "You need drawings to submit for building approval",
      "You have a plan from another source that needs structural design",
      "You want to check a plan before you build from it",
    ],
    methods: [
      { heading: "Architectural drawings", text: "Floor plans, elevations, sections and the site layout, showing how the building sits on the plot." },
      { heading: "Structural drawings", text: "Foundation, column, beam, slab and roof details, with the sizes and reinforcement the structure needs." },
      { heading: "Approval-ready sets", text: "A complete set of drawings in the form the approving authority asks for, so the submission is not sent back for missing details." },
    ],
    process: [
      "We meet you, visit the plot and agree the brief, the size and the budget",
      "You get a fixed quote for each set of drawings, with the work listed separately",
      "We prepare the architectural drawings, then the structural design and drawings",
      "Where the approving authority requires it, an architect signs the drawings",
      "We help you through the approval submission and make any changes the authority asks for",
    ],
    faqs: [
      {
        q: "Do the drawings need an architect's signature?",
        a: "Where the approving authority requires it, yes. We work with a registered architect for that, and we say so in your quote, so you know who signs and what it costs.",
      },
      {
        q: "How much do drawings cost?",
        a: "Each set is quoted separately, based on the size and complexity of the building. Drawings are priced as a fixed fee in your quote.",
      },
      {
        q: "Can you draw a house from my own sketch or plan?",
        a: "Yes. We can turn a sketch or plan into full drawings, and check it for structure and approvals before you build.",
      },
    ],
    guides: ["building-approvals-kenya"],
    projects: [],
    message: "Hello Redbay Group, I need architectural or structural drawings. The house is: ",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    title: "Waterproofing for roofs, walls and wet areas",
    seoTitle: "Waterproofing Services in Kenya",
    seoDescription:
      "Waterproofing by Redbay, an NCA-registered contractor: flat roofs, balconies, bathrooms, water tanks, basements and damp walls, new or existing.",
    intro:
      "Leaks and damp damage plaster, paint, ceilings and, in time, the structure itself. We find where the water is getting in, fix the cause, and waterproof it properly, in new buildings and existing ones.",
    areas: [
      { heading: "Flat roofs and terraces", text: "Concrete roofs and roof terraces need a membrane and a slight fall so rain drains away instead of soaking into the slab." },
      { heading: "Balconies", text: "Balconies take rain on top and drip onto rooms below. A membrane under the tiles and proper drainage stop the leaks." },
      { heading: "Bathrooms and wet areas", text: "Showers and bathroom floors are waterproofed under the tiles, so water never reaches the slab or the walls next door." },
      { heading: "Water tanks", text: "Concrete and masonry tanks are lined so they hold water without leaking or contaminating it." },
      { heading: "Basements and retaining walls", text: "Walls below ground are protected against water pushing in from the soil around them." },
      { heading: "Damp walls", text: "Rising damp at the base of walls is treated at the source, then the plaster and paint are made good." },
    ],
    signs: [
      "Water stains or bubbling paint on ceilings, especially after rain",
      "Damp patches or tide marks along the bottom of walls",
      "Mould in corners, behind furniture or in bathrooms",
      "Water pooling on a flat roof or balcony",
      "Leaks into the room below a bathroom",
      "A water tank that loses water or shows damp patches outside",
    ],
    methods: [
      { heading: "Torch-on bituminous membranes", text: "Sheets bonded to the roof with heat. Tough and long-lasting on flat roofs, especially where they will be covered or tiled." },
      { heading: "Liquid-applied membranes", text: "Painted or sprayed on to form a seamless coat. Good for balconies, terraces and roofs with many corners and pipes." },
      { heading: "Cementitious coatings", text: "Cement-based coats applied like a thick paint. Suited to bathrooms, wet areas and water tanks, and can be tiled over." },
      { heading: "Crystalline treatments", text: "Applied to concrete so it seals itself from within. Used on tanks, basements and retaining walls." },
      { heading: "Damp-proofing", text: "Damp-proof courses and treatments that stop moisture rising from the ground into walls and floors." },
    ],
    process: [
      "We inspect the building and find where the water is actually coming from",
      "You get a written scope and a fixed quote, with the method and products named",
      "We prepare the surface: clean, repair cracks and set the falls so water drains",
      "We apply the waterproofing, paying close attention to corners, joints and pipes",
      "We test with water where possible, then make good the tiles, plaster or paint",
    ],
    faqs: [
      {
        q: "Can you waterproof an existing building, or only new ones?",
        a: "Both. In an existing building we first find the source of the leak or damp, then repair and waterproof that area. In a new building we plan waterproofing into the build from the start, which costs much less than fixing leaks later.",
      },
      {
        q: "Will painting over a damp wall fix it?",
        a: "No. Damp paint is a symptom. Unless the water source is stopped, the damp comes back within months. We fix the cause first, then repaint.",
      },
      {
        q: "Which method do you use?",
        a: "It depends on the area. Flat roofs often suit torch-on or liquid membranes, bathrooms and tanks suit cementitious coatings, and basements suit crystalline treatments. We name the method and products in your quote.",
      },
      {
        q: "How do I get a quote?",
        a: "Send photos of the problem area, the location and a rough size on WhatsApp. For leaks we usually need to inspect before giving a fixed price.",
      },
    ],
    guides: ["flat-roof-leaking-causes-and-fixes", "bathroom-waterproofing-before-tiling", "balcony-and-terrace-leaks", "water-tank-waterproofing", "basement-and-retaining-wall-waterproofing", "choosing-a-waterproofing-method", "damp-and-waterproofing", "flat-roofs-practical-questions"],
    projects: [], // add project slugs once there are photos of this work
    message: "Hello Redbay Group, I need waterproofing. The problem is: ",
  },
  {
    slug: "roofing",
    name: "Roofing",
    title: "Roofing, re-roofing and roof repairs",
    seoTitle: "Roofing and Re-roofing Services in Kenya",
    seoDescription:
      "Roofing by Redbay, an NCA-registered contractor: new roofs, re-roofing and roof repairs for homes and schools, built to your drawings across Kenya.",
    intro:
      "A roof keeps the whole building dry. We build new roofs to your drawings, replace worn-out roofs, and repair leaks at the source, with the timber and fixings sized to hold.",
    areas: [
      { heading: "New roofs", text: "Roof frames, coverings and ridges for new homes, schools and outbuildings, built to the approved drawings." },
      { heading: "Re-roofing", text: "Replacing an old roof with a new covering, and repairing or replacing the timbers underneath where they have weakened." },
      { heading: "Roof repairs", text: "Replacing cracked tiles, loose or rusted sheets, and fixing the valleys and ridges where water gets in." },
      { heading: "Schools and public buildings", text: "Roofs for classroom blocks and school buildings, planned so work can continue around the classes in use." },
    ],
    signs: [
      "Rain coming through to ceilings or walls",
      "Rusted, cracked or loose sheets or tiles",
      "Sagging or rotting roof timbers",
      "Water running down the inside of a wall after rain",
      "A roof that is old and needs replacing before the house is finished",
    ],
    methods: [
      { heading: "Metal sheet roofing", text: "Corrugated sheets on a timber or steel frame. Light, quick to fit, and a good choice for many homes and schools." },
      { heading: "Clay and concrete tiles", text: "Tiles on battens over a sound frame. Suited to pitched roofs where a traditional finish is wanted." },
      { heading: "Stone-coated tiles", text: "Tiles with a stone-finished surface that resist sun and rain well and look finished on a pitched roof." },
      { heading: "Roof frames and trusses", text: "Timber or steel frames sized for the span, the covering and the load, so the roof stays straight over the years." },
    ],
    process: [
      "We inspect the roof and the structure below it, and measure the area",
      "You get an itemised quote covering the covering, timber, fixings and labour, shown separately",
      "Old covering is removed carefully, and any weak timbers are replaced",
      "The new frame and covering go on, with ridges, valleys and edges sealed",
      "We check the finished roof for leaks before handover",
    ],
    faqs: [
      {
        q: "Can you re-roof a house while people are still living in it?",
        a: "Yes, in most cases. We plan the work so that rooms are protected, and we keep the open roof area as small as possible at any time.",
      },
      {
        q: "Which roof covering should I choose?",
        a: "It depends on your budget, the style you want and how the building is laid out. Metal sheets are quick and light, tiles look finished on a pitched roof, and we explain the difference in your quote.",
      },
      {
        q: "Do you also waterproof flat roofs?",
        a: "Yes. A flat concrete roof needs waterproofing rather than tiles or sheets. See our waterproofing service for the methods we use.",
      },
      {
        q: "How do I get a quote?",
        a: "Send photos of the roof and the building on WhatsApp, with a rough size if you have it. For leaks we usually inspect first, then give a fixed quote.",
      },
    ],
    guides: ["roofing-options-kenya", "flat-roofs-practical-questions"],
    projects: ["kamulu-roofing-shell", "kibwezi-maisonette"],
    message: "Hello Redbay Group, I need roofing work. The roof is: ",
  },
  {
    slug: "project-management",
    name: "Project management",
    title: "Project management for building projects",
    seoTitle: "Building Project Management in Kenya",
    seoDescription:
      "Project management by Redbay, an NCA-registered contractor: programme, budget, site supervision and progress reports for homes, schools and fit-outs.",
    intro:
      "A building project goes wrong when nobody is watching the programme, the budget and the quality at the same time. We plan the work, keep it on programme and on budget, supervise on site, and report to you in plain language.",
    areas: [
      { heading: "Family homes", text: "Planning and managing a home build from setting out to handover, in one go or in phases as your funds allow." },
      { heading: "Schools and institutions", text: "Phased building programmes planned around a school that keeps running, with work scheduled to cause the least disruption." },
      { heading: "Renovations and fit-outs", text: "Work in occupied buildings, planned around your hours, including evenings and weekends where needed." },
      { heading: "Owners who cannot be on site", text: "Regular written updates with photos, so you always know what has been done and what has been paid for." },
    ],
    signs: [
      "You are building but cannot be on site often",
      "Costs keep rising and nobody can say why",
      "The work is behind programme and no one has a new date",
      "Several tradespeople are working and nobody is coordinating them",
      "You want to build in phases and need the order of work planned",
    ],
    methods: [
      { heading: "Programme and phasing", text: "A stage-by-stage plan showing the order of work, who does what, and when each stage should finish." },
      { heading: "Budget control", text: "Spending checked against the bill of quantities, with any change priced and agreed in writing before the work is done." },
      { heading: "Site supervision", text: "Regular checks on site that the work follows the drawings, the specification and good practice." },
      { heading: "Progress reports", text: "Written updates with photos, covering progress against the programme and money spent against the budget." },
      { heading: "Inspection and handover", text: "A walk-through of the finished work, a list of items to fix, and a check that they are fixed." },
    ],
    process: [
      "We review your drawings, bill of quantities and budget, and agree the scope with you",
      "We set the programme and the order of work, and agree how and when we report",
      "We supervise the work on site and keep the budget under control",
      "We send you regular written updates with photos",
      "We inspect the finished work, list what needs fixing, and hand over once it is done",
    ],
    faqs: [
      {
        q: "Can you manage a project that someone else is building?",
        a: "Yes, where you want an independent person watching the programme, the budget and the quality. We agree the scope with you in writing first, so everyone knows what we are responsible for.",
      },
      {
        q: "What will I receive?",
        a: "Regular written updates with photos, showing progress against the programme and spending against the budget, plus a list of anything that needs your decision.",
      },
      {
        q: "How is project management priced?",
        a: "We agree the fee and the scope in writing before we start. It is quoted separately from the cost of building, so you can see what each part costs.",
      },
    ],
    guides: ["building-your-house-in-phases", "how-to-check-a-building-contractor", "does-your-quotation-include-everything"],
    projects: [],
    message: "Hello Redbay Group, I need help managing a building project. The project is: ",
  },
  {
    slug: "site-audits",
    name: "Site audits and inspection",
    title: "Site audits and building inspections",
    seoTitle: "Site Audits and Building Inspections in Kenya",
    seoDescription:
      "Site audits and inspections by Redbay, an NCA-registered contractor: we check work against drawings and BoQs, and report what needs fixing.",
    intro:
      "Before you pay for the next stage, or buy or take over a building, it helps to know what is really there. We inspect the work on site, compare it with the drawings and the bill of quantities, and give you a written report on what is right and what needs fixing.",
    areas: [
      { heading: "Work in progress", text: "Stage checks before you pay, such as foundations, slab, walls and roof, to confirm the work matches what was agreed." },
      { heading: "Finished work", text: "A handover inspection of a new or renovated building, with a list of items that need fixing." },
      { heading: "Existing buildings", text: "A condition check before you buy, rent or renovate an older building, so you know what you are taking on." },
      { heading: "Quotes and contractors' claims", text: "Checking measured work against a quotation or bill of quantities, so you pay for what has been done." },
    ],
    signs: [
      "You are about to pay for a stage and cannot judge the work yourself",
      "Cracks, leaks or uneven floors in a new building",
      "Costs or quantities that do not match the bill of quantities",
      "You are buying or renovating an older building",
      "A project has stalled and you need to know what has been done",
    ],
    methods: [
      { heading: "Measured inspection", text: "Checking sizes, levels and finishes on site against the drawings and the specification." },
      { heading: "Quantity check", text: "Measuring completed work and comparing it with the bill of quantities and what has been claimed." },
      { heading: "Photo report", text: "A written report with photos and findings ranked by importance, so you know what to fix first." },
      { heading: "Snag list and re-check", text: "A list of defects to be fixed, and a second visit to confirm they have been fixed properly." },
    ],
    process: [
      "We agree the scope with you and collect the drawings and the bill of quantities",
      "We visit the site and inspect and measure the work",
      "You receive a written report with photos and a ranked list of findings",
      "We walk you through the report and advise on what to do next",
      "After repairs, we visit again to confirm the work is done properly",
    ],
    faqs: [
      {
        q: "Do you give a structural certificate?",
        a: "No. We report what we see on site. Where there is a structural concern, we say so and recommend that a registered engineer looks at it.",
      },
      {
        q: "Can you inspect work done by another contractor?",
        a: "Yes. We check the work against the drawings and the bill of quantities and report what we find, without taking sides.",
      },
      {
        q: "What do I get at the end?",
        a: "A written report with photos, a ranked list of issues, and a plain explanation of what each one means and what to do about it.",
      },
    ],
    guides: ["cracks-in-walls-when-to-worry", "how-to-check-a-building-contractor", "does-your-quotation-include-everything"],
    projects: [],
    message: "Hello Redbay Group, I would like a site audit or inspection. The building is: ",
  },
];
