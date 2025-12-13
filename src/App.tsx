import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header/>
        <Index/>
      </ThemeProvider>
    </>
  );
}

export default App;
