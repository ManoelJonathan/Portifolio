import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative z-10">
          <Header />
          <Index />
        </div>
        <StarsBackground className="fixed inset-0 z-0 pointer-events-none" />
        <ShootingStars className="fixed inset-0 z-0 pointer-events-none" />
      </ThemeProvider>
    </>
  );
}

export default App;
