import Home from "../assets/WeUniteProject/Home.png";
import Notification from "../assets/WeUniteProject/Notification.png";
import Profile from "../assets/WeUniteProject/Profile.png";
import SkillsForAthletes from "../assets/WeUniteProject/SkillsForAthletes.png";
import Oportunities from "../assets/WeUniteProject/Oportunities.png";
import DashboardAdmin from "../assets/WeUniteProject/DashboardAdmin.png";
import Report from "../assets/WeUniteProject/Report.png";
import DetailsReport from "../assets/WeUniteProject/DetailsReport.png";
import Chat from "../assets/WeUniteProject/Chat.png";

import type { GalleryItem } from "../types";

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: Home,
    alt: "Tela Inicial da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "5%",
        left: "10%",
        content:
          "Menu lateral com acesso rápido às funcionalidades principais e navegação da aplicação.",
      },
      {
        id: 2,
        top: "50%",
        left: "65%",
        content:
          "Área central com feed de publicações e interações dos usuários.",
      },
      {
        id: 3,
        top: "5%",
        left: "80%",
        content: "Sidebar direita com sugestões de oportunidades.",
      },
    ],
  },
  {
    id: 2,
    src: Notification,
    alt: "Tela de Notificações da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "50%",
        left: "33%",
        content:
          "Usuários podem visualizar suas notificações (novas mensagens, novos seguidores e interações em suas publicações) recentes e interagir com elas.",
      },
    ],
  },
  {
    id: 4,
    src: Profile,
    alt: "Tela de Perfil da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "5%",
        left: "76%",
        content:
          "Banner de capa personalizável para destacar o perfil do usuário.",
      },
      {
        id: 2,
        top: "38  %",
        left: "76%",
        content: `Navegação entre seções do perfil, como publicações, comentários, 
        oportunidades caso a conta seja de organização e sobre onde irá ter um descrição do usuário.`,
      },
    ],
  },
  {
    id: 5,
    src: SkillsForAthletes,
    alt: "Tela de Habilidades para Atletas da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "50%",
        left: "76%",
        content:
          "Área dedicada para atletas destacarem suas habilidades, conquistas e histórico esportivo.",
      },
    ],
  },
  {
    id: 6,
    src: Oportunities,
    alt: "Tela de Oportunidades da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "12%",
        left: "40%",
        content:
          "Carrossel de oportunidades em destaque para facilitar a pesquisa.",
      },
      {
        id: 2,
        top: "60%",
        left: "75%",
        content:
          "Feed de contendo todas as oportunidades disponíveis na plataforma.",
      },
      {
        id: 3,
        top: "13%",
        left: "82%",
        content: `Funcionalidades básicas da secção, como Criar Oportunidade, Minhas Oportunidades que 
        para clubes é possível visualizar as oportunidades criadas e os atletas inscritos nelas, e para 
        atletas é possível visualizar as oportunidades que se inscreveu. Além disto, há também a opção de
        visualizar oportunidades salvas.`,
      },
    ],
  },
  {
    id: 7,
    src: Chat,
    alt: "Tela de Chat da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "90%",
        left: "50%",
        content:"Comunicação em tempo real entre usuários através de mensagens diretas, com texto, áudio e imagens.",
      },
      {
        id: 2,
        top: "30%",
        left: "25%",
        content:"Lista de conversas recentes para fácil acesso às interações anteriores.",
      }
    ],
  },
  {
    id: 8,
    src: DashboardAdmin,
    alt: "Tela de Dashboard Admin da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "15%",
        left: "50%",
        content:"Visão geral das métricas chave da plataforma, como número de usuários, publicações e interações.",
      },
      {
        id: 2,
        top: "5%",
        left: "15%",
        content:"Menu de navegação lateral para acessar diferentes seções do painel administrativo.",
      }
    ],
  },
  {
    id:10,
    src: Report,
    alt: "Tela de Denúncias da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "50%",
        left: "50%",
        content:"Lista de denúncias feitas pelos usuários, permitindo que os administradores revisem e tomem ações apropriadas.",
      },
    ],
  },
  {
    id:11,
    src: DetailsReport,
    alt: "Tela de Detalhes da Denúncia da WeUnite",
    tooltips: [
      {
        id: 1,
        top: "50%",
        left: "5%",
        content:"Detalhes completos de uma denúncia específica, incluindo informações do denunciante, conteúdo denunciado e ações que podem ser tomadas.",
      },
    ],
  }
];
