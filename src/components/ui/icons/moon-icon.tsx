import { AltBox } from "../alt-box";

export function MoonIcon() {
  return (
    <div className="group/theme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className="transition-all duration-100 group-hover/theme:scale-110"
      >
        <path
          className="stroke-lightFonts transition-all dark:stroke-gray-50"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.752 11.794a7.099 7.099 0 01-4.388.432c-1.47-.326-2.819-1.113-3.88-2.263a8.531 8.531 0 01-2.086-4.206A8.952 8.952 0 015.795 1c-1.648.72-3.014 2.039-3.863 3.731a8.914 8.914 0 00-.793 5.543c.337 1.892 1.27 3.598 2.64 4.825C5.15 16.326 6.872 16.998 8.649 17a7.243 7.243 0 004.287-1.423c1.266-.928 2.247-2.245 2.817-3.783z"
        ></path>
      </svg>
      <AltBox
        className="-top-8 left-[7.5rem] w-24 text-nowrap text-[0.8rem] group-hover/theme:visible"
        name="Tema escuro"
      />
    </div>
  );
}
