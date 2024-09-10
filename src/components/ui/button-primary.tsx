import { ButtonType } from "./button-secondary";

export function ButtonPrimary(props: ButtonType) {
  return (
    <button
      className="bg-lightButtons flex h-8 w-[7.375rem] select-none items-center justify-center gap-1 rounded-md font-maven text-sm font-medium text-white transition-all hover:brightness-75 dark:bg-terciary"
      onClick={props.onClick}
    >
      <img src={props.iconPath} className="h-4" />
      {props.text}
    </button>
  );
}
