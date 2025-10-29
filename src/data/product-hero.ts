// Option 2:

// data/product-hero.ts
// import { getCloudinarySrc } from "../config/cloudinary";

// export interface ProductHeroData {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   specs: {
//     term: string;
//     value: string;
//   }[];
//   cta: {
//     label: string;
//     href: string;
//   };
//   image: {
//     webp: string;
//     png: string;
//     alt: string;
//     width: number;
//     height: number;
//   };
// }

// // Helper function for Cloudinary images
// function createCloudinaryHeroImage(
//   publicId: string,
//   alt: string,
//   width: number,
//   height: number,
// ) {
//   return {
//     webp: getCloudinarySrc(publicId, "webp"),
//     png: getCloudinarySrc(publicId, "png"),
//     alt,
//     width,
//     height,
//   };
// }

// export const productHeroData: Record<string, ProductHeroData> = {
//   "roman-shades": {
//     slug: "roman-shades",
//     title: "Roman Shades",
//     subtitle: "Elegant fabric folds with timeless appeal",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       { term: "Control Options", value: "Cord, cordless, motorized" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "roman1_torpl3",
//       "Beautiful Roman shades in an elegant living room",
//       600,
//       750,
//     ),
//   },

//   "roller-shades": {
//     slug: "roller-shades",
//     title: "Roller Shades",
//     subtitle: "Clean, minimalist profiles with precise light control",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       { term: "Control Options", value: "Chain, cordless, motorized" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "roller_hero_nwvlw9",
//       "Modern roller shades in a contemporary setting",
//       600,
//       750,
//     ),
//   },

//   "cellular-shades": {
//     slug: "cellular-shades",
//     title: "Cellular Shades",
//     subtitle: "Energy-efficient honeycomb design for ultimate comfort",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       {
//         term: "Control Options",
//         value: "Cordless, top-down/bottom-up, motorized",
//       },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "cellular-1_m1tvtc",
//       "Energy-efficient cellular shades in a bedroom",
//       600,
//       750,
//     ),
//   },

//   "wood-faux-blinds": {
//     slug: "wood-faux-blinds",
//     title: "Wood & Faux Wood Blinds",
//     subtitle: "Classic slatted style with modern performance",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Not Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       { term: "Control Options", value: "Cordless tilt, motorized tilt" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "faux-hero_l3dnhj",
//       "Wood blinds in a traditional home setting",
//       600,
//       750,
//     ),
//   },

//   shutters: {
//     slug: "shutters",
//     title: "Shutters",
//     subtitle: "Architectural elegance with lasting durability",
//     specs: [
//       { term: "Motorization", value: "Not Available" },
//       { term: "Blackout", value: "Not Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       { term: "Control Options", value: "Tilt rod, hidden tilt" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "shutters_hero1_ncxjtc",
//       "Plantation shutters in a bright room",
//       600,
//       750,
//     ),
//   },

//   draperies: {
//     slug: "draperies",
//     title: "Draperies",
//     subtitle: "Luxurious fabric treatments for elegant spaces",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Ceiling, wall, or inside mount" },
//       { term: "Control Options", value: "Manual traverse, motorized" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "draperies_hero_ijpnmt",
//       "Elegant draperies in a formal room",
//       600,
//       750,
//     ),
//   },

//   "exterior-shades": {
//     slug: "exterior-shades",
//     title: "Exterior Shades",
//     subtitle: "Block heat before it enters your home",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Not Available" },
//       { term: "Cordless", value: "Not Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Wall, ceiling, or fascia mount" },
//       { term: "Control Options", value: "Manual crank, motorized" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "exterior_4_doy4sh",
//       "Exterior shades on a patio or balcony",
//       600,
//       750,
//     ),
//   },

//   "sheer-layered": {
//     slug: "sheer-layered",
//     title: "Sheer & Layered Shades",
//     subtitle: "Modern elegance with versatile light control",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       { term: "Control Options", value: "Cordless, motorized" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "sheer_hero_ug6gul",
//       "Sheer layered shades in a contemporary room",
//       600,
//       750,
//     ),
//   },

//   "natural-woven": {
//     slug: "natural-woven",
//     title: "Natural Woven Shades",
//     subtitle: "Organic textures with eco-friendly appeal",
//     specs: [
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout", value: "Available" },
//       { term: "Cordless", value: "Available" },
//       { term: "Custom Sizes", value: "Made to measure" },
//       { term: "Mount Types", value: "Inside or outside mount" },
//       {
//         term: "Control Options",
//         value: "Cordless, top-down/bottom-up, motorized",
//       },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "natural_benefits_xkcxnr",
//       "Natural woven shades adding texture to a room",
//       600,
//       750,
//     ),
//   },
// };

// export function getProductHero(slug: string): ProductHeroData | null {
//   return productHeroData[slug] ?? null;
// }

// export function getAllProductHeroSlugs(): string[] {
//   return Object.keys(productHeroData);
// }

// Celestes Version
import { getCloudinarySrc } from "../config/cloudinary";

export interface ProductHeroData {
  slug: string;
  title: string;
  subtitle?: string;
  specs: {
    term: string;
    value: string;
  }[];
  cta: {
    label: string;
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

// Helper function for Cloudinary images
// function createCloudinaryHeroImage(
//   publicId: string,
//   alt: string,
//   width: number,
//   height: number,
// ) {
//   return {
//     webp: getCloudinarySrc(publicId, "webp"),
//     png: getCloudinarySrc(publicId, "png"),
//     alt,
//     width,
//     height,
//   };
// }

// export const productHeroData: Record<string, ProductHeroData> = {
//  "roman-shades": {
//   slug: "roman-shades",
//   title: "Roman Shades",
//   subtitle: "Elegant fabric folds with timeless appeal",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Light Filtering" },
//     { term: "Operation", value: "Cordless" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Adjustable" },
//     { term: "Energy Efficiency", value: "Standard" },
//     { term: "Style Modernity", value: "Traditional" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "roman1_torpl3",
//     "Beautiful Roman shades in an elegant living room",
//     600,
//     750,
//   ),
// },

// "roller-shades": {
//   slug: "roller-shades",
//   title: "Roller Shades",
//   subtitle: "Clean, minimalist profiles with precise light control",
//   specs: [
//     { term: "Motorization", value: "Standard" },
//     { term: "Light Control", value: "Blackout" },
//     { term: "Operation", value: "Motorized" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Adjustable" },
//     { term: "Energy Efficiency", value: "Energy Efficient" },
//     { term: "Style Modernity", value: "Modern" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "roller_hero_nwvlw9",
//     "Modern roller shades in a contemporary setting",
//     600,
//     750,
//   ),
// },

// "cellular-shades": {
//   slug: "cellular-shades",
//   title: "Cellular Shades",
//   subtitle: "Energy-efficient honeycomb design for ultimate comfort",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Room Darkening" },
//     { term: "Operation", value: "Cordless" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Adjustable" },
//     { term: "Energy Efficiency", value: "Insulating" },
//     { term: "Style Modernity", value: "Modern" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "cellular-1_m1tvtc",
//     "Energy-efficient cellular shades in a bedroom",
//     600,
//     750,
//   ),
// },

// "wood-faux-blinds": {
//   slug: "wood-faux-blinds",
//   title: "Wood & Faux Wood Blinds",
//   subtitle: "Classic slatted style with modern performance",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Light Filtering" },
//     { term: "Operation", value: "Cordless" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Adjustable" },
//     { term: "Energy Efficiency", value: "Standard" },
//     { term: "Style Modernity", value: "Traditional" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "faux-hero_l3dnhj",
//     "Wood blinds in a traditional home setting",
//     600,
//     750,
//   ),
// },

// "shutters": {
//   slug: "shutters",
//   title: "Shutters",
//   subtitle: "Architectural elegance with lasting durability",
//   specs: [
//     { term: "Motorization", value: "Not Available" },
//     { term: "Light Control", value: "Light Filtering" },
//     { term: "Operation", value: "Corded" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Adjustable" },
//     { term: "Energy Efficiency", value: "Standard" },
//     { term: "Style Modernity", value: "Traditional" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "shutters_hero1_ncxjtc",
//     "Plantation shutters in a bright room",
//     600,
//     750,
//   ),
// },

// "draperies": {
//   slug: "draperies",
//   title: "Draperies",
//   subtitle: "Luxurious fabric treatments for elegant spaces",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Blackout" },
//     { term: "Operation", value: "Corded" },
//     { term: "Mount", value: "Outside Mount" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Yes" },
//     { term: "Energy Efficiency", value: "Insulating" },
//     { term: "Style Modernity", value: "Traditional" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "draperies_hero_ijpnmt",
//     "Elegant draperies in a formal room",
//     600,
//     750,
//   ),
// },

// "exterior-shades": {
//   slug: "exterior-shades",
//   title: "Exterior Shades",
//   subtitle: "Block heat before it enters your home",
//   specs: [
//     { term: "Motorization", value: "Standard" },
//     { term: "Light Control", value: "Light Filtering" },
//     { term: "Operation", value: "Motorized" },
//     { term: "Mount", value: "Outside Mount" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "No" },
//     { term: "Energy Efficiency", value: "Energy Efficient" },
//     { term: "Style Modernity", value: "Modern" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "exterior_4_doy4sh",
//     "Exterior shades on a patio or balcony",
//     600,
//     750,
//   ),
// },

// "sheer-layered": {
//   slug: "sheer-layered",
//   title: "Sheer & Layered Shades",
//   subtitle: "Modern elegance with versatile light control",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Sheer" },
//     { term: "Operation", value: "Cordless" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Yes" },
//     { term: "Energy Efficiency", value: "Standard" },
//     { term: "Style Modernity", value: "Modern" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "sheer_hero_ug6gul",
//     "Sheer layered shades in a contemporary room",
//     600,
//     750,
//   ),
// },

// "natural-woven": {
//   slug: "natural-woven",
//   title: "Natural Woven Shades",
//   subtitle: "Organic textures with eco-friendly appeal",
//   specs: [
//     { term: "Motorization", value: "Optional" },
//     { term: "Light Control", value: "Light Filtering" },
//     { term: "Operation", value: "Cordless" },
//     { term: "Mount", value: "Both" },
//     { term: "Custom Sizes", value: "Made-to-Measure" },
//     { term: "View-Through", value: "Yes" },
//     { term: "Energy Efficiency", value: "Standard" },
//     { term: "Style Modernity", value: "Transitional" }
//   ],
//   cta: {
//     label: "Schedule your Free Consultation",
//     href: "/contact",
//   },
//   image: createCloudinaryHeroImage(
//     "natural_benefits_xkcxnr",
//     "Natural woven shades adding texture to a room",
//     600,
//     750,
//   ),
// },
// };

// export function getProductHero(slug: string): ProductHeroData | null {
//   return productHeroData[slug] ?? null;
// }

// export function getAllProductHeroSlugs(): string[] {
//   return Object.keys(productHeroData);
// }

import { getCloudinarySrc } from "../config/cloudinary";

export interface ProductHeroData {
  slug: string;
  title: string;
  subtitle?: string;
  specs: {
    term: string;
    value: string;
  }[];
  cta: {
    label: string;
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

// Helper function for Cloudinary images
function createCloudinaryHeroImage(
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

export const productHeroData: Record<string, ProductHeroData> = {
  "roman-shades": {
    slug: "roman-shades",
    title: "Roman Shades",
    subtitle: "Elegant fabric window treatments that fold into neat, uniform pleats when raised, offering sophisticated style with versatile light control options perfect for both traditional and contemporary interior designs throughout your entire home living spaces.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Light Filtering" },
      { term: "Operation", value: "Cordless" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Standard" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "roman1_torpl3",
      "Beautiful Roman shades in an elegant living room",
      600,
      750,
    ),
  },

  "roller-shades": {
    slug: "roller-shades",
    title: "Roller Shades",
    subtitle: "Clean, minimalist window coverings that roll up neatly into compact tubes when not in use, providing precise light control from sheer filtering to complete blackout with modern styling ideal for contemporary offices and living spaces.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Blackout" },
      { term: "Operation", value: "Motorized" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Energy Efficient" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "roller_hero_nwvlw9",
      "Modern roller shades in a contemporary setting",
      600,
      750,
    ),
  },

  "cellular-shades": {
    slug: "cellular-shades",
    title: "Cellular Shades",
    subtitle: "Advanced honeycomb-designed window treatments that create multiple insulating air pockets for superior energy efficiency while offering versatile light control options and convenient top-down/bottom-up operation for any room in your home.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Room Darkening" },
      { term: "Operation", value: "Cordless" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Insulating" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "cellular-1_m1tvtc",
      "Energy-efficient cellular shades in a bedroom",
      600,
      750,
    ),
  },

  "wood-faux-blinds": {
    slug: "wood-faux-blinds",
    title: "Wood & Faux Wood Blinds",
    subtitle: "Classic slatted window coverings available in genuine wood for natural warmth or durable faux wood for moisture resistance, offering precise adjustable light control with timeless appeal suitable for any interior design style preference.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Light Filtering" },
      { term: "Operation", value: "Cordless" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Standard" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "faux-hero_l3dnhj",
      "Wood blinds in a traditional home setting",
      600,
      750,
    ),
  },

  "shutters": {
    slug: "shutters",
    title: "Shutters",
    subtitle: "Architectural window treatments featuring adjustable louvers that provide excellent light control and complete privacy while adding permanent value and classic timeless elegance to your home's interior design aesthetic and overall appeal.",
    specs: [
      { term: "Motorization", value: "Not Available" },
      { term: "Light Control", value: "Light Filtering" },
      { term: "Operation", value: "Corded" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Standard" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "shutters_hero1_ncxjtc",
      "Plantation shutters in a bright room",
      600,
      750,
    ),
  },

  "draperies": {
    slug: "draperies",
    title: "Draperies",
    subtitle: "Luxurious custom fabric panels that deliver superior thermal insulation and complete light blocking when properly lined, available in endless styles, fabrics, and header options to create elegant focal points in formal living spaces.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Blackout" },
      { term: "Operation", value: "Corded" },
      { term: "Mount", value: "Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Insulating" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "draperies_hero_ijpnmt",
      "Elegant draperies in a formal room",
      600,
      750,
    ),
  },

  "exterior-shades": {
    slug: "exterior-shades",
    title: "Exterior Shades",
    subtitle: "Heavy-duty outdoor-rated solar screening systems that effectively block heat and reduce glare before sunlight enters your home, significantly lowering cooling costs while extending comfortable outdoor living space on patios and decks.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Sheer" },
      { term: "Operation", value: "Motorized" },
      { term: "Mount", value: "Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Energy Efficient" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "exterior_4_doy4sh",
      "Exterior shades on a patio or balcony",
      600,
      750,
    ),
  },

  "sheer-layered": {
    slug: "sheer-layered",
    title: "Sheer & Layered Shades",
    subtitle: "Contemporary window treatments featuring alternating sheer and solid fabric bands or floating horizontal vanes that provide dynamic adjustable light control from soft diffusion to complete privacy with sleek modern styling throughout your home.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Sheer" },
      { term: "Operation", value: "Cordless" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Standard" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "sheer_hero_ug6gul",
      "Sheer layered shades in a contemporary room",
      600,
      750,
    ),
  },

  "natural-woven": {
    slug: "natural-woven",
    title: "Natural Woven Shades",
    subtitle: "Eco-friendly sustainable window treatments handcrafted from renewable natural materials like bamboo, grasses, and reeds that provide soft filtered light while adding organic texture and natural warmth to any room in your home.",
    specs: [
      { term: "Motorization", value: "Available" },
      { term: "Light Control", value: "Light Filtering" },
      { term: "Operation", value: "Cordless" },
      { term: "Mount", value: "Inside & Outside Mount" },
      { term: "Custom Sizes", value: "Made-to-Measure" },
      { term: "Energy Efficiency", value: "Standard" }
    ],
    cta: {
      label: "Schedule your Free Consultation",
      href: "/contact",
    },
    image: createCloudinaryHeroImage(
      "natural_benefits_xkcxnr",
      "Natural woven shades adding texture to a room",
      600,
      750,
    ),
  },
};

export function getProductHero(slug: string): ProductHeroData | null {
  return productHeroData[slug] ?? null;
}

export function getAllProductHeroSlugs(): string[] {
  return Object.keys(productHeroData);
}
// // data/product-hero.ts
// import { getCloudinarySrc } from "../config/cloudinary";

// export interface ProductHeroData {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   specs: {
//     term: string;
//     value: string;
//   }[];
//   cta: {
//     label: string;
//     href: string;
//   };
//   image: {
//     webp: string;
//     png: string;
//     alt: string;
//     width: number;
//     height: number;
//   };
// }

// // Helper function for Cloudinary images
// function createCloudinaryHeroImage(
//   publicId: string,
//   alt: string,
//   width: number,
//   height: number,
// ) {
//   return {
//     webp: getCloudinarySrc(publicId, "webp"),
//     png: getCloudinarySrc(publicId, "png"),
//     alt,
//     width,
//     height,
//   };
// }

// export const productHeroData: Record<string, ProductHeroData> = {
//   "roman-shades": {
//     slug: "roman-shades",
//     title: "Roman Shades",
//     subtitle: "Elegant fabric folds with timeless appeal",
//     specs: [
//       { term: "Style", value: "Flat, hobbled, or relaxed folds" },
//       { term: "Light Control", value: "Sheer to blackout options" },
//       { term: "Operation", value: "Corded, cordless, or motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Living rooms, bedrooms, dining rooms" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "roman1_torpl3",
//       "Beautiful Roman shades in an elegant living room",
//       600,
//       750,
//     ),
//   },

//   "roller-shades": {
//     slug: "roller-shades",
//     title: "Roller Shades",
//     subtitle: "Clean, minimalist profiles with precise light control",
//     specs: [
//       { term: "Style", value: "Sleek, modern roll-up design" },
//       { term: "Light Control", value: "Sheer, solar, dim-out, or blackout" },
//       { term: "Operation", value: "Chain, cordless, or motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Kitchens, offices, modern spaces" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "roller_hero_nwvlw9",
//       "Modern roller shades in a contemporary setting",
//       600,
//       750,
//     ),
//   },

//   "cellular-shades": {
//     slug: "cellular-shades",
//     title: "Cellular Shades",
//     subtitle: "Energy-efficient honeycomb design for ultimate comfort",
//     specs: [
//       { term: "Style", value: "Honeycomb cellular construction" },
//       { term: "Light Control", value: "Single, double, or blackout cells" },
//       { term: "Operation", value: "Top-down/bottom-up, cordless, motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Bedrooms, energy-efficient homes" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "cellular-1_m1tvtc",
//       "Energy-efficient cellular shades in a bedroom",
//       600,
//       750,
//     ),
//   },

//   "wood-faux-blinds": {
//     slug: "wood-faux-blinds",
//     title: "Wood & Faux Wood Blinds",
//     subtitle: "Classic slatted style with modern performance",
//     specs: [
//       { term: "Style", value: '2" or 2.5" slats, real or faux wood' },
//       { term: "Light Control", value: "Adjustable slats, routeless option" },
//       { term: "Operation", value: "Cordless tilt, motorized options" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Not Available" },
//       { term: "Best For", value: "Living rooms, bathrooms, kitchens" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "faux-hero_l3dnhj",
//       "Wood blinds in a traditional home setting",
//       600,
//       750,
//     ),
//   },

//   shutters: {
//     slug: "shutters",
//     title: "Shutters",
//     subtitle: "Architectural elegance with lasting durability",
//     specs: [
//       { term: "Style", value: "Plantation style, various louver sizes" },
//       { term: "Light Control", value: "Adjustable louvers, full privacy" },
//       { term: "Operation", value: "Tilt rod, hidden tilt" },
//       { term: "Motorization", value: "Not Available" },
//       { term: "Blackout Options", value: "Not Available" },
//       { term: "Best For", value: "Living rooms, sunrooms, historic homes" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "shutters_hero1_ncxjtc",
//       "Plantation shutters in a bright room",
//       600,
//       750,
//     ),
//   },

//   draperies: {
//     slug: "draperies",
//     title: "Draperies",
//     subtitle: "Luxurious fabric treatments for elegant spaces",
//     specs: [
//       { term: "Style", value: "Pinch pleat, grommet, ripplefold" },
//       { term: "Light Control", value: "Sheer to blackout with linings" },
//       { term: "Operation", value: "Manual traverse or motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Formal living rooms, dining rooms" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "draperies_hero_ijpnmt",
//       "Elegant draperies in a formal room",
//       600,
//       750,
//     ),
//   },

//   "exterior-shades": {
//     slug: "exterior-shades",
//     title: "Exterior Shades",
//     subtitle: "Block heat before it enters your home",
//     specs: [
//       { term: "Style", value: "Outdoor-rated solar screens" },
//       { term: "Light Control", value: "1-10% openness for view preservation" },
//       { term: "Operation", value: "Manual crank or motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Not Available" },
//       { term: "Best For", value: "Patios, sunrooms, west-facing windows" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "exterior_4_doy4sh",
//       "Exterior shades on a patio or balcony",
//       600,
//       750,
//     ),
//   },

//   "sheer-layered": {
//     slug: "sheer-layered",
//     title: "Sheer & Layered Shades",
//     subtitle: "Modern elegance with versatile light control",
//     specs: [
//       { term: "Style", value: "Layered bands or sheer vanes" },
//       { term: "Light Control", value: "Sheer views to complete privacy" },
//       { term: "Operation", value: "Cordless or motorized" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Modern living spaces, offices" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "sheer_hero_ug6gul",
//       "Sheer layered shades in a contemporary room",
//       600,
//       750,
//     ),
//   },

//   "natural-woven": {
//     slug: "natural-woven",
//     title: "Natural Woven Shades",
//     subtitle: "Organic textures with eco-friendly appeal",
//     specs: [
//       { term: "Style", value: "Bamboo, grasses, reeds, and woods" },
//       { term: "Light Control", value: "Soft filtered light, privacy liners" },
//       { term: "Operation", value: "Cordless, top-down/bottom-up" },
//       { term: "Motorization", value: "Available" },
//       { term: "Blackout Options", value: "Available" },
//       { term: "Best For", value: "Casual spaces, sunrooms, eco-homes" },
//     ],
//     cta: {
//       label: "Schedule your Free Consultation",
//       href: "/contact",
//     },
//     image: createCloudinaryHeroImage(
//       "natural_benefits_xkcxnr",
//       "Natural woven shades adding texture to a room",
//       600,
//       750,
//     ),
//   },
// };

// export function getProductHero(slug: string): ProductHeroData | null {
//   return productHeroData[slug] ?? null;
// }

// export function getAllProductHeroSlugs(): string[] {
//   return Object.keys(productHeroData);
// }
