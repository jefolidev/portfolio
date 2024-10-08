import { AltBox } from "../alt-box";

export function NodeIcon() {
  return (
    <div className="group/node relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        fill="none"
        viewBox="0 0 14 15"
      >
        <path
          className="fill-gray-50 transition-colors group-hover/node:fill-lime-400 dark:fill-gray-200"
          d="M12.552 3.154L7.198.122a1.29 1.29 0 00-1.096 0L.748 3.154a1.096 1.096 0 00-.548.935v5.999a1.097 1.097 0 00.548.935l1.42.806c.37.22.794.33 1.225.323 1 0 1.58-.613 1.58-1.645V4.605a.161.161 0 00-.161-.161h-.677a.161.161 0 00-.162.161v5.902c0 .484-.483.935-1.257.548l-1.484-.838a.162.162 0 01-.064-.13V4.09a.258.258 0 01.064-.161l5.321-3h.194l5.321 3c.04.044.062.101.065.161v5.999a.161.161 0 01-.065.129l-5.321 2.999a.193.193 0 01-.194 0L5.2 12.442a.097.097 0 00-.13 0l-.805.355c-.097.032-.226.064.032.225l1.806 1a1 1 0 001.096 0l5.354-3a1.097 1.097 0 00.548-.934V4.089a1.097 1.097 0 00-.548-.935z"
        ></path>
        <path
          className="fill-gray-50 transition-colors group-hover/node:fill-lime-400 dark:fill-gray-200"
          d="M8.295 9.12c-1.42 0-1.71-.323-1.839-1a.129.129 0 00-.129-.129h-.709a.129.129 0 00-.13.13c0 .87.485 1.934 2.807 1.934 1.677 0 2.644-.645 2.644-1.774 0-1.128-.774-1.45-2.419-1.644-1.644-.194-1.806-.323-1.806-.71 0-.387.13-.71 1.355-.71s1.516.226 1.677.936a.161.161 0 00.161.129h.678l.128-.065a.13.13 0 00.033-.096c-.097-1.258-.968-1.839-2.677-1.839-1.71 0-2.419.645-2.419 1.677s.903 1.452 2.354 1.613c1.452.161 1.903.387 1.903.742 0 .354-.484.806-1.612.806z"
        ></path>
      </svg>
      <AltBox className="group-hover/node:visible" name="Node.js" />
    </div>
  );
}
