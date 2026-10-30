"use client";

import { motion, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";

// Hero scene: a school and a home build themselves on load, then the crane
// keeps working and the flag keeps flying. Palette: charcoal, white, greys, red.
const C = {
  ink: "#2a2c2f",
  wall: "#ffffff",
  wallShade: "#ecebe8",
  glass: "#dfe1e3",
  grey: "#b9bbbe",
  soft: "#d5d6d8",
  red: "#d7141a",
};

const rise = { transformBox: "fill-box" as const, transformOrigin: "50% 100%" };

export function BuildScene() {
  const still = useReducedMotion();

  // Build-up helpers. Endless loops below are switched off for Reduce Motion.
  const grow = (delay: number, extra: Partial<Transition> = {}) => ({
          initial: { scaleY: 0 },
          animate: { scaleY: 1 },
    transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1], ...extra } as Transition,
  });
  const pop = (delay: number) => ({
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 },
    transition: { delay, duration: 0.45, ease: "easeOut" } as Transition,
  });
  const drop = (delay: number) => ({
          initial: { y: -90, opacity: 0 },
          animate: { y: 0, opacity: 1 },
    transition: { delay, type: "spring", stiffness: 140, damping: 14 } as Transition,
  });
  const loop = (anim: TargetAndTransition, duration: number, delay = 0) =>
    still
      ? {}
      : {
          animate: anim,
          transition: { delay, duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } as Transition,
        };

  const schoolWindows = [];
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 6; col++) {
      if (col === 2 || col === 3) continue; // entrance block sits here
      schoolWindows.push({ x: 146 + col * 64, y: 244 + row * 74, i: row * 6 + col });
    }
  }

  return (
    <svg
      viewBox="0 40 1200 410"
      className="h-auto w-full"
      role="img"
      aria-label="Animation of a school and a family home being built, with a crane working between them"
    >
      {/* clouds */}
      <motion.g {...loop({ x: [0, 70] }, 16)}>
        <rect x="170" y="70" width="120" height="30" rx="15" fill={C.wall} />
        <rect x="205" y="52" width="70" height="34" rx="17" fill={C.wall} />
      </motion.g>
      <motion.g {...loop({ x: [0, -60] }, 19, 1)}>
        <rect x="900" y="96" width="140" height="30" rx="15" fill={C.wall} />
        <rect x="945" y="76" width="74" height="34" rx="17" fill={C.wall} />
      </motion.g>

      {/* tower crane */}
      <motion.g style={rise} {...grow(0.3, { duration: 1.1 })}>
        <rect x="636" y="90" width="12" height="310" fill={C.ink} />
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M636 ${110 + i * 29} l12 18`} stroke={C.wall} strokeWidth="1.5" />
        ))}
      </motion.g>
      <motion.g initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
        <rect x="560" y="84" width="380" height="8" fill={C.ink} />
        <path d="M642 84 L642 58 L560 84 M642 58 L940 84" stroke={C.ink} strokeWidth="2" fill="none" />
        <rect x="560" y="92" width="34" height="22" fill={C.grey} />
        <rect x="628" y="92" width="28" height="20" rx="3" fill={C.red} />
      </motion.g>
      {/* trolley, cable and a beam being lifted */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.4 }}>
        <motion.g {...loop({ x: [0, 140] }, 6, 1.6)}>
          <rect x="690" y="92" width="22" height="8" fill={C.ink} />
          <motion.g {...loop({ y: [0, 18] }, 3, 1.6)}>
            <line x1="701" y1="100" x2="701" y2="140" stroke={C.ink} strokeWidth="1.5" />
            <path d="M701 140 l-26 14 M701 140 l26 14" stroke={C.ink} strokeWidth="1.5" />
            <rect x="661" y="154" width="80" height="9" fill={C.red} />
          </motion.g>
        </motion.g>
      </motion.g>

      {/* ---------- SCHOOL ---------- */}
      <motion.g style={rise} {...grow(0.7)}>
        <rect x="120" y="222" width="400" height="178" fill={C.wall} stroke={C.ink} strokeWidth="2.5" />
        <rect x="120" y="300" width="400" height="6" fill={C.wallShade} />
      </motion.g>
      <motion.rect x="112" y="210" width="416" height="14" fill={C.ink} {...pop(1.4)} />
      {schoolWindows.map((w) => (
        <motion.rect
          key={w.i}
          x={w.x}
          y={w.y}
          width="38"
          height="44"
          rx="2"
          fill={C.glass}
          stroke={C.ink}
          strokeWidth="2"
          {...pop(1.5 + w.i * 0.05)}
        />
      ))}
      {/* entrance block with pediment and clock */}
      <motion.g style={rise} {...grow(1.0)}>
        <rect x="270" y="196" width="100" height="204" fill={C.wallShade} stroke={C.ink} strokeWidth="2.5" />
      </motion.g>
      <motion.g {...drop(1.9)}>
        <path d="M258 198 L320 152 L382 198 Z" fill={C.ink} />
        <circle cx="320" cy="228" r="15" fill={C.wall} stroke={C.ink} strokeWidth="2" />
        <path d="M320 228 V218 M320 228 h7" stroke={C.ink} strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g {...pop(2.1)}>
        <rect x="298" y="330" width="44" height="70" fill={C.ink} />
        <rect x="292" y="396" width="56" height="4" fill={C.grey} />
      </motion.g>
      {/* flagpole and flag */}
      <motion.g style={rise} {...grow(2.2)}>
        <rect x="566" y="214" width="4" height="186" fill={C.ink} />
      </motion.g>
      <motion.g initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.6, duration: 1.2, ease: "easeOut" }}>
        <motion.path
          d="M570 216 C590 210 600 226 624 218 L624 248 C600 256 590 240 570 246 Z"
          fill={C.red}
          style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}
          {...loop({ skewY: [-4, 5], scaleX: [1, 0.92] }, 1.4, 3.6)}
        />
      </motion.g>

      {/* ---------- HOME ---------- */}
      <motion.g style={rise} {...grow(1.2)}>
        <rect x="810" y="272" width="236" height="128" fill={C.wall} stroke={C.ink} strokeWidth="2.5" />
        <rect x="1046" y="318" width="70" height="82" fill={C.wallShade} stroke={C.ink} strokeWidth="2.5" />
      </motion.g>
      <motion.g {...drop(2.0)}>
        <rect x="986" y="186" width="22" height="50" fill={C.ink} />
        <path d="M790 276 L928 176 L1066 276 Z" fill={C.red} />
        <path d="M1040 320 L1081 290 L1122 320 Z" fill={C.ink} />
      </motion.g>
      {[
        { x: 838, y: 300 },
        { x: 970, y: 300 },
        { x: 1064, y: 340 },
      ].map((w, i) => (
        <motion.rect
          key={i}
          x={w.x}
          y={w.y}
          width="40"
          height="40"
          rx="2"
          fill={C.glass}
          stroke={C.ink}
          strokeWidth="2"
          {...pop(2.4 + i * 0.12)}
        />
      ))}
      <motion.rect x="906" y="330" width="44" height="70" rx="2" fill={C.ink} {...pop(2.7)} />
      <motion.circle cx="939" cy="367" r="2.5" fill={C.wall} {...pop(2.9)} />

      {/* trees */}
      {[
        { x: 60, r: 26, d: 2.8 },
        { x: 750, r: 22, d: 3.0 },
        { x: 1156, r: 28, d: 3.1 },
      ].map((t) => (
        <motion.g key={t.x} style={rise} {...grow(t.d, { duration: 0.7 })}>
          <rect x={t.x - 3} y={400 - t.r - 24} width="6" height={t.r + 24} fill={C.ink} />
          <circle cx={t.x} cy={400 - t.r * 2 - 10} r={t.r} fill={C.soft} />
        </motion.g>
      ))}

      {/* ground line */}
      <motion.path
        d="M0 400 H1200"
        stroke={C.ink}
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <rect x="0" y="401" width="1200" height="59" fill={C.wallShade} opacity="0.6" />
    </svg>
  );
}
