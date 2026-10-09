import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { photos } from "@/data/projects";
import { type } from "@/lib/type";

export function ResidentialSplit() {
  const img = photos.residenciaDoisArranjos;
  return (
    <section id="residencial" aria-labelledby="residencial-title" className="bg-canvas py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="overflow-hidden rounded-[20px] bg-navy/10">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/5.4]"
            />
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-6">
          <h2 id="residencial-title" className={`${type.h2} text-navy`}>
            Energia solar residencial em Uberlândia
          </h2>
          <p className={`${type.body} mt-6 text-muted`}>
            Com painéis solares no telhado, a sua casa passa a gerar parte da própria energia a partir da luz do sol. Cada projeto
            parte do consumo da família e das características do imóvel.
          </p>
          <CheckList
            className="mt-8"
            items={["Geração própria de energia no imóvel", "Sistema planejado conforme o seu consumo", "Solução adequada ao seu tipo de telhado"]}
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton variant="navy">Quero avaliar meu projeto</WhatsAppButton>
            <ButtonLink href="/energia-solar-residencial" variant="outline" icon="arrow">
              Energia solar para casas
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
