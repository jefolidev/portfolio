import { ButtonPrimary } from "../../../components/button-primary";
import { ButtonSecondary } from "../../../components/button-secondary";
import { PerfilLanguageCard } from "../../../components/perfil-language";
import perfilPic from "../../assets/fotominhacircle.png";
import github from "../../assets/github-icon.svg";
import node from "../../assets/node-icon.svg";
import postgres from "../../assets/postgres.svg";
import react from "../../assets/react-icon.svg";
import typescript from "../../assets/typescript.svg";

export function Introduction() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-primary">
      <div className="relative">
        <img
          src={perfilPic}
          alt=""
          className="h-[149px] w-[149px] rounded-full border-[15px] border-[#1c19227c]"
        />
        <div className="absolute inset-x-5 -bottom-4 flex h-5 w-28 items-center justify-center gap-2 rounded-full bg-[#1c1922b9]">
          <div className="bg-emerald-500 h-1 w-1 rounded-full"></div>
          <span className="font-jet text-white text-xs">Open to work</span>
        </div>
      </div>
      <div className="gap flex max-w-[728px] flex-col items-center gap-4">
        <p className="font-jet text-gray-200 inline text-sm">
          Hello World! Meu nome é Jeferson e eu sou
        </p>
        <h1 className="font-geologica text-gray-50 inline text-5xl font-medium">
          Desenvolvedor Full Stack
        </h1>
        <span className="font-maven text-gray-200 block text-center text-sm">
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
        <ButtonPrimary text="GitHub" iconPath={github} />
        <ButtonSecondary text="GitHub" iconPath={github} />
      </div>
    </div>
  );
}
