import { ContainerScroll } from "../ui/acertenity/container-scroll-animation";
import { useBreakpoints } from "../../lib/useBreakpoints";
import { cn } from "../../lib/utils";
import { Button } from "../ui/shadcn/button";
import { ArrowDownIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectsList } from "../../data/SocialNetworkData";

export default function ProjectsHome() {
  const { isDesktop } = useBreakpoints();
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center py-20"
    >
      <div className="w-full justify-center items-center mt-10">
        <div className="items-center justify-center flex flex-col gap-2">
          <h2 className="text-4xl text-center font-bold font-playfair">Projetos</h2>
          <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
          <span className="text-muted-foreground block max-w-2xl text-center">
            Alguns dos meus trabalhos mais recentes
          </span>
        </div>

        <div
          className={cn(
            "flex md:gap-20 items-center justify-center mt-10",
            isDesktop ? "flex-row" : "flex-col "
          )}
        >
          {ProjectsList.map((project) => (
            <ContainerScroll
              key={project.id}
              titleComponent={
                <>
                  <h3 className="text-2xl font-semibold font-roboto text-primary md:-mt-22 md:mb-12">
                    {project.title} <br />
                    <span className="text-lg mt-1 leading-none">
                      {project.subtitle}
                    </span>
                  </h3>
                </>
              }
            >
              <img
                src={project.image}
                alt={project.title}
                height={720}
                width={1400}
                className="mx-auto rounded-2xl h-full object-cover cursor-pointer"
                draggable={false}
                onClick={() => navigate(project.route)}
              />
            </ContainerScroll>
          ))}
        </div>
        <footer className="flex justify-center -mt-60">
          <a href="#contact">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full animate-bounce"
            >
              <ArrowDownIcon />
            </Button>
          </a>
        </footer>
      </div>
    </section>
  );
}
