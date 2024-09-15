import arrowRight from "../assets/arrow-right.svg";
import { ButtonType } from "./ui/button-secondary";

interface ProjectCardButton extends ButtonType {
  name: string;
  description: string;
  projectIcon?: React.ReactNode;
}

export function ProjectCard({
  onClick,
  name,
  description,
  projectIcon,
}: ProjectCardButton) {
  return (
    <button
      className="flex h-20 select-none items-center justify-between rounded-lg border-2 border-transparent bg-lightButtons px-4 shadow-lg shadow-gray-700/40 transition-colors hover:border-2 hover:border-lightStroke hover:brightness-110 dark:bg-terciary dark:shadow-black/20 dark:hover:border-[#9d98a996] dark:hover:brightness-110 xs:flex-grow sm:w-72"
      onClick={onClick}
    >
      <div className="flex gap-4 items-center">
        {projectIcon}
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
