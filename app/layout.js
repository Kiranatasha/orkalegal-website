import { Inter, Playfair_Display, EB_Garamond, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Orka Legal",
  description:
    "Strategic legal counsel for businesses and individuals across corporate, regulatory, and dispute matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${ebGaramond.variable} ${cormorant.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
