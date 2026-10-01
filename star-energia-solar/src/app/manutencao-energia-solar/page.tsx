import type { Metadata } from "next";
import Image from "next/image";
import { TrendDown, Leaf, WarningCircle, CalendarCheck } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { photos, type Photo } from "@/data/projects";
import { manutencaoFaq } from "@/data/faq";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

const path = "/manutencao-energia-solar";
const crumbs = [
  { name: "Início", path: "/" },
  { name: "Limpeza e manutenção", path },
];
const description =
  "Limpeza de painéis solares e manutenção de energia solar em Uberlândia. Cuidados com sistemas fotovoltaicos residenciais e empresariais com a STAR.";

export const metadata: Metadata = pageMetadata({
  title: "Limpeza e Manutenção de Energia Solar em Uberlândia | STAR",
  description,
  path,
  image: photos.medicaoString,
});

const blocks: { title: string; text: string; photo: Photo }[] = [
  {
    title: "Limpeza de painéis solares",
    text: "Poeira, folhas e outras sujeiras se acumulam sobre os módulos e atrapalham a captação da luz. A limpeza é feita com cuidado para não danificar a superfície dos painéis nem as telhas.",
    photo: photos.residenciaDoisArranjos,
  },
  {
    title: "Verificação do sistema",
    text: "Além da limpeza, a manutenção pode incluir a checagem das conexões, dos quadros de proteção e do funcionamento do inversor, conforme a necessidade de cada sistema.",
    photo: photos.quadroDps,
  },
];

const signs = [
  { icon: TrendDown, text: "A geração caiu em relação a meses parecidos" },
  { icon: Leaf, text: "Há sujeira, folhas ou fezes de pássaros visíveis sobre os painéis" },
  { icon: WarningCircle, text: "O inversor mostra algum alerta ou mensagem de falha" },
  { icon: CalendarCheck, text: "O sistema está há bastante tempo sem avaliação" },
];

export default function ManutencaoPage() {
  const hero = photos.medicaoString;
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema("Limpeza e Manutenção de Energia Solar", description, path)]} />

      {/* Hero com a foto técnica à esquerda */}
      <section aria-labelledby="page-title" className="pt-6 pb-20 sm:pt-10 lg:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:order-last lg:col-span-7">
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className={`${type.h1Page} mt-8 text-navy`}>
              Limpeza e manutenção de energia solar em Uberlândia
            </h1>
            <p className={`${type.lead} mt-7 max-w-xl text-muted`}>
              Cuidados com painéis solares e sistemas fotovoltaicos de casas e empresas, para o sistema seguir funcionando bem.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg">Agendar manutenção</WhatsAppButton>
              <ButtonLink href="#sinais" variant="outline" size="lg" icon="arrow">
                Quando pedir manutenção
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[20px] bg-navy/10">
              <Image
                src={hero.src}
                width={hero.width}
                height={hero.height}
                alt={hero.alt}
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="animate-hero-in aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Blocos de serviço em grade com foto no topo */}
      <section aria-labelledby="servicos-title" className="border-t border-line bg-canvas py-24 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 id="servicos-title" className={`${type.h2} text-navy`}>
              O que envolve a manutenção
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocks.map((b, i) => (
              <Reveal as="article" key={b.title} delay={i * 80} className="overflow-hidden rounded-[20px] bg-white ring-1 ring-line">
                <Image
                  src={b.photo.src}
                  width={b.photo.width}
                  height={b.photo.height}
                  alt={b.photo.alt}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-7 sm:p-9">
                  <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-navy">{b.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sinais de atenção: lista em 2 colunas */}
      <section id="sinais" aria-labelledby="sinais-title" className="scroll-mt-24 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 id="sinais-title" className={`${type.h2Sm} text-navy`}>
              Sinais de que o sistema precisa de atenção
            </h2>
            <p className={`${type.body} mt-5 text-muted`}>
              Orientações gerais. Se notar algum destes pontos, fale com a equipe da STAR para uma avaliação.
            </p>
          </Reveal>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {signs.map(({ icon: Icon, text }, i) => (
              <Reveal as="li" key={text} delay={(i % 2) * 60} className="flex gap-4 border-t border-line py-6">
                <Icon size={26} weight="duotone" className="mt-0.5 shrink-0 text-orange" aria-hidden />
                <p className="text-[16px] leading-relaxed text-ink">{text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Faq id="duvidas" items={manutencaoFaq} title="Dúvidas sobre limpeza e manutenção" tone="canvas" />
      <CtaBand title="O seu sistema está precisando de cuidados?" cta="Agendar manutenção" />
    </>
  );
}
