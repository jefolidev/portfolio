import { ReactNode } from "react";

type LanguageSectionType = { className: string; children: ReactNode };

export function LanguageSection({ className, children }: LanguageSectionType) {
  return (
    <div
      className={`bg-lightTerciary flex h-8 w-full items-center rounded-full dark:bg-quartiary/60 ${className} transition-colors`}
    >
      {children}
    </div>
  );
}
