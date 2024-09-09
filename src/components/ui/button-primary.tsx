import { ButtonType } from "./button-secondary";

export function ButtonPrimary(props: ButtonType) {
  return (
    <button
      className="flex h-8 w-[7.375rem] items-center justify-center gap-1 rounded-md bg-terciary font-maven text-sm font-medium text-white transition-all hover:brightness-75"
      onClick={props.onClick}
    >
      <img src={props.iconPath} className="h-4" />
      {props.text}
    </button>
  );
}
