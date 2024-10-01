import arrowRight from "../assets/arrow-right.svg";
type MyProjectsCardTypes = {
  name: string;
  description: string;
  mainPic?: string;
  iconPath?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function MyProjectsCard(data: MyProjectsCardTypes) {
  function trimWithPoints() {
    if (data.description.length > 50) {
      if (window.innerWidth <= 550) {
        return data.description.substring(0, 60) + "...";
      } else if (window.innerWidth <= 1024) {
        return data.description.substring(0, 140) + "...";
      }
    }
    return data.description;
  }

  return (
    <div className="flex flex-col items-center justify-around gap-4 rounded-md bg-lightPrimary p-4 shadow-2xl transition-colors dark:bg-cardPrimary">
      <div className="flex w-full flex-1 gap-5 rounded-lg border-2 border-strokeDefault/30 bg-lightTerciary/5 px-4 transition-colors dark:bg-[#1E1B24] lg:items-center lg:justify-center lg:pt-8">
        <img
          src={data.mainPic}
          alt=""
          className="xs:rounded-lg lg:rounded-b-none lg:rounded-tl-xl lg:rounded-tr-xl"
        />
      </div>
      <button
        className="flex h-[8rem] w-full select-none items-center justify-between rounded-lg border-2 border-strokeDefault/30 bg-lightTerciary/5 transition-colors hover:border-strokeFocus dark:bg-[#1E1B24] xs:flex-1 xs:px-5 lg:flex-auto lg:px-20"
        onClick={data.onClick}
      >
        <div className="flex flex-1 flex-col items-start gap-1 xs:p-4">
          <h1 className="font-geologica text-xl font-medium text-lightFonts transition-colors dark:text-gray-50">
            {data.name}
          </h1>
          <span className="max-h-[58rem] text-left font-maven text-lg text-lightSubtitles transition-colors dark:text-gray-400">
            {trimWithPoints()}
          </span>
        </div>
        <div className="p-2 xs:hidden lg:block">
          <img src={arrowRight} alt="" className="w-2.5" />
        </div>
      </button>
    </div>
  );
}
