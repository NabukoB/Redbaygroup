// Homeowner guides. General advice only: no local statistics without a source.
export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  // Our own work or guides that show this in practice; project pages link back
  related?: { label: string; href: string }[];
};

import { energyInsights } from "./insights-energy";
import { moreInsights } from "./insights-more";

const baseInsights: Insight[] = [
  {
    slug: "does-your-quotation-include-everything",
    title: "Does your building quotation include everything?",
    description:
      "A plain-English checklist for comparing building quotations in Kenya, so you can spot missing items before you sign.",
    date: "2026-10-30",
    sections: [
      {
        heading: "Why two quotes can be so different",
        body: [
          "Two contractors can quote very different totals for the same house. Often the cheaper one has simply left things out. Those items come back later as extra costs, usually when the work has already started.",
          "The way to compare fairly is to check that each quotation covers the same work.",
        ],
      },
      {
        heading: "What a complete quotation should cover",
        body: ["Ask whether each of these is included, and where:"],
        list: [
          "Preliminaries: site setup, water, security and site supervision",
          "Substructure: excavation, foundations and the ground floor slab",
          "Superstructure: walls, columns, beams and upper floors",
          "Roofing, including gutters and downpipes",
          "Doors, windows and grills",
          "Finishes: plaster, screed, tiles, ceilings and paint",
          "Plumbing and electrical work",
          "External works: drainage, paving, walls and gates",
          "VAT, and whether the total is before or after it",
        ],
      },
      {
        heading: "Questions to ask before you sign",
        body: ["A good contractor will answer these without hesitation:"],
        list: [
          "Is this an itemised bill of quantities, or a lump sum?",
          "Who buys the materials, and at what price?",
          "What are the payment stages, and what must be finished before each one?",
          "What happens if quantities change on site?",
          "Is the contractor licensed with the NCA, and is the work insured?",
        ],
      },
    ],
  },
  {
    slug: "flat-roofs-practical-questions",
    title: "Flat roofs look modern. Are they practical?",
    description:
      "What to ask your builder before choosing a flat roof for your home: waterproofing, drainage and maintenance.",
    date: "2026-10-30",
    sections: [
      {
        heading: "Why people choose them",
        body: [
          "Flat roofs give a clean, modern look and can be used as a terrace, or as a base for water tanks or solar panels. They can also make it easier to add a floor later.",
        ],
      },
      {
        heading: "Where they go wrong",
        body: [
          "A flat roof is never perfectly flat. It needs a slight slope so rainwater runs to the drains, and a proper waterproofing layer so water cannot seep into the slab. Most flat-roof leaks come from one of these two being done poorly, or from drains that get blocked and are never cleared.",
        ],
      },
      {
        heading: "What to ask your builder",
        body: ["Before you commit, ask:"],
        list: [
          "Which waterproofing system will be used, and is it guaranteed?",
          "How is the slope to the drains created, and where do the drains go?",
          "How will the roof be checked for leaks before handover?",
          "What maintenance will the roof need each year?",
        ],
      },
      {
        heading: "The short answer",
        body: [
          "A flat roof can work well when it is designed and waterproofed properly, and maintained. If any of the answers above are vague, check with your engineer before deciding.",
        ],
      },
    ],
  },
  {
    slug: "epoxy-floors-choose-for-your-home",
    title: "Epoxy floors: choose for your home, not the trend",
    description:
      "Epoxy flooring explained for homeowners: what it is, where it works, what can go wrong, and how it compares with tiles.",
    date: "2026-10-30",
    sections: [
      {
        heading: "What epoxy is",
        body: [
          "Epoxy is a resin coating poured over a prepared concrete floor. It sets into a seamless, glossy surface, and can be plain, flecked or metallic.",
        ],
      },
      {
        heading: "Where it works well",
        body: ["Epoxy suits spaces where a seamless, easy-to-clean floor matters:"],
        list: ["Garages and workshops", "Kitchens and utility rooms", "Modern living spaces with a minimal look"],
      },
      {
        heading: "What can go wrong",
        body: [
          "Most epoxy problems start under the coating. If the concrete is damp, dusty or poorly prepared, the epoxy can bubble, peel or crack. A glossy finish can also be slippery when wet unless a textured layer is added.",
        ],
      },
      {
        heading: "Epoxy or tiles?",
        body: [
          "Tiles are familiar, easy to replace one at a time, and come in many styles. Epoxy has no grout lines and looks seamless, but repairs are harder to hide. Choose based on how the room is used, your budget and how much upkeep you want, not on what is trending.",
        ],
      },
    ],
  },
  {
    slug: "building-your-house-in-phases",
    title: "Building your house in phases: how to do it right",
    description:
      "Many Kenyan families build in stages as money allows. How to plan phases so each one is safe, protected and ready for the next.",
    date: "2026-11-02",
    sections: [
      {
        heading: "Why build in phases",
        body: [
          "Building in phases lets you pay as you go instead of taking on a large loan. Done well, it works. Done badly, you end up paying twice: for work that is exposed to the weather for months, or for parts that must be broken and redone.",
        ],
      },
      {
        heading: "Plan the whole house first",
        body: [
          "Get the full, approved drawings before the first phase starts, even if you will only build the foundation this year. The foundation, columns and starter bars must be sized for the finished house. Adding a floor later only works if the structure below was designed for it.",
        ],
      },
      {
        heading: "Sensible places to pause",
        body: ["These are natural stopping points, where the work can wait safely:"],
        list: [
          "After the foundation and ground-floor slab",
          "After the walls and ring beam, before the roof",
          "After the roof is on, when the building is protected from rain",
          "After plaster, before finishes such as tiles and paint",
        ],
      },
      {
        heading: "Protect the work between phases",
        body: ["A long pause is where most damage happens. Before you stop:"],
        list: [
          "Cover exposed starter bars so they do not rust",
          "Make sure rainwater drains away from the foundation",
          "Store materials off the ground and under cover, or do not buy them yet",
          "Keep a written record of what was built, so the next team knows",
        ],
      },
      {
        heading: "Ask for a phased quote",
        body: [
          "A good contractor can price the whole house and split the quote into phases. You then know the full cost from day one, and each phase has a clear scope and budget.",
        ],
      },
    ],
  },
  {
    slug: "cracks-in-walls-when-to-worry",
    title: "Cracks in walls: when to worry and when not to",
    description:
      "Not every crack is a problem. How to tell a harmless plaster crack from a sign that something is moving, and what to do next.",
    date: "2026-11-02",
    sections: [
      {
        heading: "Most cracks are cosmetic",
        body: [
          "Fine, hairline cracks in plaster are common, especially in the first year as the plaster dries and shrinks. They usually run in random directions, do not grow, and can be filled when the house is next painted.",
        ],
      },
      {
        heading: "Signs that need a closer look",
        body: ["Call a professional if you see any of these:"],
        list: [
          "Cracks wider than a coin's edge, or that keep getting wider",
          "Diagonal cracks running from the corners of doors and windows",
          "Stair-step cracks following the joints in block or stone walls",
          "Doors and windows that suddenly stick or will not close",
          "Cracks in the floor slab, beams or columns",
        ],
      },
      {
        heading: "Common causes",
        body: [
          "Bigger cracks usually point to movement: soil settling under the foundation, water collecting near the walls, or a beam or slab carrying more load than it was designed for. The crack itself is a symptom. The cause is what needs fixing.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "Photograph the crack next to a ruler and note the date. Check it again after a few weeks. If it has grown, or matches any of the signs above, have a structural engineer inspect it before any repair. Filling a moving crack only hides the problem.",
        ],
      },
    ],
  },
  {
    slug: "gypsum-ceilings-where-they-work",
    title: "Gypsum ceilings: where they work and where to avoid",
    description:
      "Gypsum ceilings look clean and modern, but they hate water. Where to use them, where to choose something else, and how to make them last.",
    date: "2026-11-02",
    sections: [
      {
        heading: "Why gypsum is popular",
        body: [
          "Gypsum board gives a smooth, modern ceiling. It can hide wiring and pipes, take recessed lights and form tray ceilings with concealed lighting. It is also fairly quick to install.",
        ],
      },
      {
        heading: "Its weakness is water",
        body: [
          "Ordinary gypsum board softens, sags and stains when it gets wet. A small roof leak or a dripping pipe above it can ruin a whole section.",
        ],
      },
      {
        heading: "Where to think twice",
        body: ["Use moisture-resistant board, or a different ceiling, in:"],
        list: [
          "Bathrooms and showers",
          "Kitchens with heavy cooking steam",
          "Under a roof that has not been checked for leaks",
          "Covered outdoor areas such as verandas",
        ],
      },
      {
        heading: "How to make it last",
        body: ["A gypsum ceiling is only as good as what is above it:"],
        list: [
          "Fix every roof leak before the ceiling goes up",
          "Use a proper metal or treated-timber frame, evenly spaced",
          "Leave an access panel to reach pipes and wiring",
          "Paint with a good-quality emulsion once the joints are dry",
        ],
      },
    ],
    related: [
      { label: "Tray ceilings and lighting in a Nakuru home", href: "/projects/nakuru-interiors/" },
      { label: "Office ceilings with LED lighting, Nairobi", href: "/projects/sacco-office-nairobi/" },
      { label: "Home interiors, Ukunda", href: "/projects/ukunda-interiors/" },
    ],
  },
  {
    slug: "how-to-check-a-building-contractor",
    title: "How to check a building contractor before you hire",
    description:
      "Simple checks to make before handing over your project and money: licence, past work, insurance and how the contractor quotes.",
    date: "2026-11-02",
    sections: [
      {
        heading: "Check the licence",
        body: [
          "Building contractors in Kenya must be registered with the National Construction Authority (NCA). Ask for the registration certificate and check the name and category on the NCA's website. The category tells you the size of project the contractor is registered for.",
        ],
      },
      {
        heading: "See real work",
        body: ["Photos are a start, but go further:"],
        list: [
          "Ask for two or three past clients you can call",
          "Visit a site that is under construction, not only finished houses",
          "Look at the quality of walls, corners and finishes up close",
        ],
      },
      {
        heading: "Ask about insurance",
        body: [
          "Contractor's All Risk insurance covers damage to the works during construction, for example from fire, theft or storms. Ask whether the contractor carries it for your project.",
        ],
      },
      {
        heading: "Read the quotation carefully",
        body: [
          "A clear, itemised bill of quantities is a good sign. It shows the contractor has measured your project, and it makes comparing quotes fair. Be careful with very low lump-sum quotes; missing items usually come back as extra costs.",
        ],
      },
      {
        heading: "Agree it in writing",
        body: ["Before work starts, have a written agreement that covers:"],
        list: [
          "The full scope of work and the drawings it follows",
          "Payment stages tied to finished work, not to dates",
          "The timeline, and what happens if it slips",
          "Who buys which materials",
        ],
      },
    ],
  },
  {
    slug: "perimeter-walls-what-to-know",
    title: "Perimeter walls: what to know before you build",
    description:
      "A boundary wall is often the first thing built on a plot. Foundations, columns, height and drainage: what makes a perimeter wall last.",
    date: "2026-11-02",
    sections: [
      {
        heading: "Confirm the boundary first",
        body: [
          "Before any digging, make sure you know exactly where your boundary is. A surveyor can re-establish the beacons. A wall built on the wrong line is expensive to move and can lead to disputes with neighbours.",
        ],
      },
      {
        heading: "The foundation matters most",
        body: [
          "Most failed boundary walls fail at the bottom. A proper wall sits on a trench footing, with a stone or concrete base and a damp-proof layer before the walling starts. Skipping these to save money is the most common mistake.",
        ],
      },
      {
        heading: "Columns and height",
        body: [
          "Long walls need reinforced concrete columns at regular intervals to keep them straight and stable. The taller the wall, the stronger the foundation and columns must be. Very tall walls should be checked by an engineer.",
        ],
      },
      {
        heading: "Plan for water",
        body: ["Water is a wall's main enemy. Make sure the design includes:"],
        list: [
          "Weep holes or gaps so water does not pond behind the wall",
          "A coping on top to shed rain",
          "Drainage along the base where water flows across the plot",
        ],
      },
      {
        heading: "Think about the gate early",
        body: [
          "Decide the gate size and type before the wall goes up, so the gate columns are built strong enough to carry it.",
        ],
      },
    ],
    related: [
      { label: "Perimeter wall calculator", href: "/perimeter-wall-calculator/" },
      { label: "Perimeter wall cost per metre", href: "/insights/perimeter-wall-cost-kenya/" },
      { label: "Perimeter wall in Karen", href: "/projects/karen-perimeter-wall/" },
      { label: "Perimeter wall in Kikuyu", href: "/projects/kikuyu-perimeter-wall/" },
    ],
  },
];

// Newest first, so the latest guides lead the list
export const insights: Insight[] = [...energyInsights, ...moreInsights, ...baseInsights];
