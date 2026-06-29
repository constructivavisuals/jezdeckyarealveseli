import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jezdecký areál Vysoké Veselí",
    short_name: "Areál Vysoké Veselí",
    description:
      "Kompletní jezdecký areál ve Vysokém Veselí k pronájmu jako celek.",
    lang: "cs",
    start_url: "/",
    display: "standalone",
    background_color: "#081120",
    theme_color: "#081120",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
