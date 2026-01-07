import { useNavigate } from "react-router-dom";
import type { ProjectSummary } from "../../types";
import { CardBody, CardContainer, CardItem } from "../ui/acertenity/3d-card";
import { Badge } from "../ui/shadcn/badge";

interface ProjectCardProps {
  project: ProjectSummary;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <CardContainer key={project.id} className="inter-var">
      <CardBody className="bg-card relative w-auto sm:w-[24rem] h-auto rounded-xl p-5 border transition-all duration-300">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-card-foreground font-playfair"
        >
          {project.title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-muted-foreground text-sm max-w-sm mt-2 font-roboto line-clamp-2"
        >
          {project.subtitle}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={project.image}
            height="1000"
            width="1000"
            className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-md"
            alt={project.title}
          />
        </CardItem>
        <div className="flex flex-col gap-4 mt-8">
          <CardItem translateZ={20} as="div" className="flex flex-wrap gap-2">
            {project.badges?.map((badge) => (
              <Badge key={badge} className="text-[10px] px-2 py-0.5">
                {badge}
              </Badge>
            ))}
          </CardItem>
          <div className="flex justify-end w-full">
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => navigate(project.route)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold cursor-pointer hover:opacity-90 transition-all"
            >
              Ver detalhes
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
