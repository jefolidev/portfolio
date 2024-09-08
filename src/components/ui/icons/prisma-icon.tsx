import { AltBox } from "../alt-box";

export function PrismaIcon() {
  return (
    <div className="group/prisma relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="17"
        fill="none"
        viewBox="0 0 13 15"
      >
        <path
          className="fill-gray-200 group-hover/prisma:fill-purple-800"
          d="M12.405 11.396L7.261.472a.826.826 0 00-.703-.47.816.816 0 00-.751.39L.227 9.427a.845.845 0 00.01.907l2.728 4.225a.877.877 0 00.985.362l7.916-2.342a.868.868 0 00.545-.47.849.849 0 00-.005-.714zm-1.151.469L4.537 13.85a.282.282 0 01-.36-.323l2.4-11.492c.045-.215.342-.249.436-.05l4.443 9.435a.32.32 0 01-.202.444z"
        ></path>
      </svg>
      <AltBox className="group-hover/prisma:visible" name="Prisma" />
    </div>
  );
}
