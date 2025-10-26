// src/data/product-features-data.ts
export interface FeaturesImage {
  webp?: string; // optional if you only have PNG
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
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: {
      webp: "/images/product-features.webp",
      png: "/images/product-features.png",
      alt: "Roman shade close-up by a window with plant",
      width: 630,
      height: 550,
    },
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Features of Roller Shades",
    description:
      "Clean profiles, wide fabric library, and simple operation—roller shades are the minimalist’s multitool.",
    features: [
      "Sheer, solar, dim-out, and blackout fabrics",
      "Optional fascia or cassette valances",
      "Chain, cordless, or motorized control",
      "Wide widths available for large spans",
      "Excellent UV and glare reduction options",
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: {
      webp: "/images/roller-features.webp",
      png: "/images/roller-features.png",
      alt: "Modern roller shades filtering light",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Explore More Shade Styles", href: "/contact" },
    image: {
      webp: "/images/cellular-features.webp",
      png: "/images/cellular-features.png",
      alt: "Cellular shades adding insulation",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Explore Wood & Faux Options", href: "/contact" },
    image: {
      webp: "/images/wood-blinds-features.webp",
      png: "/images/wood-blinds-features.png",
      alt: "Wood and faux wood blinds with wide slats in a bright room",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Explore Shutter Styles", href: "/contact" },
    image: {
      webp: "/images/shutters-features.webp",
      png: "/images/shutters-features.png",
      alt: "Plantation shutters with adjustable louvers",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Design Your Drapery", href: "/contact" },
    image: {
      webp: "/images/draperies-features.webp",
      png: "/images/draperies-features.png",
      alt: "Custom draperies on a track with ripplefold header",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Plan Your Outdoor Shade", href: "/contact" },
    image: {
      webp: "/images/exterior-features.webp",
      png: "/images/exterior-features.png",
      alt: "Motorized exterior shades lowering over a patio opening",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "See Sheer & Layered Options", href: "/contact" },
    image: {
      webp: "/images/sheer-layered-features.webp",
      png: "/images/sheer-layered-features.png",
      alt: "Layered shades showing alternating sheer and solid bands",
      width: 630,
      height: 550,
    },
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
    ],
    cta: { label: "Explore Natural Wovens", href: "/contact" },
    image: {
      webp: "/images/natural-woven-features.webp",
      png: "/images/natural-woven-features.png",
      alt: "Natural woven bamboo shades adding texture to a room",
      width: 630,
      height: 550,
    },
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
