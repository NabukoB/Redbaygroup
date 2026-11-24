import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = pageMeta({
  title: "Specialised Building Services in Kenya",
  description:
    "Specialised services from Redbay Group, an NCA-registered contractor: waterproofing, roofing, paving, floors, solar, BoQs and walls.",
  path: "/services/",
});

const more = [
  { href: "/bill-of-quantities-service/", name: "Bill of quantities", text: "An itemised BoQ measured from your drawings, so you know the real cost before you build." },
  { href: "/perimeter-wall-calculator/", name: "Perimeter walls", text: "Boundary walls from KSh 14,000 per running metre. Get an instant estimate with our calculator." },
];

export default function ServicesPage() {
  const cards = [
    ...services.map((s) => ({ href: `/services/${s.slug}/`, name: s.name, text: s.intro })),
    ...more,
  ];
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Services", path: "/services/" }]}
          label="Services"
          title="Specialised services."
          intro="Alongside complete builds, we take on specialised work for new and existing buildings."
        />
        <section className="pb-24">
          <div className={wrap}>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((c) => (
                <li key={c.href} className="h-full">
                  <Link href={c.href} className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9]">
                    <span>
                      <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                      <span className="mt-6 block text-2xl font-semibold tracking-tight">{c.name}</span>
                      <span className="mt-3 block text-[15px] leading-relaxed text-slate">{c.text}</span>
                    </span>
                    <span className="mt-8 inline-flex items-center gap-1.5 font-medium text-charcoal-deep">
                      Learn more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaPanel message="Hello Redbay Group, I would like a quote for: " button="Get a quote on WhatsApp" />
      </main>
      <Footer />
    </>
  );
}
