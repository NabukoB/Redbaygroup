import Link from "next/link";
import { Download } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { checklistQuestions, redFlags } from "@/lib/checklist";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/contractor-checklist/";
const pdf = "/downloads/building-contractor-checklist.pdf";

export const metadata = pageMeta({
  title: "10 Questions to Ask a Building Contractor in Kenya",
  description:
    "A free checklist of 10 questions to ask before you hire a building contractor in Kenya, with the red flags to watch for. Download it as a PDF.",
  path,
  image: "contractor-checklist",
});

export default function ChecklistPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check a building contractor before you hire them",
    description: "Ten questions to ask a building contractor in Kenya before you hire them.",
    step: checklistQuestions.map((c, i) => ({ "@type": "HowToStep", position: i + 1, name: c.q, text: c.why })),
    url: `${site.url}${path}`,
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={ld} />
        <PageHero
          crumbs={[{ name: "Contractor checklist", path }]}
          label="Free checklist"
          title="10 questions to ask before you hire a building contractor."
          intro="Ask every contractor the same questions and write the answers down. The differences show you who to trust."
        >
          <div className="rounded-3xl bg-mist p-8">
            <p className="text-lg font-semibold tracking-tight">Print it and take it to your meetings</p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">A one-page PDF with a tick box and a line for each answer.</p>
            <a
              href={pdf}
              download
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-charcoal-deep px-6 text-[15px] font-semibold text-white transition-colors hover:bg-charcoal"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download the PDF
            </a>
            <p className="mt-4 text-[15px] text-slate">
              Prefer WhatsApp?{" "}
              <a
                className="font-medium text-charcoal-deep underline underline-offset-4 hover:text-red"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Redbay Group, please send me the contractor checklist. I am planning a project in:")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask us to send it to you
              </a>
              , and tell us about your project.
            </p>
          </div>
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="The questions" title="Ask these before you sign" center={false} />
            <ol className="mt-12 space-y-4">
              {checklistQuestions.map((c, i) => (
                <li key={c.q} className="flex gap-4 rounded-2xl bg-mist p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">{i + 1}</span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">{c.q}</h2>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{c.why}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="Walk away if" title="Red flags" center={false} />
              <ul className="mt-10 space-y-3">
                {redFlags.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <h2 className="text-xl font-semibold tracking-tight">Read more</h2>
              <ul className="mt-5 space-y-3 text-lg">
                {([
                  ["How to check a building contractor", "/insights/how-to-check-a-building-contractor/"],
                  ["Does your building quotation include everything?", "/insights/does-your-quotation-include-everything/"],
                  ["Common construction mistakes in Kenya to avoid", "/insights/common-construction-mistakes-kenya/"],
                ] as const).map(([t, h]) => (
                  <li key={h}>
                    <Link href={h} className="font-medium text-charcoal-deep underline-offset-4 hover:underline">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="py-12">
          <div className={wrap}>
            <ShareButtons path={path} title="10 questions to ask before you hire a building contractor" />
          </div>
        </div>

        <CtaPanel
          title="Want a second opinion on a quotation?"
          text="Send us the quotation or the bill of quantities on WhatsApp. We tell you what is missing and what looks wrong."
          message="Hello Redbay Group, I would like a second opinion on a building quotation."
          button="Send a quotation on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
