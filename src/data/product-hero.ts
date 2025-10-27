// src/data/product-hero-data.ts
export interface QuickSpec {
  term: string;
  value: string;
}

export interface HeroImage {
  webp?: string;      // optional if you only have PNG
  png: string;
  alt: string;
  width?: number;     // optional; used for <img> attrs only
  height?: number;
}

export interface ProductHeroData {
  slug: string;
  title: string;
  subtitle?: string;
  image: HeroImage;
  specs: QuickSpec[];
  cta: { label: string; href: string };
}

export const productHeroData: Record<string, ProductHeroData> = {
  // ──────────────────────────────────────────────────────────────
  "roman-shades": {
    slug: "roman-shades",
    title: "Elegant Roman Shades Installed to Perfection",
    subtitle:
      "Bring timeless elegance to your space with custom Roman shades. Our expert installation ensures flawless fit, smooth operation, and style that complements your home.",
    image: {
      webp: "/images/product-hero.webp",
      png: "/images/product-hero.png",
      alt: "Roman shade close-up by a window with plant",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Blackout Option", value: "Available" },
      { term: "Cordless", value: "Available" },
      { term: "Custom Sizes", value: "Yes" },
      { term: "Mount Types", value: "Inside / Outside" },
      { term: "Control Options", value: "Corded, Cordless, Motorized" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "roller-shades": {
    slug: "roller-shades",
    title: "Modern Roller Shades, Built for Daily Life",
    subtitle:
      "Minimal lines, strong light control, zero fuss. Tailored to your windows and your routine.",
    image: {
      webp: "/images/roller-hero.webp",
      png: "/images/roller-hero.png",
      alt: "Roller shades in a modern living room",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Fabric Options", value: "Sheer to Blackout" },
      { term: "Valance", value: "Cassette / Fascia (Optional)" },
      { term: "UV Protection", value: "High" },
      { term: "Smart Home", value: "Compatible" },
      { term: "Maintenance", value: "Easy" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "cellular-shades": {
    slug: "cellular-shades",
    title: "Cellular Shades for Energy-Smart Comfort",
    subtitle:
      "Honeycomb construction traps air to help regulate temperature—quiet, efficient, and clean-lined.",
    image: {
      webp: "/images/cellular-hero.webp",
      png: "/images/cellular-hero.png",
      alt: "Cellular shades filtering light in a bedroom",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Insulation", value: "Excellent" },
      { term: "Cell Types", value: "Single / Double / Blackout" },
      { term: "Operation", value: "Standard / Top-Down Bottom-Up" },
      { term: "Cordless", value: "Available" },
      { term: "Motorization", value: "Available" },
      { term: "Privacy", value: "Sheer to Blackout Fabrics" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Wood & Faux Wood Blinds with Timeless Control",
    subtitle:
      "Warm wood grain or moisture-safe faux—precise light control with classic slatted style.",
    image: {
      webp: "/images/wood-blinds-hero.webp",
      png: "/images/wood-blinds-hero.png",
      alt: "Wood and faux wood blinds with wide slats",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Slat Sizes", value: '2" / 2½"' },
      { term: "Privacy", value: "Routeless Option" },
      { term: "Cordless", value: "Available" },
      { term: "Motorized Tilt", value: "Available" },
      { term: "Decorative Tapes", value: "Optional" },
      { term: "Humidity Resistance", value: "High (Faux Wood)" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  shutters: {
    slug: "shutters",
    title: "Custom Shutters with Architectural Presence",
    subtitle:
      "Built-in elegance with adjustable louvers—crafted to fit and made to last in wood or composite.",
    image: {
      webp: "/images/shutters-hero.webp",
      png: "/images/shutters-hero.png",
      alt: "Plantation shutters with adjustable louvers in a sunlit room",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Materials", value: "Wood / Composite" },
      { term: "Louver Sizes", value: '2½" / 3½" / 4½"' },
      { term: "Split Tilt", value: "Available" },
      { term: "Mount", value: "Inside / Outside (Custom Frames)" },
      { term: "Durability", value: "Excellent" },
      { term: "Insulation", value: "Very Good" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  draperies: {
    slug: "draperies",
    title: "Custom Draperies Designed for Your Space",
    subtitle:
      "From airy sheers to fully lined blackout—tailored panels elevate rooms with texture, color, and control.",
    image: {
      webp: "/images/draperies-hero.webp",
      png: "/images/draperies-hero.png",
      alt: "Ripplefold draperies framing a large window",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Header Styles", value: "Ripplefold, Pinch, Grommet, More" },
      { term: "Linings", value: "Privacy / Blackout / Interlining" },
      { term: "Tracks & Rods", value: "Custom-Fit" },
      { term: "Operation", value: "Wand, Cordless, Motorized" },
      { term: "Stack Back", value: "Planned to Preserve Views" },
      { term: "Insulation", value: "High (with Lining)" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "exterior-shades": {
    slug: "exterior-shades",
    title: "Exterior Shades for Cooler, Calmer Spaces",
    subtitle:
      "Stop heat and glare before they hit the glass—patio-ready systems with outdoor-rated durability.",
    image: {
      webp: "/images/exterior-hero.webp",
      png: "/images/exterior-hero.png",
      alt: "Motorized exterior shades lowering over a patio opening",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Fabrics", value: "Solar Screens (1–10% Openess)" },
      { term: "Guides", value: "Side Channels / Cable" },
      { term: "Sensors", value: "Wind / Sun (Optional)" },
      { term: "Smart Control", value: "Available" },
      { term: "Weatherability", value: "Outdoor-Rated Hardware" },
      { term: "UV Reduction", value: "Excellent" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "sheer-layered": {
    slug: "sheer-layered",
    title: "Sheer & Layered Shades for Flexible Light",
    subtitle:
      "Shift from soft view-through to privacy in seconds—modern lines with day-to-night control.",
    image: {
      webp: "/images/sheer-layered-hero.webp",
      png: "/images/sheer-layered-hero.png",
      alt: "Layered shades showing alternating sheer and solid bands",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Styles", value: "Layered (Zebra) / Sheer Vanes" },
      { term: "Light Control", value: "Filtered to Room Darkening" },
      { term: "Cordless", value: "Available" },
      { term: "Motorization", value: "Available" },
      { term: "UV Protection", value: "Very Good" },
      { term: "Profile", value: "Sleek, Minimal" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },

  // ──────────────────────────────────────────────────────────────
  "natural-woven": {
    slug: "natural-woven",
    title: "Natural Woven Shades with Organic Texture",
    subtitle:
      "Bamboo, reeds, and grasses bring warmth and character—each shade is uniquely patterned.",
    image: {
      webp: "/images/natural-woven-hero.webp",
      png: "/images/natural-woven-hero.png",
      alt: "Natural woven bamboo shades adding texture to a living room",
      width: 600,
      height: 750,
    },
    specs: [
      { term: "Materials", value: "Bamboo, Grasses, Reeds" },
      { term: "Liners", value: "Privacy / Blackout (Optional)" },
      { term: "Edge Bindings", value: "Protective & Decorative" },
      { term: "Fold Style", value: "Roman Folds, Clean Stack" },
      { term: "Motorization", value: "Available" },
      { term: "Variation", value: "Natural, Each Shade Unique" },
    ],
    cta: { label: "Schedule Free Consultation", href: "/contact" },
  },
};

// Helpers
export function getAllProductSlugs(): string[] {
  return Object.keys(productHeroData);
}

export function getProductHero(slug: string): ProductHeroData | null {
  return productHeroData[slug] ?? null;
}
