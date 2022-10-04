import { Intro } from "./Intro";
import { TechTable } from "./TechTable";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const MainContent = () => {
  return (
    <section id="main" className="container">
      <Intro />
      <TechTable />
      <Projects />
      <Contact />
    </section>
  );
};
