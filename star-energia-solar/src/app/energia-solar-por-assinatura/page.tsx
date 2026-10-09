import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const path = "/energia-solar-por-assinatura";
const description = "Conheça a energia solar por assinatura em Uberlândia com a STAR Energia Solar, uma alternativa para consultar descontos na conta sem instalar placas no imóvel.";

export const metadata: Metadata = pageMetadata({
  title: "Energia Solar por Assinatura em Uberlândia | STAR",
  description,
  path,
});

export default function Page() {
  return (
    <ServiceLanding
      title={"Energia solar por assinatura em Uberlândia"}
      eyebrow={"ECONOMIA SEM INSTALAR PAINÉIS"}
      description={description}
      path={path}
      intro={"A energia solar por assinatura pode ser uma alternativa para quem quer aproveitar créditos de energia sem instalar painéis no próprio telhado. Consulte a STAR para entender a disponibilidade, as regras e as condições aplicáveis à sua unidade consumidora."}
      sections={[
  { title: "Como funciona o modelo", body: "Em geral, o consumidor adere a um plano ligado à geração compartilhada e recebe créditos conforme as regras do programa e da distribuidora. As condições específicas precisam ser confirmadas antes da adesão." },
  { title: "Sem obra no telhado do cliente", body: "Como a geração acontece em uma usina participante, não é necessário instalar módulos fotovoltaicos no telhado da residência ou empresa para aderir ao modelo." },
  { title: "Entenda as condições da oferta", body: "A STAR informa desconto de 20% a 30%, sujeito às regras e condições aplicáveis. Consulte a disponibilidade para sua unidade consumidora e confirme como os créditos e cobranças funcionam." },
  { title: "Confira sua elegibilidade", body: "A possibilidade de adesão depende da área atendida, da distribuidora, do perfil da unidade consumidora e dos termos do plano. A avaliação individual evita expectativas incorretas." }
]}
      faqs={[
  { question: "Preciso instalar placas solares para ter energia por assinatura?", answer: "Não é necessário instalar painéis no imóvel para participar de um modelo de energia por assinatura, mas é preciso verificar as condições e a elegibilidade da unidade consumidora." },
  { question: "O desconto é garantido para qualquer conta?", answer: "Não. O percentual informado depende das condições do plano e da elegibilidade. Consulte a STAR para confirmar as condições aplicáveis ao seu caso." }
]}
    />
  );
}
