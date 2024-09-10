export function ProjectsHome() {
  return (
    <div className="bg-lightPrimary h-full w-full py-5 dark:bg-primary">
      <div className="pl-20 pr-40 pt-20">
        <div className="flex items-center gap-4">
          <div className="bg-lightFonts h-1 w-1 rounded-full dark:bg-gray-300" />
          <span className="text-lightFonts font-maven dark:text-gray-300">
            Projetos
          </span>
        </div>
        <h1 className="text-lightFonts mb-8 mt-10 font-geologica text-5xl font-bold dark:text-white">
          Meus Trabalhos
        </h1>
        <span className="text-lightSubtitles font-maven text-lg dark:text-gray-400">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>
    </div>
  );
}
