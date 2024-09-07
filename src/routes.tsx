import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import { Introduction } from "./pages/app/home/introduction";
import { ProjectsHome } from "./pages/app/projects/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsHome />,
    errorElement: <NotFound />,
  },
]);
