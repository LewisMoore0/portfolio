import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage } from './pages/Homepage';
import TopAppBar from './components/TopAppbar';
import { createTheme, ThemeProvider } from '@mui/material'
import { Footer } from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ContactForm } from './pages/Contact';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f6e4b',
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

let router = createBrowserRouter([
  {
    path: "/contact",
    element: <ContactForm />
  },
  {
    path: "/",
    element: <HomePage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <TopAppBar />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
  </React.StrictMode>
)



