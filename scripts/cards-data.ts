// Lists every page that gets its own share image (the picture shown when a link is shared on WhatsApp or Facebook).
import { insights } from "../lib/insights";
import { topicOf, topics } from "../lib/knowledge";

const cards = [
  { file: "hub", kicker: "Redbay Group", title: "Construction Knowledge Hub" },
  { file: "roofing-sheets-calculator", kicker: "Calculator", title: "How many iron sheets does your roof need?" },
  { file: "house-cost-calculator", kicker: "Calculator", title: "What does it cost to build your house?" },
  { file: "perimeter-wall-calculator", kicker: "Calculator", title: "What will your perimeter wall cost?" },
  { file: "capability-statement", kicker: "For institutions", title: "Redbay capability statement" },
  { file: "building-materials-calculator", kicker: "Calculator", title: "How many blocks and bags of cement do you need?" },
  { file: "hybrid-solar-wind-systems", kicker: "Redbay Energy", title: "Does wind make sense at your site?" },
  { file: "build-in-kenya-from-abroad", kicker: "Kenyans abroad", title: "Build your home in Kenya, from wherever you live" },
  { file: "site-supervision", kicker: "Redbay services", title: "Site supervision for your build" },
  { file: "building-inspection", kicker: "Redbay services", title: "Building inspection and defects report" },
  { file: "book-a-site-visit", kicker: "Redbay Group", title: "Book a site visit" },
  { file: "contractor-checklist", kicker: "Free checklist", title: "10 questions to ask before you hire a contractor" },
  ...topics.map((t) => ({ file: `t-${t.slug}`, kicker: "Knowledge Hub", title: t.title })),
  ...insights.map((i) => ({ file: `g-${i.slug}`, kicker: topicOf(i.slug)?.name ?? "Guide", title: i.title })),
];
console.log(JSON.stringify(cards));
