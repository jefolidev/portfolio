import matform1 from "../assets/form-matricula/background/form-mat-main.png";
import matform3 from "../assets/form-matricula/background/form-mat-unique.png";
import matform2 from "../assets/form-matricula/background/form-other-pics.png";

export function MatriculaProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={matform1} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Em mais um desafio prático da Rocketseat, criei um formulário de
        matrícula para esportes voltado para crianças, utilizando exclusivamente
        HTML e CSS. O projeto foi focado no desenvolvimento da interface do
        formulário, onde os pais podem inscrever seus filhos em esportes como
        futebol, vôlei, yoga e boxe. A ideia era construir uma estrutura clara e
        acessível, onde o usuário pudesse facilmente inserir informações básicas
        como nome, idade e esporte escolhido. Trabalhar somente com HTML e CSS
        nesse projeto foi uma ótima forma de consolidar minha habilidade em
        construir formulários funcionais e bem organizados.
      </span>
      <img src={matform2} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        O desafio de criar um formulário envolveu pensar na usabilidade. Com a
        simplicidade de HTML e CSS, consegui estruturar o layout de maneira
        intuitiva, garantindo que todas as informações necessárias fossem
        capturadas de forma organizada. Cada campo do formulário foi planejado
        para facilitar a navegação e o preenchimento, com opções de esportes bem
        destacadas, o que ajuda a evitar erros. Além disso, o design foi pensado
        para ser visualmente atraente e acessível, especialmente para um público
        de pais e responsáveis que buscam inscrever seus filhos em atividades
        esportivas.O desafio de criar um formulário envolveu pensar na
        usabilidade. Com a simplicidade de HTML e CSS, consegui estruturar o
        layout de maneira intuitiva, garantindo que todas as informações
        necessárias fossem capturadas de forma organizada. Cada campo do
        formulário foi planejado para facilitar a navegação e o preenchimento,
        com opções de esportes bem destacadas, o que ajuda a evitar erros. Além
        disso, o design foi pensado para ser visualmente atraente e acessível,
        especialmente para um público de pais e responsáveis que buscam
        inscrever seus filhos em atividades esportivas.
      </span>
      <img src={matform3} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Finalizar esse formulário de inscrição esportiva foi mais uma etapa
        importante no meu aprendizado de front-end. A simplicidade do projeto
        com HTML e CSS mostrou como é possível criar interfaces eficientes sem
        depender de outras tecnologias. O formulário captura informações
        essenciais para a matrícula em esportes como futebol, vôlei, yoga e
        boxe, oferecendo uma experiência clara e funcional para os usuários.
        Esse desafio prático da Rocketseat foi uma excelente oportunidade para
        aprimorar minha habilidade em construir e estilizar formulários,
        enquanto fortalecia minha base em desenvolvimento web.
      </span>
    </div>
  );
}
