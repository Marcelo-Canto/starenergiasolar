import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { photos } from "@/data/projects";
import { flagshipClaim } from "@/lib/site";
import { type } from "@/lib/type";

/** Projeto de referência: a foto real da usina em telhado, com a afirmação informada pela STAR. */
export function FlagshipProject() {
  const img = photos.usinaAerea;
  return (
    <section aria-labelledby="referencia-title" className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-[20px] bg-navy/10">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5">
          <p className="text-sm font-semibold text-blue">Projeto da STAR Energia Solar</p>
          <h2 id="referencia-title" className={`${type.h2} mt-4 text-navy`}>
            {flagshipClaim}
          </h2>
          <p className={`${type.body} mt-6 text-muted`}>
            Módulos fotovoltaicos distribuídos pelos telhados de um complexo industrial. Um projeto de grande porte, planejado e montado
            pela mesma equipe que atende casas e comércios em Uberlândia.
          </p>
          <ButtonLink href="/usina-solar" variant="outline" icon="arrow" className="mt-8">
            Conhecer o projeto de usina
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
