import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../components/ui/button-primary";

import cat404 from "../../public/gato-404.svg";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-lightPrimary xs:flex-col xs:justify-evenly xs:py-16 flex h-screen items-center sm:px-12 lg:flex-row lg:justify-evenly xl:px-0 dark:bg-primary">
      <img src={cat404} alt="" className="xs:w-96 lg:hidden" />
      <div className="flex flex-col items-center justify-center gap-2 md:items-start md:justify-start">
        <h1 className="text-lightFonts xs:text-5xl font-geologica font-bold md:text-8xl lg:-ml-3 xl:text-9xl dark:text-white">
          Erro 404
        </h1>
        <span className="text-lightFonts xs:text-lg xs:text-center font-geologica md:pr-24 md:text-start xl:px-0 xl:text-base dark:text-white">
          Alôôô?! Se perdeu? Relaxa, só clicar no botão pra voltar pra página
          inicial. <br />
          Cuidado pra nao se perder denovo.
        </span>

        <ButtonPrimary onClick={() => navigate("/")} text="Se encontrar" />
      </div>
      <img src={cat404} alt="" className="xs:hidden lg:block lg:w-[32rem]" />
    </div>
  );
}
