import { ButtonType } from "./button-secondary";

export function ButtonPrimary(props: ButtonType) {
  return (
    <button
      className="bg-lightButtons xs:h-12 xs:w-36 xs:text-lg flex select-none items-center justify-center gap-1 rounded-md font-maven font-medium text-white transition-all hover:brightness-75 lg:h-8 lg:w-[7.375rem] lg:text-sm dark:bg-terciary"
      onClick={props.onClick}
    >
      <img src={props.iconPath} className="h-4" />
      {props.text}
    </button>
  );
}
