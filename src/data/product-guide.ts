export type ProductGuideCard = {
  id: number;
  header: string;
  text: string;
  icon: { src: string; alt: string; width: number; height: number };
  blob: { src: string; alt: string; width: number; height: number };
};
export const productGuide: ProductGuideCard[] = [
  {
    id: 1,
    header: "Light Control",
    text: "Control how much natural light enters each room. Choose from sheer fabrics that filter sunlight to blackout shades that provide complete privacy and darkness when needed.",
    icon: {
      src: "/icons/product-light-control.svg",
      alt: "Light control icon showing adjustable window slats",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 100,
      height: 103.22,
    },
  },
  {
    id: 2,
    header: "Energy Efficiency",
    text: "Select window treatments that help insulate your home effectively. Proper choices keep rooms cooler in summer, warmer in winter, and reduce energy costs throughout the year.",
    icon: {
      src: "/icons/product-energy-efficiency.svg",
      alt: "Energy efficiency icon showing a leaf and power symbol",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 100,
      height: 103.22,
    },
  },
  {
    id: 3,
    header: "Privacy Needs",
    text: "Determine the privacy level required for each space. Bedrooms and bathrooms typically need more coverage, while living areas benefit from solutions balancing light and seclusion.",
    icon: {
      src: "/icons/product-privacy-needs.svg",
      alt: "Privacy needs icon showing a person behind window coverings",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 100,
      height: 103.22,
    },
  },
  {
    id: 4,
    header: "Style & Design",
    text: "Choose window treatments that enhance your room's aesthetic. Select from various fabrics, textures, and finishes that match your personal style and complement your existing décor.",
    icon: {
      src: "/icons/product-style-design.svg",
      alt: "Style and design icon showing color swatches and fabric samples",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 100,
      height: 103.22,
    },
  },
];
