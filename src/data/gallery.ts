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
    category: "roller",
  },
  {
    id: 3,
    src: getCloudinarySrc("PV_Gallery_3_fwsnmd", "png", "v1762802448"),
    alt: "Top down/bottom up cellular shades in kitchen window surrounded by artistic tiles",
    featured: true,
    category: "cellular",
  },
  {
    id: 4,
    src: getCloudinarySrc("PV_Gallery_4_olbsmd", "png", "v1762802757"),
    alt: "Top down/bottom up cellular shades with decorative panels on either side in tall window",
    featured: true,
    category: "cellular",
  },
  {
    id: 5,
    src: getCloudinarySrc("PV_Gallery_5_ejrco0", "png", "v1762822518"),

    alt: "Cellular shades with floral printed fabric cornices in kitchen",
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
  {
    id: 9,
    src: getCloudinarySrc("pv_gallery_9_kmpcah", "png", "v1765227351"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 10,
    src: getCloudinarySrc("pv_gallery_10_xnupkh", "png", "v1765227449"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 11,
    src: getCloudinarySrc("pv_gallery_11_sgemao", "png", "v1765227590"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 12,
    src: getCloudinarySrc("pv_gallery_12_ndj3wq", "png", "v1765227705"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 13,
    src: getCloudinarySrc("pv_gallery_13_pdy6lr", "png", "v1765227975"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 14,
    src: getCloudinarySrc("pv_gallery_14_suduhc", "png", "v1765228091"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 15,
    src: getCloudinarySrc("pv_gallery_15_wiemnl", "png", "v1765228880"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 16,
    src: getCloudinarySrc("pv_gallery_16_giewkb", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 17,
    src: getCloudinarySrc("pv_gallery_17_rslfsw", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 18,
    src: getCloudinarySrc("pv_gallery_18_wauh2s", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 19,
    src: getCloudinarySrc("pv_gallery_19_qchyhc", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 20,
    src: getCloudinarySrc("pv_gallery_20_vgqlmw", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 21,
    src: getCloudinarySrc("pv_gallery_21_diiese", "png", "v1781631125"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 22,
    src: getCloudinarySrc("pv_gallery_22_tvc2z5", "png", "v1781631124"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
  {
    id: 23,
    src: getCloudinarySrc("pv_gallery_23_vz499p", "png", "v1781631125"),
    alt: "Roller shades in four windows inside country club",
    featured: false,
    category: "roller",
  },
];

// Helper functions
export const getFeaturedImages = () =>
  galleryImages.filter((image) => image.featured);

export const getAllGalleryImages = () => galleryImages;
