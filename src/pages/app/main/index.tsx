import { Experiences } from "./experience";
import HowCanIHelp from "./help";
import { Introduction } from "./introduction";
import { ProjectsMain } from "./projects";

export function PortfolioMain() {
  return (
    <>
      <Introduction />
      <ProjectsMain />
      <Experiences />
      <HowCanIHelp />
    </>
  );
}
