import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://jezdeckyarealveseli.cz";
const TITLE = "Jezdecký areál Vysoké Veselí — k pronájmu";
const DESCRIPTION =
  "Kompletní jezdecký areál ve Vysokém Veselí k pronájmu jako celek. 14 stájových boxů, venkovní jízdárna, výběhy, zázemí a ubytování — na dosah Českého ráje.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "jezdecký areál",
    "pronájem",
    "Vysoké Veselí",
    "ustájení koní",
    "stáje",
    "jízdárna",
    "Český ráj",
    "Jičín",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Jezdecký areál Vysoké Veselí",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#081120",
  colorScheme: "light",
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
