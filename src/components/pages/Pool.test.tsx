import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Pool from "./Pool"

const addr = "0x000000000000000000000000000000000000dead"

function Wrapper() {
  return (
    <MemoryRouter initialEntries={[`/pools/${addr}`]}>
      <Routes>
        <Route path="/pools/:poolId" element={<Pool />} />
      </Routes>
    </MemoryRouter>
  )
}

test("pool", () => {
  render(<Wrapper />)
  expect(screen.getByText(addr))
})