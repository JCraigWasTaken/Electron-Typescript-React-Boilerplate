import React from "react"
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material"
import { HashRouter, Link } from "react-router-dom"
import AppRouter from "./AppRouter"

const App: React.FC = () => {
    return (
        <HashRouter>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Electron TypeScript React App
                        </Typography>
                        <Button color="inherit" component={Link} to="/">
                            Away
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            About
                        </Button>
                    </Toolbar>
                </AppBar>
                <AppRouter />
            </Box>
        </HashRouter>
    )
}

export default App
