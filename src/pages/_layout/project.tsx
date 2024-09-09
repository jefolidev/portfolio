import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";

import { ButtonPrimary } from "../../components/ui/button-primary";
import { projectsData } from "../../data/projects";
import { NotFound } from "../404";
import { GitHubProjectPage } from "../app/projects/pages/gitsearch";
import { MatriculaProjectPage } from "../app/projects/pages/matform";
import { NetlyProjectPage } from "../app/projects/pages/netly";
import { TurismoProjectPage } from "../app/projects/pages/tourism";

export function ProjectLayout() {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return <NotFound />;

  const navigate = useNavigate();
  navigate("/projects");

  return (
    <>
      <NavBar />
      <div className="h-full w-full bg-primary px-16 py-2">
        <div className="flex flex-col gap-5 pt-20">
          <h1 className="font-geologica text-5xl font-bold text-white">
            {project.name}
          </h1>
          <span className="font-maven text-lg text-gray-400">
            {project.description}
          </span>
          <ButtonPrimary text="Repositório" />
        </div>
        {projectId === "netly" ? <NetlyProjectPage /> : null}
        {projectId === "tourism" ? <TurismoProjectPage /> : null}
        {projectId === "matform" ? <MatriculaProjectPage /> : null}
        {projectId === "gitsearch" ? <GitHubProjectPage /> : null}
      </div>
    </>
  );
}
