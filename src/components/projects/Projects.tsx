import { ArrowLeft, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/shadcn/button";
import { CardBody, CardContainer, CardItem } from "../ui/acertenity/3d-card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/shadcn/dialog";
import { ProjectDetails } from "./ProjectDetails";
import { useBreakpoints } from "../../lib/useBreakpoints";
import { ProjectsList } from "../../data/SocialNetworkData";

export default function Projects() {
  const { isSmall } = useBreakpoints();
  const { id } = useParams();
  const project = ProjectsList.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-primary gap-4">
        <h2 className="text-4xl font-playfair font-bold">Projeto não encontrado</h2>
        <Link to="/">
          <Button variant="outline">Voltar ao Início</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[12vh] flex flex-col items-center text-primary gap-2">
      <div className="w-full justify-start items-start">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Button>
        </Link>
      </div>

      <div className="w-full h-[90vh] flex justify-center items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
        />
        <div className="flex flex-col w-full lg:w-[50%] h-full justify-center items-start top-0 left-0 z-0 p-6 lg:ml-10">
          {project.keywords.map((keyword, index) => (
            <h2 key={index} className="text-4xl font-playfair font-bold mb-1">
              {keyword}
            </h2>
          ))}
          <span className="text-base pt-10 border-b pb-4 border-muted-foreground/50">
            {project.resume}
          </span>
          
          
          <div className="flex flex-row gap-10">
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-semibold font-roboto">{project.stats.components}</h3>
              <span className="text-sm text-muted-foreground">Componentes</span>
            </div>
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-semibold font-roboto">{project.stats.interactions}</h3>
              <span className="text-sm text-muted-foreground">Interações</span>
            </div>
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-semibold font-roboto">{project.stats.members}</h3>
              <span className="text-sm text-muted-foreground">Membros</span>
            </div>
          </div>

         
          <div className="flex flex-row pt-5 gap-4">
            <Button
              variant="ghost"
              className="border-primary border rounded-3xl text-primary bg-background"
              onClick={() => window.open(project.links.frontendUrl)}
            >
              <Github className="h-4 w-4 mr-2" />
              Frontend
            </Button>

            <Button
              variant="ghost"
              className="border-primary border rounded-3xl text-primary bg-background"
              onClick={() => window.open(project.links.backendUrl)}
            >
              <Github className="h-4 w-4 mr-2" />
              Backend
            </Button>

            {isSmall && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="border-primary border rounded-3xl text-primary bg-background"
                  >
                    Ver Galeria
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-screen h-screen max-w-none sm:max-w-none m-0 p-0 rounded-none border-none bg-black/90 flex flex-col justify-center items-center z-[100]">
                  <DialogTitle className="absolute top-2 left-2 md:top-4 md:left-4 text-primary text-lg md:text-2xl font-bold z-50">
                    Galeria do Projeto {project.title}
                  </DialogTitle>
                  <ProjectDetails projectId={project.id} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        {!isSmall && (
          <div className="flex justify-center w-full p-5">
            <CardContainer className="inter-var relative z-10">
              <CardBody className="relative group/card w-auto sm:w-[35rem] h-auto rounded-xl p-1">
                <CardItem translateZ="80" className="w-full mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={project.mainImage}
                        height="1000"
                        width="1000"
                        className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
                        alt="thumbnail"
                      />
                    </DialogTrigger>
                    <DialogContent className="w-screen h-screen max-w-none sm:max-w-none m-0 p-0 rounded-none border-none bg-background/90 flex flex-col justify-center items-center z-[100]">
                      <DialogTitle className="absolute top-2 left-2 md:top-4 md:left-4 text-primary text-lg md:text-2xl font-bold z-50">
                        Galeria do Projeto {project.title}
                      </DialogTitle>
                      <ProjectDetails projectId={project.id} />
                    </DialogContent>
                  </Dialog>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        )}
      </div>
    </div>
  );
}
