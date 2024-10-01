import defaultPage from "../assets/convertor/convert-default.png";
import dollarPage from "../assets/convertor/convert-dolar.png";

export function ConvertPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={defaultPage} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Este projeto é um conversor de moedas, que permite converter valores em
        reais para outras moedas de forma simples e rápida. A interface foi
        desenvolvida com HTML e CSS, garantindo um design responsivo e adaptável
        a diferentes dispositivos. O layout é limpo e funcional, pensado para
        facilitar a interação do usuário ao inserir valores e escolher a moeda
        desejada.
      </span>
      <img src={dollarPage} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        A lógica por trás das conversões foi implementada em JavaScript,
        utilizando cálculos precisos para realizar a conversão de moedas. Além
        disso, foram aplicadas animações sutis para tornar a experiência mais
        fluida, como transições ao exibir os resultados. O projeto combina
        simplicidade com eficiência, tornando o processo de conversão prático e
        visualmente atraente.
      </span>
    </div>
  );
}
