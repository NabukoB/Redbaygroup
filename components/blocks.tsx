import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, SectionHead, wrap } from "@/components/chrome";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { companies, projects, site, steps, type Division } from "@/lib/site";

// The five real steps of a job, numbered because they are a sequence
export function StepsSection({ title = "How a project runs", text }: { title?: string; text?: string }) {
  return (
    <section className="border-t border-line py-24 md:py-28">
      <div className={wrap}>
        <SectionHead label="Our process" title={title} text={text ?? "You know the price, the scope and the timeline before any work starts."} />
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <li className="h-full rounded-2xl bg-mist p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectsFor({ division, title }: { division?: Division; title: string }) {
  const list = projects.filter((p) => !division || p.division === division);
  return (
    <section className="bg-mist py-24 md:py-28">
      <div className={wrap}>
        <SectionHead label="Projects" title={title} />
        {list.length > 0 ? (
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${p.name}-${p.place}`} delay={(i % 3) * 0.05}>
                <li className="h-full">
                  <ProjectCard p={p} />
                </li>
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-8 text-center text-slate">
            {division} projects are being documented and will be added here. Ask us about current {division?.toLowerCase()} work.
          </p>
        )}
        <Reveal className="mt-10 text-center">
          <Link href="/projects/" className="inline-flex items-center gap-1.5 font-medium text-charcoal-deep underline-offset-4 hover:underline">
            See all projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function OtherCompanies({ current }: { current?: string }) {
  const list = companies.filter((c) => c.slug !== current);
  return (
    <section className="py-24 md:py-28">
      <div className={wrap}>
        <SectionHead label="Redbay Group" title={current ? "The rest of the group" : "Our companies"} />
        <ul className={`mt-14 grid gap-4 ${list.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <li className="h-full">
                <Link
                  href={`/companies/${c.slug}/`}
                  className="group flex h-full flex-col rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9]"
                >
                  <div className="flex items-center justify-between">
                    <Badge>{c.division}</Badge>
                    <ArrowUpRight className="h-5 w-5 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                  <h3 className="heading mt-10 text-[26px]">{c.name}</h3>
                  <p className="mt-2 font-semibold text-charcoal-deep">{c.line}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">{c.text}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CredentialsPanel() {
  return (
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
  );
}
