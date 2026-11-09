import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { QuoteForm } from "@/components/quote-form";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Get a Building Quote in Kenya",
  description:
    "Request a fixed building quote from Redbay Group: homes, perimeter walls, schools, interiors and offices. Answer five questions and send them on WhatsApp.",
  path: "/get-a-quote/",
});

const next = [
  { t: "We reply", d: "On WhatsApp or by phone, with any questions about the site." },
  { t: "We look at the site", d: "From your drawings and photos, or with a site visit where needed." },
  { t: "You get a fixed quote", d: "An itemised bill of quantities with one price, the timeline and payment stages." },
];

export default function GetAQuotePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Get a quote", path: "/get-a-quote/" }]}
          label="Get a quote"
          title="Tell us about your project."
          intro="Answer a few quick questions. They open in WhatsApp, ready to send, so we can reply with the right advice and price."
        />
        <section className="pb-20">
          <div className={`${wrap} grid gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>
            <aside className="lg:col-span-4">
              <div className="rounded-3xl bg-charcoal-deep p-8 text-white">
                <h2 className="text-lg font-semibold">What happens next</h2>
                <ol className="mt-5 space-y-5">
                  {next.map((s, i) => (
                    <li key={s.t} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red text-sm font-semibold">{i + 1}</span>
                      <span>
                        <span className="block font-semibold">{s.t}</span>
                        <span className="mt-1 block text-[15px] leading-relaxed text-white/65">{s.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">
                  {site.legal} is an {site.nca} contractor registered with the National Construction Authority.
                </p>
              </div>
              <div className="mt-4 rounded-3xl border border-line p-8">
                <p className="font-semibold">Prefer to talk?</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block text-2xl font-semibold tracking-tight text-charcoal-deep">
                  {site.phone}
                </a>
                <Link href="/perimeter-wall-calculator/" className="mt-5 inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                  Building a wall? Try the calculator <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
