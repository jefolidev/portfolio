import { ButtonType } from "./button-secondary";

export function ButtonPrimary(props: ButtonType) {
  return (
    <button className="text-white font-maven flex h-8 w-[6.375rem] items-center justify-center rounded-md bg-terciary hover:brightness-75">
      <img src={props.iconPath} className="wr-3 mr-2 h-4" />
      {props.text}
    </button>
  );
}
