import useFactory from "../../hooks/useFactory";
import PoolList from "../lists/PoolList";

function Pools() {

  const { getMemberInstances } = useFactory()

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="py-8 text-2xl font-semibold text-slate-900">Pools</h1>
        </div>
      </div>
      <div className="bg-white rounded-xl border p-8">
        <PoolList addressList={getMemberInstances} />
      </div>
    </div>
  )
}

export default Pools;