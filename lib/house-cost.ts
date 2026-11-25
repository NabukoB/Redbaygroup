// Published building-cost guide for Nairobi and Central, from the Institute of Quantity Surveyors of Kenya (IQSK)
// figures reported by Construction Kenya on 19 Oct 2025. A guide only, not a Redbay rate or a quote.
export const MAX_AREA = 2000;

export const tiers = [
  { id: "standard", label: "Standard bungalow", perM2: 48750 },
  { id: "luxury", label: "Luxury maisonette", perM2: 84000 },
] as const;
export type TierId = (typeof tiers)[number]["id"];

export const sizes = [
  { label: "2 bedrooms · 80 m²", m2: 80 },
  { label: "3 bedrooms · 120 m²", m2: 120 },
  { label: "4 bedrooms · 180 m²", m2: 180 },
  { label: "5 bedrooms · 250 m²", m2: 250 },
] as const;

export function houseEstimate(typed: string, tier: TierId) {
  const area = Math.min(Math.max(Number(typed) || 0, 0), MAX_AREA);
  const perM2 = tiers.find((t) => t.id === tier)!.perM2;
  return { area, perM2, total: area * perM2, tooBig: Number(typed) > MAX_AREA };
}
