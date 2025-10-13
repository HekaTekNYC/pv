export interface Testimonial {
  id: number;
  quote: string;
  initial: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with PerfectView was fantastic! They streamlined our processes, and the outcomes are truly remarkable. I couldn't be happier with the results!",
    initial: "L",
    author: "Laura M.",
    role: "Homeowner",
  },
  {
    id: 2,
    quote:
      "They were efficient and professional. Our new shades have completely transformed our space, giving it a fresh and vibrant look that we absolutely love!",
    initial: "J",
    author: "James R.",
    role: "General Contractor",
  },
  {
    id: 3,
    quote:
      "As a family-owned business, they deliver outstanding results. Their meticulous attention to detail reflects genuine care. I highly recommend their services!",
    initial: "S",
    author: "Samantha T.",
    role: "Interior Designer",
  },
];
