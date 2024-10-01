import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import { NavBar } from "../../../components/navbar";
import { Experiences } from "./experience";
import HowCanIHelp from "./help";
import { Introduction } from "./introduction";
import { ProjectsMain } from "./projects";

export function PortfolioRoot() {
  return (
    <>
      <Helmet title="Início" />
      <NavBar />
      <Introduction />
      <ProjectsMain />
      <Experiences />
      <HowCanIHelp />
      <ScrollRestoration />
    </>
  );
}
