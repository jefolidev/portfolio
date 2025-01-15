import { MyProjectsCard } from "../../../components/projects-card";


import { useNavigate } from "react-router-dom";


import "swiper/css";
import 'swiper/css/grid';
import 'swiper/css/navigation';


import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectType = "Aplicação Web" | "Landing Page" | "API"

interface OtherProject {
  name: string
  description: string
  type: ProjectType
  path: string
  image_path?: string
  language: string[]
}

export function ProjectsBody() {
  const frontProjects: OtherProject[] = ( [
    {
      name: "Reflexa",
      type: "Aplicação Web",
      path: "reflexa",
      image_path: "src/pages/app/projects/assets/reflexa/reflexa-mockup.png",
      description:
        "Uma aplicação para monitorar seus sentimentos e organizar metas e trabalhar nelas. ",
        language: ["ts", "react"]
      },
    {
      name: "DT Cash",
      type: "Aplicação Web",
      path: "dt-cash",
      image_path: "src/pages/app/projects/assets/dt-cash/dtcash-mockup.png",
      description:
        "DT Cash é um gestor de despesas em que você pode adicionar seu saldo, entradas e saídas monetárias, com isso, o site fará um cálculo de suas despesas.",
        language: ["ts", "react"]
      },
    {
      name: "Net.ly",
      type: "Aplicação Web",
      path: "netly",
      image_path: "src/pages/app/projects/assets/netly/netly-mockup.png",
      description:
        "O net.ly ajuda jogadores de vôlei a encontrar e agendar rachas facilmente. Com avaliações de atletas e locais, você pode escolher os melhores jogos e melhorar seu desempenho ao competir com outros atletas. Organize partidas, acompanhe o calendário e evolua no esporte com feedback direto da comunidade.",
        language: ["ts", "react"]
      },
    {
      name: "Página de Turismo",
      type: "Landing Page",
      path: "tourism",
      image_path: "src/pages/app/projects/assets/tourism/tourism-mockup.png",
      description:
        "O net.ly ajuda jogadores de vôlei a encontrar e agendar rachas facilmente. Com avaliações de atletas e locais, você pode escolher os melhores jogos e melhorar seu desempenho ao competir com outros atletas. Organize partidas, acompanhe o calendário e evolua no esporte com feedback direto da comunidade.",
        language: ["html", "css"]
      },
    {
      name: "Formulário de Matrícula",
      type: "Landing Page",
      path: "matform",
      image_path: "src/pages/app/projects/assets/form-matricula/matricula-mockup.png",
      description:
        "O net.ly ajuda jogadores de vôlei a encontrar e agendar rachas facilmente. Com avaliações de atletas e locais, você pode escolher os melhores jogos e melhorar seu desempenho ao competir com outros atletas. Organize partidas, acompanhe o calendário e evolua no esporte com feedback direto da comunidade.",
        language: ["html", "css"]
      },
    {
      name: "Zingen",
      type: "Landing Page",
      path: "zingen",
      image_path: "src/pages/app/projects/assets/zingen/zingen-mockup.png",
      description:
        "Nesa landing page trabalhei com foco na responsividade de diferentes tamanhos de tela. Um estudo mais aprofundado sobre isso é totalmente necessário, visando uma UX melhor para quem está utilizando não só essa página mas como as outras.",
        language: ["html", "css"]
    },
    {
      name: "Snitap",
      type: "Landing Page",
      path: "snitap",
      image_path: "src/pages/app/projects/assets/snitap/snitap-mockup.png",
      description:
        "Nesta landing page é utilizado conceitos importantes e mais avançados de animações e transições do CSS, sendo utilizadas de maneiras diferentes.",
        language: ["html", "css"]
    },
    {
      name: "Convert",
      type: "Aplicação Web",
      path: "convert",
      image_path: "src/pages/app/projects/assets/convertor/convert-mockup.png",
      description:
        "Conversor de dinheiro para câmbio. Esse projeto mexe com elementos básicos do JavaScript para converter real para outras unidades de valores.",
        language: ["html", "css", "js"]
    },
    {
      name: "Quicklist",
      type: "Aplicação Web",
      path: "quicklist",
      image_path: "src/pages/app/projects/assets/quicklist/quicklist-mockup.png",
      description:
        "Mais um dos desafios propostos pela Rocketseat, este é uma lista de compra que oferece uma UI agradável e a possibilidade de adicionar e remover os itens da lista.",
        language: ["html", "css", "js"]
    },
    {
      name: "Literary Charms",
      type: "Landing Page",
      path: "literary-charms",
      image_path: "src/pages/app/projects/assets/literary-charms/literary-charms-mockup.png",
      description:
        "Nesta landing page é utilizado conceitos importantes e mais avançados de animações e transições do CSS, sendo utilizadas de maneiras diferentes para apresentar uma página de vendas de livro.",
        language: ["html", "css"]
    },
  ]
  )

  const backProjects: OtherProject[] = ([
    {
      name: "API de Tasks",
      type: "API",
      path: "https://github.com/jefolidev/tasks-api-rocketseat",
      description:
        "📝 Uma API de tarefas que converte os dados para um CSV (planilha).",
        language: ["node"]
      },
  ])
  const navigate = useNavigate()

  return (
    <div className="flex min-h-full w-full flex-col bg-lightPrimary px-4 py-8 dark:bg-primary">
      <div className="flex h-[100%] gap-6 rounded-lg flex-col bg-lightSecondary dark:bg-secondary xs:px-3 xs:py-5 sm:px-8 sm:py-10">
        <h1 className="text-lightFonts px-2 font-geologica text-lg dark:text-white">
         Front End
        </h1>
        <div className="w-full">
          <Swiper
            slidesPerView={3}
            grid={{
              fill:"row",     
              rows: 2
                 }} 
            spaceBetween={30}
            navigation
            modules={[Navigation, Grid]} className="mySwiper"
            breakpoints={{
              320: {
               grid: { rows: 1 },
               slidesPerView: 1,
               spaceBetween: 80,
              },
              640: {
                grid: { rows: 1 },
                slidesPerView: 1,
                spaceBetween: 80,
              },
              768: {
                slidesPerView: 3,
              },
             
            }}
            >

            {frontProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <MyProjectsCard
              name={project.name}
              description={project.description}
              mainPic={project.image_path}
              onClick={() => navigate(`/projects/${project.path}`)}
              variant='front'
              language={project.language}
              />
            </SwiperSlide>
            )) }
              
          </Swiper>
            </div>

        <h1 className="text-lightFonts px-2 font-geologica text-lg dark:text-white">
         Back End
        </h1>
        <div className="flex gap-4 p-2">
          {backProjects.map((project, index) => (

        <MyProjectsCard
          key={index}
          name={project.name}
          description={project.description}
          mainPic={project.image_path}
          goTo={project.path}
          variant='back'
          language={project.language}
        />
          ))}
        
        </div>


        {/* 
        <div className="flex w-full flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-1 w-1 rounded-full bg-lightFonts dark:bg-gray-300" />
            <h1 className="font-maven font-bold text-lightFonts dark:text-gray-300">
              Outros Projetos
            </h1>
          </div>
          <div className="flex w-full items-center justify-start gap-[5rem] md:flex-row select-none">
            <Swiper
              slidesPerView={4}
              modules={[Navigation]}
              navigation = {true}
              className="mySwiper sm:py-4"
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
            {frontProjects.map(card => (
              <SwiperSlide>
                <OtherProjects
                  image={card.image_path}
                  name={card.name}
                  type={card.type}
                  path={card.path}
                />
              </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
         */}
      </div>
    </div>
  )
}
