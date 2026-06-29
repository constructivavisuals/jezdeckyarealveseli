import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jezdeckyarealveseli.cz",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
