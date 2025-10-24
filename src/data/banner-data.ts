export interface BannerSplitProps {
  image: {
    mobileWebp: string;
    mobileFallback: string;
    desktopWebp: string;
    desktopFallback: string;
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

export const bannerLPData: BannerSplitProps = {
  image: {
    mobileWebp: "/images/banner-sp-mbl.webp",
    mobileFallback: "/images/banner-sp-mbl.png",
    desktopWebp: "/images/banner-sp-dsk.webp",
    desktopFallback: "/images/banner-sp-dsk.png",
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

export const bannerServicesData: BannerSplitProps = {
  image: {
    mobileWebp: "/images/banner-sp-mbl.webp",
    mobileFallback: "/images/banner-sp-mbl.png",
    desktopWebp: "/images/banner-sp-dsk.webp",
    desktopFallback: "/images/banner-sp-dsk.png",
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
