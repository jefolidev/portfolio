import { ReactNode } from "react";

type LanguageSectionType = { className: string; children: ReactNode };

export function LanguageSection({ className, children }: LanguageSectionType) {
  return (
    <div
      className={`flex h-8 w-full items-center rounded-full bg-quartiary/60 ${className}`}
    >
      {children}
    </div>
  );
}
