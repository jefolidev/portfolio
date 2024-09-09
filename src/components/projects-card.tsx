import arrowRight from "../assets/arrow-right.svg";
type MyProjectsCardTypes = {
  name: string;
  description: string;
  mainPic?: string;
  picTop?: string;
  picBottom?: string;
  iconPath?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function MyProjectsCard(data: MyProjectsCardTypes) {
  return (
    <div className="flex flex-col items-center justify-around gap-4 rounded-md bg-cardPrimary p-4 shadow-2xl">
      <div className="flex items-center justify-center gap-5 self-stretch rounded-lg border-2 border-strokeDefault/30 bg-[#1E1B24] pt-8">
        <img
          src={data.mainPic}
          alt=""
          className="rounded-tl-xl rounded-tr-xl"
        />
        <div className="flex flex-col gap-2">
          <img src={data.picTop} alt="" className="rounded-xl" />
          <img src={data.picBottom} alt="" className="rounded-xl" />
        </div>
      </div>
      <button
        className="flex h-[8rem] w-full items-center justify-between rounded-lg border-2 border-strokeDefault/30 bg-[#1E1B24] px-20 transition-colors hover:border-strokeFocus"
        onClick={data.onClick}
      >
        <div className="flex flex-1 flex-col items-start gap-1">
          <h1 className="font-geologica text-xl font-medium text-gray-50">
            {data.name}
          </h1>
          <span className="max-h-[58rem] text-left font-maven text-sm text-gray-400">
            {data.description}
          </span>
        </div>
        <button className="p-2">
          <img src={arrowRight} alt="" className="w-2.5" />
        </button>
      </button>
    </div>
  );
}
