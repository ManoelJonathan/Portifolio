import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/shadcn/button";

export default function About() {
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col gap-4 justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl text-center font-playfair font-bold">Sobre Mim</h2>
        <div className="h-1 w-24 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"></div>
      </div>

      <div className="max-w-3xl text-center px-4 mt-8">
        <p className="text-lg text-muted-foreground font-space leading-relaxed">
          Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
          Com foco em desenvolvimento web, busco sempre aprimorar minhas habilidades e 
          entregar projetos que façam a diferença. Minha jornada é marcada pelo aprendizado 
          contínuo e pela busca constante por excelência técnica.
        </p>
      </div>

      <footer className="flex justify-center mt-20">
        <a href="#jornada">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full animate-bounce"
          >
            <ArrowDownIcon />
          </Button>
        </a>
      </footer>
    </section>
  );
}
