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
    guides: ["damp-and-waterproofing", "flat-roofs-practical-questions", "building-at-the-coast", "rainwater-harvesting-for-homes"],
    projects: [], // add project slugs once there are photos of this work
    message: "Hello Redbay Group, I need waterproofing. The problem is: ",
  },
];
