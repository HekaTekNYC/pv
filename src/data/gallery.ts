import { getCloudinarySrc } from "../config/cloudinary";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  featured: boolean;
  category?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: getCloudinarySrc("draperies_enhance_mkfgo1", "webp", "v1761673644"),
    alt: "Living room with custom draperies",
    featured: true,
    category: "draperies",
  },
  {
    id: 2,
    src: getCloudinarySrc("draperies_feature_ojvznk", "webp", "v1761673828"),

    alt: "Modern roller shades in office",
    featured: true,
    category: "shades",
  },
  {
    id: 3,
    src: getCloudinarySrc("draperies_enhance_mkfgo1", "webp", "v1761673644"),
    alt: "Wood blinds in dining room",
    featured: true,
    category: "blinds",
  },
  {
    id: 4,
    src: getCloudinarySrc("draperies_feature_ojvznk", "webp", "v1761673828"),
    alt: "Plantation shutters in bedroom",
    featured: true,
    category: "shutters",
  },
  {
    id: 5,
    src: getCloudinarySrc("draperies_enhance_mkfgo1", "webp", "v1761673644"),
    alt: "Cellular shades in kitchen",
    featured: true,
    category: "cellular",
  },
  {
    id: 6,
    src: getCloudinarySrc("draperies_feature_ojvznk", "webp", "v1761673828"),
    alt: "Roman shades in living area",
    featured: true,
    category: "roman",
  },
  {
    id: 7,
    src: getCloudinarySrc("project7_abc123", "webp", "v1761673828"),
    alt: "Window treatment in bathroom",
    featured: false,
    category: "bathroom",
  },
  {
    id: 8,
    src: getCloudinarySrc("project8_xyz789", "webp", "v1761673828"),
    alt: "Custom coverings in entryway",
    featured: false,
    category: "entryway",
  },
];

// Helper functions
export const getFeaturedImages = () =>
  galleryImages.filter((image) => image.featured);

export const getAllGalleryImages = () => galleryImages;
