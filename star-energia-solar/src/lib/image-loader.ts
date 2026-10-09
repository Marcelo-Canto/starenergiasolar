/**
 * Loader do next/image para o site estático: aponta para as variações
 * pré-geradas por scripts/optimize-images.mjs em /public/_img.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const dot = src.lastIndexOf(".");
  return `${basePath}/_img${src.slice(0, dot)}-${width}.webp`;
}
