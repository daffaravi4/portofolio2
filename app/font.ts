import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const michroma = localFont({
  src: "./fonts/Michroma-Regular.ttf",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});