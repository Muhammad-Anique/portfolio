import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        p1: "#EC420F",
        p2: "#c79573",
        p3: "#39C8C1",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"], // Use the CSS variable here
        manrope: ["var(--font-manrope)", "sans-serif"], // Manrope as the default sans font
        lato: ["var(--font-lato)", "serif"],
        hand: ["var(--font-hand)", "sans-serif"], // Figma Hand alternative
        cairo: ["Cairo", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
      },
    },
  },

  plugins: [],
};
export default config;
