export const lpServicesData = [
  {
    id: 1,
    title: "Free Consultation",
    desc: "We'll meet with you to understand your unique space and style preferences—at no cost, absolutely free.",
    href: "/services#free-consult",
    imgSrc: "/images/jerry-install.jpg",
    imgAlt:
      "Homeowner discussing window treatment options with PerfectView consultant",
  },
  {
    id: 2,
    title: "Pro Installation",
    desc: "Our experienced installers ensure a precise, clean, and lasting finish for every treatment project. ",
    href: "/services#installation",
    imgSrc: "/images/jerry-install.jpg",
    alt: "PerfectView professional installing custom window treatments",
  },
  {
    id: 3,
    title: "Design Advice",
    desc: "Benefit from expert guidance on materials, finishes, and functionality options to perfectly suit your needs.",
    href: "/services#design-advice",
    imgSrc: "/images/jerry-install.jpg",
    imgAlt: "Interior design consultation for window coverings selection",
  },
  {
    id: 4,
    title: "Motorized Systems",
    desc: "Add ease and modern control to your window treatments with smart home automation technology.",
    href: "/services#installation",
    imgSrc: "/images/jerry-install.jpg",
    imgimgAlt: "Smart motorized window shades controlled by smartphone app",
  },
];

export interface ProcessStep {
  num: string;
  icon: IconKey;
  header: string;
  text: string;
}

export type IconKey = "window" | "design" | "install" | "guarantee";
export const processSteps: ProcessStep[] = [
  {
    num: "01",
    icon: "window" as IconKey,
    header: "Get an Estimate",
    text: "Get a free, no-obligation estimate for your custom window treatments — we’ll work around your schedule every time.",
  },
  {
    num: "02",
    icon: "design" as IconKey,
    header: "Design Consultation",
    text: "We’ll guide you through styles, fabrics, and finishes to find the perfect window treatments for your home.",
  },
  {
    num: "03",
    icon: "window" as IconKey,
    header: "Professional Installation",
    text: "Every installation is handled by us personally — precise, clean, and built to last for years to come.",
  },
  {
    num: "04",
    icon: "window" as IconKey,
    header: "Satisfaction Guarantee",
    text: "You’ll love the results — every window treatment installation is backed by our commitment to quality and care.",
  },
];
