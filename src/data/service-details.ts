import { photos, type Photo } from "./projects";
import { services, type Service } from "./services";
import type { FaqItem } from "./faq";

/**
 * Conteúdo das páginas de serviço que usam o modelo padrão (src/components/pages/ServiceDetail.tsx).
 * Residencial, empresarial, usina e manutenção têm páginas próprias em src/app.
 * Texto original, sem preços, prazos, marcas, garantias ou condições não informadas pela STAR.
 */
export type ServiceDetail = {
  service: Service;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cta: string;
  photo: Photo;
  highlight?: { value: string; label: string };
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  faq: FaqItem[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    service: services.assinatura,
    slug: "energia-solar-por-assinatura",
    metaTitle: "Energia Solar por Assinatura em Uberlândia | STAR Energia Solar",
    metaDescription:
      "Energia solar por assinatura em Uberlândia: receba energia solar com 20% a 30% de desconto, sem instalar placas e sem obra. Fale com a STAR Energia Solar.",
    h1: "Energia solar por assinatura em Uberlândia",
    intro: "Receba energia solar com 20% a 30% de desconto, sem instalar placas no seu imóvel e sem fazer obra.",
    cta: "Quero assinar",
    photo: photos.usinaGalpao,
    highlight: { value: "20% a 30%", label: "de desconto na energia" },
    sections: [
      {
        title: "O que é energia solar por assinatura",
        paragraphs: [
          "É uma forma de usar energia solar sem ter um sistema fotovoltaico no próprio telhado. Em vez de comprar e instalar os painéis, você assina o serviço e passa a receber energia gerada a partir do sol.",
          "Na assinatura da STAR Energia Solar, essa energia chega com 20% a 30% de desconto.",
        ],
      },
      {
        title: "Para quem a assinatura faz sentido",
        paragraphs: ["A assinatura atende quem quer energia solar, mas não pode ou não quer instalar placas:"],
        bullets: [
          "Quem mora de aluguel ou em apartamento",
          "Imóveis com telhado pequeno, sombreado ou sem estrutura para os painéis",
          "Quem prefere não fazer obra nem investir em equipamentos",
          "Comércios e empresas que querem reduzir o custo da energia sem imobilizar capital",
        ],
      },
      {
        title: "Como contratar",
        paragraphs: [
          "O primeiro passo é falar com a equipe da STAR pelo WhatsApp. A equipe explica como funciona a adesão, tira as dúvidas sobre o desconto e orienta o que é necessário para começar.",
        ],
      },
    ],
    faq: [
      {
        question: "Preciso instalar placas solares para assinar?",
        answer: "Não. Na energia solar por assinatura não há instalação de placas nem obra no seu imóvel.",
      },
      {
        question: "De quanto é o desconto?",
        answer: "A assinatura da STAR oferece de 20% a 30% de desconto na energia. Fale com a equipe para saber o desconto no seu caso.",
      },
      {
        question: "Qual a diferença para ter um sistema próprio?",
        answer:
          "No sistema próprio, os painéis são instalados no seu imóvel e a geração é sua. Na assinatura, você recebe energia solar com desconto, sem equipamentos e sem obra. A STAR trabalha com as duas opções e ajuda a comparar.",
      },
    ],
  },
  {
    service: services.instalacao,
    slug: "instalacao-de-energia-solar",
    metaTitle: "Instalação de Energia Solar em Uberlândia | STAR Energia Solar",
    metaDescription:
      "Instalação de energia solar fotovoltaica em Uberlândia e região, em casas, empresas e usinas. Mais de 600 projetos instalados pela STAR Energia Solar.",
    h1: "Instalação de energia solar em Uberlândia",
    intro: "Instalação de sistemas fotovoltaicos em residências, empresas e usinas, executada conforme o projeto de cada imóvel.",
    cta: "Solicitar orçamento de instalação",
    photo: photos.inversorConexoes,
    highlight: { value: "+600", label: "projetos instalados em Uberlândia e região" },
    sections: [
      {
        title: "Instalação que segue o projeto",
        paragraphs: [
          "A instalação é a etapa em que o sistema fotovoltaico sai do papel. Os painéis solares são fixados no telhado ou na estrutura definida no projeto, e o inversor, os quadros de proteção e o cabeamento são instalados e conectados.",
          "Uma instalação bem executada, com cabos organizados e proteções adequadas, é parte importante do bom funcionamento do sistema ao longo do tempo.",
        ],
      },
      {
        title: "O que faz parte da instalação",
        paragraphs: ["Cada projeto tem as suas particularidades, mas a instalação normalmente envolve:"],
        bullets: [
          "Fixação dos painéis solares no telhado ou na estrutura",
          "Instalação do inversor e dos quadros de proteção",
          "Passagem e organização dos cabos em eletrodutos",
          "Verificação do sistema e orientação sobre o uso",
        ],
      },
      {
        title: "Telhados cerâmicos, metálicos e grandes coberturas",
        paragraphs: [
          "A STAR Energia Solar instala sistemas em telhados cerâmicos e coloniais de casas, em coberturas metálicas de comércios e em telhados industriais de grande porte, sempre a partir de um projeto definido para o imóvel.",
        ],
      },
    ],
    faq: [
      {
        question: "A STAR faz o projeto e a instalação?",
        answer: "Sim. A STAR atua no projeto, na instalação e também na limpeza e manutenção dos sistemas.",
      },
      {
        question: "Em quais tipos de telhado é possível instalar?",
        answer:
          "A STAR tem instalações em telhados cerâmicos, coloniais e metálicos. A viabilidade em cada caso depende da estrutura e da área disponível, verificadas na avaliação do imóvel.",
      },
    ],
  },
  {
    service: services.sistemas,
    slug: "projeto-de-energia-solar",
    metaTitle: "Projeto de Energia Solar em Uberlândia | STAR Energia Solar",
    metaDescription:
      "Projeto e montagem de sistemas de energia solar em Uberlândia: dimensionamento a partir do seu consumo, para casas e empresas. Conheça a STAR Energia Solar.",
    h1: "Projeto de energia solar em Uberlândia",
    intro: "Projeto e montagem de sistemas de energia solar, dimensionados a partir do consumo e das características de cada imóvel.",
    cta: "Solicitar um projeto",
    photo: photos.residenciaDoisArranjos,
    sections: [
      {
        title: "Por que o projeto vem antes de tudo",
        paragraphs: [
          "Dois imóveis vizinhos podem precisar de sistemas bem diferentes. O consumo de energia, o tipo de telhado, a área livre e a posição em relação ao sol mudam o tamanho e o arranjo do sistema.",
          "O projeto de energia solar define quantos painéis são necessários, onde eles ficam e como o sistema será montado. É ele que orienta a instalação.",
        ],
      },
      {
        title: "O que o projeto considera",
        paragraphs: ["A equipe da STAR reúne as informações que definem o dimensionamento:"],
        bullets: [
          "Histórico de consumo de energia do imóvel",
          "Tipo, condição e orientação do telhado ou da cobertura",
          "Área disponível para os painéis",
          "Planos de aumento de consumo ou de expansão do sistema",
        ],
      },
      {
        title: "Do projeto à montagem",
        paragraphs: [
          "Com o projeto definido, a STAR faz a montagem do sistema de energia solar e orienta sobre os cuidados depois da instalação. O mesmo trabalho vale para casas, empresas e usinas solares.",
        ],
      },
    ],
    faq: [
      {
        question: "O que preciso ter em mãos para pedir um projeto?",
        answer: "Uma conta de energia recente e informações básicas do imóvel já ajudam. A equipe da STAR orienta o que mais for necessário.",
      },
      {
        question: "O projeto serve para ampliar um sistema que já existe?",
        answer: "Fale com a equipe informando os dados do sistema atual. A STAR avalia o caso e orienta sobre a ampliação.",
      },
    ],
  },
  {
    service: services.paineis,
    slug: "venda-de-paineis-solares",
    metaTitle: "Venda de Painéis Solares em Uberlândia | STAR Energia Solar",
    metaDescription:
      "Venda de painéis solares em Uberlândia com a STAR Energia Solar. Painéis para projetos fotovoltaicos residenciais e empresariais, com orientação da equipe.",
    h1: "Venda de painéis solares em Uberlândia",
    intro: "Fornecimento de painéis solares para projetos fotovoltaicos de casas e empresas, com orientação de quem projeta e instala.",
    cta: "Consultar painéis solares",
    photo: photos.residenciaVertical,
    sections: [
      {
        title: "Painéis solares para o seu projeto",
        paragraphs: [
          "Os painéis solares, também chamados de placas ou módulos fotovoltaicos, são os equipamentos que captam a luz do sol e a transformam em energia elétrica.",
          "A STAR Energia Solar trabalha com a venda de painéis solares em Uberlândia e orienta sobre a quantidade e o tipo adequados ao projeto.",
        ],
      },
      {
        title: "Como escolher os painéis",
        paragraphs: ["A escolha não deve partir só do preço. Alguns pontos influenciam o resultado do sistema:"],
        bullets: [
          "Quantidade de painéis compatível com o consumo do imóvel",
          "Espaço disponível e tipo de telhado",
          "Compatibilidade com o inversor e com o restante do sistema",
          "Projeto e instalação feitos de forma adequada",
        ],
      },
      {
        title: "Painéis, projeto e instalação no mesmo lugar",
        paragraphs: [
          "Além da venda, a STAR faz o projeto, a instalação e a manutenção dos sistemas. Para saber quais painéis estão disponíveis e receber um orçamento, fale com a equipe pelo WhatsApp.",
        ],
      },
    ],
    faq: [
      {
        question: "Quantos painéis solares eu preciso?",
        answer: "Depende do consumo de energia do imóvel e do espaço disponível. Com a conta de luz em mãos, a equipe da STAR faz essa estimativa.",
      },
      {
        question: "Quais marcas de painéis a STAR vende?",
        answer: "A disponibilidade varia. Consulte a equipe pelo WhatsApp para saber as opções atuais.",
      },
    ],
  },
  {
    service: services.financiamento,
    slug: "financiamento-de-energia-solar",
    metaTitle: "Financiamento de Energia Solar em Uberlândia | STAR Energia Solar",
    metaDescription:
      "Financiamento de energia solar em Uberlândia: a STAR Energia Solar trabalha com opções para viabilizar o seu sistema fotovoltaico. Consulte as condições.",
    h1: "Financiamento de energia solar em Uberlândia",
    intro: "A STAR Energia Solar trabalha com financiamento para viabilizar sistemas de energia solar em casas e empresas.",
    cta: "Consultar financiamento",
    photo: photos.metalicaExaustor,
    sections: [
      {
        title: "Energia solar sem pagar tudo de uma vez",
        paragraphs: [
          "Um sistema fotovoltaico é um investimento. O financiamento permite parcelar esse valor, em vez de desembolsar tudo na contratação.",
          "A STAR trabalha com financiamento de energia solar e ajuda a entender as opções disponíveis para o seu projeto.",
        ],
      },
      {
        title: "Como funciona a consulta",
        paragraphs: [
          "As condições dependem do projeto, do valor do sistema e da análise de quem concede o crédito. Por isso, o caminho é conversar com a equipe da STAR:",
        ],
        bullets: [
          "Você informa o consumo e o tipo de imóvel",
          "A STAR define o sistema adequado e o valor do projeto",
          "A equipe apresenta as opções de financiamento disponíveis",
        ],
      },
      {
        title: "Outra opção: energia por assinatura",
        paragraphs: [
          "Quem não quer investir em um sistema próprio pode conhecer a energia solar por assinatura da STAR: energia solar com 20% a 30% de desconto, sem instalar placas.",
        ],
      },
    ],
    faq: [
      {
        question: "Quais são as taxas e os prazos do financiamento?",
        answer: "As condições variam conforme o projeto e a análise de crédito. Consulte a equipe da STAR para receber as informações atualizadas.",
      },
      {
        question: "O financiamento vale para empresas?",
        answer: "A STAR atende projetos residenciais e empresariais. Fale com a equipe para conhecer as opções para a sua empresa.",
      },
    ],
  },
];

export const getServiceDetail = (slug: string) => serviceDetails.find((s) => s.slug === slug);
