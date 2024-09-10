import { ReactNode } from "react";

type LanguageSectionType = { className: string; children: ReactNode };

export function LanguageSection({ className, children }: LanguageSectionType) {
  return (
    <div
      className={`bg-lightTerciary xs:w-max flex h-8 items-center rounded-full sm:w-full dark:bg-quartiary/60 ${className} transition-colors`}
    >
      {children}
    </div>
  );
}
