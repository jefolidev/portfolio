import { CardHelp } from "../../../components/card-help";
import { HardDisk } from "../../../components/ui/icons/hard-disk";
import { LampIcon } from "../../../components/ui/icons/lamp-icon";
import { PencilIcon } from "../../../components/ui/icons/pencil-icon";
import { ScreenIcon } from "../../../components/ui/icons/screen-icon";

export default function HowCanIHelp() {
  return (
    <div className="xs:hidden bg-lightPrimary bg-dottedLight flex h-screen w-full cursor-default flex-col items-center justify-center space-y-12 px-36 transition-all dark:bg-primary dark:bg-dotted">
      <h1 className="text-lightFonts text-center font-geologica text-5xl font-bold transition-colors dark:text-white">
        Colaborando com entrega de resultados e criando resultados impactantes
      </h1>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        <CardHelp
          name="UX & UI Design"
          description="Desenvolverei interfaces intuitivas e satisfatórias de se utilizar."
          children={<PencilIcon />}
        />
        <CardHelp
          name="API e Banco de Dados"
          description="Desenvolvo APIs e bancos de dados eficientes e integrados."
          children={<HardDisk />}
        />
        <CardHelp
          name="Ideias Criativas"
          description="Crio soluções inovadoras e impactantes."
          children={<ScreenIcon />}
        />
        <CardHelp
          name="Desenvolvimento Ágil"
          description="Entrego soluções rápidas e de alta qualidade com agilidade."
          children={<LampIcon />}
        />
      </div>
    </div>
  );
}
