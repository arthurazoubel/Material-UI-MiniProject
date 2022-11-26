import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/Create';
import Layout from './components/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, brown } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: amber,
    secondary: brown,
    contrastThreshold: 4.5
  },
  typography: {
    fontFamily: 'Patrick Hand',
    fontSize: 18,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
