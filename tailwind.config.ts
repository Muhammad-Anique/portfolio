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
      screens: {
        xs: "480px", // Custom extra small screen
        sm: "640px", // Small devices (default)
        md: "768px", // Medium devices (default)
        lg: "1024px", // Large devices (default)
        xl: "1280px", // Extra large devices (default)
        "2xl": "1536px", // Double extra large (default)
        "3xl": "1920px", // Custom triple extra large screen
      },
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
