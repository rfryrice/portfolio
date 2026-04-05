import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

/* ── Layout ── */
const W = 900;
const H = 500;
const CX = W / 2;
const CY = H / 2;
const YY_R = 70;
const TOTAL = 64;

/* ── Palette ── */
const INK = '#1e1e2e';
const PAPER = '#f5f5f5';
const PURPLE = '#a78bfa';
const SKY = '#60a5fa';
const TAIL_CLR = '#94a3b8';

/* ─────────────────────────────────────────────
   SVG "assets" — all generated inline, no files
   ───────────────────────────────────────────── */

/* 1. Yin-yang dark half path (centered at 0,0) */
const YY_D = (() => {
  const r = YY_R;
  const h = r / 2;
  return [
    `M0-${r}`,
    `A${r},${r},0,0,1,0,${r}`,
    `A${h},${h},0,0,1,0,0`,
    `A${h},${h},0,0,0,0,-${r}`,
    'Z',
  ].join('');
})();

/* 2. Sunflower-spiral positions for multiplication phase */
const SPIRAL = (() => {
  const phi = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: TOTAL }, (_, i) => {
    const theta = i * phi;
    const r = 17 * Math.sqrt(i + 1);
    return { x: CX + Math.cos(theta) * r, y: CY + Math.sin(theta) * r };
  });
})();

/* 3. Lipid bilayer positions (two arched rows) */
const MEMBRANE = (() => {
  const half = TOTAL / 2;
  const sp = 20;
  const tw = (half - 1) * sp;
  const sx = CX - tw / 2;
  const gap = 30;
  return Array.from({ length: TOTAL }, (_, i) => {
    const top = i < half;
    const idx = top ? i : i - half;
    const x = sx + idx * sp;
    const arc = 8 * Math.sin(((idx + 0.5) / half) * Math.PI);
    const y = top ? CY - gap - arc : CY + gap + arc;
    const dir = top ? 1 : -1;
    return { x, y, dir };
  });
})();

/* 4. Two wavy tails per phospholipid head (cubic beziers) */
function tailD(x, y, dir, len = 11) {
  const dy = dir * len;
  return [
    `M${x - 1.5},${y} C${x + 1},${y + dy * 0.4} ${x - 2},${y + dy * 0.7} ${x - 0.5},${y + dy}`,
    `M${x + 1.5},${y} C${x - 1},${y + dy * 0.4} ${x + 2},${y + dy * 0.7} ${x + 0.5},${y + dy}`,
  ];
}

/* ══════════════════════════════════════════════
   Animation Component
   Total duration ≈ 7 s
   Phase 1 (0–1.8 s) : two circles → yin-yang body
   Phase 1b (1.8 s)  : contrasting dots pop in
   Phase 2 (2.8–4 s) : doubling cycles 1-5
   Phase 3 (4–6 s)   : bilayer cycles 6-10
   Phase 4 (6.5 s)   : fly to h1
   ══════════════════════════════════════════════ */
export default function LandingAnimation({ width = W, height = H }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const plan = [
      [1,    50],   // yin-yang morph start
      [2,  1800],   // contrasting dots pop in (NEW)
      [3,  2800],   // cycle 1: 4 circles
      [4,  3100],   // cycle 2: 8
      [5,  3400],   // cycle 3: 16
      [6,  3700],   // cycle 4: 32
      [7,  4000],   // cycle 5: 64
      [8,  4300],   // cycle 6: bilayer grouping
      [9,  4500],   // cycle 7: bilayer settling
      [10, 4700],   // cycle 8: tails + text wipe
      [11, 5200],   // cycle 9: text wipe finishing
      [12, 6000],   // pause — 500ms before fly
      [13, 6500],   // fly to h1
    ];
    const ids = plan.map(([s, t]) => setTimeout(() => setStep(s), t));
    return () => ids.forEach(clearTimeout);
  }, []);

  const showYY = step >= 1 && step <= 2;
  const bilayer = step >= 8;
  const showTails = step >= 10;
  const flyToH1 = step >= 13;
  const vis =
    step <= 2 ? 2 :
    step === 3 ? 4 :
    step === 4 ? 8 :
    step === 5 ? 16 :
    step === 6 ? 32 :
    TOTAL;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Clip path for left-to-right name reveal */}
      <defs>
        <clipPath id="name-clip">
          {showTails && (
            <motion.rect
              x={CX - 190}
              y={CY - 20}
              height={34}
              initial={{ width: 0 }}
              animate={{ width: 380 }}
              transition={{ duration: 0.75, delay: 0.3, ease: 'easeIn' }}
            />
          )}
        </clipPath>
      </defs>

      {/* ── Main group: circles + tails + name — flies to h1 at final step ── */}
      <motion.g
        style={{ transformOrigin: `${CX}px ${CY}px` }}
        animate={flyToH1 ? { y: -120, scale: 0.5 } : { y: 0, scale: 1 }}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ── animated circles ── */}
        {Array.from({ length: TOTAL }, (_, i) => {
          let cx, cy, r, opacity, fill;

          if (i >= vis) {
            // hidden
            cx = CX; cy = CY; r = 0; opacity = 0; fill = PURPLE;
          } else if (step <= 2) {
            // yin-yang phase — 2 large circles
            const apart = step === 0;
            cx = apart ? (i === 0 ? CX - 120 : CX + 120) : CX;
            cy = apart
              ? CY
              : i === 0 ? CY - YY_R * 0.45 : CY + YY_R * 0.45;
            r = 26;
            opacity = apart ? 1 : 0;
            fill = i === 0 ? INK : PAPER;
          } else if (bilayer) {
            // membrane phase
            const m = MEMBRANE[i];
            cx = m.x; cy = m.y; r = 3; opacity = 1;
            fill = i < TOTAL / 2 ? PURPLE : SKY;
          } else {
            // multiplication spiral
            const s = SPIRAL[i];
            cx = s.x; cy = s.y; r = 7; opacity = 1;
            fill = i < TOTAL / 2 ? PURPLE : SKY;
          }

          return (
            <motion.circle
              key={i}
              initial={false}
              animate={{ cx, cy, r, opacity, fill }}
              transition={{ type: 'spring', stiffness: 100, damping: 14 }}
              stroke={step >= 3 ? '#00000018' : INK}
              strokeWidth={step <= 2 ? 1.5 : 0.5}
            />
          );
        })}

        {/* ── phospholipid tails ── */}
        {showTails &&
          MEMBRANE.map((p, i) => {
            if (i >= TOTAL) return null;
            return tailD(p.x, p.y, p.dir).map((d, j) => (
              <motion.path
                key={`t${i}-${j}`}
                d={d}
                fill="none"
                stroke={TAIL_CLR}
                strokeWidth={1.2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 0.4, delay: i * 0.006 }}
              />
            ));
          })}

        {/* ── Name text wipe ── */}
        {showTails && (
          <text
            x={CX}
            y={CY + 8}
            textAnchor="middle"
            clipPath="url(#name-clip)"
            fontSize={24}
            fontWeight={700}
            fill={INK}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.05em"
          >
            Romuald Francis Yang
          </text>
        )}
      </motion.g>

      {/* ── yin-yang overlay (outside main group) ── */}
      <g transform={`translate(${CX},${CY})`}>
        <motion.g
          initial={{ opacity: 0, rotate: -90 }}
          animate={{
            opacity: showYY ? 1 : 0,
            rotate: showYY ? 0 : step < 1 ? -90 : 90,
          }}
          transition={{ duration: showYY ? 1.8 : 0.35 }}
        >
          <circle r={YY_R} fill={PAPER} stroke={INK} strokeWidth={2} />
          <path d={YY_D} fill={INK} />
          {/* contrasting dots pop in at step 2 */}
          {/* top dot: sits in the dark (INK) half → PAPER fill for contrast */}
          <motion.circle
            cx={0}
            cy={-YY_R / 2}
            fill={INK}
            stroke={INK}
            strokeWidth={1}
            initial={{ r: 0 }}
            animate={{ r: step >= 2 ? 9 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          />
          {/* bottom dot: sits in the light (PAPER) half → INK fill for contrast */}
          <motion.circle
            cx={0}
            cy={YY_R / 2}
            fill={PAPER}
            stroke={PAPER}
            strokeWidth={1}
            initial={{ r: 0 }}
            animate={{ r: step >= 2 ? 9 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          />
        </motion.g>
      </g>
    </svg>
  );
}
