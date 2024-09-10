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
    <div className="flex justify-between">
      <div className="text-lightSubtitles flex items-center gap-2 text-sm dark:text-gray-300 transition-colors">
        <LocalIcon />
        <span>{data.location}</span>
        <div className="bg-lightSubtitles mx-1.5 h-2 w-0.5 rounded-full dark:bg-gray-200 transition-colors" />
        <MoneyIcon />
        <span> R${data.money}</span>
        <div className="bg-lightSubtitles mx-1.5 h-2 w-0.5 rounded-full dark:bg-gray-200 transition-colors" />
        <ModalityIcon />
        <span>{data.modality}</span>
      </div>
      <div>
        <LanguageSection className="gap-2 px-3">
          {data.children}
        </LanguageSection>
      </div>
    </div>
  );
}
