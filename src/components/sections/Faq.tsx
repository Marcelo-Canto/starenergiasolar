import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "./FaqAccordion";
import type { FaqItem } from "@/data/faq";
import { type } from "@/lib/type";

type Props = { items: FaqItem[]; title?: string; id?: string; tone?: "white" | "canvas" };

/** FAQ em coluna central: composição diferente das seções em duas colunas. */
export function Faq({ items, title = "Perguntas frequentes", id = "faq", tone = "white" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={tone === "canvas" ? "bg-canvas py-24 sm:py-32" : "py-24 sm:py-32"}>
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 id={`${id}-title`} className={`${type.h2} text-center text-navy`}>
            {title}
          </h2>
          <div className="mt-12">
            <FaqAccordion items={items} />
          </div>
          <p className="mt-10 text-center text-[15px] text-muted">
            Não encontrou a sua dúvida?{" "}
            <Link href="/#orcamento" className="font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4 hover:text-blue">
              Envie a sua pergunta pelo formulário
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
