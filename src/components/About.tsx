import { ArrowDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { skillsData } from "@/data/AboutData";
import { Button } from "./ui/acertenity/button";

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
        <p className="text-lg text-muted-foreground font-space leading-relaxed flex-1 max-w-2xl">
          Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e
          eficientes. Com foco em desenvolvimento web, busco sempre aprimorar
          minhas habilidades e entregar projetos que façam a diferença. Minha
          jornada é marcada pelo aprendizado contínuo e pela busca constante por
          excelência técnica.
        </p>

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
                  <div key={skill.name} className="flex flex-col items-center gap-1">
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

      <footer className="flex justify-center">
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
