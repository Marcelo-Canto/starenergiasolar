import type { Metadata } from "next";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { pageMetadata } from "@/lib/seo";

const path = "/blog/como-funciona-energia-solar-por-assinatura";
const description = "Saiba como funciona o modelo de energia solar por assinatura, quais condições conferir e o que perguntar antes de aderir.";

export const metadata: Metadata = pageMetadata({
  title: "Como funciona a energia solar por assinatura? | Blog STAR Energia Solar",
  description,
  path,
});

export default function ArticlePage() {
  return (
    <BlogArticle
      category={"Energia solar por assinatura"}
      title={"Como funciona a energia solar por assinatura?"}
      intro={"A energia solar por assinatura pode permitir o recebimento de créditos de energia sem instalar painéis no telhado do imóvel. Entenda o básico e confirme as condições antes de contratar."}
      path={path}
      updated="8 de outubro de 2026"
      sections={[
  { heading: "O que é energia solar por assinatura?", paragraphs: ["Nesse modelo, a geração ocorre em uma usina participante e a unidade consumidora elegível pode receber créditos de energia conforme as regras aplicáveis. O consumidor não precisa instalar os módulos no próprio imóvel para participar.", "O funcionamento exato depende do programa, da distribuidora e do contrato. Por isso, é importante entender o processo de compensação e como ele aparece na fatura."] },
  { heading: "O que conferir antes de aderir", paragraphs: ["Pergunte qual é a área de atendimento, quais unidades consumidoras podem participar, como os créditos são calculados e quais cobranças permanecem na conta de energia.", "Leia as regras sobre prazo, cancelamento, reajustes e eventuais condições para manter o benefício. Solicite as informações por escrito para comparar com clareza."] },
  { heading: "Desconto anunciado não é a mesma coisa que economia líquida", paragraphs: ["A STAR informa condições de desconto de 20% a 30% para energia por assinatura, sujeitas à disponibilidade e às regras aplicáveis. Antes de aderir, confirme o percentual para seu caso e entenda quais parcelas da fatura são abrangidas.", "A elegibilidade depende de fatores como distribuidora, localização e perfil da unidade consumidora. Não presuma que todo endereço ou toda conta terá as mesmas condições."] },
  { heading: "Como saber se posso participar?", paragraphs: ["Entre em contato com a STAR e tenha em mãos a distribuidora e os dados básicos da unidade consumidora. A equipe poderá explicar a disponibilidade e as condições atuais para avaliação."] }
]}
      note={"As condições comerciais e a elegibilidade devem ser confirmadas diretamente com a STAR. O conteúdo não constitui garantia de aprovação ou de percentual de desconto."}
    />
  );
}
