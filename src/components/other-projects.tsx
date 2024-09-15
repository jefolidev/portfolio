import { useNavigate } from "react-router-dom";
import arrowRight from "../assets/arrow-right.svg";

type OtherProjectsType = {
  image: string;
  name: string;
  type: string;
  path: string;
};

export function OtherProjects(data: OtherProjectsType) {
  const navigate = useNavigate();
  return (
    <div className="xs:full flex flex-col items-center gap-4 px-3 py-[0.62rem] md:w-[22.2rem]">
      <img src={data.image} alt="" className="flex-1 rounded-xl" />
      <div className="flex flex-1 items-center justify-between self-stretch">
        <div className="flex flex-col items-start">
          <h1 className="font-geologica text-xl font-bold text-lightFonts transition-colors dark:text-gray-50">
            {data.name}
          </h1>
          <span className="font-maven text-sm text-lightSubtitles transition-colors dark:text-gray-400">
            {data.type}
          </span>
        </div>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-lightButtons hover:brightness-125 dark:bg-terciary"
          onClick={() => navigate(`/projects/${data.path}`)}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
