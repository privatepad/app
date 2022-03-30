import { useParams } from "react-router-dom";

function Pool() {
  const { poolId } = useParams();

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="py-8 text-2xl font-semibold text-slate-900">
            <span className="mr-2">Pool</span>
            <code className="text-slate-300">{poolId}</code>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Pool;