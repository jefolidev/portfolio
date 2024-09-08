import { ReactNode } from "react";

type CardHelpTypes = {
  children: ReactNode;
  name: string;
  description: string;
};

export function CardHelp(data: CardHelpTypes) {
  return (
    <div className="group/card hover:border-strokeFocus flex h-[20rem] w-[15rem] flex-col justify-end gap-2 rounded-md border border-[#9D98A9] bg-secondary px-6 py-12 transition-transform hover:scale-105">
      {data.children}
      <h1 className="font-maven text-lg font-medium text-gray-100">
        {data.name}
      </h1>
      <span className="min-h-12 font-maven text-xs text-gray-400">
        {data.description}
      </span>
    </div>
  );
}
