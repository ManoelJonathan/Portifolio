import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/shadcn/button";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import LapTopWeUnite from "../../assets/LapTopWeUnite.png";
import FundoWeunite from "../../assets/FundoWeunite.png";
import { Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/shadcn/dialog";
import { ProjectDetails } from "./DetailsWeunite";

export default function WeuniteProjets() {
  return (
    <div className="min-h-screen pt-[12vh] flex flex-col items-center text-primary gap-2">
      <div className="w-full justify-start items-start">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Button>
        </Link>
      </div>

      <div className="w-full h-[90vh] flex justify-center items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${FundoWeunite})` }}
        />
        <div className="flex flex-col w-full lg:w-[50%] h-full justify-center items-start top-0 left-0 z-0 p-6 ml-10">
          <h2 className="text-4xl font-bold mb-1">Inovação</h2>
          <h2 className="text-4xl font-bold mb-1">Evolução</h2>
          <h2 className="text-4xl font-bold mb-1">Oportunidade</h2>
          <span className="text-base pt-10 border-b pb-4 border-muted-foreground/50">
            Venha conhecer a WeUnite, a rede social que busca conectar atletas e
            organizações esportivas de forma inovadora. Durante meu tecnólogo no
            primeiro ano desenvolvi este projeto como trabalho de conclusão do
            PI (Projeto Integrador). A plataforma visa facilitar a comunicação,
            colaborando para o crescimento de novos talentos no mundo do
            esporte, além clubes e organizações encontrarem atletas promissores
            de maneira rápida e eficiente.
          </span>
          <div className="flex flex-row gap-10">
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-bold">120+</h3>
              <span className="text-sm text-muted-foreground">Componentes</span>
            </div>
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-bold">25</h3>
              <span className="text-sm text-muted-foreground">Interações</span>
            </div>
            <div className="items-center flex-col flex mt-6">
              <h3 className="text-2xl font-bold">6</h3>
              <span className="text-sm text-muted-foreground">Membros</span>
            </div>
          </div>
          <div className="flex flex-row pt-5 gap-4">
            <Button
              variant="ghost"
              className="border-primary border rounded-3xl text-primary bg-background"
              onClick={() =>
                window.open(
                  "https://github.com/ManoelJonathan/weunite-frontend"
                )
              }
            >
              <Github className="h-4 w-4 mr-2" />
              Frontend
            </Button>

            <Button
              variant="ghost"
              className="border-primary border rounded-3xl text-primary bg-background"
              onClick={() =>
                window.open("https://github.com/ManoelJonathan/weunite-backend")
              }
            >
              <Github className="h-4 w-4 mr-2" />
              Backend
            </Button>
          </div>
        </div>

        <div className="flex justify-center w-full p-5">
          <CardContainer className="inter-var relative z-10">
            <CardBody className="relative group/card w-auto sm:w-[35rem] h-auto rounded-xl p-1   ">
              <CardItem translateZ="80" className="w-full mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src={LapTopWeUnite}
                      height="1000"
                      width="1000"
                      className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
                      alt="thumbnail"
                    />
                  </DialogTrigger>
                  <DialogContent className="w-screen h-screen max-w-none sm:max-w-none m-0 p-0 rounded-none border-none bg-black/90 flex flex-col justify-center items-center z-[100]">
                    <DialogTitle className="absolute top-2 left-2 md:top-4 md:left-4 text-white text-lg md:text-2xl font-bold z-50">
                      Galeria do Projeto WeUnite
                    </DialogTitle>
                    <ProjectDetails projectId="weunite" />
                  </DialogContent>
                </Dialog>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
