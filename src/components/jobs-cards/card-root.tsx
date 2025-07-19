import { ReactNode } from "react";

type CardRootTypes = { children: ReactNode, role: string, year: number };

export function CardRoot({ children, role, year }: CardRootTypes) {
  return (
    <div className="flex flex-col">
        <span className="font-maven font-medium text-lightSubtitles transition-colors dark:text-gray-400 xs:hidden xs:text-sm sm:block md:mb-2">
            Contratado como{" "}
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              {role}
            </p>{" "}
            em
            <p className="inline font-semibold text-lightFonts transition-colors dark:text-white">
              {" "}
              {year}
            </p>
          </span>
    <div className="group/card bg-lightSecondary xs:w-[screen] xs:min-min-h-full xs:px-5 flex flex-col gap-8 rounded-lg border border-transparent py-4 transition-all hover:border-[#9D98A9] sm:min-h-full sm:w-[40.25rem] sm:items-center sm:px-[1.875rem] dark:bg-terciary">
      {children}
    </div>
    </div>
  );
}
