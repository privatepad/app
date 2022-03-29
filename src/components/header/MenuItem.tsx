import { ReactChild } from "react";
import { Link } from "react-router-dom";

type IMenuCondition = {
  method: string,
  args: []
}

export type IMenuItem = {
  children: ReactChild;
  to: string;
  conditions: IMenuCondition[]
}

function MenuItem({ children, to, conditions }: IMenuItem) {
  return(
    <Link to={to}>
      <button className="hover:text-slate-600 hover:underline">{children}</button>
    </Link>
  )
}

export default MenuItem;