import Form from "../form/Form";

function Create() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="py-8 text-2xl font-semibold text-slate-900">Create Pool</h1>
        </div>
      </div>

      <div className="bg-white rounded-xl border p-8">
        <Form />
      </div>
    </div>
  )
}

export default Create;