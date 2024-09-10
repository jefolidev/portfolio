import ArrowRight from "../../../assets/arrow-right.svg";
import { EmailIcon } from "../../../components/ui/icons/email-icon";
import { GitHubIcon } from "../../../components/ui/icons/github-icon";
import { LinkedinIcon } from "../../../components/ui/icons/linkedin-icon";

export function ContactMe() {
  return (
    <div className="bg-lightPrimary h-[456px] w-full p-3 transition-colors dark:bg-primary">
      <div className="bg-lightSecondary flex h-full w-full items-center justify-between rounded-lg px-48 transition-colors dark:bg-secondary">
        <div className="space-y-2.5">
          <h1 className="font-geo text-lightFonts max-w-[336px] text-4xl font-bold transition-colors dark:text-white">
            Gostou do meu trabalho?
          </h1>
          <span className="text-lightSubtitles block max-w-[336px] font-maven transition-colors dark:text-gray-300">
            Entre em contato comigo nas minhas redes sociais!
          </span>
        </div>
        <div className="grid grid-flow-dense grid-cols-2 gap-2">
          <a
            href="https://www.linkedin.com/in/jeferson-franco-1349062b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-lightButtons flex h-[55px] w-[191px] items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault dark:hover:border-[#9D98A9] hover:brightness-110 dark:bg-terciary">
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
            <button className="bg-lightButtons flex h-[55px] w-[191px] items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault dark:hover:border-[#9D98A9] hover:brightness-110 dark:bg-terciary">
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
            <button className="bg-lightButtons flex h-[55px] w-full items-center justify-between gap-2 rounded-md border border-transparent px-6 transition-all hover:border-strokeDefault dark:hover:border-[#9D98A9] hover:brightness-110 dark:bg-terciary">
              <div className="flex items-center justify-start gap-3">
                <EmailIcon />
                <p className="font-maven text-white">Email</p>
              </div>
              <img src={ArrowRight} alt="" />
            </button>
          </a>
          <div className="bg-lightButtons col-span-2 flex h-[55px] items-center justify-center rounded-md dark:bg-terciary">
            <span className="w-max text-xs text-gray-50 dark:text-gray-300">
              © 2024 Jeferson Franco - Todos direitos reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
