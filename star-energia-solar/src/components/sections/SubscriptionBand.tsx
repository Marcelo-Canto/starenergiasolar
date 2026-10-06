import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { subscriptionDiscount } from "@/lib/site";
import { type } from "@/lib/type";

/** Energia solar por assinatura: o cliente recebe energia solar com desconto, sem instalar placas. */
export function SubscriptionBand() {
  return (
    <section id="assinatura" aria-labelledby="assinatura-title" className="border-y border-line bg-canvas py-20 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="text-sm font-semibold text-blue">Sem instalação de placas</p>
          <h2 id="assinatura-title" className={`${type.h2} mt-4 text-navy`}>
            Energia solar por assinatura
          </h2>
          <p className={`${type.body} mt-5 max-w-xl text-muted`}>
            Quer usar energia solar sem fazer obra nem colocar equipamentos no telhado? Na assinatura da STAR, você recebe energia
            solar com {subscriptionDiscount} de desconto, sem instalar placas no seu imóvel.
          </p>
          <WhatsAppButton variant="navy" className="mt-8">
            Quero saber da assinatura
          </WhatsAppButton>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5">
          <div className="rounded-[20px] bg-white p-7 ring-1 ring-line sm:p-9">
            <p className="text-[44px] leading-none font-bold tracking-[-0.045em] text-navy sm:text-[52px]">20% a 30%</p>
            <p className="mt-2 text-[15px] font-medium text-muted">de desconto na energia</p>
            <CheckList
              className="mt-7 border-t border-line pt-7"
              items={["Sem instalação de placas no imóvel", "Sem obra e sem equipamentos", "Energia de fonte solar"]}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
