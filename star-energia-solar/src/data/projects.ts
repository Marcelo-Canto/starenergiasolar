import { flagshipClaim } from "@/lib/site";

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const p = (name: string, width: number, height: number, alt: string, caption: string): Photo => ({
  src: `/images/projects/${name}.webp`,
  width,
  height,
  alt,
  caption,
});

/**
 * Fotos reais de projetos da STAR. Carimbos de data e placas de terceiros foram recortados.
 * Para adicionar uma foto nova: salve em /public/images/projects e registre aqui.
 */
export const photos = {
  usinaAerea: p(
    "usina-telhado-vista-aerea",
    1280,
    960,
    "Vista aérea de complexo industrial com usina solar ocupando os telhados de vários galpões",
    flagshipClaim,
  ),
  usinaGalpao: p(
    "usina-telhado-galpao-principal",
    1280,
    960,
    "Galpão principal com o telhado inteiro coberto por módulos fotovoltaicos, visto de drone",
    "Galpão principal da usina em telhado",
  ),
  usinaDetalhe: p(
    "galpao-industrial-telhado-detalhe",
    720,
    840,
    "Fileiras de módulos fotovoltaicos sobre o telhado de um galpão industrial",
    "Módulos fotovoltaicos sobre galpão industrial",
  ),
  empresasTelhados: p(
    "complexo-empresarial-telhados-detalhe",
    720,
    540,
    "Painéis solares instalados nos telhados de prédios empresariais, vistos de cima",
    "Painéis solares em telhados empresariais",
  ),
  residenciaFrontal: p(
    "residencia-telhado-ceramico-paineis",
    1280,
    643,
    "Oito painéis solares instalados sobre telhado residencial de telhas cerâmicas",
    "Painéis solares em telhado cerâmico",
  ),
  residenciaVertical: p(
    "residencia-paineis-close-vertical",
    963,
    860,
    "Painéis solares alinhados sobre telhado de telhas cerâmicas, vistos de perto",
    "Arranjo fotovoltaico em telhado residencial",
  ),
  residenciaDoisArranjos: p(
    "residencia-dois-arranjos-telhado",
    1280,
    903,
    "Dois conjuntos de painéis solares instalados em sequência sobre telhado cerâmico",
    "Dois arranjos de painéis no mesmo telhado",
  ),
  residenciaColonial: p(
    "residencia-arranjo-telhado-colonial",
    1280,
    653,
    "Painéis solares sobre telhado colonial, com um segundo arranjo logo abaixo",
    "Painéis em telhado colonial",
  ),
  metalicaExaustor: p(
    "cobertura-metalica-paineis-exaustor",
    1600,
    1134,
    "Painéis solares instalados sobre cobertura metálica, ao lado de um exaustor",
    "Sistema fotovoltaico em cobertura metálica",
  ),
  metalicaArranjo: p(
    "cobertura-metalica-arranjo-completo",
    1600,
    1134,
    "Arranjo com dezenas de painéis solares fixados sobre telha metálica",
    "Arranjo completo sobre telha metálica",
  ),
  medicaoMultimetro: p(
    "medicao-tensao-multimetro",
    963,
    1220,
    "Técnico medindo a tensão dos cabos do sistema solar com um multímetro",
    "Medição de tensão com multímetro",
  ),
  medicaoString: p(
    "medicao-string-inversor",
    963,
    1220,
    "Multímetro conectado aos cabos que chegam ao inversor, durante a verificação do sistema",
    "Verificação dos cabos junto ao inversor",
  ),
  quadroDps: p(
    "quadro-protecao-dps-detalhe",
    1280,
    903,
    "Detalhe do quadro de proteção com disjuntor e dispositivos de proteção contra surtos",
    "Detalhe do quadro de proteção",
  ),
  quadroMontado: p(
    "quadro-protecao-montado",
    963,
    1220,
    "Quadro de proteção montado, com cabos organizados e identificados",
    "Quadro de proteção montado",
  ),
  inversorParede: p(
    "inversor-instalado-eletrodutos",
    1280,
    903,
    "Inversor solar fixado na parede, com eletrodutos metálicos até o quadro de proteção",
    "Inversor e eletrodutos instalados",
  ),
  inversorConexoes: p(
    "inversor-conexoes-detalhe",
    1280,
    903,
    "Conexões de entrada e saída do inversor solar, com cabos presos e eletrodutos",
    "Conexões do inversor",
  ),
} satisfies Record<string, Photo>;

export type PhotoGroup = { id: string; title: string; description: string; photos: Photo[] };

/** Organização da página /projetos. */
export const photoGroups: PhotoGroup[] = [
  {
    id: "usina",
    title: "Usina solar em telhado",
    description: "Complexo industrial com módulos fotovoltaicos distribuídos pelos telhados dos galpões.",
    photos: [photos.usinaAerea, photos.usinaGalpao],
  },
  {
    id: "residencial",
    title: "Residências",
    description: "Sistemas instalados em telhados cerâmicos e coloniais de casas.",
    photos: [photos.residenciaVertical, photos.residenciaFrontal, photos.residenciaDoisArranjos, photos.residenciaColonial],
  },
  {
    id: "coberturas-metalicas",
    title: "Coberturas metálicas",
    description: "Arranjos fixados sobre telhas metálicas.",
    photos: [photos.metalicaArranjo, photos.metalicaExaustor],
  },
  {
    id: "instalacao",
    title: "Instalação e proteção",
    description: "Inversores, quadros de proteção e medições feitas durante a instalação e a verificação dos sistemas.",
    photos: [photos.quadroMontado, photos.inversorConexoes, photos.medicaoMultimetro, photos.quadroDps],
  },
];
