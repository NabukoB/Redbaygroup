"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects, type Division } from "@/lib/site";

const filters: ("All" | Division)[] = ["All", "Homes", "Schools", "Interiors", "Energy"];

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.division === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`h-10 rounded-full px-5 text-sm font-medium transition-colors ${
              active === f ? "bg-charcoal-deep text-white" : "bg-white text-charcoal hover:bg-line"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <motion.ul layout className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={`${p.name}-${p.place}`}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard p={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {shown.length === 0 && (
        <p className="mx-auto mt-4 max-w-md rounded-2xl bg-white p-8 text-center text-slate">
          {active} projects are being documented and will be added here soon. Ask us about current {active.toLowerCase()} work.
        </p>
      )}
    </div>
  );
}
