import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      phone: "390px",

      tablet: "720px",

      laptop: "1024px",

      desktop: "1280px",
    },
    colors: {
      "50": "#f6f6f6",
      "100": "#e7e7e7",
      "200": "#d1d1d1",
      "300": "#b0b0b0",
      "400": "#888888",
      "500": "#6d6d6d",
      "600": "#5d5d5d",
      "700": "#4f4f4f",
      "800": "#454545",
      "900": "#3d3d3d",
      "950": "#000000",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
