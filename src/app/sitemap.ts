import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/geo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
