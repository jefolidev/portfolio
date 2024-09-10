import { AltBox } from "../alt-box";

export function PostgressIcon() {
  return (
    <div className="group/post relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="19"
        fill="none"
        viewBox="0 0 16 13"
      >
        <path
          className="fill-gray-50 transition-colors group-hover/post:fill-blue-800 dark:fill-gray-200"
          d="M5.22 9.967c0 .39-.149.765-.414 1.041a1.39 1.39 0 01-1.002.432 1.39 1.39 0 01-1.002-.431 1.504 1.504 0 01-.415-1.042h-1.5c0 .804.307 1.576.854 2.145A2.861 2.861 0 003.804 13c.773 0 1.515-.32 2.062-.888.547-.57.854-1.34.854-2.145V5.633h-1.5v4.334zm.417-6.5a.568.568 0 00.324-.103.602.602 0 00.215-.272.63.63 0 00-.126-.661.563.563 0 00-.636-.132.589.589 0 00-.262.224.624.624 0 00.073.766c.11.114.257.178.412.178zM8.387 13h1.167v-2.6H8.387V13zm5.758-11.267h-2.5A2.779 2.779 0 0010.65.47 2.618 2.618 0 009.145 0H5.887a2.606 2.606 0 00-1.873.794A2.82 2.82 0 003.22 2.73v6.214c0 .16.062.315.171.429.11.114.258.178.413.178a.572.572 0 00.412-.178.62.62 0 00.171-.429V2.73c.009-.407.171-.794.452-1.078.28-.283.657-.441 1.048-.439h3.2a1.44 1.44 0 01.581.097c.186.073.356.182.5.324.144.14.26.31.34.499.081.188.125.391.13.597-.012.41-.178.8-.464 1.084-.285.284-.667.44-1.062.433a.572.572 0 00-.412.177.62.62 0 00-.171.43c0 .16.061.315.17.428.11.114.258.178.413.178.667.005 1.31-.25 1.805-.716a2.806 2.806 0 00.862-1.797h2.367a.555.555 0 01.406.175.6.6 0 01.168.423V10.4h-1.666V13h2.833V3.545a1.857 1.857 0 00-.512-1.279 1.717 1.717 0 00-1.23-.533z"
        ></path>
      </svg>
      <AltBox className="w-24 group-hover/post:visible" name="Postgress" />
    </div>
  );
}
