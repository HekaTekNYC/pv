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
  motorized: boolean;
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
      "Roman shades offer versatile styles, fabric choices, and operation options, providing beauty, functionality, and a perfect fit for any room.",
    features: [
      "Available in light-filtering and blackout fabrics",
      "Flat, hobbled, or relaxed fold styles",
      "Clean stack when raised",
      "Corded, cordless, or motorized operation",
      "Great for both modern and traditional interiors",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "roman_features_mmitvs",
      "Roman shade close-up by a window with plant",
      630,
      550,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Features of Roller Shades",
    description:
      "Clean profiles, wide fabric library, and simple operation—roller shades are the minimalist's multitool.",
    features: [
      "Sheer, solar, dim-out, and blackout fabrics",
      "Optional fascia or cassette valances",
      "Chain, cordless, or motorized control",
      "Wide widths available for large spans",
      "Excellent UV and glare reduction options",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "roller_features_yuvygf",
      "Modern roller shades filtering light",
      630,
      550,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Features of Cellular Shades",
    description:
      "Energy-smart honeycomb construction, top-down/bottom-up options, and a clean, tailored look.",
    features: [
      "Single, double, and blackout cells",
      "Top-down/bottom-up operation",
      "Great insulation for energy savings",
      "Cordless and motorized options",
      "Sleek stack height when raised",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryImage(
      "cellular_features1_uxj42r",
      "Cellular shades adding insulation",
      630,
      550,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Features of Wood & Faux Wood Blinds",
    description:
      "Timeless slatted style with precise light control. Choose real basswood for warmth and grain, or moisture-resistant faux wood for kitchens and baths.",
    features: [
      '2" and 2½" slat sizes for different looks and views',
      "Routeless/No-holes privacy option to reduce light leaks",
      "Cordless and motorized tilt options for safety and convenience",
      "Decorative tapes and valances for a finished look",
      "Faux wood resists humidity and warping in damp areas",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Explore Wood & Faux Options", href: "/contact" },
    image: createCloudinaryImage(
      "faux-features_bm5isv",
      "Wood and faux wood blinds with wide slats in a bright room",
      630,
      550,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "Features of Shutters",
    description:
      "Architectural, built-in appeal with adjustable louvers and long-term durability in wood or composite materials.",
    features: [
      "Wood or composite frames sized to your exact window",
      'Louver sizes typically 2½", 3½", and 4½" for view control',
      "Divider rails or split tilt for independent top/bottom control",
      "Inside or outside mount with custom frame profiles",
      "Excellent insulation and light management",
      "<strong>Motorized:</strong> No",
    ],
    motorized: false,
    cta: { label: "Explore Shutter Styles", href: "/contact" },
    image: createCloudinaryImage(
      "shutters_hero_zqqgg6",
      "Plantation shutters with adjustable louvers",
      630,
      550,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Features of Draperies",
    description:
      "Custom fabric panels that deliver premium light control, insulation, and style—from casual linen to fully lined blackout.",
    features: [
      "Header styles: pinch pleat, grommet, ripplefold, rod-pocket",
      "Linings: privacy, blackout, and interlining for insulation",
      "Traversing rods and low-profile tracks for smooth operation",
      "Cordless wands and motorization (including smart controls)",
      "Precise stack-back planning to keep views clear",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Design Your Drapery", href: "/contact" },
    image: createCloudinaryImage(
      "draperies_features_ckfuux",
      "Custom draperies on a track with ripplefold header",
      630,
      550,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Features of Exterior Shades",
    description:
      "Block heat and glare before they hit the glass. Outdoor-rated systems cut cooling loads and extend usable patio time.",
    features: [
      "Solar screen fabrics with 1%–10% openness for view & glare control",
      "Side channels or cable guides to reduce sway in wind",
      "Heavy-duty, weather-resistant hardware and finishes",
      "Motorization with optional wind/sun sensors and smart control",
      "Significant UV reduction to protect interiors",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Plan Your Outdoor Shade", href: "/contact" },
    image: createCloudinaryImage(
      "exterior_2_bq7lp6",
      "Motorized exterior shades lowering over a patio opening",
      630,
      550,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Features of Sheer & Layered Shades",
    description:
      "Sheer vanes or alternating bands allow soft daylighting and privacy on demand—modern look, flexible light control.",
    features: [
      "Layered (zebra) bands shift for view-through or privacy",
      "Sheer horizontal vanes tilt between two sheer panels",
      "Room-darkening fabrics available while keeping a sleek profile",
      "Cordless and motorized options for smooth, precise control",
      "Great UV filtering while maintaining daylight",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "See Sheer & Layered Options", href: "/contact" },
    image: createCloudinaryImage(
      "sheer_benefits2_oekwmi",
      "Layered shades showing alternating sheer and solid bands",
      630,
      550,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Features of Natural Woven Shades",
    description:
      "Organic texture from bamboo, grasses, and reeds—each shade is uniquely patterned, with liner and edge-binding options.",
    features: [
      "Sustainable natural materials with distinctive variation",
      "Optional privacy or blackout liners (attached or independent)",
      "Edge bindings to protect edges and add contrast",
      "Roman fold styles with clean stacks when raised",
      "Top-down/bottom-up and motorization available",
      "<strong>Motorized:</strong> Yes",
    ],
    motorized: true,
    cta: { label: "Explore Natural Wovens", href: "/contact" },
    image: createCloudinaryImage(
      "natural_features2_ezsr5a",
      "Natural woven bamboo shades adding texture to a room",
      630,
      550,
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
