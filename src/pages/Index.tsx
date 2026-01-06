import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Projets from "@/components/projets/ProjectsHome";
import Start from "@/components/Start";
import About from "@/components/About";

export function Index() {
  return (
    <>
      <Start />
      <About />
      <Journey />
      <Projets />
      <Contact />
    </>
  );
}
