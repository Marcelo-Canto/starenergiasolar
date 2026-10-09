import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { formatPostDate, posts } from "@/data/posts";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/blog";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Blog", path },
];

export const metadata: Metadata = pageMetadata({
  title: "Blog de Energia Solar | STAR Energia Solar Uberlândia",
  description:
    "Artigos sobre energia solar em Uberlândia: como funciona, energia por assinatura, limpeza de painéis, projetos para casas e empresas. Blog da STAR Energia Solar.",
  path,
});

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section aria-labelledby="page-title" className="pt-6 pb-20 sm:pt-10 sm:pb-28">
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className={`${type.h1Page} mt-8 text-navy`}>
            Blog de energia solar
          </h1>
          <p className={`${type.lead} mt-6 max-w-2xl text-muted`}>
            Guias e respostas da equipe da STAR para quem quer entender e usar energia solar em Uberlândia e região.
          </p>

          {/* Artigo em destaque */}
          <Reveal className="mt-14">
            <Link href={`/blog/${first.slug}`} className="group grid overflow-hidden rounded-[20px] bg-canvas ring-1 ring-line lg:grid-cols-2">
              <span className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
                <Image
                  src={first.cover.src}
                  alt={first.cover.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex flex-col justify-center p-7 sm:p-12">
                <span className="text-sm text-muted">
                  {formatPostDate(first.date)} · {first.readingMinutes} min de leitura
                </span>
                <span className="mt-4 text-[26px] leading-tight font-bold tracking-[-0.03em] text-navy group-hover:text-blue sm:text-[34px]">
                  {first.title}
                </span>
                <span className="mt-4 text-[16px] leading-relaxed text-muted">{first.description}</span>
                <span className="mt-6 text-[15px] font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4">Ler artigo</span>
              </span>
            </Link>
          </Reveal>

          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 70}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] bg-navy/10">
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-5 block text-sm text-muted">
                    {formatPostDate(post.date)} · {post.readingMinutes} min de leitura
                  </span>
                  <span className="mt-2 block text-xl leading-snug font-semibold tracking-[-0.02em] text-navy group-hover:text-blue">{post.title}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-muted">{post.description}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
