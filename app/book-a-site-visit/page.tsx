import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { SiteVisitForm } from "@/components/site-visit-form";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/book-a-site-visit/";

export const metadata = pageMeta({
  title: "Book a Site Visit in Kenya",
  description:
    "Ask Redbay to visit your site for a quote, supervision or an inspection. Pick a day, send the request on WhatsApp or as an enquiry, and we confirm the time.",
  path,
  image: "book-a-site-visit",
});

const next = [
  { t: "You send the request", d: "Say what the visit is for, where the site is and when suits you." },
  { t: "We confirm", d: "We call or message to agree the day and time, and tell you about any visit fee first." },
  { t: "We visit and report", d: "We look at the site and follow up with a quote, advice or a written report." },
];

export default function BookASiteVisitPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Book a site visit", path }]}
          label="Site visit"
          title="Let us come and look."
          intro="Tell us where the site is and what you need. We reply to agree the day and time."
        />
        <section className="pb-20">
          <div className={`${wrap} grid gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-8">
              <SiteVisitForm />
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
              </div>
              <div className="mt-4 rounded-3xl border border-line p-8">
                <p className="font-semibold">Prefer to talk?</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 block text-2xl font-semibold tracking-tight text-charcoal-deep">
                  {site.phone}
                </a>
                <Link href="/site-supervision/" className="mt-5 flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                  Site supervision <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/building-inspection/" className="mt-3 flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                  Building inspection <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
