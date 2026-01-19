// Example constants - replace with your actual data
export interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

export const TESTIMONIALS: TestimonialProps[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    text: "Great service!",
    image: "/testimonial1.jpg",
  },
];

// Font constants (if using local fonts)
// Example structure - adjust based on your font setup
export const SatoshiBold = {
  className: "font-['Satoshi'] font-bold",
};
