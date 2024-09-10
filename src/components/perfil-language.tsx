type PerfilLanguageCard = { name: string; iconPath: string };

export function PerfilLanguageCard(language: PerfilLanguageCard) {
  return (
    <div className="bg-lightButtons flex h-8 w-32 cursor-default items-center justify-center gap-2 rounded-full py-5 transition-colors dark:bg-secondary">
      <img src={language.iconPath} />
      <span className="font-maven text-gray-50">{language.name}</span>
    </div>
  );
}
