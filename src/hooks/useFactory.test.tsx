import useFactory from "./useFactory"

const account = "0x000000000000000000000000000000000000dead"
const value = 1

jest.mock("@usedapp/core", () => {
  return {
    ...jest.requireActual("@usedapp/core"),
    useEthers: () => {
      return {
        account
      };
    },
    useContractFunction: jest.fn()
  };
});

jest.mock("./useMethod", () => { 
  return jest.fn(() => ({
    useMethod: () => value
  }))
})

test('useFactory', () => {
  const { factory } = useFactory()
  expect(factory.address).toEqual("0x000000000000000000000000000000000000dead")
})