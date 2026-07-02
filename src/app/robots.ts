import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/geo/site";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
] as const;

export default function robots(): MetadataRoute.Robots {
  const aiRules = AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: "/" as const,
  }));

  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiRules],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
