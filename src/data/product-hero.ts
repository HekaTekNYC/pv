// data/product-hero.ts
import { getCloudinarySrc } from "../config/cloudinary";

export interface ProductHeroData {
  slug: string;
  title: string;
  subtitle?: string;
  specs: {
    term: string;
    value: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
  image: {
    webp: string;
    png: string;
    alt: string;
    width: number;
    height: number;
  };
}

// Helper function for Cloudinary images
function createCloudinaryHeroImage(
  publicId: string,
  alt: string,
  width: number,
  height: number,
) {
  return {
    webp: getCloudinarySrc(publicId, "webp"),
    png: getCloudinarySrc(publicId, "png"),
    alt,
    width,
    height,
  };
}

export const productHeroData: Record<string, ProductHeroData> = {
  "roman-shades": {
    slug: "roman-shades",
    title: "Roman Shades",
    subtitle: "Elegant fabric folds with timeless appeal",
    specs: [
      { term: "Style", value: "Flat, hobbled, or relaxed folds" },
      { term: "Light Control", value: "Sheer to blackout options" },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Best For", value: "Living rooms, bedrooms, dining rooms" },
    ],
    cta: {
      label: "Get Roman Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "roman1_torpl3",
      "Beautiful Roman shades in an elegant living room",
      600,
      750,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Roller Shades",
    subtitle: "Clean, minimalist profiles with precise light control",
    specs: [
      { term: "Style", value: "Sleek, modern roll-up design" },
      { term: "Light Control", value: "Sheer, solar, dim-out, or blackout" },
      { term: "Operation", value: "Chain, cordless, or motorized" },
      { term: "Best For", value: "Kitchens, offices, modern spaces" },
    ],
    cta: {
      label: "Get Roller Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "roller_hero_nwvlw9",
      "Modern roller shades in a contemporary setting",
      600,
      750,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Cellular Shades",
    subtitle: "Energy-efficient honeycomb design for ultimate comfort",
    specs: [
      { term: "Style", value: "Honeycomb cellular construction" },
      { term: "Light Control", value: "Single, double, or blackout cells" },
      { term: "Operation", value: "Top-down/bottom-up, cordless, motorized" },
      { term: "Best For", value: "Bedrooms, energy-efficient homes" },
    ],
    cta: {
      label: "Get Cellular Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "cellular-1_m1tvtc",
      "Energy-efficient cellular shades in a bedroom",
      600,
      750,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Wood & Faux Wood Blinds",
    subtitle: "Classic slatted style with modern performance",
    specs: [
      { term: "Style", value: '2" or 2.5" slats, real or faux wood' },
      { term: "Light Control", value: "Adjustable slats, routeless option" },
      { term: "Operation", value: "Cordless tilt, motorized options" },
      { term: "Best For", value: "Living rooms, bathrooms, kitchens" },
    ],
    cta: {
      label: "Get Wood Blinds Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "faux-hero_l3dnhj",
      "Wood blinds in a traditional home setting",
      600,
      750,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "Shutters",
    subtitle: "Architectural elegance with lasting durability",
    specs: [
      { term: "Style", value: "Plantation style, various louver sizes" },
      { term: "Light Control", value: "Adjustable louvers, full privacy" },
      { term: "Operation", value: "Tilt rod, hidden tilt, or motorized" },
      { term: "Best For", value: "Living rooms, sunrooms, historic homes" },
    ],
    cta: {
      label: "Get Shutters Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "shutters_hero1_ncxjtc",
      "Plantation shutters in a bright room",
      600,
      750,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Draperies",
    subtitle: "Luxurious fabric treatments for elegant spaces",
    specs: [
      { term: "Style", value: "Pinch pleat, grommet, ripplefold" },
      { term: "Light Control", value: "Sheer to blackout with linings" },
      { term: "Operation", value: "Manual traverse or motorized" },
      { term: "Best For", value: "Formal living rooms, dining rooms" },
    ],
    cta: {
      label: "Get Draperies Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "draperies_hero_ijpnmt",
      "Elegant draperies in a formal room",
      600,
      750,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Exterior Shades",
    subtitle: "Block heat before it enters your home",
    specs: [
      { term: "Style", value: "Outdoor-rated solar screens" },
      { term: "Light Control", value: "1-10% openness for view preservation" },
      { term: "Operation", value: "Manual crank or motorized" },
      { term: "Best For", value: "Patios, sunrooms, west-facing windows" },
    ],
    cta: {
      label: "Get Exterior Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "exterior_4_doy4sh",
      "Exterior shades on a patio or balcony",
      600,
      750,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Sheer & Layered Shades",
    subtitle: "Modern elegance with versatile light control",
    specs: [
      { term: "Style", value: "Layered bands or sheer vanes" },
      { term: "Light Control", value: "Sheer views to complete privacy" },
      { term: "Operation", value: "Cordless or motorized" },
      { term: "Best For", value: "Modern living spaces, offices" },
    ],
    cta: {
      label: "Get Sheer Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "sheer_hero_ug6gul",
      "Sheer layered shades in a contemporary room",
      600,
      750,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Natural Woven Shades",
    subtitle: "Organic textures with eco-friendly appeal",
    specs: [
      { term: "Style", value: "Bamboo, grasses, reeds, and woods" },
      { term: "Light Control", value: "Soft filtered light, privacy liners" },
      { term: "Operation", value: "Cordless, top-down/bottom-up" },
      { term: "Best For", value: "Casual spaces, sunrooms, eco-homes" },
    ],
    cta: {
      label: "Get Natural Shades Pricing",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "natural_benefits_xkcxnr",
      "Natural woven shades adding texture to a room",
      600,
      750,
    ),
  },
};

export function getProductHero(slug: string): ProductHeroData | null {
  return productHeroData[slug] ?? null;
}

export function getAllProductHeroSlugs(): string[] {
  return Object.keys(productHeroData);
}
