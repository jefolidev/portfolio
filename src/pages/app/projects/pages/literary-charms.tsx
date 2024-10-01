import cards from "../assets/literary-charms/literary-cards.png";
import hero from "../assets/literary-charms/literary-hero.png";
import icons from "../assets/literary-charms/literary-icons.png";

export function LiteraryCharmsPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={hero} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Essa landing page foi desenvolvida para um clube de assinatura de
        livros, utilizando HTML e CSS para construir uma interface visualmente
        impactante. O projeto foca em criar uma experiência imersiva para os
        usuários, com um design limpo e atrativo que destaca as ofertas de
        livros e os benefícios da assinatura.
      </span>
      <img src={icons} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        O grande diferencial dessa página está no uso de animações e transições
        avançadas em CSS. Cada elemento foi cuidadosamente animado para criar
        uma sensação de fluidez e dinamismo. As transições suaves entre as
        seções, botões interativos e efeitos de hover tornam a navegação
        intuitiva e envolvente, capturando a atenção do usuário de forma sutil,
        mas eficiente.
      </span>
      <img src={cards} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Além disso, os efeitos visuais foram projetados para proporcionar uma
        experiência divertida e agradável, sem comprometer a usabilidade. As
        animações e transições não apenas deixam a página mais bonita, mas
        também tornam a navegação fluida e intuitiva, ajudando a guiar o usuário
        pelos conteúdos e a interagir com as seções de maneira natural.
      </span>
    </div>
  );
}
