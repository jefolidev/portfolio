import { useNavigate } from "react-router-dom";
import { InOrbitIcon } from "../../../components/in-orbit-icon";
import { ProjectCard } from "../../../components/project-card";
import { ButtonPrimary } from "../../../components/ui/button-primary";

export function ProjectsMain() {
  const navigate = useNavigate();
  navigate("/projects");
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center bg-gradient-to-t from-lightPrimary via-lightPrimary to-slate-100 px-2 transition-colors dark:bg-primary dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-secondary dark:via-primary dark:to-primary">
      <div className="self-start xs:px-2 xs:py-20 sm:px-20 sm:py-16 lg:px-40">
        <h1 className="py-4 font-geologica text-5xl font-bold tracking-tight text-lightFonts transition-colors dark:text-white">
          Meus Projetos
        </h1>

        <span className="block h-[41px] w-full text-start font-maven text-sm text-lightSubtitles transition-colors dark:text-gray-200 lg:text-base">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-lightSecondary py-12 transition-colors dark:bg-secondary sm:min-h-full md:max-h-96">
        <div className="flex xs:p-2 sm:flex-col sm:space-y-6 sm:self-center">
          <div className="xs:hidden md:block">
            <ButtonPrimary
              text="Ver todos"
              onClick={() => navigate("/projects")}
            />
          </div>

          <div className="grid min-h-full items-center xs:w-full xs:grid-cols-1 xs:gap-1 sm:grid-flow-col sm:grid-rows-2 sm:gap-5">
            <ProjectCard
              name="Net.ly"
              description="Landing Page, Rede Social"
              onClick={() => navigate("/projects/netly")}
            />
            <ProjectCard
              name="Snitap"
              description="Landing Page"
              onClick={() => navigate("/projects/snitap")}
            />
            <ProjectCard
              name="Form. de Matrícula"
              description="Landing Page"
              onClick={() => navigate("/projects/matform")}
            />
            <ProjectCard
              name="Literary Charms"
              description="Landing Page"
              onClick={() => navigate("/projects/literary-charms")}
            />
            <ProjectCard
              name="Convertor"
              description="Aplicação Web"
              onClick={() => navigate("/projects/convert")}
            />
            <ProjectCard
              name="in.orbit"
              description="Aplicação Web"
              onClick={() => navigate("/projects/inorbit")}
              projectIcon={<InOrbitIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
