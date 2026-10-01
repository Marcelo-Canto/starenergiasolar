import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export default function config(phase: string): NextConfig {
  // Garante que nenhum build de produção saia com URLs de localhost em canonical, sitemap e JSON-LD
  if (phase === PHASE_PRODUCTION_BUILD && !process.env.NEXT_PUBLIC_SITE_URL) {
    throw new Error(
      "Defina NEXT_PUBLIC_SITE_URL (ex.: https://www.dominio.com.br) antes do build de produção. Veja .env.example.",
    );
  }

  return {
    // Site 100% estático: `npm run build` gera a pasta /out, pronta para hospedagem comum (cPanel/FTP)
    output: "export",
    // Subpasta do site, quando houver (ex.: GitHub Pages em usuario.github.io/repositorio). Vazio em domínio próprio.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
    // Cada página vira pasta/index.html, o formato que qualquer servidor entrega sem configuração
    trailingSlash: true,
    images: {
      // Sem servidor Node não há otimizador: as variações são pré-geradas (scripts/optimize-images.mjs)
      loader: "custom",
      loaderFile: "./src/lib/image-loader.ts",
      deviceSizes: [480, 768, 1080, 1600],
      imageSizes: [240],
    },
  };
}
