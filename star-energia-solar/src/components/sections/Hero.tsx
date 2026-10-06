import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { photos } from "@/data/projects";
import { type } from "@/lib/type";

export function Hero() {
  const img = photos.usinaAerea;
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate -mt-[77px] overflow-x-clip pt-[77px] lg:-mt-[89px] lg:pt-[89px]">
      <div className="pv-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_65%_60%_at_15%_35%,black,transparent)]" aria-hidden />
      <Container className="grid items-center gap-10 pt-6 pb-16 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12 lg:pb-24">
        <div className="lg:col-span-6">
          <h1 id="hero-title" className="text-[40px] leading-[1.0] font-bold tracking-[-0.045em] text-navy sm:text-[54px] lg:text-[56px] xl:text-[64px]">
            Energia solar em{" "}
            <span className="relative inline-block whitespace-nowrap">
              Uberlândia
              <svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden className="absolute -bottom-1.5 left-0 h-2.5 w-full text-solar sm:-bottom-2">
                <path
                  d="M2 9 C 80 2, 220 2, 298 7"
                  pathLength={1}
                  strokeDasharray="1"
                  className="animate-draw"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            para gerar mais economia
          </h1>
          <p className={`${type.lead} mt-8 max-w-[33rem] text-muted`}>
            Mais de 600 projetos instalados em Uberlândia e região. Sistemas fotovoltaicos para casas, empresas e usinas, e energia
            solar por assinatura.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg">Solicitar orçamento</WhatsAppButton>
            <ButtonLink href="/projetos" variant="outline" size="lg" icon="arrow">
              Conhecer nossos projetos
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-[34rem] grid-cols-2 gap-x-5 border-t border-line pt-6">
            <div>
              <dt className="text-[28px] leading-none font-bold tracking-[-0.045em] whitespace-nowrap text-navy sm:text-[40px]">+600</dt>
              <dd className="mt-2 text-sm leading-snug text-muted">projetos instalados em Uberlândia e região</dd>
            </div>
            <div className="border-l border-line pl-5 sm:pl-8">
              <dt className="text-[28px] leading-none font-bold tracking-[-0.045em] whitespace-nowrap text-navy sm:text-[40px]">20 a 30%</dt>
              <dd className="mt-2 text-sm leading-snug text-muted">
                de desconto na{" "}
                <Link href="/#assinatura" className="font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4 hover:text-blue">
                  energia por assinatura
                </Link>
                , sem instalar placas
              </dd>
            </div>
          </dl>
        </div>

        <figure className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[20px] bg-navy/10">
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              preload
              sizes="(min-width: 1320px) 640px, (min-width: 1024px) 50vw, 100vw"
              className="animate-hero-in aspect-[4/3] w-full object-cover lg:aspect-[1/1] xl:aspect-[6/5]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-5 text-white sm:p-7">
              <span className="mb-1.5 h-10 w-[3px] shrink-0 rounded-full bg-solar" aria-hidden />
              <span>
                <span className="block text-[17px] leading-snug font-semibold tracking-[-0.015em] sm:text-xl">Usina solar em telhado industrial</span>
                <span className="mt-1 block text-sm text-white/80">Projeto da STAR Energia Solar</span>
              </span>
            </figcaption>
          </div>
        </figure>
      </Container>
    </section>
  );
}
