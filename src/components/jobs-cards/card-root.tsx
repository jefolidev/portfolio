import { ReactNode } from "react";

type CardRootTypes = { children: ReactNode };
export default function CardRoot({ children }: CardRootTypes) {
  return (
    <div className="group/card bg-lightSecondary grid h-[17rem] w-[40.25rem] grid-flow-col grid-rows-3 items-center gap-8 rounded-lg border border-transparent px-[1.875rem] py-4 transition-all transition-colors hover:border-[#9D98A9] dark:bg-terciary">
      {children}
    </div>
  );
}
