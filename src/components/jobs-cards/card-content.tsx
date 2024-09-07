export type CardContentTypes = {
  firstMessage: string;
  secondMessage: string;
};

export function CardContent(data: CardContentTypes) {
  return (
    <div className="flex flex-col pl-8 pr-36">
      <ol className="list-disc space-y-3 text-sm text-white">
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
