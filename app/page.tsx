import Link from "next/link";
import { ArrowUpRight, House, School, Sofa, Sun, type LucideIcon } from "lucide-react";
import { BuildScene } from "@/components/build-scene";
import { BuildSteps } from "@/components/build-steps";
import { Badge, CtaPanel, Footer, Nav, SectionHead, wrap } from "@/components/chrome";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";
import { approach, companies, projects, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Redbay Group | Building Contractors for Homes and Schools in Kenya",
  description:
    "Redbay Group builds homes, schools and the infrastructure for better living and learning in Kenya. NCA Category 7 contractor in Ruaraka, Nairobi.",
  path: "/",
  absoluteTitle: true,
});

const icons: Record<string, LucideIcon> = { Homes: House, Schools: School, Interiors: Sofa, Energy: Sun };

function Hero() {
  return (
    <section id="top" className="pt-12 md:pt-16">
      <div className={`${wrap} text-center`}>
        <Reveal>
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
            Homes and schools across Kenya
          </Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="heading mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6vw,4.8rem)]">
            Building places.
            <br />
            Shaping futures.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
            We build homes, schools and spaces that serve people and communities.
          </p>
          <p className="mt-3 text-[15px] font-semibold text-charcoal-deep">Building better, for generations.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="charcoal">
              <Link href="/projects/">Explore our work</Link>
            </Button>
            <Button asChild>
              <Link href="/contact/">Start a project</Link>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1400px] px-3 md:mt-12 md:px-6">
        <div className="overflow-hidden rounded-[28px] bg-mist pt-6 md:px-10 md:pt-8">
          {/* On phones the scene is wider than the screen and slowly pans from school to home */}
          <div className="scene-pan w-[900px] md:w-full">
            <BuildScene />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:items-center`}>
        <div className="lg:col-span-7">
          <SectionHead label="About us" title="Creating spaces that make a difference." center={false} />
          <Reveal delay={0.1} className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-slate">
            <p>
              Redbay Group is a multidisciplinary development group focused on building better places to live, learn
              and thrive.
            </p>
            <p>
              Through our specialised companies, we deliver residential construction, school infrastructure, interior
              solutions and renewable energy systems. We combine practical expertise, thoughtful design and quality
              execution to create lasting value.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          <dl className="rounded-3xl bg-charcoal-deep p-8 text-white md:p-10">
            {[
              [`Since ${site.founded}`, `Building in Kenya, incorporated ${site.incorporated}.`],
              [site.nca, "Licensed by the National Construction Authority."],
              ["All Risk insured", "Contractor’s All Risk cover on our projects."],
            ].map(([a, b], i) => (
              <div key={a} className={i ? "mt-6 border-t border-white/10 pt-6" : ""}>
                <dt className="heading text-2xl md:text-3xl">{a}</dt>
                <dd className="mt-2 text-[15px] text-white/60">{b}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Companies() {
  return (
    <section id="companies" className="scroll-mt-16 border-t border-line py-24 md:py-32">
      <div className={wrap}>
        <SectionHead label="Our companies" title="Specialised expertise. One group." />
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {companies.map((c, i) => {
            const Icon = icons[c.division];
            return (
              <Reveal key={c.name} delay={(i % 2) * 0.08}>
                <li className="h-full">
                  <Link
                    href={`/companies/${c.slug}/`}
                    className="group flex h-full flex-col rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9] md:p-10"
                  >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal-deep">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-slate">
                      {c.division}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="heading mt-10 text-[28px] md:text-[32px]">{c.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-charcoal-deep">{c.line}</p>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate">{c.text}</p>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-mist py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          label="Our projects"
          title="Built with purpose. Designed to last."
          text="Explore our work across residential developments, educational facilities, interiors and renewable energy."
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={`${p.name}-${p.place}`} delay={i * 0.06}>
              <li className="h-full">
                <ProjectCard p={p} />
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <Button asChild variant="charcoal">
            <Link href="/projects/">View projects</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          label="Our approach"
          title="Quality in every detail."
          text="Good development starts with sound planning and is defined by the quality of its execution."
        />
        <BuildSteps items={approach} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Companies />
        <Projects />
        <Approach />
        <CtaPanel />
      </main>
      <Footer />
    </>
  );
}
