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

// Helper: Cloudinary image object generator
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
      "Roman shades combine elegant fabric style with smooth functionality, offering tailored folds and versatile design for any room.",
    benefits: [
      "Soft, elegant fabric look that complements any decor",
      "Neat, space-saving folds when raised",
      "Excellent light control and privacy options",
      "Professional installation ensures a perfect fit and smooth operation",
      "Improved insulation when lined with blackout or thermal fabrics",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "roman_benefits_n6sdi6",
      "Elegant Roman shades in a formal living room setting",
      630,
      560,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Benefits of Roller Shades",
    description:
      "Roller shades deliver a clean, modern look with effortless operation and precise light control for everyday comfort.",
    benefits: [
      "Minimalist design that complements any interior",
      "Fabric choices from sheer to blackout for total versatility",
      "Smooth operation and easy daily use",
      "Compact roll keeps views open when raised",
      "Professional installation ensures smooth performance",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "roller_benefits_b8eh9y",
      "Modern roller shades in a contemporary kitchen",
      630,
      560,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Benefits of Cellular Shades",
    description:
      "Cellular shades feature a unique honeycomb design that traps air for exceptional insulation and energy efficiency.",
    benefits: [
      "Helps regulate temperature and reduce energy costs",
      "Multiple opacity levels for flexible light control",
      "Top-down/bottom-up lift for adjustable privacy",
      "Professional installation ensures a precise, custom fit",
      "Clean, tailored appearance that suits any décor",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "card-cellular_oss5u3",
      "Cellular shades providing insulation in a bedroom",
      630,
      560,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Benefits of Wood & Faux Wood Blinds",
    description:
      "Wood and faux wood blinds offer timeless style, precise light control, and long-lasting durability.",
    benefits: [
      "Adjustable slats provide customizable light control",
      "Classic look that enhances both modern and traditional spaces",
      "Durable materials that stand up to daily use",
      "Faux wood options resist moisture and humidity",
      "Professional installation ensures smooth tilt and perfect alignment",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "faux-benefits_pcmjtf",
      "Wood blinds in a traditional home office",
      630,
      560,
    ),
  },

  shutters: {
    slug: "shutters",
    title: "Benefits of Shutters",
    description:
      "Shutters add architectural elegance and long-term value, providing permanent light and privacy control.",
    benefits: [
      "Exceptional durability and timeless appeal",
      "Custom measured for a perfect, built-in fit",
      "Adjustable louvers for precise light and airflow",
      "Ideal for unique window shapes and designs",
      "Professional installation ensures long-lasting performance",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "shutters-neutral_bw8sxd",
      "Neutral tone large panel shutters in a bright sunroom",
      1280,
      853,
    ),
  },

  draperies: {
    slug: "draperies",
    title: "Benefits of Draperies",
    description:
      "Draperies offer premium customization, insulation, and light control with a luxurious finish.",
    benefits: [
      "Enhanced insulation that helps reduce energy costs",
      "Endless fabric, lining, and hardware options",
      "Elegant, high-end look that transforms any space",
      "Complete blackout available with full lining",
      "Expert installation ensures beautiful drape and smooth operation",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "draperies_benefits_g4vqus",
      "Elegant draperies in a formal dining room",
      630,
      560,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Benefits of Exterior Shades",
    description:
      "Exterior shades block sunlight before it reaches your windows, improving comfort and energy efficiency.",
    benefits: [
      "Blocks solar heat before it enters your home",
      "Can lower indoor temperatures and cooling costs",
      "Protects furniture and flooring from fading",
      "Extends usable outdoor space for patios or decks",
      "Expert installation ensures durability and weather resistance",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "exterior_benefits_pezvya",
      "Exterior shades on a patio providing shade",
      630,
      560,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Benefits of Sheer & Layered Shades",
    description:
      "Sheer and layered shades allow you to adjust light and privacy seamlessly while maintaining a soft, modern look.",
    benefits: [
      "Soft daylighting with optional room-darkening fabrics",
      "Maintains views while offering daytime privacy",
      "Modern, sleek style that suits contemporary interiors",
      "blocks UV rays to protect furnishings",
      "Professional installation ensures flawless alignment and movement",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "sheer_benefits3_puwtv4",
      "Sheer layered shades in a modern living room",
      630,
      560,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Benefits of Natural Woven Shades",
    description:
      "Natural woven shades add organic warmth and texture with eco-friendly materials and gentle, diffused light.",
    benefits: [
      "Crafted from renewable materials like bamboo and grasses",
      "Distinctive woven patterns create natural variation",
      "Soft, diffused light enhances a relaxing atmosphere",
      "Lightweight design that’s easy to lift and lower",
      "Professional installation highlights their natural beauty",
    ],
    cta: { text: "Explore More Shade Styles", href: "/contact" },
    image: createCloudinaryBenefitsImage(
      "natural_jbvcba",
      "Natural woven bamboo shades in a casual space",
      630,
      560,
    ),
  },
};

// Helpers
export function getProductBenefits(slug: string): ProductBenefitsData | null {
  return productBenefitsData[slug] ?? null;
}

export function getAllProductSlugs(): string[] {
  return Object.keys(productBenefitsData);
}

export function getAllProductBenefits(): ProductBenefitsData[] {
  return Object.values(productBenefitsData);
}
