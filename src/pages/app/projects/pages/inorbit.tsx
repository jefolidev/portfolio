import createGoal from "../assets/inorbit/criar-obj.png";
import goals from "../assets/inorbit/objetivos.png";
import empty from "../assets/inorbit/vazio.png";

export function InOrbitPage() {
  return (
    <div className="flex flex-col gap-12 py-16">
      <img src={empty} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        in.orbit é um aplicativo inovador de gerenciamento de metas desenvolvido
        durante o NLW Pocket da Rocketseat. Ele foi projetado para ajudar os
        usuários a criar, acompanhar e monitorar seus objetivos pessoais de
        maneira simples e eficiente. Utilizando React para um front-end dinâmico
        e Node.js no back-end, o aplicativo garante uma experiência fluida e
        responsiva.
      </span>
      <img src={createGoal} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        Com React Hook Form e React Query, o in.orbit oferece um gerenciamento
        de formulários e estado assíncrono ágil, enquanto Zod assegura a
        validação robusta dos dados. No back-end, Drizzle e PostgreSQL são
        utilizados para gerenciar e armazenar informações, com Docker
        facilitando a configuração e a hospedagem do banco de dados.
      </span>
      <img src={goals} />
      <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-200">
        O resultado é uma ferramenta poderosa para quem busca organização e
        eficiência na gestão de metas, mostrando a aplicação prática de
        tecnologias modernas para resolver desafios do dia a dia.
      </span>
    </div>
  );
}
