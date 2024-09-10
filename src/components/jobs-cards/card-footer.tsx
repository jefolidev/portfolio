import { LocalIcon } from "../ui/icons/local-icon";
import { ModalityIcon } from "../ui/icons/modality-icon";
import { MoneyIcon } from "../ui/icons/money-icon";
import { LanguageSection } from "./components/language-section";

import { ReactNode } from "react";

export type CardFooterTypes = {
  location: string;
  money: number;
  modality: "Presencial" | "Híbrido" | "Remoto";
  children: ReactNode;
};

export function CardFooter(data: CardFooterTypes) {
  return (
    <div className="xs:flex-col xs:gap-4 flex sm:w-full sm:flex-row sm:justify-between">
      <div className="text-lightSubtitles flex items-center gap-2 text-sm transition-colors sm:justify-between dark:text-gray-300">
        <LocalIcon />
        <span className="xs:text-xs sm:text-base">{data.location}</span>
        <div className="bg-lightSubtitles mx-1.5 h-2 w-0.5 rounded-full transition-colors dark:bg-gray-200" />
        <MoneyIcon />
        <span className="xs:text-xs sm:text-base"> R${data.money}</span>
        <div className="bg-lightSubtitles mx-1.5 h-2 w-0.5 rounded-full transition-colors dark:bg-gray-200" />
        <ModalityIcon />
        <span className="xs:text-xs sm:text-base">{data.modality}</span>
      </div>
      <div>
        <LanguageSection className="gap-2 px-3">
          {data.children}
        </LanguageSection>
      </div>
    </div>
  );
}
