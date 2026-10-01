/**
 * Os 8 serviços do Perfil da Empresa no Google. Sem detalhes não confirmados
 * (condições de financiamento, marcas, prazos ou garantias).
 */
export type Service = {
  name: string;
  short: string;
  description: string;
  href?: string;
  /** Rótulo curto para links internos (rodapé, cards). */
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
    description: "Execução da instalação do sistema conforme o projeto.",
  },
  sistemas: {
    name: "Projeto e Montagem de Sistemas de Energia Solar",
    short: "Projeto e montagem",
    description: "Dimensionamento e montagem do sistema de geração.",
  },
  paineis: {
    name: "Venda de Painéis Solares",
    short: "Painéis solares",
    description: "Fornecimento de painéis solares para projetos fotovoltaicos.",
  },
  financiamento: {
    name: "Financiamento de Energia Solar",
    short: "Financiamento",
    description: "Consulte a STAR sobre as opções de financiamento disponíveis.",
  },
} satisfies Record<string, Service>;

export const allServices: Service[] = Object.values(services);

/** Páginas de serviço (links internos, rodapé e sitemap). */
export const servicePages = [services.residencial, services.empresarial, services.usina, services.manutencao];
