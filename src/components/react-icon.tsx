import { AltBox } from "./alt-box";

export function ReactIcon() {
  return (
    <div className="group/react relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        fill="none"
        viewBox="0 0 14 12"
      >
        <path
          className="fill-gray-200 group-hover/react:fill-blue-500"
          d="M4.001 1.32c-.207.119-.425.448-.45 1.167a.619.619 0 11-1.237-.043c.031-.882.31-1.759 1.068-2.197.76-.439 1.663-.24 2.444.177a.619.619 0 11-.583 1.092c-.638-.34-1.034-.317-1.242-.197zM7.32 2.391a.619.619 0 01.871.082c.457.552.896 1.182 1.294 1.871.859 1.487 1.388 3.01 1.53 4.287.072.638.05 1.245-.099 1.765-.15.524-.442.999-.933 1.282-.593.342-1.278.294-1.904.066-.63-.23-1.277-.663-1.894-1.226a.619.619 0 01.834-.914c.544.496 1.055.821 1.483.977.43.156.7.119.863.025.135-.078.272-.238.361-.55.09-.317.12-.751.06-1.288-.12-1.07-.579-2.43-1.372-3.805a12.371 12.371 0 00-1.176-1.7.619.619 0 01.082-.872z"
        ></path>
        <path
          className="fill-gray-200 group-hover/react:fill-blue-500"
          d="M11.963 6.132c0-.24-.177-.593-.787-.974a.619.619 0 01.656-1.05c.748.468 1.368 1.148 1.368 2.024 0 .878-.623 1.56-1.375 2.027a.619.619 0 01-.654-1.05c.614-.383.792-.737.792-.977zM9.373 8.468a.619.619 0 01-.506.714c-.707.12-1.471.185-2.268.185-1.716 0-3.3-.303-4.477-.818-.588-.257-1.103-.58-1.48-.969C.266 7.188 0 6.698 0 6.132c0-.685.385-1.254.896-1.683.512-.43 1.212-.774 2.008-1.026a.619.619 0 01.375 1.18c-.702.222-1.24.502-1.588.795-.35.294-.454.547-.454.734 0 .156.07.354.297.588.229.237.59.479 1.085.695.987.432 2.394.715 3.981.715.73 0 1.425-.06 2.06-.168a.619.619 0 01.714.506z"
        ></path>
        <path
          className="fill-gray-200 group-hover/react:fill-blue-500"
          d="M4.02 10.607c.206.12.6.144 1.236-.194a.619.619 0 11.58 1.093c-.778.414-1.677.61-2.435.173-.761-.44-1.04-1.32-1.069-2.204a.619.619 0 011.237-.042c.024.723.243 1.055.45 1.174zm-.73-3.41a.619.619 0 01-.365-.795c.25-.672.575-1.367.973-2.057C4.757 2.86 5.811 1.64 6.846.877 7.363.497 7.899.212 8.424.081c.53-.132 1.086-.117 1.577.166.593.343.893.96 1.009 1.617.116.66.064 1.437-.115 2.253a.619.619 0 01-1.209-.265c.158-.72.184-1.325.105-1.773-.08-.45-.247-.666-.41-.76-.135-.078-.341-.117-.657-.038-.32.08-.71.272-1.144.593-.868.639-1.816 1.716-2.61 3.09a12.37 12.37 0 00-.885 1.869.619.619 0 01-.795.364z"
        ></path>
        <path
          className="fill-gray-200 group-hover/react:fill-blue-500"
          d="M7.804 6.017a1.121 1.121 0 11-2.243 0 1.121 1.121 0 012.243 0z"
        ></path>
      </svg>
      <AltBox className="group-hover/react:visible" name="React" />
    </div>
  );
}
