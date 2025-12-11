export default function Header() {
  return (
    <header className="z-100 h-[10vh] w-full fixed bg-ring border-b border-border">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-primary"><a href="">MS</a></h1>

        <nav className="flex gap-4">
          <a href="#" className="text-sm hover:underline">
            Sobre
          </a>
          <a href="#" className="text-  sm hover:underline">
            Projeto
          </a>
          <a href="#" className="text-sm hover:underline">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
