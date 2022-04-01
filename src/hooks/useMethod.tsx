import { useCall } from "@usedapp/core";
import { ethers } from "ethers";

function useMethod(contract: ethers.Contract, method: string, args: any[]) {
  const { value, error } = useCall({
    contract,
    method,
    args
  }) ?? {}
  if (error) {
    // console.error(error.message)
    return undefined
  }
  // console.log(value)
  return value?.[0]
}

export default useMethod;