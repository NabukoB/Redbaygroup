import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Building Advice for Homeowners and Schools in Kenya",
  description:
    "Plain-English building guides from Redbay Group: comparing quotations, flat roofs, epoxy floors and more, for homeowners and schools in Kenya.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          crumbs={[{ name: "Insights", path: "/insights/" }]}
          label="Insights"
          title="Build with your eyes open."
          intro="Short, plain-English guides to help homeowners and schools make better building decisions."
        />
        <section className="pb-24">
          <div className={wrap}>
            <ul className="grid gap-4 md:grid-cols-3">
              {insights.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <li className="h-full">
                    <Link
                      href={`/insights/${p.slug}/`}
                      className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9]"
                    >
                      <div>
                        <span className="text-sm text-slate">Guide</span>
                        <h2 className="heading mt-6 text-2xl">{p.title}</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate">{p.description}</p>
                      </div>
                      <span className="mt-10 inline-flex items-center gap-1.5 font-medium text-charcoal-deep">
                        Read the guide
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <CtaPanel title="Have a building question?" text="Send it to us on WhatsApp. If it helps other people too, it may become our next guide." message="Hello Redbay Group, I have a building question:" />
      </main>
      <Footer />
    </>
  );
}
