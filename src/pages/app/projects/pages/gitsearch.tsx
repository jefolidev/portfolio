import github1 from "../assets/git-searcher/background/git-first.png";
import github2 from "../assets/git-searcher/background/git-main.png";
import github3 from "../assets/git-searcher/background/git-repo.png";

export function GitHubProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={github1} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        No início da minha jornada como desenvolvedor, criei uma aplicação web
        para buscar repositórios utilizando a API do GitHub e a biblioteca
        Axios. Este projeto foi um marco significativo na minha aprendizagem,
        pois envolveu a integração com uma API externa e o gerenciamento de
        requisições HTTP. A aplicação permite que os usuários pesquisem
        repositórios do GitHub com base em palavras-chave, exibindo resultados
        relevantes de forma clara e organizada. Este desafio foi fundamental
        para entender como fazer chamadas de API e manipular dados recebidos em
        tempo real.
      </span>
      <img src={github2} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Durante o desenvolvimento, um dos grandes aprendizados foi lidar com a
        integração de uma API externa. Trabalhar com a API do GitHub exigiu
        atenção ao formato dos dados retornados e como exibi-los de maneira
        organizada na interface. Utilizei o Axios para facilitar as chamadas
        assíncronas e gerenciar erros, o que foi essencial para garantir que a
        aplicação fosse estável e responsiva. Esse projeto me ensinou a
        importância de tratar corretamente as requisições e respostas HTTP, algo
        que, no início, parecia desafiador, mas se tornou uma habilidade
        fundamental.
      </span>
      <img src={github3} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Ao finalizar a aplicação, fiquei orgulhoso de ver os resultados: uma
        interface simples e funcional que permite aos usuários buscar
        repositórios no GitHub com base em palavras-chave. O processo de receber
        os dados da API e exibi-los de forma clara foi uma vitória no meu
        aprendizado. Esse projeto marcou um ponto crucial na minha jornada como
        desenvolvedor, mostrando como conceitos como APIs, Axios e manipulação
        de dados são aplicáveis em projetos do mundo real. Foi um dos primeiros
        passos que me deu confiança para seguir em frente no desenvolvimento
        web.
      </span>
    </div>
  );
}
