import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { type } from "@/lib/type";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate -mt-[77px] min-h-[720px] overflow-hidden bg-navy-950 pt-[77px] text-white lg:-mt-[89px] lg:min-h-[760px] lg:pt-[89px]"
    >
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/projects/usina-telhado-vista-aerea.webp"
        aria-hidden="true"
      >
        <source src="/videos/hero-solar.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,24,56,0.94)_0%,rgba(3,24,56,0.83)_38%,rgba(3,24,56,0.38)_72%,rgba(3,24,56,0.16)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/55 via-transparent to-navy-950/25" aria-hidden="true" />
      <Container className="flex min-h-[643px] items-center py-16 sm:py-20 lg:min-h-[671px] lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-solar sm:text-sm">
            <span className="h-px w-9 bg-solar" aria-hidden="true" />
            ENERGIA SOLAR • UBERLÂNDIA E REGIÃO
          </p>
          <h1 id="hero-title" className="max-w-3xl text-[42px] leading-[0.99] font-bold tracking-[-0.05em] text-white sm:text-[58px] lg:text-[72px] xl:text-[80px]">
            Energia solar em{" "}
            <span className="text-solar">Uberlândia</span>
            {" "}para sua casa ou empresa.
          </h1>
          <p className={`${type.lead} mt-7 max-w-2xl text-white/85`}>
            Projetos fotovoltaicos planejados para o seu consumo, com soluções residenciais, empresariais, usinas e energia solar por assinatura.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton size="lg">Solicitar orçamento</WhatsAppButton>
            <ButtonLink href="/projetos" variant="light" size="lg" icon="arrow">
              Conhecer nossos projetos
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm font-medium text-white/85">
            <span><span className="mr-2 text-solar" aria-hidden="true">✓</span>Mais de 600 projetos instalados</span>
            <span><span className="mr-2 text-solar" aria-hidden="true">✓</span>Mais de 7 anos de experiência</span>
            <span><span className="mr-2 text-solar" aria-hidden="true">✓</span>Atendimento em Uberlândia e região</span>
          </div>
        </div>
      </Container>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" aria-hidden="true" />
    </section>
  );
}
