import defaultPage from "../assets/dt-cash/dtcash-main.png";

export function DTPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={defaultPage} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Mais um projeto em que realizei pela Rocketseat onde utilizei JSON
        Server para simular uma Rest API em que guarda e monitora os valores de
        entrada e saída de uma determinada renda, fazendo cálculos sobre a renda
        também. Esse projeto foi muito útil para retomar alguns conceitos de
        requisições e manipulação das respostas de uma API.
      </span>
    </div>
  );
}
