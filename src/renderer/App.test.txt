import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock("./AppRouter", () => () => <div>AppRouter</div>)

describe("App Component", () => {
    beforeEach(() => {
        render(<App />)
    })

    test("renders app title", () => {
        expect(screen.getByText("Electron TypeScript React App")).toBeInTheDocument()
    })

    test("renders navigation buttons", () => {
        expect(screen.getByText("Home")).toBeInTheDocument()
        expect(screen.getByText("About")).toBeInTheDocument()
    })

    test("renders the router", () => {
        expect(screen.getByText("AppRouter")).toBeInTheDocument()
    })
})
