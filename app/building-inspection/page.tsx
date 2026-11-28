import { ServiceLanding } from "@/components/service-landing";
import { pageMeta } from "@/lib/seo";

const path = "/building-inspection/";

export const metadata = pageMeta({
  title: "Building Inspection and Defects Report, Kenya",
  description:
    "Cracks, leaks or buying a house? Redbay inspects the building and gives a written report of defects, what to fix first and rough repair costs.",
  path,
  image: "building-inspection",
});

export default function BuildingInspectionPage() {
  return (
    <ServiceLanding
      path={path}
      crumb="Building inspection"
      label="Building inspection"
      title="Know what is wrong before you pay or repair."
      intro="Thinking of buying a house, taking over from a contractor, or worried about cracks and leaks? We inspect the building and give you a written report: what is wrong, how serious it is, what to fix first and what it may cost."
      serviceName="Building inspection and defects report"
      serviceDescription="Visual inspection of a house or building in Kenya with a written defects report, priorities and rough repair costs, for buyers, owners and people taking over from a contractor."
      getHeading="A clear written report"
      gets={[
        "A site visit and a walk through the whole building, inside and outside, roof included where it is safe to reach",
        "Photos of every defect we find, with its location marked",
        "Each defect rated: urgent, fix soon or cosmetic, so you know where to start",
        "Common problems checked: cracks, damp and leaks, roof and gutters, plaster and finishes, floors, doors and windows, plumbing and electrical points",
        "Rough repair costs and what the repair involves, so you can negotiate a price or hold back a payment",
        "A clear note when something looks structural and needs a registered structural engineer",
      ]}
      sideHeading="When people call us"
      sideItems={[
        "Before buying a house or a building",
        "When a contractor says the job is finished and you want a second opinion before the final payment",
        "Cracks in walls, floors or ceilings",
        "Leaks, damp patches or peeling paint",
        "A build that does not look right halfway through",
      ]}
      sideNote="Our report is a contractor's inspection. It is not a structural certificate. If we think the structure may be at risk, we say so clearly and tell you to bring in a registered structural engineer."
      message="Hello Redbay Group, I would like a building inspection. The building is in: "
      button="Ask about an inspection on WhatsApp"
      faqs={[
        {
          q: "Can you tell me if a building is safe?",
          a: "We can tell you what we can see: cracks, damp, poor workmanship and signs of trouble. We cannot certify structural safety. A registered structural engineer does that, and we tell you when you need one.",
        },
        {
          q: "How long does it take and what does it cost?",
          a: "For an ordinary house the visit is usually a few hours and the report follows after. Tell us the location and size of the building and we will quote the fee and the timing before we come.",
        },
        {
          q: "Will you also fix what you find?",
          a: "If you want us to, we will quote the repairs. You do not have to hire us. The report is yours to use with any builder.",
        },
        {
          q: "Can you inspect a building that is not finished?",
          a: "Yes. This is a good time to find a problem. For a build that is still going on, our site supervision service checks it at each stage.",
        },
      ]}
      links={[
        { label: "Damp and waterproofing guide", href: "/insights/damp-and-waterproofing/" },
        { label: "How to check a building contractor", href: "/insights/how-to-check-a-building-contractor/" },
        { label: "Site supervision", href: "/site-supervision/" },
      ]}
      ctaTitle="Get the building checked."
      ctaText="Tell us where it is and what worries you. We will tell you how we would inspect it and what it costs."
    />
  );
}
