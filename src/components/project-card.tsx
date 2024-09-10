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
      className="bg-lightButtons hover:border-lightStroke flex h-20 w-72 select-none items-center justify-between rounded-lg border-2 border-transparent px-4 shadow-lg shadow-gray-700/40 transition-colors hover:border-2 hover:brightness-110 dark:bg-terciary dark:shadow-black/20 dark:hover:border-[#9d98a996] dark:hover:brightness-110"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className={`h-10 w-10 rounded-full ${buttonColor}`} />
        <div className="flex flex-col items-start">
          <h1 className="font-sm font-geologica font-medium text-white dark:text-gray-50">
            {name}
          </h1>
          <span className="font-geologica text-xs text-gray-200 dark:text-gray-300">
            {description}
          </span>
        </div>
      </div>

      <img src={arrowRight} className="" />
    </button>
  );
}
