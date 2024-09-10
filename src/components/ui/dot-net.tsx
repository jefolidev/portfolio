import { AltBox } from "./alt-box";

export function DotNet() {
  return (
    <div className="group/dotnet relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="12"
        fill="none"
        viewBox="0 0 24 8"
      >
        <path
          className="fill-gray-50 group-hover/dotnet:fill-violet-600 dark:fill-gray-200 transition-colors"
          d="M1.737 7.258a.69.69 0 01-.254.525h-.001A.952.952 0 01.868 8a.959.959 0 01-.615-.218v.001A.686.686 0 010 7.26c0-.206.098-.393.254-.524a.955.955 0 01.615-.217c.238 0 .454.082.615.218l-.001-.001a.69.69 0 01.254.525v-.002zm8.703.62H8.882L4.78 2.088a2.414 2.414 0 01-.25-.44l-.008-.016h-.036a7.146 7.146 0 01.048 1.093v-.01 5.163H3.157V.001h1.659L8.78 5.655c.167.234.275.395.323.484h.024a6.166 6.166 0 01-.06-1.07v.01V0h1.372v7.878zm6.708 0h-4.822V.001h4.63v1.11h-3.204v2.231h2.952v1.104h-2.952v2.33h3.396v1.102zM24 1.11h-2.468V7.88h-1.425V1.11h-2.462V0h6.354L24 1.11z"
        ></path>
      </svg>
      <AltBox className="group-hover/dotnet:visible" name=".NET" />
    </div>
  );
}
