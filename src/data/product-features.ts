// src/data/product-features-data.ts
import { getCloudinarySrc } from "../config/cloudinary";

export interface FeaturesImage {
  webp: string;
  png: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductFeaturesData {
  slug: string;
  title: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  image: FeaturesImage;
}

// Helper function to create Cloudinary image objects
function createCloudinaryImage(
  publicId: string,
  alt: string,
  width: number,
  height: number,
): FeaturesImage {
  return {
    webp: getCloudinarySrc(publicId, "webp"),
    png: getCloudinarySrc(publicId, "png"),
    alt,
    width,
    height,
  };
}

export const productFeaturesData: Record<string, ProductFeaturesData> = {
  "roman-shades": {
    slug: "roman-shades",
    title: "Features of Roman Shades",
    description:
      "Roman shades deliver tailored fabric style with practical privacy and light control. Choose folds, liners, and lift systems to suit any room.",
    features: [
      "Available in light-filtering and blackout fabrics (with liner)",
      "Flat, hobbled, or relaxed fold styles",
      "Clean, compact stack when raised",
      "Corded or cordless lift options",
      "Works in both modern and traditional interiors",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "roman_features_mmitvs",
      "Roman shade close-up by a window with plant",
      630,
      560,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Features of Roller Shades",
    description:
      "Minimal profile, wide fabric library, and simple operation—roller shades handle glare, privacy, and views with ease.",
    features: [
      "Sheer, solar, dim-out, and blackout fabrics",
      "Optional fascia or cassette valances",
      "Chain or cordless control",
      "Wide widths available for large spans",
      "Excellent UV and glare reduction options",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "roller_features_yuvygf",
      "Modern roller shades filtering light",
      630,
      560,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Features of Cellular Shades",
    description:
      "Honeycomb cells help insulate windows for comfort and efficiency, with flexible privacy and light control.",
    features: [
      "Single, double, and blackout cells",
      "Top-down/bottom-up operation",
      "Strong insulation for energy savings",
      "Corded or cordless lift options",
      "Slim stack height when raised",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "cellular_features1_uxj42r",
      "Cellular shades adding insulation",
      630,
      560,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Features of Wood & Faux Wood Blinds",
    description:
      "Timeless slatted style with precise tilt control. Real wood adds warmth; faux wood resists moisture for kitchens and baths.",
    features: [
      '2" and 2½" slat sizes for different looks and views',
      "Routeless (no-holes) option to reduce light leaks",
      "Cordless lift and wand tilt for safety and simplicity",
      "Decorative tapes and valances for a finished look",
      "Faux wood resists humidity and warping in damp areas",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "faux-features_bm5isv",
      "Wood and faux wood blinds with wide slats in a bright room",
      630,
      560,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "Features of Shutters",
    description:
      "Built-in, architectural appeal with adjustable louvers and durable construction in wood or composite.",
    features: [
      "Hardwood or composite frames sized to your exact window",
      'Louver sizes typically 2½", 3½", and 4½" for view control',
      "Divider rails or split tilt for independent top/bottom control",
      "Inside or outside mount with custom frame profiles",
      "Excellent privacy and light management; helps reduce drafts when closed",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "shutters_hero_zqqgg6",
      "Plantation shutters with adjustable louvers",
      630,
      560,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Features of Draperies",
    description:
      "Custom fabric panels for premium light control, insulation, and style—from airy linen to fully lined blackout.",
    features: [
      "Header styles: pinch pleat, grommet, ripplefold, rod pocket",
      "Linings: privacy, blackout, and interlining for insulation",
      "Traversing rods and low-profile tracks for smooth operation",
      "Cordless baton wands for clean, simple control",
      "Precise stack-back planning to keep views clear",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "draperies_features_ckfuux",
      "Custom draperies on a track with ripplefold header",
      630,
      560,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Features of Exterior Shades",
    description:
      "Stop heat and glare before they reach the glass. Outdoor-rated systems extend patio comfort and protect interiors.",
    features: [
      "Solar screen fabrics with 1%–10% openness for view and glare control",
      "Side channels or cable guides to reduce sway in wind",
      "Heavy-duty, weather-resistant hardware and finishes",
      "Manual crank or clutch operation (no power required)",
      "Significant UV reduction to help protect furnishings",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "exterior_2_bq7lp6",
      "Exterior shades lowering over a patio opening",
      630,
      560,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Features of Sheer & Layered Shades",
    description:
      "Sheer vanes or alternating bands provide soft daylighting and privacy on demand with a modern, streamlined look.",
    features: [
      "Layered (zebra) bands shift for view-through or privacy",
      "Sheer horizontal vanes tilt between two sheer panels",
      "Room-darkening fabrics available while keeping a sleek profile",
      "Chain or cordless control for smooth, precise adjustment",
      "Strong UV filtering while maintaining daylight",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "sheer_benefits2_oekwmi",
      "Layered shades showing alternating sheer and solid bands",
      630,
      560,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Features of Natural Woven Shades",
    description:
      "Organic texture from bamboo, grasses, and reeds—each shade has unique variation. Add liners and bindings for function and finish.",
    features: [
      "Sustainable natural materials with distinctive patterning",
      "Optional privacy or blackout liners (attached or independent)",
      "Edge bindings to protect edges and add contrast",
      "Roman fold styles with clean stacks when raised",
      "Top-down/bottom-up available on select configurations",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "natural_features2_ezsr5a",
      "Natural woven bamboo shades adding texture to a room",
      630,
      560,
    ),
  },
};

export function getProductFeatures(slug: string): ProductFeaturesData | null {
  return productFeaturesData[slug] ?? null;
}

export function getAllFeatureSlugs(): string[] {
  return Object.keys(productFeaturesData);
}

export function getAllProductFeatures(): ProductFeaturesData[] {
  return Object.values(productFeaturesData);
}
