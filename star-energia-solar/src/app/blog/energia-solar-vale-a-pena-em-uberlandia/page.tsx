import type { Metadata } from "next";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/blog/energia-solar-vale-a-pena-em-uberlandia";
const description = "Entenda quais fatores avaliar para saber se um sistema de energia solar faz sentido para sua casa ou empresa em Uberlândia.";

export const metadata: Metadata = pageMetadata({
  title: "Energia solar vale a pena em Uberlândia? | Blog STAR Energia Solar",
  description,
  path,
});

export default function ArticlePage() {
  return (
    <BlogArticle
      category={"Planejamento de energia solar"}
      title={"Energia solar vale a pena em Uberlândia?"}
      intro={"A decisão de instalar energia solar depende do consumo, do imóvel, do orçamento e das condições técnicas do projeto. Veja o que vale analisar antes de pedir uma proposta."}
      path={path}
      updated="8 de outubro de 2026"
      sections={[
  { heading: "Comece pela conta de energia", paragraphs: ["O histórico de consumo ajuda a estimar o tamanho do sistema necessário. Em vez de olhar apenas para o valor de uma única conta, reúna as faturas de vários meses para observar o padrão de uso ao longo do ano.", "Casas, comércios e indústrias têm perfis diferentes. Horários de funcionamento, equipamentos utilizados e mudanças previstas no consumo influenciam o dimensionamento."] },
  { heading: "Avalie telhado, sombra e espaço", paragraphs: ["A área disponível, a orientação, a inclinação e a presença de sombras interferem no planejamento. Uma visita técnica ou avaliação adequada ajuda a identificar as condições do imóvel antes da instalação.", "Em empresas, galpões e coberturas maiores, também é importante considerar as características estruturais e a organização dos equipamentos."] },
  { heading: "Compare investimento e condições", paragraphs: ["Peça uma proposta que explique o escopo do sistema, os equipamentos previstos, a instalação e as condições comerciais. Se houver financiamento, confira taxas, prazos e custo total, não apenas o valor da parcela.", "A geração e o retorno variam conforme o sistema, o consumo e as regras aplicáveis. Desconfie de promessas universais de economia ou de prazo de retorno sem análise do seu caso."] },
  { heading: "Peça uma avaliação individual", paragraphs: ["A STAR Energia Solar atende projetos residenciais, empresariais e de usinas em Uberlândia e região. Com as informações de consumo e do imóvel, a equipe pode orientar a próxima etapa de avaliação."] }
]}
      note={"Este conteúdo é informativo. A viabilidade, a geração estimada e o retorno financeiro dependem das características de cada projeto, das tarifas e das regras aplicáveis."}
    />
  );
}
