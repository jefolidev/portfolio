import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layout/app";
import { ProjectLayout } from "./pages/_layout/project";
import { AboutMe } from "./pages/app/about-me/aboute-me";
import { PortfolioRoot } from "./pages/app/main/_index";
import { ProjectsRoot } from "./pages/app/projects/_index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <PortfolioRoot />,
      },
      {
        path: "projects",
        element: <ProjectsRoot />,
        errorElement: <NotFound />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
        errorElement: <NotFound />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectLayout />,
      },
    ],
  },
]);
