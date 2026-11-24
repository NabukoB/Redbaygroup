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
    slug: "earthworks",
    name: "Earthworks",
    title: "Earthworks, site clearing and backfilling",
    seoTitle: "Earthworks and Backfilling Services in Kenya",
    seoDescription:
      "Earthworks by Redbay, an NCA-registered contractor: site clearing, levelling, foundation excavation and compacted backfilling to your drawn levels.",
    intro:
      "Every good building starts with the ground under it. We clear the site, cut and fill it to the levels on your drawings, and backfill around foundations so the ground stays firm and drains away from the building.",
    areas: [
      { heading: "Site clearing", text: "Removing bushes, rubble and topsoil from the building area, and setting out the position of the building." },
      { heading: "Levelling and cut and fill", text: "Bringing the ground to the levels on the drawings, with the right fall so rainwater runs away from the house." },
      { heading: "Foundations", text: "Excavating foundation trenches and pits to depth, ready for inspection before concrete is poured." },
      { heading: "Backfilling", text: "Refilling around foundations and walls in layers, compacted so the soil does not settle or wash out later." },
      { heading: "Site setup", text: "Barricading the plot, setting up a site house for the works, and preparing the ground for foundations, including suspended floors." },
    ],
    signs: [
      "A site that is uneven, or water that stands after rain",
      "Soil washing away from the foundations or the building",
      "Cracks in the floor or walls from settling ground",
      "A plot that needs clearing and levelling before a build",
      "Foundation trenches that need excavating or refilling",
    ],
    methods: [
      { heading: "Compacted fill", text: "Soil or gravel placed in thin layers and compacted at each layer, so it carries the load without settling." },
      { heading: "Hardcore and murram bases", text: "A well-graded base under slabs and paving, so the floor stays level and does not crack." },
      { heading: "Black cotton soil", text: "Special care where the ground swells and shrinks with water. The foundations and the base are planned for it." },
    ],
    process: [
      "We walk the site and check it against your drawings and levels",
      "You get an itemised quote covering clearing, excavation, fill, haulage and compaction",
      "We clear the site and strip the topsoil from the building area",
      "We cut and fill to the drawn levels, compacting in layers and checking as we go",
      "We hand over the level ground ready for the next stage, with the falls set for drainage",
    ],
    faqs: [
      {
        q: "Do you need drawings before starting earthworks?",
        a: "Yes, or at least a clear brief. We work to the levels and falls on the drawings, so the ground is ready for the foundations and slab.",
      },
      {
        q: "What happens on black cotton soil?",
        a: "Black cotton soil swells when wet and shrinks when dry, which can crack walls and floors. We plan the foundations and the base for it. Our black cotton soil guide explains more.",
      },
      {
        q: "Can you backfill around an existing building?",
        a: "Yes. We refill in layers and compact each one, so the soil stays firm and water runs away from the walls.",
      },
    ],
    guides: ["building-on-black-cotton-soil"],
    projects: [],
    message: "Hello Redbay Group, I need earthworks on my plot. The site is: ",
  },
  {
    slug: "paving",
    name: "Cabro paving",
    title: "Cabro paving and external works",
    seoTitle: "Cabro Paving and External Works in Kenya",
    seoDescription:
      "Cabro paving by Redbay, an NCA-registered contractor: driveways, parking, walkways and school compounds on a compacted, graded base that drains well.",
    intro:
      "A paved driveway or walkway lasts only as long as the ground beneath it. We prepare, compact and grade the base first, then lay the blocks in a clean pattern with the falls set so water runs off instead of pooling.",
    areas: [
      { heading: "Driveways and parking", text: "Cabro blocks laid to take the weight of cars, gates and delivery vehicles, on a base built for that load." },
      { heading: "Walkways and paths", text: "Pedestrian paths around homes, gardens and school grounds, laid level and safe to walk on in the rain." },
      { heading: "School compounds", text: "Paving around school buildings and assembly areas, planned so that work can carry on around the pupils." },
      { heading: "Repairs to existing paving", text: "Lifting sunken or broken blocks, correcting the base, and relaying them so the surface is level again." },
    ],
    signs: [
      "Blocks that have sunk, tilted or come loose",
      "Puddles that stay on the driveway after rain",
      "Weeds growing through the joints",
      "Cracked or broken blocks at the edges of the paving",
      "A new driveway or compound that needs paving",
    ],
    methods: [
      { heading: "Interlocking cabro blocks", text: "Concrete blocks locked together by their shape and sand-filled joints. They can be lifted and relaid if the ground ever shifts." },
      { heading: "Compacted, graded base", text: "The layers under the blocks are compacted and shaped to the fall, which is what keeps the surface level for years." },
      { heading: "Edge restraints", text: "Kerb edges that hold the blocks in place, so the paving does not spread or push outwards under traffic." },
    ],
    process: [
      "We inspect the area, check the levels and agree the layout and pattern",
      "You get an itemised quote covering excavation, base, blocks, sand and edging",
      "We excavate and build the base in compacted layers, shaped to the fall",
      "We lay the blocks in the agreed pattern, then fill the joints with sand",
      "We check the levels and drainage before handover",
    ],
    faqs: [
      {
        q: "Can cabro be laid straight onto the existing ground?",
        a: "Not reliably. A paved surface needs a compacted, graded base underneath. Without one, the blocks sink and move under traffic.",
      },
      {
        q: "Why does my paving sink or come loose?",
        a: "In most cases the base was too thin, poorly compacted, or the drainage was wrong, so water softened the ground underneath. We correct the base when we relay it.",
      },
      {
        q: "Can you match existing paving?",
        a: "We can usually match the block shape and colour. Send a photo and a measurement of the area, and we will tell you what we can match.",
      },
    ],
    guides: [],
    projects: [],
    message: "Hello Redbay Group, I need cabro paving. The area is: ",
  },
  {
    slug: "floors",
    name: "Floors",
    title: "Tiling, screeding and epoxy floors",
    seoTitle: "Tiling, Screeding and Epoxy Floors in Kenya",
    seoDescription:
      "Floors by Redbay, an NCA-registered contractor: cement screeding, tiling and seamless epoxy floors for homes, schools and workshops, laid level.",
    intro:
      "A good floor is level, firm and easy to keep clean. We screed the base to the right level and fall, then tile it or finish it with a seamless epoxy coat, depending on where it will be used.",
    areas: [
      { heading: "Homes", text: "Tiled floors for living rooms, bedrooms and kitchens, and tiled wet areas laid on a properly screeded base." },
      { heading: "Schools", text: "Hard-wearing floors for classrooms and corridors, planned so that the work can be done in stages around the classes." },
      { heading: "Workshops and stores", text: "Seamless epoxy floors that resist oil, wear and heavy traffic, and are easy to wash down." },
      { heading: "Renovation floors", text: "Relaying a tired or cracked floor, levelling the surface first so the new finish lies flat." },
    ],
    signs: [
      "Tiles that are cracked, hollow or lifting",
      "A floor that slopes or is not level",
      "Dusty or crumbling concrete that wears away under foot",
      "A workshop or store floor that stains and wears quickly",
      "A room that is being renovated and needs a new floor",
    ],
    methods: [
      { heading: "Cement screeding", text: "A levelling layer of cement and sand on the slab, set to the right level and fall. It is the base for almost every finish." },
      { heading: "Floor tiling", text: "Tiles laid on a screeded base and grouted, with the joints and edges finished neatly." },
      { heading: "Seamless epoxy floors", text: "A resin coat with no joints, which is easy to clean and tough enough for workshops and busy stores." },
    ],
    process: [
      "We check the slab, its levels and whether it is sound",
      "You get an itemised quote showing screeding, the finish and the materials separately",
      "We clean the surface and screed it to the right level and fall",
      "We lay the tiles or apply the epoxy coat, allowing the proper curing time",
      "We finish the joints and edges, and check the level before handover",
    ],
    faqs: [
      {
        q: "Can you tile straight onto an old concrete floor?",
        a: "Only if the concrete is sound and level. Otherwise we screed it first, because tiles laid on an uneven or weak base crack and lift.",
      },
      {
        q: "Which floor finish should I choose?",
        a: "Tiles suit homes and wet areas. Epoxy suits workshops and stores where oil and heavy use are a problem. Our guide on epoxy floors explains the choice.",
      },
      {
        q: "How long must the floor cure before it is used?",
        a: "Each finish needs its own curing time. We tell you how long to keep people and loads off the floor, and plan the rest of the work around it.",
      },
    ],
    guides: ["epoxy-floors-choose-for-your-home"],
    projects: [],
    message: "Hello Redbay Group, I need a floor done. The room is: ",
  },
  {
    slug: "ceilings-partitions",
    name: "Partitions and ceilings",
    title: "Glass partitions, gypsum ceilings and office fit-outs",
    seoTitle: "Office Partitions and Ceilings in Kenya",
    seoDescription:
      "Partitions and ceilings by Redbay, an NCA-registered contractor: glass partitions, gypsum ceilings, LED lighting and office fit-outs in Nairobi and beyond.",
    intro:
      "We divide and finish interior spaces: glass partitions for offices, gypsum ceilings with lighting, and the joinery and paint that complete a room. We can work in the evenings and at weekends so your business keeps running.",
    areas: [
      { heading: "Offices", text: "Private offices, boardrooms and reception areas divided with partitions, finished with ceilings, lighting and paint." },
      { heading: "Glass partitions", text: "Steel-framed glass walls with frosted film or timber-finish panels, letting light through while keeping rooms separate." },
      { heading: "Gypsum and suspended ceilings", text: "Ceilings that hide wiring and ducts, with recessed LED lighting and a clean, even finish." },
      { heading: "Homes and schools", text: "Built-in cabinets, room dividers and ceilings for homes, and ceilings and partitions for school buildings." },
    ],
    signs: [
      "An office that needs more rooms or a boardroom",
      "Ceilings that are stained, sagging or cracked",
      "Old lighting that is dim, costly or hard to maintain",
      "A reception or waiting area that needs a fresh look",
      "A space that is being fitted out for a new use",
    ],
    methods: [
      { heading: "Steel-framed glass partitions", text: "Strong frames with glass panels, frosted or clear, fitted with doors that close properly." },
      { heading: "Gypsum board ceilings", text: "Plasterboard fixed to a light metal or timber frame, taped, filled and painted for a smooth finish." },
      { heading: "LED lighting", text: "Low-energy lights set into the ceiling, planned so each room has even light for its use." },
      { heading: "Built-in cabinets and joinery", text: "Fitted cupboards, counters and shelving made to measure for the room." },
    ],
    process: [
      "We visit the space, take measurements and agree how it will be used",
      "You get an itemised quote covering partitions, ceilings, lighting, joinery and paint",
      "We fix the frames and ceiling supports before the boards or glass go in",
      "We fit the partitions, doors, ceilings and lights, then finish and paint",
      "We walk through the finished space with you and fix any snags",
    ],
    faqs: [
      {
        q: "Can you work outside office hours?",
        a: "Yes. We can work in the evenings and at weekends, so the office can keep operating during the day.",
      },
      {
        q: "Can glass partitions be used for privacy?",
        a: "Yes. Frosted film or timber-finish panels give privacy while still letting light through into the room.",
      },
      {
        q: "Do you also fit out the wiring for lights?",
        a: "We fit the ceiling and the lighting points as part of the work. Electrical wiring and connections are quoted as a separate line, so you can see the cost.",
      },
    ],
    guides: ["gypsum-ceilings-where-they-work", "office-renovation-guide"],
    projects: ["cyber1-office-interiors", "sacco-office-nairobi"],
    message: "Hello Redbay Group, I need partitions or ceilings for a space. The space is: ",
  },
  {
    slug: "grills-metalwork",
    name: "Grills and metalwork",
    title: "Window and door grills, and metalwork",
    seoTitle: "Window Grills and Metalwork in Kenya",
    seoDescription:
      "Grills and metalwork by Redbay, an NCA-registered contractor: window and door grills fitted securely, finished with primer and paint so they last.",
    intro:
      "Window and door grills keep a home secure, so they have to be fitted properly and finished to last. We measure each opening, make the grills to fit, and fix them securely into the wall.",
    areas: [
      { heading: "Windows", text: "Grills for windows in homes, schools and offices, fitted so they can be opened from inside in case of emergency." },
      { heading: "Doors", text: "Security grills and gates for doors, with locks and finishes that suit the building." },
      { heading: "Balconies and openings", text: "Railings and grills for balconies and other openings, fixed securely into the structure." },
      { heading: "Replacements", text: "Replacing rusted or damaged grills, and matching an existing design where we can." },
    ],
    signs: [
      "Rusted or flaking grills on windows or doors",
      "Loose grills that move when pushed",
      "A new home, school or office that needs security",
      "A broken or missing grill after a break-in or a storm",
    ],
    methods: [
      { heading: "Welded steel grills", text: "Steel bars welded into a strong frame, fixed into the wall so they stay secure." },
      { heading: "Designs to suit the building", text: "Plain or decorative patterns, chosen to suit the style of the building and the security needed." },
      { heading: "Primer and paint finish", text: "A primer coat and paint on every piece, so the metal is protected from rust." },
    ],
    process: [
      "We measure each opening and check how the grill will be fixed",
      "You get an itemised quote showing the steel, fixing, finish and labour",
      "We make the grills in the workshop, to the measured sizes",
      "We fix them securely into the wall, then fit any doors and locks",
      "We check each grill for fit and smooth operation before handover",
    ],
    faqs: [
      {
        q: "Can you copy an existing grill design?",
        a: "Usually, yes. Send a photo with measurements, and we will tell you what we can make to match.",
      },
      {
        q: "Will the grills stop rust?",
        a: "Good primer and paint slow rust a great deal, but no finish lasts forever. We use a primer and paint on every piece, and we recommend repainting from time to time.",
      },
    ],
    guides: [],
    projects: [],
    message: "Hello Redbay Group, I need grills or metalwork. The job is: ",
  },
  {
    slug: "gazebos-outdoor",
    name: "Gazebos and outdoor structures",
    title: "Gazebos and outdoor structures",
    seoTitle: "Gazebos and Outdoor Structures in Kenya",
    seoDescription:
      "Gazebos and outdoor structures by Redbay, an NCA-registered contractor: makuti-thatched gazebos, shaded terraces and garden structures, built on concrete.",
    intro:
      "A gazebo or shaded outdoor room adds a place to sit, eat and entertain. We build them on concrete columns, with a raised base, wiring and a finished floor, and we can thatch them in the traditional makuti style.",
    areas: [
      { heading: "Gardens and homes", text: "Gazebos, pergolas and shaded terraces beside the house, built to suit the garden and the view." },
      { heading: "The coast", text: "Thatched structures built on concrete columns and a raised coral stone base, suited to coastal settings." },
      { heading: "Hotels and lodges", text: "Shaded outdoor areas for guests, with wiring, tiled floors and finishes that suit the setting." },
    ],
    signs: [
      "A garden or terrace that needs a shaded place to sit",
      "An outdoor area that gets too hot to use in the day",
      "A traditional thatched structure wanted for a home or a lodge",
      "A worn-out gazebo or pergola that needs rebuilding",
    ],
    methods: [
      { heading: "Makuti thatched roofs", text: "Traditional thatch on a pole frame, fitted by people who know how to tie and finish it well." },
      { heading: "Concrete columns and base", text: "Columns and a raised base that carry the structure and keep it dry." },
      { heading: "Wiring and tiled floors", text: "Electrical points for lights and sockets, and a tiled floor that is easy to keep clean." },
    ],
    process: [
      "We visit the site, agree the position, size and style, and check the foundations",
      "You get an itemised quote showing the foundations, structure, roof, floor and wiring",
      "We pour the foundations and columns, and set the base",
      "We build the roof frame, then the thatch or other covering",
      "We finish the walls and floor, fit the wiring, and hand over",
    ],
    faqs: [
      {
        q: "Can you build a traditional thatched gazebo?",
        a: "Yes. Our Diani gazebo project is a makuti-thatched gazebo on concrete columns with a raised coral stone base. See it in our projects.",
      },
      {
        q: "Can you add lights and sockets to a gazebo?",
        a: "Yes. Wiring is planned into the walls before they are plastered, so the points are neat and safe.",
      },
    ],
    guides: ["building-at-the-coast"],
    projects: ["diani-gazebo"],
    message: "Hello Redbay Group, I would like a gazebo or outdoor structure. The idea is: ",
  },
  {
    slug: "solar-wind",
    name: "Solar and wind power",
    title: "Solar and wind power for homes and schools",
    seoTitle: "Solar and Wind Power Installation in Kenya",
    seoDescription:
      "Solar and wind power by Redbay Energy: solar systems, solar water heaters and small wind turbines for homes, schools and institutions across Kenya.",
    intro:
      "Solar and wind can cut the electricity bill and keep the lights on through power cuts. We look at how much power the building uses, then recommend the system that fits the site, its roof and its budget.",
    areas: [
      { heading: "Homes", text: "Solar systems and water heaters for family homes, sized to the household's real use." },
      { heading: "Schools", text: "Solar power for classrooms and offices, sized to the school's daytime use." },
      { heading: "Power for new builds", text: "Planning renewable power into a building from the start, so the roof, cabling and layout are ready for it." },
      { heading: "Wind where the site allows", text: "Small vertical-axis wind turbines, used where the site has enough wind to make them worthwhile." },
    ],
    signs: [
      "Electricity bills that are high or keep rising",
      "Frequent power cuts that stop work or school",
      "A new home, school or building planning its power",
      "Hot water costs that could be cut with a solar heater",
    ],
    methods: [
      { heading: "Solar photovoltaic systems", text: "Panels, batteries and an inverter sized to the load, with the option to store power for use after dark." },
      { heading: "Solar water heaters", text: "Panels that heat water for the home or school, cutting the cost of heating it with electricity or gas." },
      { heading: "Small wind turbines", text: "Vertical-axis turbines that work in wind from any direction, chosen only after the site has been checked." },
      { heading: "Hybrid systems", text: "Solar and wind together, where the site suits both, so the power holds up across the day and the seasons." },
    ],
    process: [
      "We review your electricity use and visit the site to check the roof, shade and wind",
      "You get a written design and an itemised quote, with the expected savings explained",
      "We supply and install the panels, turbine, batteries and inverter",
      "We connect and test the system, and show you how to use it",
      "We check the system after handover and answer your questions",
    ],
    faqs: [
      {
        q: "Will solar work on a cloudy day?",
        a: "Solar panels produce less power on cloudy days but still produce some. A battery stores power for the evening, and we size the system for the seasons where you live.",
      },
      {
        q: "Does wind work everywhere?",
        a: "No. Wind depends on the site, so we measure before recommending a turbine. Solar is often the better first choice.",
      },
      {
        q: "Can I connect my system to the grid?",
        a: "Some systems can be connected to the grid under the rules that apply to them. Our net metering guide explains the options.",
      },
    ],
    guides: ["solar-power-for-homes-and-schools", "solar-for-schools-kenya", "small-wind-turbines-kenya", "solar-water-heaters-kenya", "net-metering-kenya"],
    projects: [],
    message: "Hello Redbay Energy, I would like to talk about solar or wind power. The building is: ",
  },
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
    slug: "drainage",
    name: "Drainage systems",
    title: "Drainage systems: gutters, tanks, septic tanks and biodigesters",
    seoTitle: "Drainage, Gutters and Septic Tanks in Kenya",
    seoDescription:
      "Drainage systems by Redbay, an NCA-registered contractor: gutters, rainwater tanks, septic tanks and biodigesters for homes and schools.",
    intro:
      "Water has to go somewhere. We build the systems that carry rain off the roof into a tank, and waste away from the building safely, sized for how the building is used and built to the drawing.",
    areas: [
      { heading: "Gutters and downpipes", text: "PVC gutters that carry rain from the roof, with the falls set so water runs to the outlet instead of pooling or overflowing." },
      { heading: "Rainwater tanks", text: "A tank base built to carry the weight, with the gutters connected to the tank so it fills from the roof." },
      { heading: "Septic tanks", text: "Tanks sized for the number of people using the building, built to the drawing, with the house drains connected and tested." },
      { heading: "Biodigesters", text: "Where a biodigester suits the site better than a septic tank, we explain the choice and what each option needs." },
      { heading: "Schools and larger buildings", text: "Gutters, tanks and waste systems for classroom blocks and larger buildings, sized for the number of users." },
    ],
    signs: [
      "Rain overflowing from the roof edge or running down the walls",
      "Water pooling around the foundations after rain",
      "A foul smell in the yard or around the house",
      "Toilets or sinks that drain slowly or back up",
      "A tank that is full, overflowing or cracked",
      "A new house or school that needs a waste system or rainwater collection",
    ],
    methods: [
      { heading: "PVC gutters and tank connections", text: "Gutters fixed along the roof edge with a steady fall, and the downpipe connected to the tank." },
      { heading: "Tank bases", text: "A level, solid base under the tank, so the full weight of the water is carried safely." },
      { heading: "Concrete septic tanks", text: "Tanks built on site to the size and layout on your drawings, with the chambers and covers finished neatly." },
      { heading: "Drain connections", text: "The drains from toilets, sinks and showers connected to the tank, with the falls set so waste flows to it." },
    ],
    process: [
      "We visit the site and check the roof, the drains and the position of the tanks",
      "You get an itemised quote covering excavation, tank bases, tanks, pipework and connections",
      "We build the tank bases, or excavate and build the septic tank or biodigester",
      "We fix the gutters and connect the downpipes and drains with the correct falls",
      "We test the connections, make the ground good and hand over",
    ],
    faqs: [
      {
        q: "Septic tank or biodigester?",
        a: "Both have their place, and the right one depends on the site and how the building is used. Our guide compares them, and we advise on the site before you decide.",
      },
      {
        q: "How big a tank do I need?",
        a: "The size depends on how many people use the building. We size the tank from your drawings and the number of users.",
      },
      {
        q: "Can you connect gutters to a water tank?",
        a: "Yes. We fix the gutters, build the tank base if needed, and connect the downpipe so the tank fills from the roof.",
      },
      {
        q: "Can you replace an old tank?",
        a: "Yes. We check the old tank and the drains, then build a new tank and connect it, so the replacement works properly.",
      },
    ],
    guides: ["septic-tank-or-biodigester", "rainwater-harvesting-for-homes"],
    projects: [],
    message: "Hello Redbay Group, I need drainage work (gutters, tanks or a septic system). The building is: ",
  },
];
