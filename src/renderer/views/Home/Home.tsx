import React from "react"
import { Container, Typography, Paper } from "@mui/material"

const Home: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Your Electron App
                </Typography>
                <Typography variant="body1">
                    This is a modern Electron application built with React, TypeScript, and Material
                    UI. Start customizing this template to create your amazing desktop application!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Home Page
                </Typography>
            </Paper>
        </Container>
    )
}
export default Home
