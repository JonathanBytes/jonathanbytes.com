import { IBM_Plex_Mono, Yeseva_One, Montserrat } from "next/font/google";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-ibm",
});
export const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva-one",
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat",
});
