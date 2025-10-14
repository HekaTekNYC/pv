export interface Feature {
  title: string;
  text: string;
  icon: string;
  alt?: string;
}

export const whyUsFeatures = {
  leftFeatures: [
    {
      title: "Expert Design Advice",
      text: "We help you choose the right styles, colors, and functionality for your space.",
      icon: "/icons/handshake_icon.png",
      alt: "Handshake icon representing partnership and trust",
    },
    {
      title: "Friendly Assistance",
      text: "Expert installers guarantee a flawless fit and finish, ensuring satisfaction with every setup.",
      icon: "/icons/ppl_comms_icon.png",
      alt: "People communicating icon representing friendly service",
    },
    {
      title: "Family-Owned Values",
      text: "You'll work directly with us—no middlemen, just personal attention and integrity.",
      icon: "/icons/hands_heart_icon.png",
      alt: "Hands holding heart icon representing care and values",
    },
  ] as Feature[],

  rightFeatures: [
    {
      title: "15+ Years Experience",
      text: "Our deep knowledge ensures a seamless experience from measurement to final install.",
      icon: "/icons/briefcase_icon.png",
      alt: "Briefcase icon representing professional experience",
    },
    {
      title: "Clean & Safe Work",
      text: "We ensure your home is left tidy, damage-free, and treated with utmost respect.",
      icon: "/icons/shield_check_icon.png",
      alt: "Shield with checkmark icon representing safety and reliability",
    },
    {
      title: "Stylish & Functional",
      text: "Innovative products that improve light control, privacy, and energy efficiency with a stylish touch.",
      icon: "/icons/comp_gear_icon.png",
      alt: "Computer with gear icon representing innovation and functionality",
    },
  ] as Feature[],
} as const;
