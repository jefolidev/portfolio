type AltBoxType = { className: string; name: string };

export function AltBox(props: AltBoxType) {
  return (
    <div
      className={`invisible absolute -left-8 top-6 w-20 rounded-md bg-quartiary p-2 text-center font-maven text-white shadow-md ${props.className}`}
    >
      {props.name}
    </div>
  );
}
