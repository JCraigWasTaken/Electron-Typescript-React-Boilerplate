// Polyfill global
if (typeof global === "undefined") {
    window.global = window
}

import React from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"

// Create a theme instance
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
    },
})

// Create root element
const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")
const root = createRoot(rootElement)

// Render app
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
