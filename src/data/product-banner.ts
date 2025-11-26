// src/data/product-banners.ts
import { getCloudinaryFourSet } from "../config/cloudinary";
import type { BannerSplitProps } from "./banner-data";

export const productBannerData: Record<string, BannerSplitProps> = {
  "roller-shades": {
    image: {
      ...getCloudinaryFourSet(
        { id: "roller-shades-rs22-crop_q0ryvb", version: "v1764169992" }, // mobile png (square crop)
        { id: "roller-shades-rs22-crop_q0ryvb", version: "v1764169992" }, // mobile webp (square crop)
        { id: "roller-shades-rs22-v1_pkhnyi", version: "v1764169860" }, // desktop webp (wide crop)
        { id: "roller-shades-rs22-v1_pkhnyi", version: "v1764169860" }, // desktop png (wide crop)
      ),
      alt: "Modern roller shades in a contemporary room setting",
      width: 1280,
      height: 854,
    },
    content: {
      title: "Find the Perfect Roller Shades Today",
      description:
        "Not sure if roller shades are right for your windows? Our free consultations help you choose the perfect style, light control, and operation for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  "roman-shades": {
    image: {
      ...getCloudinaryFourSet(
        { id: "roman-shades-v3-crop_vs25f2", version: "v1764171291" }, // mobile webp
        { id: "roman-shades-v3-crop_vs25f2", version: "v1764171291" }, // mobile png
        { id: "roman-shades-v3_eziszm", version: "v1764171300" }, // desktop webp
        { id: "roman-shades-v3_eziszm", version: "v1764171300" }, // desktop png
      ),
      alt: "Elegant Roman shades in a formal living room",
      width: 1280,
      height: 913,
    },
    content: {
      title: "Find the Perfect Roman Shades Today",
      description:
        "Not sure if Roman shades are right for your windows? Our free consultations help you choose the perfect style, fabric, and folding options for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  "cellular-shades": {
    image: {
      ...getCloudinaryFourSet(
        { id: "cellular-banner-mobile", version: "v1763135913" },
        { id: "cellular-banner-mobile", version: "v1763135913" },
        { id: "cellular-banner-desktop", version: "v1763135913" },
        { id: "cellular-banner-desktop", version: "v1763135913" },
      ),
      alt: "Energy-efficient cellular shades in a bedroom",
      width: 1280,
      height: 854,
    },
    content: {
      title: "Find the Perfect Cellular Shades Today",
      description:
        "Not sure if cellular shades are right for your windows? Our free consultations help you choose the perfect features, insulation, and light control for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  // Continue with:
  // "sheer-layered": { ... },
  // "wood-faux-blinds": { ... },
  // "shutters": { ... },
  // "natural-woven": { ... },
  // "roman-shades": { ... },
  // "draperies": { ... },
  // "exterior-shades": { ... }
};

// Optional: Default banner for any product not found
export const defaultProductBanner: BannerSplitProps = {
  image: {
    ...getCloudinaryFourSet(
      { id: "default-banner-mobile", version: "v1763135913" },
      { id: "default-banner-mobile", version: "v1763135913" },
      { id: "default-banner-desktop", version: "v1763135913" },
      { id: "default-banner-desktop", version: "v1763135913" },
    ),
    alt: "Window treatment consultation with experts",
    width: 1280,
    height: 854,
  },
  content: {
    title: "Find the Perfect Window Treatment Today",
    description:
      "Not sure which option is best for your windows? Our free consultations help you choose the perfect solution for your space—no obligation required.",
    buttonText: "Schedule a Free Consultation",
    buttonHref: "/contact#contact-form",
  },
};
