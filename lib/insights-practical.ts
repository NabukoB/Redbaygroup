// Practical building guides (November 2026). General advice only: no prices, distances or
// regulatory figures without a source. Each guide links to real Redbay work.
import type { Insight } from "./insights";

export const practicalInsights: Insight[] = [
  {
    slug: "building-on-black-cotton-soil",
    title: "Building on black cotton soil in Kenya",
    description:
      "Why black cotton soil cracks houses and walls, how to spot it on your plot, and the foundations that keep a building sound in Kajiado, Machakos and Nairobi.",
    date: "2026-11-09",
    sections: [
      {
        heading: "What black cotton soil is",
        body: [
          "Black cotton soil is a dark clay found across parts of Kenya, including much of Kajiado, Machakos, eastern Nairobi and Athi River. It swells when it gets wet and shrinks and cracks when it dries. That movement pushes and pulls on anything built on it.",
          "A house or wall on an ordinary shallow foundation in this soil will often crack within a few rainy seasons. The cracks usually appear at corners, around windows and doors, and where walls meet floors.",
        ],
      },
      {
        heading: "How to tell if your plot has it",
        body: ["Signs to look for:"],
        list: [
          "Dark grey or black soil that turns sticky and slippery when wet",
          "Wide cracks in the ground during the dry season",
          "Cracked walls and floors on neighbouring buildings",
          "Water that stands on the surface instead of soaking in",
        ],
      },
      {
        heading: "Test before you design",
        body: [
          "A soil investigation tells your engineer how deep the black cotton soil goes and what lies beneath it. That decides the foundation. The test costs far less than repairing a cracked house, so do it before the drawings are finished.",
        ],
      },
      {
        heading: "Foundation options",
        body: ["Your structural engineer will choose based on the soil depth and the building. Common approaches are:"],
        list: [
          "Digging out the black cotton soil and replacing it with compacted hardcore or murram",
          "Taking the foundation down through the soil to firmer ground below",
          "A reinforced raft or strip foundation designed to spread the load",
          "Ground beams that tie the foundation together so it moves as one",
        ],
      },
      {
        heading: "Keep water away",
        body: [
          "Since the soil moves with moisture, good drainage matters as much as the foundation. Gutters, downpipes, an apron around the house and drains that lead water away all reduce the swelling and shrinking under the building. The same applies to perimeter walls, which crack easily on this soil if the foundation is too shallow.",
        ],
      },
    ],
    related: [
      { label: "School and home construction in Kajiado", href: "/locations/kajiado/" },
      { label: "Merishaw School, Isinya", href: "/projects/merishaw-school/" },
      { label: "Cracks in walls: when to worry", href: "/insights/cracks-in-walls-when-to-worry/" },
    ],
  },
  {
    slug: "how-to-read-a-bill-of-quantities",
    title: "How to read a bill of quantities (BoQ)",
    description:
      "A plain guide to the bill of quantities: what the columns mean, how the work is grouped, and the questions to ask before you accept a building quote in Kenya.",
    date: "2026-11-09",
    sections: [
      {
        heading: "What a BoQ is",
        body: [
          "A bill of quantities lists every part of a building job, measured and priced. Instead of one total, you see how much concrete, walling, roofing and finishing is included, and what each costs. It is the best way to compare quotes fairly and to control cost during the build.",
        ],
      },
      {
        heading: "The columns",
        body: ["Most BoQs use the same layout:"],
        list: [
          "Item: a short description of the work, for example 200 mm machine-cut stone walling",
          "Unit: how it is measured, such as m² for walls, m³ for concrete or No. for items like doors",
          "Quantity: how much of it there is",
          "Rate: the price for one unit, including labour and materials",
          "Amount: quantity multiplied by rate",
        ],
      },
      {
        heading: "How the work is grouped",
        body: ["A building BoQ usually follows the order of construction:"],
        list: [
          "Preliminaries: site setup, supervision, water, security and insurance",
          "Substructure: everything up to the ground floor slab",
          "Superstructure: walls, columns, beams, slabs and stairs",
          "Roofing, doors and windows",
          "Finishes: plaster, screed, tiles, ceilings and paint",
          "Services: plumbing and electrical",
          "External works: drainage, paving, walls and gates",
        ],
      },
      {
        heading: "What to check",
        body: [],
        list: [
          "Are the quantities measured from your drawings, not guessed?",
          "Do the rates look consistent, or is one item unusually cheap?",
          "Are provisional sums clearly marked, and what do they cover?",
          "Is VAT shown, and are prices before or after it?",
          "Is anything you expect missing, such as the septic tank or the gate?",
        ],
      },
      {
        heading: "Use it during the build",
        body: [
          "A good BoQ also sets payment stages and makes changes easy to price. If you add a room or change a finish, the contractor can price it from the agreed rates rather than starting over.",
        ],
      },
    ],
    related: [
      { label: "Get a BoQ prepared for your drawings", href: "/bill-of-quantities-service/" },
      { label: "Does your building quotation include everything?", href: "/insights/does-your-quotation-include-everything/" },
      { label: "Perimeter wall calculator", href: "/perimeter-wall-calculator/" },
    ],
  },
  {
    slug: "damp-and-waterproofing",
    title: "Damp walls and waterproofing: causes and fixes",
    description:
      "Why walls get damp, how to tell rising damp from leaks and condensation, and the waterproofing that stops it in new and existing Kenyan homes.",
    date: "2026-11-09",
    sections: [
      {
        heading: "Find the source first",
        body: [
          "Damp has three common causes, and each needs a different fix. Painting over damp without finding the source only hides it for a few months.",
        ],
        list: [
          "Rising damp: water drawn up from the ground into the bottom of the walls",
          "Penetrating damp: rain getting in through walls, roofs, windows or cracks",
          "Condensation: moisture from cooking, bathing and drying clothes settling on cool walls",
        ],
      },
      {
        heading: "Rising damp",
        body: [
          "Tide marks and flaking paint along the bottom of walls usually mean rising damp. New buildings prevent it with a damp-proof course in the walls and a damp-proof membrane under the floor slab. In older buildings, injected damp-proof treatments and drainage around the outside can help.",
        ],
      },
      {
        heading: "Leaks from outside",
        body: [
          "Patches that grow after rain point to water getting in. Check gutters and downpipes, roof flashings, window sills, cracks in external plaster and flat roof waterproofing. Fix the outside before repairing the inside.",
        ],
      },
      {
        heading: "Condensation",
        body: [
          "Black mould in corners, behind furniture and in bathrooms is often condensation. Better ventilation is the cure: extractor fans in kitchens and bathrooms, windows that open, and air vents. Breathable paints help walls dry out.",
        ],
      },
      {
        heading: "Waterproofing in a new build",
        body: ["The cheapest time to stop damp is during construction:"],
        list: [
          "Damp-proof course in the walls and a membrane under the slab",
          "Waterproofing on flat roofs, balconies and bathroom floors",
          "Ground sloping away from the house, with an apron and drains",
          "Proper roof overhangs, gutters and downpipes",
        ],
      },
      {
        heading: "A simple way to tell them apart",
        body: ["You can learn a lot before calling anyone. Watch the wall for a week or two and note:"],
        list: [
          "Does it get worse after rain, and only on walls facing the weather? That points to water getting in from outside.",
          "Is it only at the bottom of the wall, with a white salty edge or crumbling plaster? That points to rising damp.",
          "Is it worse on cool mornings, in corners, behind wardrobes and near windows, with black mould? That points to condensation.",
          "Does it appear below a bathroom, kitchen or tank, whatever the weather? Suspect a leaking pipe or a failed floor waterproofing.",
        ],
      },
      {
        heading: "A foil test you can do yourself",
        body: [
          "Tape a square of kitchen foil or plastic sheet firmly to the damp patch, sealing all four edges, and leave it for two days. If drops form on the outside of the foil, the moisture is coming from the room air, which means condensation. If the wall behind the foil is wet or darker, the moisture is coming through the wall. It is not a laboratory test, but it saves many people from paying to treat the wrong problem.",
        ],
      },
      {
        heading: "Mistakes that make damp worse",
        body: ["These are common, and each one hides the problem for a few months before it returns:"],
        list: [
          "Painting over damp walls, even with a thick waterproof paint",
          "Plastering or tiling over a wall that is still wet",
          "Fixing the inside of the wall when water is entering from outside",
          "Raising the ground or paving against the wall so water collects at its foot",
          "Blocking air vents to keep a room warm",
        ],
      },
      {
        heading: "When to call a professional",
        body: [
          "Call someone when the damp keeps coming back after you have fixed the obvious causes, when it is on an upper floor or under a flat roof, when plaster is falling off, or when you cannot find where the water enters. A site inspection that finds the source is worth more than a quick treatment. Let the person write down what they found and what they recommend, so you can compare any quotes that follow.",
        ],
      },
    ],
    related: [
      { label: "Redbay waterproofing service", href: "/services/waterproofing/" },
      { label: "Flat roofs: are they practical?", href: "/insights/flat-roofs-practical-questions/" },
      { label: "Building at the Kenyan coast", href: "/insights/building-at-the-coast/" },
    ],
  },
  {
    slug: "septic-tank-or-biodigester",
    title: "Septic tank or biodigester: which suits your home?",
    description:
      "How septic tanks and biodigesters work, the pros and cons of each, soakaways, approvals and upkeep, for Kenyan homes without a sewer connection.",
    date: "2026-11-09",
    sections: [
      {
        heading: "When you need one",
        body: [
          "Most homes outside town centres are not connected to a public sewer, so waste water must be treated on the plot. The two common choices are a septic tank and a biodigester. Both must be shown on your approved drawings and built to the county's requirements.",
        ],
      },
      {
        heading: "Septic tanks",
        body: [
          "A septic tank is a sealed chamber, usually built in concrete or masonry, where solids settle and break down. The liquid then flows to a soakaway pit or drainage field, where the ground absorbs it.",
          "Septic tanks are well understood and reliable when built properly. They need emptying by an exhauster every few years, depending on their size and use.",
        ],
      },
      {
        heading: "Biodigesters",
        body: [
          "A biodigester uses bacteria to break down waste more completely before the water goes to a soakaway. Many are compact prefabricated units, which makes them quicker to install and suitable for smaller plots. They need emptying less often, but the bacteria must be kept healthy, so avoid pouring strong chemicals and bleach down the drains.",
        ],
      },
      {
        heading: "Soil and space decide",
        body: ["Whichever you choose, it only works if the ground can take the water. Check:"],
        list: [
          "How well the soil drains; clay and black cotton soil drain poorly",
          "Distance from boreholes, wells and the plot boundary, as the county requires",
          "Room for the soakaway, and access for an exhauster lorry",
          "The number of people the system must serve",
        ],
      },
      {
        heading: "Build it right the first time",
        body: [
          "A failing septic system is unpleasant and expensive to fix. Have it sized by your engineer, built with watertight walls and covers, and fitted with vent pipes. Make sure it is in your bill of quantities from the start, not added at the end.",
        ],
      },
    ],
    related: [
      { label: "Septic tank and biodigester cost in Kenya", href: "/insights/septic-tank-cost-kenya/" },
      { label: "Building approvals in Kenya", href: "/insights/building-approvals-kenya/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
    ],
  },
  {
    slug: "rainwater-harvesting-for-homes",
    title: "Rainwater harvesting for homes and schools",
    description:
      "How to collect and store rainwater in Kenya: roofs, gutters, first-flush diverters, tank sizing and keeping stored water clean for homes and schools.",
    date: "2026-11-09",
    sections: [
      {
        heading: "Your roof is a water source",
        body: [
          "Every rainy season, a roof sheds a large amount of clean water that usually runs off the plot. Collecting it cuts water bills, gives a backup when supply is unreliable and reduces flooding around the building.",
        ],
      },
      {
        heading: "What you need",
        body: [],
        list: [
          "A suitable roof: iron sheets and tiles collect well",
          "Strong gutters and downpipes sized for heavy rain",
          "A first-flush diverter that throws away the dirty first rain",
          "Mesh screens to keep out leaves and insects",
          "Storage tanks on a firm, level base",
          "An overflow that leads away from the foundations",
        ],
      },
      {
        heading: "How big a tank?",
        body: [
          "Tank size depends on your roof area, local rainfall and how much water you use. Larger roofs fill tanks faster, and areas with long dry seasons need more storage. Many homes start with one or two tanks and add more later, so leave space and a level base for them.",
        ],
      },
      {
        heading: "Keep the water clean",
        body: [
          "Clean gutters before the rains, keep tank lids closed and screened, and drain sediment from the tank bottom from time to time. Treat or filter rainwater before drinking it.",
        ],
      },
      {
        heading: "Plan it into the build",
        body: [
          "It is cheaper to plan rainwater harvesting with the roof and drainage design than to add it later. Schools in particular benefit, as large roofs over classroom blocks can collect a lot of water for cleaning, toilets and gardens.",
        ],
      },
    ],
    related: [
      { label: "Family bungalow, Kakamega", href: "/projects/kakamega-bungalow/" },
      { label: "School and home construction in Kajiado", href: "/locations/kajiado/" },
      { label: "Roofing options in Kenya", href: "/insights/roofing-options-kenya/" },
    ],
  },
  {
    slug: "planning-a-kitchen",
    title: "Planning a kitchen that works: a Kenyan guide",
    description:
      "Kitchen layouts, worktops, cabinets, ventilation, lighting and sockets: how to plan a practical kitchen for a Kenyan home before the walls are finished.",
    date: "2026-11-09",
    sections: [
      {
        heading: "Plan before plastering",
        body: [
          "Many kitchen problems start when plumbing and wiring are fixed before the layout is decided. Settle where the sink, cooker, fridge and worktops go before the walls are plastered, so pipes and sockets end up in the right places.",
        ],
      },
      {
        heading: "Choose a layout",
        body: [],
        list: [
          "L-shaped: flexible and suits most rooms",
          "U-shaped: lots of worktop and storage for busy kitchens",
          "Galley: two parallel runs, efficient in narrow spaces",
          "Open kitchen with a serving counter: links cooking with the living area",
        ],
      },
      {
        heading: "Worktops and cabinets",
        body: [
          "Granite is hard-wearing and resists heat, which suits Kenyan cooking. Cabinets in moisture-resistant board with good edging last longer near the sink. Mix closed cupboards with a few open shelves, and fit drawers for pots and pans.",
        ],
      },
      {
        heading: "Ventilation and light",
        body: [
          "A cooker hood that vents outside removes smoke and grease. Plan a window or vent near the cooking area. Light the worktops directly with pendants or under-cabinet lights, not just a single ceiling light.",
        ],
      },
      {
        heading: "Sockets and services",
        body: ["Plan enough points for:"],
        list: [
          "Fridge, microwave, kettle and other worktop appliances",
          "A built-in oven and hob, gas or electric",
          "The cooker hood",
          "A water point for a washing machine or water dispenser, if needed",
        ],
      },
    ],
    related: [
      { label: "Fitted kitchen and interiors, Nakuru", href: "/projects/nakuru-interiors/" },
      { label: "Redbay Interiors", href: "/companies/interiors/" },
    ],
  },
  {
    slug: "office-renovation-guide",
    title: "Office renovation in Kenya: a planning guide",
    description:
      "How to plan an office fit-out in Kenya: layout, glass partitions, ceilings and lighting, power and data, working around staff, and the right order of works.",
    date: "2026-11-09",
    sections: [
      {
        heading: "Start with how people work",
        body: [
          "A good office layout follows how the team works. Decide how many private offices, meeting rooms and open desks you need, where visitors arrive, and what needs privacy. That brief shapes everything else.",
        ],
      },
      {
        heading: "Partitions",
        body: [
          "Glass partitions in steel or aluminium frames divide space while keeping it bright. Frosted film adds privacy where needed, and timber-finish panels at the bottom hide desks and cables. Plasterboard partitions are cheaper where light is not needed.",
        ],
      },
      {
        heading: "Ceilings and lighting",
        body: [
          "Suspended ceilings hide cables and air conditioning, and make lights and access panels easy to place. Recessed downlights and linear LED lights give even, comfortable light for screen work. Plan the ceiling layout with the partitions so lights and air conditioning units sit inside the right rooms.",
        ],
      },
      {
        heading: "Power, data and air",
        body: ["Plan these before the partitions go up:"],
        list: [
          "Sockets and data points at every desk position",
          "Power and data for screens in meeting rooms",
          "Air conditioning or ventilation for closed rooms",
          "Emergency lighting and fire exits kept clear",
        ],
      },
      {
        heading: "Keep the business running",
        body: [
          "Most offices cannot close for a renovation. Work can be phased room by room, with noisy and dusty work done after hours or at weekends. Redbay Interiors can work evenings and weekends for this reason. Agree the programme in advance so staff know which areas are affected and when.",
        ],
      },
    ],
    related: [
      { label: "SACCO head office fit-out, Nairobi", href: "/projects/sacco-office-nairobi/" },
      { label: "Redbay Interiors", href: "/companies/interiors/" },
      { label: "Gypsum ceilings: where they work", href: "/insights/gypsum-ceilings-where-they-work/" },
    ],
  },
  {
    slug: "cost-of-building-a-house-per-square-metre-kenya",
    title: "Cost of building a house per square metre in Kenya",
    description:
      "Published building costs per square metre in Kenya for bungalows and maisonettes, what they include, and why your own figure will differ.",
    date: "2026-11-25",
    sections: [
      {
        heading: "The published figures",
        body: [
          "The Institute of Quantity Surveyors of Kenya (IQSK) publishes building cost figures from recently completed projects. Construction Kenya reported them in October 2025. They are the best public starting point for a budget, and they are not a quote.",
          "In Nairobi and Central, a standard bungalow came to KSh 48,750 per square metre, and a luxury maisonette to KSh 84,000. In the Coastal region, a bungalow came to KSh 50,840. In Western and Nyanza, a standard bungalow came to KSh 49,770 and a luxurious maisonette to KSh 87,250.",
        ],
        list: [
          "Nairobi and Central: standard bungalow KSh 48,750 per m², luxury maisonette KSh 84,000",
          "Coastal: bungalow KSh 50,840 per m²",
          "Western and Nyanza: standard bungalow KSh 49,770 per m², luxurious maisonette KSh 87,250",
        ],
      },
      {
        heading: "How to use a figure per square metre",
        body: [
          "Multiply the floor area of the house by the rate. A 120 m² standard bungalow at KSh 48,750 gives about KSh 5.85 million. A 120 m² luxury maisonette at KSh 84,000 gives about KSh 10.08 million. That is a planning figure for the building only.",
          "The published sources do not define what each tier contains. The same words, standard and luxury, can mean very different finishes. Treat the range as a guide to the scale of the budget, not to what your house will cost.",
        ],
      },
      {
        heading: "What is usually not in the figure",
        body: [
          "A cost per square metre covers the building. It normally leaves out the land, approvals and professional fees, the perimeter wall and gate, landscaping, and furniture. Ask whoever gives you a rate exactly what it covers.",
        ],
        list: [
          "Land and the cost of buying it",
          "Architectural and structural drawings, and approval fees",
          "Perimeter wall, gate and landscaping",
          "Septic tank or biodigester, and water storage if priced separately",
          "Furniture, curtains and appliances",
        ],
      },
      {
        heading: "Why your own house will cost something different",
        body: [
          "Costs shift with the design, the finishes, the soil, the distance materials travel and the time of year. A house with a roof terrace, large windows or imported finishes costs more per square metre than a simple bungalow with a plain roof.",
          "Black cotton soil needs a deeper or stronger foundation, which raises the cost of the substructure. A plot far from town adds transport. Material prices also move, so a figure from last year is already out of date.",
        ],
      },
      {
        heading: "How to get your real cost",
        body: [
          "The only way to know is to price your drawings. A bill of quantities lists every item with its quantity, with labour and materials shown separately, so that you and your builder agree on the same scope before work starts.",
          "Use the published figure to decide whether a house is within reach. Use a bill of quantities to decide what to build and what to pay.",
        ],
      },
    ],
    related: [
      { label: "House cost calculator", href: "/house-cost-calculator/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
      { label: "Does your building quotation include everything?", href: "/insights/does-your-quotation-include-everything/" },
      { label: "Building your house in phases", href: "/insights/building-your-house-in-phases/" },
    ],
  },
  {
    slug: "gypsum-ceiling-cost-kenya",
    title: "Gypsum ceiling cost in Kenya per square metre",
    description:
      "Typical gypsum ceiling prices in Kenya per square metre, supplied and fixed, by design, what is left out, and how to price your own rooms.",
    date: "2026-11-25",
    sections: [
      {
        heading: "How gypsum ceilings are priced",
        body: [
          "Contractors usually quote a gypsum ceiling per square metre, supplied and installed, which means the boards, the metal framing and the labour together. Hardware shops sell the materials by the sheet or by the length instead. The figures below are typical market ranges for November 2026. Your own quote will vary with the design, the site and the supplier, so ask for it in writing.",
        ],
      },
      {
        heading: "Typical rates, supplied and installed",
        body: [
          "The more levels, curves and hidden lighting a ceiling has, the more it costs per square metre, because it takes more framing, more cutting and more skilled labour.",
        ],
        list: [
          "Plain flat ceiling: about KSh 900 to 1,500 per m². Suits bedrooms and passages, and covers cracked or rough slabs.",
          "Simple drop or single coffer: about KSh 1,500 to 2,200 per m². Suits master bedrooms and dining areas.",
          "Bulkheads with an LED cove: about KSh 2,200 to 3,500 per m² and above. Suits living rooms with several levels, curves and concealed lighting.",
        ],
      },
      {
        heading: "What a quote usually leaves out",
        body: [
          "A standard quote covers fixing the boards, jointing and skimming. Painting, LED strips, downlights and electrical wiring are normally priced separately, unless the quote is a full package. Always ask which of these are in.",
        ],
      },
      {
        heading: "If you buy the materials yourself",
        body: [
          "A standard board is 4 ft by 8 ft, about 3 m² (2.97 m²). Typical shop prices per sheet are KSh 700 to 900 for a 9 mm standard board, KSh 1,700 to 2,000 for a 12.5 mm heavy-duty board, and KSh 2,200 to 2,800 for a moisture-resistant board. Use the moisture-resistant board in bathrooms and kitchens. Metal furring channels cost about KSh 350 to 500 for a 3 m length.",
          "Labour alone, which means fixing, jointing and skimming, is typically KSh 300 to 600 per m² for plain ceilings and KSh 700 to 1,200 per m² for designed, multi-level ceilings. Buying the materials yourself saves money only if you can count them correctly. Too few sheets stops the job, and too many is waste.",
        ],
      },
      {
        heading: "Worked examples",
        body: [
          "A 20 m² bedroom with a plain flat ceiling at KSh 900 to 1,500 per m² comes to about KSh 18,000 to 30,000.",
          "A 25 m² living room with bulkheads and an LED cove at KSh 2,200 to 3,500 per m² comes to about KSh 55,000 to 87,500, before the lights and wiring.",
          "To price a whole house, measure the ceiling area of each room, pick the design for each room, and add the totals. Mixing plain ceilings in bedrooms with a designed ceiling in the living room is the usual way to keep the cost down.",
        ],
      },
      {
        heading: "Getting an exact price",
        body: [
          "Send the room sizes and the design you want. A bill of quantities lists the boards, framing, labour and finishing as separate lines, so that you can compare quotes like for like. Ask for the same breakdown from every contractor.",
        ],
      },
    ],
    related: [
      { label: "Gypsum ceilings: where they work", href: "/insights/gypsum-ceilings-where-they-work/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
      { label: "Does your building quotation include everything?", href: "/insights/does-your-quotation-include-everything/" },
    ],
  },
  {
    slug: "septic-tank-cost-kenya",
    title: "Septic tank and biodigester cost in Kenya",
    description:
      "Typical costs in Kenya for a concrete septic tank, a plastic tank and a biodigester, what each includes, and what pushes the price up.",
    date: "2026-11-25",
    sections: [
      {
        heading: "Three ways to handle waste off the sewer line",
        body: [
          "If your plot is not on a sewer line, you choose between a conventional concrete septic tank with a soak pit, a prefabricated plastic septic tank, or a biodigester. The figures below are typical market ranges for November 2026. Real quotes vary with the ground, the size of the household and the supplier.",
        ],
      },
      {
        heading: "Concrete septic tank and soak pit",
        body: [
          "A built concrete tank with a soak pit typically costs KSh 80,000 to 200,000 or more. That covers excavation, a concrete base, block or stone walls, waterproof plastering, a reinforced top slab with manhole covers and the soak pit next to it.",
          "Rocky ground, black cotton soil and a high water table push the cost towards the top of the range, because the digging and the walls are harder. A tank also needs emptying by an exhauster truck every 2 to 5 years, typically at KSh 8,000 to 25,000 per trip.",
        ],
      },
      {
        heading: "Plastic septic tank",
        body: [
          "A 2,000-litre horizontal plastic tank is listed at about KSh 50,000 for the tank alone. Excavation, the sand or concrete bedding and the soak pit plumbing are extra, so the finished cost is higher than the price on the tank.",
        ],
      },
      {
        heading: "Biodigester",
        body: [
          "A biodigester uses bacteria to break down waste. It needs little space and rarely needs an exhauster. Typical installed prices, including the tank, excavation, piping, a small soakaway and the starter culture, are:",
        ],
        list: [
          "1 m³, for 1 to 15 users, such as a 2 to 3 bedroom family home: about KSh 80,000 to 95,000",
          "2 m³, for 15 to 30 users, such as a large villa or small block: about KSh 110,000 to 145,000",
          "3 to 4 m³, for 30 to 100 users, such as flats or commercial premises: about KSh 160,000 to 250,000",
        ],
      },
      {
        heading: "How to compare them fairly",
        body: [
          "Compare the full cost, not only the first price. A concrete tank can look similar to a biodigester at the start, but it adds the cost of emptying every few years. A plastic tank looks cheap until the digging and the soak pit are added.",
          "Ask each supplier what the quote covers: excavation, bedding, the soak pit, piping, covers and the finishing. Ask for the same breakdown from each one.",
        ],
      },
      {
        heading: "Choosing for your plot",
        body: [
          "Household size, soil, the water table and the space you have decide the choice more than the price does. Our guide on septic tank or biodigester walks through how to choose. For an exact price, send us the plot location and the number of people in the house.",
        ],
      },
    ],
    related: [
      { label: "Septic tank or biodigester: which suits your home?", href: "/insights/septic-tank-or-biodigester/" },
      { label: "Building on black cotton soil", href: "/insights/building-on-black-cotton-soil/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
    ],
  },
  {
    slug: "common-construction-mistakes-kenya",
    title: "Common construction mistakes in Kenya to avoid",
    description:
      "The construction mistakes that cost Kenyan homeowners most: no drawings, vague quotations, unchecked contractors, ignored soil and late waterproofing.",
    date: "2026-11-25",
    sections: [
      {
        heading: "Mistakes are cheapest to fix before building starts",
        body: [
          "Most expensive building problems were decided early: a missing drawing, a vague quotation, a contractor nobody checked. A wall can be rebuilt, but the money and the months are gone. The mistakes below come up again and again, and each has a simple prevention.",
        ],
      },
      {
        heading: "Starting without proper drawings and approval",
        body: [
          "Building from a sketch leads to arguments about what was agreed, and to changes made halfway up the walls. Drawings settle the size, the structure and the layout before the money is spent. Most buildings also need approval before work starts, so ask what yours needs and get it first.",
        ],
      },
      {
        heading: "Choosing a contractor on the lowest price alone",
        body: [
          "A low price can mean a smaller scope, thinner materials or a builder who plans to ask for more later. Check that the contractor is registered with the National Construction Authority, ask to see finished work, and speak to past clients. Our guide on how to check a building contractor lists the questions to ask.",
        ],
      },
      {
        heading: "Accepting a vague quotation",
        body: [
          "A single lump sum with no breakdown makes comparison impossible. A bill of quantities lists each item with its quantity, with labour and materials shown separately. Ask every contractor to quote against the same list, so that the differences in price are real differences.",
        ],
      },
      {
        heading: "Ignoring the soil",
        body: [
          "The ground under the building decides the foundation. Black cotton soil swells when wet and shrinks when dry, and it cracks houses and walls that were built as if the ground were stable. Find out what the soil is before the foundation is designed, not after the first crack appears.",
        ],
      },
      {
        heading: "Leaving waterproofing until water appears",
        body: [
          "Waterproofing a flat roof, a bathroom or a tank during construction costs far less than breaking up finished work to repair a leak. Ask what waterproofing is in the plan and which method is used for each surface.",
        ],
      },
      {
        heading: "Buying materials without checking them",
        body: [
          "Thin sheets, short measures and unmarked products are sold alongside good ones. Check for the manufacturer's stamp and the standards mark, ask for the thickness in writing, and be careful with a price far below the rest of the market.",
        ],
      },
      {
        heading: "Paying without agreed stages",
        body: [
          "Paying a large amount upfront removes your leverage. Agree stages of work, such as foundation, walls, roof and finishes, and release each payment after you have seen the work for that stage. An independent inspection at key stages catches faults while they are cheap to fix.",
        ],
      },
      {
        heading: "Building everything at once without the money",
        body: [
          "A house that stops half-finished is worse than one built in planned phases. If the budget is tight, plan the stages from the start so that each completed phase protects the next. Our guide on building in phases shows how to split the work.",
        ],
      },
    ],
    related: [
      { label: "How to check a building contractor", href: "/insights/how-to-check-a-building-contractor/" },
      { label: "Does your building quotation include everything?", href: "/insights/does-your-quotation-include-everything/" },
      { label: "Building on black cotton soil", href: "/insights/building-on-black-cotton-soil/" },
      { label: "Types of iron sheets in Kenya", href: "/insights/types-of-iron-sheets-kenya/" },
      { label: "Building your house in phases", href: "/insights/building-your-house-in-phases/" },
    ],
  },
  {
    slug: "build-a-house-in-kenya-from-abroad-safely",
    title: "Building in Kenya from abroad: avoid being cheated",
    description:
      "How Kenyans abroad can build safely back home: check the land, get drawings and a priced BoQ, pay by stage and use independent inspections.",
    date: "2026-11-25",
    sections: [
      {
        heading: "Why building from abroad is risky",
        body: [
          "When you cannot visit the site, you rely on what other people tell you. That is where most problems start: work reported as done that is not, costs that rise without explanation, and payments made before the work is checked. Every step below is there to replace trust with something you can see or read.",
        ],
      },
      {
        heading: "Step 1: Check the land before anything else",
        body: [
          "Before you pay for drawings or materials, make sure the plot is really yours. Ask an advocate you choose yourself to carry out an official search and confirm the owner and any restrictions. Do not rely on a seller's documents or on a relative's word alone.",
        ],
      },
      {
        heading: "Step 2: Get proper drawings and approval",
        body: [
          "Drawings fix the size, layout and structure on paper, so you and the builder agree on the same house. Most buildings also need approval before work starts. Our guide on building approvals explains what to expect.",
        ],
      },
      {
        heading: "Step 3: Insist on a priced bill of quantities",
        body: [
          "A bill of quantities lists every item with its quantity, with labour and materials shown separately. It lets you compare quotations fairly and see exactly what each extra costs. Be careful with a single lump sum and no breakdown.",
        ],
      },
      {
        heading: "Step 4: Choose and check the contractor",
        body: [
          "Do not choose on price alone, and do not hire someone because they are a friend of a friend. Check that the contractor is registered with the National Construction Authority, ask to see finished work, and speak to past clients. Our guide on how to check a building contractor lists the questions.",
        ],
      },
      {
        heading: "Step 5: Pay by stage, not upfront",
        body: [
          "Agree stages of work, such as foundation, slab, walls, roof and finishes. Release each payment after the work for that stage has been checked. Paying a large amount first removes your power to fix problems.",
        ],
      },
      {
        heading: "Step 6: Get someone independent to check and report",
        body: [
          "Photos from the builder show what the builder wants you to see. An independent person who measures the work and compares it with the drawings and the bill of quantities gives you a report you can act on. Ask for a written report with photos before each major payment.",
        ],
        list: [
          "Foundation, before it is covered",
          "Slab and reinforcement, before concrete is poured",
          "Walls and roof structure",
          "Waterproofing, before it is hidden by finishes",
          "Final handover, with a list of items to fix",
        ],
      },
      {
        heading: "Step 7: Keep records",
        body: [
          "Keep the signed quotation, the bill of quantities, the drawings, the approvals, every payment record and every written update in one folder you can reach from abroad. Disagreements are much easier to settle with paper behind you.",
        ],
      },
      {
        heading: "Getting help from someone on the ground",
        body: [
          "If you cannot be there, hire someone whose job is to be your eyes on site: a project manager who supervises, controls the budget and sends regular written updates with photos. We provide this, and we can also inspect work built by another contractor. See our page for Kenyans abroad.",
        ],
      },
    ],
    related: [
      { label: "Building from abroad with Redbay", href: "/build-in-kenya-from-abroad/" },
      { label: "How to check a building contractor", href: "/insights/how-to-check-a-building-contractor/" },
      { label: "Do you need building approval in Kenya?", href: "/insights/building-approvals-kenya/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
    ],
  },
  {
    slug: "how-many-blocks-and-bags-of-cement-for-a-house",
    title: "How many blocks and bags of cement for a house?",
    description:
      "How to work out how many blocks, bags of cement, sand and ballast a house needs, with the simple formulas builders use and what to add for waste.",
    date: "2026-11-26",
    sections: [
      {
        heading: "Start with the wall area",
        body: [
          "Measure the total length of all walls, multiply by their height, then subtract the area of doors and windows. This gives the net wall area in square metres. Do each floor separately and add them up.",
          "A standard 400 × 200 mm block covers 0.08 square metres of wall, so you need about 12.5 blocks for every square metre. Add about 5% for breakage and cutting.",
        ],
      },
      {
        heading: "A worked example for blocks",
        body: [
          "Take 40 metres of wall, 3 metres high, with 6 square metres of doors and windows. The net area is 40 × 3 − 6 = 114 square metres. Multiply by 12.5 to get 1,425 blocks, then add 5% for spares: about 1,497 blocks. Whether the walls are 150 mm or 225 mm thick changes the mortar and the weight, but not the number of blocks on the face.",
          "Machine-cut stone comes in different sizes from different quarries. Ask your supplier for the face size, divide 1 by that area in square metres, and use that figure instead of 12.5.",
        ],
      },
      {
        heading: "Concrete: cement, sand and ballast",
        body: [
          "Concrete is made from cement, sand and ballast (crushed stone) in a ratio called the mix. First work out the volume of concrete in cubic metres: length × width × depth for a slab, footing or beam. The dry materials take up about 1.54 times the wet volume, so multiply the volume by 1.54, then split it by the mix.",
          "For 5 cubic metres of a 1 : 2 : 4 mix, with 5% for waste: 5 × 1.54 × 1.05 = 8.1 cubic metres of dry materials. Cement is one seventh of that, which weighs about 1,660 kg, or 34 bags of 50 kg. Sand is two sevenths, about 2.3 cubic metres, and ballast four sevenths, about 4.6 cubic metres.",
        ],
      },
      {
        heading: "Which mix goes where",
        body: ["These are common uses, but your structural drawings state the mix for each part, and you should follow them:"],
        list: [
          "1 : 1.5 : 3 for columns, beams and suspended slabs, which carry the load",
          "1 : 2 : 4 for ground slabs and general concrete work",
          "1 : 3 : 6 for blinding under footings and for mass fill",
        ],
      },
      {
        heading: "What these figures leave out",
        body: ["The formulas above cover blocks and concrete only. A full list of materials also needs:"],
        list: [
          "Mortar for laying blocks, and plaster and screed for finishes",
          "Reinforcement steel, which comes from the structural drawings",
          "Formwork, binding wire, damp-proof membrane and curing materials",
          "Water and delivery to the site",
        ],
      },
      {
        heading: "Use the numbers, then get a bill of quantities",
        body: [
          "These figures are good for planning and for checking if a quotation is reasonable. They are not a substitute for a bill of quantities, which measures every item from your drawings and shows labour and materials separately. You can try our building materials calculator for the quick version, and send us your drawings for the full one.",
        ],
      },
    ],
    related: [
      { label: "Building materials calculator", href: "/building-materials-calculator/" },
      { label: "How to read a bill of quantities", href: "/insights/how-to-read-a-bill-of-quantities/" },
      { label: "Get a bill of quantities prepared", href: "/bill-of-quantities-service/" },
    ],
  },
  {
    slug: "cabro-paving-cost-kenya",
    title: "Cabro paving cost in Kenya: what changes the price",
    description:
      "What cabro paving costs in Kenya depends on area, base preparation, block type and drainage. How to compare quotations per square metre and avoid failures.",
    date: "2026-11-26",
    sections: [
      {
        heading: "Cabro is priced per square metre",
        body: [
          "Cabro paving is priced by the area covered, in square metres. Measure the length and width of each area, add them up, and multiply by the rate. The rate changes with the points below, so two quotations are only comparable when they cover the same work.",
        ],
      },
      {
        heading: "What a proper job includes",
        body: ["The blocks are the visible part. Most of the work, and most of the reasons pavements fail, are underneath:"],
        list: [
          "Excavating to the right depth and removing soft or loose soil",
          "A compacted base of murram or hardcore, built up in layers",
          "A levelled bed of sand for the blocks to sit on",
          "Edge restraints, such as kerbs or a concrete edge, so the blocks cannot spread",
          "Laying the blocks in a pattern, cutting them at the edges",
          "Compacting the surface and sweeping fine sand into the joints",
          "Falls and drains, so rainwater runs off and does not collect",
        ],
      },
      {
        heading: "What changes the price",
        body: [
          "The main reasons two driveways of the same size cost different amounts:",
        ],
        list: [
          "Block thickness: thicker blocks are used where heavy vehicles drive, and thinner ones for walkways and light use",
          "Block quality and colour, and the pattern you choose",
          "The ground: soft soil or a slope needs a deeper, stronger base",
          "How much material must be filled or removed to reach the right level",
          "Edging, kerbs and drainage channels",
          "Access: how far materials and the compactor machine must travel to reach the site",
        ],
      },
      {
        heading: "Where corners are cut",
        body: [
          "Cheap paving usually skimps on the base. A thin or poorly compacted base, no edge restraint and no falls for water are why blocks sink, tilt, open up at the joints and hold puddles after a few rainy seasons. You can only see it later, so ask what is under the blocks before you compare prices.",
        ],
      },
      {
        heading: "Questions for every quotation",
        body: ["Put these to each installer and write down the answers:"],
        list: [
          "What thickness of block will you use, and for what traffic?",
          "How deep is the base, what material is it, and how is it compacted?",
          "Is there an edge restraint, and does the price include it?",
          "How will rainwater drain from the area?",
          "Is the price per square metre for the finished surface, including the sand and the joints?",
        ],
      },
      {
        heading: "How to get an accurate price",
        body: [
          "Send us the area to be paved, the purpose (walkway, parking or driveway) and a few photos of the site. We measure on site and give you a price per square metre, with what is included written down. We have laid cabro driveways on our home projects, such as the family maisonette in Baraka Estate, Nanyuki.",
        ],
      },
    ],
    related: [
      { label: "Family maisonette with a cabro driveway, Nanyuki", href: "/projects/nanyuki-baraka-home/" },
      { label: "Does your quotation include everything?", href: "/insights/does-your-quotation-include-everything/" },
      { label: "Get a bill of quantities prepared", href: "/bill-of-quantities-service/" },
    ],
  },
  {
    slug: "adding-a-floor-to-an-existing-house-kenya",
    title: "Adding a floor to an existing house in Kenya",
    description:
      "Can your house take another floor? What an engineer checks first, the usual problems, the approvals you need and how to protect the house during the work.",
    date: "2026-11-26",
    sections: [
      {
        heading: "The first question: was it built for it?",
        body: [
          "A new floor adds a lot of weight. The foundation, columns and walls must carry it, and many houses were designed for one storey only. The answer depends on how your house was built, so find out before you plan a layout or ask for prices.",
          "A house built as a frame of concrete columns and beams is usually easier to extend than one where the walls carry the load. Either way, it needs checking by a structural engineer.",
        ],
      },
      {
        heading: "Signs of trouble",
        body: ["These do not always rule out an extra floor, but they must be looked at first:"],
        list: [
          "Cracks in walls, columns or the floor, especially wide or growing ones",
          "Sagging beams or slabs, or doors that no longer close properly",
          "Dampness at the base of the walls, or crumbling concrete",
          "No drawings, so nobody knows how deep the foundation is or what steel is in the columns",
          "Soil that moves, such as black cotton, with the house already showing movement",
        ],
      },
      {
        heading: "What an engineer checks",
        body: [
          "The engineer looks at the building, the soil and the available drawings. Where nothing is recorded, they open up samples: a trial pit beside the foundation, and small openings in columns and beams to see the concrete and the steel. They then calculate the loads and tell you which of these applies:",
        ],
        list: [
          "The structure can carry the extra floor as it is",
          "It can, after strengthening the foundation, columns or beams",
          "It can carry a lighter extra floor only, built with lighter materials",
          "It cannot, and the better option is a new building or an extension to the side",
        ],
      },
      {
        heading: "Drawings and approval",
        body: [
          "An extra storey changes the building, so it needs proper architectural and structural drawings, and approval from your county before you build. Ask the county planning office what they need for your plot. Our guide on building approvals explains the usual steps.",
        ],
      },
      {
        heading: "Protecting the house during the work",
        body: ["The rooms below stay exposed while the new floor goes up. Plan for it:"],
        list: [
          "Decide where the staircase will go early, as it affects the layout of both floors",
          "Make sure the existing roof slab is protected or waterproofed so rain cannot enter while the slab is open",
          "Extend plumbing, drainage and electrical routes with care, so they can be reached later",
          "Decide whether the family will live in the house during the work, because dust, noise and safety all affect that choice",
          "Keep the new walls and roof waterproofed as soon as they are done",
        ],
      },
      {
        heading: "What drives the cost",
        body: [
          "The main costs are any strengthening, the new floor and walls, the roof, the staircase and the finishes. Strengthening can change the budget a lot, which is why the engineer's assessment should come before any quotation. Ask each builder to price against the engineer's drawings, with labour and materials shown separately.",
        ],
      },
    ],
    related: [
      { label: "Cracks in walls: when to worry", href: "/insights/cracks-in-walls-when-to-worry/" },
      { label: "Building your house in phases", href: "/insights/building-your-house-in-phases/" },
      { label: "Do you need building approval in Kenya?", href: "/insights/building-approvals-kenya/" },
      { label: "Architectural and structural drawings", href: "/services/drawings/" },
      { label: "Site audits and inspections", href: "/services/site-audits/" },
    ],
  },
];
