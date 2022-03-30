function Admin() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="py-8 text-2xl font-semibold text-slate-900">Admin</h1>
        </div>
        <div>
          <div className="bg-slate-100 border rounded-lg text-slate-400 text-xs p-2">
            <span className="mr-1 text-slate-900">Factory</span>{process.env.REACT_APP_FACTORY_ADDRESS}</div>
        </div>
      </div>
    </div>
  )
}

export default Admin;