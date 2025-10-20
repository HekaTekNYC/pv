export type ProductCategory = {
  slug: string;
  title: string;
  blurb: string;
  image: string; // path under /public
};

export const productCategories: ProductCategory[] = [
  {
    slug: "roman",
    title: "Roman Shades",
    blurb:
      "Soft folds and tailored fabric create a classic look for bedrooms and living spaces.",
    image: "/images/products-roman.png",
  },
  {
    slug: "roller",
    title: "Roller Shades",
    blurb: "Sleek and modern design, perfect for tight spaces and easy to use.",
    image: "/images/products-roller.png",
  },
  {
    slug: "cellular",
    title: "Cellular Shades",
    blurb:
      "Energy-efficient and insulating, perfect for maintaining comfortable temperatures.",
    image: "/images/products-cellular.png",
  },
  {
    slug: "wood",
    title: "Wood/Faux Blinds",
    blurb:
      "Warmth and clean lines provide durability and a timeless style for any space.",
    image: "/images/products-wood-faux.png",
  },
  {
    slug: "shutters",
    title: "Shutters",
    blurb:
      "Elegant and durable, enhancing value while providing excellent light control.",
    image: "/images/products-shutters.png",
  },
  {
    slug: "draperies",
    title: "Draperies",
    blurb:
      "Brings drama and softness, perfect for grand windows or elegant settings.",
    image: "/images/products-draperies.png",
  },
  {
    slug: "exterior",
    title: "Exterior Shades",
    blurb:
      "Designed for patios and sunrooms, effectively reducing heat and glare.",
    image: "/images/products-exterior.png",
  },
  {
    slug: "sheer",
    title: "Sheer/Layered",
    blurb:
      "Light filtering and decorative, perfect for layering with other treatments.",
    image: "/images/products-sheer.png",
  },
  {
    slug: "natural-woven",
    title: "Natural Woven",
    blurb:
      "Natural textures evoke a coastal or earthy feel, enhancing the ambiance.",
    image: "/images/products-natural-woven.png",
  },
];
