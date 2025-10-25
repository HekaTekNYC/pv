const CLOUDINARY_BASE =
  "https://res.cloudinary.com/ds2oztufv/image/upload/f_auto,q_auto";

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
    image: `${CLOUDINARY_BASE}/v1761428610/lp-blinds_qh2bvx.png`,
    alt: "Stack of windows with blinds and cellular shades",
    href: "/products/blinds",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Natural Shades",
    image: `${CLOUDINARY_BASE}/v1761429058/lp-natural-shades_xt5djz.png`,
    alt: "Woven wood shades in a hallway",
    href: "/products/natural-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Drapery",
    image: `${CLOUDINARY_BASE}/v1761429595/lp-drapery_j7mokb.png`,
    alt: "Neutral drapery in dining room",
    href: "/products/drapery",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Shutters",
    image: `${CLOUDINARY_BASE}/v1761429840/lp-shutters_xaxot5.png`,
    alt: "Plantation shutters in bathroom",
    href: "/products/shutters",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
  {
    title: "Motorization",
    image: `${CLOUDINARY_BASE}/v1761429945/lp-motorized_g0ldur.png`,
    alt: "Motorized cellular shade close-up",
    href: "/products/motorization",
    blurb: "App control, voice, and scenes—safer, smarter light control.",
  },
  {
    title: "Exterior Shades",
    image: `${CLOUDINARY_BASE}/v1761430077/lp-exterior_pqhl3p.png`,
    alt: "Exterior shades on patio doors",
    href: "/products/exterior-shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
  },
];
