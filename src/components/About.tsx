
export default function About() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center">

      <div className="flex justify-center items-center">
        <h2 className="text-4xl text-center font-bold">Minha Jornada</h2>
      </div>

      <div className="relative flex flex-col gap-20 py-4 ml-8">
       
        <div className="absolute left-0 top-0 h-full w-[0.2em] bg-linear-to-b from-transparent via-current to-transparent opacity-20"></div>

        
        <div className="relative flex items-center">
          <div className="absolute -left-[5px] w-3 h-3 bg-current rounded-full"></div>
          <span className="ml-6 text-4xl font-bold font-['Oswald'] tracking-widest opacity-80">
            Etec
          </span>
        </div>

        
        <div className="relative flex items-center">
          <div className="absolute -left-[5px] w-3 h-3 bg-current rounded-full"></div>
          <span className="ml-6 text-4xl font-bold font-['Oswald'] tracking-widest opacity-80">
            Fatec
          </span>
        </div>

        
      </div>

    </div>
  );
}
