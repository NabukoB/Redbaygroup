import type { projects } from "@/lib/site";
import { Badge } from "@/components/chrome";

type Project = (typeof projects)[number];

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-7">
      <div className="flex items-center justify-between gap-3">
        <Badge>{p.division}</Badge>
        <span className="text-sm text-slate">{p.note}</span>
      </div>
      <div className="mt-14">
        <h3 className="heading text-2xl md:text-[28px]">{p.name}</h3>
        <p className="mt-1 text-lg text-slate">{p.place}</p>
      </div>
    </div>
  );
}
