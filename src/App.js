import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import Container from '@mui/material/Container';
import Routes from './Routes';
import {
  Header, 
  Footer
} from './components/header-footer'
import { useDarkMode } from './util/useDarkMode'
import { lightTheme, darkTheme } from './css/theme';
import { GlobalStyles } from './css/global';
import './App.css';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [gyroBalance, setGyroBalance] = useState(0);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {console.log(gyroBalance)}, [gyroBalance])
  if (!componentMounted) {
    return <div />
  };

  return (
      <ThemeProvider theme={themeMode}>
        <Container maxWidth="md">
          <GlobalStyles />
          <Header theme={theme}/>
          <Routes gyroBalance = {gyroBalance}/>
          <Footer theme={theme} toggleTheme={toggleTheme} setGyroBalance={setGyroBalance} gyroBalance={gyroBalance}/>
        </Container>
      </ThemeProvider>
  );
}

export default App;
