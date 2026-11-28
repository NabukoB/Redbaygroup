import { ServiceLanding } from "@/components/service-landing";
import { pageMeta } from "@/lib/seo";

const path = "/site-supervision/";

export const metadata = pageMeta({
  title: "Site Supervision for Your Build in Kenya",
  description:
    "Building with your own fundi? Redbay checks the work, materials and payments at each stage and sends you photo reports. Ideal if you live abroad.",
  path,
  image: "site-supervision",
});

export default function SiteSupervisionPage() {
  return (
    <ServiceLanding
      path={path}
      crumb="Site supervision"
      label="Site supervision"
      title="Someone on your side, on your site."
      intro="Building with your own fundi or contractor? We check the work at each stage, check the materials against the quantities, and tell you what you should pay before you pay it. We send you photos and a short written report."
      serviceName="Building site supervision"
      serviceDescription="Independent supervision of a house build in Kenya: stage inspections, materials checks, payment checks and photo reports for owners who build with their own fundi or contractor."
      getHeading="Supervision at the stages that matter"
      gets={[
        "Site visits at the key stages: setting out, foundation before concrete, columns and beams, slabs, roof, plumbing and electrical, and finishes",
        "Checks against your drawings: sizes, steel, concrete, blocks and levels, so mistakes are found before they are built over",
        "Materials checked against the BoQ, so you can see what was bought, what was used and what is missing",
        "A view on each payment: is the work done and good enough for what the fundi or contractor is asking you to pay?",
        "Photos and a short report after each visit, by WhatsApp or email, in plain language",
        "A written list of defects to fix, with a re-check once they are done",
      ]}
      sideHeading="How it works"
      sideItems={[
        "Tell us the site location, the stage you are at and who is building",
        "Send the drawings and BoQ if you have them",
        "We agree the visits and the fee before we start, per stage or per month",
        "You receive photos and a report after every visit",
      ]}
      sideNote="We supervise builds done by other builders too. We say what we find, whoever is doing the work. We are an NCA-registered contractor, and structural questions go to your registered engineer."
      message="Hello Redbay Group, I would like site supervision for my build. My site is in: "
      button="Ask about supervision on WhatsApp"
      faqs={[
        {
          q: "Why do I need supervision if I already have a fundi or contractor?",
          a: "Most building problems are covered up by the next stage: thin concrete, missing steel, weak blocks, short materials. A second pair of eyes at the right time catches them while they are cheap to fix.",
        },
        {
          q: "I live abroad. Can you supervise for me?",
          a: "Yes. This is one of the most common reasons people ask. You get photos and a written report after each visit, and we tell you what to pay and what to hold back. See also our page for Kenyans building from abroad.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on the size of the build, the location and how many visits you want. Tell us the site and the stage and we will quote the fee before we start.",
        },
        {
          q: "Are you a structural engineer?",
          a: "No. We are a contractor, so we check workmanship, materials, sizes against the drawings and progress against payments. For structural design or doubts about the engineer's drawings, your registered structural engineer decides.",
        },
        {
          q: "Can you also build for me later?",
          a: "Yes, if you want. Supervision does not commit you to us. We will tell you honestly what we see even if you later choose another builder.",
        },
      ]}
      links={[
        { label: "How to check a building contractor", href: "/insights/how-to-check-a-building-contractor/" },
        { label: "Build in Kenya from abroad", href: "/build-in-kenya-from-abroad/" },
        { label: "Contractor checklist", href: "/contractor-checklist/" },
      ]}
      ctaTitle="Get someone on your side."
      ctaText="Tell us where the site is and what stage you are at. We will tell you what we would check and what it costs."
    />
  );
}
