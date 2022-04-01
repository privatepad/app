import { useContractFunction, useEthers } from "@usedapp/core"
import { ethers } from "ethers"
import useMethod from "./useMethod"

const { abi } = require("../artifacts/contracts/Factory.sol/Factory.json")
const factoryAddress = process.env.REACT_APP_FACTORY_ADDRESS || "0x000000000000000000000000000000000000dead"

function useFactory() {
  const { account } = useEthers()
  const factory = new ethers.Contract(factoryAddress, abi)

  const fee: ethers.BigNumberish = useMethod(factory, "fee", [])
  
  const createInstance = useContractFunction(factory, "createInstance", {
    transactionName: "Create Instance",
  });
  
  const setFee = useContractFunction(factory, "setFee", {
    transactionName: "Set Fee",
  });
  
  // readOnly
  const DEFAULT_ADMIN_ROLE = useMethod(factory, "DEFAULT_ADMIN_ROLE", [])
  const instanceCount = useMethod(factory, "instanceCount", [])
  const getInstances: string[] = useMethod(factory, "getInstances", [])
  const getMemberInstances: string[] = useMethod(factory, "getMemberInstances", [account])

  const isAdmin = useMethod(factory, "hasRole", [DEFAULT_ADMIN_ROLE, account])

  return {
    factory,
    DEFAULT_ADMIN_ROLE,
    fee,
    createInstance,
    setFee,
    instanceCount,
    getInstances,
    getMemberInstances,
    isAdmin
  }
}

export default useFactory;