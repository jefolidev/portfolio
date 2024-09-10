import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../../components/project-card";
import { ButtonPrimary } from "../../../components/ui/button-primary";

export function ProjectsMain() {
  const navigate = useNavigate();
  navigate("/projects");
  return (
    <div className="bg-lightPrimary flex h-screen w-full flex-col items-center justify-center transition-colors dark:bg-primary">
      <div className="self-start py-12 pl-40">
        <h1 className="text-lightFonts py-4 font-geologica text-5xl font-bold tracking-tight transition-colors dark:text-white">
          Meus Projetos
        </h1>
        <span className="text-lightSubtitles block h-[41px] max-w-[900px] font-maven text-sm transition-colors dark:text-gray-200">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>

      <div className="bg-lightSecondary flex h-96 w-[98%] flex-col justify-center rounded-lg px-36 transition-colors dark:bg-secondary">
        <div className="flex w-full flex-col space-y-6">
          <div className="mr-[6.5rem]">
            <ButtonPrimary
              text="Ver todos"
              onClick={() => navigate("/projects")}
            />
          </div>

          <div className="grid grid-flow-col grid-rows-2 items-center justify-start gap-5">
            <ProjectCard
              name="Net.ly"
              description="Landing Page, Rede Social"
              onClick={() => navigate("/projects/netly")}
              buttonColor="bg-yellow-500"
            />
            <ProjectCard
              name="Git Searcher"
              description="Aplicação Web"
              onClick={() => navigate("/projects/gitsearch")}
              buttonColor="bg-purple-300"
            />
            <ProjectCard
              name="Form. de Matrícula"
              description="Landing Page"
              onClick={() => navigate("/projects/matform")}
              buttonColor="bg-rose-500"
            />
            <ProjectCard
              name="Página de Turismo"
              description="Landing Page, Rede Social"
              onClick={() => navigate("/projects/tourism")}
              buttonColor="bg-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
