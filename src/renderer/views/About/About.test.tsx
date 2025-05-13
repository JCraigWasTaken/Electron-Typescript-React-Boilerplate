import React from "react"
import { render, screen } from "@testing-library/react"
import About from "./About"

describe("Home Component", () => {
    beforeEach(() => {
        render(<About />)
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
        const pageIdentifier = screen.getByText("About Page")
        expect(pageIdentifier).toBeInTheDocument()
    })
})
