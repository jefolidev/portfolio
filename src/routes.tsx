import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import { PortfolioMain } from "./pages/app/main";
import { ProjectsHome } from "./pages/app/projects/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioMain />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsHome />,
    errorElement: <NotFound />,
  },
]);
