import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { getServiceDetail, serviceDetails } from "@/data/service-details";
import { allServices } from "@/data/services";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ servico: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[servico]">): Promise<Metadata> {
  const { servico } = await params;
  const detail = getServiceDetail(servico);
  if (!detail) return {};
  return pageMetadata({ title: detail.metaTitle, description: detail.metaDescription, path: `/${detail.slug}`, image: detail.photo });
}

export default async function ServicePage({ params }: PageProps<"/[servico]">) {
  const { servico } = await params;
  const detail = getServiceDetail(servico);
  if (!detail) notFound();

  const path = `/${detail.slug}`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: detail.service.label, path },
  ];
  const others = allServices.filter((s) => s.href !== path);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(detail.service.name, detail.metaDescription, path)]} />

      <section aria-labelledby="page-title" className="pt-6 pb-16 sm:pt-10 lg:pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className={`${type.h1Page} mt-8 text-navy`}>
              {detail.h1}
            </h1>
            <p className={`${type.lead} mt-7 max-w-xl text-muted`}>{detail.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg">{detail.cta}</WhatsAppButton>
              <ButtonLink href="/projetos" variant="outline" size="lg" icon="arrow">
                Ver projetos
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="overflow-hidden rounded-[20px] bg-navy/10">
              <Image
                src={detail.photo.src}
                width={detail.photo.width}
                height={detail.photo.height}
                alt={detail.photo.alt}
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="animate-hero-in aspect-[4/3] w-full object-cover"
              />
            </div>
            {detail.highlight && (
              <div className="relative mx-4 -mt-10 max-w-[300px] rounded-[20px] bg-navy p-6 text-white shadow-[0_28px_60px_-30px_rgb(4_28_66/0.9)] sm:mx-8 lg:absolute lg:-bottom-8 lg:-left-6 lg:mx-0 lg:mt-0">
                <p className="text-[40px] leading-none font-bold tracking-[-0.045em] text-solar">{detail.highlight.value}</p>
                <p className="mt-2 text-[15px] leading-snug text-white/80">{detail.highlight.label}</p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-16 lg:col-span-7">
            {detail.sections.map((s) => (
              <Reveal key={s.title}>
                <h2 className={`${type.h2Sm} text-navy`}>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className={`${type.body} mt-5 max-w-[65ch] text-muted`}>
                    {p}
                  </p>
                ))}
                {s.bullets && <CheckList className="mt-7" items={s.bullets} />}
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <nav aria-label="Outros serviços" className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-navy">Outros serviços da STAR</p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {others.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="group flex min-h-12 items-center justify-between gap-4 py-3 text-[15px] font-medium text-ink hover:text-blue">
                      {s.label}
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        aria-hidden
                        className="shrink-0 transition-transform duration-200 ease-(--ease-out-strong) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </Container>
      </section>

      <Faq id="duvidas" items={detail.faq} title={`Dúvidas sobre ${detail.service.label.toLowerCase()}`} tone="canvas" />
      <CtaBand cta={detail.cta} />
    </>
  );
}
