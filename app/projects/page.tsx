import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Footer, Nav, wrap } from "@/components/chrome";
import { ProjectFilter } from "@/components/project-filter";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects | Redbay Group",
  description: "Homes, schools, interiors and energy projects by Redbay Group across Kenya.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-mist">
        <section className="py-20 md:py-28">
          <div className={wrap}>
            <Reveal className="mx-auto max-w-2xl text-center">
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
                <Link href="/#contact">Start a project</Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
