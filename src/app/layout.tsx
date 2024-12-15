import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_sections/Sidebar";
import Navbar from "./_sections/Navbar";
import { Playfair_Display } from "next/font/google";
import { Manrope, Delicious_Handrawn, Lato } from "next/font/google";

// Import Manrope font with specific weights
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // All weights from thin to bold
  variable: "--font-manrope", // CSS variable for Tailwind config
});

const lato = Lato({
  subsets: ["latin"], // Subsets for character support
  weight: ["100", "300", "400", "700", "900"], // Thin to Black weights
  variable: "--font-lato", // CSS variable for Tailwind config
});

// Import Figtree (closest match to Figma Hand) with specific weights
const Hand = Delicious_Handrawn({
  weight: ["400"], // All weights
  variable: "--font-hand", // CSS variable for Tailwind config
  subsets: ["latin"],
  preload: false, // Disable preloading if it's not needed
});

// Configure the font weights and subsets you need
const playfair = Playfair_Display({
  weight: ["400", "700"], // Add any weights you need
  subsets: ["latin"], // Specify subsets, e.g., 'latin', 'cyrillic'
  variable: "--font-playfair", // Define a CSS variable to use in Tailwind config
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Anique",
    template: "%s - Muhammad Anique",
  },
  description:
    "Hi, I'm Muhammad, a passionate Full Stack Developer with expertise in Node.js, Express, Next.js, Supabase, AWS, and more. I specialize in building scalable and high-performance web applications. Check out my portfolio to learn more about my projects and skills. Contact me at anique.cs@gmail.com for collaboration opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lato.variable} ${manrope.variable} ${Hand.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
