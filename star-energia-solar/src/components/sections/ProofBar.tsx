import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { allServices } from "@/data/services";

/** Destaques verificáveis: tempo de mercado, projeto de referência, portfólio de serviços e localização. */
const items = [
  { value: "+7", label: "anos no mercado de energia solar" },
  { value: "Maior", label: "usina solar em telhado de Minas Gerais" },
  { value: String(allServices.length), label: "soluções, do projeto ao financiamento" },
  { value: "Uberlândia", label: "sede no Santa Mônica, atendimento na região" },
];

export function ProofBar() {
  return (
    <section aria-label="Destaques da STAR Energia Solar" className="border-y border-line bg-canvas">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 60}
              className="border-line py-8 odd:border-r odd:pr-5 even:pl-5 max-lg:[&:nth-child(-n+2)]:border-b lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="text-[clamp(22px,6.8vw,40px)] leading-none lg:text-[32px] xl:text-[42px] font-bold tracking-[-0.045em] text-navy">
                {item.value}
              </p>
              <p className="mt-3 max-w-[22ch] text-[14.5px] leading-snug text-muted sm:text-[15px]">{item.label}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
