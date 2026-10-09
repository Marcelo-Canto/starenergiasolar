import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { HeroVideo } from "./HeroVideo";
import { type } from "@/lib/type";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const poster = (width: number) => `${base}/_img/images/brand/hero-poster-${width}.webp`;
const posterSrcSet = `${poster(1080)} 1080w, ${poster(1600)} 1600w`;
/** Pixel transparente: o que o celular "carrega" no lugar da imagem de fundo. */
const EMPTY = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/**
 * Hero em largura total. No desktop: vídeo ilustrativo ao fundo, com um véu branco do lado do texto.
 * No celular não há imagem nem vídeo de fundo (ficariam escondidos atrás do texto e custariam vários MB):
 * o conteúdo principal vira o próprio título, que aparece imediatamente.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate -mt-[77px] overflow-hidden bg-canvas pt-[77px] lg:-mt-[89px] lg:bg-white lg:pt-[89px]"
    >
      {/* A imagem de fundo só é pedida em telas grandes (preload e <source> com media query) */}
      <link rel="preload" as="image" media="(min-width: 1024px)" imageSrcSet={posterSrcSet} imageSizes="100vw" fetchPriority="high" />
      <div className="absolute inset-0 -z-20 hidden lg:block" aria-hidden>
        <picture>
          <source media="(min-width: 1024px)" srcSet={posterSrcSet} sizes="100vw" />
          <img src={EMPTY} alt="" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        </picture>
        <HeroVideo />
      </div>
      <div
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgb(255_255_255/0.97)_0%,rgb(255_255_255/0.92)_36%,rgb(255_255_255/0.45)_64%,rgb(255_255_255/0)_100%)] lg:block"
        aria-hidden
      />
      {/* Faixa clara no topo para o menu continuar legível sobre o vídeo */}
      <div className="absolute inset-x-0 top-0 -z-10 hidden h-40 bg-gradient-to-b from-white/90 to-transparent lg:block" aria-hidden />
      {/* Celular: malha discreta no lugar da imagem */}
      <div className="pv-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] lg:hidden" aria-hidden />

      <Container className="flex items-center pt-8 pb-14 sm:pt-12 lg:min-h-[720px] lg:pb-24">
        <div className="max-w-[44rem]">
          <h1 id="hero-title" className="text-[40px] leading-[1.0] font-bold tracking-[-0.045em] text-navy sm:text-[56px] lg:text-[68px] xl:text-[76px]">
            Energia solar em{" "}
            <span className="relative inline-block whitespace-nowrap">
              Uberlândia
              <svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden className="absolute -bottom-1.5 left-0 h-2.5 w-full text-solar sm:-bottom-2">
                <path d="M2 9 C 80 2, 220 2, 298 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
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
