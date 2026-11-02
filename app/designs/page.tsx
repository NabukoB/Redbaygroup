import { CtaPanel, Footer, Nav, PageHero, wrap } from "@/components/chrome";
import { DesignCard } from "@/components/design-card";
import { Reveal } from "@/components/reveal";
import { designs } from "@/lib/designs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "House Designs and 3D Plans for Homes in Kenya",
  description:
    "House designs Redbay Group has developed with clients: villas, bungalows, a stone cottage with a solar roof and more. Pick a design and we will build it.",
  path: "/designs/",
});

export default function DesignsPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          crumbs={[{ name: "Home designs", path: "/designs/" }]}
          label="Home designs"
          title="Designs we have developed with our clients."
          intro="Every home starts as a design. These are concept designs commissioned by our clients, shown as 3D renders. Like one? We can adapt it to your plot and budget, then build it."
        />
        <section className="bg-mist py-20 md:py-24">
          <div className={wrap}>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {designs.map((d, i) => (
                <Reveal key={d.slug} delay={(i % 3) * 0.05}>
                  <li className="h-full">
                    <DesignCard d={d} />
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate">
              These images are 3D renders of designs, not photos of completed buildings. Every design is adapted to the
              plot and needs the usual approvals before construction starts.
            </p>
          </div>
        </section>
        <CtaPanel
          title="Have a design in mind?"
          text="Send us a design you like, or your own plans, and we will price it line by line."
          message="Hello Redbay Group, I would like to talk about building one of your home designs."
        />
      </main>
      <Footer />
    </>
  );
}
