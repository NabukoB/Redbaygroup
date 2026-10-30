"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { Division } from "@/lib/site";

const C = { ink: "#2a2c2f", wall: "#ffffff", shade: "#ecebe8", glass: "#dfe1e3", red: "#d7141a", grey: "#b9bbbe", soft: "#d5d6d8" };
const rise = { transformBox: "fill-box" as const, transformOrigin: "50% 100%" };
const ease = [0.22, 1, 0.36, 1] as const;

const grow = (delay: number) => ({
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  transition: { delay, duration: 0.8, ease } as Transition,
});
const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, duration: 0.4 } as Transition,
});
const drop = (delay: number) => ({
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: "spring", stiffness: 140, damping: 14 } as Transition,
});

function Ground() {
  return (
    <>
      <motion.path d="M0 250 H400" stroke={C.ink} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
      <rect x="0" y="251" width="400" height="30" fill={C.shade} opacity="0.6" />
    </>
  );
}

function HomeArt() {
  return (
    <>
      <Ground />
      <motion.g style={rise} {...grow(0.3)}>
        <rect x="96" y="140" width="208" height="110" fill={C.wall} stroke={C.ink} strokeWidth="2.5" />
      </motion.g>
      <motion.g {...drop(1.0)}>
        <rect x="256" y="72" width="18" height="40" fill={C.ink} />
        <path d="M78 144 L200 64 L322 144 Z" fill={C.red} />
      </motion.g>
      {[122, 242].map((x, i) => (
        <motion.rect key={x} x={x} y="168" width="36" height="34" fill={C.glass} stroke={C.ink} strokeWidth="2" {...pop(1.4 + i * 0.1)} />
      ))}
      <motion.rect x="182" y="186" width="36" height="64" fill={C.ink} {...pop(1.6)} />
      <motion.g style={rise} {...grow(1.8)}>
        <rect x="338" y="196" width="5" height="54" fill={C.ink} />
        <circle cx="340" cy="184" r="22" fill={C.soft} />
      </motion.g>
    </>
  );
}

function SchoolArt() {
  const still = useReducedMotion();
  return (
    <>
      <Ground />
      <motion.g style={rise} {...grow(0.3)}>
        <rect x="60" y="130" width="280" height="120" fill={C.wall} stroke={C.ink} strokeWidth="2.5" />
        <rect x="60" y="186" width="280" height="4" fill={C.shade} />
      </motion.g>
      <motion.rect x="54" y="120" width="292" height="11" fill={C.ink} {...pop(0.9)} />
      <motion.g style={rise} {...grow(0.6)}>
        <rect x="170" y="110" width="60" height="140" fill={C.shade} stroke={C.ink} strokeWidth="2.5" />
      </motion.g>
      <motion.g {...drop(1.2)}>
        <path d="M162 112 L200 80 L238 112 Z" fill={C.ink} />
        <circle cx="200" cy="132" r="10" fill={C.wall} stroke={C.ink} strokeWidth="2" />
      </motion.g>
      {[78, 120, 250, 292].flatMap((x, i) =>
        [144, 200].map((y, j) => (
          <motion.rect key={`${x}-${y}`} x={x} y={y} width="30" height="32" fill={C.glass} stroke={C.ink} strokeWidth="2" {...pop(1.3 + (i * 2 + j) * 0.06)} />
        ))
      )}
      <motion.rect x="186" y="204" width="28" height="46" fill={C.ink} {...pop(1.8)} />
      <motion.g style={rise} {...grow(1.9)}>
        <rect x="364" y="120" width="3" height="130" fill={C.ink} />
      </motion.g>
      <motion.path
        d="M367 122 C378 118 384 128 398 123 L398 142 C384 147 378 137 367 141 Z"
        fill={C.red}
        style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
        initial={{ opacity: 0 }}
        animate={still ? { opacity: 1 } : { opacity: 1, skewY: [-4, 5] }}
        transition={{ opacity: { delay: 2.3 }, skewY: { delay: 2.4, duration: 1.4, repeat: Infinity, repeatType: "mirror" } }}
      />
    </>
  );
}

function InteriorArt() {
  const still = useReducedMotion();
  return (
    <>
      <rect x="20" y="40" width="360" height="210" fill={C.wall} />
      <motion.path d="M20 250 H380" stroke={C.ink} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      {/* floor tiles */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x="20" y="251" width="360" height="30" fill={C.shade} />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={65 + i * 45} y1="251" x2={55 + i * 45} y2="281" stroke={C.grey} strokeWidth="1" />
        ))}
      </motion.g>
      {/* frame */}
      <motion.g {...drop(0.8)}>
        <rect x="150" y="80" width="80" height="56" fill={C.shade} stroke={C.ink} strokeWidth="2.5" />
        <path d="M158 128 L182 104 L198 118 L210 108 L222 128 Z" fill={C.red} />
      </motion.g>
      {/* sofa */}
      <motion.g initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.7, ease }}>
        <rect x="110" y="182" width="160" height="48" rx="10" fill={C.ink} />
        <rect x="100" y="196" width="24" height="44" rx="8" fill={C.ink} />
        <rect x="256" y="196" width="24" height="44" rx="8" fill={C.ink} />
        <rect x="122" y="204" width="136" height="26" rx="6" fill="#3d4044" />
        <rect x="118" y="238" width="6" height="12" fill={C.ink} />
        <rect x="256" y="238" width="6" height="12" fill={C.ink} />
      </motion.g>
      {/* lamp with light */}
      <motion.g style={rise} {...grow(1.4)}>
        <rect x="320" y="150" width="4" height="100" fill={C.ink} />
        <rect x="310" y="246" width="24" height="4" fill={C.ink} />
        <path d="M304 150 L340 150 L332 124 L312 124 Z" fill={C.red} />
      </motion.g>
      <motion.path
        d="M306 152 L338 152 L372 246 L272 246 Z"
        fill={C.red}
        initial={{ opacity: 0 }}
        animate={still ? { opacity: 0.08 } : { opacity: [0, 0.1, 0.07] }}
        transition={{ delay: 2, duration: 1.6 }}
      />
      {/* plant */}
      <motion.g style={rise} {...grow(1.7)}>
        <rect x="52" y="222" width="26" height="28" fill={C.grey} />
        <ellipse cx="58" cy="206" rx="9" ry="20" fill={C.soft} />
        <ellipse cx="72" cy="200" rx="9" ry="24" fill={C.soft} />
      </motion.g>
    </>
  );
}

function EnergyArt() {
  const still = useReducedMotion();
  const spin = still ? {} : { animate: { scaleX: [1, -1] }, transition: { duration: 1.1, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const } };
  return (
    <>
      <Ground />
      {/* sun */}
      <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          animate={still ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="78" y="40" width="4" height="12" rx="2" fill={C.red} transform={`rotate(${i * 45} 80 80)`} />
          ))}
        </motion.g>
        <circle cx="80" cy="80" r="20" fill={C.red} />
      </motion.g>
      {/* vertical-axis wind turbine */}
      <motion.g style={rise} {...grow(0.6)}>
        <rect x="248" y="110" width="6" height="140" fill={C.ink} />
        <rect x="236" y="244" width="30" height="6" fill={C.ink} />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <rect x="216" y="56" width="70" height="4" fill={C.ink} />
        <rect x="216" y="150" width="70" height="4" fill={C.ink} />
        <motion.g style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} {...spin}>
          <path d="M218 58 C200 90 236 120 218 152" stroke={C.ink} strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M284 58 C302 90 266 120 284 152" stroke={C.ink} strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M251 58 C266 90 236 120 251 152" stroke={C.red} strokeWidth="5" fill="none" strokeLinecap="round" />
        </motion.g>
      </motion.g>
      {/* solar panel */}
      <motion.g initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7, ease }}>
        <path d="M300 214 L380 214 L368 182 L312 182 Z" fill={C.ink} />
        {[0, 1, 2].map((i) => (
          <line key={i} x1={326 + i * 14} y1="182" x2={322 + i * 16} y2="214" stroke={C.grey} strokeWidth="1.2" />
        ))}
        <line x1="306" y1="198" x2="374" y2="198" stroke={C.grey} strokeWidth="1.2" />
        <rect x="336" y="214" width="6" height="36" fill={C.ink} />
      </motion.g>
      {/* wind lines */}
      {[100, 130].map((y, i) => (
        <motion.path
          key={y}
          d={`M120 ${y} q20 -8 40 0 t40 0`}
          stroke={C.grey}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ opacity: 0, x: -20 }}
          animate={still ? { opacity: 1, x: 0 } : { opacity: [0, 1, 0], x: [-20, 20, 40] }}
          transition={{ delay: 1.6 + i * 0.6, duration: 2.4, repeat: still ? 0 : Infinity }}
        />
      ))}
    </>
  );
}

const arts: Record<Division, () => React.JSX.Element> = { Homes: HomeArt, Schools: SchoolArt, Interiors: InteriorArt, Energy: EnergyArt };
const labels: Record<Division, string> = {
  Homes: "Illustration of a family home being built",
  Schools: "Illustration of a school building with a flag",
  Interiors: "Illustration of a finished living room with a sofa, lamp and artwork",
  Energy: "Illustration of a vertical-axis wind turbine and a solar panel in the sun",
};

export function DivisionArt({ division }: { division: Division }) {
  const Art = arts[division];
  return (
    <div className="overflow-hidden rounded-[28px] bg-mist p-6 md:p-10">
      <svg viewBox="0 30 400 255" className="h-auto w-full" role="img" aria-label={labels[division]}>
        <Art />
      </svg>
    </div>
  );
}
