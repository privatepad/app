import Connect from "../dapp/Connect";
import Menu from "./Menu";

function Header() {
  return (
    <div className="py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 border-b">
      <div className="container mx-auto px-16">
        <div className="flex justify-between items-center">
          <Menu />
          <Connect />
        </div>
      </div>
    </div>
  )
}

export default Header;