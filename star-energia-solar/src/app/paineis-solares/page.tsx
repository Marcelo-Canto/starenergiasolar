import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const path = "/paineis-solares";
const description = "Conheça os pontos considerados na escolha de painéis solares em Uberlândia para projetos fotovoltaicos residenciais e empresariais com a STAR Energia Solar.";

export const metadata: Metadata = pageMetadata({
  title: "Painéis Solares em Uberlândia | STAR Energia Solar",
  description,
  path,
});

export default function Page() {
  return (
    <ServiceLanding
      title={"Painéis solares em Uberlândia: escolha do sistema"}
      eyebrow={"MÓDULOS FOTOVOLTAICOS"}
      description={description}
      path={path}
      intro={"Os painéis solares fazem parte de um sistema completo de geração fotovoltaica. A escolha dos módulos precisa considerar o projeto, a área disponível, as características elétricas e a compatibilidade com os demais equipamentos."}
      sections={[
  { title: "Potência e área disponível", body: "A quantidade e a potência dos módulos são definidas a partir da geração desejada, do consumo e do espaço disponível no telhado ou na estrutura." },
  { title: "Compatibilidade com o inversor", body: "Os módulos precisam ser compatíveis com o inversor e com a configuração elétrica do sistema. O projeto técnico orienta essa combinação." },
  { title: "Condições do telhado e instalação", body: "Orientação, inclinação, sombreamento e condições estruturais influenciam o planejamento. A avaliação do local ajuda a identificar restrições." },
  { title: "Sistema completo, não apenas o painel", body: "Estrutura, inversor, cabeamento, proteções e instalação também são importantes para o funcionamento e a segurança do conjunto." }
]}
      faqs={[
  { question: "Posso comprar apenas os painéis solares?", answer: "A disponibilidade de fornecimento deve ser confirmada diretamente com a STAR. Em projetos completos, os módulos são especificados de acordo com o dimensionamento do sistema." },
  { question: "Qual painel solar é melhor?", answer: "Não existe uma única opção ideal para todos os imóveis. A escolha depende de especificações técnicas, disponibilidade, compatibilidade e condições do projeto." }
]}
    />
  );
}
