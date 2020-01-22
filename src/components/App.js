import React, { useState, useEffect } from 'react';
import Header from './Header/HeaderContainer';
import Hero from './Hero';
import About from './About';
import Projects from './Projects/ProjectsContainer';
import Contact from './Contact';
import styled, { ThemeProvider } from 'styled-components';
import { theme1, theme2 } from '../utils/theme';

const StyledApp = styled.div`
  scroll-behavior: smooth;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.text2};
  background-color: ${({ theme }) => theme.defaultBackground};
  transition: all 0.35s linear;
  font-size: 16px;
  position: relative;
`;

const StyledButton = styled.button`
  position: fixed;
  z-index: 50;
  right: 14px;
  top: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    right: 20px;
    top: 12px;
    padding: 0;
  }

  &:focus {
    outline: none;
  }

  & > .sun {
    display: ${props => (props.sun ? 'block' : 'none')};
    background-color: dodgerblue;
  }
  & > .moon {
    display: ${props => (!props.sun ? 'block' : 'none')};
  }
`;

const App = () => {
  const [themeStyle, setThemeStyle] = useState(theme1);
  const [sun, setSun] = useState(false);

  const setLight = () => {
    setThemeStyle(theme1);
    setSun(false);
    localStorage.setItem('mode', 'light');
  };

  const setDark = () => {
    setThemeStyle(theme2);
    setSun(true);
    localStorage.setItem('mode', 'dark');
  };

  const checkMode = () => {
    if (localStorage.getItem('mode') === 'light') {
      setLight();
    } else if (localStorage.getItem('mode') === 'dark') {
      setDark();
    } else {
      setLight();
    }
  };

  useEffect(() => {
    checkMode();
  }, []);

  const toggle = () => {
    if (localStorage.getItem('mode') === 'light') {
      setDark();
    } else if (localStorage.getItem('mode') === 'dark') {
      setLight();
    } else {
      setLight();
    }
  };

  return (
    <ThemeProvider theme={themeStyle}>
      <>
        <StyledApp>
          <StyledButton
            aria-label='theme toggle'
            sun={sun}
            id='theme'
            onClick={() => toggle()}
          >
            <i className='yellow circular sun icon'></i>
            <i className='inverted circular moon icon'></i>
          </StyledButton>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </StyledApp>
      </>
    </ThemeProvider>
  );
};

export default App;
