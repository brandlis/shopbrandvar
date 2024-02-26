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
      "50": "#edefff",
      "100": "#dfe1ff",
      "200": "#c5c8ff",
      "300": "#a1a3ff",
      "400": "#847cfd",
      "500": "#735ef7",
      "600": "#643fec",
      "700": "#5732d0",
      "800": "#472ba8",
      "900": "#3c2b84",
      "950": "#24194d",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
