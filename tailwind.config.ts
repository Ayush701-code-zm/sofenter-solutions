import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Project color scheme
        primary: "#f5cd4c",
        background: "#f0e9d3",
        text: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
