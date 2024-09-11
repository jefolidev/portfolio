import { NavBar } from "../../../components/navbar";
import illustrationLight from "./assets/Man developing website on desk-1.svg";
import illustrationDark from "./assets/Man developing website on desk.svg";

export function AboutMe() {
  return (
    <div>
      <NavBar />
      <div className="bg-lightPrimary h-full w-full px-16 py-16 transition-colors dark:bg-primary">
        <div className="mb-12 flex items-center gap-4">
          <div className="bg-lightFonts h-1 w-1 rounded-full dark:bg-gray-300" />
          <span className="text-lightFonts font-maven dark:text-gray-300">
            Projetos
          </span>
        </div>
        <h1 className="text-lightFonts font-geologica text-5xl font-bold transition-colors dark:text-white">
          Olá! Me conheça mais
        </h1>

        <div className="flex flex-col gap-6 py-10">
          <p className="text-lightFonts font-maven font-medium transition-colors dark:text-gray-200">
            Olá, me chamo Jeferson, possuo 18 anos e sou um Desenvolvedor Full
            Stack, atualmente moro em Fortaleza, Ceará. Gosto de passar tempo
            programando e me divirto muito fazendo alguns projetos. Gosto também
            de jogar e amo jogos de mundo aberto que me dão uma gama de coisas
            para fazer.
          </p>

          <p className="text-lightFonts font-maven font-medium transition-colors dark:text-gray-200">
            Sou atleta de vôlei e amo esse esporte, aprendi muita coisa dentro
            de quadra que atualmente levo como soft skill para a minha vida
            toda. Treino pelo Centro de Formação Olímpico (CFO) e eu amo fazer
            parte dele e ter participado de tantas fases.
          </p>

          <p className="text-lightFonts font-maven font-medium transition-colors dark:text-gray-200">
            Estou cursando Análise e Desenvolvimento de Sistemas na UniAteneu e
            estou amando o curso e as coisas que estou aprendendo. É muito
            empolgante esse dia a dia e eu sempre achei muito legal uma “vida
            universitária” desde quando era pequeno. Estou ansioso para terminar
            esse curso e logo iniciar alguma pós graduação na área.
          </p>

          <div className="xs:flex-col flex items-center justify-center gap-20 space-y-12 lg:flex-row">
            <div className="xs:gap-12 flex flex-col lg:gap-5">
              <h1 className="text-lightFonts xs:mt-8 font-geologica text-4xl font-bold transition-colors lg:mt-0 dark:text-white">
                Coisas que eu gosto
              </h1>
              <ul className="text-lightFonts list-disc px-5 font-maven font-medium transition-colors dark:text-gray-200">
                <li className="">
                  Amo fazer amizades e conhecer novas pessoas e estou sempre
                  disposto a incluir novas pessoas no meu ciclo;
                </li>
                <li className="">
                  Dialogar pra mim é algo essencial, gosto muito de conversar
                </li>
                <li className="">
                  Apesar de exótico, amo estudar, o conceito de aprender algo
                  novo me deixa empolgado e me motiva
                </li>
                <li className="">
                  Gosto de ouvir música, sou muito eclético e tem desde mpb até
                  músicas mais recentes
                </li>
              </ul>
            </div>
            <img src={illustrationLight} alt="" className="block dark:hidden" />
            <img src={illustrationDark} alt="" className="hidden dark:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
