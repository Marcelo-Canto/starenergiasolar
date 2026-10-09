import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";
import { SunRays } from "./SunRays";

type Props = {
  title?: string;
  text?: string;
  cta?: string;
};

export function CtaBand({
  title = "Seu projeto começa com uma boa avaliação.",
  text = "Fale com a STAR Energia Solar e conheça uma solução fotovoltaica adequada às necessidades do seu imóvel.",
  cta = "Solicitar orçamento",
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <Reveal className="on-dark relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-navy text-white">
        <div className="pv-grid-dark absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,transparent,black_60%)]" aria-hidden />
        <SunRays className="absolute -right-40 -bottom-44 -z-10 w-[520px] opacity-45 sm:-right-16 lg:right-10 lg:-bottom-60 lg:w-[640px]" />
        <Container className="py-20 sm:py-24">
          <h2 id="cta-title" className="max-w-[18ch] text-[34px] leading-[1.03] font-bold tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
          <WhatsAppButton size="lg" className="mt-10">
            {cta}
          </WhatsAppButton>
        </Container>
      </Reveal>
    </section>
  );
}
