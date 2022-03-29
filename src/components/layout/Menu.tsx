import MenuItem, { IMenuItem } from "./MenuItem"

const menu: IMenuItem[] = [
  {
    children: <div className="font-semibold antialiased">PrivatePad</div>,
    to: "/",
    conditions: []
  },
  {
    children: "Pools",
    to: "/pools",
    conditions: []
  },
  {
    children: "Create Pool",
    to: "/create",
    conditions: []
  },
  {
    children: "Admin",
    to: "/admin",
    conditions: [
      {
        method: "hasRole",
        args: []
      }
    ]
  },
]

function Menu() {
  return (
    <div className="flex items-center gap-8" data-testid="nav">
      {menu.map(({ children, to, conditions }, key) => <MenuItem to={to} conditions={conditions} key={key}>{children}</MenuItem>)}
    </div>
  )
}

export default Menu;