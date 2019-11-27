import React, { useState } from 'react';
import styled from 'styled-components';
import { Transition, Icon } from 'semantic-ui-react';

const StyledMobileMenu = styled.div`
  &.toggle {
    height: 100px;
  }
  &.toggle > :nth-child(1) {
    transform: rotate(45deg) !important;
    transform-origin: 15px 20px !important;
  }
  &.toggle > :nth-child(2) {
    opacity: 0 !important;
  }
  &.toggle > :nth-child(3) {
    transform: rotate(-45deg) !important;
    transform-origin: 11px 12px !important;
  }
`;

const StyledIcon = styled(Icon)`
  transition: all 0.2s;
  &&&&& {
    width: auto;
    height: auto;
    line-height: 0.3;
    margin: 0;
    display: block;
    transform: rotate(0);
    opacity: 1;
  }
`;

const MenuIcon = styled(Icon)`
  &&&&& {
    color: ${({ theme }) => theme.secondary1};
    margin: 20px auto;
  }
`;

const Menu = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.canvasBackground};
  color: ${({ theme }) => theme.canvasText};
  height: 50px;
  padding-left: 10%;
  transition: opacity 200ms;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
`;

const Item = styled.div`
  float: left;
  font-size: 1.2em;
  padding: 13px 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary1};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  z-index: 10;
  width: 50px;
  background-color: ${({ theme }) => theme.canvasBackground};
  color: ${({ theme }) => theme.canvasText};
  height: auto;
  right: 15px;
  top: 15px;
  border-radius: 5px;
  text-align: center;
  transition: opacity 200ms;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
`;

const scrollPage = position => {
  let height = window.innerHeight;

  const desktop = {
    home: 0,
    about: 20,
    projects: 950,
    contact: 3320
  };

  const mobile = {
    home: 0,
    about: 20,
    projects: 1612,
    contact: 5023
  };

  let goto = window.innerWidth > 780 ? desktop[position] : mobile[position];

  goto = goto ? goto + height : goto;

  window.scroll({
    top: goto,
    left: 0,
    behavior: 'smooth'
  });
};

const Header = () => {
  const [active, setActive] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 780);
  const [inCanvas, setLocation] = useState(window.scrollY < window.innerHeight);

  window.addEventListener('resize', () => {
    let size = window.innerWidth > 780;
    if (isDesktop !== size) {
      setDesktop(!isDesktop);
    }
  });

  window.addEventListener('scroll', () => {
    let location = window.scrollY < window.innerHeight;
    if (inCanvas !== location) {
      setLocation(!inCanvas);
    }
    if (active) {
      setActive(!active);
    }
  });

  const MenuBar = isDesktop ? (
    <Menu className={inCanvas ? 'hidden' : ''}>
      <Item onClick={() => scrollPage('home')}>Home</Item>
      <Item onClick={() => scrollPage('about')}>About</Item>
      <Item onClick={() => scrollPage('projects')}>Projects</Item>
      <Item onClick={() => scrollPage('contact')}>Contact</Item>
    </Menu>
  ) : (
    <MobileMenu className={inCanvas ? 'hidden' : ''}>
      <StyledMobileMenu
        className={active ? 'toggle' : ''}
        onClick={() => setActive(!active)}
        style={{ height: '50px' }}
      >
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
      </StyledMobileMenu>
      <Transition visible={active} animation='fade down' duration={500}>
        <MenuIcon
          name='home'
          size='big'
          onClick={() => {
            setActive(!active);
            scrollPage('home');
          }}
        />
      </Transition>
      <Transition visible={active} animation='fade down' duration={500}>
        <MenuIcon
          name='user circle outline'
          size='big'
          onClick={() => {
            setActive(!active);
            scrollPage('about');
          }}
        />
      </Transition>
      <Transition visible={active} animation='fade down' duration={500}>
        <MenuIcon
          name='file code outline'
          size='big'
          onClick={() => {
            setActive(!active);
            scrollPage('projects');
          }}
        />
      </Transition>
      <Transition visible={active} animation='fade down' duration={500}>
        <MenuIcon
          name='mail outline'
          size='big'
          onClick={() => {
            setActive(!active);
            scrollPage('contact');
          }}
        />
      </Transition>
    </MobileMenu>
  );
  return MenuBar;
};

export default Header;
