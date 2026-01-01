import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { BadgeCheck, BookOpen, Calendar, GraduationCap } from "lucide-react";
import Etec_Image from "../assets/Etec_Image.jpg";
import Fatec_Image from "../assets/Fatec.jpg";

export function CardAboutEtec() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <DialogHeader className="items-center sm:text-center space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
            <Calendar className="w-3 h-3" />
            2022 - 2024
          </div>
          
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src={Etec_Image}
              alt="Imagem da Etec"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
               <p className="font-medium text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Técnico em Desenvolvimento de Sistemas
               </p>
            </div>
          </div>

          <DialogTitle className="hidden">Etec de Heliópolis</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Etec de Heliópolis
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          <div className="space-y-2 bg-muted/30 p-4 rounded-lg border border-border/50">
            <h4 className="font-semibold flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              Resumo
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-justify">
              O curso ADS da Etec faz parte do programa AMS (Articulação Médio
              Superior). Durante os três anos adquiri conhecimentos base para
              tecnologia, tanto da programação com lógica e análise com os
              diagramas UML básicos (Caso de Uso, Classes e Atividades).
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm border-b pb-2 border-border/50">Destaques</h4>
            <ul className="grid gap-2">
              {[
                "Desenvolvimento de projetos práticos em equipe (Fábrica de software)",
                "Aprendizado de linguagens como Java e JavaScript",
                "Introdução a bancos de dados relacionais e SQL",
                "Fundamentos de redes de computadores e segurança da informação",
                "Projeto de conclusão: Rede Social para atletas"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CardAboutFatec() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <DialogHeader className="items-center sm:text-center space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
            <Calendar className="w-3 h-3" />
            Cursando
          </div>
          
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img
              src={Fatec_Image}
              alt="Imagem da Fatec"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
               <p className="font-medium text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Tecnólogo em Análise e Desenvolvimento de Sistemas
               </p>
            </div>
          </div>

          <DialogTitle className="hidden">Fatec Ipiranga</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
             Etec de Heliópolis (Fatec)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          <div className="space-y-2 bg-muted/30 p-4 rounded-lg border border-border/50">
            <h4 className="font-semibold flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              Resumo
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-justify">
              O curso ADS da Fatec é um curso superior de continuação dos estudos
              iniciados na Etec. Durante o curso, estou aprofundando meus
              conhecimentos em programação, desenvolvimento de software e
              tecnologias emergentes, preparando-me para enfrentar os desafios do
              mercado de trabalho na área de TI.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm border-b pb-2 border-border/50">Destaques</h4>
            <ul className="grid gap-2">
              {[
                "Desenvolvimento de projetos práticos em equipe (Projeto Integrador)",
                "Aprendizado de estruturas de dados junto a linguagens como Java e Python",
                "Avançando em bancos de dados relacionais SQL e introdução a não relacional",
                "Engenharia de Software",
                "Projeto Integrador: continuação do projeto de conclusão da Etec"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
