import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { photos } from "@/data/projects";
import { type } from "@/lib/type";

/** Composição full-bleed: a foto ocupa a largura toda e o texto vive sobre um degradê azul, não sobre a imagem crua. */
export function BusinessFeature() {
  const img = photos.metalicaArranjo;
  return (
    <section id="empresarial" aria-labelledby="empresarial-title" className="on-dark relative isolate overflow-hidden bg-navy-950 text-white">
      <Image src={img.src} alt={img.alt} fill sizes="100vw" className="-z-20 object-cover" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(4_28_66/0.97)_0%,rgb(4_28_66/0.9)_45%,rgb(4_28_66/0.35)_100%)] max-lg:bg-[linear-gradient(180deg,rgb(4_28_66/0.55)_0%,rgb(4_28_66/0.96)_45%)]"
        aria-hidden
      />
      <Container className="grid min-h-[620px] items-center py-24 max-lg:pt-64 sm:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 id="empresarial-title" className={type.h2}>
            Energia solar para empresas
          </h2>
          <p className={`${type.body} mt-6 max-w-xl text-white/80`}>
            Comércios, indústrias e galpões têm telhados amplos e consumo de energia elevado. Um sistema fotovoltaico planejado para a
            operação transforma essa área em geração própria.
          </p>
          <CheckList
            tone="dark"
            className="mt-8"
            items={["Projeto a partir do histórico de consumo", "Aproveitamento de telhados e coberturas metálicas", "Opções de financiamento de energia solar"]}
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton>Falar com a STAR</WhatsAppButton>
            <ButtonLink href="/energia-solar-empresarial" variant="light" icon="arrow">
              Soluções para empresas
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
