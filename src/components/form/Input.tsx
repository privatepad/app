import { ReactChild } from "react";

interface IInput {
  id: string;
  attributes: {};
}

function Input({ id, attributes }: IInput) {
  return (
    <input
      id={id}
      {...attributes}
      className="px-4 py-2 bg-slate-100 rounded-lg w-full"
    />
  );
}

export default Input