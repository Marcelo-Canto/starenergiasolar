export type FaqItem = { question: string; answer: string };

/** Home: dúvidas gerais. As páginas internas têm perguntas próprias, sem repetir estas. */
export const homeFaq: FaqItem[] = [
  {
    question: "O que é energia solar fotovoltaica?",
    answer:
      "É a geração de eletricidade a partir da luz do sol. Os painéis solares, também chamados de módulos fotovoltaicos, captam a luz e a transformam em energia elétrica para o imóvel.",
  },
  {
    question: "Como funciona um sistema de energia solar?",
    answer:
      "Os painéis geram energia em corrente contínua. O inversor converte essa energia em corrente alternada, que é a usada pelos aparelhos. Em sistemas conectados à rede, a energia gerada e não consumida no momento é injetada na rede da distribuidora, conforme as regras vigentes.",
  },
  {
    question: "A STAR Energia Solar atende Uberlândia?",
    answer:
      "Sim. A STAR fica na Avenida Belarmino Cotta Pacheco, 715, no bairro Santa Mônica, e atende Uberlândia e região. Para confirmar o atendimento na sua localidade, fale com a equipe pelo WhatsApp.",
  },
  {
    question: "Quais serviços a STAR oferece?",
    answer:
      "Projetos residenciais e empresariais, projeto e montagem de usinas solares e de sistemas de energia solar, instalação fotovoltaica, venda de painéis solares, limpeza e manutenção e financiamento de energia solar.",
  },
  {
    question: "A STAR trabalha com financiamento de energia solar?",
    answer:
      "Sim, a STAR trabalha com financiamento de energia solar. As condições dependem de cada projeto; fale com a equipe para conhecer as opções disponíveis.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Chame a STAR no WhatsApp pelo (34) 98849-3077 ou preencha o formulário de avaliação no fim desta página. A equipe vai entender o perfil do seu imóvel e orientar os próximos passos.",
  },
];

export const residencialFaq: FaqItem[] = [
  {
    question: "Qualquer telhado pode receber painéis solares?",
    answer:
      "Depende do tipo de telhado, da estrutura e da área disponível. Esses pontos são verificados na avaliação do imóvel, antes da definição do projeto.",
  },
  {
    question: "Como saber o tamanho do sistema para a minha casa?",
    answer:
      "O dimensionamento parte do consumo de energia do imóvel. Com as informações da conta de luz e do telhado, a equipe da STAR indica uma solução adequada.",
  },
  {
    question: "O sistema funciona em dias nublados?",
    answer:
      "Os painéis continuam gerando energia com o céu nublado, mas em quantidade menor do que em dias de sol. O dimensionamento considera essa variação ao longo do ano.",
  },
];

export const manutencaoFaq: FaqItem[] = [
  {
    question: "Com que frequência os painéis solares precisam de limpeza?",
    answer:
      "Não existe um intervalo único. Poeira, folhas e o local da instalação influenciam o acúmulo de sujeira. A equipe da STAR avalia o sistema e orienta o momento adequado para cada caso.",
  },
  {
    question: "A STAR faz manutenção em sistemas que não foram instalados por ela?",
    answer:
      "Fale com a equipe pelo WhatsApp informando os dados do seu sistema. A STAR vai verificar o caso e orientar sobre o atendimento.",
  },
  {
    question: "Posso limpar os painéis por conta própria?",
    answer:
      "Subir no telhado envolve risco de queda e de danos aos módulos e às telhas, e produtos inadequados podem prejudicar a superfície dos painéis. Por segurança, o ideal é contar com uma equipe preparada.",
  },
];
