import { ArrowDownIcon, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { skillsData } from "@/data/AboutData";
import { Button } from "./ui/shadcn/button";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col gap-10 justify-center items-center py-20"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl text-center font-playfair font-bold">
          Sobre Mim
        </h2>
        <span className="text-muted-foreground font-space block max-w-2xl text-center">
          Conheça um pouco sobre minha trajetória e habilidades
        </span>
        <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
      </div>

      <div className="flex flex-col xl:flex-row max-w-7xl text-center xl:text-left px-4 gap-12 items-center">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-lg text-muted-foreground font-space leading-relaxed flex-1 max-w-2xl text-justify">
            Olá! Sou um desenvolvedor foco em desenvolvimento full stack,
            algumas das linguagens que mais trabalho são JavaScript e o
            TypeScript, além da utlização da biblioteca React para o frontend.
            No backend, tenho experiência com Java com Spring Boot, com
            arquitetura MVC e padrões RESTful. Meus conhecimentos também abragem
            bancos de dados relacionais como MySQL e PostgresSQL, além disto
            venho desenvolvendo noções em bancos de dados não relacionais como
            MongoDB.
          </p>

          <a
            href="/Currículo-Manoel_Jonathan.pdf"
            download="Manoel_Currículo.pdf"
          >
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-20 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-5">
                <Download /> Baixar Currículo
              </span>
            </button>
          </a>
        </div>

        <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {skillsData.map((group) => (
            <CardSpotlight
              key={group.field}
              className="bg-card/80 border border-white/10 backdrop-blur-xl p-5 h-full"
            >
              <h3 className="text-lg font-semibold text-primary font-roboto mb-4 border-b border-muted pb-2">
                {group.field}
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {group.content.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-1"
                  >
                    {typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <skill.icon className="w-6 h-6 text-white" />
                    )}
                    <span className="text-xs text-white text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>

      <footer className="justify-center flex -mt-5">
        <Link to="/#jornada">
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
