import type { Metadata } from "next";
import { BlogIndex } from "@/components/sections/BlogIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog de Energia Solar em Uberlândia | STAR Energia Solar",
  description: "Guias e orientações sobre energia solar residencial, empresarial, assinatura e manutenção em Uberlândia.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex />;
}
