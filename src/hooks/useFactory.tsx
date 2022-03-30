import { ethers } from "ethers"

const { abi } = require("../artifacts/contracts/Factory.sol/Factory.json")
const factoryAddress = process.env.REACT_APP_FACTORY_ADDRESS || "0x000000000000000000000000000000000000dead"

function useFactory() {
  const factory = new ethers.Contract(factoryAddress, abi)
  return factory
}

export default useFactory;