import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const contractAddress = "0x123000000000000000000000000000000000dead";

function Wrapped() {
  return (
    <MemoryRouter>
      <Form />
    </MemoryRouter>
  );
}

jest.mock("@usedapp/core", () => {
  return {
    ...jest.requireActual("@usedapp/core"),
    useContractFunction: () => {
      const { useState } = require("react");
      const [events, setEvents] = useState([]);
      return {
        send: jest.fn(() =>
          setEvents([
            {
              name: "ContractCreated",
              args: {
                contractAddress,
              },
            },
          ])
        ),
        events,
        status: {},
      };
    },
    useCall: jest.fn()
  };
});

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("form", () => {
  it("errors", async () => {
    render(<Wrapped />);
    userEvent.click(screen.getByText(/Create My Pool/));

    await waitFor(() => {
      expect(screen.getByText(/Name is required/)).toBeInTheDocument();
    });
  });

  it("submits", async () => {

    render(<Wrapped />);

    const input = screen.getByLabelText("Name");
    await userEvent.click(input);
    await userEvent.keyboard("foo");
    userEvent.click(screen.getByText(/Create My Pool/));

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith(`/pools/${contractAddress}`)
    });
  });
});
