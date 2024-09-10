import { ReactNode } from "react";

type CardRootTypes = { children: ReactNode };
export default function CardRoot({ children }: CardRootTypes) {
  return (
    <div className="group/card bg-lightSecondary xs:w-[screen] xs:h-full xs:px-5 flex flex-col gap-8 rounded-lg border border-transparent py-4 transition-all hover:border-[#9D98A9] sm:h-full sm:w-[40.25rem] sm:items-center sm:px-[1.875rem] dark:bg-terciary">
      {children}
    </div>
  );
}
