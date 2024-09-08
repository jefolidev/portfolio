export function ProjectsHome() {
  return (
    <div className="h-full w-full bg-primary py-5">
      <div className="pl-20 pr-40 pt-20">
        <div className="flex items-center gap-4">
          <div className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="font-maven text-gray-300">Projetos</span>
        </div>
        <h1 className="mb-8 mt-10 font-geologica text-5xl font-bold text-white">
          Meus Trabalhos
        </h1>
        <span className="font-maven text-lg text-gray-400">
          Navegue pelo meu portfólio, onde encontrará interfaces bem trabalhadas
          e aplicações bem desenvolvidas. Esses projetos influenciaram muito no
          meu aprendizado e no aprimoramento da minha carreira.
        </span>
      </div>
    </div>
  );
}
