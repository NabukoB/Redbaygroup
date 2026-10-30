import { CredentialsPanel, OtherCompanies, StepsSection } from "@/components/blocks";
import { BuildSteps } from "@/components/build-steps";
import { Badge, CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { approach, areas, site } from "@/lib/site";

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
      <main>
        <PageHero
          crumbs={[{ name: "About", path: "/about/" }]}
          label="About us"
          title="Creating spaces that make a difference."
          intro="Redbay Group is a multidisciplinary development group focused on building better places to live, learn and thrive."
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
                then we have built schools and family homes in {areas.slice(1, -1).join(", ")} and {areas.at(-1)}, from our
                base in {site.location}.
              </p>
              <p>
                As our work grew, so did what clients asked of us: the finishes inside a building, and the power that runs
                it. Redbay Group brings that work together through four specialised companies: Redbay Construction, Redbay
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
