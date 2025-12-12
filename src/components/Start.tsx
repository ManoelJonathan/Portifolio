import { AvatarImage, Avatar } from "./ui/avatar";
import { LampContainer } from "./ui/lamp";
export default function Start() {
  return (
    <section id="start" className="w-full min-h-screen flex flex-col items-center justify-center py-10">
      
      
      <Avatar className="w-32 h-32 border-2 border-primary/20 shadow-2xl mb-4 z-10">
        <AvatarImage
          src="./Foto.jpeg"
          className="object-cover"
          alt="Foto de Perfil"
        />
      </Avatar>

      
      <LampContainer>
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground font-bold tracking-[0.3em] text-sm uppercase">Portifolio</p>
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] text-primary leading-tight">
            Manoel <span className="italic text-muted-foreground">Silva</span>
          </h1>
        </div>
      </LampContainer>

      <div className="text-center px-4 -mt-15 md:-mt-20">
        <span className="text-muted-foreground block max-w-2xl">
          Analista e Desenvolvedor de Software / Full Stack / React / Angular
          / SQL / Java / Python
        </span>
      </div>
    </section>
  );
}
