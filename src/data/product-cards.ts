// src/data/product-cards.ts
import type { ProductSlug } from "./products";

export type Card = {
  id: number;
  slug: ProductSlug;
  title: string;
  text: string;
  icon: { src: string; alt: string; width: number; height: number };
  blob: { src: string; alt: string; width: number; height: number };
  ariaLabel: string;
};

export const productChoosingCards: Card[] = [
  {
    id: 1,
    slug: "roman-shades",
    title: "Roman Shades",
    text: "Elegant fabric shades that fold into neat pleats when raised. Available in various opacities from sheer to blackout with multiple fold styles.",
    icon: {
      src: "/icons/product-light-control.svg",
      alt: "Light control icon showing adjustable window slats",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about Roman shades options for window treatments",
  },
  {
    id: 2,
    slug: "roller-shades",
    title: "Roller Shades",
    text: "Simple, modern shades that roll around a tube. Available in numerous fabrics from sheer to blackout with various control options.",
    icon: {
      src: "/icons/product-energy-efficiency.svg",
      alt: "Energy efficiency icon showing a leaf and power symbol",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about roller shades options for window treatments",
  },
  {
    id: 3,
    slug: "cellular-shades",
    title: "Cellular Shades",
    text: "Energy-efficient shades with honeycomb cells that trap air. Provide excellent insulation and available in single, double, or triple cell constructions.",
    icon: {
      src: "/icons/product-privacy-needs.svg",
      alt: "Privacy needs icon showing a person behind window coverings",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about cellular shades options for energy efficiency",
  },
  {
    id: 4,
    slug: "wood-faux-blinds",
    title: "Wood/Faux Blinds",
    text: "Classic horizontal slat blinds in real wood or faux wood materials. Offer precise light control and timeless styling for various decors.",
    icon: {
      src: "/icons/product-style-design.svg",
      alt: "Style and design icon showing color swatches and fabric samples",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about wood and faux wood blinds options",
  },
  {
    id: 5,
    slug: "shutters",
    title: "Shutters",
    text: "Permanent window treatments with movable louvers in solid wood or composite materials. Provide excellent durability and timeless appeal.",
    icon: {
      src: "/icons/product-light-control.svg",
      alt: "Light control icon showing adjustable window slats",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about shutter options for window treatments",
  },
  {
    id: 6,
    slug: "draperies",
    title: "Draperies",
    text: "Fabric panels that hang from tracks or rods. Offer superior insulation, light control, and decorative flexibility for formal and casual spaces.",
    icon: {
      src: "/icons/product-style-design.svg",
      alt: "Style and design icon showing fabric drapes",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about drapery options for window treatments",
  },
  {
    id: 7,
    slug: "exterior-shades",
    title: "Exterior Shades",
    text: "Outdoor shading systems that block heat before it enters windows. Include motorized roller shades, awnings, and solar screens for energy savings.",
    icon: {
      src: "/icons/product-energy-efficiency.svg",
      alt: "Energy efficiency icon showing sun protection",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about exterior shade options for energy efficiency",
  },
  {
    id: 8,
    slug: "sheer-layered",
    title: "Sheer/Layered Shades",
    text: "Layered shade systems combining sheer fabrics with room-darkening materials. Provide variable light control and privacy throughout the day.",
    icon: {
      src: "/icons/product-light-control.svg",
      alt: "Light control icon showing layered fabrics",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about sheer and layered shade options",
  },
  {
    id: 9,
    slug: "natural-woven",
    title: "Natural Woven Shades",
    text: "Eco-friendly shades made from renewable materials like bamboo, grasses, and reeds. Provide organic texture and soft light filtering.",
    icon: {
      src: "/icons/product-style-design.svg",
      alt: "Natural materials icon showing woven texture",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-choosing-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
    ariaLabel: "Learn about natural woven shade options",
  },
];
