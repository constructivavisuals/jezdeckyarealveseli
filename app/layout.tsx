import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jezdecký areál Vysoké Veselí — k pronájmu",
  description:
    "Kompletní jezdecký areál ve Vysokém Veselí k pronájmu. 14 boxů, jízdárna, výběhy, zázemí a ubytování — na dosah Českého ráje.",
  openGraph: {
    title: "Jezdecký areál Vysoké Veselí — k pronájmu",
    description:
      "Kompletní jezdecký areál ve Vysokém Veselí k pronájmu. 14 boxů, jízdárna, výběhy, zázemí a ubytování — na dosah Českého ráje.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
