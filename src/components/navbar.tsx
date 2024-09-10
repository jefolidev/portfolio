import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";
import { HomeIcon } from "./ui/icons/home-icon";
import { PerfilIcon } from "./ui/icons/perfil-icon";
import { ProjectsIcon } from "./ui/icons/projects-icon";

export function NavBar() {
  const navigate = useNavigate();
  const { themeChanger, darkIcon } = useTheme();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex h-10 w-48 -translate-x-1/2 transform items-center justify-evenly gap-1 rounded-full shadow-lg shadow-black/20 backdrop-blur-md">
      <button onClick={() => navigate("/")}>
        <HomeIcon />
      </button>
      <button onClick={() => navigate("/about-me")}>
        <PerfilIcon />
      </button>
      <button onClick={() => navigate("/projects")}>
        <ProjectsIcon />
      </button>
      <div className="h-1 w-0.5 rounded-full bg-gray-100" />
      <button onClick={themeChanger}>{darkIcon}</button>
    </nav>
  );
}
