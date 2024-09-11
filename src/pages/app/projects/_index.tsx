import { Helmet } from "react-helmet-async";
import { NavBar } from "../../../components/navbar";
import { ProjectsBody } from "./projects-body";
import { ProjectsHome } from "./projects-header";

export function ProjectsRoot() {
  return (
    <>
      <Helmet title="Projetos" />
      <NavBar />
      <ProjectsHome />
      <ProjectsBody />
    </>
  );
}
