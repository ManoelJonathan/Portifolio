import "./App.css";
import Header from "./components/Header";
import { useScrollToHash } from "./hooks/use-scroll-to-hash";
import { ThemeProvider } from "./components/ThemeProvider";
import { ShootingStars } from "./components/ui/acertenity/shooting-stars";
import { StarsBackground } from "./components/ui/acertenity/stars-background";
import { InitRoutes } from "./routes/IndexRoutes";
import { ProjectsRoutes } from "./routes/ProjectsRoutes";

function App() {
  useScrollToHash();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative z-10">
          <Header />
          <InitRoutes />
          <ProjectsRoutes />
        </div>
        <StarsBackground className="fixed inset-0 z-0 pointer-events-none" />
        <ShootingStars className="fixed inset-0 z-0 pointer-events-none" />
      </ThemeProvider>
    </>
  );
}

export default App;
