// data/lp-services-data.ts
import { getCloudinarySrc } from "../config/cloudinary";

export interface ServiceData {
  id: number;
  title: string;
  desc: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

export const lpServicesData: ServiceData[] = [
  {
    id: 1,
    title: "Free Consultation",
    desc: "We'll meet with you to understand your unique space and style preferences—at no cost, absolutely free.",
    href: "/services#free-consult",
    imgSrc: getCloudinarySrc("free_consult_oecr0n", "webp"),
    imgAlt:
      "Homeowner discussing window treatment options with PerfectView consultant",
  },
  {
    id: 2,
    title: "Pro Installation",
    desc: "Our experienced installers ensure a precise, clean, and lasting finish for every treatment project.",
    href: "/services#installation",
    imgSrc: getCloudinarySrc("pro_install_b2tbaq", "webp"),
    imgAlt: "PerfectView professional installing custom window treatments",
  },
  {
    id: 3,
    title: "Design Advice",
    desc: "Benefit from expert guidance on materials, finishes, and functionality options to perfectly suit your needs.",
    href: "/services#design-advice",
    imgSrc: getCloudinarySrc("design_advice_gmn149", "webp"),
    imgAlt: "Interior design consultation for window coverings selection",
  },
  {
    id: 4,
    title: "Motorized Systems",
    desc: "Add ease and modern control to your window treatments with smart home automation technology.",
    href: "/services#motorization",
    imgSrc: getCloudinarySrc("motarization_options_ido5ta", "webp"),
    imgAlt: "Smart motorized window shades controlled by smartphone app",
  },
];

export interface ProcessStep {
  num: string;
  icon: IconKey;
  header: string;
  text: string;
}

export type IconKey = "estimate" | "design" | "install" | "quality";
export const processSteps: ProcessStep[] = [
  {
    num: "01",
    icon: "estimate" as IconKey,
    header: "Get an Estimate",
    text: "Get your free window treatment estimate, on your schedule.",
  },
  {
    num: "02",
    icon: "design" as IconKey,
    header: "Design Consultation",
    text: "Discover which window treatments will look and function best for you.",
  },
  {
    num: "03",
    icon: "install" as IconKey,
    header: "Pro Installation",
    text: "Our treatments are installed with precision, care, and lasting quality.",
  },
  {
    num: "04",
    icon: "quality" as IconKey,
    header: "Quality Guarantee",
    text: "Every project is backed by our promise of quality and craftsmanship.",
  },
];
