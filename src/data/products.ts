// Single source of truth for valid product slugs.
export const PRODUCT_SLUGS = [
  "roman-shades",
  "roller-shades",
  "cellular-shades",
  "wood-faux-blinds",
  "shutters",
  "draperies",
  "exterior-shades",
  "sheer-layered",
  "natural-woven",
  // "motorization",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];
