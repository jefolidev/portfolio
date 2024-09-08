import { NavBar } from "../../../components/navbar";
import { Experiences } from "./experience";
import HowCanIHelp from "./help";
import { Introduction } from "./introduction";
import { ProjectsMain } from "./projects";

export function PortfolioRoot() {
  return (
    <>
      <NavBar />
      <Introduction />
      <ProjectsMain />
      <Experiences />
      <HowCanIHelp />
    </>
  );
}
