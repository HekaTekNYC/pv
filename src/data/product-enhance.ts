// src/data/product-enhance-data.ts
import { getCloudinarySrc } from "../config/cloudinary";

export interface EnhanceImage {
  webp: string;
  png: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductEnhanceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: EnhanceImage;
}

// Helper function to create Cloudinary image objects
function createCloudinaryImage(
  publicId: string,
  alt: string,
  width: number,
  height: number,
): EnhanceImage {
  return {
    webp: getCloudinarySrc(publicId, "webp"),
    png: getCloudinarySrc(publicId, "png"),
    alt,
    width,
    height,
  };
}

export const productEnhanceData: Record<string, ProductEnhanceData> = {
  "roman-shades": {
    slug: "roman-shades",
    title: "How Roman Shades Enhance Your Space",
    subtitle:
      "Roman shades combine drapery softness with shade functionality, offering tailored folds and fabric options for versatile style and comfort.",
    description:
      "Crafted from a single fabric panel with hidden rods, Roman shades fold into neat pleats when raised. Choose from flat, hobbled, or relaxed styles to match your decor. Available in light-filtering or blackout fabrics with corded, cordless, or motorized operation for perfect light control and convenience.",
    image: createCloudinaryImage(
      "roman_enhance_cyrwte",
      "Elegant Roman shades enhancing a living room with soft folds",
      1024,
      576,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "How Roller Shades Enhance Your Space",
    subtitle:
      "Roller shades provide clean, minimalist profiles with precise light control, making them ideal for modern interiors and sun-sensitive rooms.",
    description:
      "Featuring a simple roll-up mechanism, roller shades disappear completely into their roller when open. Choose from sheer to blackout fabrics for glare reduction and UV protection. Optional cassette valances create a finished look, while motorized options offer smart home integration for ultimate convenience.",
    image: createCloudinaryImage(
      "roller_enhance_tadc9y",
      "Sleek roller shades in a contemporary office space",
      1024,
      576,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "How Cellular Shades Enhance Your Space",
    subtitle:
      "Cellular shades combine energy efficiency with versatile operation, featuring honeycomb construction that traps air for superior insulation.",
    description:
      "The unique cellular design creates insulating air pockets that reduce heat transfer through windows. Top-down/bottom-up operation allows flexible light control while maintaining privacy. Available in single, double, or triple cells for maximum energy savings in any climate.",
    image: createCloudinaryImage(
      "cellular_enhance1_b6fsgc",
      "Cellular shades providing insulation in a bedroom setting",
      1024,
      576,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "How Wood & Faux Wood Blinds Enhance Your Space",
    subtitle:
      "Wood and faux wood blinds offer timeless style with precise slat control, bringing natural warmth or durable performance to any room.",
    description:
      "Real basswood blinds provide rich grain and lightweight operation, perfect for living areas and bedrooms. Faux wood options resist moisture and warping, making them ideal for kitchens and bathrooms. Routeless designs eliminate light gaps, while motorized tilt systems offer modern convenience with classic appeal.",
    image: createCloudinaryImage(
      "faux-enhance_w50df0",
      "Wood blinds enhancing a traditional home office",
      1024,
      576,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "How Shutters Enhance Your Space",
    subtitle:
      "Shutters provide architectural character and permanent value with adjustable louver control and built-in appeal that elevates any window.",
    description:
      "Custom-crafted from premium woods or composite materials, shutters fit your exact window dimensions. Adjustable louvers offer precise light control while maintaining privacy. Divider rails allow independent upper and lower section operation. Their durable construction and timeless style make them a long-term investment in your home's beauty.",
    image: createCloudinaryImage(
      "shutters_1_ubl8dx",
      "Plantation shutters enhancing a bright sunroom",
      1024,
      576,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "How Draperies Enhance Your Space",
    subtitle:
      "Draperies deliver luxurious fabric presence with superior insulation and light control, creating elegant focal points in any room.",
    description:
      "Custom fabric panels offer endless style possibilities from casual linen to formal silk. Choose from pinch pleat, grommet, or ripplefold headers to match your decor. Blackout linings provide complete light blocking, while interlining adds thermal insulation. Motorized traverse rods enable smooth, effortless operation with smart home compatibility.",
    image: createCloudinaryImage(
      "draperies_enhance2_ftdcdv",
      "Elegant draperies enhancing a formal living room",
      1024,
      576,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "How Exterior Shades Enhance Your Space",
    subtitle:
      "Exterior shades block heat and glare before they enter your home, significantly reducing cooling costs and extending outdoor living comfort.",
    description:
      "Outdoor-rated solar screens stop up to 90% of solar heat gain while maintaining your view. Heavy-duty hardware withstands wind and weather, with side channels ensuring stability. Motorized operation with sun and wind sensors provides automatic protection. Perfect for patios, decks, and large windows facing intense sun exposure.",
    image: createCloudinaryImage(
      "exterior_3_k6ni5s",
      "Exterior shades protecting a patio from sun glare",
      1024,
      576,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "How Sheer & Layered Shades Enhance Your Space",
    subtitle:
      "Sheer layered shades offer dynamic light control, transitioning seamlessly between soft diffusion and complete privacy with a modern, sophisticated look.",
    description:
      "Alternating sheer and solid bands create versatile viewing options—shift for privacy or align for outside views. Sheer shadings feature horizontal vanes between two sheer panels, tilting for light control. Both styles provide excellent UV protection while maintaining natural daylight. Motorized options ensure precise alignment and smooth operation.",
    image: createCloudinaryImage(
      "sheer_enhance3_dep5a1",
      "Sheer layered shades in a modern living area",
      1024,
      576,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "How Natural Woven Shades Enhance Your Space",
    subtitle:
      "Natural woven shades bring organic texture and sustainable materials to your space, creating warm, diffused light with eco-friendly appeal.",
    description:
      "Handcrafted from renewable materials like bamboo, grasses, and reeds, each shade features unique natural variations. Optional liners provide privacy while preserving the material's texture. Edge bindings add durability and contrast. Available in Roman or roller styles with top-down/bottom-up operation for flexible light management.",
    image: createCloudinaryImage(
      "natural_enhance_eohwr6",
      "Natural woven shades adding texture to a cozy room",
      1024,
      576,
    ),
  },
};

// Helper functions
export function getProductEnhance(slug: string): ProductEnhanceData | null {
  return productEnhanceData[slug] ?? null;
}

export function getAllEnhanceSlugs(): string[] {
  return Object.keys(productEnhanceData);
}

export function getAllProductEnhance(): ProductEnhanceData[] {
  return Object.values(productEnhanceData);
}
