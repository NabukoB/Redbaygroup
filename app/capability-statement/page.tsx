import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { divisions, documents, facts, process, selectedWork, servedAreas } from "@/lib/capability";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/capability-statement/";

export const metadata = pageMeta({
  title: "Capability Statement for Institutions",
  description:
    "Redbay Construction Ltd: NCA Category 7 contractor building homes, schools and interiors in Kenya. Registration, insurance, process and work for procurement.",
  path,
  image: "capability-statement",
});

export default function CapabilityPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Capability statement",
    url: `${site.url}${path}`,
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={orgLd} />
        <PageHero
          crumbs={[{ name: "Capability statement", path }]}
          label="For institutions"
          title="Capability statement"
          intro="Who we are, how we are registered and insured, how we work and what we have built. For schools, NGOs, developers and anyone running a procurement."
        >
          <a
            href="/downloads/redbay-capability-statement.pdf"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-red px-8 text-base font-semibold text-white transition-colors hover:bg-red/90"
          >
            <Download className="h-5 w-5" aria-hidden="true" /> Download the one-page PDF
          </a>
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="At a glance" title="The company" />
            <dl className="mx-auto mt-14 max-w-3xl divide-y divide-line">
              {facts.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-[15px] font-medium text-slate">{k}</dt>
                  <dd className="text-lg text-charcoal">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="What we deliver" title="Four divisions" center={false} />
              <ul className="mt-10 space-y-5">
                {divisions.map((d) => (
                  <li key={d.name}>
                    <span className="text-lg font-semibold tracking-tight">{d.name}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-slate">{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead label="How we work" title="From drawings to handover" center={false} />
              <ol className="mt-10 space-y-4">
                {process.map((s, i) => (
                  <li key={s} className="flex gap-4 text-lg leading-relaxed text-charcoal">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="Selected work" title="What we have built" center={false} />
              <ul className="mt-10 space-y-3">
                {selectedWork.map((w) => (
                  <li key={w.slug}>
                    <Link href={`/projects/${w.slug}/`} className="inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">
                      {w.name}, {w.place} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] leading-relaxed text-slate">We have built in {servedAreas.join(", ")}. <Link className="font-medium text-charcoal-deep underline-offset-4 hover:underline" href="/projects/">See all projects</Link>.</p>
            </div>
            <div>
              <SectionHead label="For procurement" title="Documents on request" center={false} />
              <ul className="mt-10 space-y-3">
                {documents.map((d) => (
                  <li key={d} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] leading-relaxed text-slate">Message us and we will send what your procurement team needs.</p>
            </div>
          </div>
        </section>

        <div className="pb-12">
          <div className={wrap}>
            <ShareButtons path={path} title="Redbay Group capability statement" />
          </div>
        </div>

        <CtaPanel
          title="Running a tender or a school build?"
          text="Send us your drawings or brief. We return an itemised bill of quantities, a phased programme and a fixed quote."
          message="Hello Redbay Group, I would like to discuss a project for our institution. We need:"
          button="Message us on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
