import { JobCard } from "../../../components/jobs-cards";
import { DotNet } from "../../../components/ui/dot-net";
import { Firebird } from "../../../components/ui/icons/firebird-icon";
import { NodeIcon } from "../../../components/ui/icons/node-icon";
import { PostgressIcon } from "../../../components/ui/icons/postgress-icon";
import { PrismaIcon } from "../../../components/ui/icons/prisma-icon";
import { ReactIcon } from "../../../components/ui/icons/react-icon";
import { TailWindIcon } from "../../../components/ui/icons/tailwind-icon";
import timeline from "../../assets/timeline.svg";

export function Experiences() {
  return (
    <div className="bg-lightPrimary xs:h-full xs:px-2 flex min-h-screen flex-col items-center justify-center space-y-5 transition-colors sm:h-[900px] sm:w-full dark:bg-primary">
      <div className="xs:py-16 xs:px-5 self-start sm:px-20 sm:py-12 lg:px-40">
        <h1 className="text-lightFonts py-4 font-geologica text-5xl font-bold dark:text-white">
          Minhas experiências
        </h1>
        <span className="text-lighSubtitles block h-[41px] max-w-[900px] font-maven text-sm transition-colors dark:text-gray-200">
          Veja como atuei em vagas passadas e cheque algumas curiosidades em que
          já coloquei a mão na massa! Desenvolvi, prestei manutenção e fiz
          deploy. Como poderei ajudar na sua empresa?
        </span>
      </div>
      <div className="xs:pl-2 xs:items-start xs:gap-3 flex h-full w-full sm:items-center sm:justify-start sm:gap-5 md:pl-12 lg:pl-40">
        <img src={timeline} className="xs:hidden h-[620px] sm:block" />

        <div className="xs:gap-8 flex flex-col sm:gap-3">
          <span className="xs:hidden text-lightSubtitles xs:text-sm font-maven font-medium transition-colors sm:block dark:text-gray-400">
            Contratado como{" "}
            <p className="text-lightFonts inline font-semibold transition-colors dark:text-white">
              Estagiário Back End
            </p>{" "}
            em
            <p className="text-lightFonts inline font-semibold transition-colors dark:text-white">
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
                  <ReactIcon />
                  <NodeIcon />
                  <TailWindIcon />
                  <PrismaIcon />
                  <PostgressIcon />
                </>
              }
            />
          </JobCard.Root>
          <span className="xs:hidden text-lightSubtitles xs:text-sm font-maven font-medium sm:block dark:text-gray-400">
            Contratado como{" "}
            <p className="text-lightFonts inline font-semibold dark:text-white">
              Suporte de TI
            </p>{" "}
            em
            <p className="text-lightFonts inline font-semibold dark:text-white">
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
              money={1000}
              children={
                <>
                  <Firebird />
                  <DotNet />
                </>
              }
            />
          </JobCard.Root>
        </div>
      </div>
    </div>
  );
}
