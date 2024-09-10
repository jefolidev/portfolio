export type CardContentTypes = {
  firstMessage: string;
  secondMessage: string;
};

export function CardContent(data: CardContentTypes) {
  return (
    <div className="flex flex-col pl-8 pr-36">
      <ol className="text-lightFonts list-disc space-y-3 text-sm dark:text-white transition-colors">
        <li>
          <span>{data.firstMessage}</span>
        </li>
        <li>
          <span>{data.secondMessage}</span>
        </li>
      </ol>
    </div>
  );
}
