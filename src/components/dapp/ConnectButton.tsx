import { ReactChild } from "react";

type IButton = {
  fn: () => void;
  children: ReactChild;
};

function ConnectButton({ fn, children }: IButton) {
  return (
    <button
      onClick={fn}
      className="bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-600 px-4 py-2 rounded-lg uppercase text-sm font-semibold"
    >
      {children}
    </button>
  );
}

export default ConnectButton;