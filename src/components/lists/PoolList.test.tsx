import { render, screen } from "@testing-library/react"
import PoolList from "./PoolList"

const arr = [
  "0x000000000000000000000000000000000000dead",
  "0x123000000000000000000000000000000000dead",
  "0x456000000000000000000000000000000000dead",
  "0x789000000000000000000000000000000000dead",
]

describe("PoolList", () => {

  test("basic", () => {
    render(<PoolList addressList={arr} adminView={false} />)

    expect(screen.getByText(/0x0000/)).toBeInTheDocument()
    expect(screen.getByText(/0x1230/)).toBeInTheDocument()
    expect(screen.getByText(/0x4560/)).toBeInTheDocument()
    expect(screen.getByText(/0x7890/)).toBeInTheDocument()
    expect(screen.queryByText(/Owner/)).toBeNull()
  })

  test("admin", () => {
    render(<PoolList addressList={arr} adminView={true} />)

    expect(screen.getByText(/0x0000/)).toBeInTheDocument()
    expect(screen.getByText(/0x1230/)).toBeInTheDocument()
    expect(screen.getByText(/0x4560/)).toBeInTheDocument()
    expect(screen.getByText(/0x7890/)).toBeInTheDocument()
    expect(screen.getByText(/Owner/)).toBeInTheDocument()
  })
})