import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Connect from "./Connect";

const mockAccount = "0x000000000000000000000000000000000000dead"

jest.mock("@usedapp/core", () => {
  return ({
    ...jest.requireActual("@usedapp/core"),
    useEthers: () => {
      const { useState } = require("react")
      const [account, setAccount] = useState(null)
      return({
        activateBrowserWallet: jest.fn(() => setAccount(mockAccount)),
        account,
        deactivate: jest.fn(() => setAccount(null)),
      })
    }
  })
})

test("dapp connection", async () => {
  render(<Connect />)
  await userEvent.click(screen.getByText(/Connect/))
  expect(screen.getByText(/Disconnect/)).toBeInTheDocument()
  await userEvent.click(screen.getByText(/Disconnect/))
  expect(screen.getByText(/Connect/)).toBeInTheDocument()
})