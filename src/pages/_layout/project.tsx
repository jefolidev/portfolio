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
import { ButtonSecondary } from "../../components/ui/button-secondary";
import { ConvertPage } from "../app/projects/pages/convert";
import { InOrbitPage } from "../app/projects/pages/inorbit";
import { LiteraryCharmsPage } from "../app/projects/pages/literary-charms";
import { QuicklistPage } from "../app/projects/pages/quicklist";
import { SnitapPage } from "../app/projects/pages/snitap";
import { ZingenPage } from "../app/projects/pages/zingen";
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
      <div className="min-h-full w-full bg-lightPrimary px-16 py-2 transition-colors dark:bg-primary">
        <div className="flex flex-col gap-5 pt-20">
          <h1 className="font-geologica text-5xl font-bold text-lightFonts transition-colors dark:text-white">
            {project.name}
          </h1>
          <span className="font-maven text-lg text-lightSubtitles dark:text-gray-400">
            {project.description}
          </span>
          <div className="flex gap-2">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <ButtonPrimary text="Repositório" iconPath={gitHubIcon} />
            </a>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <ButtonSecondary text="Acessar o site" />
            </a>
          </div>
        </div>
        {projectId === "netly" ? <NetlyProjectPage /> : null}
        {projectId === "tourism" ? <TurismoProjectPage /> : null}
        {projectId === "matform" ? <MatriculaProjectPage /> : null}
        {projectId === "gitsearch" ? <GitHubProjectPage /> : null}
        {projectId === "inorbit" ? <InOrbitPage /> : null}
        {projectId === "zingen" ? <ZingenPage /> : null}
        {projectId === "literary-charms" ? <LiteraryCharmsPage /> : null}
        {projectId === "snitap" ? <SnitapPage /> : null}
        {projectId === "quicklist" ? <QuicklistPage /> : null}
        {projectId === "convert" ? <ConvertPage /> : null}
      </div>
    </>
  );
}
