// src/data/product-categories.ts
import type { ProductSlug } from "./products";

export type ProductCategory = {
  slug: ProductSlug;
  title: string;
  blurb: string;
  image: string; 
};

export const productCategories: ProductCategory[] = [
  {
    slug: "roman-shades",
    title: "Roman Shades",
    blurb: "Tailored fabric folds with classic, soft style.",
    image: "/images/products-roman.webp",
  },
  {
    slug: "roller-shades",
    title: "Roller Shades",
    blurb: "Clean profiles, powerful light control, zero fuss.",
    image: "/images/products-roller.webp",
  },
  {
    slug: "cellular-shades",
    title: "Cellular Shades",
    blurb: "Honeycomb insulation for comfort and efficiency.",
    image: "/images/products-cellular.webp",
  },
  {
    slug: "wood-faux-blinds",
    title: "Wood & Faux Wood Blinds",
    blurb: "Precise light control with timeless slatted style.",
    image: "/images/products-wood-faux.webp",
  },
  {
    slug: "shutters",
    title: "Shutters",
    blurb: "Architectural louvers with lasting durability.",
    image: "/images/products-shutters.webp",
  },
  {
    slug: "draperies",
    title: "Draperies",
    blurb: "Luxurious fabrics with full custom styling.",
    image: "/images/products-draperies.webp",
  },
  {
    slug: "exterior-shades",
    title: "Exterior Shades",
    blurb: "Block heat outside for cooler interiors.",
    image: "/images/products-exterior.webp",
  },
  {
    slug: "sheer-layered",
    title: "Sheer & Layered Shades",
    blurb: "Sheer views with on-demand privacy.",
    image: "/images/products-sheer.webp",
  },
  {
    slug: "natural-woven",
    title: "Natural Woven Shades",
    blurb: "Organic textures in renewable materials.",
    image: "/images/products-natural-woven.webp",
  },
];
