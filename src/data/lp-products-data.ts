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
    image: "/images/blinds.png",
    alt: "Stack of windows with blinds and cellular shades",
    href: "/products/blinds",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Natural Shades",
    image: "/images/natural-shades.png",
    alt: "Woven wood shades in a hallway",
    href: "/products/natural-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Drapery",
    image: "/images/drapery.png",
    alt: "Neutral drapery in dining room",
    href: "/products/drapery",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Shutters",
    image: "/images/shutters.png",
    alt: "Plantation shutters in bathroom",
    href: "/products/shutters",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Motorization",
    image: "/images/motorization.png",
    alt: "Motorized cellular shade close-up",
    href: "/products/motorization",
    blurb: "App control, voice, and scenes—safer, smarter light control.",
  },
  {
    title: "Exterior Shades",
    image: "/images/exterior-shades.png",
    alt: "Exterior shades on patio doors",
    href: "/products/exterior-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
];
