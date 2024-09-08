import arrowRight from "../assets/arrow-right.svg";
type MyProjectsCardTypes = {
  name: string;
  description: string;
  mainPic?: string;
  picTop?: string;
  picBottom?: string;
  iconPath?: string;
};

export function MyProjectsCard(data: MyProjectsCardTypes) {
  return (
    <div className="bg-cardPrimary flex h-[42.5rem] w-full flex-col items-center justify-around rounded-md p-4">
      <div className="border-strokeDefault/30 h-30rem flex w-full items-center justify-center gap-5 rounded-lg border-2 bg-[#1E1B24] pt-8">
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
      <div className="border-strokeDefault/30 flex h-[8rem] w-full items-center justify-between rounded-lg border-2 bg-[#1E1B24] px-20">
        <div className="flex flex-col gap-1">
          <h1 className="font-geologica text-xl font-medium text-gray-50">
            {data.name}
          </h1>
          <span className="max-h-[910px] font-maven text-sm text-gray-400">
            {data.description}
          </span>
        </div>
        <button>
          <img src={arrowRight} alt="" className="w-2.5" />
        </button>
      </div>
    </div>
  );
}
