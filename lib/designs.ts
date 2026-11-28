// Home designs (3D renders, not completed buildings): client-commissioned, or plans Redbay has bought.
// Every page and card labels them as concept designs. Clients are not named.
// Descriptions only state what is visible in the renders or the plans.
import type { ProjectPhoto } from "@/lib/site";
import type { NonEmpty } from "@/lib/utils";

export type Design = {
  slug: string;
  name: string;
  style: string;
  summary: string;
  features: string[];
  photos: NonEmpty<ProjectPhoto>;
  source?: "client" | "inspiration"; // defaults to client; inspiration = an outside design we can build a version of
  size?: string; // overall size from the plans
  floors?: { heading: string; rooms: string[] }[]; // the layout, described in words (plans are not shown)
  interiorsFrom?: number; // index of the first interior render; these also show on the Interiors page as inspiration
};

// Photos are numbered 1, 2, 3... in the design's folder. Every design needs at least one.
const shots = ([first, ...rest]: NonEmpty<string>): NonEmpty<ProjectPhoto> => [
  { file: "1", alt: first },
  ...rest.map((alt, i) => ({ file: String(i + 2), alt })),
];

export const designs: Design[] = [
  {
    slug: "flat-roof-villa-with-pool-lounge",
    name: "Flat-Roof Villa with Pool Lounge",
    style: "Single-storey luxury home",
    summary:
      "A single-storey flat-roof villa with stone and timber cladding, floor-to-ceiling glass, a pool lounge, an attached garage and a covered terrace.",
    source: "inspiration",
    features: [
      "Flat roof with a slim dark edge over white textured render",
      "Stone-effect brick cladding and timber panels, with a round feature opening in the stone wall",
      "Black-framed, floor-to-ceiling glass along the living area",
      "Raised timber terrace under a covered roof with downlights",
      "Attached garage with a roller door, plus open parking for two more cars",
      "Pool lounge with a plunge pool at the back of the house",
      "Wall lights, gravel paths and a metal slat gate at the front",
    ],
    floors: [
      {
        heading: "Arrival and living",
        rooms: [
          "Covered front entrance leading to an entrance hall with a built-in cloakroom",
          "Central hallway linking every part of the house",
          "Large open-plan living, dining and kitchen area with floor-to-ceiling glass, a long dining table and a kitchen counter with a hob, sink and dishwasher",
          "Pantry beside the kitchen",
          "Laundry room, and a storage room off the hallway",
        ],
      },
      {
        heading: "Bedrooms and bathrooms",
        rooms: [
          "Master bedroom with a double bed, a private bathroom with a bath, toilet and basin, and a walk-in dressing room",
          "Second bedroom with a double bed",
          "Study with a desk and built-in cabinets along one wall",
          "Guest toilet and a separate shower room off the hallway",
        ],
      },
      {
        heading: "Pool and wellness wing",
        rooms: [
          "Link passage from the hallway to the pool lounge",
          "Pool lounge with a square plunge pool, a sun lounger and a sofa and armchair seating area",
          "Shower, toilet with a basin, and a wellness room beside the pool lounge",
        ],
      },
      {
        heading: "Garage and outdoors",
        rooms: [
          "Garage for one car, with two store rooms opening off it",
          "Open parking for two more cars on the drive",
          "Covered terrace with a dining table and an outdoor kitchen with a built-in grill and sink",
          "Garden patio with sun loungers and a seating area",
          "Everything on one level, with no stairs",
        ],
      },
    ],
    photos: shots([
      "Garden side of the flat-roof villa with a stone wall and round opening, a timber terrace with sun loungers, floor-to-ceiling glass and a gravel path through the garden",
      "Wide view of the single-storey villa with stone cladding, timber panels and black-framed floor-to-ceiling glass under a flat white roof",
      "Street front of the villa with a metal slat gate, a garage door under a flat canopy, entrance steps and a paved drive",
      "Front of the villa with a covered carport on the left, a roller garage door in the stone wall and glazed doors on the right, with a curved gravel path",
      "Covered timber terrace with sun loungers and a dining set under a flat roof with downlights, beside floor-to-ceiling glass",
      "Entrance side of the villa with a garage door under the flat roof, stone cladding with lit wall lights and a paved forecourt",
    ]),
  },
  {
    slug: "three-bedroom-flat-roof-bungalow",
    name: "Three-Bedroom Flat-Roof Bungalow",
    style: "Single-storey family home",
    summary:
      "A compact three-bedroom bungalow with a flat roof in bold blue and white, two bathrooms and a 45 m² terrace for outdoor living.",
    source: "inspiration",
    interiorsFrom: 4,
    size: "Roughly 10.4 × 10.5 m outside, about 110 m² under one roof, plus a 45 m² terrace",
    features: [
      "Flat roof with slim dark edge and hidden gutters",
      "Two-tone blue and white render on a dark plinth",
      "Covered front porch with a rain chain",
      "Sliding glass doors onto a large raised terrace",
      "Compact square plan that keeps building costs down",
      "Warm interiors: gypsum ceilings with hidden lighting, timber doors and built-in wardrobes",
    ],
    floors: [
      {
        heading: "Living spaces",
        rooms: [
          "Front porch, about 3.9 m², under a flat canopy",
          "Entrance hall leading to a central hallway",
          "Living room with sliding doors to the terrace",
          "Kitchen",
          "Large terrace, about 45 m², along the side of the house",
        ],
      },
      {
        heading: "Bedrooms and bathrooms",
        rooms: [
          "Three bedrooms off the central hallway",
          "Two bathrooms",
          "Everything on one level, with no stairs",
        ],
      },
    ],
    photos: shots([
      "Blue and white flat-roof bungalow with a covered front porch, white front door and climbing plants",
      "Side view of the bungalow with sliding doors opening onto a large raised terrace with outdoor seating",
      "Corner view showing the white and blue walls, porch canopy and downpipe",
      "Rear view of the bungalow with a large window, sliding doors and a terrace with steps",
      "Entrance hallway with a tiled floor, timber doors, a floating console and a gypsum ceiling with hidden lighting, looking through to the living room",
      "Living room with a corner sofa, wall-mounted TV unit, timber slat feature wall and sliding doors to the terrace",
      "Open kitchen and dining area with grey lower cabinets, cream upper cabinets, an oven, cooker hood and a six-seat dining table",
      "Master bedroom with an upholstered bed, built-in wardrobes either side of a dressing table and a ring pendant light",
      "Second bedroom with a double bed, built-in wardrobe, study desk and curtained window",
      "Third bedroom with a double bed, built-in wardrobe, wall desk and garden view",
    ]),
  },
  {
    slug: "four-bedroom-maisonette",
    name: "Modern Four-Bedroom Maisonette",
    style: "Two-storey family home",
    summary:
      "A modern flat-roof maisonette with four bedrooms upstairs, a guest room and double garage below, and a timber pergola terrace for outdoor living.",
    source: "inspiration",
    size: "About 210 m² of rooms over two floors, including the double garage, on a footprint of roughly 17 × 10 m",
    features: [
      "Flat roof with white render, stone cladding and timber panels",
      "Master suite with walk-in wardrobe and private balcony",
      "Double garage with a timber-finish door",
      "Timber pergola over a large covered terrace",
      "Glass balconies and full-height sliding doors",
    ],
    floors: [
      {
        heading: "Ground floor",
        rooms: [
          "Open living room with the staircase, about 28 m², opening onto the covered terrace",
          "Kitchen and dining area, about 16 m²",
          "Pantry or store, about 6 m²",
          "Entrance hall with built-in wardrobe, about 9.5 m²",
          "Guest bedroom or study, about 12.6 m²",
          "Shower room with toilet, about 4.5 m²",
          "Double garage, about 31 m², with a door into the house",
          "Covered terrace under the pergola, about 25 m²",
        ],
      },
      {
        heading: "First floor",
        rooms: [
          "Master bedroom, about 21.6 m², with a walk-in wardrobe (7 m²) and its own balcony",
          "Three more bedrooms of about 13, 15 and 15.6 m², each with built-in wardrobes",
          "Family bathroom with bath, about 6.4 m²",
          "Second bathroom with corner bath, about 6.2 m²",
          "Laundry or linen room, about 4.8 m²",
          "Landing linking all rooms, about 8.9 m²",
        ],
      },
    ],
    photos: shots([
      "Modern two-storey maisonette with a double garage, an upper balcony framed in white render and a timber pergola terrace",
      "Rear view of the maisonette with stone cladding, glass balconies and a timber-decked terrace under a pergola",
      "The maisonette at dusk with warm interior lighting, glass balconies and the pergola terrace",
    ]),
  },
  {
    slug: "hillside-villa",
    name: "Hillside Villa",
    style: "Three-storey family home",
    summary:
      "A three-storey villa designed for a sloping plot, with a garage tucked into the hillside, balconies on every floor and a warm mix of stone and render.",
    features: [
      "Basement garage built into the slope",
      "Balconies with black steel railings on each floor",
      "Stone-clad columns and chimney",
      "Timber-trimmed gables and a dark tiled roof",
    ],
    photos: shots([
      "Front view of a three-storey villa with stone columns, balconies on each floor and a basement garage",
      "Side view of the villa on its sloping plot with palms and a hedge-lined driveway",
      "Side elevation showing the stone base, cream upper walls and tiled roof",
    ]),
  },
  {
    slug: "mediterranean-villa",
    name: "Mediterranean Villa",
    style: "Two-storey villa",
    summary:
      "A two-storey villa with soft arches, a sweeping outdoor staircase and a wraparound balcony, set in a landscaped garden.",
    features: [
      "Curved external staircase with glass balustrade and step lights",
      "Wraparound upper balcony",
      "Arched windows and full-height glazed entrance",
      "Stone-clad column and textured render",
    ],
    photos: shots([
      "Two-storey villa with a curved outdoor staircase, arched glazing and a wraparound balcony",
    ]),
  },
  {
    slug: "stone-solar-cottage",
    name: "Stone Cottage with Solar Roof",
    style: "Single-storey cottage",
    summary:
      "A single-storey stone cottage with a solar-panelled roof, a pergola-covered terrace and a sunken outdoor lounge for evenings outside.",
    features: [
      "Natural stone walls",
      "Roof-mounted solar panels",
      "Pergola-covered terrace and sunken outdoor lounge",
      "Raised stone planters and wide sliding windows",
    ],
    photos: shots([
      "Aerial view of a stone cottage with solar panels, a covered terrace and a sunken lounge",
      "Front view of the stone cottage with solar panels and planters along the terrace",
      "Terrace view with the pergola, stone columns and sunken outdoor seating",
      "Side view of the cottage showing large windows, the solar roof and stone walls",
    ]),
  },
  {
    slug: "round-house",
    name: "The Round House",
    style: "Round bungalow",
    summary:
      "A round bungalow under a tall conical tiled roof, with dressed-stone walls, a columned veranda and curved entrance steps.",
    features: [
      "Conical tiled roof with deep eaves",
      "Dressed-stone walls with a rendered upper band",
      "Columned veranda and curved steps",
      "Paved path wrapping the house",
    ],
    photos: shots([
      "Round bungalow with a conical tiled roof, stone walls and curved entrance steps",
      "Another angle of the round house showing the columned veranda and garden",
    ]),
  },
  {
    slug: "modern-flat-roof-bungalow",
    name: "Modern Flat-Roof Bungalow",
    style: "Single-storey modern home",
    summary:
      "A clean, modern bungalow with a flat roof, white render and vertical timber cladding, opening onto a pool terrace at the back.",
    features: [
      "Flat roof with deep overhangs",
      "Vertical timber-look cladding against white render",
      "Covered entrance and garage",
      "Large glazing onto a pool terrace",
    ],
    photos: shots([
      "Modern flat-roof bungalow at dusk with timber cladding, a covered entrance and garage",
      "Rear view of the bungalow with large glazing opening onto a pool terrace",
      "Corner view showing the timber cladding and white rendered volumes",
      "Side view of the bungalow with timber cladding and a covered terrace",
    ]),
  },
  {
    slug: "colour-block-bungalow",
    name: "Colour-Block Bungalow",
    style: "Single-storey contemporary home",
    summary:
      "A bold contemporary bungalow in deep blue with orange trims and a pink plinth, built around a covered carport and tall steel-framed windows.",
    features: [
      "Bold colour scheme: blue walls, orange trims, pink plinth",
      "Vertical timber cladding",
      "Covered carport",
      "Floor-to-ceiling steel-framed windows",
    ],
    photos: shots([
      "Colour-block bungalow in blue with orange window frames, entrance and carport",
      "Long side of the bungalow with floor-to-ceiling steel-framed windows",
      "Front view with the covered carport and planted entrance",
      "Wide view of the bungalow showing the timber-clad wings and courtyard",
    ]),
  },
  {
    slug: "ensuite-maisonette-roof-terrace",
    name: "Ensuite Maisonette with Roof Terrace",
    style: "Two-storey family home",
    summary:
      "A two-storey maisonette with four ensuite bedrooms, open living, dining and kitchen downstairs, a study upstairs and a rooftop terrace.",
    source: "inspiration",
    features: [
      "Four bedrooms, every one ensuite",
      "Open-plan living room, dining and kitchen on the ground floor",
      "Ground-floor bedroom, suited to guests or elderly family",
      "Study on the first floor",
      "Rooftop terrace, with a hybrid roof of flat roof sections and a terrace level",
      "White render with a yellow band, slatted-pattern parapet panels and a dark brick-effect feature wall",
      "Tall vertical window lighting the stairs, stone-clad plinth and a covered veranda with columns",
      "First-floor balcony with glass-and-black-framed doors, and parking beside the house",
    ],
    floors: [
      {
        heading: "Ground floor",
        rooms: [
          "Living room open to the dining area",
          "Dining area open to the kitchen",
          "Laundry room",
          "One ensuite bedroom",
          "Covered veranda at the front",
        ],
      },
      {
        heading: "First floor",
        rooms: [
          "Master bedroom, ensuite",
          "Bedroom 1, ensuite",
          "Bedroom 2, ensuite",
          "Study",
          "Balcony",
        ],
      },
      {
        heading: "Roof",
        rooms: ["Rooftop terrace", "Hybrid roof: flat roof sections with the terrace level"],
      },
    ],
    photos: shots([
      "Corner view of a two-storey maisonette with a yellow band, slatted parapet panels, a brick-effect feature wall, tall stair window and covered veranda",
      "Front view of the maisonette with a first-floor balcony, large black-framed glazing, covered veranda and a car parked beside the house",
      "The maisonette at dusk from the corner, with warm lights on in the windows, balcony and covered veranda",
      "Front view of the maisonette at dusk with the veranda and first-floor balcony lit",
      "High view of the maisonette showing the flat roof levels and the rooftop terrace with outdoor seating",
    ]),
  },
];
