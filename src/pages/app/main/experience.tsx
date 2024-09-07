import { DotNet } from "../../../components/dot-net";
import { Firebird } from "../../../components/firebird-icon";
import { JobCard } from "../../../components/jobs-cards";
import { NodeIcon } from "../../../components/node-icon";
import { PostgressIcon } from "../../../components/postgress-icon";
import { PrismaIcon } from "../../../components/prisma-icon";
import { ReactIcon } from "../../../components/react-icon";
import { TailWindIcon } from "../../../components/tailwind-icon";
import timeline from "../../assets/timeline.svg";

export function Experiences() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-primary">
      <div className="self-start py-12 pl-40">
        <h1 className="py-4 font-geologica text-5xl font-bold text-white">
          Minhas experiências
        </h1>
        <span className="block h-[41px] max-w-[900px] font-maven text-sm text-gray-200">
          Veja como atuei em vagas passadas e cheque algumas curiosidades em que
          já coloquei a mão na massa! Desenvolvi, prestei manutenção e fiz
          deploy. Como poderei ajudar na sua empresa?
        </span>
      </div>
      <div className="flex w-full items-center justify-start gap-5 pl-40">
        <div className="">
          <img src={timeline} className="h-[620px]" />
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-maven text-gray-400">
            Contratado como{" "}
            <p className="inline text-white">Estagiário Back End</p> em
            <p className="inline text-white"> 2024</p>
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
          <span className="font-maven text-gray-400">
            Contratado como <p className="inline text-white">Suporte de TI</p>{" "}
            em
            <p className="inline text-white"> 2023</p>
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
