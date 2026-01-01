import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Projets from "@/components/projets/ProjectsHome";
import Start from "@/components/Start";

export function Index() {
  return (
    <>
      <Start />
      <Journey />
      <Projets />
      <Contact />
    </>
  );
}
