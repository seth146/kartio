import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kartio.sk",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
