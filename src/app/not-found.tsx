import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <p className="text-sm font-semibold text-orange">Erro 404</p>
        <h1 className="mt-4 max-w-[16ch] text-[40px] leading-[1.02] font-bold tracking-[-0.045em] text-navy sm:text-6xl">
          Esta página não foi encontrada
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted">O endereço pode ter mudado. Volte para o início ou fale com a STAR.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/" variant="navy">
            Voltar para o início
          </ButtonLink>
          <WhatsAppButton variant="outline">Falar com a STAR</WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
