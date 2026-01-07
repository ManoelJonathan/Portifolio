import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/shadcn/carousel";
import {PropoverProjects } from "./PropoverProjects";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { AllGalleries } from "../../data/AllProjectsGalleryData";

interface ProjectDetailsProps {
  projectId: string;
}

export function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const galleryData = AllGalleries[projectId] || [];

  if (!galleryData.length) {
    return <div className="text-white">Projeto não encontrado ou sem imagens.</div>;
  }

  return (
    <Carousel
      className="w-full h-full [&>div]:h-full"
      orientation={isDesktop ? "horizontal" : "vertical"}
    >
      <CarouselContent className="h-full ml-0 mt-0">
        {galleryData.map((image) => (
          <CarouselItem
            key={image.id}
            className="flex justify-center items-center h-full p-0 pl-0 pt-0"
          >
            <PropoverProjects
              src={image.src}
              alt={image.alt}
              tooltips={image.tooltips}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`h-10 w-10 md:h-14 md:w-14 border-2 border-white/20 bg-black/60 hover:bg-black/80 text-white hover:text-primary hover:border-primary transition-all z-50 ${
          isDesktop
            ? "left-4 top-1/2 -translate-y-1/2"
            : "top-24 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      />
      <CarouselNext
        className={`h-10 w-10 md:h-14 md:w-14 border-2 border-white/20 bg-black/60 hover:bg-black/80 text-white hover:text-primary hover:border-primary transition-all z-50 ${
          isDesktop
            ? "right-4 top-1/2 -translate-y-1/2"
            : "bottom-12 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      />
    </Carousel>
  );
}
