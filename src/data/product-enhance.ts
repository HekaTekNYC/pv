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
      "Crafted from a single fabric panel with hidden rods, Roman shades fold into neat pleats when raised. Choose flat, hobbled, or relaxed styles to match your décor. Available in light-filtering or blackout fabrics with corded, cordless, or motorized operation for precise light control and convenience.",
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
      "Roller shades feature clean, minimalist profiles and precise light control, ideal for modern interiors and sun-sensitive rooms.",
    description:
      "Using a simple roll-up mechanism, roller shades disappear completely into their housing when raised. Choose fabrics from sheer to blackout for glare reduction and UV protection. Optional cassette valances add a finished look, while motorized or smart-home integration offers effortless control.",
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
      "Cellular shades combine energy efficiency with smooth operation, featuring a honeycomb design that traps air for superior insulation.",
    description:
      "The unique cellular structure creates insulating air pockets that reduce heat transfer through windows. Top-down/bottom-up functionality offers flexible light control while maintaining privacy. Available in single, double, or triple cells for enhanced energy performance in any climate.",
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
      "Wood and faux wood blinds offer timeless appeal with precise slat control, bringing natural warmth and durability to any room.",
    description:
      "Real basswood blinds showcase rich grain and lightweight handling, perfect for living areas and bedrooms. Faux wood alternatives resist moisture and warping, ideal for kitchens and baths. Routeless designs reduce light gaps, while motorized tilt adds modern convenience to a classic look.",
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
      "Shutters bring architectural character and enduring value with adjustable louvers and a built-in, custom-fit design.",
    description:
      "Crafted from premium wood or composite materials, shutters are tailored to each window for a flawless fit. Adjustable louvers offer precise light control and privacy, while divider rails allow independent upper and lower section movement. Their durable construction and timeless style make them a long-term investment in your home’s beauty.",
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
      "Draperies provide luxurious texture and superior insulation, creating elegant focal points that elevate any room.",
    description:
      "Custom fabric panels offer limitless style possibilities—from casual linen to formal silk. Choose pinch pleat, grommet, or ripplefold headers to suit your décor. Blackout linings deliver full light blocking, while interlining adds thermal comfort. Motorized traverse rods enable smooth, whisper-quiet movement with smart-home compatibility.",
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
      "Exterior shades block heat and glare before they reach the glass, reducing cooling costs and extending outdoor comfort.",
    description:
      "Outdoor-rated solar screens block up to 90% of solar heat gain while preserving exterior views. Heavy-duty hardware withstands wind and weather, with side channels for added stability. Motorized control with sun and wind sensors provides automatic protection. Ideal for patios, decks, and large sun-facing windows.",
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
      "Sheer and layered shades deliver flexible light control, transitioning smoothly between soft diffusion and privacy with modern elegance.",
    description:
      "Alternating sheer and solid bands shift for privacy or align for outside views. Sheer shadings include horizontal vanes suspended between two sheer panels that tilt for light modulation. Both styles offer UV protection while preserving daylight. Motorized operation ensures precise alignment and smooth, quiet motion.",
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
      "Natural woven shades introduce organic texture and sustainable craftsmanship, creating warm, diffused light with eco-friendly appeal.",
    description:
      "Handcrafted from renewable materials such as bamboo, grasses, and reeds, each shade showcases distinctive natural variation. Optional liners add privacy without concealing texture, and edge bindings increase durability and contrast. Available in Roman or roller styles with top-down/bottom-up functionality for flexible control.",
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
