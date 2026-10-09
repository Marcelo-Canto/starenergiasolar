/**
 * Serviços confirmados da STAR. Detalhes de condições comerciais devem ser confirmados diretamente com a empresa.
 */
export type Service = {
  name: string;
  short: string;
  description: string;
  href?: string;
  label?: string;
};

export const services = {
  residencial: {
    name: "Projetos de Energia Solar Residenciais",
    short: "Residencial",
    description: "Sistemas planejados para o consumo e o telhado de cada casa.",
    href: "/energia-solar-residencial",
    label: "Energia solar residencial",
  },
  empresarial: {
    name: "Projetos de Energia Solar Empresariais",
    short: "Empresarial",
    description: "Soluções para comércios, galpões e operações com maior demanda de energia.",
    href: "/energia-solar-empresarial",
    label: "Energia solar empresarial",
  },
  usina: {
    name: "Projeto e Montagem de Usina Solar",
    short: "Usina solar",
    description: "Planejamento e montagem de usinas fotovoltaicas de grande porte.",
    href: "/usina-solar",
    label: "Usina solar",
  },
  manutencao: {
    name: "Limpeza e Manutenção de Energia Solar",
    short: "Manutenção",
    description: "Limpeza de painéis solares e cuidados com o sistema instalado.",
    href: "/manutencao-energia-solar",
    label: "Limpeza e manutenção",
  },
  instalacao: {
    name: "Instalação de Energia Solar Fotovoltaica",
    short: "Instalação",
    description: "Instalação de sistemas fotovoltaicos conforme o projeto e as características do imóvel.",
    href: "/instalacao-energia-solar",
    label: "Instalação de energia solar",
  },
  sistemas: {
    name: "Projeto e Montagem de Sistemas de Energia Solar",
    short: "Projeto e montagem",
    description: "Dimensionamento e montagem do sistema de geração.",
  },
  paineis: {
    name: "Painéis Solares",
    short: "Painéis solares",
    description: "Orientação sobre módulos fotovoltaicos e sua compatibilidade com cada sistema.",
    href: "/paineis-solares",
    label: "Painéis solares",
  },
  assinatura: {
    name: "Energia Solar por Assinatura",
    short: "Assinatura",
    description: "Consulte as condições de energia solar por assinatura sem instalar placas no imóvel.",
    href: "/energia-solar-por-assinatura",
    label: "Energia solar por assinatura",
  },
  financiamento: {
    name: "Financiamento de Energia Solar",
    short: "Financiamento",
    description: "Consulte a STAR sobre as opções de financiamento disponíveis.",
    href: "/financiamento-energia-solar",
    label: "Financiamento de energia solar",
  },
} satisfies Record<string, Service>;

export const allServices: Service[] = Object.values(services);

/** Páginas de serviço com conteúdo próprio e links internos. */
export const servicePages = [
  services.residencial,
  services.empresarial,
  services.usina,
  services.manutencao,
  services.instalacao,
  services.paineis,
  services.assinatura,
  services.financiamento,
];
