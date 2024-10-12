import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md:"30px",
          lg: "80px",
          xl: "100px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
