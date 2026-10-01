import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/seo";
import { servicePages } from "@/data/services";

export const dynamic = "force-static";

/** Data da última revisão de conteúdo. Atualize ao alterar textos ou fotos. */
const lastModified = new Date("2026-09-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    ...servicePages.map((s) => ({ path: s.href, priority: 0.8 })),
    { path: "/projetos", priority: 0.7 },
  ];
  return routes.map(({ path, priority }) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
