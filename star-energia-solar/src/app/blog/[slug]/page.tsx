import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { formatPostDate, getPost, posts } from "@/data/posts";
import { blogPostingSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { type } from "@/lib/type";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, image: post.cover });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), blogPostingSchema(post)]} />
      <article className="pt-6 pb-20 sm:pt-10 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs items={crumbs.slice(0, 2)} />
            <h1 className="mt-8 text-[34px] leading-[1.06] font-bold tracking-[-0.04em] text-navy sm:text-[48px]">{post.title}</h1>
            <p className="mt-5 text-sm text-muted">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min de leitura · STAR Energia Solar
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[20px] bg-navy/10">
            <Image
              src={post.cover.src}
              width={post.cover.width}
              height={post.cover.height}
              alt={post.cover.alt}
              preload
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="aspect-[16/8] w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {post.sections.map((s, i) => (
              <section key={s.heading ?? i} className={i > 0 ? "mt-12" : undefined}>
                {s.heading && <h2 className={`${type.h2Sm} text-navy`}>{s.heading}</h2>}
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className={`mt-5 text-[17.5px] leading-[1.75] ${i === 0 && !s.heading ? "text-ink" : "text-muted"}`}>
                    {p}
                  </p>
                ))}
                {s.bullets && <CheckList className="mt-6" items={s.bullets} />}
              </section>
            ))}

            <aside className="mt-14 rounded-[20px] bg-canvas p-7 ring-1 ring-line sm:p-9">
              <p className="text-xl font-semibold tracking-[-0.02em] text-navy">Quer conversar sobre o seu caso?</p>
              <p className="mt-2 text-[15.5px] leading-relaxed text-muted">
                A equipe da STAR Energia Solar atende Uberlândia e região e responde pelo WhatsApp.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton>Falar com a STAR</WhatsAppButton>
                <Link href={post.related.href} className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-navy hover:text-blue">
                  {post.related.label}
                  <ArrowRight size={16} weight="bold" aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <section aria-labelledby="mais-artigos" className="border-t border-line bg-canvas py-20 sm:py-24">
        <Container>
          <h2 id="mais-artigos" className={`${type.h2Sm} text-navy`}>
            Continue lendo
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-[20px] bg-navy/10">
                    <Image
                      src={p.cover.src}
                      alt={p.cover.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-4 block text-lg leading-snug font-semibold tracking-[-0.02em] text-navy group-hover:text-blue">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
