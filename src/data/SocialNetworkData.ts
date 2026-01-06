import ProjectWeUnite from "../assets/WeUniteProject/ProjectWeUnite.png";
import LapTopWeUnite from "../assets/WeUniteProject/LapTopWeUnite.png";
import FundoWeunite from "../assets/WeUniteProject/FundoWeunite.png";
import type { ProjectSummary } from "../types";

export const ProjectsList: ProjectSummary[] = [
  {
    id: "weunite",
    title: "WeUnite",
    subtitle: "Rede Social para atletas",
    resume: `Venha conhecer a WeUnite, a rede social que busca conectar atletas e organizações esportivas de forma inovadora. 
    Durante meu tecnólogo no primeiro ano desenvolvi este projeto como trabalho de conclusão do PI (Projeto Integrador). 
    A plataforma visa facilitar a comunicação, colaborando para o crescimento de novos talentos no mundo do esporte,
    além clubes e organizações encontrarem atletas promissores de maneira rápida e eficiente.`,
    image: ProjectWeUnite,
    route: "/project/weunite",
    keywords: ["Inovação", "Evolução", "Oportunidade"],
    stats: {
      components: "120+",
      interactions: "25",
      members: "6"
    },
    links: {
      frontendUrl: "https://github.com/ManoelJonathan/weunite-frontend",
      backendUrl: "https://github.com/ManoelJonathan/weunite-backend"
    },
    backgroundImage: FundoWeunite,
    mainImage: LapTopWeUnite,
  },
];
