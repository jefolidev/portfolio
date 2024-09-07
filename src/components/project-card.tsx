import arrowRight from "../assets/arrow-right.svg";

export function ProjectCard() {
  return (
    <button className="hover:border-gray-700 border-transparent flex h-20 w-72 items-center justify-evenly rounded-lg border-2 bg-terciary shadow-lg hover:border-2">
      <div className="bg-gray-900 h-10 w-10 rounded-full" />
      <div className="flex flex-col items-start">
        <h1 className="text-gray-50 font-geologica font-base font-medium">
          Net.ly
        </h1>
        <span className="text-gray-300 font-geologica text-sm">
          Landing page, Rede social
        </span>
      </div>

      <img src={arrowRight} />
    </button>
  );
}
