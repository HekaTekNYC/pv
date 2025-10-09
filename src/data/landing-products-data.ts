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
    image: "/images/Card1.png",
    alt: "Stack of windows with blinds and cellular shades",
    href: "/products/blinds",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Natural Shades",
    image: "/images/Card3.png",
    alt: "Woven wood shades in a hallway",
    href: "/products/natural-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Drapery",
    image: "/images/Card3.png",
    alt: "Neutral drapery in dining room",
    href: "/products/drapery",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Shutters",
    image: "/images/Card4.png",
    alt: "Plantation shutters in bathroom",
    href: "/products/shutters",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Motorization",
    image: "/images/Card5.png",
    alt: "Motorized cellular shade close-up",
    href: "/products/motorization",
    blurb: "App control, voice, and scenes—safer, smarter light control.",
  },
  {
    title: "Exterior Shades",
    image: "/images/Card6.png",
    alt: "Exterior shades on patio doors",
    href: "/products/exterior-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
];
