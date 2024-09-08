import ArrowRight from "../../../assets/arrow-right.svg";
import { GithubIcon } from "../../../components/github-icon";

export function ContactMe() {
  return (
    <div className="h-[456px] w-full bg-primary p-3">
      <div className="flex h-full w-full items-center justify-between rounded-lg bg-secondary px-48">
        <div className="space-y-2.5">
          <h1 className="font-geo max-w-[336px] text-4xl font-bold text-white">
            Gostou do meu trabalho?
          </h1>
          <span className="block max-w-[336px] font-maven text-gray-300">
            Entre em contato comigo nas minhas redes sociais!
          </span>
        </div>
        <div className="grid grid-flow-dense grid-cols-2 gap-2">
          <button className="flex h-[55px] w-[191px] items-center justify-between gap-2 rounded-md border border-transparent bg-terciary px-6 transition-all hover:border-[#9D98A9] hover:brightness-110">
            <div className="flex items-center justify-start gap-3">
              <GithubIcon />
              <p className="font-maven text-white">Linkedin</p>
            </div>
            <img src={ArrowRight} alt="" />
          </button>
          <button className="flex h-[55px] w-[191px] items-center justify-between gap-2 rounded-md border border-transparent bg-terciary px-6 transition-all hover:border-[#9D98A9] hover:brightness-110">
            <div className="flex items-center justify-start gap-3">
              <GithubIcon />
              <p className="font-maven text-white">GitHub</p>
            </div>
            <img src={ArrowRight} alt="" />
          </button>
          <button className="col-span-2 flex h-[55px] items-center justify-between gap-2 rounded-md border border-transparent bg-terciary px-6 transition-all hover:border-[#9D98A9] hover:brightness-110">
            <div className="flex items-center justify-start gap-3">
              <GithubIcon />
              <p className="font-maven text-white">Email</p>
            </div>
            <img src={ArrowRight} alt="" />
          </button>
          <div className="col-span-2 flex h-[55px] items-center justify-center rounded-md bg-terciary">
            <span className="w-max text-xs text-gray-300">
              © 2024 Jeferson Franco - Todos direitos reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
