import { AltBox } from "../alt-box";

export function HomeIcon() {
  return (
    <div className="group/home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
        className="transition-all duration-100 group-hover/home:scale-125"
      >
        <path
          className="stroke-lightFonts dark:stroke-gray-50"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.333 13.431h5.334M1 11.29V9.086c0-1.025 0-1.537.132-2.01.116-.417.308-.81.565-1.16.29-.394.693-.708 1.5-1.337l2.31-1.805c1.25-.975 1.874-1.463 2.564-1.65a3.543 3.543 0 011.858 0c.69.187 1.314.675 2.564 1.65l2.31 1.805c.807.629 1.21.943 1.5 1.337.257.35.449.743.565 1.16.132.473.132.985.132 2.01v2.204c0 1.999 0 2.998-.388 3.761a3.563 3.563 0 01-1.553 1.56C14.298 17 13.302 17 11.31 17H6.69c-1.991 0-2.987 0-3.748-.389a3.563 3.563 0 01-1.553-1.56C1 14.288 1 13.29 1 11.29z"
        ></path>
      </svg>
      <AltBox
        className="-left-3.5 -top-8 text-[0.8rem] group-hover/home:visible"
        name="Início"
      />
    </div>
  );
}
