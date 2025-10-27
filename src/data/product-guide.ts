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
    text: "Decide how much natural light you want in each room. Options range from sheer fabrics that let sunlight filter through to blackout shades that create total privacy.",
    icon: {
      src: "/icons/product-light-control.svg",
      alt: "Light control icon showing adjustable window slats",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
  },
  {
    id: 2,

    header: "Energy Efficiency",
    text: "Consider treatments that help insulate your home. The right choice can keep rooms cooler in the summer, warmer in the winter, and lower energy bills year-round.",
    icon: {
      src: "/icons/product-energy-efficiency.svg",
      alt: "Energy efficiency icon showing a leaf and power symbol",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
  },
  {
    id: 3,
    header: "Privacy Needs",
    text: "Think about how much privacy each space requires. Bedrooms and bathrooms often need more coverage, while living areas may call for flexible solutions that balance light and seclusion.",
    icon: {
      src: "/icons/product-privacy-needs.svg",
      alt: "Privacy needs icon showing a person behind window coverings",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
  },
  {
    id: 4,
    header: "Style & Design",
    text: "Your window treatments should feel like part of the room. Choose from a wide range of fabrics, textures, and finishes to match your personal style and complement your décor.Please let us know if you have any questions or need anything more from us.",
    icon: {
      src: "/icons/product-style-design.svg",
      alt: "Style and design icon showing color swatches and fabric samples",
      width: 48,
      height: 48,
    },
    blob: {
      src: "/icons/product-guide-blob.svg",
      alt: "White Blob Icon",
      width: 32,
      height: 32,
    },
  },
];
