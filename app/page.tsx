import Link from "next/link";
import { House, School, Sofa, Sun, type LucideIcon } from "lucide-react";
import { BuildScene } from "@/components/build-scene";
import { BuildSteps } from "@/components/build-steps";
import { Badge, Footer, Nav, SectionHead, wrap } from "@/components/chrome";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { approach, companies, projects, site } from "@/lib/site";

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
              <Link href="/projects">Explore our work</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Start a project</Link>
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
                <li className="flex h-full flex-col rounded-3xl bg-mist p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal-deep">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="text-sm text-slate">{c.division}</span>
                  </div>
                  <h3 className="heading mt-10 text-[28px] md:text-[32px]">{c.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-charcoal-deep">{c.line}</p>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate">{c.text}</p>
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
            <Link href="/projects">View projects</Link>
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

function Contact() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Redbay Group, I would like to start a project.")}`;
  return (
    <section id="contact" className="scroll-mt-16 pb-24 md:pb-32">
      <div className={wrap}>
        <Reveal>
          <div className="rounded-[28px] bg-charcoal-deep px-6 py-16 text-center text-white md:px-16 md:py-24">
            <h2 className="heading mx-auto max-w-3xl text-[clamp(2.4rem,5.4vw,4.2rem)]">Let’s build something that matters.</h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              Planning a home? Developing a school? Transforming a space? Let’s bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={wa} target="_blank" rel="noopener noreferrer">Start a project</a>
              </Button>
              <Button asChild variant="outlineLight">
                <a href={`mailto:${site.email}`}>Email us</a>
              </Button>
            </div>
            <p className="mt-10 flex flex-col items-center gap-2 text-[15px] text-white/60 sm:flex-row sm:justify-center sm:gap-8">
              <a className="hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.location}</span>
            </p>
          </div>
        </Reveal>
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
