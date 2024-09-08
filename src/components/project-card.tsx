import arrowRight from "../assets/arrow-right.svg";

export function ProjectCard() {
  return (
    <button className="flex h-20 w-72 items-center justify-evenly rounded-lg border-2 border-transparent bg-terciary shadow-lg transition-all hover:border-2 hover:border-gray-700">
      <div className="h-10 w-10 rounded-full bg-gray-900" />
      <div className="flex flex-col items-start">
        <h1 className="font-base font-geologica font-medium text-gray-50">
          Net.ly
        </h1>
        <span className="font-geologica text-sm text-gray-300">
          Landing page, Rede social
        </span>
      </div>

      <img src={arrowRight} />
    </button>
  );
}
