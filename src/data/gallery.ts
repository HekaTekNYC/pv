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
    src: getCloudinarySrc("PV_Gallery_6_rian2b", "png", "v1762868181"),
    alt: "Roller shades in waiting room",
    featured: true,
    category: "roller",
  },
  {
    id: 7,
    src: getCloudinarySrc("PV_Gallery_7_iww0or", "png", "v1762868661"),
    alt: "Neutral colored draperies in large living room window behind couch",
    featured: false,
    category: "draperies",
  },
  {
    id: 8,
    src: getCloudinarySrc("PV_Gallery_8_ffxke9", "png", "v1762869110"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
];

// Helper functions
export const getFeaturedImages = () =>
  galleryImages.filter((image) => image.featured);

export const getAllGalleryImages = () => galleryImages;
