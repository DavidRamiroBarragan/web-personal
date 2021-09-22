import { render, screen } from "@testing-library/react"
import App from "./App"

describe("basic test", () => {
  it("renders learn react link", () => {
    expect.hasAssertions()
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
