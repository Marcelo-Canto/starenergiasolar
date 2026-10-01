import type { MetadataRoute } from "next";
import { IS_PLACEHOLDER_DOMAIN, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Sem o domínio real, bloqueia a indexação (ver IS_PLACEHOLDER_DOMAIN)
  if (IS_PLACEHOLDER_DOMAIN) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
