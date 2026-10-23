import { MetadataRoute } from "next";
import { GAMES, JOURNAL_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aghatis.studio";

  const staticRoutes = [
    "",
    "/studio",
    "/journal",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const gameRoutes = GAMES.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const journalRoutes = JOURNAL_POSTS.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...gameRoutes, ...journalRoutes];
}
