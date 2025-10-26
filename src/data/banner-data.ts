import { getCloudinaryFourSet } from "../config/cloudinary";

export interface BannerSplitProps {
  image: {
    mobile: {
      webp: string;
      png: string;
    };
    desktop: {
      webp: string;
      png: string;
    };
    alt: string;
    width?: number;
    height?: number;
  };
  content: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

// Landing Page Banner
export const bannerLPData: BannerSplitProps = {
  image: {
    ...getCloudinaryFourSet(
      "banner-sp-mbl_bvbbzg", // mobile webp
      "banner-sp-mbl_mbblxj", // mobile png
      "banner-sp-dsk_ej4dov", // desktop webp
      "banner-sp-dsk_pllt9m", // desktop png
    ),
    alt: "Professional window treatment installation",
    width: 1280,
    height: 854,
  },
  content: {
    title: "Let's Transform Your Windows Today",
    description:
      "Bring your vision to life with custom-designed window coverings that combine beauty, function, and expert care. Let's create a PerfectView—together.",
    buttonText: "Request Your Free Consultation",
    buttonHref: "/contact",
  },
};

// Services Page Banner
export const bannerServicesData: BannerSplitProps = {
  image: {
    ...getCloudinaryFourSet(
      "banner-sp-mbl_bvbbzg",
      "banner-sp-mbl_mbblxj",
      "banner-sp-dsk_ej4dov",
      "banner-sp-dsk_pllt9m",
    ),
    alt: "Professional window treatment installation",
    width: 1280,
    height: 854,
  },
  content: {
    title: "One Step to Perfect Windows",
    description:
      "From your first estimate to installation, we make the process simple and seamless. Our team helps you find the right treatments and ensures every detail fits perfectly.",
    buttonText: "Schedule Your Free Consultation",
    buttonHref: "/contact",
  },
};
