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
      <div className="flex flex-col justify-center items-center gap-2 mt-10">
        <h2 className="text-4xl text-center font-playfair font-bold">Minha Jornada</h2>
        <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
        <span className="text-muted-foreground font-space block max-w-2xl text-center">
          Um caminho de aprendizado contínuo, explorando novas tecnologias e
          promovendo inovação.
        </span>
      </div>

      <div className="relative flex flex-col gap-30 py-20 ml-25">
        <div className="absolute left-0 top-0 h-full w-[0.2em] bg-linear-to-b from-transparent via-current to-transparent opacity-20"></div>

        <div className="relative flex items-start flex-col">
          <h3 className="absolute -left-20 top-1/2 -translate-y-1/2 text-2xl font-semibold font-roboto tracking-widest opacity-80">
            2022
          </h3>
          <JourneyCard data={JourneyData[0]} />
          <span className="ml-6 text-2xl font-bold font-roboto tracking-widest opacity-80">
            Técnico em DS
          </span>
          <p className="ml-6 text-xs text-muted-foreground ">
            Formação focada em desenvolvimento de software na Etec
          </p>
        </div>

        <div className="relative flex flex-col items-start ">
          <h3 className="absolute -left-20 top-1/2 -translate-y-1/2 text-2xl font-semibold font-roboto tracking-widest opacity-80">
            2024
          </h3>
          <JourneyCard data={JourneyData[1]} />
          <span className="ml-6 text-2xl font-bold font-roboto tracking-widest opacity-80">
            Tecnólogo em ADS
          </span>
          <p className="ml-6 text-xs text-muted-foreground ">
            Formação focada em analise e desenvolvimento de software na Fatec
          </p>
        </div>
      </div>
      <footer className="flex justify-center">
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
