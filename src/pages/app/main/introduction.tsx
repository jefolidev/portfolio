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
    <div className="via-lightPrimary to-lightSecondary flex h-screen w-full flex-col items-center justify-center gap-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900 transition-colors dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:via-secondary dark:to-primary">
      <div className="relative">
        <img
          src={perfilPic}
          alt=""
          className="h-[149px] w-[149px] rounded-full border-[15px] border-white border-opacity-20 transition-colors dark:border-[#1c192246]"
        />
        <div className="bg-lightSecondary/40 absolute inset-x-5 -bottom-4 flex h-5 w-28 items-center justify-center gap-2 rounded-full backdrop-blur-xl transition-colors dark:bg-[#1c19225e]">
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
          <div className="xs:text-center xs:float-end text-lightFonts inline font-geologica text-5xl font-medium dark:bg-gradient-to-br dark:from-purple-200 dark:via-purple-400 dark:to-purple-800 dark:bg-clip-text dark:text-transparent">
            Desenvolvedor Full Stack
          </div>
        </span>
        <span className="text-lightSubtitles xs:block block text-center font-maven text-sm transition-colors sm:hidden dark:text-gray-200">
          Transformo minhas dificuldades em motivação para aprender mais sobre
          esse vasto campo da tecnologia. Venha me conhecer um pouco mais!
        </span>
        <span className="text-lightSubtitles xs:hidden block text-center font-maven text-sm transition-colors sm:block dark:text-gray-200">
          Gosto muito do que eu faço, programar definitivamente é minha paixão.
          Transformo minhas dificuldades em motivação para aprender mais sobre
          esse vasto campo da tecnologia. Venha me conhecer um pouco mais!
        </span>
      </div>
      <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-4">
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
