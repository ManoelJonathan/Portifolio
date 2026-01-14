import Etec_Image from "@/assets/Etec_Image.jpg";
import Fatec_Image from "@/assets/Fatec.jpg";
import type { Journey } from "@/types/index";

export const JourneyData: Journey[] = [
  {
    id: "etec",
    title: "Técnico em Desenvolvimento de Sistemas",
    description: `O curso ADS da Etec faz parte do programa AMS (Articulação Médio
              Superior). Durante os três anos adquiri conhecimentos base para
              tecnologia, tanto da programação com lógica e análise com os
              diagramas UML básicos (Caso de Uso, Classes e Atividades).`,
    datefinal: "2024",
    period: "2022 - 2024",
    institution: "Etec de Heliópolis",
    image: Etec_Image,
    activity: [
      "Desenvolvimento de projetos práticos em equipe (Fábrica de software)",
      "Aprendizado de linguagens como Java e JavaScript",
      "Introdução a bancos de dados relacionais e SQL",
      "Fundamentos de redes de computadores e segurança da informação",
      "Projeto de conclusão: Rede Social para atletas",
    ],
  },
  {
    id: "fatec",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    description: `  O curso ADS da Fatec é um curso superior de continuação dos estudos
              iniciados na Etec. Durante o curso, estou aprofundando meus
              conhecimentos em programação, desenvolvimento de software e
              tecnologias emergentes, preparando-me para enfrentar os desafios do
              mercado de trabalho na área de TI.`,
    datefinal: "2026",
    period: "Cursando:2025 - 2026",
    institution: "Fatec Ipiranga",
    image: Fatec_Image,
    activity: [
      "Desenvolvimento de projetos práticos em equipe (Projeto Integrador)",
      "Aprendizado de estruturas de dados junto a linguagens como Java e Python",
      "Avançando em bancos de dados relacionais SQL e introdução a não relacional",
      "Engenharia de Software",
      "Projeto Integrador: continuação do projeto de conclusão da Etec",
    ],
  },
];
