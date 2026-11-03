import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { Reveal } from "@/components/reveal";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";
import { projects } from "@/lib/site";

export const metadata = pageMeta({
  title: "Areas We Serve: Building Contractor Across Kenya",
  description:
    "Redbay builds homes, schools and interiors in Nairobi, Kiambu, Machakos, Kajiado, Diani and the coast, Nanyuki and Nyahururu. See our work in each area.",
  path: "/locations/",
});

export default function LocationsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Areas we serve", path: "/locations/" }]}
          label="Areas we serve"
          title="Building across Kenya."
          intro="We are based in Ruaraka, Nairobi, and build wherever our clients need us. These are the areas where you can see our finished work."
        />
        <section className="pb-24">
          <div className={wrap}>
            <ul className="grid gap-4 md:grid-cols-2">
              {locations.map((l, i) => {
                const count = l.projects.filter((s) => projects.some((p) => p.slug === s)).length;
                return (
                  <Reveal as="li" key={l.slug} delay={(i % 2) * 0.06} className={`h-full ${locations.length % 2 === 1 && i === locations.length - 1 ? "md:col-span-2" : ""}`}>
                    <Link
                      href={`/locations/${l.slug}/`}
                      className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9] md:p-10"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                          <MapPin className="h-4 w-4 text-red" aria-hidden="true" />
                          {l.counties.join(", ")}
                        </span>
                        <h2 className="heading mt-5 text-[28px]">{l.name}</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate">{l.towns.slice(0, 6).join(" · ")}</p>
                      </div>
                      <span className="mt-10 inline-flex items-center gap-1.5 font-medium text-charcoal-deep">
                        {count} {count === 1 ? "project" : "projects"} to see
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
            <p className="mx-auto mt-10 max-w-xl text-center text-[15px] leading-relaxed text-slate">
              Building somewhere else? Tell us where your site is and we will confirm.
            </p>
          </div>
        </section>
        <CtaPanel message="Hello Redbay Group, I would like a quote. My site is in:" button="Get a quote on WhatsApp" />
      </main>
      <Footer />
    </>
  );
}
