import { JobCard } from "../../../components/jobs-cards";
import { DotNet } from "../../../components/ui/dot-net";
import { DockerIcon } from "../../../components/ui/icons/docker-icon";
import { Firebird } from "../../../components/ui/icons/firebird-icon";
import { NodeIcon } from "../../../components/ui/icons/node-icon";
import { PostgressIcon } from "../../../components/ui/icons/postgress-icon";
import { PrismaIcon } from "../../../components/ui/icons/prisma-icon";
import { ReactIcon } from "../../../components/ui/icons/react-icon";
import { TailWindIcon } from "../../../components/ui/icons/tailwind-icon";

export function Experiences() {
  return (
    <div className="lg:px-40 flex min-h-screen flex-col items-start justify-center space-y-5 bg-lightPrimary transition-colors dark:bg-primary xs:flex-1 xs:px-2  pb-8">
      <div className="self-start xs:px-5 xs:py-16 sm:px-20 sm:py-12 lg:px-0 lg:pb-8">
        <h1 className="py-4 font-geologica text-5xl font-bold text-lightFonts dark:text-white">
          Minhas experiências
        </h1>
        <span className="text-lighSubtitles block h-[41px] max-w-[900px] font-maven text-sm transition-colors dark:text-gray-200">
          Veja como atuei em vagas passadas e cheque algumas curiosidades em que
          já coloquei a mão na massa! Desenvolvi, prestei manutenção e fiz
          deploy. Como poderei ajudar na sua empresa?
        </span>
      </div>
      <div className="flex min-h-full xs:items-start xs:gap-3 xs:pl-2 sm:items-center sm:justify-start sm:gap-5 ">
        {/* <img src={timeline} className="h-[620px] xs:hidden sm:block" /> */}

        <div className="flex flex-col xs:gap-8 sm:gap-3">

          <div className="flex flex-col">
          <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-400 xs:hidden xs:text-sm sm:block">
            Contratado como{" "}
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              Estagiário Desenvolvedor Full Stack
            </p>{" "}
            em
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              {" "}
              2024
            </p>
          </span>
          <JobCard.Root>
            <JobCard.Header
              name="Mercado Pinheiro"
              role="Estagiário Dev. Full Stack"
              startMonth="Dezembro"
              startYear={2024}
              endMonth="Agora"
              // endYear={2024}
              // monthCount={}
            />
            <JobCard.Content
              firstMessage="Desenvolvi uma aplicação completa para projetar os parceiros da empresa e os benefícios oferecidos, resultando em uma melhoria na produtividade dos envolvidos."
              // secondMessage="Tornei o software muito mais coeso e limpo, seguindo conceitos do SOLID e tornando o código mais legível e enxuto."
            />
            <JobCard.Footer
              location="Fortaleza"
              modality="Presencial"
              money={1200}
              children={
                <>
                  <ReactIcon />
                  <NodeIcon />
                  <DockerIcon />
                  <PrismaIcon />
                  <PostgressIcon />
                </>
              }
            />
          </JobCard.Root>
          </div>

          <div className="flex flex-col ">
          <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-400 xs:hidden xs:text-sm sm:block">
            Contratado como{" "}
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              Estagiário Back End
            </p>{" "}
            em
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              {" "}
              2024
            </p>
          </span>
          <JobCard.Root>
            <JobCard.Header
              name="JPLM Sistemas"
              role="Estagiário Backend"
              startMonth="Abril"
              startYear={2024}
              endMonth="Julho"
              endYear={2024}
              monthCount={4}
            />
            <JobCard.Content
              firstMessage="Acelerei a experiência dos clientes do produto, adicionando mais precisão na filtragem de produtos retirados para entrega;"
              secondMessage="Tornei o software muito mais coeso e limpo, seguindo conceitos do SOLID e tornando o código mais legível e enxuto."
            />
            <JobCard.Footer
              location="Fortaleza"
              modality="Presencial"
              money={500}
              children={
                <>
                   <Firebird />
                   <DotNet />
                </>
              }
            />
          </JobCard.Root>
          </div>
          <div className="flex flex-col">

          <span className="font-maven font-medium text-lightSubtitles dark:text-gray-400 xs:hidden xs:text-sm sm:block">
            Contratado como{" "}
            <p className="inline font-semibold text-lightFonts dark:text-white">
              Suporte de TI
            </p>{" "}
            em
            <p className="inline font-semibold text-lightFonts dark:text-white">
              {" "}
              2023
            </p>
          </span>
          <JobCard.Root>
            <JobCard.Header
              name="Panificadora Panettony"
              role="Suporte de TI"
              startMonth="Março"
              startYear={2023}
              endMonth="Novembro"
              endYear={2023}
              monthCount={9}
            />
            <JobCard.Content
              firstMessage="Melhorei a experiência dos clientes, criando um site onde era possível fazer pedidos por delivery, feedback para a empresa etc;"
              secondMessage="Criei um ambiente agradável para os clientes, sempre fornecendo o melhor atendimento possível."
            />
            <JobCard.Footer
              location="Fortaleza"
              modality="Presencial"
              money={600}
              children={
                <>
                  <ReactIcon />
                  <NodeIcon />
                  <TailWindIcon />
                  <PrismaIcon />
                  <PostgressIcon />
                </>
              }
            />
          </JobCard.Root>
          </div>

        </div>
      </div>
    </div>
  );
}
