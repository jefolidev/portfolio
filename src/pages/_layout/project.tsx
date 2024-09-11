import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";

import { ButtonPrimary } from "../../components/ui/button-primary";
import { projectsData } from "../../data/projects";
import { NotFound } from "../404";
import { GitHubProjectPage } from "../app/projects/pages/gitsearch";
import { MatriculaProjectPage } from "../app/projects/pages/matform";
import { NetlyProjectPage } from "../app/projects/pages/netly";
import { TurismoProjectPage } from "../app/projects/pages/tourism";

import { Helmet } from "react-helmet-async";
import gitHubIcon from "../assets/github-icon.svg";

export function ProjectLayout() {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return <NotFound />;

  const navigate = useNavigate();
  navigate("/projects");

  return (
    <>
      <Helmet title={project.name} />
      <NavBar />
      <div className="bg-lightPrimary min-h-full w-full px-16 py-2 transition-colors dark:bg-primary">
        <div className="flex flex-col gap-5 pt-20">
          <h1 className="text-lightFonts font-geologica text-5xl font-bold transition-colors dark:text-white">
            {project.name}
          </h1>
          <span className="text-lightSubtitles font-maven text-lg dark:text-gray-400">
            {project.description}
          </span>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <ButtonPrimary text="Repositório" iconPath={gitHubIcon} />
          </a>
        </div>
        {projectId === "netly" ? <NetlyProjectPage /> : null}
        {projectId === "tourism" ? <TurismoProjectPage /> : null}
        {projectId === "matform" ? <MatriculaProjectPage /> : null}
        {projectId === "gitsearch" ? <GitHubProjectPage /> : null}
      </div>
    </>
  );
}
