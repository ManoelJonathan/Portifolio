import Teste from "../assets/teste.png";

export interface ProjectSummary {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  route: string;
}

export const ProjectsList: ProjectSummary[] = [
  {
    id: "weunite",
    title: "WeUnite",
    subtitle: "Rede Social para atletas",
    image: Teste,
    route: "/weunite",
  },
];
