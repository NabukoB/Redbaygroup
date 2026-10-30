// Edit these before launch. Contact details are placeholders.
export const site = {
  name: "Redbay Group",
  legal: "Redbay Construction Ltd",
  tagline: "Building places. Shaping futures.",
  location: "Ruaraka, Nairobi",
  founded: 2019,
  incorporated: 2022,
  nca: "NCA Category 7",
  // TODO: replace with the real details
  email: "info@redbaygroup.co.ke",
  phone: "+254 700 000 000",
  whatsapp: "254700000000",
};

export type Division = "Homes" | "Schools" | "Interiors" | "Energy";

export const companies: { name: string; division: Division; line: string; text: string }[] = [
  {
    name: "Redbay Construction",
    division: "Homes",
    line: "Building resilient structures.",
    text: "Residential construction and development, delivering quality homes built for durability, functionality and modern living.",
  },
  {
    name: "Redbay Schools",
    division: "Schools",
    line: "Building spaces for learning.",
    text: "Developing functional, inspiring and adaptable educational infrastructure for schools and learning institutions.",
  },
  {
    name: "Redbay Interiors",
    division: "Interiors",
    line: "Finishing with personality and taste.",
    text: "Transforming spaces through thoughtful design, quality finishes and functional interior solutions.",
  },
  {
    name: "Redbay Energy",
    division: "Energy",
    line: "Powering a sustainable future.",
    text: "Delivering solar and wind energy solutions for homes, institutions and developments.",
  },
];

// Real projects only. Add interiors and energy jobs here as they are documented.
export const projects: { name: string; place: string; division: Division; note: string }[] = [
  { name: "Merishaw School", place: "Isinya, Kajiado", division: "Schools", note: "School buildings" },
  { name: "Five-bedroom villa", place: "Diani, Kwale", division: "Homes", note: "Private residence" },
  { name: "Maisonettes", place: "Nanyuki", division: "Homes", note: "Residential development" },
  { name: "Maisonettes", place: "Lukenya", division: "Homes", note: "Residential development" },
  { name: "Bungalows", place: "Nyahururu", division: "Homes", note: "Family homes" },
  { name: "Bungalows", place: "Kakamega", division: "Homes", note: "Family homes" },
];

export const approach = [
  { name: "Quality and durability", text: "Materials and workmanship chosen to last, checked at every stage." },
  { name: "Thoughtful design", text: "Spaces planned around how families, pupils and teachers will use them." },
  { name: "Responsible development", text: "Licensed, insured and built to the approved drawings." },
  { name: "Professional project delivery", text: "A clear quote, an agreed timeline and supervision on every site." },
  { name: "Long-term value", text: "Buildings that keep serving the people in them for generations." },
];
