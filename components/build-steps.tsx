"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

const C = { ink: "#2a2c2f", wall: "#ffffff", shade: "#ecebe8", glass: "#dfe1e3", red: "#d7141a", grey: "#b9bbbe" };

type Item = { name: string; text: string };

// The house builds up one stage per item as the visitor scrolls the list.
function House({ stage, label }: { stage: number; label: string }) {
  const enter = (from: object) => ({
    initial: { opacity: 0, ...from },
    animate: { opacity: 1, x: 0, y: 0, scaleY: 1 },
    exit: { opacity: 0 },
    transition: { type: "spring" as const, stiffness: 120, damping: 16 },
  });
  const rise = { transformBox: "fill-box" as const, transformOrigin: "50% 100%" };

  return (
    <svg viewBox="0 50 400 225" className="h-auto w-full" role="img" aria-label={`House at stage ${stage + 1}: ${label}`}>
      <line x1="0" y1="250" x2="400" y2="250" stroke={C.ink} strokeWidth="2" />
      <rect x="0" y="251" width="400" height="49" fill={C.shade} opacity="0.6" />
      <AnimatePresence>
        {stage === 0 && (
          <motion.g key="pegs" {...enter({ y: -10 })}>
            <path d="M90 250 V226 M310 250 V226 M90 236 H310" stroke={C.red} strokeWidth="2" strokeDasharray="6 5" />
            <rect x="86" y="222" width="8" height="8" fill={C.red} />
            <rect x="306" y="222" width="8" height="8" fill={C.red} />
          </motion.g>
        )}
        {stage >= 1 && <motion.rect key="slab" x="84" y="236" width="232" height="14" fill={C.grey} {...enter({ y: 20 })} />}
        {stage >= 2 && (
          <motion.g key="walls" style={rise} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <rect x="96" y="140" width="208" height="96" fill={C.wall} stroke={C.ink} strokeWidth="2.5" />
            <rect x="122" y="164" width="36" height="34" fill={C.shade} stroke={C.ink} strokeWidth="2" />
            <rect x="242" y="164" width="36" height="34" fill={C.shade} stroke={C.ink} strokeWidth="2" />
            <rect x="182" y="180" width="36" height="56" fill={C.shade} stroke={C.ink} strokeWidth="2" />
          </motion.g>
        )}
        {stage >= 3 && (
          <motion.g key="roof" {...enter({ y: -60 })}>
            <rect x="256" y="72" width="18" height="40" fill={C.ink} />
            <path d="M78 144 L200 64 L322 144 Z" fill={C.red} />
          </motion.g>
        )}
        {stage >= 4 && (
          <motion.g key="finish" {...enter({ y: 8 })}>
            <rect x="122" y="164" width="36" height="34" fill={C.glass} stroke={C.ink} strokeWidth="2" />
            <rect x="242" y="164" width="36" height="34" fill={C.glass} stroke={C.ink} strokeWidth="2" />
            <rect x="182" y="180" width="36" height="56" fill={C.ink} />
            <rect x="338" y="196" width="5" height="54" fill={C.ink} />
            <circle cx="340" cy="184" r="22" fill="#d5d6d8" />
            <path d="M44 250 V224 M60 250 V224 M36 232 H68 M36 242 H68" stroke={C.ink} strokeWidth="2" />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}

export function BuildSteps({ items }: { items: Item[] }) {
  const [stage, setStage] = useState(0);
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-16">
      {/* The house stays pinned while the steps scroll past (top of screen on phones, left on desktop) */}
      <div className="sticky top-16 z-10 self-start bg-white pb-3 pt-2 lg:top-28 lg:col-span-6 lg:bg-transparent lg:p-0">
        <div className="mx-auto max-w-sm rounded-3xl bg-mist p-5 md:max-w-md md:p-8 lg:max-w-none lg:p-10">
          <House stage={stage} label={items[stage].name} />
          <div className="mt-4 flex items-center gap-2" aria-hidden="true">
            {items.map((s, i) => (
              <span
                key={s.name}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= stage ? "bg-charcoal-deep" : "bg-charcoal/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <ul className="lg:col-span-6">
        {items.map((s, i) => (
          <motion.li
            key={s.name}
            onViewportEnter={() => setStage(i)}
            viewport={{ margin: "-40% 0px -55% 0px" }}
            className="flex gap-6 border-b border-line py-8 first:pt-0 last:border-b-0 lg:py-10"
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${
                i === stage ? "bg-red text-white" : "bg-charcoal-deep text-white"
              }`}
              aria-hidden="true"
            >
              <Check className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-slate">{s.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
