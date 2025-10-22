// src/data/landingProductsData.ts
export interface CategoryCard {
  title: string;
  image: string;
  alt: string;
  href: string;
  blurb?: string;
}

export const landingProductsData: CategoryCard[] = [
  {
    title: "Blinds",
    image: "/images/lp-blinds.webp",
    alt: "Stack of windows with blinds and cellular shades",
    href: "/products/blinds",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Natural Shades",
    image: "/images/lp-natural-shades.webp",
    alt: "Woven wood shades in a hallway",
    href: "/products/natural-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Drapery",
    image: "/images/lp-drapery.webp",
    alt: "Neutral drapery in dining room",
    href: "/products/drapery",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Shutters",
    image: "/images/lp-shutters.webp",
    alt: "Plantation shutters in bathroom",
    href: "/products/shutters",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Motorization",
    image: "/images/lp-motorization.webp",
    alt: "Motorized cellular shade close-up",
    href: "/products/motorization",
    blurb: "App control, voice, and scenes—safer, smarter light control.",
  },
  {
    title: "Exterior Shades",
    image: "/images/lp-exterior-shades.webp",
    alt: "Exterior shades on patio doors",
    href: "/products/exterior-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
];
