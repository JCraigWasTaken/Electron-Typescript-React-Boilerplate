import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Electron TypeScript React App
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Your Electron App
          </Typography>
          <Typography variant="body1" paragraph>
            This is a modern Electron application built with React, TypeScript, and
            Material UI. Start customizing this template to create your amazing desktop application!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Electron Application
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
