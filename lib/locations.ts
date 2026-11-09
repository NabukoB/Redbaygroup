// Regional landing pages. Only regions where we have real, photographed projects.
// Local advice is kept general and true for the region; no prices or statistics without a source.
export type Location = {
  slug: string;
  name: string; // short name for links and the breadcrumb
  title: string; // the page h1
  seoTitle: string; // under 55 characters, the site name is added after it
  seoDescription: string;
  intro: string;
  counties: string[];
  towns: string[];
  local: { heading: string; text: string }[];
  projects: string[]; // project slugs in this region
  guides: string[]; // guide slugs most useful here
  faqs: { q: string; a: string }[];
  message: string; // WhatsApp opening line
};

export const locations: Location[] = [
  {
    slug: "nairobi",
    name: "Nairobi and around",
    title: "Building contractor in Nairobi, Kiambu and Machakos",
    seoTitle: "Building Contractor in Nairobi, Kiambu & Machakos",
    seoDescription:
      "NCA-registered building contractor based in Ruaraka, Nairobi. Homes, maisonettes, perimeter walls and finishes across Nairobi, Kiambu and Machakos.",
    intro:
      "We are based in Ruaraka, Nairobi, and build homes, boundary walls and finishes across the city and the counties around it, from Kikuyu to Kamulu, Lukenya and Tala.",
    counties: ["Nairobi", "Kiambu", "Machakos"],
    towns: ["Ruaraka", "Karen", "Kamulu", "Ruai", "Kikuyu", "Lukenya", "Tala", "Kangundo", "Athi River", "Syokimau", "Juja", "Ruiru"],
    local: [
      {
        heading: "Small plots, building up",
        text: "Many plots around Nairobi are small, so maisonettes and storey houses are common. That means suspended slabs, stairs and stronger foundations, all of which need an engineer's design and careful supervision.",
      },
      {
        heading: "Check the soil first",
        text: "Parts of Nairobi's eastern side, Machakos and Kajiado have black cotton soil, which swells when wet and shrinks when dry. It needs a deeper or specially designed foundation. A soil check before design avoids cracked walls later.",
      },
      {
        heading: "Stone is close to hand",
        text: "Machine-cut stone from quarries around Nairobi is the usual walling here. It builds fast and straight, and the short haul keeps transport costs down.",
      },
      {
        heading: "Each county has its own approvals",
        text: "Nairobi City County, Kiambu and Machakos each run their own building approval process. Your architect submits the drawings to the county where the plot sits, and the project is then registered with the NCA before work starts.",
      },
    ],
    projects: ["kamulu-roofing-shell", "tala-bungalow-shell", "karen-perimeter-wall", "lukenya-four-bedroom", "kikuyu-house", "kikuyu-perimeter-wall"],
    guides: ["building-approvals-kenya", "perimeter-wall-cost-kenya", "maisonette-or-bungalow", "machine-cut-stone-vs-blocks"],
    faqs: [
      {
        q: "Where in Nairobi are you based?",
        a: "Our office is in Ruaraka, Nairobi. We work across Nairobi and the neighbouring counties, including Kiambu and Machakos.",
      },
      {
        q: "Do you build from my architect's drawings?",
        a: "Yes. We build to the approved drawings and work with your architect and engineer during construction. If you do not have drawings yet, we can advise on the next steps.",
      },
      {
        q: "Can you build my house in phases?",
        a: "Yes. Many clients build the foundation and shell first, then finishes later. We plan the phases so each stage is weather-safe and nothing has to be broken out later.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Redbay Construction Ltd is registered with the National Construction Authority as a Category 7 contractor, and we hold Contractor's All Risk insurance on our projects.",
      },
    ],
    message: "Hello Redbay Group, I would like a quote for a building project in the Nairobi area.",
  },
  {
    slug: "coast",
    name: "Diani and the coast",
    title: "Building contractor in Diani, Ukunda and the Kenyan coast",
    seoTitle: "Building Contractor in Diani, Ukunda & the Coast",
    seoDescription:
      "Homes and interiors built for coastal conditions in Diani, Ukunda and Kwale: coral stone, salt-resistant metalwork, treated timber and cool, airy design.",
    intro:
      "We build and finish homes in Diani and Ukunda, designed for salt air, humidity and heat, from coral stone facades and glass balconies to timber pergolas and interiors.",
    counties: ["Kwale", "Mombasa", "Kilifi"],
    towns: ["Diani", "Ukunda", "Galu", "Tiwi", "Msambweni", "Mombasa", "Kilifi"],
    local: [
      {
        heading: "Salt air attacks metal",
        text: "Railings, balustrades and fixings near the sea need marine-grade stainless steel or properly galvanised and painted steel. Ordinary steel rusts and stains within a few years.",
      },
      {
        heading: "Coral stone and clean sand",
        text: "Coral stone keeps houses cool and gives the classic coastal finish, but it is porous and should be sealed. Sand for concrete and plaster must be washed: salty sand attacks reinforcement and causes damp walls.",
      },
      {
        heading: "Termites and timber",
        text: "Termites are common at the coast. Pergolas, trusses and doors should be treated hardwood, and the soil under the slab should be treated before it is cast.",
      },
      {
        heading: "Design for breeze and shade",
        text: "Cross ventilation, deep overhangs, balconies and rooftop pergolas keep a coastal home comfortable with less air conditioning.",
      },
    ],
    projects: ["diani-maisonette", "diani-gazebo", "ukunda-interiors"],
    guides: ["building-at-the-coast", "roofing-options-kenya", "flat-roofs-practical-questions", "epoxy-floors-choose-for-your-home"],
    faqs: [
      {
        q: "Do you work at the coast?",
        a: "Yes. We have built and finished homes in Diani and Ukunda in Kwale County. Tell us where your plot is and we will confirm.",
      },
      {
        q: "I live in Nairobi or abroad. Can you build my coastal home?",
        a: "Yes. We agree the scope, timeline and payment stages in writing before work starts, and each payment is tied to a stage of work being completed, so you can follow progress from wherever you are.",
      },
      {
        q: "Which materials last best near the sea?",
        a: "Sealed coral stone or well-rendered walls, marine-grade stainless steel or galvanised metalwork, treated hardwood and aluminium windows. Our coastal building guide explains each choice.",
      },
      {
        q: "Do you also do interiors at the coast?",
        a: "Yes. Redbay Interiors handles ceilings, feature walls, lighting and finishes, as in our Ukunda interiors project.",
      },
    ],
    message: "Hello Redbay Group, I would like a quote for a building project at the coast.",
  },
  {
    slug: "kajiado",
    name: "Kajiado",
    title: "School and home construction in Kajiado",
    seoTitle: "School & Home Construction in Kajiado",
    seoDescription:
      "Redbay builds schools and homes in Kajiado County, including Merishaw School in Isinya. Planned for black cotton soil, water storage and safety rules.",
    intro:
      "In Kajiado we built the classroom blocks at Merishaw School in Isinya, from setting out and foundations to roofing, finishes and the courtyard. We also take on homes across the county.",
    counties: ["Kajiado"],
    towns: ["Isinya", "Kitengela", "Kajiado town", "Ongata Rongai", "Kiserian"],
    local: [
      {
        heading: "Black cotton soil",
        text: "Much of Kajiado has black cotton soil, which swells and shrinks with the seasons. Foundations need to go deeper, or be designed specially, so walls and slabs do not crack.",
      },
      {
        heading: "Plan for water",
        text: "Water can be scarce in dry months. Rainwater harvesting from roofs, enough storage tanks and good drainage around the buildings should be part of the design from the start.",
      },
      {
        heading: "Schools follow safety rules",
        text: "School buildings should meet the Ministry of Education's safety standards: classroom sizes, outward-opening doors, stairs at both ends of storey blocks and fire extinguishers in every block.",
      },
      {
        heading: "Building around the school calendar",
        text: "For a running school, noisy and risky work is planned for the holidays and the site is fenced off from learners, so lessons and exams carry on.",
      },
    ],
    projects: ["merishaw-school"],
    guides: ["planning-a-school-building", "building-approvals-kenya", "solar-power-for-homes-and-schools", "cracks-in-walls-when-to-worry"],
    faqs: [
      {
        q: "Have you built schools in Kajiado?",
        a: "Yes. We built the classroom blocks at Merishaw School in Isinya, around a central courtyard, including the concrete frame, steel roofing, balustrades, finishes and paving.",
      },
      {
        q: "Can you build while the school is running?",
        a: "Yes. We plan the programme around the school calendar, fence off the works and schedule the noisiest work for the holidays.",
      },
      {
        q: "Do you build homes in Kitengela and Isinya too?",
        a: "Yes. We build homes across Kajiado County. Send us your plot location and drawings and we will give you an itemised quote.",
      },
      {
        q: "Can you add solar power to a school?",
        a: "Yes. Redbay Energy plans and installs solar systems for schools, which use most of their power during the day when solar produces.",
      },
    ],
    message: "Hello Redbay Group, I would like a quote for a project in Kajiado.",
  },
  {
    slug: "laikipia-nyandarua",
    name: "Nanyuki and Nyahururu",
    title: "Building contractor in Nanyuki, Nyahururu and Laikipia",
    seoTitle: "Building Contractor in Nanyuki, Nyahururu & Laikipia",
    seoDescription:
      "Homes built for the highlands in Nanyuki, Nyahururu and Oljororok: a maisonette and a bungalow by Redbay, designed for cold nights and heavy rain.",
    intro:
      "We have built a maisonette in Nanyuki and a bungalow in Oljororok, Nyahururu. Homes up here need to handle cold nights and heavy rain as well as the sun.",
    counties: ["Laikipia", "Nyandarua"],
    towns: ["Nanyuki", "Nyahururu", "Oljororok", "Ol Kalou", "Timau"],
    local: [
      {
        heading: "Keep the warmth in",
        text: "Nights are cold at this altitude. Ceilings with insulation, well-fitted doors and windows, and a fireplace or chimney where wanted make a big difference to comfort.",
      },
      {
        heading: "Roofs and gutters for heavy rain",
        text: "Steeper roofs, wide eaves, strong gutters and good drainage around the house keep water away from the walls and foundations in the long rains.",
      },
      {
        heading: "Stone for strength and warmth",
        text: "Stone walls are durable and hold heat, which suits the highland climate. Plastered or left exposed, they give a solid, low-maintenance finish.",
      },
      {
        heading: "Approvals in Laikipia and Nyandarua",
        text: "Plans are approved by the county where the plot sits. Allow time for the approval before planning your start date, then register the project with the NCA.",
      },
    ],
    projects: ["nanyuki-baraka-home", "nanyuki-perimeter-wall", "oljororok-bungalow"],
    guides: ["maisonette-or-bungalow", "roofing-options-kenya", "building-your-house-in-phases", "gypsum-ceilings-where-they-work"],
    faqs: [
      {
        q: "Do you build in Nanyuki and Nyahururu?",
        a: "Yes. We built a maisonette in Nanyuki and a bungalow in Oljororok, Nyahururu. Send us your plot location and we will confirm.",
      },
      {
        q: "Maisonette or bungalow for a highland plot?",
        a: "It depends on your plot size, budget and family. Our guide compares the two, and we can price both options for your plot.",
      },
      {
        q: "Can you build in phases?",
        a: "Yes. We often build the shell first and finishes later, planned so each stage is protected from the weather.",
      },
      {
        q: "How do I get a quote?",
        a: "Send your drawings, the site location and a few photos of the plot on WhatsApp. We will return an itemised bill of quantities and a fixed quote.",
      },
    ],
    message: "Hello Redbay Group, I would like a quote for a project in Nanyuki or Nyahururu.",
  },
  {
    slug: "kakamega",
    name: "Kakamega",
    title: "Building contractor in Kakamega and Western Kenya",
    seoTitle: "Building Contractor in Kakamega & Western Kenya",
    seoDescription:
      "Redbay builds family homes in Kakamega, from foundations to a finished roof. Homes planned for heavy rain, with solar water heating and fixed, itemised quotes.",
    intro:
      "We built a family bungalow in Kakamega from setting out to a finished tiled roof. Homes in Western Kenya need to handle frequent heavy rain, so we plan roofs and drainage carefully.",
    counties: ["Kakamega"],
    towns: ["Kakamega town", "Lurambi", "Shinyalu", "Malava", "Mumias", "Butere"],
    local: [
      {
        heading: "Plan for heavy rain",
        text: "Kakamega gets rain for much of the year. Wide roof overhangs, good gutters and downpipes, and drainage that leads water away from the walls keep the house dry and the foundations sound.",
      },
      {
        heading: "Raise the floor",
        text: "A floor slab set above the surrounding ground, with a damp-proof membrane under it, stops water and damp rising into the house during the long rains.",
      },
      {
        heading: "Treated timber",
        text: "Timber trusses are common here. They should be treated against termites and rot, and properly tied down to the ring beam so the roof holds in strong winds.",
      },
      {
        heading: "Hot water from the sun",
        text: "A solar water heater on the roof cuts power bills. Plan the roof position and pipe runs during the build, as we did on our Kakamega bungalow.",
      },
    ],
    projects: ["kakamega-bungalow"],
    guides: ["roofing-options-kenya", "building-your-house-in-phases", "solar-power-for-homes-and-schools", "building-approvals-kenya"],
    faqs: [
      {
        q: "Do you build in Kakamega?",
        a: "Yes. We built a family bungalow in Kakamega from foundations to a finished roof. Send us your plot location and we will confirm.",
      },
      {
        q: "I live in Nairobi. Can you build my home in Kakamega?",
        a: "Yes. We agree the scope, timeline and payment stages in writing before work starts, and each payment is tied to a stage of work being completed.",
      },
      {
        q: "Can you build in phases?",
        a: "Yes. Many clients build the shell and roof first, then finishes later. We plan each stage so it is protected from the rain.",
      },
      {
        q: "How do I get a quote?",
        a: "Send your drawings, the site location and a few photos of the plot on WhatsApp. We will return an itemised bill of quantities and a fixed quote.",
      },
    ],
    message: "Hello Redbay Group, I would like a quote for a project in Kakamega.",
  },
];

export const locationFor = (projectSlug: string) => locations.find((l) => l.projects.includes(projectSlug));
