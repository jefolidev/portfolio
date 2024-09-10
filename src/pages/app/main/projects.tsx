import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../../components/project-card";
import { ButtonPrimary } from "../../../components/ui/button-primary";

export function ProjectsMain() {
  const navigate = useNavigate();
  navigate("/projects");
  return (
    <div className="bg-lightPrimary flex h-screen w-full flex-col items-center justify-center px-2 transition-colors dark:bg-primary">
      <div className="xs:px-2 xs:py-20 self-start sm:px-40 sm:py-16">
        <h1 className="text-lightFonts py-4 font-geologica text-5xl font-bold tracking-tight transition-colors dark:text-white">
          Meus Projetos
        </h1>
        <span className="text-lightSubtitles block h-[41px] w-full text-start font-maven text-sm transition-colors lg:text-base dark:text-gray-200">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>

      <div className="bg-lightSecondary xs:p-2 flex max-h-96 w-full flex-col justify-center rounded-lg transition-colors sm:h-full dark:bg-secondary">
        <div className="flex sm:flex-col sm:space-y-6 sm:self-center">
          <div className="xs:hidden sm:block">
            <ButtonPrimary
              text="Ver todos"
              onClick={() => navigate("/projects")}
            />
          </div>

          <div className="xs:grid-cols-1 xs:gap-1 xs:w-full grid h-full items-center sm:grid-flow-col sm:grid-rows-2 sm:gap-5">
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
