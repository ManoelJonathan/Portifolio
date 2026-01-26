import { ProjectCard } from "./ProjectCard";
import { Button } from "../ui/shadcn/button";
import { ArrowDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectsList } from "../../data/SocialNetworkData";
import Carousel from "../ui/acertenity/carousel";

export default function ProjectsHome() {
  const slides = ProjectsList.map((project) => ({
    content: <ProjectCard project={project} />,
  }));

  return (
    <section id="projects" className="w-full relative py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center mb-1">
          <h2 className="text-4xl text-center font-playfair font-bold">
            Projetos
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
          <span className="text-muted-foreground text-lg max-w-2xl font-light">
            Alguns dos meus trabalhos mais recentes
          </span>
        </div>

        <div className="w-full">
          <Carousel slides={slides} />
        </div>

        <footer className="flex justify-center">
          <Link to="/#contact">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full animate-bounce mt-5"
            >
              <ArrowDownIcon />
            </Button>
          </Link>
        </footer>
      </div>
    </section>
  );
}
