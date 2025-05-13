import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe("Home Component", () => {
    beforeEach(() => {
        render(<Home />)
    })

    test("renders welcome message", () => {
        const welcomeElement = screen.getByText("Welcome to Your Electron App")
        expect(welcomeElement).toBeInTheDocument()
    })

    test("renders description text", () => {
        const descriptionElement = screen.getByText(/This is a modern Electron application/i)
        expect(descriptionElement).toBeInTheDocument()
    })

    test("displays page identifier", () => {
        const pageIdentifier = screen.getByText("Home Page")
        expect(pageIdentifier).toBeInTheDocument()
    })
})
