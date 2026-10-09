/** Destaques da STAR em faixa contínua: a lista corre de ponta a ponta e pausa ao passar o mouse. */
const items = [
  { value: "+600", label: "projetos instalados em Uberlândia e região" },
  { value: "+7 anos", label: "no mercado de energia solar" },
  { value: "Maior usina", label: "solar em telhado de Minas Gerais" },
  { value: "Assinatura", label: "energia solar com 20% a 30% de desconto" },
  { value: "Uberlândia", label: "sede no Santa Mônica, atendimento na região" },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-4 pr-12 sm:pr-16">
          <span className="size-2 shrink-0 rounded-full bg-solar" aria-hidden />
          <span className="text-[26px] leading-none font-bold tracking-[-0.04em] whitespace-nowrap text-navy sm:text-[34px]">{item.value}</span>
          <span className="text-[15px] whitespace-nowrap text-muted">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProofBar() {
  return (
    <section
      aria-label="Destaques da STAR Energia Solar"
      className="group overflow-hidden border-y border-line bg-canvas py-7 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:py-9"
    >
      {/* Duas cópias da lista lado a lado: a animação desloca metade da largura e recomeça sem salto */}
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
