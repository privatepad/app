import { useContractFunction } from "@usedapp/core";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useFactory from "../../hooks/useFactory";
import useMethod from "../../hooks/useMethod";
import Error from "./Error";
import Input from "./Input";
import Label from "./Label";

function Form() {

  const navigate = useNavigate()

  const factory = useFactory()

  const { state, events, send } = useContractFunction(factory, "createInstance", {
    transactionName: "Create Instance",
  });

  const fee: ethers.BigNumberish = useMethod(factory, "fee", []);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (!events || events?.length < 1) return
    const event = events[events?.length-1]
    if (event.name.localeCompare("ContractCreated") === 0) {
      const poolId = event.args.contractAddress
      navigate(`/pools/${poolId}`)
    }
  }, [events, navigate])

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data)
    await send({
      value: fee,
    })
  })

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" attributes={{...register("name", { required: true })}} />
            {errors.name?.type === 'required' && <Error message="Name is required."/>}
          </div>

          <div className="flex flex-col gap-2">
            {fee && <Label htmlFor="submit"><>Fee: {ethers.utils.formatEther(fee)}</></Label>}
            <button type="submit" className="px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg w-full uppercase font-semibold">Create My Pool</button>
          </div>

        </form>
      </div>
      <div className="text-xs">
      <p className="font-semibold uppercase">State</p>
        <code>{JSON.stringify(state)}</code>
        <p className="font-semibold uppercase">Events</p>
        <code>{JSON.stringify(events)}</code>
      </div>
    </div>
  );
}

export default Form;
