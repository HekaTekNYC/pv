// src/data/lp-products-data.ts
import type { ProductSlug } from "./products";

type LandingCard = {
  title: string;
  image: string;
  alt: string;
  slug: ProductSlug; 
  blurb?: string;
};

export const landingProductsData: LandingCard[] = [
  {
    title: "Draperies",
    image: "/images/lp-drapery.webp",
    alt: "Neutral drapery in dining room",
    slug: "draperies",
    blurb: "Soft, elegant panels with superior insulation and light control.",
  },
  {
    title: "Roman Shades",
    image: "/images/lp-roman.webp",
    alt: "Roman shades in living room",
    slug: "roman-shades",
    blurb: "Tailored folds, luxe fabrics, and smooth operation.",
  },
  {
    title: "Roller Shades",
    image: "/images/lp-roller.webp",
    alt: "Modern roller shades",
    slug: "roller-shades",
    blurb: "Minimal profile, sheer-to-blackout control, easy to live with.",
  },
  {
    title: "Cellular Shades",
    image: "/images/lp-cellular.webp",
    alt: "Cellular shades filtering light",
    slug: "cellular-shades",
    blurb: "Energy-smart honeycomb design with great insulation.",
  },
  {
    title: "Wood & Faux Blinds",
    image: "/images/lp-wood-blinds.webp",
    alt: "Wood blinds in office",
    slug: "wood-faux-blinds",
    blurb: "Classic slat control for light and privacy with timeless style.",
  },
  {
    title: "Shutters",
    image: "/images/lp-shutters.webp",
    alt: "Plantation shutters in sunroom",
    slug: "shutters",
    blurb: "Architectural, durable, and custom-fitted to your windows.",
  },
  {
    title: "Sheer & Layered Shades",
    image: "/images/lp-sheer.webp",
    alt: "Sheer layered shades",
    slug: "sheer-layered",
    blurb: "Variable light from soft diffusion to private blackout.",
  },
  {
    title: "Natural Woven Shades",
    image: "/images/lp-woven.webp",
    alt: "Woven wood shades",
    slug: "natural-woven",
    blurb: "Organic texture in renewable materials like bamboo & grasses.",
  },
  {
    title: "Exterior Shades",
    image: "/images/lp-exterior.webp",
    alt: "Exterior solar shades",
    slug: "exterior-shades",
    blurb: "Block heat before it hits the glass. Patio-perfect.",
  },
];
