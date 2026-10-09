import type { MetadataRoute } from "next";
import { pageUrl } from "@/lib/seo";
import { servicePages } from "@/data/services";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

/** Data da última revisão de conteúdo. Atualize ao alterar textos ou fotos. */
const lastModified = new Date("2026-10-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    ...servicePages.map((s) => ({ path: s.href, priority: 0.8 })),
    { path: "/projetos", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
  ];
  return routes.map(({ path, priority }) => ({
    url: pageUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
