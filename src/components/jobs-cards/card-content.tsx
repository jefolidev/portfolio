export type CardContentTypes = {
  firstMessage: string;
  secondMessage: string;
};

export function CardContent(data: CardContentTypes) {
  return (
    <div className="xs:pl-4 flex flex-col sm:pl-8 sm:pr-36">
      <ol className="text-lightFonts list-disc space-y-3 text-sm transition-colors dark:text-white">
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
