// Iron sheet count. Effective cover is the width each sheet really covers once neighbours overlap.
// Cover widths are manufacturer figures for common Mabati Rolling Mills sheets (see the iron sheets guide).
export const MAX_ROOF_M = 200;

export const profiles = [
  { id: "corrugated", label: "Corrugated", cover: 0.762 },
  { id: "box", label: "Box profile", cover: 1.015 },
] as const;
export type ProfileId = (typeof profiles)[number]["id"];

const clamp = (typed: string) => Math.min(Math.max(Number(typed) || 0, 0), MAX_ROOF_M);

// width = roof width along the ridge (m), run = ridge to eaves incl. overhang (m), sides = roof faces (1 mono-pitch, 2 gable)
export function sheetEstimate(width: string, run: string, profile: ProfileId, sides: 1 | 2) {
  const w = clamp(width);
  const r = clamp(run);
  const cover = profiles.find((p) => p.id === profile)!.cover;
  const perSide = w > 0 && r > 0 ? Math.ceil(w / cover) : 0;
  const sheets = perSide * sides;
  return {
    width: w,
    run: r,
    cover,
    perSide,
    sheets,
    spare: sheets > 0 ? Math.max(2, Math.ceil(sheets * 0.03)) : 0,
    area: Math.round(w * r * sides * 10) / 10,
    tooBig: Number(width) > MAX_ROOF_M || Number(run) > MAX_ROOF_M,
  };
}
