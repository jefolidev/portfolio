import netly1 from "../assets/netly/backgrounds/project-netly-main.png";
import netly2 from "../assets/netly/backgrounds/project-netly-others.png";
import netly3 from "../assets/netly/backgrounds/project-netly-unique.png";

export function NetlyProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={netly1} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Uma dificuldade que possuía no início era a dificuldade de me enturmar e
        descobrir locais para aprimorar minha técnica e tática, porém não
        conseguia achar locais e pessoas para praticar. Hoje em dia depois de
        alguma experiência, me perguntei “Por que não juntar isso com minhas
        habilidades de programador?”. Com esse pensamento em mente, o net.ly
        surgiu.
      </span>
      <img src={netly2} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        O net.ly é uma plataforma voltada para jogadores de vôlei que buscam
        organizar e participar de rachas de forma prática e eficiente. Através
        de um calendário interativo, os usuários podem agendar e visualizar os
        próximos jogos, tornando mais fácil encontrar partidas que se encaixem
        em sua rotina.
      </span>
      <img src={netly3} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        O net.ly também funciona como uma rede social para atletas. É possível
        seguir outros jogadores, visualizar suas avaliações e organizar partidas
        em grupo, criando um ciclo de interação e competitividade saudável. A
        interface intuitiva garante que todas essas funções sejam de fácil
        acesso, tornando a navegação no site fluida e eficiente.
      </span>
    </div>
  );
}
