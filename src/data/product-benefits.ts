// data/product-benefits-data.ts
import { getCloudinarySrc } from "../config/cloudinary";

export interface ProductBenefitsData {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  cta: {
    text: string;
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

// Helper function to create Cloudinary image objects
function createCloudinaryBenefitsImage(
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

export const productBenefitsData: Record<string, ProductBenefitsData> = {
  "roman-shades": {
    slug: "roman-shades",
    title: "Benefits of Roman Shades",
    description:
      "Roman shades combine elegant fabric aesthetics with functional operation, offering tailored folds and versatile styling for any room.",
    benefits: [
      "Soft, elegant fabric appearance that enhances any decor",
      "Neat, space-saving folds when raised",
      "Excellent light control and privacy options",
      "Professional installation ensures perfect fit and smooth operation",
      "Good insulation properties with the right fabric choices",
    ],
    cta: {
      text: "Explore Roman Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "roman_benefits_n6sdi6",
      "Elegant Roman shades in a formal living room setting",
      630,
      550,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Benefits of Roller Shades",
    description:
      "Roller shades provide clean, minimalist styling with straightforward operation and excellent light control for modern living.",
    benefits: [
      "Clean, minimalist look that works with any decor",
      "Excellent light control from soft filtering to complete blackout",
      "Easy to operate and maintain for daily use",
      "Space-efficient design that doesn't block views when open",
      "Professional installation ensures smooth rolling action",
    ],
    cta: {
      text: "Explore Roller Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "roller_benefits_bfc8uh",
      "Modern roller shades in a contemporary kitchen",
      630,
      550,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Benefits of Cellular Shades",
    description:
      "Cellular shades offer superior energy efficiency with unique honeycomb design that provides excellent insulation and comfort.",
    benefits: [
      "Excellent insulation that helps reduce energy costs",
      "Multiple light control options for any time of day",
      "Top-down/bottom-up operation available for lighting flexibility",
      "Professional installation ensures optimal energy performance",
      "Clean, modern appearance with functional benefits",
    ],
    cta: {
      text: "Explore Cellular Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "cellular_benefits_ri3m7r",
      "Cellular shades providing insulation in a bedroom",
      630,
      550,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Benefits of Wood & Faux Wood Blinds",
    description:
      "Wood and faux wood blinds offer timeless style with precise light control and durable construction for lasting beauty.",
    benefits: [
      "Precise light control with adjustable slats",
      "Timeless look that complements any decor style",
      "Durable construction that stands up to daily use",
      "Faux wood options resist moisture in humid areas",
      "Professional installation ensures smooth operation and perfect alignment",
    ],
    cta: {
      text: "Explore Wood Blinds",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "faux-benefits_pcmjtf",
      "Wood blinds in a traditional home office",
      630,
      550,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "Benefits of Shutters",
    description:
      "Shutters provide permanent, built-in window treatments that add architectural character and lasting value to your home.",
    benefits: [
      "Exceptional durability that adds value to your home",
      "Perfect fit with our custom measuring and installation",
      "Excellent control over light and privacy",
      "Works beautifully with unusual window shapes and sizes",
      "Lasting quality that stands the test of time",
    ],
    cta: {
      text: "Explore Shutters",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "shutters_benefits_q7ohpx",
      "Plantation shutters in a bright sunroom",
      630,
      550,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Benefits of Draperies",
    description:
      "Draperies offer the ultimate in customization and elegance, providing superior insulation and complete light control.",
    benefits: [
      "Superior insulation that can reduce energy costs",
      "Endless fabric and style choices for complete customization",
      "Elegant, luxurious appearance that elevates any room",
      "Complete light blocking when fully lined",
      "Expert installation ensures beautiful drape and operation",
    ],
    cta: {
      text: "Explore Draperies",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "draperies_benefits_g4vqus",
      "Elegant draperies in a formal dining room",
      630,
      550,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Benefits of Exterior Shades",
    description:
      "Exterior shades block heat before it enters your home, providing superior sun protection and energy savings.",
    benefits: [
      "Superior heat blocking compared to interior treatments",
      "Significant reduction in cooling costs during warm months",
      "Protects furniture and flooring from UV damage",
      "Extends usable outdoor living space",
      "Expert installation ensures weather resistance and durability",
    ],
    cta: {
      text: "Explore Exterior Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "exterior_benefits_pezvya",
      "Exterior shades on a patio providing shade",
      630,
      550,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Benefits of Sheer & Layered Shades",
    description:
      "Sheer layered shades offer ultimate lighting flexibility, allowing soft filtered light or complete privacy as needed.",
    benefits: [
      "Perfect lighting control from soft diffusion to complete blackout",
      "Maintains your view while providing daytime privacy",
      "Modern, sophisticated look that works with contemporary decor",
      "Excellent protection for your furnishings from UV rays",
      "Professional installation ensures all layers operate perfectly together",
    ],
    cta: {
      text: "Explore Layered Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "sheer_benefits_jvmpvq",
      "Sheer layered shades in a modern living room",
      630,
      550,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Benefits of Natural Woven Shades",
    description:
      "Natural woven shades bring organic texture and eco-friendly materials to your space with soft, diffused lighting.",
    benefits: [
      "Sustainable, eco-friendly materials from renewable sources",
      "Unique natural textures that add character to any room",
      "Soft, diffused light that creates a warm atmosphere",
      "Lightweight and easy to operate",
      "Professional installation showcases their natural beauty",
    ],
    cta: {
      text: "Explore Natural Shades",
      href: "/contact",
    },
    image: createCloudinaryBenefitsImage(
      "natural_jbvcba",
      "Natural woven bamboo shades in a casual space",
      630,
      550,
    ),
  },
};

// Helper functions
export function getProductBenefits(slug: string): ProductBenefitsData | null {
  return productBenefitsData[slug] || null;
}

export function getAllProductSlugs(): string[] {
  return Object.keys(productBenefitsData);
}

export function getAllProductBenefits(): ProductBenefitsData[] {
  return Object.values(productBenefitsData);
}
