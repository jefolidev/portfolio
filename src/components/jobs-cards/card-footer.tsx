import local from "../../assets/local.svg";
import modality from "../../assets/modality.svg";
import money from "../../assets/money.svg";
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
      <div className="flex items-center gap-2 text-sm text-gray-200">
        <img src={local} alt="" className="h-4 w-4" />
        <span>{data.location}</span>
        <div className="mx-1.5 h-2 w-0.5 rounded-full bg-gray-200" />
        <img src={money} alt="" className="ml-1 h-4 w-4" />
        <span> R${data.money}</span>
        <div className="mx-1.5 h-2 w-0.5 rounded-full bg-gray-200" />
        <img src={modality} alt="" className="ml-1 h-4 w-4" />
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
