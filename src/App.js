import logo from './logo.svg';
import './App.css';
import TopAppBar from './components/TopAppbar';
import { IntroductionCard } from './components/IntroductionCard';
import { Box, useTheme, createTheme, ThemeProvider } from '@mui/material'
import { HomePage } from './pages/Homepage';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#083d32',
      },
      secondary: {
        main: '#9ca697',
      },
      background: {
        default: '#6b8a72',
        paper: '#b0c2b4'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <TopAppBar />
          <HomePage />
      </div>
    </ThemeProvider>

  );
}

export default App;
