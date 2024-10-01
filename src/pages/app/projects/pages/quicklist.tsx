import defaultPage from "../assets/quicklist/quicklist-default.png";
import removePage from "../assets/quicklist/quicklist-removeds.png";

export function QuicklistPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={defaultPage} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Este projeto é uma lista de compras desenvolvida como parte de um
        desafio da Rocketseat. Ele oferece uma experiência de usuário intuitiva,
        com a possibilidade de adicionar e remover itens de forma simples e
        direta.
      </span>
      <img src={removePage} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        A lista de compras foi desenvolvida utilizando HTML e CSS, garantindo um
        design responsivo e uma navegação fluida em diferentes dispositivos,
        seja no celular ou no computador. JavaScript foi empregado para trazer
        funcionalidades dinâmicas, permitindo que os itens sejam adicionados e
        removidos de forma simples e direta. O resultado é uma aplicação prática
        e eficiente, com uma interface intuitiva que proporciona uma experiência
        agradável para organizar suas compras no dia a dia.
      </span>
    </div>
  );
}
