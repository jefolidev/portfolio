import { MyProjectsCard } from "../../../components/projects-card";

import netlyMain from "./assets/netly/netly-main.png";
import netlyPrimary from "./assets/netly/netly-others.png";
import netlySecondary from "./assets/netly/netly-unique.png";

import gitPrimary from "./assets/git-searcher/git-first.png";
import gitMain from "./assets/git-searcher/git-main.png";
import gitSecondary from "./assets/git-searcher/git-repo.png";

import formMatMain from "./assets/form-matricula/form-main.png";
import formMatPrimary from "./assets/form-matricula/form-others.png";
import formMatSecondary from "./assets/form-matricula/form-unique.png";

export function ProjectsBody() {
  return (
    <div className="flex h-full w-full flex-col bg-primary px-3 py-8">
      <div className="flex h-[156.5rem] w-full flex-col gap-16 rounded-lg bg-secondary px-16 py-10">
        <MyProjectsCard
          name="Net.ly"
          description="O net.ly é um site criado para conectar atletas de vôlei, oferecendo uma experiência completa para quem gosta de participar de rachas. A plataforma permite agendar partidas e acompanhar um calendário com os próximos jogos."
          mainPic={netlyMain}
          picTop={netlyPrimary}
          picBottom={netlySecondary}
        />
        <MyProjectsCard
          name="Formulário Matrícula"
          description="Desafio de uma das aulas de HTML/CSS do módulo Full Stack da Rocketseat, nesse projeto, apesar de não enviar nenhuma formação, é trabalhado alguns inputs de formulários que são usados constantemente. "
          mainPic={formMatMain}
          picTop={formMatPrimary}
          picBottom={formMatSecondary}
        />
        <MyProjectsCard
          name="Git Searcher"
          description="Uma aplicação web que pesquisa repositórios de usuários no GitHub, fiz no início quando estava estudando requisições de API. Para fazer a requisição, utilizei o Axios."
          mainPic={gitMain}
          picTop={gitPrimary}
          picBottom={gitSecondary}
        />
      </div>
    </div>
  );
}
