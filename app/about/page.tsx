import { CredentialsPanel, OtherCompanies, StepsSection } from "@/components/blocks";
import { BuildSteps } from "@/components/build-steps";
import { Badge, CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { approach, areas, mission, site, values, vision } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Us: Kenyan Builders Since 2019",
  description:
    "Redbay Group is a Kenyan development group building homes, schools, interiors and energy systems. Since 2019, NCA Category 7 licensed, Ruaraka, Nairobi.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "About", path: "/about/" }]}
          label="About us"
          title="Better places to live, learn and thrive."
          intro={`Redbay Group is the brand of ${site.legal}, a development group building homes, schools, interiors and energy systems across Kenya.`}
        >
          <CredentialsPanel />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <SectionHead label="Our story" title="From one contractor to a group." center={false} />
            </div>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-slate lg:col-span-7">
              <p>
                Redbay started building in {site.founded} and was incorporated as {site.legal} in {site.incorporated}. Since
                then we have built schools and homes, and fitted out interiors, in {areas.slice(1, -1).join(", ")} and {areas.at(-1)}, from our
                base in {site.location}.
              </p>
              <p>
                As our work grew, so did what clients asked of us: the finishes inside a building, and the power that runs
                it. Redbay Group brings that work together through four divisions of {site.legal}: Redbay Construction, Redbay
                Schools, Redbay Interiors and Redbay Energy.
              </p>
              <p>
                We keep a small permanent team that runs every site, and bring in trusted tradespeople for each project. It
                keeps us close to the work and easy to reach.
              </p>
            </Reveal>
          </div>
        </section>

        <OtherCompanies />

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <SectionHead label="Our purpose" title="Vision, mission and values." center={false} />
            </div>
            <div className="space-y-10 lg:col-span-7">
              <Reveal className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Vision</h3>
                  <p className="heading mt-3 text-2xl leading-snug md:text-3xl">{vision}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Mission</h3>
                  <p className="heading mt-3 text-2xl leading-snug md:text-3xl">{mission}</p>
                </div>
              </Reveal>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Values</h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {values.map((v, i) => (
                    <Reveal as="li" key={v.name} delay={i * 0.05} className="h-full rounded-2xl border border-line p-6">
                      <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                      <p className="mt-5 text-xl font-semibold tracking-tight">{v.name}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate">{v.text}</p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead
              label="Our approach"
              title="Quality in every detail."
              text="Good development starts with sound planning and is defined by the quality of its execution."
            />
            <BuildSteps items={approach} />
          </div>
        </section>

        <StepsSection />

        <section className="bg-mist py-20">
          <div className={`${wrap} text-center`}>
            <SectionHead label="Where we work" title="Building across Kenya." text={`Based in ${site.location}. Places we have built so far:`} />
            <ul className="mt-10 flex flex-wrap justify-center gap-2">
              {areas.map((a) => (
                <li key={a}>
                  <Badge>{a}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaPanel />
      </main>
      <Footer />
    </>
  );
}
