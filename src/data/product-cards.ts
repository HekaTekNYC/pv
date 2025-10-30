import { getCloudinarySrc } from "../config/cloudinary";
import type { ProductSlug } from "./products";

export interface ProductCards {
  slug: ProductSlug;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export const productCards: ProductCards[] = [
  // Featured
  {
    slug: "wood-faux-blinds",
    title: "Wood & Faux Wood Blinds",
    blurb: "Precise light control with timeless slatted style.",
    image: getCloudinarySrc("faux-hero_l3dnhj", "png", "v1761582768"),
    alt: "Stack of windows with blinds and cellular shades",
    featured: true,
  },
  {
    slug: "natural-woven",
    title: "Natural & Woven Shades",
    blurb:
      "Soft, versatile, and energy-efficient—woven woods bring warmth and texture to any room.",
    image: getCloudinarySrc("lp-natural-shades_xt5djz", "png", "v1761429058"),
    alt: "Woven wood shades in a hallway",
    featured: true,
  },
  {
    slug: "draperies",
    title: "Draperies",
    blurb: "Luxurious fabrics with full custom styling.",
    image: getCloudinarySrc("lp-drapery_j7mokb", "png", "v1761429595"),
    alt: "Neutral drapery in dining room",
    featured: true,
  },
  {
    slug: "shutters",
    title: "Shutters",
    blurb: "Architectural louvers with lasting durability.",
    image: getCloudinarySrc("shutters_white_dgekto", "png", "v1761838888"),
    alt: "Plantation shutters in bathroom",
    featured: true,
  },
  // {
  //   slug: "motorization",
  //   title: "Motorization",
  //   blurb:
  //     "Add motorization for effortless control, modern convenience, and smart living.",
  //   image: getCloudinarySrc("lp-motorized_g0ldur", "png", "v1761429945"),
  //   alt: "Motorized cellular shade close-up",
  //   featured: true,
  // },
  {
    slug: "exterior-shades",
    title: "Exterior Shades",
    blurb: "Block heat outside for cooler interiors.",
    image: getCloudinarySrc("lp-exterior_pqhl3p", "png", "v1761430077"),
    alt: "Exterior shades on patio doors",
    featured: true,
  },
  {
    slug: "roman-shades",
    title: "Roman Shades",
    blurb: "Tailored fabric folds with classic, soft style.",
    image: getCloudinarySrc("card-roman-shades_qmgthb", "png", "v1761582080"),
    alt: "Tailored Roman shades in a bedroom",
    featured: true,
  },
  {
    slug: "roller-shades",
    title: "Roller & Solar Shades",
    blurb: "Clean profiles, powerful light control, zero fuss.",
    image: getCloudinarySrc("card-roller_awg70w", "png", "v1761582214"),
    alt: "Modern roller shades filtering light",
  },
  {
    slug: "cellular-shades",
    title: "Cellular Shades",
    blurb: "Honeycomb insulation for comfort and efficiency.",
    image: getCloudinarySrc("card-cellular_oss5u3", "png", "v1761582367"),
    alt: "Energy-efficient cellular shades",
  },

  {
    slug: "sheer-layered",
    title: "Sheer & Layered Shades",
    blurb: "Sheer views with on-demand privacy.",
    image: getCloudinarySrc("card-sheer_hgxd9b", "png", "v1761582598"),
    alt: "Layered shades showing alternating sheer bands",
  },
];
