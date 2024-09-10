import { AltBox } from "../alt-box";

export function ProjectsIcon() {
  return (
    <div className="group/projects">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        fill="none"
        viewBox="0 0 20 16"
        className="transition-all duration-100 group-hover/projects:scale-125"
      >
        <path
          className="stroke-lightFonts dark:stroke-gray-50"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 3.95h.01m2.99 0h.01m2.99 0h.01M4.2 15h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C19 13.48 19 12.92 19 11.8V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C17.48 1 16.92 1 15.8 1H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C1 2.52 1 3.08 1 4.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C2.52 15 3.08 15 4.2 15z"
        ></path>
      </svg>
      <AltBox
        className="-top-8 left-16 text-[0.8rem] group-hover/projects:visible"
        name="Projetos"
      />
    </div>
  );
}
