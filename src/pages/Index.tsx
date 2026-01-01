import About from "@/components/About";
import Contact from "@/components/Contact";
import Projets from "@/components/projets/ProjectsHome";
import Start from "@/components/Start";

export function Index() {
  return (
    <>
      <Start />
      <About />
      <Projets />
      <Contact />
    </>
  );
}
