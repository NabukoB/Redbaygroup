// More homeowner guides (November 2026). Facts on rules are kept general and were checked against
// NCA, EBK and Ministry of Education sources; no prices or local statistics without a source.
import type { Insight } from "./insights";

export const moreInsights: Insight[] = [
  {
    slug: "building-approvals-kenya",
    title: "Building approvals in Kenya: what you need",
    description:
      "County plan approval, NCA project registration, NEMA and the occupation certificate, explained in plain English for Kenyan homeowners.",
    date: "2026-11-03",
    sections: [
      {
        heading: "Why approvals matter",
        body: [
          "Building without approval can lead to a stop order, a fine or, in the worst case, demolition. Approved drawings also protect you: they show the building was designed by qualified people and checked by the county.",
          "Approvals take time, so start them early, while you are still finalising the design and budget.",
        ],
      },
      {
        heading: "Start with the land documents",
        body: ["Before the county will look at your drawings, you will usually need:"],
        list: [
          "The title deed or lease for the plot",
          "A survey map showing the plot and its beacons",
          "A land rates clearance certificate from the county",
          "Land rent clearance if the land is leasehold",
        ],
      },
      {
        heading: "County building plan approval",
        body: [
          "A registered architect prepares the architectural drawings, and a registered structural engineer prepares the structural drawings and calculations. The application goes to the county's planning department, and most counties now take it online.",
          "The county checks things like plot coverage, building height, setbacks from the boundary, parking and access. If something does not comply, you get a query and the architect revises the drawings. Engineers now also register their projects on the Engineers Board of Kenya's online portal before the drawings go to the county.",
        ],
      },
      {
        heading: "NEMA, for bigger projects",
        body: [
          "Projects that may affect the environment need an Environmental Impact Assessment licence from NEMA. This usually applies to larger developments such as apartments, schools and commercial buildings, and to sensitive sites. A NEMA-registered expert prepares the assessment. Ask your architect early whether your project needs one, because it can add weeks to the timeline.",
        ],
      },
      {
        heading: "Register the project with the NCA",
        body: [
          "Before work starts, the project should be registered with the National Construction Authority. The developer registers through the NCA portal using the approved drawings, other approvals, a bill of quantities summary and the contract with the builder. Registration itself is free, but projects above KSh 5 million attract a construction levy of 0.5% of the contract value.",
          "The NCA also checks that your contractor is registered and holds a current practising licence in the right category for the size of the job.",
        ],
      },
      {
        heading: "Inspections and the occupation certificate",
        body: [
          "County inspectors may visit at key stages: foundations, slabs, roofing and completion. Keep the approved drawings on site so they can be checked.",
          "When the building is complete, apply for an occupation certificate. You need it to occupy or let the building legally, and it is often needed for permanent water and power connections.",
        ],
      },
      {
        heading: "How a contractor helps",
        body: [
          "A good contractor will not start without approvals in place and will build to the approved drawings. If the design changes during the build, the drawings should be revised and approved again, not changed on site.",
        ],
      },
    ],
    related: [{ label: "How to check a building contractor", href: "/insights/how-to-check-a-building-contractor/" }],
  },
  {
    slug: "roofing-options-kenya",
    title: "Roofing in Kenya: iron sheets, tiles or flat roof?",
    description:
      "Iron sheets, stone-coated tiles, clay and concrete tiles, and flat concrete roofs compared on weight, noise, upkeep and how long they last.",
    date: "2026-11-03",
    sections: [
      {
        heading: "Choose the roof with the structure",
        body: [
          "The roof covering decides how heavy the roof is, and the weight decides how strong the trusses, walls and ring beam must be. Choose the covering before the structural design is finished, not after the walls are up.",
        ],
      },
      {
        heading: "Iron sheets (mabati)",
        body: [
          "Iron sheets are light, quick to fix and the most affordable option. They come in corrugated, box and tile profiles, and in different thicknesses (gauges). Thicker sheets dent less and last longer.",
          "Their main drawbacks are noise in heavy rain and heat under the roof. Good insulation and a ceiling deal with both.",
        ],
      },
      {
        heading: "Stone-coated steel tiles",
        body: [
          "These are steel tiles with a stone-chip finish. They look like traditional tiles but weigh far less, so the roof structure can stay light. The stone coating also makes them quieter in rain than plain sheets.",
          "They need careful fixing at hips, valleys and ridges, so the quality of the roofer matters as much as the tiles.",
        ],
      },
      {
        heading: "Clay and concrete tiles",
        body: [
          "Clay and concrete tiles are durable and quiet, and they keep the house cooler. They are also heavy, so the roof structure and walls must be designed for the load. Broken tiles are easy to replace one at a time.",
        ],
      },
      {
        heading: "Flat concrete roofs",
        body: [
          "A flat roof gives a modern look and can become a usable terrace. It needs proper waterproofing and a slight fall so rain drains away. Our flat roofs guide covers this in more detail.",
        ],
      },
      {
        heading: "Questions to ask before you choose",
        body: [],
        list: [
          "How heavy is it, and is the structure designed for that weight?",
          "Timber or steel trusses, and is the timber treated against termites?",
          "How noisy will it be in heavy rain, and what insulation is planned?",
          "Are gutters, downpipes and fascia boards included in the quote?",
          "If you are near the coast, is the covering rated for salt air?",
        ],
      },
    ],
    related: [
      { label: "Two-storey home with a stone-coated tile roof, Kamulu", href: "/projects/kamulu-roofing-shell/" },
      { label: "Flat roofs: are they practical?", href: "/insights/flat-roofs-practical-questions/" },
    ],
  },
  {
    slug: "building-at-the-coast",
    title: "Building at the Kenyan coast: materials that last",
    description:
      "Salt air, humidity, termites and heat: how to choose materials and details for a home in Diani, Ukunda, Kilifi or Mombasa that will last.",
    date: "2026-11-03",
    sections: [
      {
        heading: "The coast is hard on buildings",
        body: [
          "Salt in the air, high humidity, strong sun and termites all work against a building at the coast. Materials that last for decades inland can rust, rot or stain within a few years near the sea. Planning for this from the start costs far less than repairs later.",
        ],
      },
      {
        heading: "Steel and metalwork",
        body: [
          "Salt air makes ordinary steel rust quickly. For railings, balustrades and fixings, use marine-grade stainless steel or properly galvanised and painted steel. Check the grade, not just the shine: cheaper stainless steel can still stain near the sea.",
          "Inside concrete, the reinforcement needs enough concrete cover and a good mix so salt cannot reach it.",
        ],
      },
      {
        heading: "Clean sand and good concrete",
        body: [
          "Sand used for concrete and plaster must be clean. Unwashed sea sand carries salt that attacks reinforcement and causes damp patches on walls. Ask where the sand comes from.",
        ],
      },
      {
        heading: "Coral stone",
        body: [
          "Coral stone is a traditional coastal material. It keeps houses cool and gives a warm finish when used as cladding. It is porous, so it should be sealed and kept away from standing water at the base of walls.",
        ],
      },
      {
        heading: "Timber and termites",
        body: [
          "Termites are common at the coast. Use treated hardwood for pergolas, trusses and doors, and treat cut ends on site. Treating the soil under the foundations before the slab is cast is also worth doing.",
        ],
      },
      {
        heading: "Design for heat and air",
        body: ["The best coastal homes stay cool without relying only on air conditioning:"],
        list: [
          "Cross ventilation through the main rooms",
          "Deep overhangs, balconies and pergolas that shade walls and windows",
          "Pale roof and wall finishes that reflect heat",
          "Breathable paints that let damp walls dry out",
          "Aluminium windows and doors, which do not rot or swell",
        ],
      },
    ],
    related: [
      { label: "Five-bedroom coastal maisonette, Diani", href: "/projects/diani-maisonette/" },
      { label: "Home interiors, Ukunda", href: "/projects/ukunda-interiors/" },
    ],
  },
  {
    slug: "machine-cut-stone-vs-blocks",
    title: "Machine-cut stone or blocks: which walling?",
    description:
      "Machine-cut stone, hand-dressed stone and concrete blocks compared for strength, finish, speed and cost drivers when building in Kenya.",
    date: "2026-11-03",
    sections: [
      {
        heading: "The walls set the budget",
        body: [
          "Walling is one of the biggest items in a house budget. The material you choose affects how fast the walls go up, how much mortar and plaster you need, and how the house looks if you leave the walls unplastered.",
        ],
      },
      {
        heading: "Machine-cut stone",
        body: [
          "Machine-cut stone comes from quarries in standard sizes with clean, square faces. Walls go up straight and fast, use less mortar, and can be left exposed for a natural stone look.",
          "Quality varies between quarries. Check that the stones are hard, evenly sized and not crumbling at the edges. Transport is a big part of the cost, so the distance from the quarry matters.",
        ],
      },
      {
        heading: "Hand-dressed stone",
        body: [
          "Hand-dressed stone is shaped on site by masons. It suits foundations and rustic finishes, but sizes are less even, so walls take longer and use more mortar.",
        ],
      },
      {
        heading: "Concrete blocks",
        body: [
          "Concrete blocks are made from cement, sand and ballast. Well-made blocks are strong and uniform, and they are common on upper floors because they are consistent. Poorly made blocks with too little cement are weak, so buy from a reliable supplier or make them on site under supervision.",
        ],
      },
      {
        heading: "How to decide",
        body: [],
        list: [
          "What is available near your site, and how far it must travel",
          "Whether the walls will be plastered or left exposed",
          "What the structural engineer specifies for load-bearing walls",
          "Speed: regular sizes build faster and need less plaster",
          "Mixing is fine: many homes use stone below and blocks above",
        ],
      },
    ],
    related: [
      { label: "Stone and block two-storey home, Kamulu", href: "/projects/kamulu-roofing-shell/" },
      { label: "Perimeter wall in Kikuyu", href: "/projects/kikuyu-perimeter-wall/" },
    ],
  },
  {
    slug: "maisonette-or-bungalow",
    title: "Maisonette or bungalow: which suits your plot?",
    description:
      "How plot size, budget, family needs and plans to build in phases decide between a maisonette and a bungalow in Kenya.",
    date: "2026-11-03",
    sections: [
      {
        heading: "Start with the plot",
        body: [
          "On a small plot, building up is often the only way to get the space you need and still keep a garden and parking. On a larger plot, a bungalow can spread out and keep everything on one level.",
          "County rules on plot coverage limit how much of the plot a building can cover, which can push a design upwards.",
        ],
      },
      {
        heading: "How the costs differ",
        body: [
          "A maisonette needs a suspended floor slab, a staircase and stronger columns and foundations. A bungalow of the same floor area needs a bigger foundation and a bigger roof. Neither is automatically cheaper, so compare itemised quotes for both designs on your plot.",
        ],
      },
      {
        heading: "Think about who will live there",
        body: [
          "Stairs suit some families and not others. If elderly parents will live with you, or you plan to stay in the house as you age, put at least one bedroom and a bathroom on the ground floor.",
          "A maisonette separates living and sleeping areas, which many families like for privacy and security.",
        ],
      },
      {
        heading: "Building in phases",
        body: [
          "If you plan to add a floor later, the foundations, columns and stair position must be designed for it from the start, and an engineer must confirm this in the drawings. Adding a floor to a bungalow that was not designed for it is risky and often not possible.",
        ],
      },
      {
        heading: "A quick checklist",
        body: [],
        list: [
          "Plot size, slope and county coverage rules",
          "Family needs now and in 10 to 20 years",
          "Views and privacy from neighbours",
          "Whether you will build in phases",
          "Itemised quotes for both options on your plot",
        ],
      },
    ],
    related: [
      { label: "Maisonette, Nanyuki", href: "/projects/nanyuki-baraka-home/" },
      { label: "Five-bedroom maisonette, Diani", href: "/projects/diani-maisonette/" },
      { label: "Bungalow, Oljororok", href: "/projects/oljororok-bungalow/" },
      { label: "Building your house in phases", href: "/insights/building-your-house-in-phases/" },
    ],
  },
  {
    slug: "planning-a-school-building",
    title: "Planning a school building in Kenya",
    description:
      "Classroom sizes, safety rules, exits, building around the school calendar and finishes that last: a guide for school owners and boards.",
    date: "2026-11-03",
    sections: [
      {
        heading: "Safety comes first",
        body: [
          "The Ministry of Education's Safety Standards Manual for Schools sets out what school buildings should provide. Your architect should design to it, and your contractor should build to it. Key points for classrooms include:",
        ],
        list: [
          "Classrooms of about 7.5 m by 6 m",
          "No more than 40 learners with two-seater desks, or 30 with one-seater desks",
          "Doors that open outward and are never locked from outside while learners are inside",
          "Windows without grills that open easily",
          "Wide stairways at both ends of storey buildings, with strong handrails",
          "Serviced fire extinguishers in every block",
        ],
      },
      {
        heading: "Dormitories need extra care",
        body: [
          "The manual also covers dormitories: wide doors that open outward, exits at each end and in the middle, space between beds and clear corridors. These rules exist because of past tragedies, so treat them as the minimum.",
        ],
      },
      {
        heading: "Plan the whole site, not one block",
        body: [
          "Most schools grow over time. A master plan shows where future classrooms, labs, toilets, the kitchen, play areas and parking will go, so each new block fits. Courtyard layouts like the one at Merishaw keep learners within sight and give sheltered walkways between rooms.",
        ],
      },
      {
        heading: "Build around the school calendar",
        body: [
          "If the school is running, plan noisy and dangerous work for the holidays and fence the site off from learners. A clear programme agreed in advance avoids disrupting exams.",
        ],
      },
      {
        heading: "Finishes that survive school life",
        body: ["School buildings take hard use. Choose:"],
        list: [
          "Hard-wearing floors that are easy to clean",
          "Washable paint on lower walls and corridors",
          "Strong steel balustrades on corridors and stairs",
          "Enough toilets and handwashing points for the number of learners",
          "Water storage and good rainwater drainage",
        ],
      },
      {
        heading: "Approvals",
        body: [
          "School projects need county approval, NCA registration and often a NEMA licence. Start these early, because they can take longer than you expect.",
        ],
      },
    ],
    related: [
      { label: "Merishaw School, Isinya", href: "/projects/merishaw-school/" },
      { label: "Building approvals in Kenya", href: "/insights/building-approvals-kenya/" },
    ],
  },
  {
    slug: "solar-power-for-homes-and-schools",
    title: "Solar power for homes and schools in Kenya",
    description:
      "Grid-tied, hybrid or off-grid solar, sizing a system, batteries and licensed installers, explained for Kenyan homes and schools.",
    date: "2026-11-03",
    sections: [
      {
        heading: "Start with what you want to power",
        body: [
          "The right system depends on what it must run. List the appliances you want on solar, how much power each uses and for how many hours a day. Lights, TVs and phones need far less than water pumps, electric cookers or water heaters. A proper assessment avoids paying for a system that is too big, or living with one that is too small.",
        ],
      },
      {
        heading: "Three types of system",
        body: [],
        list: [
          "Grid-tied: works alongside KPLC power to cut your bill, but usually switches off during a blackout",
          "Hybrid: grid-tied with batteries, so key loads keep running during blackouts",
          "Off-grid: panels and batteries only, for sites far from the grid",
        ],
      },
      {
        heading: "Batteries",
        body: [
          "Batteries are often the most expensive part of a system. Lithium batteries cost more upfront but last longer and can be drained further than lead-acid batteries. Only buy the battery capacity you need for the hours you want covered.",
        ],
      },
      {
        heading: "Plan it into a new building",
        body: [
          "If you are building, plan solar from the start. Leave a roof area open to the sky without shade, run cable conduits during construction, and set aside a cool, ventilated space for the inverter and batteries. This is cheaper and neater than adding it later.",
        ],
      },
      {
        heading: "Use a licensed installer",
        body: [
          "Under the Energy (Solar Photovoltaic Systems) Regulations, solar installers in Kenya must be licensed by EPRA. Ask to see the licence. A poorly installed system can be a fire risk and will not deliver what was promised.",
          "If the power is only for your own use on your own premises, you do not need an EPRA generation licence. Selling power to others is different and needs advice first.",
        ],
      },
      {
        heading: "Schools and institutions",
        body: [
          "Schools use most of their power during the day, which is when solar produces. That makes solar a strong fit for classrooms, offices, labs and water pumping. Pair it with energy-saving lighting and equipment to get the most from every panel.",
        ],
      },
    ],
    related: [
      { label: "Redbay Energy: solar and wind", href: "/companies/energy/" },
      { label: "Planning a school building", href: "/insights/planning-a-school-building/" },
    ],
  },
];
