import { ArrowDownIcon } from "lucide-react";
import { JourneyCard } from "./CardJourney";
import { Button } from "./ui/acertenity/button";
import { JourneyData } from "@/data/JourneyData";
import { Link } from "react-router-dom";

export default function Journey() {
  return (
    <section
      id="jornada"
      className="w-full min-h-screen flex flex-col gap-4 justify-center"
    >
      <div className="flex flex-col items-center gap-2 mt-20 mb-10">
        <h2 className="text-4xl text-center font-playfair font-bold">
          Minha Jornada
        </h2>
        <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
        <span className="text-muted-foreground font-space block max-w-2xl text-center">
          Um caminho de aprendizado contínuo, explorando novas tecnologias e
          promovendo inovação.
        </span>
      </div>

      <div className="relative flex flex-col gap-16 py-10 max-w-3xl ml-32 md:ml-60">
        <div className="absolute left-0 top-0 bottom-0 w-[0.2em] bg-linear-to-b from-transparent via-primary/50 to-transparent"></div>

        {JourneyData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-start gap-4"
          >
            <div className="absolute -left-40 top-5 flex flex-col items-end w-32 pr-4 md:pr-0">
              <span className="text-xl md:text-2xl font-bold font-roboto tracking-widest text-primary/80 whitespace-nowrap">
                {item.datefinal}
              </span>
            </div>

            <div className="pl-6">
              <JourneyCard data={item} />

              <div className="mt-4">
                <span className="text-xl md:text-2xl font-bold font-roboto tracking-widest opacity-80 block text-primary">
                  {item.institution}
                </span>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="flex justify-center mt-10">
        <Link to="/#projects">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full animate-bounce"
          >
            <ArrowDownIcon />
          </Button>
        </Link>
      </footer>
    </section>
  );
}
