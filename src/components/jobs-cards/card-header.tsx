export type CardHeaderTypes = {
  name: string;
  role: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  monthCount: number;
};

export function CardHeader(data: CardHeaderTypes) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex flex-col -space-y-1 sm:w-full">
        <h1 className="text-lightFonts font-geologica font-medium transition-colors sm:text-lg dark:text-white">
          {data.name}
        </h1>
        <span className="text-lightSubtitles font-geologica text-sm font-thin transition-colors dark:text-gray-300">
          {data.role}
        </span>
      </div>
      <div className="xs:text-end xs:w-28 xs:gap-1 flex flex-col items-end -space-y-1 sm:w-full sm:gap-0">
        <h1 className="text-lightFonts xs:text-base/5 font-geologica font-medium sm:text-lg dark:text-white">
          {data.startMonth} {data.startYear} — {data.endMonth} {data.endYear}
        </h1>
        <span className="text-lightSubtitles font-geologica text-sm font-thin transition-colors dark:text-gray-300">
          {data.monthCount} meses
        </span>
      </div>
    </div>
  );
}
