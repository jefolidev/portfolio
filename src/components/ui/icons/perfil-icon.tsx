import { AltBox } from "../alt-box";

export function PerfilIcon() {
  return (
    <div className="group/perfil">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
        className="transition duration-100 group-hover/perfil:scale-125"
      >
        <path
          stroke="#CECCD4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.885 14.16A12.388 12.388 0 019 12.555c2.222 0 4.308.582 6.115 1.603m-3.448-6.937a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM17 9A7.999 7.999 0 111.002 9 7.999 7.999 0 0117 9z"
        ></path>
      </svg>
      <AltBox
        className="-top-9 left-6 text-[0.8rem] group-hover/perfil:visible"
        name="Sobre"
      />
    </div>
  );
}
