import { CardAboutEtec, CardAboutFatec } from "./CardAbout";

export default function About() {
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col gap-4 justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl text-center font-bold">Minha Jornada</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
        <span className="text-muted-foreground block max-w-2xl text-center">Um caminho de aprendizado contínuo, explorando novas tecnologias e promovendo inovação</span>
      </div>

      <div className="relative flex flex-col gap-30 py-20 ml-8">
        <div className="absolute left-0 top-0 h-full w-[0.2em] bg-linear-to-b from-transparent via-current to-transparent opacity-20"></div>
        
        <div className="relative flex items-start flex-col">
          <CardAboutEtec />
          <span className="ml-6 text-2xl font-bold font-['Oswald'] tracking-widest opacity-80">
            Técnico em ADS
          </span>
          <p className="ml-6 text-xs text-muted-foreground ">Formação focada em analise e desenvolvimento de software na Etec</p>
        </div>

        <div className="relative flex flex-col items-start ">
          <CardAboutFatec />
          <span className="ml-6 text-2xl font-bold font-['Oswald'] tracking-widest opacity-80">
            Tecnólogo em ADS
          </span>
          <p className="ml-6 text-xs text-muted-foreground ">Formação focada em analise e desenvolvimento de software na Fatec</p>
        </div>
      </div>

    </section>
  );
}
