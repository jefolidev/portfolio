import { AltBox } from "../alt-box";

export function SunIcon() {
  return (
    <div className="group/theme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className="transition duration-100 group-hover/theme:scale-110"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 1v1m0 16v1m9-9h-1M2 10H1m15.364 6.364l-.707-.707M4.343 4.343l-.707-.707m12.728 0l-.707.707M4.343 15.657l-.707.707M14 10a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
      <AltBox
        className="-top-9 left-[7.5rem] w-24 text-nowrap text-[0.8rem] group-hover/theme:visible"
        name="Tema escuro"
      />
    </div>
  );
}
