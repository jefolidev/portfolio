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
    <div className="bg-lightPrimary flex flex-col items-center justify-around gap-4 rounded-md p-4 shadow-2xl transition-colors dark:bg-cardPrimary">
      <div className="bg-lightTerciary/5 flex items-center justify-center gap-5 self-stretch rounded-lg border-2 border-strokeDefault/30 pt-8 transition-colors dark:bg-[#1E1B24]">
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
        className="bg-lightTerciary/5 flex h-[8rem] w-full select-none items-center justify-between rounded-lg border-2 border-strokeDefault/30 px-20 transition-colors hover:border-strokeFocus dark:bg-[#1E1B24]"
        onClick={data.onClick}
      >
        <div className="flex flex-1 flex-col items-start gap-1">
          <h1 className="text-lightFonts font-geologica text-xl font-medium transition-colors dark:text-gray-50">
            {data.name}
          </h1>
          <span className="text-lightSubtitles max-h-[58rem] text-left font-maven text-sm transition-colors dark:text-gray-400">
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
