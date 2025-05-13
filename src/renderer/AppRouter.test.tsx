import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import AppRouter from "./AppRouter"

jest.mock("./views/Home/Home", () => () => <div>Home</div>)
jest.mock("./views/About/About", () => () => <div>About</div>)

describe("AppRouter Component", () => {
    test("renders Home component for / route", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <AppRouter />
            </MemoryRouter>
        )
        expect(screen.getByText("Home")).toBeInTheDocument()
    })

    test("renders About component for /about route", () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <AppRouter />
            </MemoryRouter>
        )
        expect(screen.getByText("About")).toBeInTheDocument()
    })
})
