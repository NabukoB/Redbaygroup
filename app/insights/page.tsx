import { GuideImage } from "@/components/guide-image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { FreeTools } from "@/components/free-tools";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/insights";
import { topics } from "@/lib/knowledge";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Construction Knowledge Hub: Building Guides for Kenya",
  description:
    "The Redbay Construction Knowledge Hub: plain-English guides on building costs, roofing, waterproofing, foundations, materials, designs and finishes in Kenya.",
  path: "/insights/",
  image: "hub",
});

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Knowledge Hub", path: "/insights/" }]}
          label="Knowledge Hub"
          title="Build with your eyes open."
          intro="The Redbay Construction Knowledge Hub: plain-English guides on costs, roofing, foundations, materials, designs and finishes, so you can make better building decisions."
        />
        <section className="pb-16">
          <div className={wrap}>
            <h2 className="heading text-[28px] md:text-[32px]">Browse by topic</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-4">
              {topics.map((t, i) => (
                <Reveal as="li" key={t.slug} delay={(i % 4) * 0.05} className="h-full">
                  <Link href={`/insights/topics/${t.slug}/`} className="group flex h-full flex-col justify-between rounded-3xl bg-charcoal-deep p-6 text-white transition-colors hover:bg-charcoal">
                    <span className="text-lg font-semibold tracking-tight">{t.name}</span>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-sm text-white/70">
                      {t.guides.length} {t.guides.length === 1 ? "guide" : "guides"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <FreeTools heading="Plan with a calculator" />
        {topics.map((t) => {
          const guides = t.guides.map((s) => insights.find((i) => i.slug === s)!).filter(Boolean);
          return (
            <section key={t.slug} className="pb-16">
              <div className={wrap}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2 className="heading text-[28px] md:text-[32px]">{t.title}</h2>
                  <Link href={`/insights/topics/${t.slug}/`} className="inline-flex items-center gap-1.5 font-medium text-charcoal-deep underline-offset-4 hover:underline">
                    All {t.name.toLowerCase()} guides <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="mt-6 grid gap-4 md:grid-cols-3">
                  {guides.slice(0, 3).map((p) => (
                    <li key={p.slug} className="h-full">
                      <Link href={`/insights/${p.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-mist transition-colors hover:bg-[#ebebe9]">
                        <GuideImage slug={p.slug} size="card" />
                        <div className="flex flex-1 flex-col justify-between p-7">
                          <div>
                            <h3 className="heading text-xl">{p.title}</h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-slate">{p.description}</p>
                          </div>
                          <span className="mt-8 inline-flex items-center gap-1.5 font-medium text-charcoal-deep">
                            Read the guide
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
        <CtaPanel title="Have a building question?" text="Send it to us on WhatsApp. If it helps other people too, it may become our next guide." message="Hello Redbay Group, I have a building question:" button="Ask on WhatsApp" />
      </main>
      <Footer />
    </>
  );
}
