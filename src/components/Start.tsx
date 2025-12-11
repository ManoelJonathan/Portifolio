import { AvatarImage, Avatar } from "./ui/avatar";

export default function Start() {
  return (
    <section id="start">
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div className="flex justify-start items-center-safe ml-[2em] ">
          <Avatar className="w-[8em] h-[8em] rounded-full shadow-lg">
            <AvatarImage
              src="./Foto.jpeg"
              className="object-cover"
              alt="Foto de Perfil"
            />
          </Avatar>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-1xl tracking-[0.2em] font-bold">Portifolio</p>
          <h1 className="text-5xl font-   bold font-[Open_sans]">
            Manoel Silva
          </h1>
          <span className="text-center">
            Análise e Desenvolvimento de Software / Full Stack / React / Angular
            / SQL / Java / Python
          </span>
        </div>
      </div>
    </section>
  );
}
