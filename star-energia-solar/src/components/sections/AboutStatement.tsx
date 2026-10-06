import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { flagshipClaim } from "@/lib/site";

const pillars = [
  { title: "Projeto", text: "Solução planejada para o perfil e o consumo de cada imóvel." },
  { title: "Instalação", text: "Execução do sistema fotovoltaico conforme o projeto." },
  { title: "Cuidados", text: "Limpeza, manutenção e orientação depois da instalação." },
];

/** Composição tipográfica centrada: a declaração é o próprio elemento visual. */
export function AboutStatement() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden border-y border-line bg-canvas py-24 sm:py-32">
      <div className="pv-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_45%,black,transparent)]" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="sobre-title" className="text-sm font-semibold text-blue">
            Sobre a STAR Energia Solar
          </h2>
          <p className="mt-6 text-[28px] leading-[1.2] font-semibold tracking-[-0.03em] text-navy sm:text-[38px] lg:text-[44px]">
            Há mais de 7 anos, a STAR desenvolve projetos, instalações e soluções em{" "}
            <span className="text-blue">energia solar fotovoltaica</span> em Uberlândia e região.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-muted">
            São mais de 600 projetos instalados, de sistemas para casas a usinas de grande porte. Entre eles está{" "}
            {flagshipClaim.charAt(0).toLowerCase() + flagshipClaim.slice(1)}.
          </p>
        </Reveal>

        <dl className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="text-center">
              <dt className="flex items-center justify-center gap-3 text-lg font-semibold text-navy">
                <span className="h-[2px] w-5 rounded-full bg-solar" aria-hidden />
                {p.title}
              </dt>
              <dd className="mx-auto mt-3 max-w-[28ch] text-[15.5px] leading-relaxed text-muted">{p.text}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
