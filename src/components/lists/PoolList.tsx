import PoolItem from "./PoolItem"

interface IPoolList {
  addressList: string[]
}

function PoolList({ addressList }: IPoolList) {
  return (
    <table>
      <thead>
        <tr className="text-xs uppercase text-slate-400 font-semibold">
          <td>Contract</td>
        </tr>
      </thead>
      <tbody>
        {addressList && addressList.map((address, key) => <PoolItem key={key} address={address} />)}
      </tbody>
    </table>
  )
}

export default PoolList