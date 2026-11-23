// Perimeter wall estimate. Kept separate from the page so it can be tested.
export const WALL_RATE = 14000; // KSh per running metre: 2.4 m high wall on a 0.8 m deep foundation
export const MAX_METRES = 10000;

// Common Kenyan plot sizes, perimeter in metres (1 ft = 0.3048 m)
export const plots = [
  { label: "50 × 100 ft (⅛ acre)", m: 91 },
  { label: "100 × 100 ft (¼ acre)", m: 122 },
  { label: "100 × 200 ft (½ acre)", m: 183 },
  { label: "1 acre (square)", m: 255 },
] as const;

export const ksh = (n: number) => `KSh ${Math.round(n).toLocaleString("en-KE")}`;

// What someone typed in the box -> metres used and the estimate. Blanks and nonsense count as 0.
export function wallEstimate(typed: string) {
  const metres = Math.min(Math.max(Number(typed) || 0, 0), MAX_METRES);
  return { metres, total: metres * WALL_RATE, tooLong: Number(typed) > MAX_METRES };
}
