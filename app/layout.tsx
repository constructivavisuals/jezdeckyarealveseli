import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="cs" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">{children}</body>
    </html>
  );
}
