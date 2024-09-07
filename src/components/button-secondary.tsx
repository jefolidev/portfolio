export type ButtonType = { iconPath?: string; text: string };

export function ButtonSecondary(props: ButtonType) {
  return (
    <button className="text-white font-maven hover:bg-gray-700/5 flex h-8 w-[6.375rem] items-center justify-center rounded-md border-2 border-terciary">
      <img src={props.iconPath} className="wr-3 mr-2 h-4" />
      {props.text}
    </button>
  );
}
