// Rough quantities for walling blocks and concrete. Textbook rules of thumb, shown on the page with their assumptions.
// Steel is not estimated here: it comes from the structural drawings.
export const MAX_DIM = 1000;
export const BLOCKS_PER_M2 = 12.5; // 400 x 200 mm block face, so 1 / 0.08 m², joints ignored (slightly generous)
export const WASTE = 0.05; // breakage and cutting
export const DRY_FACTOR = 1.54; // dry volume of materials needed per 1 m³ of wet concrete
export const CEMENT_KG_PER_M3 = 1440; // bulk density of cement
export const BAG_KG = 50;

export const mixes = [
  { id: "1:1.5:3", label: "1 : 1.5 : 3 (columns, beams, slabs)", parts: [1, 1.5, 3] },
  { id: "1:2:4", label: "1 : 2 : 4 (slabs, general)", parts: [1, 2, 4] },
  { id: "1:3:6", label: "1 : 3 : 6 (blinding, mass fill)", parts: [1, 3, 6] },
] as const;
export type MixId = (typeof mixes)[number]["id"];

const num = (typed: string) => Math.min(Math.max(Number(typed) || 0, 0), MAX_DIM);

// Machine-cut or concrete blocks, 400 x 200 face. length and height in metres, openings (doors and windows) in m².
export function blockEstimate(length: string, height: string, openings: string) {
  const area = Math.max(num(length) * num(height) - num(openings), 0);
  const net = Math.round(area * BLOCKS_PER_M2);
  return { area: Math.round(area * 10) / 10, net, blocks: Math.ceil(net * (1 + WASTE)) };
}

// Volume of concrete in m³.
export function concreteEstimate(volume: string, mix: MixId) {
  const v = num(volume);
  const parts = mixes.find((m) => m.id === mix)!.parts;
  const sum = parts[0] + parts[1] + parts[2];
  const dry = v * DRY_FACTOR * (1 + WASTE);
  const cementKg = (dry * parts[0]) / sum * CEMENT_KG_PER_M3;
  const r = (x: number) => Math.round(x * 100) / 100;
  return { volume: v, bags: Math.ceil(cementKg / BAG_KG), sand: r((dry * parts[1]) / sum), ballast: r((dry * parts[2]) / sum) };
}
