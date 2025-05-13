import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import About from "./views/About/About"

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRouter
