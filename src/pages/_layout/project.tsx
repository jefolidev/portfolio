import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";

import { projectsData } from "../../data/projects";
import { NotFound } from "../404";

export function ProjectLayout() {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return <NotFound />;

  console.log(projectId);

  const navigate = useNavigate();
  navigate("/projects");

  return (
    <>
      <NavBar />
      <div className="h-screen w-full bg-primary p-4 text-white">
        <div className="flex flex-col items-start justify-center gap-6 px-24 py-10">
          <div className="h-24 w-24 rounded-full bg-secondary" />
          <h1 className="font-geologica text-5xl font-bold text-gray-50">
            {project?.name}
          </h1>
          <span className="font-maven text-gray-300">
            {project?.description}
          </span>
        </div>
      </div>
    </>
  );
}
