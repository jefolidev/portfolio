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
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col -space-y-1">
        <h1 className="text-lightFonts font-geologica text-lg font-medium transition-colors dark:text-white">
          {data.name}
        </h1>
        <span className="text-lightSubtitles font-geologica text-sm font-thin transition-colors dark:text-gray-300">
          {data.role}
        </span>
      </div>
      <div className="flex flex-col items-end -space-y-1">
        <h1 className="text-lightFonts font-geologica text-lg font-medium dark:text-white">
          {data.startMonth} {data.startYear} — {data.endMonth} {data.endYear}
        </h1>
        <span className="text-lightSubtitles font-geologica text-sm font-thin transition-colors dark:text-gray-300">
          {data.monthCount} meses
        </span>
      </div>
    </div>
  );
}
