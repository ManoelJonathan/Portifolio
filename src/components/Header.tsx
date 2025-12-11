import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export default function Header() {
  const {setTheme, theme} = useTheme();
  const themeIcon = theme === "dark" ? <Sun/> : <Moon/>;

  return (
    <header className="z-100 h-[10vh] w-full fixed bg-background/50 backdrop-blur-md border-b border-border">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-primary">
            <a href="#start">MS</a>
          </h1>

          <Button className="theme-toggle bg-primary" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {themeIcon}
          </Button>
        </div>

        <nav className="flex gap-4">
          <a href="#about" className="text-sm hover:underline">
            Sobre
          </a>
          <a href="#projects" className="text-sm hover:underline">
            Projeto
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
