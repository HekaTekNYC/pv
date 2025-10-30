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
    subtitle:
      "Fabric shades that stack into neat folds when raised. Choose liners and lift systems for style, privacy, and light control that fit traditional or modern spaces.",
    specs: [
      { term: "Motorization", value: "Available" },
      {
        term: "Light Control",
        value: "Sheer to room darkening (blackout with liner)",
      },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      {
        term: "Energy Efficiency",
        value: "Standard; improved with interlining",
      },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "roman1_torpl3",
      "Roman shades in an elegant living room",
      600,
      750,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Roller Shades",
    subtitle:
      "Clean, minimal shades that roll into a compact tube. Fabric choices range from sheer to blackout for precise glare and privacy control.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Sheer to blackout (by fabric)" },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      {
        term: "Energy Efficiency",
        value: "Standard; solar fabrics help reduce heat and glare",
      },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Honeycomb cells trap air to help insulate windows. Options include top-down/bottom-up and fabrics from light filtering to blackout.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Light filtering to blackout" },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      { term: "Energy Efficiency", value: "High (insulating)" },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Classic slatted blinds in real wood for warmth or faux wood for moisture resistance. Tilt the slats to manage privacy and view-through.",
    specs: [
      { term: "Motorization", value: "Available (tilt)" },
      {
        term: "Light Control",
        value: "Adjustable slats (privacy to room darkening)",
      },
      { term: "Operation", value: "Corded or cordless lift; wand tilt" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      { term: "Energy Efficiency", value: "Standard" },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Hardwood or composite panels with adjustable louvers. Durable, architectural, and excellent for privacy and light control.",
    specs: [
      { term: "Motorization", value: "Limited / specialty only" },
      {
        term: "Light Control",
        value: "Adjustable louvers (privacy to room darkening)",
      },
      { term: "Operation", value: "Tilt rod or hidden tilt (no cords)" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      {
        term: "Energy Efficiency",
        value: "Standard; helps reduce drafts when closed",
      },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
      href: "/contact",
    },

    image: createCloudinaryHeroImage(
      "shutters-modern_gmrrki",
      "Plantation shutters in a bright room",
      600,
      750,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Draperies",
    subtitle:
      "Custom panels in your choice of fabrics and headers. Add liners for better insulation and true blackout in media and bedroom spaces.",
    specs: [
      { term: "Motorization", value: "Available" },
      {
        term: "Light Control",
        value: "Light filtering to blackout (with lining)",
      },
      { term: "Operation", value: "Baton, corded, or motorized" },
      { term: "Mount", value: "Outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      {
        term: "Energy Efficiency",
        value: "Insulating (with lining/interlining)",
      },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Outdoor-rated solar screens stop heat and glare before they reach the glass. Great for patios, decks, and large exposures.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Solar screen (1–10% openness)" },
      { term: "Operation", value: "Motorized or crank" },
      { term: "Mount", value: "Outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      { term: "Energy Efficiency", value: "Helps reduce heat gain and glare" },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Alternating sheer and solid bands or floating vanes for soft diffusion and on-demand privacy with a modern, streamlined look.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Sheer to room darkening (by fabric)" },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      { term: "Energy Efficiency", value: "Standard" },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
    subtitle:
      "Handcrafted from bamboo, grasses, and reeds to add texture and warmth. Pair with liners to increase privacy and darkening.",
    specs: [
      { term: "Motorization", value: "Available" },
      {
        term: "Light Control",
        value: "Light filtering (room darkening with liner)",
      },
      { term: "Operation", value: "Corded, cordless, or motorized" },
      { term: "Mount", value: "Inside or outside mount" },
      { term: "Custom Sizes", value: "Made to measure" },
      {
        term: "Energy Efficiency",
        value: "Standard; improved with liner/interlining",
      },
    ],
    cta: {
      label: "Schedule Your Free Consultation",
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
