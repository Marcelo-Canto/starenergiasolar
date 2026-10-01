import type { Metadata } from "next";
import Image from "next/image";
import { SunDim, Lightning, House } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { photos } from "@/data/projects";
import { residencialFaq } from "@/data/faq";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/energia-solar-residencial";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Energia solar residencial", path },
];
const description =
  "Energia solar residencial em Uberlândia: painéis solares planejados para o consumo da sua casa e o seu telhado. Projeto, instalação e manutenção com a STAR.";

export const metadata: Metadata = pageMetadata({
  title: "Energia Solar Residencial em Uberlândia | STAR Energia Solar",
  description,
  path,
  image: photos.residenciaVertical,
});

const howItWorks = [
  { icon: SunDim, title: "Os painéis captam a luz", text: "Os módulos no telhado transformam a luz do sol em energia elétrica." },
  { icon: Lightning, title: "O inversor converte", text: "A energia é convertida para o padrão usado pelos aparelhos da casa." },
  { icon: House, title: "A casa usa a energia", text: "O que não é consumido na hora vai para a rede da distribuidora, conforme as regras vigentes." },
];

export default function ResidencialPage() {
  const hero = photos.residenciaVertical;
  const detail = photos.residenciaFrontal;
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema("Projetos de Energia Solar Residenciais", description, path)]} />

      {/* Hero dividido, foto à direita */}
      <section aria-labelledby="page-title" className="pt-6 pb-20 sm:pt-10 lg:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className={`${type.h1Page} mt-8 text-navy`}>
              Energia solar residencial em Uberlândia
            </h1>
            <p className={`${type.lead} mt-7 max-w-xl text-muted`}>
              Painéis solares no telhado da sua casa, com um sistema planejado para o consumo da família e para as características do
              imóvel.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg">Quero avaliar meu projeto</WhatsAppButton>
              <ButtonLink href="/projetos#residencial" variant="outline" size="lg" icon="arrow">
                Ver projetos residenciais
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[20px] bg-navy/10">
              <Image
                src={hero.src}
                width={hero.width}
                height={hero.height}
                alt={hero.alt}
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="animate-hero-in aspect-[4/3] w-full object-cover lg:aspect-[1/1]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Explicação em 3 passos, em colunas numeradas */}
      <section aria-labelledby="como-title" className="border-y border-line bg-canvas py-20 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 id="como-title" className={`${type.h2Sm} text-navy`}>
              Como a energia solar funciona na sua casa
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {howItWorks.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 70} className="border-t-2 border-navy pt-6">
                <div className="flex items-center justify-between">
                  <Icon size={28} weight="duotone" className="text-blue" aria-hidden />
                  <span className="text-sm font-semibold text-muted tabular-nums" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-navy">{title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* O que é avaliado: foto larga + checklist */}
      <section aria-labelledby="avaliacao-title" className="py-24 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:order-last lg:col-span-6">
            <Image
              src={detail.src}
              width={detail.width}
              height={detail.height}
              alt={detail.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] w-full rounded-[20px] object-cover"
            />
          </Reveal>
          <Reveal delay={60} className="lg:col-span-6">
            <h2 id="avaliacao-title" className={`${type.h2Sm} text-navy`}>
              O que a STAR avalia no seu imóvel
            </h2>
            <p className={`${type.body} mt-5 text-muted`}>
              Cada casa tem uma rotina de consumo e um telhado diferente. A avaliação reúne as informações que definem o tamanho e a
              posição do sistema.
            </p>
            <CheckList
              className="mt-8"
              items={[
                "Histórico de consumo na conta de luz",
                "Tipo e condição do telhado",
                "Área disponível e orientação em relação ao sol",
                "Planos da família para o uso de energia",
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <Faq id="duvidas" items={residencialFaq} title="Dúvidas sobre energia solar residencial" tone="canvas" />
      <CtaBand title="Quer saber se a sua casa comporta energia solar?" cta="Quero avaliar meu projeto" />
    </>
  );
}
