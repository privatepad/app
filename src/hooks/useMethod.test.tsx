import { Call } from "@usedapp/core";
import { Contract, ethers } from "ethers";
import useMethod from "./useMethod";

const contract = new Contract("0x000000000000000000000000000000000000dead", []);

jest.mock("@usedapp/core", () => {
  return {
    ...jest.requireActual("@usedapp/core"),
    useCall: ({ method }: Call) => {
      if (method.localeCompare("error") === 0) {
        return {
          error: new Error("Example error message."),
        };
      }
      return {
        value: [17],
      };
    },
  };
});

test("useMethod", () => {
  let result;

  result = useMethod(contract, "method", []);
  expect(result).toEqual(17);

  result = useMethod(contract, "error", []);
  expect(result).toEqual(undefined);
});
