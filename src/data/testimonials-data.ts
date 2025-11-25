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
      '"Working with the Fry family has been a true privilege. Their positivity, professionalism, and impeccable followthrough shine through every interaction. With kindness, expertise, and genuine care, they make collaboration a joy."',
    initial: "K",
    author: "Katy A.",
    role: "Homeowner",
  },
  {
    id: 2,
    quote:
      '"The natural shades I purchased are beautiful. There was a wide variety of materials to choose from, and the selection process was truly enjoyable. Installation was excellent—I’m very satisfied."',
    initial: "D",
    author: "Dorothy P.",
    role: "General Contractor",
  },
  {
    id: 3,
    quote:
      '"After meeting Allison, the choice was clear. Her trustbuilding, attention to detail, and proactive approach made the team an easy decision—and we feel fortunate to have worked with them."',
    initial: "T",
    author: "Trevor S.",
    role: "Interior Designer",
  },
];
