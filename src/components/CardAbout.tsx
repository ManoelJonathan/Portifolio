import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import Etec_Image from "../assets/Etec_Image.jpg";
import Fatec_Image from "../assets/Fatec.jpg";

export function CardAboutEtec() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-current group-hover:scale-125 transition-transform duration-300"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="items-center sm:text-center">
          <DialogTitle className="font-bold tracking-[0.3em] uppercase">
            2022 - 2024
          </DialogTitle>
          <img
            src={Etec_Image}
            alt="Imagem da Etec"
            className="w-full h-[7em] md:h-[10em] object-cover rounded-md mb-4"
          />
          <DialogDescription >
            Técnico em Análise e Desenvolvimento de Sistemas pela Etec de Heliópolis.
          </DialogDescription>
        </DialogHeader>

        <div className="h-[0.5px] w-[20rem] bg-linear-to-r ml-10 from-transparent via-primary to-transparent rounded-full"></div>
        <div className="border-b pb-3">
          <h4 className="">Resumo</h4>
          <span className="text-xs text-muted-foreground">
            O curso ADS da Etec, faz parte do programa AMS (Articulação Médio
            Superior). Durante os três anos adquiri conhecimentos base para
            tecnologia tanto da programação com lógica e analise com os
            diagramas UML básicos (Caso de Uso, Classes e Atividades).
          </span>
        </div>
        <div>
          <h4>Destaques</h4>
          <ul className="list-disc list-inside text-xs text-muted-foreground">
            <li>
              Desenvolvimento de projetos práticos em equipe. (Fábrica de
              software)
            </li>
            <li>Aprendizado de linguagens como Java e JavaScript.</li>
            <li>Introdução a bancos de dados relacionais e SQL.</li>
            <li>
              Fundamentos de redes de computadores e segurança da informação.
            </li>
            <li>Projeto de conclusão: Rede Social para atletas</li>
          </ul>
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
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-current group-hover:scale-125 transition-transform duration-300"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="items-center">
          <DialogTitle className="font-bold tracking-[0.3em] uppercase items-center ">
            Cursando
          </DialogTitle>
          <img
            src={Fatec_Image}
            alt="Imagem da Etec"
            className="w-full h-[7rem] object-cover rounded-md mb-4"
          />
          <DialogDescription className="text-center">
            Tecnólogo em Análise e Desenvolvimento de Sistemas pela Etec de
            Heliópolis.
          </DialogDescription>
        </DialogHeader>

        <div className="h-[0.5px] w-[20rem] bg-linear-to-r ml-10 from-transparent via-primary to-transparent rounded-full"></div>

        <div className="border-b pb-3">
          <h4 className="">Resumo</h4>
          <span className="text-xs text-muted-foreground">
            O curso ADS da Fatec, é um curso superior de continuação dos estudos
            iniciados na Etec. Durante o curso, estou aprofundando meus
            conhecimentos em programação, desenvolvimento de software e
            tecnologias emergentes, preparando-me para enfrentar os desafios do
            mercado de trabalho na área de TI.
          </span>
        </div>
        <div>
          <h4>Destaques</h4>
          <ul className="list-disc list-inside text-xs text-muted-foreground">
            <li>
              Desenvolvimento de projetos práticos em equipe. (Projeto
              Integrador)
            </li>
            <li>
              Aprendizado de estruturas de dados junto a linguagens como Java e
              Python.
            </li>
            <li>
              {" "}
              Avançando em bancos de dados relacionais SQL e introdução a não
              relacional.
            </li>
            <li>Engenharia de Software</li>
            <li>
              Projeto Integrador: continuação do projeto de conclusão da Etec
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
