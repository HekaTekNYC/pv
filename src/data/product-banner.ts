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
        "Not sure if roller shades are right for your windows? Our free consultation help you choose the perfect style, light control, and operation for your space—no obligation required.",
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
        "Not sure if Roman shades are right for your windows? Our free consultation help you choose the perfect style, fabric, and folding options for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  "cellular-shades": {
    image: {
      ...getCloudinaryFourSet(
        { id: "cellular-v2-crop_qp6msw", version: "v1764176751" }, // mobile webp
        { id: "cellular-v2-crop_qp6msw", version: "v1764176751" }, // mobile png
        { id: "cellular-v2_a6yov3", version: "v1764176743" }, // desktop webp
        { id: "cellular-v2_a6yov3", version: "v1764176743" }, // desktop png
      ),
      alt: "Modern cellular shades providing excellent light control and insulation",
      width: 1280,
      height: 854,
    },
    content: {
      title: "Find the Perfect Cellular Shades Today",
      description:
        "Not sure if cellular shades are right for your windows? Our free consultation help you choose the perfect style, insulation level, and light control for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  "wood-faux-blinds": {
    image: {
      ...getCloudinaryFourSet(
        { id: "wood-blinds-v4-crop_wc8ln8", version: "/v1764177406" }, // mobile webp
        { id: "wood-blinds-v4-crop_wc8ln8", version: "/v1764177406" }, // mobile png
        { id: "wood-blinds-v4_giud1j", version: "v1764177400" }, // desktop webp
        { id: "wood-blinds-v4_giud1j", version: "v1764177400" }, // desktop png
      ),
      alt: "Beautiful wood and faux wood blinds in a modern living space",
      width: 1280,
      height: 854,
    },
    content: {
      title: "Find the Perfect Wood or Faux Wood Blinds Today",
      description:
        "Not sure if wood or faux wood blinds are right for your windows? Our free consultations help you choose the perfect material, style, and finish for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  shutters: {
    image: {
      ...getCloudinaryFourSet(
        { id: "shutters-v3-crop_ldgz8a", version: "v1764179475" }, // mobile webp
        { id: "shutters-v3-crop_ldgz8a", version: "v1764179475" }, // mobile png
        { id: "shutters-v3_accatv", version: "v1764179628" }, // desktop webp
        { id: "shutters-v3_accatv", version: "v1764179628" }, // desktop png
      ),

      alt: "Beautiful plantation shutters providing light control and privacy",
      width: 1280,
      height: 789,
    },
    content: {
      title: "Find the Perfect Shutters Today",
      description:
        "Not sure if shutters are right for your windows? Our free consultations help you choose the perfect style, material, and louver size for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
  draperies: {
    image: {
      ...getCloudinaryFourSet(
        { id: "drapery-v2-crop_o5lqum", version: "v1764180213" }, // mobile webp
        { id: "drapery-v2-crop_o5lqum", version: "v1764180213" }, // mobile png
        { id: "drapery-v2_ki2m0k", version: "v1764180142" }, // desktop webp
        { id: "drapery-v2_ki2m0k", version: "v1764180142" }, // desktop png
      ),
      alt: "Elegant white draperies framing a large beautiful bedroom window",
      width: 1280,
      height: 854,
    },
    content: {
      title: "Find the Perfect Draperies Today",
      description:
        "Not sure if draperies are right for your windows? Our free consultations help you choose the perfect fabric, style, and hanging system for your space—no obligation required.",
      buttonText: "Schedule a Free Consultation",
      buttonHref: "/contact#contact-form",
    },
  },
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
