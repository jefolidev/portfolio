import { ReactNode } from "react";

type CardRootTypes = { children: ReactNode };
export default function CardRoot({ children }: CardRootTypes) {
  return (
    <div className="group/card grid h-[17rem] w-[40.25rem] grid-flow-col grid-rows-3 items-center gap-8 rounded-lg bg-terciary px-[1.875rem] py-4">
      {children}
    </div>
  );
}
