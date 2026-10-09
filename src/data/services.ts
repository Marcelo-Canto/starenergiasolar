/**
 * Serviços da STAR: os 8 do Perfil da Empresa no Google, mais a energia por assinatura.
 * Cada serviço tem a sua própria página. Sem detalhes não confirmados
 * (condições de financiamento, marcas, prazos ou garantias).
 */
export type Service = {
  name: string;
  short: string;
  description: string;
  href: string;
  /** Rótulo curto para menu, rodapé e cards. */
  label: string;
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
  assinatura: {
    name: "Energia Solar por Assinatura",
    short: "Assinatura",
    description: "Energia solar com 20% a 30% de desconto, sem instalar placas no imóvel.",
    href: "/energia-solar-por-assinatura",
    label: "Energia solar por assinatura",
  },
  usina: {
    name: "Projeto e Montagem de Usina Solar",
    short: "Usina solar",
    description: "Planejamento e montagem de usinas fotovoltaicas de grande porte.",
    href: "/usina-solar",
    label: "Usina solar",
  },
  instalacao: {
    name: "Instalação de Energia Solar Fotovoltaica",
    short: "Instalação",
    description: "Execução da instalação do sistema conforme o projeto.",
    href: "/instalacao-de-energia-solar",
    label: "Instalação de energia solar",
  },
  sistemas: {
    name: "Projeto e Montagem de Sistemas de Energia Solar",
    short: "Projeto e montagem",
    description: "Dimensionamento e montagem do sistema de geração.",
    href: "/projeto-de-energia-solar",
    label: "Projeto de energia solar",
  },
  manutencao: {
    name: "Limpeza e Manutenção de Energia Solar",
    short: "Manutenção",
    description: "Limpeza de painéis solares e cuidados com o sistema instalado.",
    href: "/manutencao-energia-solar",
    label: "Limpeza e manutenção",
  },
  paineis: {
    name: "Venda de Painéis Solares",
    short: "Painéis solares",
    description: "Fornecimento de painéis solares para projetos fotovoltaicos.",
    href: "/venda-de-paineis-solares",
    label: "Venda de painéis solares",
  },
  financiamento: {
    name: "Financiamento de Energia Solar",
    short: "Financiamento",
    description: "Consulte a STAR sobre as opções de financiamento disponíveis.",
    href: "/financiamento-de-energia-solar",
    label: "Financiamento de energia solar",
  },
} satisfies Record<string, Service>;

export const allServices: Service[] = Object.values(services);

/** Todas as páginas de serviço (menu, rodapé, links internos e sitemap). */
export const servicePages = allServices;
