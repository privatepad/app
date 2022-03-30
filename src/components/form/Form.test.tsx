import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Config, DAppProvider, Hardhat } from "@usedapp/core";
import Form from "./Form";

const config: Config = {
  readOnlyChainId: Hardhat.chainId,
  readOnlyUrls: {
    [Hardhat.chainId]: process.env.REACT_APP_HARDHAT_RPC_ENDPOINT || "",
  },
};

function Wrapped() {
  return (
    <MemoryRouter>
      {/* <DAppProvider config={config}> */}
        <Form />
      {/* </DAppProvider> */}
    </MemoryRouter>
  );
}

jest.mock("@usedapp/core", () => {
  return ({
    ...jest.requireActual("@usedapp/core"),
    useContractFunction: () => {
      const { useState } = require("react")
      const [events, setEvents] = useState([])
      return({
        send: jest.fn(() => setEvents([
          {
            name: "ContractCreated",
            args: {
              contractAddress: "0x000000000000000000000000000000000000dead"
            }
          }
        ])),
        events,
        status: {},
      })
    }
  })
})

test("submit", async () => {
  render(<Wrapped />)
  userEvent.click(screen.getByText(/Create My Pool/));

  await waitFor(() => {
    expect(true).toBe(true)
  })
})

// Mock useContractFunction.send
// send should mock a ContractCreated event