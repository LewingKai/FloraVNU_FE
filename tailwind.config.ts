import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF69B5",
        secondary: "#E32C89",
        primaryText: "#000000",
        priceText: "#FF0000",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        custom: "900px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Ẩn scrollbar trên tất cả trình duyệt */
          "-ms-overflow-style": "none" /* IE và Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari và Opera */,
          },
        },
      });
    }),
  ],
} satisfies Config;
