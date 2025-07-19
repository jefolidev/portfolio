import { DotNet } from "../../../components/ui/dot-net";
import { DockerIcon } from "../../../components/ui/icons/docker-icon";
import { Firebird } from "../../../components/ui/icons/firebird-icon";
import { NestIcon } from "../../../components/ui/icons/nest-icon";
import { NextIcon } from "../../../components/ui/icons/next-icon";
import { NodeIcon } from "../../../components/ui/icons/node-icon";
import { PostgressIcon } from "../../../components/ui/icons/postgress-icon";
import { PrismaIcon } from "../../../components/ui/icons/prisma-icon";
import { ReactIcon } from "../../../components/ui/icons/react-icon";

export const jobs = [
    {
      key: "indoorsense",
      role: "Estagiário Desenvolvedor Full Stack",
      year: 2025,
      header: {
        name: "Indoorsense",
        role: "Estagiário Dev. Full Stack",
        startMonth: "Fevereiro",
        startYear: 2025,
        endMonth: "Agora",
      },
      content: {
        firstMessage:
          "Reduzi o tempo de carregamento da tabela de apontamentos de 18s para 3.5s, resultando em uma melhoria de performance de 80,5%, sendo 50% apenas com a refatoração mais recente.",
          secondMessage: "Desenvolvo e mantenho aplicações web (NextJS) e mobile (React Native), com foco em exibir informações críticas de sensores de forma clara e responsiva."
      },
      footer: {
        location: "Fortaleza",
        modality: "Híbrido" as const,
        money: 1200,
        stack: (
          <>
            <NextIcon />
            <NestIcon />
            <PostgressIcon />
          </>
        ),
      },
    },
    {
      key: "pinheiro",
      role: "Estagiário Desenvolvedor Full Stack",
      year: 2024,
      header: {
        name: "Mercado Pinheiro",
        role: "Estagiário Dev. Full Stack",
        startMonth: "Dezembro",
        startYear: 2024,
        endMonth: "Fevereiro",
      },
      content: {
        firstMessage:
          "Desenvolvi uma aplicação completa para projetar os parceiros da empresa e os benefícios oferecidos, resultando em uma melhoria na produtividade dos envolvidos.",
      },
      footer: {
        location: "Fortaleza",
        modality: "Presencial" as const,
        money: 1200,
        stack: (
          <>
            <ReactIcon />
            <NodeIcon />
            <DockerIcon />
            <PrismaIcon />
            <PostgressIcon />
          </>
        ),
      },
    },
     {
      key: "jplm",
      role: "Estagiário Back End",
      year: 2024,
      header: {
        name: "JPLM Sistemas",
        role: "Estagiário Backend",
        startMonth: "Abril",
        startYear: 2024,
        endMonth: "Julho",
        endYear: 2024,
        monthCount: 4,
      },
      content: {
        firstMessage:
          "Acelerei a experiência dos clientes do produto, adicionando mais precisão na filtragem de produtos retirados para entrega;",
        secondMessage:
          "Tornei o software muito mais coeso e limpo, seguindo conceitos do SOLID e tornando o código mais legível e enxuto.",
      },
      footer: {
        location: "Fortaleza",
        modality: "Presencial" as const,
        money: 500,
        stack: (
          <>
            <Firebird />
            <DotNet />
          </>
        ),
      },
    },
  ];