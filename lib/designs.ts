// Client-commissioned home designs (3D renders, not completed buildings).
// Every page and card labels them as concept designs. Clients are not named.
// Descriptions only state what is visible in the renders.
import type { ProjectPhoto } from "@/lib/site";

export type Design = {
  slug: string;
  name: string;
  style: string;
  summary: string;
  features: string[];
  photos: ProjectPhoto[];
};

const shots = (alts: string[]): ProjectPhoto[] => alts.map((alt, i) => ({ file: String(i + 1), alt }));

export const designs: Design[] = [
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
];
