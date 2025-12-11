import { ContainerScroll } from "./ui/container-scroll-animation";

export default function Projets() {
  return (
    <div className="w-full h-screen justify-center items-center">

      <h2 className="text-4xl text-center font-bold mb-10">Projetos</h2>

      <ContainerScroll
        titleComponent={
          <>
            <h3 className="text-4xl font-semibold text-black dark:text-white">
              WeUnite <br />
              <span className="text-2xl  font-bold mt-1 leading-none">
                Rede Social para atletas
              </span>
            </h3>
          </>
        }
        
      >
        <img
          src="./Foto.jpeg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl h-full object-cover"
          draggable={false}
        />
      </ContainerScroll>
      
    </div>
  );
}
