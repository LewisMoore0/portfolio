import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/Homepage';
import TopAppBar from './components/TopAppbar';
import { About } from './pages/About';
import { createTheme, ThemeProvider } from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />
  }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#4c6ffc',
    },
    secondary: {
      main: '#9ca697',
    },
    background: {
      default: '#fffff',
      paper: '#fffff'
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <TopAppBar />
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
