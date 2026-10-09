import type { Metadata } from "next";
import { ServiceLanding } from "@/components/sections/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const path = "/instalacao-energia-solar";
const description = "Instalação de energia solar em Uberlândia com planejamento do sistema fotovoltaico, montagem dos equipamentos e orientação ao cliente pela STAR Energia Solar.";

export const metadata: Metadata = pageMetadata({
  title: "Instalação de Energia Solar em Uberlândia | STAR Energia Solar",
  description,
  path,
});

export default function Page() {
  return (
    <ServiceLanding
      title={"Instalação de energia solar em Uberlândia"}
      eyebrow={"INSTALAÇÃO FOTOVOLTAICA"}
      description={description}
      path={path}
      intro={"A instalação de um sistema fotovoltaico começa com um projeto compatível com o consumo, o imóvel e as condições de instalação. A STAR atende projetos residenciais e empresariais em Uberlândia e região."}
      sections={[
  { title: "Avaliação do consumo e do imóvel", body: "O dimensionamento considera o histórico de consumo, o espaço disponível, o tipo de cobertura e as condições técnicas do local. Essas informações ajudam a definir uma solução adequada para cada projeto." },
  { title: "Planejamento do sistema", body: "A definição dos módulos, inversor, estrutura e proteções deve seguir as necessidades do projeto e as normas aplicáveis. Cada imóvel pode exigir uma configuração diferente." },
  { title: "Montagem e instalação", body: "A instalação envolve a fixação dos módulos, a organização das conexões e a integração dos componentes do sistema, de acordo com o projeto elétrico." },
  { title: "Orientação após a instalação", body: "O cliente recebe orientação sobre o funcionamento do sistema e os cuidados básicos para acompanhar a geração e identificar quando solicitar uma avaliação técnica." }
]}
      faqs={[
  { question: "Quanto custa instalar energia solar em Uberlândia?", answer: "O valor depende do consumo, do tipo de telhado, dos equipamentos e das características de cada imóvel. A STAR pode avaliar os dados do seu projeto para preparar uma proposta." },
  { question: "A instalação serve para casa e empresa?", answer: "Sim. O dimensionamento muda conforme o perfil de consumo e as características do imóvel residencial, comercial ou industrial." }
]}
    />
  );
}
