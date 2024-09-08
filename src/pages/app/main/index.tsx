import { NavBar } from "../../../components/navbar";
import { ContactMe } from "./contact-me";
import { Experiences } from "./experience";
import HowCanIHelp from "./help";
import { Introduction } from "./introduction";
import { ProjectsMain } from "./projects";

export function PortfolioMain() {
  return (
    <>
      <NavBar />
      <Introduction />
      <ProjectsMain />
      <Experiences />
      <HowCanIHelp />
      <ContactMe />
    </>
  );
}
