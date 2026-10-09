import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessRail } from "./ProcessRail";
import { type } from "@/lib/type";

export type Step = { title: string; text: string };

const defaultSteps: Step[] = [
  { title: "Avaliação", text: "Entendemos o perfil e as necessidades do projeto." },
  { title: "Projeto", text: "Definimos uma solução fotovoltaica adequada." },
  { title: "Instalação", text: "Executamos a instalação do sistema." },
  { title: "Acompanhamento", text: "Orientamos sobre os cuidados necessários para o sistema." },
];

type Props = {
  id?: string;
  title?: string;
  intro?: string;
  steps?: Step[];
};

export function Process({
  id = "como-funciona",
  title = "Como funciona",
  intro = "Quatro etapas, do primeiro contato aos cuidados com o sistema instalado.",
  steps = defaultSteps,
}: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="on-dark relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <div className="pv-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" aria-hidden />
      <Container className="relative">
        <Reveal>
          <h2 id={`${id}-title`} className={type.h2}>
            {title}
          </h2>
          <p className={`${type.body} mt-5 max-w-lg text-white/70`}>{intro}</p>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          <ProcessRail>
            <ol className="relative grid gap-12 pl-14 lg:grid-cols-4 lg:gap-8 lg:pt-14 lg:pl-0">
              {steps.map((step, i) => {
                const n = String(i + 1).padStart(2, "0");
                return (
                  <Reveal as="li" key={step.title} delay={i * 70} className="relative">
                    <span
                      className="absolute top-0 -left-14 grid size-10 place-items-center rounded-full bg-navy-950 text-[13px] font-semibold text-solar tabular-nums ring-1 ring-white/20 lg:-top-14 lg:left-0"
                      aria-hidden
                    >
                      {n}
                    </span>
                    <h3 className="pt-1.5 text-[22px] font-semibold tracking-[-0.025em] lg:pt-2">
                      <span className="sr-only">Etapa {n}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[30ch] text-[15.5px] leading-relaxed text-white/70">{step.text}</p>
                  </Reveal>
                );
              })}
            </ol>
          </ProcessRail>
        </div>
      </Container>
    </section>
  );
}
