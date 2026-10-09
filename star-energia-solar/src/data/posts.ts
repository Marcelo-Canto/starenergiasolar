import { photos, type Photo } from "./projects";

/**
 * Artigos do blog. Para publicar um novo: adicione um item no início da lista.
 * Conteúdo educativo; dados da empresa só os confirmados pela STAR.
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  /** Data de publicação no formato AAAA-MM-DD. */
  date: string;
  readingMinutes: number;
  cover: Photo;
  sections: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
  /** Página de serviço relacionada, usada na chamada ao final do artigo. */
  related: { href: string; label: string };
};

export const posts: Post[] = [
  {
    slug: "energia-solar-por-assinatura-como-funciona",
    title: "Energia solar por assinatura: como funciona e para quem vale a pena",
    description:
      "Entenda o que é energia solar por assinatura, como ela chega ao seu imóvel sem instalar placas e em quais casos ela faz mais sentido do que um sistema próprio.",
    date: "2026-10-08",
    readingMinutes: 4,
    cover: photos.usinaGalpao,
    related: { href: "/energia-solar-por-assinatura", label: "Energia solar por assinatura da STAR" },
    sections: [
      {
        paragraphs: [
          "Muita gente quer usar energia solar, mas esbarra em algum obstáculo: mora de aluguel, vive em apartamento, tem um telhado pequeno ou simplesmente não quer fazer obra. A energia solar por assinatura existe para esses casos.",
        ],
      },
      {
        heading: "O que é energia solar por assinatura",
        paragraphs: [
          "Na assinatura, você não compra nem instala painéis. A energia é gerada em uma usina solar e você passa a receber essa energia com desconto, como um serviço contratado.",
          "Para quem assina, nada muda dentro de casa ou da empresa: não há equipamento no telhado, obra ou manutenção por sua conta.",
        ],
      },
      {
        heading: "Assinatura ou sistema próprio?",
        paragraphs: ["As duas opções usam a mesma fonte de energia, mas atendem necessidades diferentes:"],
        bullets: [
          "Sistema próprio: os painéis ficam no seu imóvel e a geração é sua. Exige investimento ou financiamento e um telhado adequado.",
          "Assinatura: não exige investimento em equipamentos nem telhado. Você recebe energia solar com desconto.",
        ],
      },
      {
        heading: "Para quem vale a pena",
        paragraphs: [
          "A assinatura costuma fazer sentido para quem mora de aluguel ou em apartamento, para imóveis com telhado sombreado ou sem estrutura e para negócios que preferem não imobilizar capital em equipamentos.",
          "Em Uberlândia, a STAR Energia Solar oferece energia solar por assinatura com 20% a 30% de desconto, sem instalação de placas.",
        ],
      },
    ],
  },
  {
    slug: "energia-solar-em-uberlandia-o-que-avaliar",
    title: "Energia solar em Uberlândia: o que avaliar antes de instalar",
    description:
      "Consumo, telhado, projeto e empresa instaladora: veja os pontos que merecem atenção antes de colocar energia solar na sua casa ou empresa em Uberlândia.",
    date: "2026-10-08",
    readingMinutes: 5,
    cover: photos.residenciaDoisArranjos,
    related: { href: "/energia-solar-residencial", label: "Energia solar residencial em Uberlândia" },
    sections: [
      {
        paragraphs: [
          "Instalar energia solar é uma decisão que acompanha o imóvel por muitos anos. Antes de pedir orçamentos, vale entender o que realmente define um bom projeto.",
        ],
      },
      {
        heading: "1. O seu consumo de energia",
        paragraphs: [
          "Todo dimensionamento começa pela conta de luz. O histórico de consumo dos últimos meses mostra quanta energia o sistema precisa gerar. Se você pretende comprar um ar-condicionado, um carro elétrico ou ampliar o negócio, avise: isso muda o tamanho do sistema.",
        ],
      },
      {
        heading: "2. O telhado",
        paragraphs: [
          "O tipo de telha, a estrutura, a área livre e a posição em relação ao sol influenciam quantos painéis cabem e como eles serão fixados. Sombras de árvores, caixas d'água e prédios vizinhos também entram na conta.",
        ],
      },
      {
        heading: "3. O projeto",
        paragraphs: [
          "Um sistema bem dimensionado não é o maior nem o mais barato: é o que atende o seu consumo. Desconfie de propostas feitas sem analisar a conta de energia e o telhado.",
        ],
      },
      {
        heading: "4. Quem instala e quem cuida depois",
        paragraphs: [
          "A instalação envolve estrutura, parte elétrica e proteções. Prefira empresas com experiência comprovada e que também ofereçam limpeza e manutenção, para ter a quem recorrer depois.",
          "A STAR Energia Solar atua há mais de 7 anos e tem mais de 600 projetos instalados em Uberlândia e região.",
        ],
      },
      {
        heading: "E se o meu imóvel não comportar painéis?",
        paragraphs: ["Nesse caso, a energia solar por assinatura é uma alternativa: você recebe energia solar com desconto, sem instalar placas."],
      },
    ],
  },
  {
    slug: "limpeza-de-paineis-solares-quando-fazer",
    title: "Limpeza de painéis solares: quando fazer e por que não improvisar",
    description:
      "Poeira e sujeira reduzem a captação de luz dos painéis solares. Veja os sinais de que o sistema precisa de limpeza e os riscos de fazer por conta própria.",
    date: "2026-10-08",
    readingMinutes: 4,
    cover: photos.residenciaColonial,
    related: { href: "/manutencao-energia-solar", label: "Limpeza e manutenção de energia solar" },
    sections: [
      {
        paragraphs: [
          "Painéis solares ficam expostos ao tempo o ano inteiro. Com os meses, poeira, folhas e fezes de pássaros se acumulam sobre os módulos e atrapalham a passagem da luz.",
        ],
      },
      {
        heading: "Sinais de que está na hora",
        paragraphs: ["Não existe um intervalo que sirva para todo mundo. Alguns sinais ajudam a perceber o momento:"],
        bullets: [
          "A geração caiu em relação a meses parecidos",
          "Há sujeira visível sobre os painéis",
          "O período de seca foi longo, com muita poeira",
          "O sistema está há bastante tempo sem avaliação",
        ],
      },
      {
        heading: "Por que não improvisar",
        paragraphs: [
          "Subir no telhado envolve risco de queda e de quebrar telhas. Além disso, produtos abrasivos, escovas duras e jatos fortes podem danificar a superfície dos painéis.",
          "Há também a parte elétrica: o sistema gera energia sempre que há luz, o que exige cuidado de quem trabalha perto dos módulos e das conexões.",
        ],
      },
      {
        heading: "Limpeza e manutenção andam juntas",
        paragraphs: [
          "A visita de limpeza é uma boa oportunidade para verificar conexões, quadros de proteção e o funcionamento do inversor. Assim, pequenos problemas são percebidos antes de afetarem a geração.",
        ],
      },
    ],
  },
  {
    slug: "energia-solar-para-empresas-dimensionamento",
    title: "Energia solar para empresas: como é feito o dimensionamento",
    description:
      "Veja como o consumo, o horário de funcionamento e a área de telhado definem o sistema de energia solar de comércios, indústrias e galpões.",
    date: "2026-10-08",
    readingMinutes: 4,
    cover: photos.metalicaArranjo,
    related: { href: "/energia-solar-empresarial", label: "Energia solar para empresas" },
    sections: [
      {
        paragraphs: [
          "Em uma empresa, a conta de energia pesa no custo fixo. Por isso, o projeto de energia solar empresarial precisa partir de números, não de estimativas genéricas.",
        ],
      },
      {
        heading: "O ponto de partida: o histórico de consumo",
        paragraphs: [
          "As contas dos últimos doze meses mostram o consumo médio e as variações ao longo do ano. Empresas com sazonalidade, como comércios com picos em datas específicas, precisam que isso seja considerado.",
        ],
      },
      {
        heading: "Quando a empresa consome",
        paragraphs: [
          "Negócios que funcionam durante o dia consomem energia no mesmo período em que o sistema está gerando, o que favorece o aproveitamento. O perfil de uso ajuda a definir o tamanho adequado.",
        ],
      },
      {
        heading: "Área e tipo de cobertura",
        paragraphs: [
          "Galpões e comércios costumam ter coberturas metálicas amplas, boas para a instalação. A estrutura precisa ser avaliada para receber os painéis com segurança.",
        ],
      },
      {
        heading: "Sistema próprio, usina ou assinatura",
        paragraphs: ["Dependendo do porte e do objetivo, há mais de um caminho:"],
        bullets: [
          "Sistema no telhado da própria empresa",
          "Usina solar de maior porte, para demandas elevadas",
          "Energia solar por assinatura, sem investimento em equipamentos",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatPostDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
