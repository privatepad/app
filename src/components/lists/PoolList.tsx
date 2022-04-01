import PoolItem from "./PoolItem"

interface IPoolList {
  addressList: string[]
  adminView: boolean
}

function PoolList({ addressList, adminView }: IPoolList) {

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-xs uppercase text-slate-400 font-semibold">
          <td>Contract</td>
          { adminView && <td>Owner</td> }
        </tr>
      </thead>
      <tbody>
        { addressList && addressList.map((address, key) => <PoolItem key={key} address={address} adminView={adminView} />) }
      </tbody>
    </table>
  )
}

export default PoolList