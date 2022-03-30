import { useCall } from "@usedapp/core";
import { ethers } from "ethers";

function useMethod(contract: ethers.Contract, method: string, args: []) {
  const { value, error } = useCall({
    contract,
    method,
    args
  }) ?? {}
  if (error) {
    // console.error(error)
    return undefined
  }
  return value?.[0]
}

export default useMethod;