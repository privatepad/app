import { shortenIfAddress } from "@usedapp/core"
import { ReactChild } from "react"
import useContract from "../../hooks/useContract"

interface IPoolItem {
  address: string
  adminView: boolean
}

interface ITD {
  children: ReactChild
}

function TD({ children }: ITD) {
  return (
    <td className="py-4">{children}</td>
  )
}

function PoolItem({ address, adminView }: IPoolItem) {

  const { owner } = useContract(address)

  return (
    <tr className="text-sm">
      <TD>{address}</TD>
      { adminView && <TD>{owner}</TD> }
    </tr>
  )
}

export default PoolItem