import { ethers } from "ethers";
import useFactory from "../../hooks/useFactory";
import FeeForm from "../admin/FeeForm";
import PoolList from "../lists/PoolList";

function Admin() {
  const { instanceCount, getInstances } = useFactory()

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="py-8 text-2xl font-semibold text-slate-900">
            <span className="mr-1">All Pools</span>
            {instanceCount && (
              <span>({ethers.utils.formatUnits(instanceCount, 0)})</span>
            )}
          </h1>
        </div>
        <div>
          <div className="bg-slate-100 border rounded-lg text-slate-400 text-xs p-2">
            <span className="mr-1 text-slate-900">Factory</span>
            {process.env.REACT_APP_FACTORY_ADDRESS}
          </div>
        </div>
      </div>
      <div>
        <FeeForm />
      </div>
      <div className="bg-white rounded-xl border p-8">
        <PoolList addressList={getInstances} adminView={true} />
      </div>
    </div>
  );
}

export default Admin;
