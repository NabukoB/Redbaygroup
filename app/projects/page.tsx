import Link from "next/link";
import { Badge, Breadcrumbs, Footer, Nav, wrap } from "@/components/chrome";
import { ProjectFilter } from "@/components/project-filter";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects: Homes and Schools Built Across Kenya",
  description:
    "See Redbay Group projects across Kenya: Merishaw School in Isinya, a five-bedroom villa in Diani, and homes in Nanyuki, Lukenya, Nyahururu and Kakamega.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-mist">
        <section className="pb-20 pt-10 md:pb-28 md:pt-14">
          <div className={wrap}>
            <Breadcrumbs items={[{ name: "Projects", path: "/projects/" }]} />
            <Reveal className="mx-auto mt-10 max-w-2xl text-center">
              <Badge>Our projects</Badge>
              <h1 className="heading mt-5 text-[clamp(2.4rem,5.4vw,4.2rem)]">Built with purpose. Designed to last.</h1>
              <p className="mt-5 text-lg leading-relaxed text-slate">
                Explore our work across residential developments, educational facilities, interiors and renewable
                energy. Our full company profile is available on request.
              </p>
            </Reveal>
            <div className="mt-12">
              <ProjectFilter />
            </div>
            <Reveal className="mt-16 text-center">
              <Button asChild>
                <Link href="/contact/">Start a project</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
