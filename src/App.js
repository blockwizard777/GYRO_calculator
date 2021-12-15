import React from 'react';
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
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Container maxWidth="md">
        <GlobalStyles />
        <Header theme={theme}/>
        <Routes/>
        <Footer theme={theme} toggleTheme={toggleTheme}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
