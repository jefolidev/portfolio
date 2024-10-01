import { Helmet } from "react-helmet-async";
import { NavBar } from "../../../components/navbar";
import { ProjectsBody } from "./projects-body";
import { ProjectsHome } from "./projects-header";
import { ScrollRestoration } from "react-router-dom";

export function ProjectsRoot() {
  return (
    <>
      <Helmet title="Projetos" />
      <NavBar />
      <ProjectsHome />
      <ProjectsBody />
      <ScrollRestoration />
    </>
  );
}
