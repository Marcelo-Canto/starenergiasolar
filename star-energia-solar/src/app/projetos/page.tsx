import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { photoGroups } from "@/data/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/projetos";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Projetos", path },
];

export const metadata: Metadata = pageMetadata({
  title: "Projetos de Energia Solar em Uberlândia | STAR Energia Solar",
  description:
    "Fotos de projetos da STAR Energia Solar: a maior usina solar em telhado de Minas Gerais, sistemas residenciais, coberturas metálicas e detalhes de instalação.",
  path,
});

export default function ProjetosPage() {
  const total = photoGroups.reduce((n, g) => n + g.photos.length, 0);
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section aria-labelledby="page-title" className="pt-6 pb-12 sm:pt-10">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h1 id="page-title" className={`${type.h1Page} text-navy lg:col-span-7`}>
              Projetos de energia solar
            </h1>
            <p className={`${type.body} text-muted lg:col-span-5`}>
              {total} fotos reais de trabalhos da STAR Energia Solar, da usina em telhado industrial aos detalhes de instalação.
            </p>
          </div>

          {/* Navegação por categoria (âncoras) */}
          <nav aria-label="Categorias de projetos" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {photoGroups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-[14.5px] font-medium text-navy transition-[border-color,background-color,transform] duration-200 hover:border-navy/40 active:scale-[0.97]"
                  >
                    {g.title}
                    <span className="text-muted tabular-nums">{g.photos.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {photoGroups.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-title`}
          className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? "bg-canvas" : ""} ${i === 0 ? "border-t border-line" : ""}`}
        >
          <Container>
            <Reveal className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 id={`${g.id}-title`} className={`${type.h2Sm} text-navy`}>
                {g.title}
              </h2>
              <p className="max-w-md text-[15.5px] leading-relaxed text-muted">{g.description}</p>
            </Reveal>
            <ProjectGallery images={g.photos} variant="masonry" label={`Fotos: ${g.title}`} />
          </Container>
        </section>
      ))}

      <CtaBand title="Quer um projeto como estes no seu imóvel?" cta="Solicitar orçamento" />
    </>
  );
}
