import { ReactNode } from "react";

type CardRootTypes = { children: ReactNode };
export default function CardRoot({ children }: CardRootTypes) {
  return (
    <div className="group/card grid h-[17rem] w-[40.25rem] grid-flow-col grid-rows-3 items-center gap-8 rounded-lg border border-transparent bg-terciary px-[1.875rem] py-4 transition-all hover:border-[#9D98A9]">
      {children}
    </div>
  );
}
