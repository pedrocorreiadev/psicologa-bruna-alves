/**
 * Fonte única de conteúdo institucional.
 * O texto abaixo preserva integralmente a comunicação original da cliente —
 * o redesign eleva a forma, não altera a mensagem.
 */

export const site = {
  name: "Bruna Alves",
  role: "Psicóloga",
  crp: "CRP 24/05261",
  tagline: "Cuidar de você com toda atenção, cuidado e carinho.",
  description:
    "Psicóloga clínica apaixonada pela área. Terapia Cognitivo-Comportamental (TCC), aplicadora ABA/DENVER e neuropsicologia. Atendimento presencial e online. Agende pelo WhatsApp.",
  url: "https://bruna-alves-psicologa.vercel.app",
  location: "Acre — Presencial e online",
  whatsappNumber: "556892204499",
  whatsappDisplay: "(68) 92204-499",
  whatsappMessage: "Olá Bruna! Vim pelo site e gostaria de agendar uma sessão.",
  instagram: "https://instagram.com/psi.brunaalvess",
  instagramHandle: "@psi.brunaalvess",
  ogImage: "/img/bruna-hero.jpg",
} as const;

/** Link do WhatsApp já com mensagem pré-preenchida e codificada. */
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagens", href: "#abordagens" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
] as const;

export type ApproachKey = "tcc" | "aba" | "neuro";

export const approaches: {
  key: ApproachKey;
  icon: "Sparkles" | "Grid3x3" | "Brain";
  title: string;
  description: string;
}[] = [
  {
    key: "tcc",
    icon: "Sparkles",
    title: "Terapia Cognitivo-Comportamental",
    description:
      "A TCC baseia-se nas vertentes cognitiva e comportamental, que estão interligadas — ajudando você a transformar pensamentos e comportamentos que geram sofrimento.",
  },
  {
    key: "aba",
    icon: "Grid3x3",
    title: "Aplicadora ABA / DENVER",
    description:
      "Intervenção baseada em evidências para o desenvolvimento infantil e o cuidado com o autismo, com foco lúdico, individualizado e respeitoso ao ritmo de cada criança.",
  },
  {
    key: "neuro",
    icon: "Brain",
    title: "Neuropsicologia",
    description:
      "Em formação de pós-graduação, unindo o funcionamento cerebral e o comportamento para avaliações e um cuidado ainda mais completos.",
  },
];

export const specialties = [
  { icon: "Sparkles", label: "Terapia Cognitivo-Comportamental" },
  { icon: "Grid3x3", label: "Aplicadora ABA / DENVER" },
  { icon: "Brain", label: "Pós-graduanda em Neuropsicologia" },
] as const;

export const aboutHighlights = [
  "Abordagem baseada em evidências (TCC)",
  "Atendimento a crianças e adultos",
  "Registro profissional ativo — CRP 24/05261",
] as const;

export const steps = [
  {
    title: "Você chama no WhatsApp",
    description: 'Um "olá" já basta. Sem formulários complicados.',
  },
  {
    title: "Escolhemos o horário",
    description: "Presencial ou online, no dia que couber na sua rotina.",
  },
  {
    title: "Sessão de acolhimento",
    description:
      "Um espaço seguro para você falar e ser ouvido sem julgamentos.",
  },
  {
    title: "Acompanhamento contínuo",
    description: "Caminhamos juntos, no seu ritmo, rumo à transformação.",
  },
] as const;

export const modalities = [
  {
    icon: "MapPin",
    title: "Presencial",
    items: [
      "Ambiente acolhedor e reservado",
      "Ideal para quem prefere o contato próximo",
      "Atendimento a crianças (ABA/DENVER)",
    ],
  },
  {
    icon: "Monitor",
    title: "Online",
    items: [
      "De onde você estiver, com sigilo total",
      "Sem deslocamento, mais praticidade",
      "Mesma qualidade do atendimento presencial",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Encontrei um espaço seguro para falar sem medo de ser julgada. Fez toda a diferença na minha vida.",
    author: "Paciente, 29 anos",
  },
  {
    quote:
      "A Bruna tem uma escuta muito atenta e carinhosa. Meu filho evoluiu muito com o acompanhamento.",
    author: "Mãe de paciente",
  },
  {
    quote:
      "O atendimento online funcionou perfeitamente para minha rotina. Recomendo de olhos fechados.",
    author: "Paciente, 41 anos",
  },
] as const;

export const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um momento de acolhimento: você conta o que te trouxe até aqui e, juntos, definimos os objetivos do acompanhamento. Sem pressa e sem julgamentos.",
  },
  {
    q: "Qual a diferença entre presencial e online?",
    a: "A qualidade do cuidado é a mesma. No online você economiza deslocamento e ganha flexibilidade; no presencial, o contato próximo em um ambiente reservado. Você escolhe o que for mais confortável.",
  },
  {
    q: "A TCC serve para o meu caso?",
    a: "A TCC é eficaz para ansiedade, depressão, fobias, estresse, autoestima e muito mais. Na conversa inicial avaliamos juntos a melhor forma de te ajudar.",
  },
  {
    q: "Você atende crianças?",
    a: "Sim. Como aplicadora ABA/DENVER, atendo crianças com foco no desenvolvimento e no cuidado com o autismo, de forma lúdica e individualizada.",
  },
  {
    q: "Como faço o agendamento?",
    a: "É só me chamar no WhatsApp (68) 92204-499. Combinamos o melhor horário e a modalidade na hora.",
  },
] as const;
