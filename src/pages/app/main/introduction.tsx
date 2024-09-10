import { PerfilLanguageCard } from "../../../components/perfil-language";
import { ButtonPrimary } from "../../../components/ui/button-primary";
import perfilPic from "../../assets/fotominhacircle.png";
import github from "../../assets/github-icon.svg";
import node from "../../assets/node-icon.svg";
import postgres from "../../assets/postgres.svg";
import react from "../../assets/react-icon.svg";
import typescript from "../../assets/typescript.svg";

export function Introduction() {
  return (
    <div className="bg-lightPrimary flex h-screen w-full flex-col items-center justify-center gap-8 transition-colors dark:bg-primary">
      <div className="relative">
        <img
          src={perfilPic}
          alt=""
          className="border-lightSecondary h-[149px] w-[149px] rounded-full border-[15px] transition-colors dark:border-[#1c19227c]"
        />
        <div className="bg-lightSecondary absolute inset-x-5 -bottom-4 flex h-5 w-28 items-center justify-center gap-2 rounded-full transition-colors dark:bg-[#1c1922b9]">
          <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
          <span className="text-lightFonts font-jet text-xs transition-colors dark:text-white">
            Open to work
          </span>
        </div>
      </div>
      <div className="gap flex max-w-[728px] flex-col items-center gap-4">
        <p className="text-lightFonts inline font-jet text-sm transition-colors dark:text-gray-200">
          Hello World! Meu nome é Jeferson e eu sou
        </p>
        <span>
          <div className="inline whitespace-pre-wrap bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800 bg-clip-text font-geologica text-5xl font-medium leading-none text-transparent">
            Desenvolvedor Full Stack
          </div>
        </span>
        <span className=" transition-colors text-lightSubtitles block text-center font-maven text-sm dark:text-gray-200">
          Gosto muito do que eu faço, programar definitivamente é minha paixão.
          Transformo minhas dificuldades em motivação para aprender mais sobre
          esse vasto campo da tecnologia. Venha me conhecer um pouco mais!
        </span>
      </div>
      <div className="flex items-center gap-4">
        <PerfilLanguageCard iconPath={typescript} name="TypeScript" />
        <PerfilLanguageCard iconPath={react} name="React" />
        <PerfilLanguageCard iconPath={node} name="Node.js" />
        <PerfilLanguageCard iconPath={postgres} name="Postgres" />
      </div>
      <div className="flex gap-4">
        <a
          href="http://github.com/jefolidev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonPrimary text="GitHub" iconPath={github} />
        </a>
      </div>
    </div>
  );
}
