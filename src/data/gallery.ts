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
    src: getCloudinarySrc("Gallery_Mallie_yvrrsn", "png", "v1762801493"),
    alt: "Living room with custom draperies",
    featured: true,
    category: "draperies",
  },

  {
    id: 2,
    src: getCloudinarySrc("PV_Gallery_2_zrbfoa", "png", "v1762801824"),

    alt: "Modern roller shades in three windows",
    featured: true,
    category: "shades",
  },
  {
    id: 3,
    src: getCloudinarySrc("PV_Gallery_3_fwsnmd", "png", "v1762802448"),
    alt: "Pleated shades in kitchen window",
    featured: true,
    category: "shades",
  },
  {
    id: 4,
    src: getCloudinarySrc("PV_Gallery_4_olbsmd", "png", "v1762802757"),
    alt: "Draperies and pleated shades on tall window",
    featured: true,
    category: "draperies",
  },
  {
    id: 5,
    src: getCloudinarySrc("PV_Gallery_5_ejrco0", "png", "v1762822518"),

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
