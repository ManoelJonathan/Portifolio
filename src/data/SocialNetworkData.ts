import ProjectWeUnite from "../assets/WeUniteProject/ProjectWeUnite.png";

export interface ProjectSummary {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  route: string;
  resume: string;
}

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
    route: "/weunite",
  },
];
