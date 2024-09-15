import tourism1 from "../assets/tourism/background/tourism-main.png";
import tourism2 from "../assets/tourism/background/tourism-other-pics.png";
import tourism3 from "../assets/tourism/background/tourism-unique.png";

export function TurismoProjectPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={tourism1} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        No meu recente desafio prático da Rocketseat, desenvolvi um site de
        turismo usando apenas HTML e CSS. O projeto, intitulado "Sua Próxima
        viagem", apresenta uma interface clean e intuitiva para os usuários que
        desejam descobrir e planejar suas viagens. O layout inclui seções
        atraentes para mostrar destinos e informações úteis sobre viagem,
        destacando-se pela simplicidade e funcionalidade.
      </span>
      <img src={tourism2} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        O desafio da Rocketseat foi uma ótima oportunidade para criar um projeto
        de turismo totalmente baseado em HTML e CSS. O site "Sua Próxima viagem"
        foi projetado para oferecer uma experiência de usuário fluida e
        visualmente agradável. Com uma paleta de cores inspirada em paisagens
        naturais e um layout que prioriza a clareza, o site facilita a navegação
        pelos diferentes destinos turísticos. Os visitantes podem explorar
        facilmente informações sobre atrações, acomodações e dicas de viagem.
      </span>
      <img src={tourism3} />
      <span className="text-lightSubtitles font-maven font-medium transition-colors dark:text-gray-200">
        Este projeto foi uma excelente oportunidade para aplicar conceitos de
        design visual e usabilidade. O site foi projetado para destacar destinos
        turísticos de forma atraente, utilizando uma paleta de cores inspirada
        em viagens e turismo. Com um layout cuidadosamente estruturado, a
        navegação é intuitiva, permitindo que os visitantes descubram facilmente
        informações sobre destinos e ofertas especiais. O design focado na
        simplicidade e funcionalidade proporciona uma experiência agradável e
        eficiente para o usuário.
      </span>
    </div>
  );
}
