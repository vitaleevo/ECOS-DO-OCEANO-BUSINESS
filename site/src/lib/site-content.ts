import {
  Anchor,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Compass,
  Factory,
  GraduationCap,
  Handshake,
  Radar,
  Route,
  Target,
  Waves,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type AreaItem = {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type MethodStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const heroMetrics = [
  { value: "Angola", label: "presença local e visão técnica" },
  { value: "7", label: "áreas de actuação integradas" },
  { value: "360°", label: "consultoria, formação e execução" },
];

export const services: ServiceItem[] = [
  {
    icon: Building2,
    title: "Consultoria institucional",
    description:
      "Diagnóstico, estruturação de processos, modelos organizacionais e planos de melhoria para entidades públicas e privadas.",
  },
  {
    icon: GraduationCap,
    title: "Gestão da formação",
    description:
      "Planeamento pedagógico, coordenação operacional, logística e acompanhamento de programas formativos.",
  },
  {
    icon: Compass,
    title: "Apoio técnico especializado",
    description:
      "Suporte prático para equipas, programas técnicos e projectos de desenvolvimento institucional.",
  },
  {
    icon: BarChart3,
    title: "Desenvolvimento organizacional",
    description:
      "Procedimentos, indicadores, rotinas de gestão e reforço da capacidade interna das organizações.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Programas corporativos",
    description:
      "Soluções formativas desenhadas para equipas, sectores técnicos e necessidades específicas de negócio.",
  },
  {
    icon: ClipboardCheck,
    title: "Monitorização e avaliação",
    description:
      "Relatórios, acompanhamento de resultados e melhoria contínua durante e após a implementação.",
  },
];

export const areas: AreaItem[] = [
  {
    image: "/media/internet/ocean-vessel.jpg",
    icon: Anchor,
    title: "Formação marítima",
    description:
      "Capacitação técnica e operacional para actividades ligadas ao mar, portos e cadeias de suporte.",
  },
  {
    image: "/media/internet/hero-port.jpg",
    icon: Waves,
    title: "Offshore e petróleo",
    description:
      "Programas técnicos para ambientes industriais exigentes, com foco em disciplina operacional.",
  },
  {
    image: "/media/internet/strategy-workshop.jpg",
    icon: Handshake,
    title: "Programas corporativos",
    description:
      "Formação e consultoria adaptadas à realidade das equipas, lideranças e operações internas.",
  },
  {
    image: "/media/internet/modern-office.jpg",
    icon: Factory,
    title: "Consultoria organizacional",
    description:
      "Estruturação institucional, melhoria de processos e desenvolvimento de capacidade de gestão.",
  },
];

export const methodSteps: MethodStep[] = [
  {
    icon: Radar,
    title: "Diagnosticar",
    text: "Compreendemos o contexto, os objectivos, as lacunas e as exigências da organização.",
  },
  {
    icon: Route,
    title: "Planear",
    text: "Definimos prioridades, recursos, cronograma, responsabilidades e indicadores de sucesso.",
  },
  {
    icon: Workflow,
    title: "Implementar",
    text: "Executamos com coordenação próxima, documentação e acompanhamento técnico contínuo.",
  },
  {
    icon: Target,
    title: "Medir",
    text: "Avaliamos resultados, consolidamos aprendizagem e recomendamos próximos passos.",
  },
];

export const differentiators = [
  "Equipa técnica especializada",
  "Soluções adaptadas ao contexto institucional",
  "Gestão profissional de actividades formativas",
  "Compromisso com qualidade pedagógica",
  "Actuação orientada para resultados",
  "Acompanhamento técnico contínuo",
];

export const contactDetails = {
  company: "ECOS DO OCEANO BUSINESS",
  legalName: "Prestação de Serviços & Comércio, LDA",
  address: "Distrito Urbano de Neves Bendinha, Casa nº 83, Luanda",
  phone: "925 414 392",
  phoneHref: "tel:+244925414392",
  email: "info@ecosoceanobusiness.com",
  emailHref: "mailto:info@ecosoceanobusiness.com",
  taxpayer: "5001427067",
  website: "www.ecosoceanobusiness.com",
};

