import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Config, DAppProvider, Hardhat } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Hardhat.chainId,
  readOnlyUrls: {
    [Hardhat.chainId]: process.env.REACT_APP_HARDHAT_RPC_ENDPOINT || "",
  },
};

function RouteredRender() {
  return (
    <MemoryRouter>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </MemoryRouter>
  );
}

test("full app rendering/navigating", async () => {
  render(<RouteredRender />);

  const outlet = screen.getByTestId("outlet");
  expect(within(outlet).getByText(/Home/)).toBeInTheDocument();

  const nav = screen.getByTestId("nav");
  await userEvent.click(within(nav).getByText(/My Pools/));
  expect(within(outlet).getByText(/My Pools/)).toBeInTheDocument();

  await userEvent.click(within(nav).getByText(/Create Pool/));
  expect(within(outlet).getByText(/Create Pool/)).toBeInTheDocument();

  await userEvent.click(within(nav).getByText(/All Pools/));
  expect(within(outlet).getByText(/All Pools/)).toBeInTheDocument();
});
