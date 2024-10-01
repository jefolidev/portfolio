import gallery from "../assets/snitap/snitap-gallery.png";
import hero from "../assets/snitap/snitap-hero.png";

export function SnitapPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={hero} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Nessa landing page, as animações e transições em CSS desempenham um
        papel central para melhorar a experiência do usuário. Cada interação com
        a página é acompanhada por efeitos sutis e bem elaborados, que tornam a
        navegação mais envolvente e intuitiva. Elementos como botões, imagens e
        seções são animados para criar uma sensação de dinamismo, proporcionando
        uma experiência visual mais interativa e divertida para o visitante.
      </span>
      <img src={gallery} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Os conceitos mais avançados de animações e transições CSS foram
        aplicados de forma estratégica, variando de efeitos suaves a interações
        mais complexas. Essas técnicas foram utilizadas para melhorar a
        usabilidade, guiando o usuário pelo conteúdo da página de forma fluida.
        As transições entre diferentes seções do site e os efeitos de hover nos
        botões ajudam a manter a navegação visualmente atraente e funcional, sem
        comprometer a performance da página.
      </span>
    </div>
  );
}
