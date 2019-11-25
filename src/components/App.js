import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects';
import Contact from './Contact';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary1: '#7495ad',
  primary2: '#567a94',
  secondary4: '#b0a296',
  secondary2: '#938e94',
  secondary3: '#5d5c61',
  secondary1: '#c49f6f',
  defaultText: 'black',
  defaultBackground: 'white',
  canvasText: 'white',
  canvasBackground: '#2c343f',
  font: 'Raleway'
};

const StyledApp = styled.div`
  scroll-behavior: smooth;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondary3};
`;
//import '../assets/css/App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
