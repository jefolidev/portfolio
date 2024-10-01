import { MyProjectsCard } from "../../../components/projects-card";

import convertMockup from "./assets/convertor/convert-mockup.png";
import gitMain from "./assets/git-searcher/git-main.png";
import literaryMockup from "./assets/literary-charms/literary-charms-mockup.png";
import netlyMain from "./assets/netly/netly-main.png";
import quicklistMockup from "./assets/quicklist/quicklist-mockup.png";
import snitapMockup from "./assets/snitap/snitap-mockup.png";
import zingenMockup from "./assets/zingen/zingen-mockup.png";

import inorbitMain from "./assets/inorbit/vazio.png";

import formMat from "./assets/form-matricula/matricula-mockup.png";
import tourismTamplate from "./assets/tourism/tourism-mockup.png";

import { useNavigate } from "react-router-dom";

import { OtherProjects } from "../../../components/other-projects";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProjectsBody() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full w-full flex-col bg-lightPrimary px-3 py-8 dark:bg-primary">
      <div className="flex h-[100%] flex-col gap-16 rounded-lg bg-lightSecondary dark:bg-secondary xs:px-3 xs:py-5 sm:px-16 sm:py-10">
        <MyProjectsCard
          name="Net.ly"
          description="O net.ly é um site criado para conectar atletas de vôlei, oferecendo uma experiência completa para quem gosta de participar de rachas. A plataforma permite agendar partidas e acompanhar um calendário com os próximos jogos."
          mainPic={netlyMain}
          onClick={() => navigate("/projects/netly")}
        />
        <MyProjectsCard
          name="in.orbit"
          description="in.orbit é um aplicativo de gerenciamento de metas, desenvolvido durante o NLW Pocket da Rocketseat, que permite criar e acompanhar o progresso de objetivos, utilizando React, Node.js, e PostgreSQL."
          mainPic={inorbitMain}
          onClick={() => navigate("/projects/matform")}
        />
        <MyProjectsCard
          name="Git Searcher"
          description="Uma aplicação web que pesquisa repositórios de usuários no GitHub, fiz no início quando estava estudando requisições de API. Para fazer a requisição, utilizei o Axios."
          mainPic={gitMain}
          onClick={() => navigate("/projects/gitsearch")}
        />
        <div className="flex w-full flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-1 w-1 rounded-full bg-lightFonts dark:bg-gray-300" />
            <h1 className="font-maven font-bold text-lightFonts dark:text-gray-300">
              Outros Projetos
            </h1>
          </div>
          <div className="flex w-full items-center justify-start gap-[5rem] md:flex-row">
            <Swiper
              slidesPerView={3}
              modules={[Pagination]}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              className="sm:py-4"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 4,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 250,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 250,
                },
                1280: {
                  spaceBetween: 60,
                },
              }}
            >
              <SwiperSlide>
                <OtherProjects
                  image={tourismTamplate}
                  name="Página de Turismo"
                  type="Landing Page"
                  path="tourism"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={formMat}
                  name="Formulário de Matrícula"
                  type="Landing Page"
                  path="matform"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={zingenMockup}
                  name="Zingen"
                  type="Landing Page"
                  path="zingen"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={snitapMockup}
                  name="Snitap"
                  type="Landing Page"
                  path="snitap"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={convertMockup}
                  name="Convert"
                  type="Aplicação Web"
                  path="convert"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={quicklistMockup}
                  name="Quicklist"
                  type="Aplicação Web"
                  path="quicklist"
                />
              </SwiperSlide>
              <SwiperSlide>
                <OtherProjects
                  image={literaryMockup}
                  name="Literary Charms"
                  type="Landing Page"
                  path="literary-charms"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
