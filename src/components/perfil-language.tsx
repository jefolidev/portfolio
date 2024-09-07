type PerfilLanguageCard = { name: string; iconPath: string };

export function PerfilLanguageCard(language: PerfilLanguageCard) {
  return (
    <div className="flex h-8 w-32 items-center justify-center gap-2 rounded-full bg-secondary py-5">
      <img src={language.iconPath} />
      <span className="text-gray-50 font-maven">{language.name}</span>
    </div>
  );
}
