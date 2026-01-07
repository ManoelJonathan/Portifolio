import { CardBody, CardContainer, CardItem } from "../ui/acertenity/3d-card";
import { Button } from "../ui/shadcn/button";
import { ArrowDownIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ProjectsList } from "../../data/SocialNetworkData";
import { Badge } from "../ui/badge";
export default function ProjectsHome() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="w-full relative py-20 bg-background/50">

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-4xl text-center font-playfair font-bold">
            Projetos
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
          <span className="text-muted-foreground text-lg max-w-2xl font-light">
            Alguns dos meus trabalhos mais recentes
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {ProjectsList.map((project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-card relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border uration-500">
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
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-md"
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
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold cursor-pointer"
                    >
                      Ver detalhes
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-20">
          <Link
            to="/#contact"
            className="transition-transform hover:translate-y-1"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full animate-bounce h-12 w-12 shadow-md border-primary/20 hover:border-primary text-primary"
            >
              <ArrowDownIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
