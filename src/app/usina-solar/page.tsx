import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { photos } from "@/data/projects";
import { flagshipClaim } from "@/lib/site";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/usina-solar";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Usina solar", path },
];
const description =
  "Projeto e montagem de usina solar em Uberlândia com a STAR Energia Solar, responsável pela maior usina solar em telhado de Minas Gerais.";

export const metadata: Metadata = pageMetadata({
  title: "Usina Solar em Uberlândia: Projeto e Montagem | STAR Energia Solar",
  description,
  path,
  image: photos.usinaAerea,
});

const stages = [
  { title: "Estudo da área e do consumo", text: "Levantamento da cobertura ou da área disponível e da demanda de energia que a usina vai atender." },
  { title: "Projeto da usina", text: "Definição do arranjo dos módulos, dos equipamentos e da distribuição do sistema na estrutura." },
  { title: "Montagem", text: "Instalação dos módulos, inversores e proteções conforme o projeto, com organização de cabos e conexões." },
  { title: "Acompanhamento", text: "Orientação sobre o funcionamento e os cuidados com a usina, com limpeza e manutenção quando necessário." },
];

export default function UsinaPage() {
  const aerial = photos.usinaAerea;
  const main = photos.usinaGalpao;
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema("Projeto e Montagem de Usina Solar", description, path)]} />

      {/* Título centrado + foto aérea em largura total */}
      <section aria-labelledby="page-title" className="pt-6 sm:pt-10">
        <Container className="text-center">
          <Breadcrumbs items={crumbs} className="flex justify-center" />
          <h1 id="page-title" className={`${type.h1Page} mx-auto mt-8 max-w-4xl text-navy`}>
            Projeto e montagem de usina solar
          </h1>
          <p className={`${type.lead} mx-auto mt-6 max-w-2xl text-muted`}>
            Usinas fotovoltaicas de grande porte em telhados industriais, planejadas e montadas pela STAR Energia Solar em Uberlândia.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg">Falar sobre um projeto de usina</WhatsAppButton>
            <ButtonLink href="/projetos#usina" variant="outline" size="lg" icon="arrow">
              Ver fotos da usina
            </ButtonLink>
          </div>
        </Container>

        <div className="mx-auto mt-14 max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <figure className="relative overflow-hidden rounded-[24px] bg-navy/10">
            <Image
              src={aerial.src}
              width={aerial.width}
              height={aerial.height}
              alt={aerial.alt}
              preload
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="animate-hero-in aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/85 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6 text-white sm:p-10">
              <span className="mb-1 h-12 w-[3px] shrink-0 rounded-full bg-solar" aria-hidden />
              <span>
                <span className="block text-[22px] leading-tight font-bold tracking-[-0.03em] sm:text-[32px]">{flagshipClaim}</span>
                <span className="mt-1.5 block text-sm text-white/80 sm:text-base">Projeto da STAR Energia Solar</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Etapas em lista vertical numerada, ao lado do título fixo */}
      <section aria-labelledby="etapas-title" className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <h2 id="etapas-title" className={`${type.h2} text-navy`}>
                Da análise da área à usina em funcionamento
              </h2>
              <p className={`${type.body} mt-5 max-w-md text-muted`}>
                Uma usina solar envolve estrutura, projeto elétrico e montagem em grande escala. Cada etapa é conduzida pela equipe da
                STAR.
              </p>
            </Reveal>
          </div>
          <ol className="lg:col-span-7">
            {stages.map((stage, i) => (
              <Reveal as="li" key={stage.title} delay={i * 60} className="grid grid-cols-[56px_1fr] gap-5 border-t border-line py-8 last:border-b sm:grid-cols-[80px_1fr]">
                <span className="text-[34px] leading-none font-bold tracking-[-0.05em] text-solar tabular-nums sm:text-[44px]" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{stage.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{stage.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Usina em telhado: foto do galpão principal + texto em fundo azul */}
      <section aria-labelledby="telhado-title" className="on-dark bg-navy-950 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <Reveal className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <h2 id="telhado-title" className={type.h2Sm}>
              Por que instalar a usina no telhado
            </h2>
            <p className={`${type.body} mt-5 max-w-lg text-white/75`}>
              Telhados de galpões e indústrias são áreas amplas, já existentes e expostas ao sol. Usá-los para a geração de energia
              evita ocupar terreno e aproxima a produção de quem consome.
            </p>
            <p className={`${type.body} mt-4 max-w-lg text-white/75`}>
              A avaliação da estrutura da cobertura faz parte do projeto, para que a montagem seja feita com segurança.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tem uma área para uma usina solar?"
        text="Conte sobre o espaço disponível e o consumo do seu negócio. A equipe da STAR orienta os próximos passos."
        cta="Falar sobre um projeto de usina"
      />
    </>
  );
}
