import { ReactChild } from "react";

interface ILabel {
  children: ReactChild;
  htmlFor: string;
}

function Label({ children, htmlFor }: ILabel) {
  return (
    <label
      htmlFor={htmlFor}
      className="grow text-xs font-semibold text-slate-400 uppercase"
    >
      {children}
    </label>
  );
}

export default Label;