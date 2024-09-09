import arrowRight from "../assets/arrow-right.svg";
import { ButtonType } from "./ui/button-secondary";

interface ProjectCardButton extends ButtonType {
  name: string;
  description: string;
  buttonColor: string;
}

export function ProjectCard({
  onClick,
  name,
  description,
  buttonColor,
}: ProjectCardButton) {
  return (
    <button
      className="flex h-20 w-72 items-center justify-between rounded-lg border-2 border-transparent bg-terciary px-4 shadow-lg transition-colors hover:border-2 hover:border-[#9d98a996] hover:brightness-110"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className={`h-10 w-10 rounded-full ${buttonColor}`} />
        <div className="flex flex-col items-start">
          <h1 className="font-sm font-geologica font-medium text-gray-50">
            {name}
          </h1>
          <span className="font-geologica text-xs text-gray-300">
            {description}
          </span>
        </div>
      </div>

      <img src={arrowRight} className="" />
    </button>
  );
}
