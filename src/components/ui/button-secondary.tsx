import { GoToPageIcon } from "./icons/goto-icon";

export type ButtonType = {
  iconPath?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonSecondary(props: ButtonType) {
  return (
    <button
      className="flex h-8 w-auto items-center justify-center gap-1 rounded-md border-2 border-terciary p-1 font-maven text-white hover:bg-gray-700/5"
      onClick={props.onClick}
    >
      <GoToPageIcon />
      <span className="text-sm font-semibold text-zinc-900 dark:text-white">
        {props.text}
      </span>
    </button>
  );
}
