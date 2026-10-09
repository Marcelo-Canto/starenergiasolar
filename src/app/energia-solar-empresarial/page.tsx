import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Buildings, ChartLineUp, SolarRoof, Bank } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { photos } from "@/data/projects";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/energia-solar-empresarial";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Energia solar empresarial", path },
];
const description =
  "Energia solar para empresas em Uberlândia: sistemas fotovoltaicos para comércios, indústrias e galpões, planejados a partir do consumo. Consulte financiamento.";

export const metadata: Metadata = pageMetadata({
  title: "Energia Solar para Empresas em Uberlândia | STAR Energia Solar",
  description,
  path,
  image: photos.metalicaArranjo,
});

const reasons = [
  { icon: Buildings, title: "Telhados que viram geração", text: "Galpões e coberturas amplas comportam sistemas maiores, instalados sem ocupar área útil." },
  { icon: ChartLineUp, title: "Projeto a partir do consumo", text: "O dimensionamento parte do histórico de consumo e da rotina de funcionamento da empresa." },
  { icon: SolarRoof, title: "Coberturas metálicas", text: "Estruturas de fixação adequadas para telhas metálicas, comuns em comércios e indústrias." },
  { icon: Bank, title: "Financiamento", text: "A STAR trabalha com financiamento de energia solar. Consulte as opções para a sua empresa." },
];

export default function EmpresarialPage() {
  const hero = photos.metalicaArranjo;
  const roof = photos.metalicaExaustor;
  const large = photos.empresasTelhados;
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema("Projetos de Energia Solar Empresariais", description, path)]} />

      {/* Hero em largura total com a foto de fundo */}
      <section aria-labelledby="page-title" className="on-dark relative isolate overflow-hidden bg-navy-950 text-white">
        <Image src={hero.src} alt={hero.alt} fill preload sizes="100vw" className="-z-20 object-cover" />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(4_28_66/0.96)_0%,rgb(4_28_66/0.75)_45%,rgb(4_28_66/0.35)_100%)]"
          aria-hidden
        />
        <Container className="flex min-h-[560px] flex-col justify-end pt-28 pb-16 sm:min-h-[600px] lg:pb-20">
          <Breadcrumbs items={crumbs} tone="dark" />
          <h1 id="page-title" className={`${type.h1Page} mt-6 max-w-3xl`}>
            Energia solar para empresas em Uberlândia
          </h1>
          <p className={`${type.lead} mt-6 max-w-2xl text-white/80`}>
            Sistemas fotovoltaicos para comércios, indústrias e galpões, planejados a partir da demanda de energia da operação.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg">Solicitar avaliação para empresa</WhatsAppButton>
            <ButtonLink href="/usina-solar" variant="light" size="lg" icon="arrow">
              Projetos de grande porte
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Razões em grade 2x2 com filetes */}
      <section aria-labelledby="por-que-title" className="py-24 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 id="por-que-title" className={`${type.h2} text-navy`}>
              Por que empresas investem em geração própria
            </h2>
          </Reveal>
          <ul className="mt-14 grid border-t border-line sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={(i % 2) * 70}
                className="flex gap-5 border-b border-line py-9 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
              >
                <Icon size={30} weight="duotone" className="mt-0.5 shrink-0 text-blue" aria-hidden />
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Foto + texto sobre coberturas */}
      <section aria-labelledby="cobertura-title" className="bg-canvas py-24 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Image
              src={roof.src}
              width={roof.width}
              height={roof.height}
              alt={roof.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/10] w-full rounded-[20px] object-cover"
            />
          </Reveal>
          <Reveal delay={60} className="lg:col-span-5">
            <h2 id="cobertura-title" className={`${type.h2Sm} text-navy`}>
              Do telhado do comércio à cobertura do galpão
            </h2>
            <p className={`${type.body} mt-5 text-muted`}>
              Cada cobertura pede uma solução de fixação e um arranjo diferente. A STAR planeja o sistema considerando a estrutura
              existente, a área disponível e o consumo da empresa, e executa a instalação conforme o projeto.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Chamada para a página de usina */}
      <section aria-label="Usinas solares" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <Link
              href="/usina-solar"
              className="group grid overflow-hidden rounded-[20px] bg-navy text-white ring-1 ring-navy md:grid-cols-2"
            >
              <span className="relative block aspect-[16/10] md:aspect-auto">
                <Image
                  src={large.src}
                  alt={large.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-sm font-semibold text-solar">Projetos de grande porte</span>
                <span className="mt-3 text-[28px] leading-tight font-bold tracking-[-0.03em] sm:text-[34px]">Projeto e montagem de usina solar</span>
                <span className="mt-4 text-[15.5px] leading-relaxed text-white/75">
                  A STAR também planeja e monta usinas fotovoltaicas, como a maior usina solar em telhado de Minas Gerais.
                </span>
                <span className="mt-7 inline-flex items-center gap-2 font-semibold">
                  Conhecer a usina
                  <ArrowUpRight
                    size={18}
                    weight="bold"
                    aria-hidden
                    className="transition-transform duration-200 ease-(--ease-out-strong) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBand title="Vamos avaliar o consumo da sua empresa?" text="Envie as informações da sua operação e receba a orientação da equipe da STAR." cta="Falar com a STAR" />
    </>
  );
}
