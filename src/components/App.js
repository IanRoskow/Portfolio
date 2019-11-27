import React from 'react';
import Header from './Header/HeaderContainer';
import Hero from './Hero';
import About from './About';
import Projects from './Projects/ProjectsContainer';
import Contact from './Contact';
import styled, { ThemeProvider } from 'styled-components';
import { theme1 } from '../utils/theme';

const StyledApp = styled.div`
  scroll-behavior: smooth;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondary3};
  font-size: 16px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme1}>
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
