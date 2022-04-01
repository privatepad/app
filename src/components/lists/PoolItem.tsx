import { shortenIfAddress } from "@usedapp/core"

interface IPoolItem {
  address: string
}

function PoolItem({ address }: IPoolItem) {
  return (
    <tr className="text-sm">
      <td className="py-4">{shortenIfAddress(address)}</td>
    </tr>
  )
}

export default PoolItem