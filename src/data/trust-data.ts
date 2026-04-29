export interface TrustItem {
  icon: string;
  alt: string;
  text: string;
  href?: string;
}

export const trustBannerData: TrustItem[] = [
  {
    icon: "/icons/contact-family.svg",
    alt: "white outlined family icon",
    text: "Family Owned",
  },
  {
    icon: "/icons/contact-location.svg",
    alt: "white outlined pin on map icon",
    text: "Serving Northern Utah & Beyond",
  },
  {
    icon: "/icons/contact-phone.svg",
    alt: "white outlined phone icon",
    text: "(801) 603-9035",
    href: "tel:8016039035",
  },
];
