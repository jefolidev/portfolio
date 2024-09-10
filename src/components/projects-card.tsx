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
      <div className="bg-lightTerciary/5 flex flex-1 gap-5 rounded-lg border-2 border-strokeDefault/30 transition-colors sm:items-center sm:justify-end sm:pt-8 dark:bg-[#1E1B24]">
        <img
          src={data.mainPic}
          alt=""
          className="xs:rounded-lg sm:rounded-tl-xl sm:rounded-tr-xl"
        />
        <div className="flex flex-col gap-2">
          <img
            src={data.picTop}
            alt=""
            className="xs:hidden rounded-xl sm:inline"
          />
          <img
            src={data.picBottom}
            alt=""
            className="xs:hidden rounded-xl sm:block"
          />
        </div>
      </div>
      <button
        className="bg-lightTerciary/5 xs:flex-1 xs:px-5 flex h-[8rem] w-full select-none items-center justify-between rounded-lg border-2 border-strokeDefault/30 transition-colors hover:border-strokeFocus sm:flex-auto sm:px-20 dark:bg-[#1E1B24]"
        onClick={data.onClick}
      >
        <div className="xs:p-4 flex flex-1 flex-col items-start gap-1">
          <h1 className="text-lightFonts font-geologica text-xl font-medium transition-colors dark:text-gray-50">
            {data.name}
          </h1>
          <span className="text-lightSubtitles max-h-[58rem] text-left font-maven text-sm transition-colors dark:text-gray-400">
            {data.description.length > 50 && window.innerWidth <= 550
              ? data.description.substring(0, 60) + "..."
              : data.description}
          </span>
        </div>
        <button className="xs:hidden p-2 sm:block">
          <img src={arrowRight} alt="" className="w-2.5" />
        </button>
      </button>
    </div>
  );
}
