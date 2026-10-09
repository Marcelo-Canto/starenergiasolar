import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const path = "/financiamento-energia-solar";
const description = "Saiba como consultar opções de financiamento de energia solar em Uberlândia com a STAR Energia Solar. Condições dependem da análise de cada instituição.";

export const metadata: Metadata = pageMetadata({
  title: "Financiamento de Energia Solar em Uberlândia | STAR",
  description,
  path,
});

export default function Page() {
  return (
    <ServiceLanding
      title={"Financiamento de energia solar em Uberlândia"}
      eyebrow={"FORMAS DE VIABILIZAR SEU PROJETO"}
      description={description}
      path={path}
      intro={"Quer avaliar a possibilidade de instalar energia solar e pagar de forma parcelada? Converse com a STAR para conhecer as opções de financiamento disponíveis para o seu perfil e projeto."}
      sections={[
  { title: "Comece pelo dimensionamento", body: "Antes de comparar formas de pagamento, é importante estimar o sistema adequado ao consumo do imóvel. O projeto ajuda a entender os equipamentos necessários e o investimento envolvido." },
  { title: "Compare as condições com atenção", body: "Taxas, prazos, entrada e aprovação dependem da instituição financeira e da análise de crédito. Confira o custo total da operação antes de contratar." },
  { title: "Avalie o consumo e o orçamento", body: "A melhor escolha considera a conta de energia, o orçamento mensal e os objetivos de longo prazo. Evite tomar a decisão com base apenas no valor da parcela." },
  { title: "Peça uma avaliação para seu caso", body: "A equipe da STAR pode orientar a etapa de orçamento do sistema e informar quais opções estão disponíveis no momento. A contratação e a aprovação dependem da instituição financeira." }
]}
      faqs={[
  { question: "O financiamento de energia solar é aprovado para todos?", answer: "Não. A aprovação, as taxas e as condições são definidas pela instituição financeira conforme a análise de cada solicitante." },
  { question: "Posso financiar energia solar residencial ou empresarial?", answer: "As possibilidades dependem das linhas disponíveis e da análise do cliente. Consulte a STAR para verificar as opções atuais." }
]}
    />
  );
}
