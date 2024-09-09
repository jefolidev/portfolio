import { ButtonType } from "./button-secondary";

export function ButtonPrimary(props: ButtonType) {
  return (
    <button
      className="flex h-8 w-[6.375rem] items-center justify-center rounded-md bg-terciary font-maven text-sm text-white transition-all hover:brightness-75"
      onClick={props.onClick}
    >
      <img src={props.iconPath} className="wr-3 mr-2 h-4" />
      {props.text}
    </button>
  );
}
