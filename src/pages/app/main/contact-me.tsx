import ArrowRight from "../../../assets/arrow-right.svg";
import { EmailIcon } from "../../../components/ui/icons/email-icon";
import { GitHubIcon } from "../../../components/ui/icons/github-icon";
import { LinkedinIcon } from "../../../components/ui/icons/linkedin-icon";

export function ContactMe() {
  return (
    <div className="bg-lightPrimary h-[456px] w-full select-none p-3 transition-colors dark:bg-primary">
      <div className="bg-lightSecondary xs:h-[29rem] xs:px-8 xs:gap-32 xs:py-4 xs:grid-cols-1 xs:justify-center grid h-full w-full items-center rounded-lg transition-colors sm:grid-cols-2 sm:justify-between lg:px-48 dark:bg-secondary">
        <div className="xs:-mb-28 space-y-2.5 sm:mb-0">
          <h1 className="font-geo text-lightFonts text-4xl font-bold transition-colors sm:w-[336px] dark:text-white">
            Gostou do meu trabalho?
          </h1>
          <span className="text-lightSubtitles block font-maven transition-colors sm:w-[336px] dark:text-gray-300">
            Entre em contato comigo nas minhas redes sociais!
          </span>
        </div>
        <div className="xs:flex xs:flex-col xs:gap-2 sm:grid sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/jeferson-franco-1349062b0/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="bg-lightButtons flex h-[55px] w-full items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault hover:brightness-110 dark:bg-terciary dark:hover:border-[#9D98A9]">
              <div className="flex items-center justify-start gap-3">
                <LinkedinIcon />
                <p className="font-maven text-white">Linkedin</p>
              </div>
              <img src={ArrowRight} alt="" />
            </button>
          </a>
          <a
            href="http://github.com/jefolidev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-lightButtons flex h-[55px] w-full items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault hover:brightness-110 dark:bg-terciary dark:hover:border-[#9D98A9]">
              <div className="flex items-center justify-start gap-3">
                <GitHubIcon />
                <p className="font-maven text-white">GitHub</p>
              </div>
              <img src={ArrowRight} alt="" />
            </button>
          </a>
          <a
            href="http://github.com/jefolidev"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2"
          >
            <button className="bg-lightButtons flex h-[55px] w-full items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault hover:brightness-110 dark:bg-terciary dark:hover:border-[#9D98A9]">
              <div className="flex items-center justify-start gap-3">
                <EmailIcon />
                <p className="font-maven text-white">Email</p>
              </div>
              <img src={ArrowRight} alt="" />
            </button>
          </a>
          <div className="bg-lightButtons col-span-2 flex h-[55px] items-center justify-center rounded-md dark:bg-terciary">
            <span className="xs:text-[.6rem] w-max text-gray-50 sm:text-xs dark:text-gray-300">
              © 2024 Jeferson Franco - Todos direitos reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
