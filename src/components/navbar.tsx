import { useNavigate } from "react-router-dom";
import { HomeIcon } from "./ui/icons/home-icon";
import { PerfilIcon } from "./ui/icons/perfil-icon";
import { ProjectsIcon } from "./ui/icons/projects-icon";
import { SunIcon } from "./ui/icons/sun-icon";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex h-10 w-48 -translate-x-1/2 transform items-center justify-evenly gap-1 rounded-full bg-[#121116] shadow-lg shadow-black/20">
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
      <button>
        <SunIcon />
      </button>
    </div>
  );
}
