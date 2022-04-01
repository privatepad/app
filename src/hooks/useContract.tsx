// import { useContractFunction, useEthers } from "@usedapp/core"
import { ethers } from "ethers"
import useMethod from "./useMethod"

const { abi } = require("../artifacts/contracts/Contract.sol/Contract.json")

function useContract(address: string) {
  // const { account } = useEthers()
  const contract = new ethers.Contract(address, abi)
  
  const owner = useMethod(contract, "owner", [])

  return {
    contract,
    owner,
  }
}

export default useContract;