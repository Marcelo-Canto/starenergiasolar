import type { Metadata } from "next";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/blog/quando-fazer-manutencao-paineis-solares";
const description = "Veja sinais que indicam a necessidade de avaliar a manutenção de um sistema fotovoltaico e por que cada instalação exige cuidados próprios.";

export const metadata: Metadata = pageMetadata({
  title: "Quando fazer a manutenção dos painéis solares? | Blog STAR Energia Solar",
  description,
  path,
});

export default function ArticlePage() {
  return (
    <BlogArticle
      category={"Limpeza e manutenção"}
      title={"Quando fazer a manutenção dos painéis solares?"}
      intro={"A manutenção de um sistema fotovoltaico depende das condições do local, das orientações dos fabricantes e do comportamento da geração. Alguns sinais indicam que vale solicitar uma avaliação técnica."}
      path={path}
      updated="8 de outubro de 2026"
      sections={[
  { heading: "Observe mudanças na geração", paragraphs: ["Se a geração cair em comparação com períodos semelhantes, verifique primeiro se há diferenças de clima, sombreamento ou consumo. Caso a queda persista sem explicação aparente, uma avaliação técnica pode ajudar a identificar a causa.", "O monitoramento do inversor e os registros de geração ajudam a perceber mudanças que nem sempre são visíveis a olho nu."] },
  { heading: "Fique atento a sujeira e sombreamento", paragraphs: ["Poeira, folhas e outros resíduos podem se acumular nos módulos, mas a necessidade e a frequência da limpeza variam de acordo com o ambiente. A limpeza deve seguir as orientações do fabricante e ser feita com segurança.", "Não suba no telhado nem use produtos ou ferramentas abrasivas por conta própria. Os módulos e a cobertura podem ser danificados, e há risco de queda e choque elétrico."] },
  { heading: "Alertas no inversor merecem atenção", paragraphs: ["Mensagens de erro, desligamentos ou comportamento incomum devem ser verificados conforme o manual do equipamento. Não abra quadros nem tente mexer nas conexões elétricas sem qualificação.", "A manutenção pode envolver inspeção visual, avaliação de conexões, proteções e funcionamento do inversor, conforme a necessidade e o escopo técnico."] },
  { heading: "Crie um histórico do sistema", paragraphs: ["Guarde registros de geração, relatórios e intervenções. Essas informações ajudam o profissional a comparar o desempenho e a planejar os cuidados necessários ao longo do tempo."] }
]}
      note={"A frequência de inspeção e limpeza deve considerar o fabricante, as condições do local e a orientação de um profissional qualificado."}
    />
  );
}
