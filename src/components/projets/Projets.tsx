import { ContainerScroll } from "../ui/acertenity/container-scroll-animation";
import { useBreakpoints } from "../../lib/useBreakpoints";
import { cn } from "../../lib/utils";
import { Button } from "../ui/shadcn/button";
import { ArrowDownIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Teste from "../../assets/teste.png";

export default function Projets() {
  const { isDesktop } = useBreakpoints();

  const navigate = useNavigate();

  const handleWeunite = () => {
    navigate("/weunite");
  };
  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center py-20"
    >
      <div className="w-full justify-center items-center mt-10">
        <div className="items-center justify-center flex flex-col gap-2">
          <h2 className="text-4xl text-center font-bold">Projetos</h2>
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
          <ContainerScroll
            titleComponent={
              <>
                <h3 className="text-2xl font-semibold text-primary md:-mt-22 md:mb-12">
                  WeUnite <br />
                  <span className="text-lg mt-1 leading-none">
                    Rede Social para atletas
                  </span>
                </h3>
              </>
            }
          >
            <img
              src={Teste}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl h-full object-cover"
              draggable={false}
              onClick={handleWeunite}
            />
          </ContainerScroll>

 
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
