export type ButtonType = {
  iconPath?: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function ButtonSecondary(props: ButtonType) {
  return (
    <button
      className="flex h-8 w-[6.375rem] items-center justify-center rounded-md border-2 border-terciary font-maven text-white hover:bg-gray-700/5"
      onClick={props.onClick}
    >
      <img src={props.iconPath} className="wr-3 mr-2 h-4" />
      {props.text}
    </button>
  );
}
