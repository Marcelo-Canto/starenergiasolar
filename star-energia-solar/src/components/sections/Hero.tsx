import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { HeroVideo } from "./HeroVideo";
import { type } from "@/lib/type";

/**
 * Hero em largura total: vídeo ilustrativo ao fundo, com um véu branco que cobre o lado do texto
 * (garante leitura) e deixa a imagem aparecer à direita. No celular o véu cobre a tela toda.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate -mt-[77px] overflow-hidden pt-[77px] lg:-mt-[89px] lg:pt-[89px]">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src="/images/brand/hero-poster.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(255_255_255/0.93)_0%,rgb(255_255_255/0.88)_100%)] lg:bg-[linear-gradient(90deg,rgb(255_255_255/0.97)_0%,rgb(255_255_255/0.92)_36%,rgb(255_255_255/0.45)_64%,rgb(255_255_255/0)_100%)]"
        aria-hidden
      />
      {/* Faixa clara no topo para o menu continuar legível sobre o vídeo */}
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/90 to-transparent" aria-hidden />

      <Container className="flex min-h-[620px] items-center pt-8 pb-16 sm:pt-12 lg:min-h-[720px] lg:pb-24">
        <div className="max-w-[44rem]">
          <h1 id="hero-title" className="text-[40px] leading-[1.0] font-bold tracking-[-0.045em] text-navy sm:text-[56px] lg:text-[68px] xl:text-[76px]">
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
          <p className={`${type.lead} mt-8 max-w-[34rem] text-ink/75`}>
            Mais de 600 projetos instalados em Uberlândia e região. Sistemas fotovoltaicos para casas, empresas e usinas, e energia
            solar por assinatura.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg">Solicitar orçamento</WhatsAppButton>
            <ButtonLink href="/projetos" variant="outline" size="lg" icon="arrow">
              Conhecer nossos projetos
            </ButtonLink>
          </div>
          <dl className="mt-10 grid max-w-[34rem] grid-cols-2 gap-x-5 border-t border-navy/15 pt-6">
            <div>
              <dt className="text-[28px] leading-none font-bold tracking-[-0.045em] whitespace-nowrap text-navy sm:text-[40px]">+600</dt>
              <dd className="mt-2 text-sm leading-snug text-ink/70">projetos instalados em Uberlândia e região</dd>
            </div>
            <div className="border-l border-navy/15 pl-5 sm:pl-8">
              <dt className="text-[28px] leading-none font-bold tracking-[-0.045em] whitespace-nowrap text-navy sm:text-[40px]">20 a 30%</dt>
              <dd className="mt-2 text-sm leading-snug text-ink/70">
                de desconto na{" "}
                <Link
                  href="/energia-solar-por-assinatura"
                  className="font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4 hover:text-blue"
                >
                  energia por assinatura
                </Link>
                , sem instalar placas
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
