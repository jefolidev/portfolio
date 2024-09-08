import { NavBar } from "../../../components/navbar";
import { ProjectsBody } from "./projects-body";
import { ProjectsHome } from "./projects-header";

export function ProjectsRoot() {
  return (
    <>
      <NavBar />
      <ProjectsHome />
      <ProjectsBody />
    </>
  );
}
