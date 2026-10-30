// Homeowner guides. General advice only: no local statistics without a source.
export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
};

export const insights: Insight[] = [
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
];
