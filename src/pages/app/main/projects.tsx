import { ButtonPrimary } from "../../../components/button-primary";
import { ProjectCard } from "../../../components/project-card";

export function ProjectsMain() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-primary">
      <div className="self-start py-12 pl-40">
        <h1 className="py-4 font-geologica text-5xl font-bold text-white">
          Meus Projetos
        </h1>
        <span className="block h-[41px] max-w-[900px] font-maven text-sm text-gray-200">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>
      <div className="flex h-96 w-[98%] flex-col justify-center gap-4 rounded-xl bg-secondary">
        <div className="self-end px-[8.8rem]">
          <ButtonPrimary text="Ver todos" />
        </div>
        <div className="grid grid-flow-col grid-rows-2 items-center justify-evenly gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
