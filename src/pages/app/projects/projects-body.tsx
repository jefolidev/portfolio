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

import tourismTamplate from "./assets/tourism/tourism-cape.png";

import { useNavigate } from "react-router-dom";
import arrowRight from "../../../assets/arrow-right.svg";

export function ProjectsBody() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col bg-primary px-3 py-8">
      <div className="flex h-[100%] w-full flex-col gap-16 rounded-lg bg-secondary px-16 py-10">
        <MyProjectsCard
          name="Net.ly"
          description="O net.ly é um site criado para conectar atletas de vôlei, oferecendo uma experiência completa para quem gosta de participar de rachas. A plataforma permite agendar partidas e acompanhar um calendário com os próximos jogos."
          mainPic={netlyMain}
          picTop={netlyPrimary}
          picBottom={netlySecondary}
          onClick={() => navigate("/projects/netly")}
        />
        <MyProjectsCard
          name="Formulário Matrícula"
          description="Desafio de uma das aulas de HTML/CSS do módulo Full Stack da Rocketseat, nesse projeto, apesar de não enviar nenhuma formação, é trabalhado alguns inputs de formulários que são usados constantemente. "
          mainPic={formMatMain}
          picTop={formMatPrimary}
          picBottom={formMatSecondary}
          onClick={() => navigate("/projects/matform")}
        />
        <MyProjectsCard
          name="Git Searcher"
          description="Uma aplicação web que pesquisa repositórios de usuários no GitHub, fiz no início quando estava estudando requisições de API. Para fazer a requisição, utilizei o Axios."
          mainPic={gitMain}
          picTop={gitPrimary}
          picBottom={gitSecondary}
          onClick={() => navigate("/projects/gitsearch")}
        />
        <div className="flex w-[75rem] flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <h1 className="font-maven font-bold text-gray-300">
              Outros Projetos
            </h1>
          </div>
          <div className="justify-content flex items-center gap-[5rem] self-stretch">
            <div className="[h-22.3rem] flex w-[22.2rem] flex-col items-center gap-4 px-3 py-[0.62rem]">
              <img src={tourismTamplate} alt="" className="self-stretch" />
              <div className="flex flex-1 items-center justify-between self-stretch">
                <div className="flex flex-col items-start">
                  <h1 className="font-geologica text-xl font-bold text-gray-50">
                    Página de Turismo
                  </h1>
                  <span className="font-maven text-sm text-gray-400">
                    Landing Page
                  </span>
                </div>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-terciary hover:brightness-125"
                  onClick={() => navigate("/projects/tourism")}
                >
                  <img src={arrowRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
