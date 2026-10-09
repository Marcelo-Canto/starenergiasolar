import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { photos } from "@/data/projects";
import { type } from "@/lib/type";

/** Fotos diferentes das usadas no hero e nas seções da home, para não repetir imagem na mesma página. */
const preview = [photos.residenciaVertical, photos.inversorConexoes, photos.medicaoMultimetro, photos.residenciaColonial];

export function ProjectsPreview() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="py-24 sm:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="projetos-title" className={`${type.h2} text-navy`}>
              Projetos realizados
            </h2>
            <p className={`${type.body} mt-5 text-muted`}>
              Da usina em telhado industrial aos sistemas residenciais: fotos reais de trabalhos da STAR Energia Solar.
            </p>
          </div>
          <Link href="/projetos" className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[15px] font-semibold text-navy hover:text-blue">
            Ver todos os projetos
            <ArrowRight size={16} weight="bold" aria-hidden className="transition-transform duration-200 ease-(--ease-out-strong) group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal className="mt-12">
          <ProjectGallery images={preview} variant="mosaic" label="Fotos de projetos da STAR Energia Solar" />
        </Reveal>
      </Container>
    </section>
  );
}
