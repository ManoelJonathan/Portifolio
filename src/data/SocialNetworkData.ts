import teste from "../../assets/teste.png";

interface ProjectWeunite{
    title: string;
    description: string;
    image: string;
}

interface ProjectsData{
   [key: string]: ProjectWeunite;
}

export const ProjectsData: ProjectsData = {
    home: {
        title: "Feed Principal",
        description: "Tela inicial, onde os usuários podem fazer a navegação e controle para algumas atividades (Criar Postagens, Notificações, Pesquisas e Modo de Cor). Na parte central, é possil ver as postagens recentes, interagir com elas curtindo, comentando e republicar. Na lateral direita, temos as sugestões de oportunidades.",
        image: teste,
    },
    notificacao:{
        title: "Notificações",
        description: "Menu onde os usuários podem visualizar todas as notificações relacionadas às suas atividades na plataforma, como curtidas, comentários e novas conexões.",
        image: teste,
    },
    pesquisa:{
        title: "Pesquisa de Usuários",
        description: "Funcionalidade que permite aos usuários buscar por outros profissionais ou organizações",
        image: teste,
    },
    oportunidade:{
        title: "Oportunidades",
        description: "Seção dedicada a listar oportunidades do esporte, atletas e profissionais do esporte.",
        image: teste,
    },
    chat :{
        title: "Chat em Tempo Real",
        description: "Funcionalidade de chat que permite aos usuários se comunicarem em tempo real, fomentando nossa principal forma de interação e objetivo de aproximar atletas com organizações.",
        image: teste,
    },
    perfil:{
        title: "Perfil do Usuário",
        description: "Página onde os usuários podem visualizar e editar suas informações pessoais, histórico esportivo e conexões.",
        image: teste,
    },
    admin:{
        title: "Painel Administrativo",
        description: "Área reservada para administradores gerenciarem usuários, conteúdos e monitorarem atividades na plataforma com gráficos e métricas.",
        image: teste,
    }
};
