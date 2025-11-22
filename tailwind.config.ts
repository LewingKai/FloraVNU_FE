import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // @ts-ignore
  safelist: [
    "flex",
    "items-center",
    "justify-start",
    "gap-2",
    "rounded-lg",
    "rounded-b-xl",
    "rounded-tr-xl",
    "bg-white",
    "bg-[#cecece8e]",
    "shadow-md",
    "transition-all",
    "hover:-translate-y-1",
    "hover:bg-[#ff69b422]",
    "hover:shadow-xl",
    "max-w-70",
    "line-clamp-1",
    "line-clamp-2",
    "p-2",
    "text-sm",
    "text-gray-600",
    "text-[#000000]",
    "text-[#FF0000]",
    // … thêm tất cả class mà API trả về
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
