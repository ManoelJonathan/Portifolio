import LapTopWeUnite from "../assets/LapTopWeUnite.png";
import Chat from "../assets/Chat.png";

export interface TooltipData {
  id: number;
  top: string;
  left: string;
  content: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  tooltips: TooltipData[];
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: LapTopWeUnite,
    alt: "Visão Geral do Dashboard",
    tooltips: [
      {
        id: 1,
        top: "30%",
        left: "20%",
        content: "Menu lateral com acesso rápido às funcionalidades principais.",
      },
      {
        id: 2,
        top: "50%",
        left: "60%",
        content: "Área de estatísticas com gráficos interativos.",
      },
    ],
  },
  {
    id: 2,
    src: Chat,
    alt: "Detalhes do Perfil",
    tooltips: [
      {
        id: 1,
        top: "70%",
        left: "50%",
        content: "Foto de perfil e informações básicas do atleta.",
      },
    ],
  },
];
